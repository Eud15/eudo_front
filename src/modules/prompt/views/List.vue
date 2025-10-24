<template>
  <div class="min-h-screen bg-white">
    <!-- Top Section -->
    <div class="bg-black text-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 class="text-4xl font-bold mb-6">Bibliothèque de Prompts</h1>
        
        <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <!-- Search Bar -->
          <div class="flex-1 relative w-full">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Rechercher des prompts..."
              class="w-full px-4 py-3 pl-12 bg-white text-black rounded-lg border-2 border-gray-200 focus:border-[#FFCB05] focus:outline-none transition-colors"
            />
            <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <!-- View Toggle -->
          <div class="flex bg-white rounded-lg p-1 border-2 border-gray-200">
            <button
              @click="viewMode = 'grid'"
              :class="[
                'px-4 py-2 rounded-md transition-colors',
                viewMode === 'grid' ? 'bg-[#FFCB05] text-black' : 'text-gray-600 hover:text-black'
              ]"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              @click="viewMode = 'list'"
              :class="[
                'px-4 py-2 rounded-md transition-colors',
                viewMode === 'list' ? 'bg-[#FFCB05] text-black' : 'text-gray-600 hover:text-black'
              ]"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          <!-- Mobile Filter Toggle -->
          <button
            @click="mobileFiltersOpen = !mobileFiltersOpen"
            class="sm:hidden px-4 py-3 bg-[#FFCB05] text-black rounded-lg font-semibold hover:bg-[#e6b804] transition-colors"
          >
            Filtres
          </button>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Sidebar Filters -->
        <aside
          :class="[
            'lg:w-1/4 lg:sticky lg:top-8 lg:self-start',
            'fixed inset-0 z-50 bg-white lg:bg-transparent lg:relative',
            'transition-transform lg:transition-none',
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          ]"
        >
          <div class="h-full overflow-y-auto lg:overflow-visible p-6 lg:p-0">
            <!-- Mobile Close Button -->
            <button
              @click="mobileFiltersOpen = false"
              class="lg:hidden absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div class="space-y-6">
              <!-- Categories Filter -->
              <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 class="font-bold text-black mb-3">Catégories</h3>
                <div class="space-y-2">
                  <label v-for="category in categories" :key="category.id" class="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      :value="category.id"
                      v-model="selectedCategories"
                      class="w-4 h-4 rounded border-gray-300 text-[#FFCB05] focus:ring-[#FFCB05]"
                    />
                    <span class="text-sm text-gray-700 group-hover:text-black flex-1">{{ category.name }}</span>
                    <span class="text-xs text-gray-500">{{ category.count }}</span>
                  </label>
                </div>
              </div>

              <!-- Rating Filter -->
              <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 class="font-bold text-black mb-3">Note minimale</h3>
                <div class="flex gap-1">
                  <button
                    v-for="star in 5"
                    :key="star"
                    @click="minRating = star"
                    class="transition-transform hover:scale-110"
                  >
                    <svg
                      class="w-6 h-6"
                      :class="star <= minRating ? 'text-[#FFCB05] fill-current' : 'text-gray-300'"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Sort Options -->
              <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 class="font-bold text-black mb-3">Trier par</h3>
                <div class="space-y-2">
                  <label v-for="option in sortOptions" :key="option.value" class="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      :value="option.value"
                      v-model="sortBy"
                      class="w-4 h-4 border-gray-300 text-[#FFCB05] focus:ring-[#FFCB05]"
                    />
                    <span class="text-sm text-gray-700 group-hover:text-black">{{ option.label }}</span>
                  </label>
                </div>
              </div>

              <!-- Difficulty Filter -->
              <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 class="font-bold text-black mb-3">Niveau de difficulté</h3>
                <div class="space-y-2">
                  <label v-for="level in difficultyLevels" :key="level" class="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      :value="level"
                      v-model="selectedDifficulty"
                      class="w-4 h-4 border-gray-300 text-[#FFCB05] focus:ring-[#FFCB05]"
                    />
                    <span class="text-sm text-gray-700 group-hover:text-black">{{ level }}</span>
                  </label>
                </div>
              </div>

              <!-- AI Model Filter -->
              <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 class="font-bold text-black mb-3">Modèle IA</h3>
                <div class="space-y-2">
                  <label v-for="model in aiModels" :key="model" class="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      :value="model"
                      v-model="selectedModels"
                      class="w-4 h-4 rounded border-gray-300 text-[#FFCB05] focus:ring-[#FFCB05]"
                    />
                    <span class="text-sm text-gray-700 group-hover:text-black">{{ model }}</span>
                  </label>
                </div>
              </div>

              <!-- Reset Button -->
              <button
                @click="resetFilters"
                class="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold"
              >
                Réinitialiser les filtres
              </button>
            </div>
          </div>
        </aside>

        <!-- Main Content Area -->
        <main class="flex-1">
          <!-- Results Count and Active Filters -->
          <div class="mb-6">
            <p class="text-gray-600 mb-3">
              <span class="font-semibold text-black">{{ filteredPrompts.length }}</span> prompts trouvés
            </p>
            
            <!-- Active Filter Chips -->
            <div v-if="hasActiveFilters" class="flex flex-wrap gap-2">
              <span
                v-for="category in selectedCategories"
                :key="'cat-' + category"
                class="inline-flex items-center gap-2 px-3 py-1 bg-[#FFCB05] text-black rounded-full text-sm font-medium"
              >
                {{ getCategoryName(category) }}
                <button @click="removeCategory(category)" class="hover:text-gray-700">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
              
              <span
                v-if="minRating > 0"
                class="inline-flex items-center gap-2 px-3 py-1 bg-[#FFCB05] text-black rounded-full text-sm font-medium"
              >
                {{ minRating }}+ étoiles
                <button @click="minRating = 0" class="hover:text-gray-700">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            </div>
          </div>

          <!-- Prompt Cards Grid/List -->
          <div v-if="!loading && filteredPrompts.length > 0">
            <div
              :class="[
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                  : 'space-y-4'
              ]"
            >
              <div
                v-for="prompt in paginatedPrompts"
                :key="prompt.id"
                class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#FFCB05] hover:shadow-lg transition-all group"
              >
                <!-- Title -->
                <h3 class="font-bold text-lg text-black mb-2 line-clamp-2 group-hover:text-[#FFCB05] transition-colors">
                  {{ prompt.title }}
                </h3>

                <!-- Description -->
                <p class="text-gray-600 text-sm mb-4 line-clamp-3">
                  {{ prompt.description }}
                </p>

                <!-- Category Badge -->
                <span class="inline-block px-3 py-1 bg-black text-white text-xs rounded-full mb-4">
                  {{ prompt.category }}
                </span>

                <!-- Creator Info -->
                <div class="flex items-center gap-2 mb-4">
                  <div class="w-8 h-8 rounded-full bg-[#FFCB05] flex items-center justify-center text-black font-bold text-sm">
                    {{ prompt.creator.charAt(0) }}
                  </div>
                  <span class="text-sm text-gray-700">{{ prompt.creator }}</span>
                </div>

                <!-- Stats Row -->
                <div class="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>{{ prompt.views }}</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>{{ prompt.copies }}</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <svg class="w-4 h-4 text-[#FFCB05] fill-current" viewBox="0 0 24 24">
                      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <span class="font-semibold text-black">{{ prompt.rating }}</span>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex gap-2">
                  <button class="flex-1 px-4 py-2 bg-[#FFCB05] text-black rounded-lg font-semibold hover:bg-[#e6b804] transition-colors">
                    Copier
                  </button>
                  <button class="flex-1 px-4 py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                    Détails
                  </button>
                </div>
              </div>
            </div>

            <!-- Pagination -->
            <div class="mt-8 flex justify-center items-center gap-2">
              <button
                @click="currentPage--"
                :disabled="currentPage === 1"
                :class="[
                  'px-4 py-2 rounded-lg font-semibold transition-colors',
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-black text-white hover:bg-gray-800'
                ]"
              >
                Précédent
              </button>
              
              <div class="flex gap-2">
                <button
                  v-for="page in totalPages"
                  :key="page"
                  @click="currentPage = page"
                  :class="[
                    'w-10 h-10 rounded-lg font-semibold transition-colors',
                    currentPage === page
                      ? 'bg-[#FFCB05] text-black'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  ]"
                >
                  {{ page }}
                </button>
              </div>
              
              <button
                @click="currentPage++"
                :disabled="currentPage === totalPages"
                :class="[
                  'px-4 py-2 rounded-lg font-semibold transition-colors',
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-black text-white hover:bg-gray-800'
                ]"
              >
                Suivant
              </button>
            </div>
          </div>

          <!-- Loading State -->
          <div v-else-if="loading" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div v-for="i in 6" :key="i" class="bg-gray-100 rounded-lg p-6 animate-pulse">
              <div class="h-6 bg-gray-300 rounded mb-4"></div>
              <div class="h-4 bg-gray-300 rounded mb-2"></div>
              <div class="h-4 bg-gray-300 rounded mb-4 w-3/4"></div>
              <div class="h-8 bg-gray-300 rounded"></div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-else class="text-center py-16">
            <svg class="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="text-xl font-bold text-black mb-2">Aucun prompt trouvé</h3>
            <p class="text-gray-600 mb-4">Essayez de modifier vos filtres ou votre recherche</p>
            <button
              @click="resetFilters"
              class="px-6 py-3 bg-[#FFCB05] text-black rounded-lg font-semibold hover:bg-[#e6b804] transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// State
