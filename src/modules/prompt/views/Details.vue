<template>
  <div class="min-h-screen bg-white">
    <!-- Breadcrumb Navigation -->
    <div class="border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav class="flex items-center space-x-2 text-sm">
          <a href="#" class="text-gray-600 hover:text-black transition-colors">Accueil</a>
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
          <a href="#" class="text-gray-600 hover:text-black transition-colors">Prompts</a>
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
          <a href="#" class="text-gray-600 hover:text-black transition-colors">Marketing</a>
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
          <span class="text-black font-medium">Générateur de Posts LinkedIn</span>
        </nav>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left Column (2/3) -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Prompt Header -->
          <div class="space-y-4">
            <h1 class="text-4xl font-bold text-black">
              Générateur de Posts LinkedIn Engageants
            </h1>
            
            <div class="flex flex-wrap items-center gap-3">
              <span class="px-4 py-1.5 bg-[#FFCB05] text-black text-sm font-semibold rounded-full">
                Marketing
              </span>
              <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                LinkedIn
              </span>
              <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                Réseaux Sociaux
              </span>
              <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                Content Marketing
              </span>
            </div>

            <div class="flex items-center gap-4 text-sm text-gray-600">
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Créé le 15 mars 2024
              </span>
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Mis à jour le 20 mars 2024
              </span>
            </div>
          </div>

          <!-- Creator Card -->
          <div class="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <div class="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFCB05] to-yellow-600 flex items-center justify-center text-white text-xl font-bold">
                  SM
                </div>
                <div>
                  <div class="flex items-center gap-2">
                    <h3 class="text-lg font-semibold text-black">Sophie Martin</h3>
                    <span class="px-2 py-0.5 bg-[#FFCB05] text-black text-xs font-bold rounded">
                      PRO
                    </span>
                  </div>
                  <p class="text-sm text-gray-600">Expert en Marketing Digital • 127 prompts</p>
                </div>
              </div>
              <a href="#" class="text-[#FFCB05] hover:text-yellow-600 font-medium text-sm transition-colors">
                Voir le profil →
              </a>
            </div>
          </div>

          <!-- Prompt Content -->
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <h2 class="text-2xl font-bold text-black">Le Prompt</h2>
              <button 
                @click="copyPrompt"
                class="flex items-center gap-2 px-6 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium"
                :class="{ 'bg-green-600 hover:bg-green-700': copied }"
              >
                <svg v-if="!copied" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                {{ copied ? 'Copié !' : 'Copier le prompt' }}
              </button>
            </div>

            <div class="bg-gray-50 rounded-xl p-6 border border-gray-200 font-mono text-sm leading-relaxed">
              <pre class="whitespace-pre-wrap text-gray-800">{{ promptContent }}</pre>
            </div>
          </div>

          <!-- Description Section -->
          <div class="space-y-4">
            <h2 class="text-2xl font-bold text-black">Comment utiliser ce prompt</h2>
            <div class="prose prose-gray max-w-none">
              <p class="text-gray-700 leading-relaxed">
                Ce prompt est conçu pour générer des posts LinkedIn engageants et professionnels. 
                Il utilise une structure éprouvée qui capte l'attention et encourage l'interaction.
              </p>
              
              <div class="mt-6 bg-yellow-50 border-l-4 border-[#FFCB05] p-4 rounded-r-lg">
                <h3 class="text-lg font-semibold text-black mb-3">Variables à personnaliser :</h3>
                <ul class="space-y-2 text-gray-700">
                  <li><code class="px-2 py-1 bg-white rounded text-[#FFCB05] font-semibold">[SUJET]</code> - Le thème principal de votre post</li>
                  <li><code class="px-2 py-1 bg-white rounded text-[#FFCB05] font-semibold">[AUDIENCE]</code> - Votre public cible (ex: entrepreneurs, marketeurs)</li>
                  <li><code class="px-2 py-1 bg-white rounded text-[#FFCB05] font-semibold">[CTA]</code> - Votre appel à l'action</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Example Output Section -->
          <div class="space-y-4">
            <button 
              @click="showExample = !showExample"
              class="flex items-center justify-between w-full text-left"
            >
              <h2 class="text-2xl font-bold text-black">Exemple de résultat généré</h2>
              <svg 
                class="w-6 h-6 text-gray-600 transition-transform duration-200"
                :class="{ 'rotate-180': showExample }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div 
              v-show="showExample"
              class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200"
            >
              <div class="space-y-4 text-gray-800">
                <p class="font-semibold text-lg">🚀 3 erreurs qui tuent votre stratégie de contenu LinkedIn</p>
                <p>Après avoir analysé +500 profils, voici ce qui sépare les créateurs qui réussissent des autres :</p>
                <p>❌ Erreur #1 : Poster sans stratégie<br>
                ✅ Solution : Définissez vos piliers de contenu</p>
                <p>❌ Erreur #2 : Ignorer l'engagement<br>
                ✅ Solution : Répondez dans les 2 premières heures</p>
                <p>❌ Erreur #3 : Copier les autres<br>
                ✅ Solution : Trouvez votre voix unique</p>
                <p class="text-sm text-gray-600 italic mt-4">💡 Quelle erreur faisiez-vous ? Commentez ci-dessous !</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Sidebar (1/3) -->
        <div class="lg:col-span-1 space-y-6">
          <div class="lg:sticky lg:top-6 space-y-6">
            <!-- Action Card -->
            <div class="bg-black rounded-xl p-6 text-white space-y-4">
              <button 
                @click="copyPrompt"
                class="w-full py-3 bg-[#FFCB05] text-black font-bold rounded-lg hover:bg-yellow-400 transition-all duration-200 transform hover:scale-105"
              >
                Copier le Prompt
              </button>
              
              <button 
                @click="toggleFavorite"
                class="w-full py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-200 flex items-center justify-center gap-2"
              >
                <svg 
                  class="w-5 h-5" 
                  :fill="isFavorite ? 'currentColor' : 'none'" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {{ isFavorite ? 'Retiré des favoris' : 'Ajouter aux favoris' }}
              </button>

              <button class="w-full py-3 text-white font-medium rounded-lg hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
                Signaler
              </button>
            </div>

            <!-- Stats Card -->
            <div class="bg-white rounded-xl p-6 border border-gray-200 space-y-4">
              <h3 class="font-bold text-lg text-black">Statistiques</h3>
              
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-gray-600 flex items-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copies
                  </span>
                  <span class="font-bold text-black">1,247</span>
                </div>

                <div class="flex items-center justify-between">
                  <span class="text-gray-600 flex items-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Vues
                  </span>
                  <span class="font-bold text-black">3,892</span>
                </div>

                <div class="flex items-center justify-between">
                  <span class="text-gray-600 flex items-center gap-2">
                    <svg class="w-5 h-5 text-[#FFCB05]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    Note moyenne
                  </span>
                  <span class="font-bold text-black">4.8/5</span>
                </div>
              </div>
            </div>

            <!-- Rating Section -->
            <div class="bg-white rounded-xl p-6 border border-gray-200 space-y-4">
              <h3 class="font-bold text-lg text-black">Noter ce prompt</h3>
              
              <div class="flex items-center gap-2">
                <button 
                  v-for="star in 5" 
                  :key="star"
                  @click="userRating = star"
                  class="transition-all duration-200 hover:scale-110"
                >
                  <svg 
                    class="w-8 h-8" 
                    :class="star <= userRating ? 'text-[#FFCB05]' : 'text-gray-300'"
                    :fill="star <= userRating ? 'currentColor' : 'none'"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </button>
              </div>

              <div class="space-y-2 pt-2">
                <div v-for="rating in [5, 4, 3, 2, 1]" :key="rating" class="flex items-center gap-3">
                  <span class="text-sm text-gray-600 w-8">{{ rating }}★</span>
                  <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      class="h-full bg-[#FFCB05] transition-all duration-300"
                      :style="{ width: getRatingPercentage(rating) + '%' }"
                    ></div>
                  </div>
                  <span class="text-sm text-gray-600 w-12 text-right">{{ getRatingCount(rating) }}</span>
                </div>
              </div>
            </div>

            <!-- Recommended AI Models -->
            <div class="bg-white rounded-xl p-6 border border-gray-200 space-y-4">
              <h3 class="font-bold text-lg text-black">Modèles IA recommandés</h3>
              
              <div class="space-y-3">
                <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div class="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                    GP
                  </div>
                  <div class="flex-1">
                    <p class="font-semibold text-black">GPT-4</p>
                    <p class="text-xs text-gray-600">OpenAI</p>
                  </div>
                </div>

                <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div class="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                    CL
                  </div>
                  <div class="flex-1">
                    <p class="font-semibold text-black">Claude 3</p>
                    <p class="text-xs text-gray-600">Anthropic</p>
                  </div>
                </div>

                <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div class="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
                    GM
                  </div>
                  <div class="flex-1">
                    <p class="font-semibold text-black">Gemini Pro</p>
                    <p class="text-xs text-gray-600">Google</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Related Prompts -->
            <div class="bg-white rounded-xl p-6 border border-gray-200 space-y-4">
              <h3 class="font-bold text-lg text-black">Prompts similaires</h3>
              
              <div class="space-y-3">
                <a 
                  v-for="prompt in relatedPrompts" 
                  :key="prompt.id"
                  href="#"
                  class="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                >
                  <h4 class="font-semibold text-black group-hover:text-[#FFCB05] transition-colors mb-2">
                    {{ prompt.title }}
                  </h4>
                  <div class="flex items-center justify-between text-sm text-gray-600">
                    <span class="flex items-center gap-1">
                      <svg class="w-4 h-4 text-[#FFCB05]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      {{ prompt.rating }}
                    </span>
                    <span>{{ prompt.copies }} copies</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Toast Notification -->
    <Transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-2 opacity-0"
    >
      <div 
        v-if="showToast"
        class="fixed bottom-8 right-8 bg-black text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 z-50"
      >
        <svg class="w-6 h-6 text-[#FFCB05]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span class="font-medium">Prompt copié dans le presse-papier !</span>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const copied = ref(false)
