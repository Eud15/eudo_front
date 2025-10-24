<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center md:p-4">
    <div class="w-full max-w-[428px] h-[844px] bg-white md:rounded-3xl md:shadow-2xl overflow-hidden flex flex-col relative">
      <!-- Header -->
      <header class="bg-gradient-to-r from-[#D91E7E] to-[#FF69B4] text-white px-4 py-4 flex items-center justify-between shadow-md relative z-10">
        <button 
          @click="goBack"
          class="p-2 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Retour"
        >
          <ChevronLeft :size="24" />
        </button>
        
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <Heart :size="18" class="text-[#D91E7E]" />
          </div>
          <h1 class="text-lg font-semibold">Rose Assistant</h1>
        </div>
        
        <button 
          @click="isMenuOpen = true"
          class="p-2 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Menu"
        >
          <Menu :size="24" />
        </button>
      </header>

      <!-- Messages Area -->
      <div 
        ref="messagesContainer"
        class="flex-1 overflow-y-auto p-4 space-y-4 bg-pink-50/30 pt-20 pb-4"
      >
        <!-- Loading State -->
        <div v-if="chatStore.loading && !hasMessages" class="flex justify-center items-center h-full">
          <div class="text-center">
            <div class="inline-block animate-spin rounded-full h-8 w-8 border-4 border-[#D91E7E] border-t-transparent"></div>
            <p class="mt-2 text-gray-500 text-sm">Chargement...</p>
          </div>
        </div>

        <!-- Messages -->
        <div
          v-for="message in chatStore.messages"
          :key="message.id"
          :class="[
            'flex',
            message.role === 'user' ? 'justify-end' : 'justify-start'
          ]"
        >
          <div
            :class="[
              'max-w-[75%] rounded-2xl px-4 py-3 shadow-sm animate-fade-in',
              message.role === 'user'
                ? 'bg-gradient-to-r from-[#D91E7E] to-[#FF69B4] text-white rounded-br-sm'
                : 'bg-white text-gray-800 rounded-bl-sm'
            ]"
          >
            <!-- Bot message with formatting -->
            <RoseFormattedMessage
              v-if="message.role === 'assistant'"
              :type="message.message_type || 'text'"
              :content="parseMessageContent(message)"
              :timestamp="formatTime(message.created_at)"
              @action="handleAction"
            />
            
            <!-- User message -->
            <div v-else>
              <p class="text-sm leading-relaxed">{{ message.content }}</p>
              <span class="text-xs mt-1 block text-pink-100">
                {{ formatTime(message.created_at) }}
              </span>
            </div>

            <!-- Feedback section for bot messages -->
            <div 
              v-if="message.role === 'assistant' && !message.local && !message.feedback?.submitted"
              class="mt-3 pt-3 border-t border-gray-100"
            >
              <p class="text-xs text-gray-500 mb-2">Cette réponse vous a-t-elle été utile ?</p>
              <div class="flex gap-1">
                <button
                  v-for="rating in [1, 2, 3, 4, 5]"
                  :key="rating"
                  @click="submitFeedback(message.id, rating)"
                  class="text-gray-400 hover:text-yellow-400 transition-colors"
                  :title="`${rating} étoile${rating > 1 ? 's' : ''}`"
                >
                  <Star :size="16" :fill="message.feedback?.rating >= rating ? '#FCD34D' : 'none'" />
                </button>
              </div>
            </div>

            <!-- Feedback submitted -->
            <div 
              v-if="message.feedback?.submitted"
              class="mt-2 pt-2 border-t border-gray-100"
            >
              <p class="text-xs text-gray-500">
                ✓ Merci pour votre retour !
              </p>
            </div>

            <!-- Error indicator -->
            <div v-if="message.error" class="mt-2 text-xs text-red-500">
              ⚠ Erreur lors de l'envoi
            </div>
          </div>
        </div>

        <!-- Typing Indicator -->
        <div v-if="chatStore.sending" class="flex justify-start">
          <div class="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
            <div class="flex gap-1">
              <span class="w-2 h-2 bg-[#D91E7E] rounded-full animate-bounce" style="animation-delay: 0ms"></span>
              <span class="w-2 h-2 bg-[#D91E7E] rounded-full animate-bounce" style="animation-delay: 150ms"></span>
              <span class="w-2 h-2 bg-[#D91E7E] rounded-full animate-bounce" style="animation-delay: 300ms"></span>
            </div>
          </div>
        </div>
      </div>

      <!-- Fixed Bottom Section -->
      <div class="bg-white border-t border-pink-100">
        <!-- Quick Replies -->
        <RoseQuickReplies
          v-if="chatStore.quickReplies.length > 0"
          :suggestions="chatStore.quickReplies"
          @select="handleQuickReply"
        />

        <!-- Input Area -->
        <div class="p-4">
          <form @submit.prevent="sendMessage" class="flex gap-2">
            <input
              v-model="inputMessage"
              type="text"
              placeholder="Posez votre question..."
              :disabled="chatStore.sending"
              class="flex-1 px-4 py-3 bg-pink-50 border border-pink-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#D91E7E] focus:border-transparent text-sm disabled:opacity-50"
            />
            <button
              type="submit"
              :disabled="!inputMessage.trim() || chatStore.sending"
              class="p-3 bg-gradient-to-r from-[#D91E7E] to-[#FF69B4] text-white rounded-full hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Envoyer"
            >
              <Send :size="20" />
            </button>
          </form>

          <!-- Error Message -->
          <div v-if="chatStore.error" class="mt-2 p-2 bg-red-50 border border-red-200 rounded-lg">
            <p class="text-xs text-red-600">{{ chatStore.error }}</p>
          </div>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <Teleport to="body">
        <Transition name="sidebar">
          <div
            v-if="isMenuOpen"
            class="fixed inset-0 z-50 flex justify-end"
            @click.self="isMenuOpen = false"
          >
            <!-- Overlay -->
            <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            
            <!-- Sidebar -->
            <div class="relative w-[280px] h-full bg-white shadow-2xl flex flex-col">
              <!-- Sidebar Header -->
              <div class="bg-gradient-to-r from-[#D91E7E] to-[#FF69B4] text-white p-6">
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <Heart :size="20" class="text-[#D91E7E]" />
                    </div>
                    <div>
                      <h2 class="font-semibold text-lg">Rose Assistant</h2>
                      <p class="text-xs text-pink-100">Votre compagnon santé</p>
                    </div>
                  </div>
                  <button
                    @click="isMenuOpen = false"
                    class="p-1 hover:bg-white/20 rounded-full transition-colors"
                    aria-label="Fermer"
                  >
                    <X :size="20" />
                  </button>
                </div>
              </div>

              <!-- Menu Items -->
              <nav class="flex-1 overflow-y-auto py-2">
                <button
                  v-for="item in menuItems"
                  :key="item.id"
                  @click="handleMenuClick(item.id)"
                  class="w-full flex items-center gap-3 px-6 py-4 hover:bg-pink-50 transition-colors text-left group"
                >
                  <component 
                    :is="item.icon" 
                    :size="20" 
                    class="text-gray-600 group-hover:text-[#D91E7E] transition-colors"
                  />
                  <span class="text-gray-700 group-hover:text-[#D91E7E] font-medium transition-colors">
                    {{ item.label }}
                  </span>
                </button>
              </nav>

              <!-- Footer -->
              <div class="border-t border-gray-200 p-4 text-center">
                <p class="text-xs text-gray-500">Version 1.0.0</p>
                <p class="text-xs text-gray-400 mt-1">© 2025 Rose Assistant</p>
              </div>
            </div>
          </div>
        </Transition>
      </Teleport>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, onMounted, onUnmounted, watch } from 'vue'
