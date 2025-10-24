// @ts-nocheck
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import chatService from "./chatService";

export const useChatStore = defineStore('chat', () => {
    
    // ========== STATE ==========
    const messages = ref([]);
    const conversations = ref([]);
    const currentConversation = ref(null);
    const quickReplies = ref([]);
    const loading = ref(false);
    const sending = ref(false);
    const error = ref(null);
    const sessionId = ref(null);

    // Resources
    const resources = ref([]);
    const resourceCategories = ref([]);
    const emergencyContacts = ref([]);
    const loadingResources = ref(false);

    // Pagination
    const pagination = ref({
        page: 1,
        pageSize: 20,
        total: 0,
        hasNext: false,
        hasPrevious: false
    });

    // ========== COMPUTED ==========
    const hasMessages = computed(() => messages.value.length > 0);
    
    const lastMessage = computed(() => {
        return messages.value.length > 0 
            ? messages.value[messages.value.length - 1] 
            : null;
    });

    const userMessages = computed(() => {
        return messages.value.filter(m => m.role === 'user');
    });

    const botMessages = computed(() => {
        return messages.value.filter(m => m.role === 'assistant');
    });

    // ========== ACTIONS ==========

    /**
     * Générer un ID de session unique
     */
    function generateSessionId() {
        if (!sessionId.value) {
            sessionId.value = `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
            // Sauvegarder dans le localStorage
            localStorage.setItem('chat_session_id', sessionId.value);
        }
        return sessionId.value;
    }

    /**
     * Initialiser le chat (charger les réponses rapides et la conversation)
     */
    async function initializeChat() {
        loading.value = true;
        error.value = null;

        try {
            // Récupérer le session_id du localStorage
            const savedSessionId = localStorage.getItem('chat_session_id');
            if (savedSessionId) {
                sessionId.value = savedSessionId;
            } else {
                generateSessionId();
            }

            // Charger les réponses rapides
            await fetchQuickReplies();

            // Charger la dernière conversation si elle existe
            await loadLastConversation();

            // Message de bienvenue du bot si pas de conversation
            if (messages.value.length === 0) {
                addWelcomeMessage();
            }

        } catch (err) {
            error.value = err.message || 'Erreur lors de l\'initialisation';
            console.error('Init error:', err);
        } finally {
            loading.value = false;
        }
    }

    /**
     * Ajouter un message de bienvenue
     */
    function addWelcomeMessage() {
        const welcomeMessage = {
            id: 'welcome-' + Date.now(),
            role: 'assistant',
            content: 'Bonjour ! 🎀 Je suis Rose, votre assistante pour la sensibilisation au cancer du sein. Comment puis-je vous aider aujourd\'hui ?',
            message_type: 'text',
            created_at: new Date().toISOString(),
            local: true // Message local, pas envoyé au backend
        };
        messages.value.push(welcomeMessage);
    }

    /**
     * Charger les réponses rapides
     */
    async function fetchQuickReplies() {
        try {
            const response = await chatService.getQuickReplies();
            quickReplies.value = response.data.map(qr => ({
                id: qr.id,
                text: qr.text,
                value: qr.text,
                category: qr.category,
                icon: getCategoryIcon(qr.category)
            }));
            return response.data;
        } catch (err) {
            console.error('Error fetching quick replies:', err);
            error.value = err.message;
            throw err;
        }
    }

    /**
     * Charger la dernière conversation
     */
    async function loadLastConversation() {
        try {
            const response = await chatService.getConversations({
                session_id: sessionId.value,
                page_size: 1
            });

            if (response.data.results && response.data.results.length > 0) {
                const lastConv = response.data.results[0];
                currentConversation.value = lastConv;

                // Charger les messages de cette conversation
                const convDetails = await chatService.getConversationById(lastConv.id);
                messages.value = convDetails.data.messages.map(formatMessage);
            }
        } catch (err) {
            console.error('Error loading last conversation:', err);
            // Pas d'erreur critique, on continue
        }
    }

    /**
     * Envoyer un message
     */
    async function sendMessage(messageText) {
        if (!messageText?.trim()) return;

        sending.value = true;
        error.value = null;

        // Ajouter le message utilisateur immédiatement (optimistic update)
        const userMessage = {
            id: 'temp-' + Date.now(),
            role: 'user',
            content: messageText,
            message_type: 'text',
            created_at: new Date().toISOString(),
            local: true
        };
        messages.value.push(userMessage);

        try {
            // Envoyer au backend
            const response = await chatService.sendMessage({
                message: messageText,
                session_id: sessionId.value,
                conversation_id: currentConversation.value?.id || null
            });

            console.log('📥 Response from backend:', response.data);

            // Mettre à jour la conversation courante
            if (response.data.conversation_id) {
                if (!currentConversation.value) {
                    currentConversation.value = {
                        id: response.data.conversation_id,
                        session_id: sessionId.value
                    };
                } else if (currentConversation.value.id !== response.data.conversation_id) {
                    currentConversation.value.id = response.data.conversation_id;
                }
            }

            // Vérifier le format de la réponse
            // Le backend peut retourner soit:
            // 1. { message: {...user...}, response: {...bot...} }
            // 2. { message: {...bot avec role="assistant"...} }
            
            let botMessage = null;
            
            if (response.data.response) {
                // Format 1: Champ response séparé
                console.log('📝 Format avec champ response séparé');
                botMessage = formatMessage(response.data.response);
                
                // Mettre à jour le message utilisateur si disponible
                if (response.data.message) {
                    const userMsgIndex = messages.value.findIndex(m => m.id === userMessage.id);
                    if (userMsgIndex !== -1) {
                        messages.value[userMsgIndex] = formatMessage(response.data.message);
                    }
                }
            } else if (response.data.message && response.data.message.role === 'assistant') {
                // Format 2: Le message du bot est directement dans "message"
                console.log('📝 Format avec bot dans le champ message');
                botMessage = formatMessage(response.data.message);
                
                // Marquer le message utilisateur comme confirmé
                const userMsgIndex = messages.value.findIndex(m => m.id === userMessage.id);
                if (userMsgIndex !== -1) {
                    messages.value[userMsgIndex].local = false;
                }
            } else {
                console.error('❌ Format de réponse non reconnu:', response.data);
                throw new Error('Format de réponse invalide du backend');
            }

            // Ajouter la réponse du bot si elle existe
            if (botMessage) {
                messages.value.push(botMessage);
            } else {
                throw new Error('Aucune réponse du bot trouvée');
            }

            // Mettre à jour les quick replies si disponibles
            if (response.data.quick_replies?.length > 0) {
                updateQuickRepliesFromResponse(response.data.quick_replies);
            }

            return response.data;

        } catch (err) {
            console.error('❌ Error sending message:', err);
            error.value = err.message || 'Erreur lors de l\'envoi du message';
            
            // Marquer le message comme erreur
            const msgIndex = messages.value.findIndex(m => m.id === userMessage.id);
            if (msgIndex !== -1) {
                messages.value[msgIndex].error = true;
            }

            // Ajouter un message d'erreur du bot
            messages.value.push({
                id: 'error-' + Date.now(),
                role: 'assistant',
                content: 'Désolé, une erreur s\'est produite. Veuillez réessayer.',
                message_type: 'text',
                created_at: new Date().toISOString(),
                error: true,
                local: true
            });

            throw err;
        } finally {
            sending.value = false;
        }
    }

    /**
     * Envoyer un feedback pour un message
     */
    async function submitFeedback(messageId, rating, comment = "") {
        try {
            const response = await chatService.submitFeedback({
                message_id: messageId,
                rating,
                comment
            });

            // Mettre à jour le message avec le feedback
            const msgIndex = messages.value.findIndex(m => m.id === messageId);
            if (msgIndex !== -1) {
                messages.value[msgIndex].feedback = {
                    rating,
                    comment,
                    submitted: true
                };
            }

            return response.data;
        } catch (err) {
            error.value = err.message || 'Erreur lors de l\'envoi du feedback';
            throw err;
        }
    }

    /**
     * Créer une nouvelle conversation
     */
    async function createNewConversation() {
        try {
            const response = await chatService.createConversation({
                session_id: sessionId.value,
                title: 'Nouvelle conversation'
            });

            currentConversation.value = response.data;
            messages.value = [];
            addWelcomeMessage();

            return response.data;
        } catch (err) {
            error.value = err.message || 'Erreur lors de la création de la conversation';
            throw err;
        }
    }

    /**
     * Charger toutes les conversations de l'utilisateur
     */
    async function fetchConversations(params = {}) {
        loading.value = true;
        error.value = null;

        try {
            const response = await chatService.getConversations({
                session_id: sessionId.value,
                ...params
            });

            conversations.value = response.data.results || response.data;
            
            if (response.data.count !== undefined) {
                pagination.value = {
                    ...pagination.value,
                    total: response.data.count,
                    hasNext: !!response.data.next,
                    hasPrevious: !!response.data.previous
                };
            }

            return response.data;
        } catch (err) {
            error.value = err.message || 'Erreur lors du chargement des conversations';
            throw err;
        } finally {
            loading.value = false;
        }
    }

    /**
     * Charger une conversation spécifique avec ses messages
     */
    async function loadConversation(conversationId) {
        loading.value = true;
        error.value = null;

        try {
            const response = await chatService.getConversationById(conversationId);
            
            currentConversation.value = response.data;
            messages.value = response.data.messages.map(formatMessage);

            return response.data;
        } catch (err) {
            error.value = err.message || 'Erreur lors du chargement de la conversation';
            throw err;
        } finally {
            loading.value = false;
        }
    }

    /**
     * Supprimer une conversation
     */
    async function deleteConversation(conversationId) {
        try {
            await chatService.deleteConversation(conversationId);

            // Retirer de la liste
            conversations.value = conversations.value.filter(c => c.id !== conversationId);

            // Si c'est la conversation courante, la réinitialiser
            if (currentConversation.value?.id === conversationId) {
                currentConversation.value = null;
                messages.value = [];
                addWelcomeMessage();
            }

            return true;
        } catch (err) {
            error.value = err.message || 'Erreur lors de la suppression';
            throw err;
        }
    }

    // ========== RESOURCES ==========

    /**
     * Charger les catégories de ressources
     */
    async function fetchResourceCategories() {
        loadingResources.value = true;
        
        try {
            const response = await chatService.getResourceCategories();
            resourceCategories.value = response.data;
            return response.data;
        } catch (err) {
            console.error('Error fetching categories:', err);
            throw err;
        } finally {
            loadingResources.value = false;
        }
    }

    /**
     * Charger les ressources
     */
    async function fetchResources(params = {}) {
        loadingResources.value = true;
        
        try {
            const response = await chatService.getResources(params);
            resources.value = response.data.results || response.data;
            return response.data;
        } catch (err) {
            console.error('Error fetching resources:', err);
            throw err;
        } finally {
            loadingResources.value = false;
        }
    }

    /**
     * Charger les ressources à proximité
     */
    async function fetchNearbyResources(latitude, longitude, radius = 5, category = null) {
        loadingResources.value = true;
        
        try {
            const params = { latitude, longitude, radius };
            if (category) params.category = category;

            const response = await chatService.getNearbyResources(params);
            return response.data;
        } catch (err) {
            console.error('Error fetching nearby resources:', err);
            throw err;
        } finally {
            loadingResources.value = false;
        }
    }

    /**
     * Charger les contacts d'urgence
     */
    async function fetchEmergencyContacts() {
        try {
            const response = await chatService.getEmergencyContacts();
            emergencyContacts.value = response.data;
            return response.data;
        } catch (err) {
            console.error('Error fetching emergency contacts:', err);
            throw err;
        }
    }

    // ========== HELPERS ==========

    /**
     * Formater un message depuis l'API
     */
    function formatMessage(apiMessage) {
        // Vérifier que apiMessage existe
        if (!apiMessage) {
            console.error('❌ formatMessage: apiMessage is undefined');
            return null;
        }

        // Log pour debug
        console.log('📝 Formatting message:', apiMessage);

        return {
            id: apiMessage.id || 'msg-' + Date.now(),
            role: apiMessage.role || 'assistant',
            content: apiMessage.content || '',
            message_type: apiMessage.message_type || 'text',
            created_at: apiMessage.created_at || new Date().toISOString(),
            metadata: apiMessage.metadata || null,
            feedback: null,
            local: false
        };
    }

    /**
     * Mettre à jour les quick replies depuis la réponse
     */
    function updateQuickRepliesFromResponse(newReplies) {
        quickReplies.value = newReplies.map(qr => ({
            id: qr.id || 'quick-' + Date.now() + Math.random(),
            text: qr.text,
            value: qr.value || qr.text,  // value peut être différent de text
            category: qr.category || 'general',
            icon: getCategoryIcon(qr.category || extractCategoryFromText(qr.text))
        }));
    }

    /**
     * Extraire la catégorie depuis le texte du quick reply
     */
    function extractCategoryFromText(text) {
        const lowerText = text.toLowerCase();
        if (lowerText.includes('symptôme') || lowerText.includes('🩺')) return 'symptomes';
        if (lowerText.includes('dépistage') || lowerText.includes('🔍')) return 'depistage';
        if (lowerText.includes('facteur') || lowerText.includes('risque') || lowerText.includes('❓')) return 'facteurs_risque';
        if (lowerText.includes('autopalpation') || lowerText.includes('📋')) return 'auto_examen';
        if (lowerText.includes('prévention')) return 'prevention';
        if (lowerText.includes('traitement')) return 'traitement';
        if (lowerText.includes('soutien') || lowerText.includes('aide')) return 'soutien';
        if (lowerText.includes('urgence') || lowerText.includes('🚨')) return 'urgence';
        return 'general';
    }

    /**
     * Obtenir l'icône selon la catégorie
     */
    function getCategoryIcon(category) {
        const iconMap = {
            'symptomes': 'stethoscope',
            'depistage': 'search',
            'facteurs_risque': 'alert',
            'auto_examen': 'clipboard',
            'prevention': 'bookmark',
            'traitement': 'user',
            'soutien': 'phone',
            'urgence': 'alert'
        };
        return iconMap[category] || 'book';
    }

    /**
     * Effacer les messages
     */
    function clearMessages() {
        messages.value = [];
        addWelcomeMessage();
    }

    /**
     * Réinitialiser le store
     */
    function $reset() {
        messages.value = [];
        conversations.value = [];
        currentConversation.value = null;
        quickReplies.value = [];
        loading.value = false;
        sending.value = false;
        error.value = null;
        resources.value = [];
        resourceCategories.value = [];
        emergencyContacts.value = [];
        loadingResources.value = false;
        pagination.value = {
            page: 1,
            pageSize: 20,
            total: 0,
            hasNext: false,
            hasPrevious: false
        };
        
        // Ne pas réinitialiser le sessionId pour garder la session
    }

    return {
        // State
        messages,
        conversations,
        currentConversation,
        quickReplies,
        loading,
        sending,
        error,
        sessionId,
        resources,
        resourceCategories,
        emergencyContacts,
        loadingResources,
        pagination,

        // Computed
        hasMessages,
        lastMessage,
        userMessages,
        botMessages,

        // Actions
        initializeChat,
        generateSessionId,
        sendMessage,
        submitFeedback,
        fetchQuickReplies,
        createNewConversation,
        fetchConversations,
        loadConversation,
        deleteConversation,
        clearMessages,
        
        // Resources
        fetchResourceCategories,
        fetchResources,
        fetchNearbyResources,
        fetchEmergencyContacts,

        // Utils
        $reset
    };
});