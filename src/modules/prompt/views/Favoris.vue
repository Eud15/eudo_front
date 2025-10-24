<template>
  <div class="min-h-screen bg-white">
    <!-- Page Header -->
    <div class="border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-black">Mes Prompts Favoris</h1>
            <p class="text-gray-600 mt-1">{{ filteredPrompts.length }} prompts sauvegardés</p>
          </div>
          <button
            @click="showCreateCollectionModal = true"
            class="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            Créer une collection
          </button>
        </div>
      </div>
    </div>

    <!-- Collections Tabs -->
    <div class="border-b border-gray-200 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-2 overflow-x-auto py-3">
          <button
            @click="activeCollection = null"
            :class="[
              'px-4 py-2 rounded-lg whitespace-nowrap transition-colors',
              activeCollection === null
                ? 'bg-black text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            ]"
          >
            Tous les favoris
          </button>
          <button
            v-for="collection in collections"
            :key="collection.id"
            @click="activeCollection = collection.id"
            :class="[
              'px-4 py-2 rounded-lg whitespace-nowrap transition-colors flex items-center gap-2',
              activeCollection === collection.id
                ? 'bg-black text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            ]"
          >
            <span
              class="w-3 h-3 rounded-full"
              :style="{ backgroundColor: collection.color }"
            ></span>
            {{ collection.name }}
            <span class="text-xs opacity-70">({{ collection.count }})</span>
          </button>
          <button
            @click="showCreateCollectionModal = true"
            class="px-4 py-2 rounded-lg whitespace-nowrap bg-white text-gray-700 hover:bg-gray-100 transition-colors flex items-center gap-2 border-2 border-dashed border-gray-300"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            Nouvelle collection
          </button>
        </div>
      </div>
    </div>

    <!-- Toolbar -->
    <div class="border-b border-gray-200 bg-white sticky top-0 z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <!-- Search -->
          <div class="relative flex-1 max-w-md w-full">
            <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Rechercher dans mes favoris..."
              class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
            />
          </div>

          <div class="flex items-center gap-3 w-full sm:w-auto">
            <!-- Sort -->
            <select
              v-model="sortBy"
              class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
            >
              <option value="date">Date ajoutée</option>
              <option value="name">Nom</option>
              <option value="popularity">Popularité</option>
            </select>

            <!-- View Toggle -->
            <div class="flex bg-gray-100 rounded-lg p-1">
              <button
                @click="viewMode = 'grid'"
                :class="[
                  'p-2 rounded transition-colors',
                  viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                ]"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                @click="viewMode = 'list'"
                :class="[
                  'p-2 rounded transition-colors',
                  viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                ]"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Bulk Actions Bar -->
        <div
          v-if="selectedPrompts.length > 0"
          class="mt-4 p-4 bg-[#FFCB05] rounded-lg flex items-center justify-between"
        >
          <span class="font-medium text-black">{{ selectedPrompts.length }} prompt(s) sélectionné(s)</span>
          <div class="flex items-center gap-3">
            <button
              @click="showMoveModal = true"
              class="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
            >
              Déplacer vers collection
            </button>
            <button
              @click="showDeleteConfirmation = true"
              class="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Supprimer sélectionnés
            </button>
            <button
              @click="selectedPrompts = []"
              class="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Empty State -->
      <div v-if="filteredPrompts.length === 0" class="text-center py-16">
        <div class="w-32 h-32 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
          <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-black mb-2">Vous n'avez pas encore de favoris</h3>
        <p class="text-gray-600 mb-6">Commencez à sauvegarder vos prompts préférés pour les retrouver facilement</p>
        <button class="px-6 py-3 bg-[#FFCB05] text-black font-medium rounded-lg hover:bg-[#E5B700] transition-colors">
          Explorer les prompts
        </button>
      </div>

      <!-- Grid View -->
      <div
        v-else-if="viewMode === 'grid'"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div
          v-for="prompt in filteredPrompts"
          :key="prompt.id"
          :draggable="true"
          @dragstart="handleDragStart($event, prompt)"
          @dragend="handleDragEnd"
          class="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all cursor-move relative"
          :class="{ 'ring-2 ring-[#FFCB05]': selectedPrompts.includes(prompt.id) }"
        >
          <!-- Selection Checkbox -->
          <input
            type="checkbox"
            :checked="selectedPrompts.includes(prompt.id)"
            @change="toggleSelection(prompt.id)"
            class="absolute top-4 left-4 w-5 h-5 rounded border-gray-300 text-[#FFCB05] focus:ring-[#FFCB05]"
          />

          <!-- Favorite Heart -->
          <button
            @click="removeFromFavorites(prompt.id)"
            class="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg class="w-6 h-6 text-red-500 fill-current" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>

          <!-- Date Added Badge -->
          <div class="absolute top-4 left-14 px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded">
            {{ prompt.dateAdded }}
          </div>

          <div class="mt-8">
            <h3 class="text-lg font-bold text-black mb-2">{{ prompt.title }}</h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ prompt.description }}</p>

            <div class="flex items-center gap-2 mb-4">
              <span class="px-2 py-1 bg-gray-100 text-xs text-gray-700 rounded">{{ prompt.category }}</span>
              <span class="text-xs text-gray-500">par {{ prompt.author }}</span>
            </div>

            <div class="flex items-center justify-between text-sm text-gray-500">
              <div class="flex items-center gap-4">
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {{ prompt.views }}
                </span>
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  {{ prompt.copies }}
                </span>
              </div>
            </div>
          </div>

          <!-- Hover Actions -->
          <div class="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-3">
            <button
              @click="showMoveModal = true; selectedPrompts = [prompt.id]"
              class="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
            >
              Déplacer
            </button>
            <button class="px-4 py-2 bg-[#FFCB05] text-black rounded-lg hover:bg-[#E5B700] transition-colors">
              Voir le prompt
            </button>
          </div>
        </div>
      </div>

      <!-- List View -->
      <div v-else class="space-y-4">
        <div
          v-for="prompt in filteredPrompts"
          :key="prompt.id"
          :draggable="true"
          @dragstart="handleDragStart($event, prompt)"
          @dragend="handleDragEnd"
          class="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all cursor-move flex items-center gap-6"
          :class="{ 'ring-2 ring-[#FFCB05]': selectedPrompts.includes(prompt.id) }"
        >
          <input
            type="checkbox"
            :checked="selectedPrompts.includes(prompt.id)"
            @change="toggleSelection(prompt.id)"
            class="w-5 h-5 rounded border-gray-300 text-[#FFCB05] focus:ring-[#FFCB05]"
          />

          <div class="flex-1">
            <div class="flex items-start justify-between mb-2">
              <div>
                <h3 class="text-lg font-bold text-black">{{ prompt.title }}</h3>
                <p class="text-gray-600 text-sm mt-1">{{ prompt.description }}</p>
              </div>
              <div class="flex items-center gap-2">
                <span class="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded">{{ prompt.dateAdded }}</span>
                <button
                  @click="removeFromFavorites(prompt.id)"
                  class="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg class="w-5 h-5 text-red-500 fill-current" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4 text-sm text-gray-500">
                <span class="px-2 py-1 bg-gray-100 text-xs text-gray-700 rounded">{{ prompt.category }}</span>
                <span>par {{ prompt.author }}</span>
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {{ prompt.views }}
                </span>
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  {{ prompt.copies }}
                </span>
              </div>

              <div class="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  @click="showMoveModal = true; selectedPrompts = [prompt.id]"
                  class="px-4 py-2 bg-white border border-gray-300 text-black rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Déplacer
                </button>
                <button class="px-4 py-2 bg-[#FFCB05] text-black rounded-lg hover:bg-[#E5B700] transition-colors">
                  Voir le prompt
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Action Button -->
    <button
      @click="showCreateCollectionModal = true"
      class="fixed bottom-8 right-8 w-14 h-14 bg-[#FFCB05] text-black rounded-full shadow-lg hover:bg-[#E5B700] transition-all hover:scale-110 flex items-center justify-center"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
      </svg>
    </button>

    <!-- Create Collection Modal -->
    <div
      v-if="showCreateCollectionModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click.self="showCreateCollectionModal = false"
    >
      <div class="bg-white rounded-lg max-w-md w-full p-6">
        <h3 class="text-xl font-bold text-black mb-4">Créer une nouvelle collection</h3>
        
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Nom de la collection</label>
            <input
              v-model="newCollectionName"
              type="text"
              placeholder="Ex: Prompts Marketing"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Couleur</label>
            <div class="flex gap-2">
              <button
                v-for="color in collectionColors"
                :key="color"
                @click="newCollectionColor = color"
                :class="[
                  'w-10 h-10 rounded-lg transition-all',
                  newCollectionColor === color ? 'ring-2 ring-black ring-offset-2' : ''
                ]"
                :style="{ backgroundColor: color }"
              ></button>
            </div>
          </div>
        </div>

        <div class="flex gap-3 mt-6">
          <button
            @click="showCreateCollectionModal = false"
            class="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Annuler
          </button>
          <button
            @click="createCollection"
            class="flex-1 px-4 py-2 bg-[#FFCB05] text-black rounded-lg hover:bg-[#E5B700] transition-colors"
          >
            Créer
          </button>
        </div>
      </div>
    </div>

    <!-- Move to Collection Modal -->
    <div
      v-if="showMoveModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click.self="showMoveModal = false"
    >
      <div class="bg-white rounded-lg max-w-md w-full p-6">
        <h3 class="text-xl font-bold text-black mb-4">Déplacer vers une collection</h3>
        
        <div class="space-y-2 max-h-96 overflow-y-auto">
          <button
            v-for="collection in collections"
            :key="collection.id"
            @click="moveToCollection(collection.id)"
            class="w-full p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3 text-left"
          >
            <span
              class="w-4 h-4 rounded-full flex-shrink-0"
              :style="{ backgroundColor: collection.color }"
            ></span>
            <div class="flex-1">
              <div class="font-medium text-black">{{ collection.name }}</div>
              <div class="text-sm text-gray-500">{{ collection.count }} prompts</div>
            </div>
          </button>
        </div>

        <button
          @click="showMoveModal = false"
          class="w-full mt-4 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Annuler
        </button>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div
      v-if="showDeleteConfirmation"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click.self="showDeleteConfirmation = false"
    >
      <div class="bg-white rounded-lg max-w-md w-full p-6">
        <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        
        <h3 class="text-xl font-bold text-black text-center mb-2">Supprimer les favoris ?</h3>
        <p class="text-gray-600 text-center mb-6">
          Êtes-vous sûr de vouloir supprimer {{ selectedPrompts.length }} prompt(s) de vos favoris ? Cette action est irréversible.
        </p>

        <div class="flex gap-3">
          <button
            @click="showDeleteConfirmation = false"
            class="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Annuler
          </button>
          <button
            @click="confirmDelete"
            class="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// State
