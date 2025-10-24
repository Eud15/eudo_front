<script setup lang="ts">
import { ref, computed } from 'vue'

// Props to determine if viewing own profile
const props = defineProps<{
  isOwnProfile?: boolean
}>()

// User data
const user = ref({
  username: 'JeanDupont',
  avatar: '/placeholder.svg?height=120&width=120',
  level: 'Expert',
  levelColor: '#FFCB05',
  joinDate: 'Membre depuis Mars 2024',
  bio: 'Passionné par l\'IA et le prompt engineering. Je crée des prompts pour améliorer la productivité et la créativité.',
  socialLinks: {
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },
  stats: {
    promptsCreated: 127,
    promptsValidated: 95,
    validationRate: 75,
    totalCopies: 3420,
    globalRank: 12
  },
  achievements: [
    { id: 1, name: 'Premier Prompt', icon: '🎯', earned: true },
    { id: 2, name: '100 Copies', icon: '📋', earned: true },
    { id: 3, name: 'Top 50', icon: '🏆', earned: true },
    { id: 4, name: 'Expert', icon: '⭐', earned: true },
    { id: 5, name: 'Contributeur', icon: '💎', earned: false }
  ],
  topCategories: [
    { name: 'Marketing', count: 45 },
    { name: 'Développement', count: 32 },
    { name: 'Design', count: 28 }
  ]
})

// Active tab
const activeTab = ref('published')

// Filter for published prompts
const publishedFilter = ref('all')

// Published prompts
const publishedPrompts = ref([
  {
    id: 1,
    title: 'Générateur de descriptions produits e-commerce',
    category: 'Marketing',
    status: 'validated',
    copies: 234,
    rating: 4.8,
    createdAt: '2024-03-15'
  },
  {
    id: 2,
    title: 'Assistant de code Python avancé',
    category: 'Développement',
    status: 'validated',
    copies: 189,
    rating: 4.9,
    createdAt: '2024-03-10'
  },
  {
    id: 3,
    title: 'Créateur de posts LinkedIn engageants',
    category: 'Marketing',
    status: 'pending',
    copies: 45,
    rating: 4.5,
    createdAt: '2024-03-20'
  },
  {
    id: 4,
    title: 'Générateur de palettes de couleurs',
    category: 'Design',
    status: 'validated',
    copies: 156,
    rating: 4.7,
    createdAt: '2024-03-08'
  }
])

// Draft prompts
const draftPrompts = ref([
  {
    id: 1,
    title: 'Générateur de titres YouTube',
    lastSaved: '2024-03-22 14:30',
    category: 'Marketing'
  },
  {
    id: 2,
    title: 'Assistant de révision de code',
    lastSaved: '2024-03-21 09:15',
    category: 'Développement'
  }
])

// Favorite prompts
const favoritePrompts = ref([
  {
    id: 1,
    title: 'Générateur de contenu SEO',
    category: 'Marketing',
    author: 'MarieMartin',
    copies: 567,
    rating: 4.9,
    addedAt: '2024-03-18'
  },
  {
    id: 2,
    title: 'Créateur de user stories',
    category: 'Développement',
    author: 'PierreLeroy',
    copies: 423,
    rating: 4.8,
    addedAt: '2024-03-16'
  }
])

// Statistics data
const statsData = ref({
  promptsOverTime: {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun'],
    data: [12, 19, 25, 32, 28, 35]
  },
  topPrompts: [
    { name: 'Descriptions produits', copies: 234 },
    { name: 'Code Python', copies: 189 },
    { name: 'Palettes couleurs', copies: 156 },
    { name: 'Posts LinkedIn', copies: 145 },
    { name: 'Emails marketing', copies: 123 }
  ],
  categoriesBreakdown: [
    { name: 'Marketing', value: 45, color: '#FFCB05' },
    { name: 'Développement', value: 32, color: '#FFE066' },
    { name: 'Design', value: 28, color: '#FFF4CC' },
    { name: 'Écriture', value: 15, color: '#666666' },
    { name: 'Autres', value: 7, color: '#999999' }
  ],
  recentActivity: [
    { action: 'Prompt validé', prompt: 'Générateur de descriptions produits', date: '2024-03-22' },
    { action: 'Nouveau prompt créé', prompt: 'Assistant de code Python', date: '2024-03-20' },
    { action: '100 copies atteintes', prompt: 'Palettes de couleurs', date: '2024-03-18' },
    { action: 'Badge obtenu', prompt: 'Top 50', date: '2024-03-15' }
  ]
})