const searchQuery = ref('')
const viewMode = ref('grid')
const mobileFiltersOpen = ref(false)
const selectedCategories = ref([])
const minRating = ref(0)
const sortBy = ref('popular')
const selectedDifficulty = ref('')
const selectedModels = ref([])
const currentPage = ref(1)
const loading = ref(false)
const itemsPerPage = 9

// Filter Options
const categories = ref([
  { id: 'marketing', name: 'Marketing', count: 234 },
  { id: 'code', name: 'Code', count: 189 },
  { id: 'writing', name: 'Écriture', count: 156 },
  { id: 'design', name: 'Design', count: 98 },
  { id: 'business', name: 'Business', count: 145 },
  { id: 'education', name: 'Éducation', count: 87 },
  { id: 'productivity', name: 'Productivité', count: 123 },
  { id: 'creative', name: 'Créatif', count: 76 }
])

const sortOptions = ref([
  { value: 'popular', label: 'Populaire' },
  { value: 'recent', label: 'Récent' },
  { value: 'rating', label: 'Mieux notés' }
])

const difficultyLevels = ref(['Débutant', 'Intermédiaire', 'Avancé', 'Expert'])

const aiModels = ref(['GPT-4', 'GPT-3.5', 'Claude', 'Gemini', 'Llama', 'Mistral'])