import { 
  ChevronLeft, 
  Menu, 
  Send, 
  Heart,
  X,
  Home,
  MessageCircle,
  BookOpen,
  Calendar,
  Settings,
  HelpCircle,
  Share2,
  Bell,
  Star
} from 'lucide-vue-next'
import RoseQuickReplies from './Replie.vue'
import RoseFormattedMessage from './Formated.vue'
import { useChatStore } from '../chatStore'
import router from '@/router'

// Store
const chatStore = useChatStore()

// State
const inputMessage = ref('')
const messagesContainer = ref(null)
const isMenuOpen = ref(false)

// Computed
const hasMessages = computed(() => chatStore.hasMessages)

// Menu Items
const menuItems = [
  { id: 'rose', label: 'Accueil', icon: Home },
  { id: 'chat', label: 'Conversations', icon: MessageCircle },
  { id: 'ressources', label: 'Ressources', icon: BookOpen },
  { id: 'evaluation', label: 'Évaluation', icon: HelpCircle },
//   { id: 'events', label: 'Événements', icon: Calendar },
//   { id: 'notifications', label: 'Notifications', icon: Bell },
//   { id: 'share', label: 'Partager', icon: Share2 },
//   { id: 'help', label: 'Aide', icon: HelpCircle },
  { id: 'settings', label: 'Paramètres', icon: Settings }
]

