<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100">
    <!-- Header -->
    <header class="sticky top-0 z-10 bg-gradient-to-r from-[#D91E7E] to-[#FF69B4] text-white shadow-lg">
      <div class="max-w-[428px] mx-auto px-4 py-4 flex items-center gap-3">
        <button @click="$emit('back')" class="p-2 hover:bg-white/20 rounded-lg transition-colors">
          <ArrowLeft :size="20" />
        </button>
        <h1 class="text-xl font-bold">À propos</h1>
      </div>
    </header>

    <div class="max-w-[428px] mx-auto px-4 py-6 space-y-6">
      <!-- Hero Section -->
      <div class="text-center py-8">
        <div class="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#D91E7E] to-[#FF69B4] rounded-full mb-4 shadow-lg">
          <Heart :size="48" class="text-white fill-white" />
        </div>
        <h2 class="text-3xl font-bold text-[#D91E7E] mb-2">Rose Assistant</h2>
        <p class="text-gray-600 text-lg">Votre compagnon pour la prévention du cancer du sein</p>
      </div>

      <!-- Mission Statement -->
      <div class="bg-white rounded-2xl shadow-md overflow-hidden border-l-4 border-[#D91E7E]">
        <div class="p-6 bg-pink-50/50">
          <h3 class="text-xl font-bold text-[#D91E7E] mb-3 flex items-center gap-2">
            <Target :size="24" />
            Notre mission
          </h3>
          <p class="text-gray-700 mb-3 leading-relaxed">
            Rose Assistant est une plateforme d'information et de sensibilisation dédiée à la prévention du cancer du sein. Notre mission est de rendre l'information médicale accessible à toutes les femmes.
          </p>
          <p class="text-gray-700 leading-relaxed">
            Nous croyons que la détection précoce sauve des vies. C'est pourquoi nous offrons des ressources éducatives, des guides d'autopalpation, et un accompagnement personnalisé pour vous aider à prendre soin de votre santé.
          </p>
        </div>
      </div>

      <!-- Statistics Section -->
      <div class="grid grid-cols-3 gap-3">
        <div class="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-shadow">
          <Users :size="32" class="text-[#D91E7E] mx-auto mb-2" />
          <div class="text-2xl font-bold text-[#D91E7E]">1/8</div>
          <div class="text-xs text-gray-600 mt-1">femmes touchées</div>
        </div>
        <div class="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-shadow">
          <TrendingUp :size="32" class="text-[#D91E7E] mx-auto mb-2" />
          <div class="text-2xl font-bold text-[#D91E7E]">90%</div>
          <div class="text-xs text-gray-600 mt-1">taux de survie</div>
        </div>
        <div class="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-shadow">
          <Sparkles :size="32" class="text-[#D91E7E] mx-auto mb-2" />
          <div class="text-2xl font-bold text-[#D91E7E]">50k+</div>
          <div class="text-xs text-gray-600 mt-1">utilisatrices</div>
        </div>
      </div>

      <!-- Features List -->
      <div class="bg-white rounded-2xl shadow-md p-6">
        <h3 class="text-xl font-bold text-[#D91E7E] mb-6 text-center">Comment ça marche</h3>
        <div class="space-y-6 relative">
          <!-- Vertical line -->
          <div class="absolute left-6 top-8 bottom-8 w-0.5 bg-pink-200"></div>
          
          <div v-for="(step, index) in steps" :key="index" class="flex gap-4 relative">
            <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#D91E7E] to-[#FF69B4] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md z-10">
              {{ index + 1 }}
            </div>
            <div class="flex-1 pt-1">
              <div class="flex items-center gap-2 mb-1">
                <component :is="step.icon" :size="20" class="text-[#D91E7E]" />
                <h4 class="font-bold text-gray-800">{{ step.title }}</h4>
              </div>
              <p class="text-sm text-gray-600 leading-relaxed">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Medical Validation Badge -->
      <div class="bg-white rounded-2xl shadow-md p-6 border-2 border-[#D91E7E]">
        <div class="flex items-center gap-4">
          <div class="flex-shrink-0 w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center">
            <ShieldCheck :size="32" class="text-[#D91E7E]" />
          </div>
          <div class="flex-1">
            <h3 class="font-bold text-[#D91E7E] text-lg mb-1">Contenu validé médicalement</h3>
            <p class="text-sm text-gray-600">Toutes nos informations sont vérifiées par des professionnels de santé qualifiés.</p>
          </div>
        </div>
      </div>

      <!-- Partners Section -->
      <div class="bg-white rounded-2xl shadow-md p-6">
        <h3 class="text-xl font-bold text-[#D91E7E] mb-4 text-center">Nos partenaires</h3>
        <div class="grid grid-cols-3 gap-4">
          <div v-for="i in 6" :key="i" class="aspect-square bg-gray-100 rounded-xl border-2 border-gray-200 hover:border-[#D91E7E] transition-colors flex items-center justify-center">
            <Building2 :size="32" class="text-gray-400" />
          </div>
        </div>
      </div>

      <!-- Disclaimer -->
      <div class="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4 flex gap-3">
        <AlertCircle :size="20" class="text-yellow-600 flex-shrink-0 mt-0.5" />
        <div>
          <p class="text-sm text-yellow-800 font-medium mb-1">Avertissement important</p>
          <p class="text-xs text-yellow-700 leading-relaxed">
            Ce chatbot est un outil d'information et ne remplace en aucun cas une consultation médicale professionnelle. En cas de doute ou de symptômes, consultez immédiatement un médecin.
          </p>
        </div>
      </div>

      <!-- Footer -->
      <div class="text-center py-6 space-y-2">
        <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
          <Info :size="16" />
          <span>Version 1.0.0</span>
        </div>
        <p class="text-xs text-gray-400">Dernière mise à jour : Janvier 2025</p>
        <div class="flex items-center justify-center gap-4 text-xs text-[#D91E7E] font-medium">
          <button @click="$emit('navigate', 'privacy')" class="hover:underline">Politique de confidentialité</button>
          <span class="text-gray-300">•</span>
          <button @click="$emit('navigate', 'terms')" class="hover:underline">Conditions d'utilisation</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  ArrowLeft, 
  Heart, 
  Target, 
  Users, 
  TrendingUp, 
  Sparkles,
  MessageCircle,
  BookOpen,
  Bell,
  BarChart3,
  ShieldCheck,
  Building2,
  AlertCircle,
  Info
} from 'lucide-vue-next'

defineEmits(['back', 'navigate'])

const steps = ref([
  {
    icon: MessageCircle,
    title: 'Posez vos questions',
    description: 'Discutez avec Rose Assistant pour obtenir des informations personnalisées sur la prévention.'
  },
  {
    icon: BookOpen,
    title: 'Apprenez l\'autopalpation',
    description: 'Suivez nos guides illustrés pour apprendre les techniques d\'examen personnel.'
  },
  {
    icon: Bell,
    title: 'Recevez des rappels',
    description: 'Configurez des notifications pour ne jamais oublier vos examens mensuels.'
  },
  {
    icon: BarChart3,
    title: 'Évaluez vos risques',
    description: 'Complétez notre questionnaire pour comprendre votre profil de risque personnel.'
  }
])
</script>
