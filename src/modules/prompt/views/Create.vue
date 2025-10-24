<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

// Form mode
const isEditMode = ref(false)

// Form data
const formData = ref({
  title: '',
  mainCategory: '',
  subCategory: '',
  content: '',
  description: '',
  tags: [] as string[],
  aiModels: [] as string[],
  difficulty: 'Débutant',
  variables: [] as { name: string; description: string }[],
  exampleOutput: ''
})

// Tag input
const tagInput = ref('')
const suggestedTags = ref(['SEO', 'Marketing', 'Code', 'Créatif', 'Analyse', 'Traduction'])

// Categories
const categories = ref([
  { value: 'marketing', label: 'Marketing', subCategories: ['SEO', 'Réseaux sociaux', 'Email', 'Publicité'] },
  { value: 'code', label: 'Développement', subCategories: ['Frontend', 'Backend', 'DevOps', 'Debug'] },
  { value: 'writing', label: 'Rédaction', subCategories: ['Articles', 'Scripts', 'Poésie', 'Technique'] },
  { value: 'design', label: 'Design', subCategories: ['UI/UX', 'Graphisme', 'Branding', '3D'] },
  { value: 'data', label: 'Data & Analyse', subCategories: ['Analyse', 'Visualisation', 'SQL', 'Machine Learning'] },
  { value: 'education', label: 'Éducation', subCategories: ['Cours', 'Quiz', 'Tutoriels', 'Exercices'] }
])

const aiModels = ref([
  'GPT-4',
  'GPT-3.5',
  'Claude 3 Opus',
  'Claude 3 Sonnet',
  'Gemini Pro',
  'Mistral Large',
  'Llama 3'
])

// Computed
const subCategories = computed(() => {
  const category = categories.value.find(c => c.value === formData.value.mainCategory)
  return category?.subCategories || []
})

const filteredTags = computed(() => {
  if (!tagInput.value) return suggestedTags.value
  return suggestedTags.value.filter(tag => 
    tag.toLowerCase().includes(tagInput.value.toLowerCase()) &&
    !formData.value.tags.includes(tag)
  )
})

// Character counters
const titleCount = computed(() => formData.value.title.length)
const contentCount = computed(() => formData.value.content.length)
const descriptionCount = computed(() => formData.value.description.length)

// Validation
const errors = ref<Record<string, string>>({})

const validateForm = () => {
  errors.value = {}
  
  if (!formData.value.title.trim()) {
    errors.value.title = 'Le titre est requis'
  } else if (formData.value.title.length > 100) {
    errors.value.title = 'Le titre ne peut pas dépasser 100 caractères'
  }
  
  if (!formData.value.mainCategory) {
    errors.value.mainCategory = 'La catégorie principale est requise'
  }
  
  if (!formData.value.content.trim()) {
    errors.value.content = 'Le contenu du prompt est requis'
  } else if (formData.value.content.length > 5000) {
    errors.value.content = 'Le contenu ne peut pas dépasser 5000 caractères'
  }
  
  if (!formData.value.description.trim()) {
    errors.value.description = 'La description est requise'
  } else if (formData.value.description.length > 500) {
    errors.value.description = 'La description ne peut pas dépasser 500 caractères'
  }
  
  return Object.keys(errors.value).length === 0
}

// Preview
const showPreview = ref(false)
const showContentPreview = ref(false)

// Success modal
const showSuccessModal = ref(false)

// Autosave
const lastSaved = ref<Date | null>(null)
const isSaving = ref(false)

const saveAsDraft = async () => {
  isSaving.value = true
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500))
  lastSaved.value = new Date()
  isSaving.value = false
}

let autosaveInterval: number | null = null

onMounted(() => {
  // Autosave every 30 seconds
  autosaveInterval = window.setInterval(() => {
    if (formData.value.title || formData.value.content) {
      saveAsDraft()
    }
  }, 30000)
})

onUnmounted(() => {
  if (autosaveInterval) {
    clearInterval(autosaveInterval)
  }
})

// Actions
const addTag = (tag: string) => {
  if (tag && !formData.value.tags.includes(tag)) {
    formData.value.tags.push(tag)
    tagInput.value = ''
  }
}

const removeTag = (index: number) => {
  formData.value.tags.splice(index, 1)
}

const addVariable = () => {
  formData.value.variables.push({ name: '', description: '' })
}

const removeVariable = (index: number) => {
  formData.value.variables.splice(index, 1)
}

const toggleAIModel = (model: string) => {
  const index = formData.value.aiModels.indexOf(model)
  if (index > -1) {
    formData.value.aiModels.splice(index, 1)
  } else {
    formData.value.aiModels.push(model)
  }
}