// Computed filtered prompts
const filteredPublishedPrompts = computed(() => {
  if (publishedFilter.value === 'all') return publishedPrompts.value
  return publishedPrompts.value.filter(p => p.status === publishedFilter.value)
})

// Functions
const editProfile = () => {
  console.log('Edit profile')
}

const shareProfile = () => {
  console.log('Share profile')
}

const editDraft = (id: number) => {
  console.log('Edit draft:', id)
}

const deleteDraft = (id: number) => {
  console.log('Delete draft:', id)
}

const getStatusBadge = (status: string) => {
  const badges = {
    validated: { text: 'Validé', class: 'bg-green-500' },
    pending: { text: 'En attente', class: 'bg-yellow-500' },
    rejected: { text: 'Rejeté', class: 'bg-red-500' }
  }
  return badges[status as keyof typeof badges] || badges.validated
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Cover Photo -->
    <div class="h-64 bg-gradient-to-r from-black via-gray-900 to-black relative">
      <div class="absolute inset-0 opacity-20" style="background-image: url('/placeholder.svg?height=256&width=1920'); background-size: cover;"></div>
    </div>

    <!-- Profile Header -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative -mt-20 mb-8">
        <div class="bg-white rounded-lg shadow-lg p-6 border-2 border-black">
          <div class="flex flex-col md:flex-row items-start md:items-end gap-6">
            <!-- Avatar -->
            <div class="relative">
              <img :src="user.avatar" :alt="user.username" class="w-32 h-32 rounded-full border-4 border-[#FFCB05] shadow-lg" />
              <button v-if="isOwnProfile" class="absolute bottom-0 right-0 bg-[#FFCB05] text-black p-2 rounded-full shadow-lg hover:bg-[#E5B604] transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>

            <!-- User Info -->
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-2">
                <h1 class="text-3xl font-bold text-black">{{ user.username }}</h1>
                <span class="px-3 py-1 rounded-full text-sm font-semibold text-black border-2 border-[#FFCB05] bg-[#FFCB05]">
                  {{ user.level }}
                </span>
              </div>
              <p class="text-gray-600">{{ user.joinDate }}</p>
            </div>

            <!-- Action Buttons -->
            <div class="flex gap-3">
              <button v-if="isOwnProfile" @click="editProfile" class="px-6 py-2 bg-[#FFCB05] text-black font-semibold rounded-lg hover:bg-[#E5B604] transition-colors border-2 border-black">
                Modifier le profil
              </button>
              <button @click="shareProfile" class="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors border-2 border-black">
                <svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Partager
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Bar -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div class="bg-white rounded-lg shadow-md p-6 border-2 border-black hover:shadow-lg transition-shadow">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-600 text-sm mb-1">Prompts créés</p>
              <p class="text-3xl font-bold text-black">{{ user.stats.promptsCreated }}</p>
            </div>
            <div class="w-12 h-12 bg-[#FFCB05] rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6 border-2 border-black hover:shadow-lg transition-shadow">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-600 text-sm mb-1">Prompts validés</p>
              <p class="text-3xl font-bold text-black">{{ user.stats.promptsValidated }}</p>
              <p class="text-sm text-gray-500">{{ user.stats.validationRate }}% validés</p>
            </div>
            <div class="w-12 h-12 bg-[#FFCB05] rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6 border-2 border-black hover:shadow-lg transition-shadow">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-600 text-sm mb-1">Total de copies</p>
              <p class="text-3xl font-bold text-black">{{ user.stats.totalCopies.toLocaleString() }}</p>
            </div>
            <div class="w-12 h-12 bg-[#FFCB05] rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6 border-2 border-black hover:shadow-lg transition-shadow">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-600 text-sm mb-1">Classement global</p>
              <p class="text-3xl font-bold text-black">#{{ user.stats.globalRank }}</p>
            </div>
            <div class="w-12 h-12 bg-[#FFCB05] rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content with Sidebar -->
      <div class="flex flex-col lg:flex-row gap-8 mb-12">
        <!-- Main Content -->
        <div class="flex-1">
          <!-- Tab Navigation -->
          <div class="bg-white rounded-lg shadow-md border-2 border-black mb-6">
            <div class="flex flex-wrap border-b-2 border-black">
              <button 
                @click="activeTab = 'published'" 
                :class="['px-6 py-4 font-semibold transition-colors', activeTab === 'published' ? 'bg-[#FFCB05] text-black border-b-4 border-black' : 'text-gray-600 hover:bg-gray-50']"
              >
                Prompts publiés
              </button>
              <button 
                v-if="isOwnProfile"
                @click="activeTab = 'drafts'" 
                :class="['px-6 py-4 font-semibold transition-colors', activeTab === 'drafts' ? 'bg-[#FFCB05] text-black border-b-4 border-black' : 'text-gray-600 hover:bg-gray-50']"
              >
                Brouillons
              </button>
              <button 
                v-if="isOwnProfile"
                @click="activeTab = 'favorites'" 
                :class="['px-6 py-4 font-semibold transition-colors', activeTab === 'favorites' ? 'bg-[#FFCB05] text-black border-b-4 border-black' : 'text-gray-600 hover:bg-gray-50']"
              >
                Favoris
              </button>
              <button 
                @click="activeTab = 'statistics'" 
                :class="['px-6 py-4 font-semibold transition-colors', activeTab === 'statistics' ? 'bg-[#FFCB05] text-black border-b-4 border-black' : 'text-gray-600 hover:bg-gray-50']"
              >
                Statistiques
              </button>
            </div>

            <!-- Tab Content -->
            <div class="p-6">
              <!-- Published Prompts Tab -->
              <div v-if="activeTab === 'published'">
                <!-- Filter Buttons -->
                <div class="flex flex-wrap gap-3 mb-6">
                  <button 
                    @click="publishedFilter = 'all'"
                    :class="['px-4 py-2 rounded-lg font-semibold transition-colors border-2 border-black', publishedFilter === 'all' ? 'bg-[#FFCB05] text-black' : 'bg-white text-gray-600 hover:bg-gray-50']"
                  >
                    Tous
                  </button>
                  <button 
                    @click="publishedFilter = 'validated'"
                    :class="['px-4 py-2 rounded-lg font-semibold transition-colors border-2 border-black', publishedFilter === 'validated' ? 'bg-[#FFCB05] text-black' : 'bg-white text-gray-600 hover:bg-gray-50']"
                  >
                    Validés
                  </button>
                  <button 
                    @click="publishedFilter = 'pending'"
                    :class="['px-4 py-2 rounded-lg font-semibold transition-colors border-2 border-black', publishedFilter === 'pending' ? 'bg-[#FFCB05] text-black' : 'bg-white text-gray-600 hover:bg-gray-50']"
                  >
                    En attente
                  </button>
                  <button 
                    @click="publishedFilter = 'rejected'"
                    :class="['px-4 py-2 rounded-lg font-semibold transition-colors border-2 border-black', publishedFilter === 'rejected' ? 'bg-[#FFCB05] text-black' : 'bg-white text-gray-600 hover:bg-gray-50']"
                  >
                    Rejetés
                  </button>
                </div>

                <!-- Prompts Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div v-for="prompt in filteredPublishedPrompts" :key="prompt.id" class="bg-white rounded-lg shadow-md p-6 border-2 border-black hover:shadow-lg transition-all hover:-translate-y-1">
                    <div class="flex items-start justify-between mb-3">
                      <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full border border-gray-300">
                        {{ prompt.category }}
                      </span>
                      <span :class="['px-3 py-1 text-white text-xs font-semibold rounded-full', getStatusBadge(prompt.status).class]">
                        {{ getStatusBadge(prompt.status).text }}
                      </span>
                    </div>
                    <h3 class="text-lg font-bold text-black mb-3">{{ prompt.title }}</h3>
                    <div class="flex items-center justify-between text-sm text-gray-600">
                      <div class="flex items-center gap-4">
                        <span class="flex items-center gap-1">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          {{ prompt.copies }}
                        </span>
                        <span class="flex items-center gap-1">
                          <svg class="w-4 h-4 text-[#FFCB05]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          {{ prompt.rating }}
                        </span>
                      </div>
                      <span class="text-xs">{{ prompt.createdAt }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Drafts Tab -->
              <div v-if="activeTab === 'drafts' && isOwnProfile">
                <div v-if="draftPrompts.length === 0" class="text-center py-12">
                  <svg class="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p class="text-gray-600 text-lg">Aucun brouillon</p>
                </div>
                <div v-else class="space-y-4">
                  <div v-for="draft in draftPrompts" :key="draft.id" class="bg-white rounded-lg shadow-md p-6 border-2 border-black hover:shadow-lg transition-shadow">
                    <div class="flex items-start justify-between">
                      <div class="flex-1">
                        <div class="flex items-center gap-3 mb-2">
                          <h3 class="text-lg font-bold text-black">{{ draft.title }}</h3>
                          <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full border border-gray-300">
                            {{ draft.category }}
                          </span>
                        </div>
                        <p class="text-sm text-gray-500">Dernière sauvegarde: {{ draft.lastSaved }}</p>
                      </div>
                      <div class="flex gap-2">
                        <button @click="editDraft(draft.id)" class="px-4 py-2 bg-[#FFCB05] text-black font-semibold rounded-lg hover:bg-[#E5B604] transition-colors border-2 border-black">
                          Éditer
                        </button>
                        <button @click="deleteDraft(draft.id)" class="px-4 py-2 bg-white text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors border-2 border-black">
                          Supprimer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Favorites Tab -->
              <div v-if="activeTab === 'favorites' && isOwnProfile">
                <div v-if="favoritePrompts.length === 0" class="text-center py-12">
                  <svg class="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <p class="text-gray-600 text-lg">Aucun favori</p>
                </div>
                <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div v-for="prompt in favoritePrompts" :key="prompt.id" class="bg-white rounded-lg shadow-md p-6 border-2 border-black hover:shadow-lg transition-all hover:-translate-y-1">
                    <div class="flex items-start justify-between mb-3">
                      <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full border border-gray-300">
                        {{ prompt.category }}
                      </span>
                      <button class="text-red-500 hover:text-red-600">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    <h3 class="text-lg font-bold text-black mb-2">{{ prompt.title }}</h3>
                    <p class="text-sm text-gray-600 mb-3">Par {{ prompt.author }}</p>
                    <div class="flex items-center justify-between text-sm text-gray-600">
                      <div class="flex items-center gap-4">
                        <span class="flex items-center gap-1">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          {{ prompt.copies }}
                        </span>
                        <span class="flex items-center gap-1">
                          <svg class="w-4 h-4 text-[#FFCB05]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          {{ prompt.rating }}
                        </span>
                      </div>
                      <span class="text-xs">Ajouté le {{ prompt.addedAt }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Statistics Tab -->
              <div v-if="activeTab === 'statistics'">
                <div class="space-y-8">
                  <!-- Prompts Over Time Chart -->
                  <div class="bg-white rounded-lg shadow-md p-6 border-2 border-black">
                    <h3 class="text-xl font-bold text-black mb-4">Création de prompts au fil du temps</h3>
                    <div class="h-64 flex items-end justify-between gap-2">
                      <div v-for="(value, index) in statsData.promptsOverTime.data" :key="index" class="flex-1 flex flex-col items-center gap-2">
                        <div class="w-full bg-[#FFCB05] rounded-t-lg transition-all hover:bg-[#E5B604]" :style="{ height: `${(value / Math.max(...statsData.promptsOverTime.data)) * 100}%` }"></div>
                        <span class="text-sm text-gray-600">{{ statsData.promptsOverTime.labels[index] }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Top Prompts Chart -->
                  <div class="bg-white rounded-lg shadow-md p-6 border-2 border-black">
                    <h3 class="text-xl font-bold text-black mb-4">Prompts les plus populaires</h3>
                    <div class="space-y-3">
                      <div v-for="prompt in statsData.topPrompts" :key="prompt.name" class="flex items-center gap-4">
                        <span class="text-sm text-gray-600 w-40 truncate">{{ prompt.name }}</span>
                        <div class="flex-1 bg-gray-200 rounded-full h-8 relative overflow-hidden border border-gray-300">
                          <div class="bg-[#FFCB05] h-full rounded-full transition-all" :style="{ width: `${(prompt.copies / Math.max(...statsData.topPrompts.map(p => p.copies))) * 100}%` }"></div>
                        </div>
                        <span class="text-sm font-semibold text-black w-16 text-right">{{ prompt.copies }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Categories Breakdown -->
                  <div class="bg-white rounded-lg shadow-md p-6 border-2 border-black">
                    <h3 class="text-xl font-bold text-black mb-4">Répartition par catégories</h3>
                    <div class="flex flex-col md:flex-row items-center gap-8">
                      <div class="w-64 h-64 relative">
                        <svg viewBox="0 0 100 100" class="transform -rotate-90">
                          <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" stroke-width="20" />
                          <circle 
                            v-for="(category, index) in statsData.categoriesBreakdown" 
                            :key="category.name"
                            cx="50" 
                            cy="50" 
                            r="40" 
                            fill="none" 
                            :stroke="category.color" 
                            stroke-width="20"
                            :stroke-dasharray="`${(category.value / statsData.categoriesBreakdown.reduce((sum, c) => sum + c.value, 0)) * 251.2} 251.2`"
                            :stroke-dashoffset="statsData.categoriesBreakdown.slice(0, index).reduce((sum, c) => sum - (c.value / statsData.categoriesBreakdown.reduce((total, cat) => total + cat.value, 0)) * 251.2, 0)"
                          />
                        </svg>
                      </div>
                      <div class="flex-1 space-y-2">
                        <div v-for="category in statsData.categoriesBreakdown" :key="category.name" class="flex items-center justify-between">
                          <div class="flex items-center gap-3">
                            <div class="w-4 h-4 rounded" :style="{ backgroundColor: category.color }"></div>
                            <span class="text-sm text-gray-700">{{ category.name }}</span>
                          </div>
                          <span class="text-sm font-semibold text-black">{{ category.value }} ({{ Math.round((category.value / statsData.categoriesBreakdown.reduce((sum, c) => sum + c.value, 0)) * 100) }}%)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Recent Activity Timeline -->
                  <div class="bg-white rounded-lg shadow-md p-6 border-2 border-black">
                    <h3 class="text-xl font-bold text-black mb-4">Activité récente</h3>
                    <div class="space-y-4">
                      <div v-for="(activity, index) in statsData.recentActivity" :key="index" class="flex gap-4">
                        <div class="flex flex-col items-center">
                          <div class="w-3 h-3 bg-[#FFCB05] rounded-full border-2 border-black"></div>
                          <div v-if="index < statsData.recentActivity.length - 1" class="w-0.5 h-full bg-gray-300 mt-1"></div>
                        </div>
                        <div class="flex-1 pb-4">
                          <p class="text-sm font-semibold text-black">{{ activity.action }}</p>
                          <p class="text-sm text-gray-600">{{ activity.prompt }}</p>
                          <p class="text-xs text-gray-500 mt-1">{{ activity.date }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Sidebar (for viewing other users) -->
        <div v-if="!isOwnProfile" class="lg:w-80 space-y-6">
          <!-- About Section -->
          <div class="bg-white rounded-lg shadow-md p-6 border-2 border-black">
            <h3 class="text-lg font-bold text-black mb-3">À propos</h3>
            <p class="text-gray-700 text-sm leading-relaxed">{{ user.bio }}</p>
          </div>

          <!-- Achievement Badges -->
          <div class="bg-white rounded-lg shadow-md p-6 border-2 border-black">
            <h3 class="text-lg font-bold text-black mb-3">Badges</h3>
            <div class="grid grid-cols-3 gap-3">
              <div v-for="achievement in user.achievements" :key="achievement.id" :class="['flex flex-col items-center p-3 rounded-lg border-2 transition-all', achievement.earned ? 'bg-[#FFCB05] border-black' : 'bg-gray-100 border-gray-300 opacity-50']">
                <span class="text-2xl mb-1">{{ achievement.icon }}</span>
                <span class="text-xs text-center font-semibold text-black">{{ achievement.name }}</span>
              </div>
            </div>
          </div>

          <!-- Top Categories -->
          <div class="bg-white rounded-lg shadow-md p-6 border-2 border-black">
            <h3 class="text-lg font-bold text-black mb-3">Catégories principales</h3>
            <div class="space-y-2">
              <div v-for="category in user.topCategories" :key="category.name" class="flex items-center justify-between">
                <span class="text-sm text-gray-700">{{ category.name }}</span>
                <span class="text-sm font-semibold text-black">{{ category.count }}</span>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="bg-white rounded-lg shadow-md p-6 border-2 border-black">
            <h3 class="text-lg font-bold text-black mb-3">Liens sociaux</h3>
            <div class="flex gap-3">
              <a :href="user.socialLinks.twitter" target="_blank" class="w-10 h-10 bg-[#FFCB05] rounded-lg flex items-center justify-center hover:bg-[#E5B604] transition-colors border-2 border-black">
                <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a :href="user.socialLinks.linkedin" target="_blank" class="w-10 h-10 bg-[#FFCB05] rounded-lg flex items-center justify-center hover:bg-[#E5B604] transition-colors border-2 border-black">
                <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a :href="user.socialLinks.github" target="_blank" class="w-10 h-10 bg-[#FFCB05] rounded-lg flex items-center justify-center hover:bg-[#E5B604] transition-colors border-2 border-black">
                <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>