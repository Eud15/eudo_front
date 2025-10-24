<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { Home, MessageCircle, BookOpen, Info, Calendar, MapPin, Clock, Heart, Activity, Hospital, Phone, Mail, Globe, Users } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

// Current route state
const currentRoute = ref('rose')
const router = useRouter()

// Navigation items
const navItems = [
  { id: 'rose', label: 'Accueil', icon: Home },
  { id: 'chat', label: 'Chat', icon: MessageCircle, badge: true },
  { id: 'ressources', label: 'Ressources', icon: BookOpen },
  { id: 'about', label: 'À propos', icon: Info }
]

// Page transition state
const isTransitioning = ref(false)

// Événements Octobre Rose (vos événements réels)
const events = ref([
    {
    id: 10,
    name: 'BSM Group & Clinique Serena',
    subtitle: 'Dépistage gratuit du cancer du sein',
    description: 'Dépistage gratuit du cancer du sein à la Clinique Serena',
    phone: '+229 68 45 80 28',
    email: 'contact@bsmgroupe.com',
    website: 'https://www.facebook.com/share/p/1966x4cpuU/',
    date: '2024-10-25',
    dateFormatted: '25 Octobre 2024',
    time: '09h00 - 13h00',
    location: 'Clinique Serena, Cotonou',
    iconComponent: Hospital,
    color: 'from-pink-500 to-rose-600',
    tags: ['gratuit']
  },
  {
    id: 9,
    name: 'MOVE FOR PINK',
    subtitle: 'le 25 octobre au Padel Club Cotonou',
    description: 'Marche solidaire pour sensibiliser au dépistage du cancer du sein.',
    phone: '+229 01 46 09 95 72',
    website: 'https://www.instagram.com/beautyandbrainsorority/',
    date: '2024-10-25',
    dateFormatted: '25 Octobre 2024',
    time: '10h00 - 18h00',
    location: 'Padel Club Cotonou',
    iconComponent: Activity,
    color: 'from-pink-500 to-rose-600',
    tags: ['payant']
  },

])

// Navigate to route
const navigateTo = (routeId: string) => {
  if (routeId === currentRoute.value) return
  
  isTransitioning.value = true
  

  if (routeId === 'about') {
   setTimeout(() => {
    currentRoute.value = routeId
    isTransitioning.value = false
 
    const contentArea = document.querySelector('.content-area')
    if (contentArea) {
      contentArea.scrollTop = 0
    }
  }, 150)
  } else {
   router.push({ name: routeId })
  }
  
}

// Open external link
const openLink = (url: string) => {
  window.open(url, '_blank')
}