const searchQuery = ref('')
const sortBy = ref('date')
const viewMode = ref('grid')
const activeCollection = ref(null)
const selectedPrompts = ref([])
const showCreateCollectionModal = ref(false)
const showMoveModal = ref(false)
const showDeleteConfirmation = ref(false)
const newCollectionName = ref('')
const newCollectionColor = ref('#3B82F6')
const draggedPrompt = ref(null)

// Collection colors
const collectionColors = [
  '#3B82F6', '#10B981', '#F59E0B', '#EF4444', 
  '#8B5CF6', '#EC4899', '#14B8A6', '#F97316'
]

// Mock data
const collections = ref([
  { id: 1, name: 'Marketing', color: '#3B82F6', count: 12 },
  { id: 2, name: 'Développement', color: '#10B981', count: 8 },
  { id: 3, name: 'Design', color: '#F59E0B', count: 15 }
])

const prompts = ref([
  {
    id: 1,
    title: 'Générateur de posts LinkedIn',
    description: 'Créez des posts engageants pour LinkedIn avec ce prompt optimisé',
    category: 'Marketing',
    author: 'Marie Dubois',
    views: 1234,
    copies: 89,
    dateAdded: 'Il y a 2 jours',
    collectionId: 1
  },
  {
    id: 2,
    title: 'Analyseur de code Python',
    description: 'Analysez et optimisez votre code Python automatiquement',
    category: 'Développement',
    author: 'Jean Martin',
    views: 2341,
    copies: 156,
    dateAdded: 'Il y a 5 jours',
    collectionId: 2
  },
  {
    id: 3,
    title: 'Créateur de palettes de couleurs',
    description: 'Générez des palettes harmonieuses pour vos projets design',
    category: 'Design',
    author: 'Sophie Laurent',
    views: 3456,
    copies: 234,
    dateAdded: 'Il y a 1 semaine',
    collectionId: 3
  },
  {
    id: 4,
    title: 'Rédacteur d\'emails marketing',
    description: 'Créez des emails de vente persuasifs et engageants',
    category: 'Marketing',
    author: 'Pierre Durand',
    views: 987,
    copies: 67,
    dateAdded: 'Il y a 3 jours',
    collectionId: 1
  },
  {
    id: 5,
    title: 'Générateur de tests unitaires',
    description: 'Créez automatiquement des tests pour votre code',
    category: 'Développement',
    author: 'Lucas Bernard',
    views: 1567,
    copies: 98,
    dateAdded: 'Il y a 4 jours',
    collectionId: 2
  },
  {
    id: 6,
    title: 'Assistant UX Writing',
    description: 'Rédigez des microtextes clairs et efficaces pour vos interfaces',
    category: 'Design',
    author: 'Emma Petit',
    views: 2234,
    copies: 145,
    dateAdded: 'Il y a 6 jours',
    collectionId: 3
  }
])

