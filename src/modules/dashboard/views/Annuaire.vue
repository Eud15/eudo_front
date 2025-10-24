<template>
    <div>
      <!-- Fixed Header on Scroll -->
      <header 
        :class="[
          'w-full py-3 transition-all duration-300 z-50', 
          isScrolled ? 'fixed top-0 bg-white shadow-md' : ''
        ]"
      >
        <div class="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center">
            <div class="h-10 w-10 mr-2 flex-shrink-0">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="4" fill="#3B82F6" />
                <path d="M12 10L20 30L28 10" stroke="white" stroke-width="3" />
              </svg>
            </div>
            <div>
              <div class="text-gray-700 font-medium text-sm md:text-base">Women Techmakers</div>
              <div class="text-xs md:text-sm text-gray-500">Abomey-Calavi, Bénin</div>
            </div>
          </div>
          
          <!-- Navigation -->
          <nav class="hidden md:flex items-center">
            <div class="flex space-x-8 mr-4">
              <router-link to="/" class="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Accueil</router-link>
              <router-link to="/stats" class="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Statistiques</router-link>
              <router-link to="/testimonials" class="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Témoignages</router-link>
              <router-link to="/events" class="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Événements</router-link>
              <router-link to="/impact" class="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Impact</router-link>
              <router-link to="/about" class="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">À propos</router-link>
              <router-link to="/team" class="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Équipe</router-link>
              <router-link to="/directory" class="text-gray-900 border-b-2 border-gray-900 pb-1 text-sm font-medium">Annuaire</router-link>
              <router-link to="/contact" class="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Contact</router-link>
            </div>
            <button class="px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors text-sm">
              Rejoignez-nous
            </button>
            <button @click="toggleTheme" class="ml-4 p-2 rounded-full hover:bg-gray-100 transition-colors">
              <!-- Sun Icon -->
              <svg v-if="theme === 'light'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
              <!-- Moon Icon -->
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </button>
          </nav>
          
          <!-- Mobile Menu Button -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2">
            <!-- Menu Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <!-- Mobile Menu -->
        <div 
          v-if="mobileMenuOpen" 
          class="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-6 space-y-4 animate-fadeIn z-50"
        >
          <router-link to="/" class="block text-gray-600">Accueil</router-link>
          <router-link to="/stats" class="block text-gray-600">Statistiques</router-link>
          <router-link to="/testimonials" class="block text-gray-600">Témoignages</router-link>
          <router-link to="/events" class="block text-gray-600">Événements</router-link>
          <router-link to="/impact" class="block text-gray-600">Impact</router-link>
          <router-link to="/about" class="block text-gray-600">À propos</router-link>
          <router-link to="/team" class="block text-gray-600">Équipe</router-link>
          <router-link to="/directory" class="block text-gray-900 font-medium">Annuaire</router-link>
          <router-link to="/contact" class="block text-gray-600">Contact</router-link>
          <button class="w-full mt-4 px-6 py-2 rounded-full border border-gray-300">
            Rejoignez-nous
          </button>
        </div>
      </header>
  
      <!-- Page Header -->
      <section class="bg-blue-500 py-16 md:py-24">
        <div class="container mx-auto px-4 md:px-8 text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 animate-slideUp">Annuaire des Femmes Tech</h1>
          <p class="text-white/90 text-lg max-w-3xl mx-auto">
            Connectez-vous avec des femmes talentueuses dans la technologie à Abomey-Calavi et au-delà. Découvrez des professionnelles par nom, expertise ou entreprise.
          </p>
        </div>
      </section>
  
      <!-- Search and Filters -->
      <section class="py-8 bg-white border-b sticky top-0 z-30 shadow-sm">
        <div class="container mx-auto px-4 md:px-8">
          <div class="flex flex-col md:flex-row gap-4">
            <!-- Search Bar -->
            <div class="flex-grow">
              <div class="relative">
                <input 
                  type="text" 
                  v-model="searchQuery" 
                  placeholder="Rechercher par nom, profession ou entreprise..." 
                  class="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  @input="handleSearch"
                />
                <div class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
              </div>
            </div>
            
            <!-- Filters -->
            <div class="flex gap-2">
              <select 
                v-model="industryFilter" 
                class="px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                @change="handleSearch"
              >
                <option value="">Tous les secteurs</option>
                <option value="Développement logiciel">Développement logiciel</option>
                <option value="Science des données">Science des données</option>
                <option value="Design UX/UI">Design UX/UI</option>
                <option value="Gestion de produit">Gestion de produit</option>
                <option value="Cybersécurité">Cybersécurité</option>
                <option value="IA/ML">IA/ML</option>
                <option value="DevOps">DevOps</option>
                <option value="Autre">Autre</option>
              </select>
              
              <button 
                @click="resetFilters" 
                class="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                title="Réinitialiser les filtres"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M2 12a10 10 0 1 0 20 0 10 10 0 0 0-20 0z"></path>
                  <path d="M12 8v8"></path>
                  <path d="M8 12h8"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Directory Content -->
      <section class="py-12 md:py-16 bg-gray-50 min-h-screen">
        <div class="container mx-auto px-4 md:px-8">
          <!-- Results Count -->
          <div class="mb-6 flex justify-between items-center">
            <p class="text-gray-600">
              Affichage de <span class="font-semibold">{{ paginatedProfessionals.length }}</span> sur <span class="font-semibold">{{ filteredProfessionals.length }}</span> professionnelles
            </p>
            
            <!-- Sort Options -->
            <div class="flex items-center gap-2">
              <span class="text-gray-600">Trier par:</span>
              <select 
                v-model="sortOption" 
                class="px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white text-sm"
                @change="handleSort"
              >
                <option value="nameAsc">Nom (A-Z)</option>
                <option value="nameDesc">Nom (Z-A)</option>
                <option value="companyAsc">Entreprise (A-Z)</option>
                <option value="companyDesc">Entreprise (Z-A)</option>
              </select>
            </div>
          </div>
          
          <!-- Professionals Grid -->
          <div v-if="paginatedProfessionals.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              v-for="professional in paginatedProfessionals" 
              :key="professional.id" 
              class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div class="p-6">
                <div class="flex items-start gap-4">
                  <!-- Profile Image -->
                  <div class="w-16 h-16 rounded-full overflow-hidden bg-blue-100 flex-shrink-0">
                    <img 
                      :src="professional.image || 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png'" 
                      :alt="`${professional.firstName} ${professional.lastName}`" 
                      class="w-full h-full object-cover"
                    />
                  </div>
                  
                  <!-- Professional Info -->
                  <div class="flex-grow">
                    <h3 class="text-xl font-bold text-gray-900">{{ professional.firstName }} {{ professional.lastName }}</h3>
                    <p class="text-blue-500 font-medium">{{ professional.profession }}</p>
                    <p class="text-gray-600 mt-1">{{ professional.company }}</p>
                    
                    <!-- LinkedIn Link -->
                    <a 
                      :href="professional.linkedin" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      class="inline-flex items-center text-gray-600 hover:text-blue-600 mt-3 text-sm"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="mr-1">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                      Se connecter sur LinkedIn
                    </a>
                  </div>
                </div>
                
                <!-- Tags -->
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs">
                    {{ professional.industry }}
                  </span>
                  <span v-for="(skill, index) in professional.skills.slice(0, 2)" :key="index" class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                    {{ skill }}
                  </span>
                  <span v-if="professional.skills.length > 2" class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                    +{{ professional.skills.length - 2 }} plus
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- No Results Message -->
          <div v-else class="text-center py-16 bg-white rounded-xl shadow-sm">
            <div class="w-20 h-20 mx-auto mb-6 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-700 mb-2">Aucune professionnelle trouvée</h3>
            <p class="text-gray-500 mb-6">Aucune professionnelle ne correspond à vos critères de recherche actuels.</p>
            <button 
              @click="resetFilters" 
              class="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
          
          <!-- Pagination -->
          <div v-if="totalPages > 1" class="mt-12 flex justify-center">
            <div class="flex items-center gap-2">
              <button 
                @click="goToPage(currentPage - 1)" 
                :disabled="currentPage === 1"
                :class="[
                  'p-2 rounded-md transition-colors',
                  currentPage === 1 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                ]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              
              <div v-for="page in displayedPages" :key="page" class="flex items-center">
                <button 
                  v-if="page !== '...'"
                  @click="goToPage(page)" 
                  :class="[
                    'w-10 h-10 rounded-md transition-colors',
                    currentPage === page 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  ]"
                >
                  {{ page }}
                </button>
                <span v-else class="w-10 h-10 flex items-center justify-center text-gray-500">...</span>
              </div>
              
              <button 
                @click="goToPage(currentPage + 1)" 
                :disabled="currentPage === totalPages"
                :class="[
                  'p-2 rounded-md transition-colors',
                  currentPage === totalPages 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                ]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Join the Directory -->
      <section class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-4 md:px-8">
          <div class="bg-blue-50 rounded-xl p-8 md:p-12">
            <div class="flex flex-col md:flex-row items-center gap-8">
              <div class="w-full md:w-1/2">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">Rejoignez notre annuaire</h2>
                <p class="text-gray-600 text-lg mb-8 leading-relaxed">
                  Êtes-vous une femme dans la tech basée à Abomey-Calavi ou au Bénin? Rejoignez notre annuaire pour vous connecter avec d'autres professionnelles, gagner en visibilité et accéder à des opportunités de réseautage exclusives.
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                  <a href="#" class="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors text-center">
                    Postuler pour rejoindre
                  </a>
                  <router-link to="/contact" class="px-8 py-3 border border-blue-500 text-blue-500 hover:bg-blue-50 rounded-full transition-colors text-center">
                    En savoir plus
                  </router-link>
                </div>
              </div>
              <div class="w-full md:w-1/2">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wta1.PNG-QpTqRi5Q8QighA37a2AsYttbrftQBs.png" 
                  alt="Femmes dans la tech en réseau" 
                  class="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-gray-900 text-white py-12">
        <div class="container mx-auto px-4 md:px-8">
          <div class="flex flex-col md:flex-row justify-between">
            <div class="mb-8 md:mb-0">
              <div class="flex items-center mb-4">
                <div class="h-10 w-10 mr-2 flex-shrink-0">
                  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="4" fill="#3B82F6" />
                    <path d="M12 10L20 30L28 10" stroke="white" stroke-width="3" />
                  </svg>
                </div>
                <div>
                  <div class="text-white font-medium">Women Techmakers</div>
                  <div class="text-sm text-gray-400">Abomey-Calavi, Bénin</div>
                </div>
              </div>
              <p class="text-gray-400 max-w-md">
                Construire une communauté soutenant les femmes (et tout le monde) pour s'épanouir et diriger dans la technologie depuis 2022.
              </p>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 class="text-lg font-semibold mb-4">À propos</h3>
                <ul class="space-y-2">
                  <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Notre mission</a></li>
                  <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Notre histoire</a></li>
                  <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Notre équipe</a></li>
                  <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Devenir ambassadrice</a></li>
                </ul>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-4">Ressources</h3>
                <ul class="space-y-2">
                  <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Événements</a></li>
                  <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Ateliers</a></li>
                  <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Carrières</a></li>
                </ul>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-4">Connexion</h3>
                <ul class="space-y-2">
                  <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Contactez-nous</a></li>
                  <li>
                    <a href="#" class="text-gray-400 hover:text-white transition-colors">Twitter</a>
                  </li>
                  <li><a href="#" class="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
                  <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p class="text-gray-400 text-sm mb-4 md:mb-0">
              © 2023 Women Techmakers Abomey-Calavi. Tous droits réservés.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue';
  
  // Scroll state
  const isScrolled = ref(false);
  const mobileMenuOpen = ref(false);
  const theme = ref('light');
  
  // Search and filter state
  const searchQuery = ref('');
  const industryFilter = ref('');
  const sortOption = ref('nameAsc');
  
  // Pagination state
  const currentPage = ref(1);
  const itemsPerPage = 9;
  
  // Check scroll position
  const checkScroll = () => {
    isScrolled.value = window.scrollY > 10;
  };
  
  // Toggle theme
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  };
  
  // Close mobile menu when resizing to desktop
  const handleResize = () => {
    if (window.innerWidth >= 768 && mobileMenuOpen.value) {
      mobileMenuOpen.value = false;
    }
  };
  
  // Sample professionals data
  // In a real application, this would come from an API
  const professionals = ref([
    {
      id: 1,
      firstName: 'Aïcha',
      lastName: 'Adéossi',
      profession: 'Développeuse Frontend Senior',
      company: 'TechBénin',
      industry: 'Développement logiciel',
      skills: ['React', 'Vue.js', 'TypeScript', 'CSS', 'UI/UX'],
      linkedin: 'https://linkedin.com/in/aichaadeossi',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png'
    },
    {
      id: 2,
      firstName: 'Fatima',
      lastName: 'Sanni',
      profession: 'PDG & Fondatrice',
      company: 'EduTech Solutions',
      industry: 'Gestion de produit',
      skills: ['Leadership', 'Stratégie produit', 'Développement commercial', 'EdTech'],
      linkedin: 'https://linkedin.com/in/fatimasanni',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png'
    },
    {
      id: 3,
      firstName: 'Mariam',
      lastName: 'Touré',
      profession: 'Data Scientist',
      company: 'Global Tech',
      industry: 'Science des données',
      skills: ['Python', 'Machine Learning', 'Analyse de données', 'SQL', 'Statistiques'],
      linkedin: 'https://linkedin.com/in/mariamtoure',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png'
    },
    {
      id: 4,
      firstName: 'Aminata',
      lastName: 'Diallo',
      profession: 'Tech Lead',
      company: 'InnoTech Solutions',
      industry: 'Développement logiciel',
      skills: ['Java', 'Spring Boot', 'Microservices', 'AWS', 'Architecture système'],
      linkedin: 'https://linkedin.com/in/aminatadiallo',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png'
    },
    {
      id: 5,
      firstName: 'Nadège',
      lastName: 'Koudou',
      profession: 'Designer UX/UI',
      company: 'Creative Digital',
      industry: 'Design UX/UI',
      skills: ['Figma', 'Adobe XD', 'Recherche utilisateur', 'Prototypage', 'Design d\'interaction'],
      linkedin: 'https://linkedin.com/in/nadegekoudou',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png'
    },
    {
      id: 6,
      firstName: 'Kadiatou',
      lastName: 'Bah',
      profession: 'Analyste en cybersécurité',
      company: 'SecureNet',
      industry: 'Cybersécurité',
      skills: ['Sécurité réseau', 'Tests d\'intrusion', 'Audit de sécurité', 'SIEM'],
      linkedin: 'https://linkedin.com/in/kadiatoubah',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png'
    },
    {
      id: 7,
      firstName: 'Awa',
      lastName: 'Cissé',
      profession: 'Chercheuse en IA',
      company: 'BéninAI Research',
      industry: 'IA/ML',
      skills: ['Deep Learning', 'Vision par ordinateur', 'NLP', 'PyTorch', 'Recherche'],
      linkedin: 'https://linkedin.com/in/awacisse',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png'
    },
    {
      id: 8,
      firstName: 'Fatoumata',
      lastName: 'Diop',
      profession: 'Chef de produit',
      company: 'Jumia',
      industry: 'Gestion de produit',
      skills: ['Feuille de route produit', 'Agile', 'User Stories', 'Études de marché', 'Tests A/B'],
      linkedin: 'https://linkedin.com/in/fatoumatdiop',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png'
    },
    {
      id: 9,
      firstName: 'Bintou',
      lastName: 'Koné',
      profession: 'Ingénieure DevOps',
      company: 'Cloud Solutions',
      industry: 'DevOps',
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Infrastructure as Code'],
      linkedin: 'https://linkedin.com/in/bintoukone',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png'
    },
    {
      id: 10,
      firstName: 'Mariama',
      lastName: 'Sow',
      profession: 'Développeuse Mobile',
      company: 'AppWorks',
      industry: 'Développement logiciel',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'UX Mobile'],
      linkedin: 'https://linkedin.com/in/mariamasow',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png'
    },
    {
      id: 11,
      firstName: 'Adja',
      lastName: 'Ndiaye',
      profession: 'Développeuse Backend',
      company: 'FinTech Solutions',
      industry: 'Développement logiciel',
      skills: ['Node.js', 'Express', 'MongoDB', 'Conception API', 'Intégration de paiement'],
      linkedin: 'https://linkedin.com/in/adjandiaye',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png'
    },
    {
      id: 12,
      firstName: 'Aïssatou',
      lastName: 'Barry',
      profession: 'Ingénieure QA',
      company: 'Quality First',
      industry: 'Développement logiciel',
      skills: ['Automatisation de tests', 'Selenium', 'Test API', 'Planification de tests', 'JIRA'],
      linkedin: 'https://linkedin.com/in/aissatoubarry',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png'
    },
    {
      id: 13,
      firstName: 'Oumou',
      lastName: 'Bâ',
      profession: 'Développeuse Blockchain',
      company: 'Blockchain Bénin',
      industry: 'Développement logiciel',
      skills: ['Solidity', 'Smart Contracts', 'Ethereum', 'Web3.js', 'DApps'],
      linkedin: 'https://linkedin.com/in/oumouba',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png'
    },
    {
      id: 14,
      firstName: 'Rokia',
      lastName: 'Traoré',
      profession: 'Ingénieure de données',
      company: 'DataFlow',
      industry: 'Science des données',
      skills: ['ETL', 'Apache Spark', 'Data Warehousing', 'SQL', 'Big Data'],
      linkedin: 'https://linkedin.com/in/rokiatraore',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png'
    },
    {
      id: 15,
      firstName: 'Salimata',
      lastName: 'Coulibaly',
      profession: 'Chef de projet technique',
      company: 'Tech Solutions',
      industry: 'Gestion de produit',
      skills: ['Gestion de projet', 'Scrum', 'JIRA', 'Gestion des risques', 'Communication avec les parties prenantes'],
      linkedin: 'https://linkedin.com/in/salimatacoulibaly',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png'
    },
    {
      id: 16,
      firstName: 'Hawa',
      lastName: 'Keita',
      profession: 'Architecte Cloud',
      company: 'Cloud Innovations',
      industry: 'DevOps',
      skills: ['AWS', 'Azure', 'Migration Cloud', 'Serverless', 'Microservices'],
      linkedin: 'https://linkedin.com/in/hawakeita',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png'
    },
    {
      id: 17,
      firstName: 'Coumba',
      lastName: 'Gueye',
      profession: 'Développeuse de jeux',
      company: 'GameStudio',
      industry: 'Développement logiciel',
      skills: ['Unity', 'C#', 'Game Design', 'Modélisation 3D', 'Animation'],
      linkedin: 'https://linkedin.com/in/coumbagueye',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png'
    },
    {
      id: 18,
      firstName: 'Maimouna',
      lastName: 'Fofana',
      profession: 'Responsable de la sécurité de l\'information',
      company: 'SecureTech',
      industry: 'Cybersécurité',
      skills: ['Politiques de sécurité', 'Évaluation des risques', 'Conformité', 'ISO 27001', 'Sensibilisation à la sécurité'],
      linkedin: 'https://linkedin.com/in/maimounafofana',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png'
    },
    {
      id: 19,
      firstName: 'Ramata',
      lastName: 'Diallo',
      profession: 'Développeuse AR/VR',
      company: 'Immersive Tech',
      industry: 'Développement logiciel',
      skills: ['Unity', 'ARKit', 'ARCore', 'Modélisation 3D', 'Informatique spatiale'],
      linkedin: 'https://linkedin.com/in/ramatadiallo',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png'
    },
    {
      id: 20,
      firstName: 'Djénéba',
      lastName: 'Konaté',
      profession: 'Spécialiste en marketing digital',
      company: 'Digital Growth',
      industry: 'Autre',
      skills: ['SEO', 'Marketing de contenu', 'Médias sociaux', 'Analytique', 'Email marketing'],
      linkedin: 'https://linkedin.com/in/djenebakonata',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png'
    }
  ]);
  
  // Filter professionals based on search query and industry filter
  const filteredProfessionals = computed(() => {
    let result = [...professionals.value];
    
    // Apply search filter
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase();
      result = result.filter(professional => 
        `${professional.firstName} ${professional.lastName}`.toLowerCase().includes(query) ||
        professional.profession.toLowerCase().includes(query) ||
        professional.company.toLowerCase().includes(query)
      );
    }
    
    // Apply industry filter
    if (industryFilter.value) {
      result = result.filter(professional => 
        professional.industry === industryFilter.value
      );
    }
    
    // Apply sorting
    result = sortProfessionals(result);
    
    return result;
  });
  
  // Sort professionals based on selected option
  const sortProfessionals = (professionals) => {
    switch (sortOption.value) {
      case 'nameAsc':
        return [...professionals].sort((a, b) => 
          `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`)
        );
      case 'nameDesc':
        return [...professionals].sort((a, b) => 
          `${b.firstName} ${b.lastName}`.localeCompare(`${a.firstName} ${a.lastName}`)
        );
      case 'companyAsc':
        return [...professionals].sort((a, b) => 
          a.company.localeCompare(b.company)
        );
      case 'companyDesc':
        return [...professionals].sort((a, b) => 
          b.company.localeCompare(a.company)
        );
      default:
        return professionals;
    }
  };
  
  // Calculate total pages
  const totalPages = computed(() => {
    return Math.ceil(filteredProfessionals.value.length / itemsPerPage);
  });
  
  // Get paginated professionals
  const paginatedProfessionals = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProfessionals.value.slice(startIndex, endIndex);
  });
  
  // Calculate displayed pages for pagination
  const displayedPages = computed(() => {
    const pages = [];
    const maxPagesToShow = 5;
    
    if (totalPages.value <= maxPagesToShow) {
      // Show all pages if there are fewer than maxPagesToShow
      for (let i = 1; i <= totalPages.value; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      // Calculate start and end of middle pages
      let startPage = Math.max(2, currentPage.value - 1);
      let endPage = Math.min(totalPages.value - 1, currentPage.value + 1);
      
      // Adjust if we're near the beginning or end
      if (currentPage.value <= 3) {
        endPage = Math.min(maxPagesToShow - 1, totalPages.value - 1);
      } else if (currentPage.value >= totalPages.value - 2) {
        startPage = Math.max(2, totalPages.value - (maxPagesToShow - 2));
      }
      
      // Add ellipsis if needed
      if (startPage > 2) {
        pages.push('...');
      }
      
      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      
      // Add ellipsis if needed
      if (endPage < totalPages.value - 1) {
        pages.push('...');
      }
      
      // Always show last page
      pages.push(totalPages.value);
    }
    
    return pages;
  });
  
  // Handle search and filter changes
  const handleSearch = () => {
    // Reset to first page when search or filter changes
    currentPage.value = 1;
  };
  
  // Handle sort changes
  const handleSort = () => {
    // No need to reset page when just changing sort order
  };
  
  // Reset all filters
  const resetFilters = () => {
    searchQuery.value = '';
    industryFilter.value = '';
    sortOption.value = 'nameAsc';
    currentPage.value = 1;
  };
  
  // Go to specific page
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page;
      // Scroll to top of results
      window.scrollTo({
        top: document.querySelector('.py-12').offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };
  
  // Lifecycle hooks
  onMounted(() => {
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', handleResize);
    
    // Initialize with default sort
    handleSort();
    checkScroll(); // Check initial scroll position
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll);
    window.removeEventListener('resize', handleResize);
  });
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  
  /* Custom animations */
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .animate-slideUp {
    animation: slideUp 0.8s ease-out forwards;
  }
  
  .animate-fadeIn {
    animation: fadeIn 1s ease-out forwards;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .container {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
  
  /* Accessibility - Respect user preference for reduced motion */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
    }
  }
  </style>
  
  <style>
  /* Add Tailwind directives */
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  </style>