// Mock Data
const prompts = ref([
  {
    id: 1,
    title: 'Générateur de contenu marketing viral',
    description: 'Créez du contenu marketing engageant et viral pour vos réseaux sociaux avec ce prompt optimisé pour maximiser l\'engagement.',
    category: 'Marketing',
    creator: 'Marie Dubois',
    views: 1234,
    copies: 456,
    rating: 4.8,
    difficulty: 'Intermédiaire',
    model: 'GPT-4'
  },
  {
    id: 2,
    title: 'Assistant de code Python avancé',
    description: 'Un prompt spécialisé pour générer du code Python propre, documenté et optimisé avec les meilleures pratiques.',
    category: 'Code',
    creator: 'Thomas Martin',
    views: 2341,
    copies: 789,
    rating: 4.9,
    difficulty: 'Avancé',
    model: 'GPT-4'
  },
  {
    id: 3,
    title: 'Rédacteur d\'articles de blog SEO',
    description: 'Générez des articles de blog optimisés pour le SEO avec une structure parfaite et un contenu engageant.',
    category: 'Écriture',
    creator: 'Sophie Laurent',
    views: 987,
    copies: 234,
    rating: 4.7,
    difficulty: 'Débutant',
    model: 'Claude'
  },
  {
    id: 4,
    title: 'Créateur de palettes de couleurs',
    description: 'Obtenez des palettes de couleurs harmonieuses et professionnelles pour vos projets de design.',
    category: 'Design',
    creator: 'Lucas Bernard',
    views: 1567,
    copies: 345,
    rating: 4.6,
    difficulty: 'Débutant',
    model: 'GPT-3.5'
  },
  {
    id: 5,
    title: 'Analyseur de stratégie business',
    description: 'Analysez et optimisez votre stratégie business avec des insights actionnables et des recommandations précises.',
    category: 'Business',
    creator: 'Emma Petit',
    views: 2156,
    copies: 567,
    rating: 4.8,
    difficulty: 'Expert',
    model: 'GPT-4'
  },
  {
    id: 6,
    title: 'Générateur de quiz éducatifs',
    description: 'Créez des quiz interactifs et éducatifs adaptés à tous les niveaux d\'apprentissage.',
    category: 'Éducation',
    creator: 'Pierre Moreau',
    views: 876,
    copies: 198,
    rating: 4.5,
    difficulty: 'Intermédiaire',
    model: 'Gemini'
  },
  {
    id: 7,
    title: 'Optimiseur de productivité quotidienne',
    description: 'Planifiez votre journée de manière optimale avec des suggestions personnalisées pour maximiser votre productivité.',
    category: 'Productivité',
    creator: 'Julie Rousseau',
    views: 1432,
    copies: 423,
    rating: 4.7,
    difficulty: 'Débutant',
    model: 'Claude'
  },
  {
    id: 8,
    title: 'Générateur d\'histoires créatives',
    description: 'Créez des histoires captivantes et originales avec des personnages développés et des intrigues complexes.',
    category: 'Créatif',
    creator: 'Antoine Simon',
    views: 1098,
    copies: 287,
    rating: 4.9,
    difficulty: 'Intermédiaire',
    model: 'GPT-4'
  },
  {
    id: 9,
    title: 'Consultant en stratégie de contenu',
    description: 'Développez une stratégie de contenu complète pour votre marque avec des recommandations détaillées.',
    category: 'Marketing',
    creator: 'Camille Leroy',
    views: 1765,
    copies: 512,
    rating: 4.8,
    difficulty: 'Avancé',
    model: 'GPT-4'
  },
  {
    id: 10,
    title: 'Debugger de code JavaScript',
    description: 'Identifiez et corrigez les bugs dans votre code JavaScript avec des explications détaillées.',
    category: 'Code',
    creator: 'Nicolas Garnier',
    views: 2234,
    copies: 678,
    rating: 4.7,
    difficulty: 'Avancé',
    model: 'Claude'
  },
  {
    id: 11,
    title: 'Rédacteur de newsletters engageantes',
    description: 'Créez des newsletters qui captivent vos lecteurs et augmentent vos taux d\'ouverture.',
    category: 'Écriture',
    creator: 'Isabelle Bonnet',
    views: 1345,
    copies: 389,
    rating: 4.6,
    difficulty: 'Intermédiaire',
    model: 'GPT-3.5'
  },
  {
    id: 12,
    title: 'Designer de logos minimalistes',
    description: 'Générez des concepts de logos minimalistes et modernes pour votre marque.',
    category: 'Design',
    creator: 'Maxime Fournier',
    views: 1876,
    copies: 445,
    rating: 4.5,
    difficulty: 'Intermédiaire',
    model: 'Gemini'
  }
])

