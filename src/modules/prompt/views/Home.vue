<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Hero Section -->
    <header class="relative overflow-hidden">
      <!-- Gradient Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      <!-- Content -->
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div class="text-center space-y-8">
          <!-- Headline -->
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance">
            Découvrez et Partagez les
            <span class="text-[#FFCB05]">Meilleurs Prompts IA</span>
          </h1>
          
          <!-- Subtitle -->
          <p class="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto text-pretty">
            La plateforme collaborative pour explorer, partager et optimiser vos prompts d'intelligence artificielle
          </p>
          
          <!-- Search Bar -->
          <div class="max-w-3xl mx-auto">
            <div class="relative group">
              <input
                type="text"
                placeholder="Rechercher des prompts..."
                class="w-full px-6 py-5 pl-14 bg-white text-black rounded-2xl text-lg focus:outline-none focus:ring-4 focus:ring-[#FFCB05]/50 transition-all"
              />
              <svg class="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-black/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button class="px-8 py-4 bg-[#FFCB05] text-black font-semibold rounded-xl hover:bg-[#FFD633] transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#FFCB05]/50">
              Explorer les Prompts
            </button>
            <button class="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-all hover:scale-105">
              Créer un Prompt
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Featured Categories -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">
          Catégories <span class="text-[#FFCB05]">Populaires</span>
        </h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="category in categories"
            :key="category.name"
            class="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#FFCB05] transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#FFCB05]/20 cursor-pointer"
          >
            <div class="text-4xl mb-4 group-hover:scale-110 transition-transform">
              {{ category.icon }}
            </div>
            <h3 class="text-xl font-semibold mb-2 text-white">{{ category.name }}</h3>
            <p class="text-white/60">{{ category.count }} prompts</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Prompts -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">
          Prompts <span class="text-[#FFCB05]">Populaires</span>
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="prompt in prompts"
            :key="prompt.id"
            class="group relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#FFCB05] transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#FFCB05]/20"
          >
            <!-- Category Badge -->
            <span class="inline-block px-3 py-1 bg-[#FFCB05] text-black text-sm font-medium rounded-full mb-4">
              {{ prompt.category }}
            </span>
            
            <!-- Title -->
            <h3 class="text-xl font-semibold mb-3 text-white">{{ prompt.title }}</h3>
            
            <!-- Creator Info -->
            <div class="flex items-center gap-3 mb-4">
              <div class="w-8 h-8 bg-[#FFCB05] rounded-full flex items-center justify-center text-black font-semibold">
                {{ prompt.creator.charAt(0) }}
              </div>
              <span class="text-white/80">{{ prompt.creator }}</span>
            </div>
            
            <!-- Stats -->
            <div class="flex items-center justify-between text-sm text-white/60">
              <div class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>{{ prompt.copies }}</span>
              </div>
              <div class="flex items-center gap-1">
                <span class="text-[#FFCB05]">★</span>
                <span class="text-white">{{ prompt.rating }}</span>
              </div>
            </div>
            
            <!-- Copy Button (visible on hover) -->
            <button class="absolute bottom-6 right-6 px-4 py-2 bg-[#FFCB05] text-black font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-[#FFD633]">
              Copier
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Top Contributors -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">
          Top <span class="text-[#FFCB05]">Contributeurs</span>
        </h2>
        
        <div class="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
          <div
            v-for="(contributor, index) in contributors"
            :key="contributor.username"
            class="flex items-center gap-4 p-6 border-b border-white/10 last:border-b-0 hover:bg-white/5 transition-colors"
          >
            <!-- Rank -->
            <div class="w-12 h-12 flex items-center justify-center">
              <span
                class="text-2xl font-bold"
                :class="index === 0 ? 'text-[#FFCB05]' : 'text-white/60'"
              >
                {{ index + 1 }}
              </span>
            </div>
            
            <!-- Avatar -->
            <div class="w-12 h-12 bg-[#FFCB05] rounded-full flex items-center justify-center text-black font-bold text-lg">
              {{ contributor.username.charAt(0) }}
            </div>
            
            <!-- Info -->
            <div class="flex-1">
              <h3 class="font-semibold text-white">{{ contributor.username }}</h3>
              <p class="text-sm text-white/60">{{ contributor.prompts }} prompts</p>
            </div>
            
            <!-- Score -->
            <div class="text-right">
              <div class="text-2xl font-bold text-[#FFCB05]">{{ contributor.score }}</div>
              <div class="text-sm text-white/60">points</div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-8">
          <a href="#" class="text-[#FFCB05] hover:text-[#FFD633] font-medium transition-colors">
            Voir le classement complet →
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <!-- Brand -->
          <div>
            <h3 class="text-2xl font-bold text-[#FFCB05] mb-4">PromptShare</h3>
            <p class="text-white/60">La plateforme de partage de prompts IA</p>
          </div>
          
          <!-- Links -->
          <div>
            <h4 class="font-semibold mb-4 text-white">Plateforme</h4>
            <ul class="space-y-2 text-white/60">
              <li><a href="#" class="hover:text-[#FFCB05] transition-colors">Explorer</a></li>
              <li><a href="#" class="hover:text-[#FFCB05] transition-colors">Catégories</a></li>
              <li><a href="#" class="hover:text-[#FFCB05] transition-colors">Classement</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold mb-4 text-white">Ressources</h4>
            <ul class="space-y-2 text-white/60">
              <li><a href="#" class="hover:text-[#FFCB05] transition-colors">Documentation</a></li>
              <li><a href="#" class="hover:text-[#FFCB05] transition-colors">Blog</a></li>
              <li><a href="#" class="hover:text-[#FFCB05] transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold mb-4 text-white">Légal</h4>
            <ul class="space-y-2 text-white/60">
              <li><a href="#" class="hover:text-[#FFCB05] transition-colors">Conditions</a></li>
              <li><a href="#" class="hover:text-[#FFCB05] transition-colors">Confidentialité</a></li>
              <li><a href="#" class="hover:text-[#FFCB05] transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <!-- Social Media -->
        <div class="flex items-center justify-between pt-8 border-t border-white/10">
          <p class="text-white/60">© 2025 PromptShare. Tous droits réservés.</p>
          <div class="flex gap-4">
            <a href="#" class="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#FFCB05] hover:text-black transition-all">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" class="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#FFCB05] hover:text-black transition-all">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" class="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#FFCB05] hover:text-black transition-all">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const categories = ref([
  { name: 'Marketing', icon: '📢', count: 1234 },
  { name: 'Code', icon: '💻', count: 2156 },
  { name: 'Design', icon: '🎨', count: 987 },
  { name: 'Écriture', icon: '✍️', count: 1543 },
  { name: 'Business', icon: '💼', count: 876 },
  { name: 'Éducation', icon: '📚', count: 1098 },
  { name: 'Productivité', icon: '⚡', count: 1432 },
  { name: 'Créativité', icon: '🎭', count: 765 }
])