const handleSubmit = () => {
  if (validateForm()) {
    showSuccessModal.value = true
  }
}

const handleCancel = () => {
  if (confirm('Êtes-vous sûr de vouloir annuler ? Les modifications non sauvegardées seront perdues.')) {
    // Navigate back
    console.log('Cancelled')
  }
}

// Format content
const insertFormat = (format: string) => {
  const textarea = document.querySelector('textarea[name="content"]') as HTMLTextAreaElement
  if (!textarea) return
  
  const start = textarea.selectionStart
  const end = textarea.selectionEnd
  const selectedText = formData.value.content.substring(start, end)
  
  let formattedText = ''
  switch (format) {
    case 'bold':
      formattedText = `**${selectedText}**`
      break
    case 'italic':
      formattedText = `*${selectedText}*`
      break
    case 'code':
      formattedText = `\`${selectedText}\``
      break
  }
  
  formData.value.content = 
    formData.value.content.substring(0, start) + 
    formattedText + 
    formData.value.content.substring(end)
}

// Watch for category change to reset subcategory
watch(() => formData.value.mainCategory, () => {
  formData.value.subCategory = ''
})
</script>

<template>
  <div class="min-h-screen bg-white pb-24">
    <!-- Header -->
    <header class="bg-black border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-white">
              {{ isEditMode ? 'Modifier le Prompt' : 'Créer un Nouveau Prompt' }}
            </h1>
            <div v-if="lastSaved" class="mt-2 flex items-center gap-2 text-sm text-gray-400">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Dernière sauvegarde: {{ lastSaved.toLocaleTimeString('fr-FR') }}</span>
              <span v-if="isSaving" class="text-[#FFCB05]">Sauvegarde en cours...</span>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <button
              @click="saveAsDraft"
              class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Sauvegarder comme brouillon
            </button>
            <button
              @click="handleCancel"
              class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Form -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <form @submit.prevent="handleSubmit" class="space-y-8">
        <!-- Title -->
        <div>
          <label class="block text-sm font-medium text-gray-900 mb-2">
            Titre du prompt <span class="text-red-500">*</span>
          </label>
          <input
            v-model="formData.title"
            type="text"
            maxlength="100"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
            :class="{ 'border-red-500': errors.title }"
            placeholder="Ex: Générer des idées de contenu pour les réseaux sociaux"
          />
          <div class="mt-1 flex items-center justify-between">
            <span v-if="errors.title" class="text-sm text-red-500">{{ errors.title }}</span>
            <span class="text-sm text-gray-500 ml-auto">{{ titleCount }}/100</span>
          </div>
        </div>

        <!-- Categories -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-900 mb-2">
              Catégorie principale <span class="text-red-500">*</span>
            </label>
            <select
              v-model="formData.mainCategory"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
              :class="{ 'border-red-500': errors.mainCategory }"
            >
              <option value="">Sélectionner une catégorie</option>
              <option v-for="cat in categories" :key="cat.value" :value="cat.value">
                {{ cat.label }}
              </option>
            </select>
            <span v-if="errors.mainCategory" class="text-sm text-red-500 mt-1">{{ errors.mainCategory }}</span>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-900 mb-2">
              Sous-catégorie
            </label>
            <select
              v-model="formData.subCategory"
              :disabled="!formData.mainCategory"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
            >
              <option value="">Sélectionner une sous-catégorie</option>
              <option v-for="subCat in subCategories" :key="subCat" :value="subCat">
                {{ subCat }}
              </option>
            </select>
          </div>
        </div>

        <!-- Content -->
        <div>
          <div class="flex items-center justify-between mb-2">
            <label class="block text-sm font-medium text-gray-900">
              Contenu du prompt <span class="text-red-500">*</span>
            </label>
            <button
              type="button"
              @click="showContentPreview = !showContentPreview"
              class="text-sm text-[#FFCB05] hover:underline"
            >
              {{ showContentPreview ? 'Éditer' : 'Aperçu' }}
            </button>
          </div>
          
          <!-- Toolbar -->
          <div v-if="!showContentPreview" class="flex items-center gap-2 mb-2 p-2 bg-gray-50 rounded-lg border border-gray-200">
            <button
              type="button"
              @click="insertFormat('bold')"
              class="p-2 hover:bg-gray-200 rounded transition-colors"
              title="Gras"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z" />
              </svg>
            </button>
            <button
              type="button"
              @click="insertFormat('italic')"
              class="p-2 hover:bg-gray-200 rounded transition-colors"
              title="Italique"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </button>
            <button
              type="button"
              @click="insertFormat('code')"
              class="p-2 hover:bg-gray-200 rounded transition-colors"
              title="Code"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </button>
          </div>

          <textarea
            v-if="!showContentPreview"
            v-model="formData.content"
            name="content"
            rows="10"
            maxlength="5000"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent font-mono text-sm"
            :class="{ 'border-red-500': errors.content }"
            placeholder="Écrivez votre prompt ici... Utilisez {variable} pour les variables personnalisables."
          ></textarea>

          <div v-else class="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 min-h-[240px]">
            <div class="prose prose-sm max-w-none" v-html="formData.content.replace(/\n/g, '<br>')"></div>
          </div>

          <div class="mt-1 flex items-center justify-between">
            <span v-if="errors.content" class="text-sm text-red-500">{{ errors.content }}</span>
            <span class="text-sm text-gray-500 ml-auto">{{ contentCount }}/5000</span>
          </div>
        </div>

        <!-- Description -->
        <div>
          <label class="block text-sm font-medium text-gray-900 mb-2">
            Description et contexte d'utilisation <span class="text-red-500">*</span>
          </label>
          <textarea
            v-model="formData.description"
            rows="4"
            maxlength="500"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
            :class="{ 'border-red-500': errors.description }"
            placeholder="Décrivez comment et quand utiliser ce prompt..."
          ></textarea>
          <div class="mt-1 flex items-center justify-between">
            <span v-if="errors.description" class="text-sm text-red-500">{{ errors.description }}</span>
            <span class="text-sm text-gray-500 ml-auto">{{ descriptionCount }}/500</span>
          </div>
        </div>

        <!-- Tags -->
        <div>
          <label class="block text-sm font-medium text-gray-900 mb-2">
            Tags
          </label>
          <div class="relative">
            <input
              v-model="tagInput"
              type="text"
              @keydown.enter.prevent="addTag(tagInput)"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
              placeholder="Ajouter des tags..."
            />
            <div v-if="tagInput && filteredTags.length > 0" class="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
              <button
                v-for="tag in filteredTags"
                :key="tag"
                type="button"
                @click="addTag(tag)"
                class="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors"
              >
                {{ tag }}
              </button>
            </div>
          </div>
          <div v-if="formData.tags.length > 0" class="mt-3 flex flex-wrap gap-2">
            <span
              v-for="(tag, index) in formData.tags"
              :key="index"
              class="inline-flex items-center gap-2 px-3 py-1 bg-black text-white rounded-full text-sm"
            >
              {{ tag }}
              <button
                type="button"
                @click="removeTag(index)"
                class="hover:text-[#FFCB05] transition-colors"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </span>
          </div>
        </div>

        <!-- AI Models -->
        <div>
          <label class="block text-sm font-medium text-gray-900 mb-3">
            Modèle d'IA recommandé
          </label>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
            <label
              v-for="model in aiModels"
              :key="model"
              class="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-[#FFCB05] transition-colors"
              :class="{ 'border-[#FFCB05] bg-[#FFCB05]/5': formData.aiModels.includes(model) }"
            >
              <input
                type="checkbox"
                :checked="formData.aiModels.includes(model)"
                @change="toggleAIModel(model)"
                class="w-4 h-4 text-[#FFCB05] border-gray-300 rounded focus:ring-[#FFCB05]"
              />
              <span class="text-sm font-medium text-gray-900">{{ model }}</span>
            </label>
          </div>
        </div>

        <!-- Difficulty -->
        <div>
          <label class="block text-sm font-medium text-gray-900 mb-3">
            Niveau de difficulté
          </label>
          <div class="flex gap-4">
            <label
              v-for="level in ['Débutant', 'Intermédiaire', 'Avancé']"
              :key="level"
              class="flex items-center gap-2 cursor-pointer"
            >
              <input
                v-model="formData.difficulty"
                type="radio"
                :value="level"
                class="w-4 h-4 text-[#FFCB05] border-gray-300 focus:ring-[#FFCB05]"
              />
              <span class="text-sm font-medium text-gray-900">{{ level }}</span>
            </label>
          </div>
        </div>

        <!-- Variables -->
        <div>
          <div class="flex items-center justify-between mb-3">
            <label class="block text-sm font-medium text-gray-900">
              Variables personnalisables
            </label>
            <button
              type="button"
              @click="addVariable"
              class="flex items-center gap-2 px-3 py-1.5 bg-[#FFCB05] text-black rounded-lg hover:bg-[#FFCB05]/90 transition-colors text-sm font-medium"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
              Ajouter une variable
            </button>
          </div>
          <div v-if="formData.variables.length > 0" class="space-y-3">
            <div
              v-for="(variable, index) in formData.variables"
              :key="index"
              class="flex gap-3 items-start p-4 border border-gray-200 rounded-lg"
            >
              <div class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  v-model="variable.name"
                  type="text"
                  placeholder="Nom de la variable (ex: topic)"
                  class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
                />
                <input
                  v-model="variable.description"
                  type="text"
                  placeholder="Description"
                  class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
                />
              </div>
              <button
                type="button"
                @click="removeVariable(index)"
                class="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
          <p v-else class="text-sm text-gray-500 italic">Aucune variable ajoutée</p>
        </div>

        <!-- Example Output -->
        <div>
          <label class="block text-sm font-medium text-gray-900 mb-2">
            Exemple de résultat
          </label>
          <textarea
            v-model="formData.exampleOutput"
            rows="6"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
            placeholder="Montrez un exemple de résultat obtenu avec ce prompt..."
          ></textarea>
        </div>
      </form>
    </div>

    <!-- Sticky Bottom Bar -->
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex items-center justify-between">
          <button
            type="button"
            @click="showPreview = true"
            class="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Aperçu
          </button>
          <div class="flex items-center gap-3">
            <button
              type="button"
              @click="saveAsDraft"
              class="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Sauvegarder en brouillon
            </button>
            <button
              type="button"
              @click="handleSubmit"
              class="px-6 py-2.5 bg-[#FFCB05] text-black rounded-lg hover:bg-[#FFCB05]/90 transition-colors font-medium"
            >
              Soumettre pour validation
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Preview Modal -->
    <div
      v-if="showPreview"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click.self="showPreview = false"
    >
      <div class="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div class="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 class="text-2xl font-bold text-gray-900">Aperçu du prompt</h2>
          <button
            @click="showPreview = false"
            class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="p-6 space-y-6">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ formData.title || 'Sans titre' }}</h3>
            <div class="flex items-center gap-3">
              <span class="px-3 py-1 bg-black text-white rounded-full text-sm">
                {{ categories.find(c => c.value === formData.mainCategory)?.label || 'Non catégorisé' }}
              </span>
              <span v-if="formData.difficulty" class="text-sm text-gray-600">
                Niveau: {{ formData.difficulty }}
              </span>
            </div>
          </div>
          
          <div v-if="formData.description">
            <h4 class="font-semibold text-gray-900 mb-2">Description</h4>
            <p class="text-gray-700">{{ formData.description }}</p>
          </div>

          <div v-if="formData.content">
            <h4 class="font-semibold text-gray-900 mb-2">Contenu du prompt</h4>
            <div class="p-4 bg-gray-50 rounded-lg border border-gray-200 font-mono text-sm whitespace-pre-wrap">
              {{ formData.content }}
            </div>
          </div>

          <div v-if="formData.variables.length > 0">
            <h4 class="font-semibold text-gray-900 mb-2">Variables</h4>
            <div class="space-y-2">
              <div v-for="(variable, index) in formData.variables" :key="index" class="flex gap-2">
                <span class="font-mono text-sm text-[#FFCB05]">{{'{'}}{{ variable.name }}{{'}'}}:</span>
                <span class="text-sm text-gray-700">{{ variable.description }}</span>
              </div>
            </div>
          </div>

          <div v-if="formData.aiModels.length > 0">
            <h4 class="font-semibold text-gray-900 mb-2">Modèles recommandés</h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="model in formData.aiModels"
                :key="model"
                class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {{ model }}
              </span>
            </div>
          </div>

          <div v-if="formData.tags.length > 0">
            <h4 class="font-semibold text-gray-900 mb-2">Tags</h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in formData.tags"
                :key="tag"
                class="px-3 py-1 bg-black text-white rounded-full text-sm"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <div v-if="formData.exampleOutput">
            <h4 class="font-semibold text-gray-900 mb-2">Exemple de résultat</h4>
            <div class="p-4 bg-gray-50 rounded-lg border border-gray-200 whitespace-pre-wrap">
              {{ formData.exampleOutput }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <div
      v-if="showSuccessModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click.self="showSuccessModal = false"
    >
      <div class="bg-white rounded-xl max-w-md w-full p-8 text-center">
        <div class="w-16 h-16 bg-[#FFCB05] rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-2">Prompt soumis avec succès!</h3>
        <p class="text-gray-600 mb-6">
          Votre prompt a été soumis pour validation. Vous recevrez une notification une fois qu'il sera approuvé.
        </p>
        <div class="space-y-3">
          <button
            @click="showSuccessModal = false"
            class="w-full px-6 py-3 bg-[#FFCB05] text-black rounded-lg hover:bg-[#FFCB05]/90 transition-colors font-medium"
          >
            Créer un autre prompt
          </button>
          <button
            @click="showSuccessModal = false"
            class="w-full px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Voir mes prompts
          </button>
        </div>
      </div>
    </div>
  </div>
</template>