// Computed
const filteredPrompts = computed(() => {
  let filtered = prompts.value

  // Search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    )
  }

  // Category filter
  if (selectedCategories.value.length > 0) {
    filtered = filtered.filter(p =>
      selectedCategories.value.includes(getCategoryId(p.category))
    )
  }

  // Rating filter
  if (minRating.value > 0) {
    filtered = filtered.filter(p => p.rating >= minRating.value)
  }

  // Difficulty filter
  if (selectedDifficulty.value) {
    filtered = filtered.filter(p => p.difficulty === selectedDifficulty.value)
  }

  // Model filter
  if (selectedModels.value.length > 0) {
    filtered = filtered.filter(p => selectedModels.value.includes(p.model))
  }

  // Sort
  if (sortBy.value === 'popular') {
    filtered.sort((a, b) => b.views - a.views)
  } else if (sortBy.value === 'recent') {
    filtered.sort((a, b) => b.id - a.id)
  } else if (sortBy.value === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating)
  }

  return filtered
})

const totalPages = computed(() => Math.ceil(filteredPrompts.value.length / itemsPerPage))

const paginatedPrompts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredPrompts.value.slice(start, end)
})

const hasActiveFilters = computed(() => {
  return selectedCategories.value.length > 0 ||
    minRating.value > 0 ||
    selectedDifficulty.value ||
    selectedModels.value.length > 0
})

// Methods
const getCategoryName = (id) => {
  return categories.value.find(c => c.id === id)?.name || id
}

const getCategoryId = (name) => {
  return categories.value.find(c => c.name === name)?.id || name.toLowerCase()
}

const removeCategory = (categoryId) => {
  selectedCategories.value = selectedCategories.value.filter(c => c !== categoryId)
}

const resetFilters = () => {
  selectedCategories.value = []
  minRating.value = 0
  sortBy.value = 'popular'
  selectedDifficulty.value = ''
  selectedModels.value = []
  searchQuery.value = ''
  currentPage.value = 1
}
</script>