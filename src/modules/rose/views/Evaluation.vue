<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center p-4">
    <div class="w-full max-w-[428px] bg-white rounded-2xl shadow-xl overflow-hidden">
      <!-- Header -->
      <div class="bg-gradient-to-r from-[#D91E7E] to-[#FF69B4] p-6 text-white">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <ClipboardList class="w-6 h-6" />
          </div>
          <div>
            <h1 class="text-xl font-bold">Évaluation des Risques</h1>
            <p class="text-sm text-white/90">Cancer du sein</p>
          </div>
        </div>
        
        <!-- Progress Bar -->
        <div v-if="!showResults" class="space-y-2">
          <div class="flex justify-between text-sm">
            <span>Étape {{ currentStep + 1 }}/{{ questions.length }}</span>
            <span>{{ Math.round(progress) }}%</span>
          </div>
          <div class="h-2 bg-white/30 rounded-full overflow-hidden">
            <div 
              class="h-full bg-white rounded-full transition-all duration-500 ease-out"
              :style="{ width: `${progress}%` }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Question Content -->
      <div v-if="!showResults" class="p-6">
        <transition name="slide" mode="out-in">
          <div :key="currentStep" class="space-y-6">
            <!-- Question Card -->
            <div class="space-y-3">
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-[#D91E7E] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  {{ currentStep + 1 }}
                </div>
                <div class="flex-1">
                  <h2 class="text-lg font-bold text-gray-800">{{ currentQuestion.question }}</h2>
                  <p v-if="currentQuestion.description" class="text-sm text-gray-600 mt-1">
                    {{ currentQuestion.description }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Answer Options -->
            <div class="space-y-3">
              <!-- Slider Type -->
              <div v-if="currentQuestion.type === 'slider'" class="space-y-4">
                <div class="text-center">
                  <span class="text-3xl font-bold text-[#D91E7E]">{{ answers[currentQuestion.id] || currentQuestion.min }}</span>
                  <span class="text-gray-600 ml-2">{{ currentQuestion.unit }}</span>
                </div>
                <input
                  type="range"
                  :min="currentQuestion.min"
                  :max="currentQuestion.max"
                  v-model.number="answers[currentQuestion.id]"
                  class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-pink"
                />
                <div class="flex justify-between text-xs text-gray-500">
                  <span>{{ currentQuestion.min }} {{ currentQuestion.unit }}</span>
                  <span>{{ currentQuestion.max }} {{ currentQuestion.unit }}</span>
                </div>
              </div>

              <!-- Yes/No Type -->
              <div v-else-if="currentQuestion.type === 'yesno'" class="grid grid-cols-2 gap-3">
                <button
                  v-for="option in currentQuestion.options"
                  :key="option.value"
                  @click="answers[currentQuestion.id] = option.value"
                  class="p-4 rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-2"
                  :class="answers[currentQuestion.id] === option.value 
                    ? 'border-[#D91E7E] bg-[#D91E7E] text-white shadow-lg scale-105' 
                    : 'border-gray-200 hover:border-[#D91E7E] hover:bg-pink-50'"
                >
                  <component :is="option.icon" class="w-8 h-8" />
                  <span class="font-semibold">{{ option.label }}</span>
                </button>
              </div>

              <!-- Multiple Choice Type -->
              <div v-else-if="currentQuestion.type === 'choice'" class="space-y-3">
                <button
                  v-for="option in currentQuestion.options"
                  :key="option.value"
                  @click="answers[currentQuestion.id] = option.value"
                  class="w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 text-left"
                  :class="answers[currentQuestion.id] === option.value 
                    ? 'border-[#D91E7E] bg-pink-50 shadow-md' 
                    : 'border-gray-200 hover:border-[#D91E7E] hover:bg-pink-50'"
                >
                  <div class="w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                    :class="answers[currentQuestion.id] === option.value 
                      ? 'border-[#D91E7E] bg-[#D91E7E]' 
                      : 'border-gray-300'"
                  >
                    <Check v-if="answers[currentQuestion.id] === option.value" class="w-4 h-4 text-white" />
                  </div>
                  <div class="flex-1">
                    <div class="font-semibold text-gray-800">{{ option.label }}</div>
                    <div v-if="option.description" class="text-sm text-gray-600">{{ option.description }}</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </transition>

        <!-- Navigation Buttons -->
        <div class="flex gap-3 mt-8">
          <button
            v-if="currentStep > 0"
            @click="previousStep"
            class="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <ChevronLeft class="w-5 h-5" />
            Précédent
          </button>
          <button
            @click="nextStep"
            :disabled="!isCurrentStepValid"
            class="flex-1 px-6 py-3 bg-[#D91E7E] text-white rounded-xl font-semibold hover:bg-[#C01A6F] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-2"
          >
            {{ currentStep === questions.length - 1 ? 'Voir les résultats' : 'Suivant' }}
            <ChevronRight class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Results Screen -->
      <div v-else class="p-6 space-y-6">
        <!-- Risk Level Circle -->
        <div class="flex flex-col items-center py-6">
          <div class="relative w-40 h-40">
            <svg class="w-full h-full transform -rotate-90">
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="#E5E7EB"
                stroke-width="12"
                fill="none"
              />
              <circle
                cx="80"
                cy="80"
                r="70"
                :stroke="riskColor"
                stroke-width="12"
                fill="none"
                :stroke-dasharray="circumference"
                :stroke-dashoffset="circumference - (riskScore / 100) * circumference"
                class="transition-all duration-1000 ease-out"
                stroke-linecap="round"
              />
            </svg>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <span class="text-4xl font-bold" :style="{ color: riskColor }">{{ riskScore }}%</span>
              <span class="text-sm text-gray-600">Niveau de risque</span>
            </div>
          </div>
          <div class="mt-4 px-6 py-2 rounded-full text-white font-semibold" :style="{ backgroundColor: riskColor }">
            {{ riskLevel }}
          </div>
        </div>

        <!-- Risk Explanation -->
        <div class="bg-gray-50 rounded-xl p-4 space-y-2">
          <div class="flex items-start gap-3">
            <Info class="w-5 h-5 text-[#D91E7E] flex-shrink-0 mt-0.5" />
            <div class="text-sm text-gray-700">
              <p class="font-semibold mb-1">Que signifie ce résultat ?</p>
              <p>{{ riskExplanation }}</p>
            </div>
          </div>
        </div>

        <!-- Recommendations -->
        <div class="space-y-3">
          <h3 class="font-bold text-gray-800 flex items-center gap-2">
            <Lightbulb class="w-5 h-5 text-[#D91E7E]" />
            Recommandations personnalisées
          </h3>
          <div class="space-y-2">
            <div
              v-for="(rec, index) in recommendations"
              :key="index"
              class="bg-white border-2 border-pink-100 rounded-xl p-4 flex items-start gap-3 hover:border-[#D91E7E] transition-colors duration-200"
            >
              <component :is="rec.icon" class="w-5 h-5 text-[#D91E7E] flex-shrink-0 mt-0.5" />
              <div class="flex-1">
                <p class="font-semibold text-gray-800 text-sm">{{ rec.title }}</p>
                <p class="text-sm text-gray-600 mt-1">{{ rec.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="space-y-3 pt-4">
          <button
            @click="contactProfessional"
            class="w-full px-6 py-4 bg-[#D91E7E] text-white rounded-xl font-semibold hover:bg-[#C01A6F] transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg"
          >
            <MessageCircle class="w-5 h-5" />
            En apprendre plus
          </button>
          <button
            @click="restart"
            class="w-full px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <RotateCcw class="w-5 h-5" />
            Recommencer l'évaluation
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { 
  ClipboardList, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  CheckCircle2, 
  XCircle,
  Info,
  Lightbulb,
  Phone,
  RotateCcw,
  Activity,
  Heart,
  Calendar,
  Stethoscope,
    MessageCircle
} from 'lucide-vue-next'
import router from '@/router'

const currentStep = ref(0)
const showResults = ref(false)
const answers = ref({})

const questions = [
  {
    id: 'age',
    question: 'Quel est votre âge ?',
    description: 'L\'âge est un facteur important dans l\'évaluation des risques.',
    type: 'slider',
    min: 18,
    max: 100,
    unit: 'ans'
  },
  {
    id: 'family_history',
    question: 'Avez-vous des antécédents familiaux de cancer du sein ?',
    description: 'Parents au premier degré (mère, sœur, fille)',
    type: 'yesno',
    options: [
      { label: 'Oui', value: true, icon: CheckCircle2 },
      { label: 'Non', value: false, icon: XCircle }
    ]
  },
  {
    id: 'first_pregnancy',
    question: 'Première grossesse après 30 ans ?',
    description: 'Ou jamais eu de grossesse à terme',
    type: 'yesno',
    options: [
      { label: 'Oui', value: true, icon: CheckCircle2 },
      { label: 'Non', value: false, icon: XCircle }
    ]
  },
  {
    id: 'early_menstruation',
    question: 'Avez-vous eu vos premières règles avant 12 ans ?',
    description: 'La menstruation précoce peut augmenter légèrement le risque.',
    type: 'yesno',
    options: [
      { label: 'Oui', value: true, icon: CheckCircle2 },
      { label: 'Non', value: false, icon: XCircle }
    ]
  },
  {
    id: 'alcohol',
    question: 'Quelle est votre consommation d\'alcool ?',
    type: 'choice',
    options: [
      { label: 'Jamais ou rarement', value: 0, description: 'Moins d\'un verre par semaine' },
      { label: 'Modérée', value: 1, description: '1-7 verres par semaine' },
      { label: 'Régulière', value: 2, description: '8-14 verres par semaine' },
      { label: 'Élevée', value: 3, description: 'Plus de 14 verres par semaine' }
    ]
  },
  {
    id: 'physical_activity',
    question: 'Quel est votre niveau d\'activité physique ?',
    type: 'choice',
    options: [
      { label: 'Sédentaire', value: 0, description: 'Peu ou pas d\'exercice' },
      { label: 'Léger', value: 1, description: '1-2 fois par semaine' },
      { label: 'Modéré', value: 2, description: '3-4 fois par semaine' },
      { label: 'Actif', value: 3, description: '5+ fois par semaine' }
    ]
  },
  {
    id: 'medical_followup',
    question: 'Faites-vous un suivi médical régulier ?',
    description: 'Consultations et dépistages recommandés',
    type: 'yesno',
    options: [
      { label: 'Oui', value: true, icon: CheckCircle2 },
      { label: 'Non', value: false, icon: XCircle }
    ]
  }
]

const currentQuestion = computed(() => questions[currentStep.value])

const progress = computed(() => {
  return ((currentStep.value + 1) / questions.length) * 100
})

const isCurrentStepValid = computed(() => {
  return answers.value[currentQuestion.value.id] !== undefined
})

// Risk calculation
const riskScore = computed(() => {
  let score = 20 // Base score

  // Age factor
  const age = answers.value.age || 30
  if (age >= 50) score += 15
  else if (age >= 40) score += 10
  else if (age >= 30) score += 5

  // Family history
  if (answers.value.family_history) score += 20

  // First pregnancy
  if (answers.value.first_pregnancy) score += 10

  // Early menstruation
  if (answers.value.early_menstruation) score += 5

  // Alcohol
  const alcohol = answers.value.alcohol || 0
  score += alcohol * 5

  // Physical activity (inverse - more activity = less risk)
  const activity = answers.value.physical_activity || 0
  score -= activity * 3

  // Medical followup (reduces risk)
  if (answers.value.medical_followup) score -= 10

  return Math.max(0, Math.min(100, score))
})

const riskLevel = computed(() => {
  if (riskScore.value < 30) return 'Risque Faible'
  if (riskScore.value < 60) return 'Risque Modéré'
  return 'Risque Élevé'
})

const riskColor = computed(() => {
  if (riskScore.value < 30) return '#10B981' // green
  if (riskScore.value < 60) return '#F59E0B' // yellow
  return '#EF4444' // red
})

const riskExplanation = computed(() => {
  if (riskScore.value < 30) {
    return 'Votre profil présente un risque faible. Continuez vos bonnes habitudes de vie et maintenez un suivi médical régulier.'
  }
  if (riskScore.value < 60) {
    return 'Votre profil présente un risque modéré. Il est important de discuter avec votre médecin des mesures de prévention et de dépistage adaptées.'
  }
  return 'Votre profil présente un risque élevé. Nous vous recommandons fortement de consulter un professionnel de santé pour un suivi personnalisé.'
})

const recommendations = computed(() => {
  const recs = []
  
  if (riskScore.value >= 30) {
    recs.push({
      icon: Stethoscope,
      title: 'Consultation médicale',
      description: 'Prenez rendez-vous avec votre médecin pour discuter de votre profil de risque.'
    })
  }

  if (!answers.value.medical_followup) {
    recs.push({
      icon: Calendar,
      title: 'Dépistage régulier',
      description: 'Établissez un calendrier de dépistage adapté à votre âge et vos facteurs de risque.'
    })
  }

  if ((answers.value.physical_activity || 0) < 2) {
    recs.push({
      icon: Activity,
      title: 'Activité physique',
      description: 'Augmentez votre activité physique à au moins 150 minutes par semaine.'
    })
  }

  if ((answers.value.alcohol || 0) > 1) {
    recs.push({
      icon: Heart,
      title: 'Mode de vie sain',
      description: 'Réduisez votre consommation d\'alcool et adoptez une alimentation équilibrée.'
    })
  }

  recs.push({
    icon: Heart,
    title: 'Auto-examen mensuel',
    description: 'Pratiquez l\'autopalpation mammaire une fois par mois pour détecter tout changement.'
  })

  return recs
})

const circumference = 2 * Math.PI * 70

// Navigation
const nextStep = () => {
  if (!isCurrentStepValid.value) return
  
  if (currentStep.value < questions.length - 1) {
    currentStep.value++
  } else {
    showResults.value = true
    saveProgress()
  }
}

const previousStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}

const restart = () => {
  currentStep.value = 0
  showResults.value = false
  answers.value = {}
  localStorage.removeItem('rose_risk_assessment')
}

const contactProfessional = () => {
  // Emit event or navigate to contact page
  router.push({ name: 'chat' })
}

// Save/Load progress
const saveProgress = () => {
  localStorage.setItem('rose_risk_assessment', JSON.stringify({
    currentStep: currentStep.value,
    answers: answers.value,
    showResults: showResults.value
  }))
}

const loadProgress = () => {
  const saved = localStorage.getItem('rose_risk_assessment')
  if (saved) {
    const data = JSON.parse(saved)
    currentStep.value = data.currentStep
    answers.value = data.answers
    showResults.value = data.showResults
  }
}

// Watch for changes and save
watch([currentStep, answers], () => {
  if (!showResults.value) {
    saveProgress()
  }
}, { deep: true })

onMounted(() => {
  loadProgress()
})
</script>

<style scoped>
/* Custom slider styling */
.slider-pink::-webkit-slider-thumb {
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #D91E7E;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.slider-pink::-moz-range-thumb {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #D91E7E;
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.slider-pink::-webkit-slider-track {
  background: linear-gradient(to right, #D91E7E 0%, #D91E7E var(--value), #E5E7EB var(--value), #E5E7EB 100%);
}

/* Slide transition */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