// Computed
const filteredPrompts = computed(() => {
  let filtered = prompts.value

  // Filter by collection
  if (activeCollection.value !== null) {
    filtered = filtered.filter(p => p.collectionId === activeCollection.value)
  }

  // Filter by search
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    )
  }

  // Sort
  if (sortBy.value === 'name') {
    filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title))
  } else if (sortBy.value === 'popularity') {
    filtered = [...filtered].sort((a, b) => b.copies - a.copies)
  }

  return filtered
})

// Methods
const toggleSelection = (id) => {
  const index = selectedPrompts.value.indexOf(id)
  if (index > -1) {
    selectedPrompts.value.splice(index, 1)
  } else {
    selectedPrompts.value.push(id)
  }
}

const removeFromFavorites = (id) => {
  const index = prompts.value.findIndex(p => p.id === id)
  if (index > -1) {
    prompts.value.splice(index, 1)
    // Update collection count
    const prompt = prompts.value[index]
    if (prompt && prompt.collectionId) {
      const collection = collections.value.find(c => c.id === prompt.collectionId)
      if (collection) collection.count--
    }
  }
}

const createCollection = () => {
  if (newCollectionName.value.trim()) {
    collections.value.push({
      id: Date.now(),
      name: newCollectionName.value,
      color: newCollectionColor.value,
      count: 0
    })
    newCollectionName.value = ''
    newCollectionColor.value = '#3B82F6'
    showCreateCollectionModal.value = false
  }
}