// Get current time for status bar
const currentTime = ref(new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }))
setInterval(() => {
  currentTime.value = new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
}, 60000)
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center md:p-4">
    <!-- Mobile App Container -->
    <div class="w-full max-w-[428px] h-screen max-h-[926px] bg-white rounded-none md:rounded-3xl shadow-2xl overflow-hidden flex flex-col relative">
      
      <!-- Status Bar (Desktop only - simulates mobile) -->
      <div class="hidden md:flex items-center justify-between px-6 h-6 bg-gray-50 text-xs text-gray-600">
        <span>{{ currentTime }}</span>
        <div class="flex items-center gap-1">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
          </svg>
        </div>
      </div>

      <!-- Main Content Area -->
      <div class="flex-1 overflow-y-auto content-area scroll-smooth">
        <!-- Page Transition Wrapper -->
        <Transition
          name="fade"
          mode="out-in"
        >
          <div v-if="!isTransitioning" :key="currentRoute" class="min-h-full">
            <!-- Home Page -->
            <div v-if="currentRoute === 'rose'" class="p-6 pb-24">
              <div class="text-center mb-8">
                <div class="w-70 h-70  flex items-center justify-center ">
                    <img src="../../../assets/images/rose/can.svg" alt="">
                </div>
                <h1 class="text-3xl font-bold text-gray-900 mb-2">Rose Assistant</h1>
                <p class="text-gray-600">Votre compagnon pour la sensibilisation au cancer du sein</p>
              </div>

              <!-- Hero Stats -->
              <div class="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-6 text-white mb-6 shadow-lg">
                <h2 class="text-xl font-bold mb-4">Statistiques Importantes</h2>
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div class="text-3xl font-bold mb-1">1/8</div>
                    <div class="text-sm opacity-90">Femmes touchées</div>
                  </div>
                  <div class="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div class="text-3xl font-bold mb-1">90%</div>
                    <div class="text-sm opacity-90">Taux de guérison</div>
                  </div>
                </div>
              </div>

              <!-- Quick Actions -->
              <div class="space-y-4 mb-8">
                <h3 class="text-lg font-semibold text-gray-900">Actions Rapides</h3>
                
                <button
                  @click="navigateTo('chat')"
                  class="w-full bg-white border-2 border-pink-200 rounded-xl p-4 flex items-center gap-4 hover:border-pink-400 hover:shadow-md transition-all active:scale-95"
                >
                  <div class="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <MessageCircle class="w-6 h-6 text-pink-600" />
                  </div>
                  <div class="flex-1 text-left">
                    <div class="font-semibold text-gray-900">Discuter avec Rose</div>
                    <div class="text-sm text-gray-600">Posez vos questions</div>
                  </div>
                </button>

                <button
                  @click="navigateTo('ressources')"
                  class="w-full bg-white border-2 border-pink-200 rounded-xl p-4 flex items-center gap-4 hover:border-pink-400 hover:shadow-md transition-all active:scale-95"
                >
                  <div class="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <BookOpen class="w-6 h-6 text-pink-600" />
                  </div>
                  <div class="flex-1 text-left">
                    <div class="font-semibold text-gray-900">Explorer les ressources</div>
                    <div class="text-sm text-gray-600">Guides et informations</div>
                  </div>
                </button>
              </div>

              <!-- Événements Octobre Rose Section -->
              <div class="mb-8">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-sm font-semibold text-gray-900 flex items-center gap-2">
                    <Calendar class="w-5 h-5 text-pink-600" />
                    Événements Octobre Rose
                  </h3>
                  <span class="text-xs bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-medium">
                    {{ events.length }} événements
                  </span>
                </div>

                <!-- Events Cards -->
                <div class="space-y-4">
                  <div
                    v-for="(event, index) in events"
                    :key="event.id"
                    class="group bg-white border-2 border-pink-100 rounded-2xl overflow-hidden hover:border-pink-300 hover:shadow-xl transition-all duration-300 active:scale-98"
                  >
                    <!-- Event Header with Gradient -->
                    <div :class="`bg-gradient-to-r ${event.color} p-5 text-white`">
                      <div class="flex items-start justify-between mb-3">
                        <div class="flex items-center gap-3">
                          <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            <component :is="event.iconComponent" class="w-6 h-6" />
                          </div>
                          <div class="flex-1">
                            <div class="flex items-center gap-2 mb-1">
                              <span
                                v-for="tag in event.tags"
                                :key="tag"
                                :class="tag === 'gratuit' ? 'bg-green-500/90' : 'bg-amber-500/90'"
                                class="text-xs px-2.5 py-1 rounded-full font-semibold uppercase tracking-wide"
                              >
                                {{ tag }}
                              </span>
                            </div>
                            <h4 class="text-lg font-bold leading-tight">{{ event.name }}</h4>
                            <p class="text-sm opacity-90 mt-0.5">{{ event.subtitle }}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Event Details -->
                    <div class="p-5 space-y-4">
                      <p class="text-sm text-gray-600 leading-relaxed">
                        {{ event.description }}
                      </p>

                      <!-- Info Grid -->
                      <div class="bg-pink-50/50 rounded-xl p-4 space-y-2.5">
                        <div class="flex items-center gap-3 text-sm">
                          <Calendar class="w-4 h-4 text-pink-600 flex-shrink-0" />
                          <span class="font-medium text-gray-900">{{ event.dateFormatted }}</span>
                        </div>
                        <div class="flex items-center gap-3 text-sm">
                          <Clock class="w-4 h-4 text-pink-600 flex-shrink-0" />
                          <span class="text-gray-700">{{ event.time }}</span>
                        </div>
                        <div class="flex items-center gap-3 text-sm">
                          <MapPin class="w-4 h-4 text-pink-600 flex-shrink-0" />
                          <span class="text-gray-700">{{ event.location }}</span>
                        </div>
                      </div>

                      <!-- Contact Information -->
                      <div class="space-y-2">
                        <div v-if="event.phone" class="flex items-center gap-3 text-sm">
                          <Phone class="w-4 h-4 text-gray-400 flex-shrink-0" />
                          <a :href="`tel:${event.phone}`" class="text-pink-600 hover:text-pink-700 font-medium hover:underline">
                            {{ event.phone }}
                          </a>
                        </div>
                        <div v-if="event.email" class="flex items-center gap-3 text-sm">
                          <Mail class="w-4 h-4 text-gray-400 flex-shrink-0" />
                          <a :href="`mailto:${event.email}`" class="text-pink-600 hover:text-pink-700 font-medium hover:underline">
                            {{ event.email }}
                          </a>
                        </div>
                      </div>

                      <!-- Action Buttons -->
                      <div class="flex gap-2 pt-2">
                        <button
                          @click="openLink(event.website)"
                          class="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-3 px-4 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 shadow-md"
                        >
                          <Globe class="w-4 h-4" />
                          <span>Plus d'infos</span>
                        </button>
                        <!-- <button
                          class="flex-1 bg-pink-50 hover:bg-pink-100 text-pink-700 font-semibold py-3 px-4 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 border-2 border-pink-200"
                        >
                          <Users class="w-4 h-4" />
                          <span>Participer</span>
                        </button> -->
                      </div>
                    </div>
                  </div>
                </div>

                <!-- View All Events Button -->
                <button
                  @click="navigateTo('ressources')"
                  class="w-full mt-4 bg-white border-2 border-pink-200 text-pink-700 font-semibold py-3.5 px-4 rounded-xl hover:border-pink-400 hover:shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <Calendar class="w-5 h-5" />
                  <span>Voir tous les événements</span>
                </button>
              </div>

              <!-- Features Grid -->
              <div class="mt-8 grid grid-cols-2 gap-4">
                <div class="bg-pink-50 rounded-xl p-4 text-center">
                  <div class="text-2xl mb-2 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scan-heart-icon lucide-scan-heart"><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 4.172 4.306l-3.447 3.62a1 1 0 0 1-1.449 0z"/></svg></div>
                  <div class="text-sm font-medium text-gray-900">Dépistage</div>
                </div>
                <div class="bg-pink-50 rounded-xl p-4 text-center">
                  <div class="text-2xl mb-2 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-notepad-text-icon lucide-notepad-text"><path d="M8 2v4"/><path d="M12 2v4"/><path d="M16 2v4"/><rect width="16" height="18" x="4" y="4" rx="2"/><path d="M8 10h6"/><path d="M8 14h8"/><path d="M8 18h5"/></svg>
                </div>
                  <div class="text-sm font-medium text-gray-900">Prévention</div>
                </div>
                <div class="bg-pink-50 rounded-xl p-4 text-center">
                  <div class="text-2xl mb-2">💪</div>
                  <div class="text-sm font-medium text-gray-900">Soutien</div>
                </div>
                <div class="bg-pink-50 rounded-xl p-4 text-center">
                  <div class="text-2xl mb-2 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>
                  </div>
                  <div class="text-sm font-medium text-gray-900">Ressources</div>
                </div>
              </div>
            </div>

            <!-- About Page -->
            <div v-if="currentRoute === 'about'" class="p-6 pb-24">
              <div class="text-center mb-8">
                <div class="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Info class="w-10 h-10 text-white" />
                </div>
                <h1 class="text-3xl font-bold text-gray-900 mb-2">À Propos</h1>
                <p class="text-gray-600">Rose Assistant - Version 1.0.0</p>
              </div>

              <div class="space-y-6">
                <div class="bg-white border-2 border-pink-200 rounded-xl p-6">
                  <h3 class="text-lg font-semibold text-gray-900 mb-3">Notre Mission</h3>
                  <p class="text-gray-700 leading-relaxed">
                    Rose Assistant est un chatbot intelligent dédié à la sensibilisation au cancer du sein. 
                    Notre mission est de fournir des informations fiables et accessibles pour aider les femmes 
                    à mieux comprendre le dépistage, la prévention et les facteurs de risque.
                  </p>
                </div>

                <div class="bg-white border-2 border-pink-200 rounded-xl p-6">
                  <h3 class="text-lg font-semibold text-gray-900 mb-3">Fonctionnalités</h3>
                  <ul class="space-y-3">
                    <li class="flex items-start gap-3">
                      <div class="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg class="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-gray-700">Chat interactif avec réponses personnalisées</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <div class="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg class="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-gray-700">Évaluation des risques personnalisée</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <div class="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg class="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-gray-700">Bibliothèque de ressources complète</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <div class="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg class="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-gray-700">Guides d'autopalpation détaillés</span>
                    </li>
                  </ul>
                </div>

                <div class="bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl p-6 text-white">
                  <h3 class="text-lg font-semibold mb-3">Avertissement Important</h3>
                  <p class="text-sm leading-relaxed opacity-95">
                    Rose Assistant est un outil d'information et de sensibilisation. Il ne remplace pas 
                    une consultation médicale professionnelle. En cas de doute ou de symptômes, consultez 
                    toujours un professionnel de santé qualifié.
                  </p>
                </div>

                <div class="bg-white border-2 border-pink-200 rounded-xl p-6">
                  <h3 class="text-lg font-semibold text-gray-900 mb-3">Contact & Support</h3>
                  <div class="space-y-2 text-gray-700">
                    <p>Email: eudoxieabouta@gmail.com</p>
                    <p>Version: 1.0.0</p>
                    <p class="text-sm text-gray-600 mt-4">
                      Développé avec soin et amour
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>

        <!-- Loading Spinner -->
        <div
          v-if="isTransitioning"
          class="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50"
        >
          <div class="w-12 h-12 border-4 border-pink-200 border-t-pink-600 rounded-full animate-spin"></div>
        </div>
      </div>

      <!-- Bottom Navigation Bar -->
      <nav class="bg-white border-t border-gray-200 shadow-lg safe-area-inset-bottom fixed bottom-0 left-0 right-0">
        <div class="flex items-center justify-around h-16 px-2">
          <button
            v-for="item in navItems"
            :key="item.id"
            @click="navigateTo(item.id)"
            class="flex flex-col items-center justify-center flex-1 h-full relative group transition-all active:scale-95"
            :class="currentRoute === item.id ? 'text-pink-600' : 'text-gray-400'"
          >
            <!-- Ripple effect background -->
            <div
              class="absolute inset-0 rounded-lg transition-colors"
              :class="currentRoute === item.id ? 'bg-pink-50' : 'group-hover:bg-gray-50'"
            ></div>
            
            <!-- Icon and label -->
            <div class="relative z-10 flex flex-col items-center gap-1">
              <component
                :is="item.icon"
                class="w-6 h-6 transition-transform"
                :class="currentRoute === item.id ? 'scale-110' : 'group-hover:scale-105'"
              />
              <span
                class="text-xs font-medium transition-all"
                :class="currentRoute === item.id ? 'font-semibold' : ''"
              >
                {{ item.label }}
              </span>
              
              <!-- Badge notification dot -->
              <div
                v-if="item.badge && currentRoute !== item.id"
                class="absolute -top-1 right-1/4 w-2 h-2 bg-red-500 rounded-full border-2 border-white"
              ></div>
            </div>
          </button>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Safe area insets for mobile notch */
.safe-area-inset-bottom {
  padding-bottom: env(safe-area-inset-bottom);
}

/* Custom scrollbar */
.content-area::-webkit-scrollbar {
  width: 6px;
}

.content-area::-webkit-scrollbar-track {
  background: transparent;
}

.content-area::-webkit-scrollbar-thumb {
  background: #fecdd3;
  border-radius: 3px;
}

.content-area::-webkit-scrollbar-thumb:hover {
  background: #fda4af;
}

/* Active scale animation */
.active\:scale-98:active {
  transform: scale(0.98);
}

.active\:scale-95:active {
  transform: scale(0.95);
}
</style>