const prompts = ref([
  {
    id: 1,
    title: 'Générateur de contenu SEO optimisé',
    category: 'Marketing',
    creator: 'Marie Dubois',
    copies: 2453,
    rating: 4.8
  },
  {
    id: 2,
    title: 'Assistant de débogage de code',
    category: 'Code',
    creator: 'Thomas Martin',
    copies: 1876,
    rating: 4.9
  },
  {
    id: 3,
    title: 'Créateur de palettes de couleurs',
    category: 'Design',
    creator: 'Sophie Laurent',
    copies: 1654,
    rating: 4.7
  },
  {
    id: 4,
    title: 'Rédacteur d\'articles de blog',
    category: 'Écriture',
    creator: 'Lucas Bernard',
    copies: 2198,
    rating: 4.6
  },
  {
    id: 5,
    title: 'Analyseur de stratégie business',
    category: 'Business',
    creator: 'Emma Petit',
    copies: 1432,
    rating: 4.8
  },
  {
    id: 6,
    title: 'Générateur de quiz interactifs',
    category: 'Éducation',
    creator: 'Alexandre Roux',
    copies: 1287,
    rating: 4.5
  }
])

const contributors = ref([
  { username: 'Marie Dubois', prompts: 156, score: 8945 },
  { username: 'Thomas Martin', prompts: 142, score: 7823 },
  { username: 'Sophie Laurent', prompts: 128, score: 7156 },
  { username: 'Lucas Bernard', prompts: 119, score: 6734 },
  { username: 'Emma Petit', prompts: 107, score: 6289 }
])
</script>