const showToast = ref(false)
const isFavorite = ref(false)
const showExample = ref(false)
const userRating = ref(0)

const promptContent = `Tu es un expert en marketing LinkedIn. Crée un post engageant sur [SUJET] qui :

1. Commence par un hook accrocheur (question, statistique surprenante, ou affirmation forte)
2. Utilise des sauts de ligne pour faciliter la lecture
3. Inclut 3-5 points clés avec des émojis pertinents
4. S'adresse directement à [AUDIENCE]
5. Se termine par [CTA] qui encourage l'interaction

Format :
- Maximum 1300 caractères
- Ton professionnel mais accessible
- Utilise des listes à puces ou numérotées
- Ajoute 3-5 hashtags pertinents à la fin

Le post doit générer de l'engagement (likes, commentaires, partages) et positionner l'auteur comme expert dans son domaine.`

const relatedPrompts = [
  { id: 1, title: 'Créateur de Threads Twitter Viraux', rating: 4.7, copies: 892 },
  { id: 2, title: 'Générateur de Légendes Instagram', rating: 4.6, copies: 756 },
  { id: 3, title: 'Stratégie de Contenu LinkedIn', rating: 4.9, copies: 1034 },
  { id: 4, title: 'Posts LinkedIn pour Entrepreneurs', rating: 4.5, copies: 623 }
]

const ratingDistribution = {
  5: 342,
  4: 89,
  3: 23,
  2: 8,
  1: 3
}

const copyPrompt = async () => {
  try {
    await navigator.clipboard.writeText(promptContent)
    copied.value = true
    showToast.value = true
    
    setTimeout(() => {
      copied.value = false
    }, 2000)
    
    setTimeout(() => {
      showToast.value = false
    }, 3000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value
}

const getRatingPercentage = (rating: number): number => {
  const total = Object.values(ratingDistribution).reduce((a, b) => a + b, 0)
  return (ratingDistribution[rating as keyof typeof ratingDistribution] / total) * 100
}

const getRatingCount = (rating: number): number => {
  return ratingDistribution[rating as keyof typeof ratingDistribution]
}
</script>