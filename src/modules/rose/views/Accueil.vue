<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center ">
    <div class="w-full max-w-[428px] h-[750px] bg-white  overflow-hidden flex flex-col relative">
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
        class="flex-1 overflow-y-auto p-4 space-y-4 bg-pink-50/30"
      >
        <div
          v-for="message in messages"
          :key="message.id"
          :class="[
            'flex',
            message.sender === 'user' ? 'justify-end' : 'justify-start'
          ]"
        >
          <div
            :class="[
              'max-w-[75%] rounded-2xl px-4 py-3 shadow-sm animate-fade-in',
              message.sender === 'user'
                ? 'bg-gradient-to-r from-[#D91E7E] to-[#FF69B4] text-white rounded-br-sm'
                : 'bg-white text-gray-800 rounded-bl-sm'
            ]"
          >
            <p class="text-sm leading-relaxed">{{ message.text }}</p>
            <span 
              :class="[
                'text-xs mt-1 block',
                message.sender === 'user' ? 'text-pink-100' : 'text-gray-400'
              ]"
            >
              {{ message.time }}
            </span>
          </div>
        </div>

        <!-- Typing Indicator -->
        <div v-if="isTyping" class="flex justify-start">
          <div class="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
            <div class="flex gap-1">
              <span class="w-2 h-2 bg-[#D91E7E] rounded-full animate-bounce" style="animation-delay: 0ms"></span>
              <span class="w-2 h-2 bg-[#D91E7E] rounded-full animate-bounce" style="animation-delay: 150ms"></span>
              <span class="w-2 h-2 bg-[#D91E7E] rounded-full animate-bounce" style="animation-delay: 300ms"></span>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Replies -->
      <div v-if="quickReplies.length > 0" class="px-4 py-2 bg-white border-t border-pink-100">
        <div class="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button
            v-for="(reply, index) in quickReplies"
            :key="index"
            @click="sendQuickReply(reply)"
            class="flex-shrink-0 px-4 py-2 bg-pink-50 text-[#D91E7E] rounded-full text-sm font-medium hover:bg-pink-100 transition-colors border border-pink-200"
          >
            {{ reply }}
          </button>
        </div>
      </div>

      <!-- Input Area -->
      <div class="bg-white border-t border-pink-100 p-4">
        <form @submit.prevent="sendMessage" class="flex gap-2">
          <input
            v-model="inputMessage"
            type="text"
            placeholder="Posez votre question..."
            class="flex-1 px-4 py-3 bg-pink-50 border border-pink-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#D91E7E] focus:border-transparent text-sm"
          />
          <button
            type="submit"
            :disabled="!inputMessage.trim()"
            class="p-3 bg-gradient-to-r from-[#D91E7E] to-[#FF69B4] text-white rounded-full hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Envoyer"
          >
            <Send :size="20" />
          </button>
        </form>
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
import { ref, computed, nextTick, onMounted, onUnmounted } from 'vue'
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
  Bell
} from 'lucide-vue-next'

// State
const messages = ref([
  {
    id: 1,
    sender: 'bot',
    text: 'Bonjour ! Je suis Rose, votre assistante pour la sensibilisation au cancer du sein. Comment puis-je vous aider aujourd\'hui ?',
    time: '10:30'
  }
])

const inputMessage = ref('')
const isTyping = ref(false)
const messagesContainer = ref(null)
const isMenuOpen = ref(false)

const quickReplies = ref([
  'Autopalpation',
  'Facteurs de risque',
  'Dépistage',
  'Symptômes'
])

const menuItems = [
  { id: 'home', label: 'Accueil', icon: Home },
  { id: 'chat', label: 'Discussion', icon: MessageCircle },
  { id: 'ressources', label: 'Ressources', icon: BookOpen },
  { id: 'events', label: 'Événements', icon: Calendar },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'share', label: 'Partager', icon: Share2 },
  { id: 'help', label: 'Aide', icon: HelpCircle },
  { id: 'settings', label: 'Paramètres', icon: Settings }
]

// Bot responses
const botResponses = {
  'autopalpation': 'L\'autopalpation est un examen que vous pouvez faire vous-même pour détecter d\'éventuelles anomalies dans vos seins. Je recommande de le faire une fois par mois, quelques jours après vos règles. Voulez-vous que je vous guide étape par étape ?',
  'facteurs de risque': 'Les principaux facteurs de risque incluent : l\'âge (plus de 50 ans), les antécédents familiaux, certaines mutations génétiques (BRCA1/BRCA2), l\'obésité, et la consommation d\'alcool. Souhaitez-vous plus d\'informations sur l\'un de ces facteurs ?',
  'dépistage': 'Le dépistage du cancer du sein est recommandé tous les 2 ans pour les femmes de 50 à 74 ans via une mammographie. Pour les femmes à risque élevé, un suivi personnalisé peut être mis en place dès 40 ans. Voulez-vous connaître les centres de dépistage près de chez vous ?',
  'symptômes': 'Les symptômes à surveiller incluent : une bosse dans le sein, un changement de taille ou de forme, une rétraction du mamelon, un écoulement, une rougeur ou une peau d\'orange. Si vous remarquez l\'un de ces signes, consultez rapidement un médecin.'
}

// Methods
const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  })
}

const sendMessage = () => {
  if (!inputMessage.value.trim()) return

  const userMessage = {
    id: Date.now(),
    sender: 'user',
    text: inputMessage.value,
    time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
  }

  messages.value.push(userMessage)
  const userInput = inputMessage.value.toLowerCase()
  inputMessage.value = ''
  scrollToBottom()

  // Simulate bot typing
  isTyping.value = true
  setTimeout(() => {
    isTyping.value = false
    
    let botResponse = 'Je comprends votre question. Pour des informations médicales précises, je vous recommande de consulter un professionnel de santé. Puis-je vous aider avec autre chose ?'
    
    for (const [key, response] of Object.entries(botResponses)) {
      if (userInput.includes(key)) {
        botResponse = response
        break
      }
    }

    messages.value.push({
      id: Date.now(),
      sender: 'bot',
      text: botResponse,
      time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
    })
    
    scrollToBottom()
  }, 1500)
}

const sendQuickReply = (reply) => {
  inputMessage.value = reply
  sendMessage()
}

const goBack = () => {
  console.log('Navigate back')
}

const handleMenuClick = (itemId) => {
  console.log('Menu item clicked:', itemId)
  isMenuOpen.value = false
  
  if (itemId === 'ressources') {
    // Navigate to ressources page
    console.log('Navigate to ressources')
  }
}

// Keyboard shortcuts
const handleKeydown = (e) => {
  if (e.key === 'Escape' && isMenuOpen.value) {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  scrollToBottom()
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

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
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
