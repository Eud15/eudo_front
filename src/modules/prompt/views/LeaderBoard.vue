<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

// Types
interface User {
  id: number
  username: string
  avatar: string
  promptsCreated: number
  totalCopies: number
  averageRating: number
  score: number
  rank: number
  rankChange: number
  isCurrentUser?: boolean
}

interface CategoryStats {
  category: string
  topUsers: User[]
}

// State
const activeTab = ref<'global' | 'category'>('global')
const timePeriod = ref<'month' | 'year' | 'all'>('month')
const searchQuery = ref('')
const selectedCategory = ref('all')
const currentPage = ref(1)
const itemsPerPage = 20
const showConfetti = ref(false)

// Mock current user
const currentUser = ref({
  id: 15,
  rank: 15,
  score: 2450,
  monthlyProgress: [
    { week: 'S1', points: 120 },
    { week: 'S2', points: 180 },
    { week: 'S3', points: 240 },
    { week: 'S4', points: 310 }
  ],
  nextBadge: {
    name: 'Expert Prompteur',
    pointsNeeded: 550
  }
})

// Mock data
const allUsers = ref<User[]>([
  {
    id: 1,
    username: 'PromptMaster',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
    promptsCreated: 156,
    totalCopies: 8942,
    averageRating: 4.9,
    score: 12450,
    rank: 1,
    rankChange: 0
  },
  {
    id: 2,
    username: 'AIWizard',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2',
    promptsCreated: 142,
    totalCopies: 7823,
    averageRating: 4.8,
    score: 11230,
    rank: 2,
    rankChange: 1
  },
  {
    id: 3,
    username: 'CreativeGenius',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3',
    promptsCreated: 128,
    totalCopies: 6954,
    averageRating: 4.7,
    score: 9870,
    rank: 3,
    rankChange: -1
  },
  ...Array.from({ length: 47 }, (_, i) => ({
    id: i + 4,
    username: `User${i + 4}`,
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 4}`,
    promptsCreated: Math.floor(Math.random() * 100) + 20,
    totalCopies: Math.floor(Math.random() * 5000) + 500,
    averageRating: Number((Math.random() * 1.5 + 3.5).toFixed(1)),
    score: Math.floor(Math.random() * 8000) + 1000,
    rank: i + 4,
    rankChange: Math.floor(Math.random() * 5) - 2,
    isCurrentUser: i + 4 === currentUser.value.id
  }))
])

const categories = ref([
  'Tous',
  'Marketing',
  'Développement',
  'Design',
  'Écriture',
  'Analyse',
  'Éducation'
])

// Computed
const topThree = computed(() => allUsers.value.slice(0, 3))

const tableUsers = computed(() => {
  let filtered = allUsers.value.slice(3)
  
  if (searchQuery.value) {
    filtered = filtered.filter(user =>
      user.username.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }
  
  return filtered
})

const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return tableUsers.value.slice(start, end)
})

const totalPages = computed(() => Math.ceil(tableUsers.value.length / itemsPerPage))

const timePeriodLabel = computed(() => {
  const labels = {
    month: 'Ce mois',
    year: 'Cette année',
    all: 'Tout le temps'
  }
  return labels[timePeriod.value]
})

// Methods
const getRankChangeIcon = (change: number) => {
  if (change > 0) return '↑'
  if (change < 0) return '↓'
  return '−'
}

const getRankChangeColor = (change: number) => {
  if (change > 0) return 'text-green-600'
  if (change < 0) return 'text-red-600'
  return 'text-gray-400'
}

const getPodiumPosition = (rank: number) => {
  if (rank === 1) return 'order-2'
  if (rank === 2) return 'order-1'
  return 'order-3'
}

const getPodiumHeight = (rank: number) => {
  if (rank === 1) return 'h-64'
  if (rank === 2) return 'h-52'
  return 'h-48'
}

const getPodiumGradient = (rank: number) => {
  if (rank === 1) return 'from-yellow-400 via-yellow-500 to-yellow-600'
  if (rank === 2) return 'from-gray-300 via-gray-400 to-gray-500'
  return 'from-orange-400 via-orange-500 to-orange-600'
}

const getMedalIcon = (rank: number) => {
  if (rank === 1) return '👑'
  if (rank === 2) return '🥈'
  return '🥉'
}

onMounted(() => {
  // Show confetti for #1
  showConfetti.value = true
  setTimeout(() => {
    showConfetti.value = false
  }, 3000)
})
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Confetti effect -->
    <div v-if="showConfetti" class="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <div v-for="i in 50" :key="i" 
        class="absolute animate-confetti"
        :style="{
          left: `${Math.random() * 100}%`,
          top: '-10px',
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${3 + Math.random() * 2}s`
        }">
        <div class="w-2 h-2 rounded-full" 
          :class="['bg-yellow-400', 'bg-[#FFCB05]', 'bg-red-500', 'bg-blue-500', 'bg-green-500'][Math.floor(Math.random() * 5)]">
        </div>
      </div>
    </div>

    <!-- Header -->
    <div class="bg-gradient-to-r from-black via-gray-900 to-black text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-3 text-balance">
            Classement des Meilleurs Prompteurs
          </h1>
          <p class="text-gray-300 text-lg max-w-3xl mx-auto text-pretty">
            Découvrez les créateurs les plus talentueux de notre communauté. Le score est calculé en fonction du nombre de prompts créés, des copies, et des notes reçues.
          </p>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Main content -->
        <div class="flex-1">
          <!-- Filters -->
          <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <!-- Tabs -->
              <div class="flex gap-2">
                <button
                  @click="activeTab = 'global'"
                  :class="[
                    'px-4 py-2 rounded-lg font-medium transition-colors',
                    activeTab === 'global'
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  ]">
                  Global
                </button>
                <button
                  @click="activeTab = 'category'"
                  :class="[
                    'px-4 py-2 rounded-lg font-medium transition-colors',
                    activeTab === 'category'
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  ]">
                  Par Catégorie
                </button>
              </div>

              <!-- Time period -->
              <div class="flex gap-2">
                <button
                  v-for="period in ['month', 'year', 'all']"
                  :key="period"
                  @click="timePeriod = period"
                  :class="[
                    'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    timePeriod === period
                      ? 'bg-[#FFCB05] text-black'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  ]">
                  {{ period === 'month' ? 'Ce mois' : period === 'year' ? 'Cette année' : 'Tout le temps' }}
                </button>
              </div>
            </div>

            <!-- Category selector (if category tab active) -->
            <div v-if="activeTab === 'category'" class="mt-4">
              <select
                v-model="selectedCategory"
                class="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent">
                <option v-for="cat in categories" :key="cat" :value="cat.toLowerCase()">
                  {{ cat }}
                </option>
              </select>
            </div>

            <!-- Search -->
            <div class="mt-4">
              <div class="relative">
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Rechercher un utilisateur..."
                  class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent">
                <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Top 3 Podium -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold mb-6 text-center">Top 3</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              <div
                v-for="user in topThree"
                :key="user.id"
                :class="[
                  'relative rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105',
                  getPodiumPosition(user.rank)
                ]">
                <!-- Gradient background -->
                <div :class="['absolute inset-0 bg-gradient-to-br opacity-90', getPodiumGradient(user.rank)]"></div>
                
                <!-- Glow effect for #1 -->
                <div v-if="user.rank === 1" class="absolute inset-0 animate-pulse bg-yellow-400 opacity-20"></div>
                
                <!-- Content -->
                <div :class="['relative p-6 text-center text-white', getPodiumHeight(user.rank), 'flex flex-col justify-center']">
                  <!-- Medal/Crown -->
                  <div class="text-5xl mb-3 animate-bounce">
                    {{ getMedalIcon(user.rank) }}
                  </div>
                  
                  <!-- Avatar -->
                  <div class="flex justify-center mb-3">
                    <img
                      :src="user.avatar"
                      :alt="user.username"
                      class="w-20 h-20 rounded-full border-4 border-white shadow-lg">
                  </div>
                  
                  <!-- Username -->
                  <h3 class="text-xl font-bold mb-1">{{ user.username }}</h3>
                  
                  <!-- Rank -->
                  <div class="text-sm opacity-90 mb-3">Rang #{{ user.rank }}</div>
                  
                  <!-- Score -->
                  <div class="text-3xl font-bold">
                    {{ user.score.toLocaleString() }}
                  </div>
                  <div class="text-sm opacity-90">points</div>
                  
                  <!-- Stats -->
                  <div class="mt-4 pt-4 border-t border-white/30 grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <div class="font-bold">{{ user.promptsCreated }}</div>
                      <div class="opacity-75">Prompts</div>
                    </div>
                    <div>
                      <div class="font-bold">{{ user.totalCopies.toLocaleString() }}</div>
                      <div class="opacity-75">Copies</div>
                    </div>
                    <div>
                      <div class="font-bold">{{ user.averageRating }}</div>
                      <div class="opacity-75">Note</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Leaderboard Table -->
          <div class="bg-white rounded-lg shadow-sm overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rang
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Utilisateur
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Prompts créés
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Copies totales
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Note moyenne
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Score total
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr
                    v-for="user in paginatedUsers"
                    :key="user.id"
                    :class="[
                      'hover:bg-gray-50 transition-colors group',
                      user.isCurrentUser ? 'bg-yellow-50 hover:bg-yellow-100' : ''
                    ]">
                    <!-- Rank -->
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center gap-2">
                        <span class="text-lg font-bold text-gray-900">{{ user.rank }}</span>
                        <span :class="['text-sm font-medium', getRankChangeColor(user.rankChange)]">
                          {{ getRankChangeIcon(user.rankChange) }}
                        </span>
                      </div>
                    </td>
                    
                    <!-- User -->
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center gap-3">
                        <img
                          :src="user.avatar"
                          :alt="user.username"
                          class="w-10 h-10 rounded-full">
                        <div>
                          <div class="font-medium text-gray-900">{{ user.username }}</div>
                          <div v-if="user.isCurrentUser" class="text-xs text-[#FFCB05] font-medium">
                            C'est vous!
                          </div>
                        </div>
                      </div>
                    </td>
                    
                    <!-- Prompts Created -->
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {{ user.promptsCreated }}
                    </td>
                    
                    <!-- Total Copies -->
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {{ user.totalCopies.toLocaleString() }}
                    </td>
                    
                    <!-- Average Rating -->
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center gap-1">
                        <svg class="w-4 h-4 text-[#FFCB05]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span class="text-sm font-medium text-gray-900">{{ user.averageRating }}</span>
                      </div>
                    </td>
                    
                    <!-- Score -->
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="text-sm font-bold text-gray-900">
                        {{ user.score.toLocaleString() }}
                      </span>
                    </td>
                    
                    <!-- Action -->
                    <td class="px-6 py-4 whitespace-nowrap">
                      <button class="text-sm text-[#FFCB05] hover:text-black font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Voir le profil
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Pagination -->
            <div class="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <div class="text-sm text-gray-700">
                Affichage de {{ (currentPage - 1) * itemsPerPage + 1 }} à {{ Math.min(currentPage * itemsPerPage, tableUsers.length) }} sur {{ tableUsers.length }} utilisateurs
              </div>
              <div class="flex items-center gap-2">
                <button
                  @click="currentPage--"
                  :disabled="currentPage === 1"
                  :class="[
                    'px-3 py-1 rounded border',
                    currentPage === 1
                      ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  ]">
                  Précédent
                </button>
                <div class="flex gap-1">
                  <button
                    v-for="page in totalPages"
                    :key="page"
                    @click="currentPage = page"
                    :class="[
                      'px-3 py-1 rounded',
                      currentPage === page
                        ? 'bg-black text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    ]">
                    {{ page }}
                  </button>
                </div>
                <button
                  @click="currentPage++"
                  :disabled="currentPage === totalPages"
                  :class="[
                    'px-3 py-1 rounded border',
                    currentPage === totalPages
                      ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  ]">
                  Suivant
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Sidebar -->
        <div class="lg:w-80 space-y-6">
          <!-- How to earn points -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <h3 class="text-lg font-bold mb-4 flex items-center gap-2">
              <span class="text-2xl">💡</span>
              Comment gagner des points
            </h3>
            <div class="space-y-3">
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-full bg-[#FFCB05] flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                  10
                </div>
                <div class="text-sm">
                  <div class="font-medium text-gray-900">Créer un prompt</div>
                  <div class="text-gray-600">Points de base par création</div>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-full bg-[#FFCB05] flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                  5
                </div>
                <div class="text-sm">
                  <div class="font-medium text-gray-900">Chaque copie</div>
                  <div class="text-gray-600">Par utilisateur qui copie</div>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-full bg-[#FFCB05] flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                  20
                </div>
                <div class="text-sm">
                  <div class="font-medium text-gray-900">Note 5 étoiles</div>
                  <div class="text-gray-600">Bonus pour excellente note</div>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-full bg-[#FFCB05] flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                  50
                </div>
                <div class="text-sm">
                  <div class="font-medium text-gray-900">Prompt vedette</div>
                  <div class="text-gray-600">Sélectionné par l'équipe</div>
                </div>
              </div>
            </div>
          </div>

          <!-- User's current rank (if logged in) -->
          <div class="bg-gradient-to-br from-black to-gray-800 text-white rounded-lg shadow-sm p-6">
            <h3 class="text-lg font-bold mb-4">Votre classement</h3>
            <div class="text-center mb-4">
              <div class="text-5xl font-bold text-[#FFCB05] mb-2">
                #{{ currentUser.rank }}
              </div>
              <div class="text-gray-300">{{ currentUser.score.toLocaleString() }} points</div>
            </div>
            <div class="pt-4 border-t border-gray-700">
              <div class="text-sm text-gray-300 mb-2">Prochain badge</div>
              <div class="flex items-center justify-between mb-2">
                <span class="font-medium">{{ currentUser.nextBadge.name }}</span>
                <span class="text-[#FFCB05] font-bold">{{ currentUser.nextBadge.pointsNeeded }}</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div
                  class="bg-[#FFCB05] h-2 rounded-full transition-all"
                  :style="{ width: `${(currentUser.score / (currentUser.score + currentUser.nextBadge.pointsNeeded)) * 100}%` }">
                </div>
              </div>
            </div>
          </div>

          <!-- Monthly progress -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <h3 class="text-lg font-bold mb-4">Votre progression ce mois-ci</h3>
            <div class="space-y-3">
              <div
                v-for="week in currentUser.monthlyProgress"
                :key="week.week"
                class="flex items-center gap-3">
                <div class="text-sm font-medium text-gray-600 w-8">{{ week.week }}</div>
                <div class="flex-1">
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div
                      class="bg-[#FFCB05] h-2 rounded-full transition-all"
                      :style="{ width: `${(week.points / 350) * 100}%` }">
                    </div>
                  </div>
                </div>
                <div class="text-sm font-bold text-gray-900 w-12 text-right">
                  {{ week.points }}
                </div>
              </div>
            </div>
            <div class="mt-4 pt-4 border-t border-gray-200 text-center">
              <div class="text-2xl font-bold text-gray-900">
                {{ currentUser.monthlyProgress.reduce((sum, w) => sum + w.points, 0) }}
              </div>
              <div class="text-sm text-gray-600">Points ce mois</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes confetti {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(720deg);
    opacity: 0;
  }
}

.animate-confetti {
  animation: confetti linear forwards;
}
</style>