const moveToCollection = (collectionId) => {
  selectedPrompts.value.forEach(promptId => {
    const prompt = prompts.value.find(p => p.id === promptId)
    if (prompt) {
      // Update old collection count
      if (prompt.collectionId) {
        const oldCollection = collections.value.find(c => c.id === prompt.collectionId)
        if (oldCollection) oldCollection.count--
      }
      // Update prompt collection
      prompt.collectionId = collectionId
      // Update new collection count
      const newCollection = collections.value.find(c => c.id === collectionId)
      if (newCollection) newCollection.count++
    }
  })
  selectedPrompts.value = []
  showMoveModal.value = false
}

const confirmDelete = () => {
  selectedPrompts.value.forEach(id => {
    const index = prompts.value.findIndex(p => p.id === id)
    if (index > -1) {
      const prompt = prompts.value[index]
      if (prompt.collectionId) {
        const collection = collections.value.find(c => c.id === prompt.collectionId)
        if (collection) collection.count--
      }
      prompts.value.splice(index, 1)
    }
  })
  selectedPrompts.value = []
  showDeleteConfirmation.value = false
}

const handleDragStart = (event, prompt) => {
  draggedPrompt.value = prompt
  event.dataTransfer.effectAllowed = 'move'
}

const handleDragEnd = () => {
  draggedPrompt.value = null
}
</script>