// Methods
const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  })
}

const sendMessage = async () => {
  if (!inputMessage.value.trim() || chatStore.sending) return

  const messageText = inputMessage.value
  inputMessage.value = ''

  try {
    await chatStore.sendMessage(messageText)
    scrollToBottom()
  } catch (error) {
    console.error('Error sending message:', error)
  }
}

const handleQuickReply = async (suggestion) => {
  inputMessage.value = suggestion.value
  await sendMessage()
}

const handleAction = (action) => {
  console.log('Action triggered:', action)
  // Gérer les actions des messages (boutons, liens, etc.)
  if (action.type === 'message') {
    inputMessage.value = action.value
    sendMessage()
  } else if (action.type === 'link') {
    window.open(action.url, '_blank')
  }
}

const submitFeedback = async (messageId, rating) => {
  try {
    await chatStore.submitFeedback(messageId, rating)
  } catch (error) {
    console.error('Error submitting feedback:', error)
  }
}

const parseMessageContent = (message) => {
  // Si le contenu est déjà un objet, le retourner tel quel
  if (typeof message.content === 'object') {
    return message.content
  }

  // Si c'est du texte simple
  if (message.message_type === 'text') {
    return message.content
  }

  // Essayer de parser si c'est du JSON
  try {
    return JSON.parse(message.content)
  } catch {
    return message.content
  }
}

const formatTime = (timestamp) => {
  if (!timestamp) return ''
  
  const date = new Date(timestamp)
  return date.toLocaleTimeString('fr-FR', { 
    hour: '2-digit', 
    minute: '2-digit' 
  })
}

const goBack = () => {
  console.log('Navigate back')
  router.push('/')
  // Implémenter la navigation
}

const handleMenuClick = async (itemId) => {
  isMenuOpen.value = false

  router.push({ name: itemId })
  
//   switch (itemId) {
//     case 'home':
      
//       break
//     case 'conversations':
     
//       try {
//         await chatStore.fetchConversations()
//         console.log('Conversations loaded:', chatStore.conversations)
//       } catch (error) {
//         console.error('Error loading conversations:', error)
//       }
//       break
//     case 'resources':
//       // Charger et afficher les ressources
//       try {
//         await chatStore.fetchResources()
//         await chatStore.fetchEmergencyContacts()
//         console.log('Resources loaded')
//       } catch (error) {
//         console.error('Error loading resources:', error)
//       }
//       break
//     default:
//       console.log('Menu item clicked:', itemId)
//   }
}

// Keyboard shortcuts
const handleKeydown = (e) => {
  if (e.key === 'Escape' && isMenuOpen.value) {
    isMenuOpen.value = false
  }
}

// Watch for new messages to scroll
watch(() => chatStore.messages.length, () => {
  scrollToBottom()
})

// Lifecycle
onMounted(async () => {
  // Initialiser le chat
  try {
    await chatStore.initializeChat()
    scrollToBottom()
  } catch (error) {
    console.error('Error initializing chat:', error)
  }

  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}

/* Sidebar transitions */
.sidebar-enter-active,
.sidebar-leave-active {
  transition: all 0.3s ease;
}

.sidebar-enter-active > div:last-child,
.sidebar-leave-active > div:last-child {
  transition: transform 0.3s ease;
}

.sidebar-enter-from,
.sidebar-leave-to {
  opacity: 0;
}

.sidebar-enter-from > div:last-child,
.sidebar-leave-to > div:last-child {
  transform: translateX(100%);
}
</style>