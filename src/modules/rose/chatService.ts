// @ts-nocheck
import $http from '../../plugins/axios'

export default {
    /**
     * Envoyer un message au chatbot
     * @param {Object} data - { message, session_id, conversation_id? }
     */
    sendMessage(data) {
        return $http.post('chat/send_message/', data)
    },

    /**
     * Récupérer les réponses rapides disponibles
     */
    getQuickReplies() {
        return $http.get('chat/quick_replies/')
    },

    /**
     * Lister les conversations
     * @param {Object} params - { session_id?, page?, page_size? }
     */
    getConversations(params = {}) {
        return $http.get('conversations/', { params })
    },

    /**
     * Récupérer une conversation par ID avec ses messages
     * @param {number} id - ID de la conversation
     */
    getConversationById(id) {
        return $http.get(`conversations/${id}/`)
    },

    /**
     * Créer une nouvelle conversation
     * @param {Object} data - { session_id, title? }
     */
    createConversation(data) {
        return $http.post('conversations/', data)
    },

    /**
     * Supprimer une conversation
     * @param {number} id - ID de la conversation
     */
    deleteConversation(id) {
        return $http.delete(`conversations/${id}/`)
    },

    /**
     * Soumettre un feedback pour un message
     * @param {Object} data - { message_id, rating, comment? }
     */
    submitFeedback(data) {
        return $http.post('feedback/', data)
    },

    // ========== RESSOURCES ==========

    /**
     * Récupérer les catégories de ressources
     */
    getResourceCategories() {
        return $http.get('resources/categories/')
    },

    /**
     * Récupérer les ressources
     * @param {Object} params - { category?, type?, search?, page? }
     */
    getResources(params = {}) {
        return $http.get('resources/resources/', { params })
    },

    /**
     * Récupérer une ressource par ID
     * @param {number} id - ID de la ressource
     */
    getResourceById(id) {
        return $http.get(`resources/resources/${id}/`)
    },

    /**
     * Récupérer les ressources à proximité
     * @param {Object} params - { latitude, longitude, radius, category? }
     */
    getNearbyResources(params) {
        return $http.get('resources/resources/nearby/', { params })
    },

    /**
     * Récupérer les contacts d'urgence
     */
    getEmergencyContacts() {
        return $http.get('resources/emergency/')
    }
}
