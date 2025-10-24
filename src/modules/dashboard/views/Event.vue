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
          <img src="../../../assets/images/logoabwtm.png" alt="" style="width: 150px;">
        </div>
        
        <!-- Navigation -->
        <nav class="hidden md:flex items-center">
          <div class="flex space-x-8 mr-4">
            <router-link to="/" class="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Accueil</router-link>
            <!-- <router-link to="/stats" class="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Statistiques</router-link> -->
            <!-- <router-link to="/testimonials" class="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Témoignages</router-link> -->
            <router-link to="/events" class="text-gray-900 border-b-2 border-gray-900 pb-1 text-sm font-medium">Événements</router-link>
            <!-- <router-link to="/impact" class="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Impact</router-link> -->
            <router-link to="/about" class="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">À propos</router-link>
            <router-link to="/team" class="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Équipe</router-link>
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
        <!-- <router-link to="/stats" class="block text-gray-600">Statistiques</router-link> -->
        <!-- <router-link to="/testimonials" class="block text-gray-600">Témoignages</router-link> -->
        <router-link to="/events" class="block text-gray-900 font-medium">Événements</router-link>
        <!-- <router-link to="/impact" class="block text-gray-600">Impact</router-link> -->
        <router-link to="/about" class="block text-gray-600">À propos</router-link>
        <router-link to="/team" class="block text-gray-600">Équipe</router-link>
        <router-link to="/contact" class="block text-gray-600">Contact</router-link>
        <button class="w-full mt-4 px-6 py-2 rounded-full border border-gray-300">
          Rejoignez-nous
        </button>
      </div>
    </header>

    <!-- Page Header -->
    <section class="bg-blue-500 py-16 md:py-24">
      <div class="container mx-auto px-4 md:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 animate-slideUp">Nos Événements</h1>
        <p class="text-white/90 text-lg max-w-3xl mx-auto">
          Rejoignez-nous pour des ateliers, des conférences et des événements de réseautage conçus pour autonomiser les femmes dans la technologie.
          Consultez les enregistrements d'événements passés et découvrez les opportunités à venir.
        </p>
      </div>
    </section>
  
    <!-- Upcoming Events -->
    <section class="py-16 md:py-20 bg-white">
      <div class="container mx-auto px-4 md:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">Événements à Venir</h2>
        
        <!-- Featured Upcoming Event -->
        <div class="bg-white rounded-xl overflow-hidden shadow-lg mb-16">
          <div class="flex flex-col lg:flex-row">
            <div class="w-full lg:w-1/2 relative">
              <div class="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium z-20">
                Événement Vedette
              </div>
              <img 
               :src="im5"
                alt="Atelier Femmes dans l'IA" 
                class="w-full h-full object-cover"
              />
            </div>
            <div class="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <h3 class="text-2xl font-bold mb-4">Atelier Femmes dans l'IA</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Rejoignez-nous pour une journée complète d'atelier explorant les applications de l'intelligence artificielle et les opportunités de carrière pour les femmes dans le domaine de l'IA. Réseautez avec des experts du secteur et acquérez une expérience pratique.
              </p>
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <div>
                  <p class="text-gray-700 font-medium">15 Avril 2024</p>
                  <p class="text-gray-500 text-sm">9h00 - 17h00</p>
                </div>
              </div>
              <div class="flex items-center mb-6">
                <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <p class="text-gray-700 font-medium">Centre d'Innovation UAC</p>
                  <p class="text-gray-500 text-sm">Abomey-Calavi, Bénin</p>
                </div>
              </div>
              <button class="self-start px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
                S'inscrire Maintenant
              </button>
            </div>
          </div>
        </div>
        
        <!-- Other Upcoming Events -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Upcoming Event 1 -->
          <div class="event-card bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2 animate-on-scroll">
            <div class="relative h-48 overflow-hidden">
              <div class="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium z-20">
                À Venir
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <img 
                :src="im7"
                alt="Panel de Leadership Tech" 
                class="w-full h-full object-cover"
              />
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                <h3 class="text-xl font-bold mb-2">Panel de Leadership Tech</h3>
                <p class="text-white/90">Femmes leaders en tech partagent leurs parcours</p>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <div>
                  <p class="text-gray-700 font-medium">10 Mai 2024</p>
                  <p class="text-gray-500 text-sm">18h00 - 20h30</p>
                </div>
              </div>
              <div class="flex items-center mb-6">
                <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <p class="text-gray-700 font-medium">Centre d'Innovation</p>
                  <p class="text-gray-500 text-sm">Abomey-Calavi, Bénin</p>
                </div>
              </div>
              <button class="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
                S'inscrire Maintenant
              </button>
            </div>
          </div>
          
          <!-- Upcoming Event 2 -->
          <div class="event-card bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2 animate-on-scroll animation-delay-300">
            <div class="relative h-48 overflow-hidden">
              <div class="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium z-20">
                À Venir
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <img 
                :src="im8"
                alt="Atelier de Développement Web" 
                class="w-full h-full object-cover"
              />
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                <h3 class="text-xl font-bold mb-2">Atelier de Développement Web</h3>
                <p class="text-white/90">Développement web moderne pratique</p>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <div>
                  <p class="text-gray-700 font-medium">22 Mai 2024</p>
                  <p class="text-gray-500 text-sm">9h00 - 16h00</p>
                </div>
              </div>
              <div class="flex items-center mb-6">
                <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <p class="text-gray-700 font-medium">Campus Code</p>
                  <p class="text-gray-500 text-sm">Abomey-Calavi, Bénin</p>
                </div>
              </div>
              <button class="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
                S'inscrire Maintenant
              </button>
            </div>
          </div>
          
          <!-- Upcoming Event 3 -->
          <div class="event-card bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2 animate-on-scroll animation-delay-600">
            <div class="relative h-48 overflow-hidden">
              <div class="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium z-20">
                À Venir
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <img 
                :src="im6"
                alt="Salon de l'Emploi Tech" 
                class="w-full h-full object-cover"
              />
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                <h3 class="text-xl font-bold mb-2">Salon de l'Emploi Tech</h3>
                <p class="text-white/90">Connectez-vous avec les meilleurs employeurs tech</p>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <div>
                  <p class="text-gray-700 font-medium">5 Juin 2024</p>
                  <p class="text-gray-500 text-sm">10h00 - 16h00</p>
                </div>
              </div>
              <div class="flex items-center mb-6">
                <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <p class="text-gray-700 font-medium">Centre de Conférences</p>
                  <p class="text-gray-500 text-sm">Cotonou, Bénin</p>
                </div>
              </div>
              <button class="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
                S'inscrire Maintenant
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Past Events -->
    <section class="py-16 md:py-20 bg-gray-50">
      <div class="container mx-auto px-4 md:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">Événements Passés</h2>
        
        <!-- Events Carousel -->
        <div class="relative">
          <!-- Navigation Arrows -->
          <button class="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-3 -ml-4 md:-ml-6 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-gray-700">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            <span class="sr-only">Précédent</span>
          </button>
          
          <button class="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-3 -mr-4 md:-mr-6 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-gray-700">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
            <span class="sr-only">Suivant</span>
          </button>
          
          <!-- Events Cards -->
          <div class="flex overflow-x-auto pb-8 hide-scrollbar gap-6 px-2">
            <!-- Past Event Card 1 -->
            <div class="event-card flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2 animate-on-scroll">
              <div class="relative h-64 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img 
                  :src="im6"
                  alt="Fondation Dariu" 
                  class="w-full h-full object-cover"
                />
                <div class="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                  <h3 class="text-2xl font-bold mb-2">Journée de la Femme</h3>
                  <p class="text-white/90">Célébration de la Journée Internationale de la Femme</p>
                </div>
              </div>
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <div>
                    <p class="text-gray-700 font-medium">Mars 2023</p>
                    <p class="text-gray-500 text-sm">+ 200 Participants</p>
                  </div>
                </div>
                <div class="flex items-center mb-6">
                  <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <p class="text-gray-700 font-medium">Campus UAC</p>
                    <p class="text-gray-500 text-sm">Abomey-Calavi, Bénin</p>
                  </div>
                </div>
                <p class="text-gray-600 mb-6">
                  Un événement collaboratif axé sur l'autonomisation des femmes par l'éducation technologique et les opportunités d'entrepreneuriat au Bénin.
                </p>
                <button class="w-full py-3 border border-blue-500 text-blue-500 hover:bg-blue-50 rounded-full transition-colors">
                  Voir les Détails de l'Événement
                </button>
              </div>
            </div>
            
            <!-- Past Event Card 2 -->
            <div class="event-card flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2 animate-on-scroll animation-delay-300">
              <div class="relative h-64 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img 
                  :src="im8"
                  alt="Google I/O Extended" 
                  class="w-full h-full object-cover"
                />
                <div class="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                  <h3 class="text-2xl font-bold mb-2">Google I/O 2023</h3>
                  <p class="text-white/90">Google I/O Extended Abomey-Calavi 2023</p>
                </div>
              </div>
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <div>
                    <p class="text-gray-700 font-medium">Juillet 2023</p>
                    <p class="text-gray-500 text-sm">+ 120 Participants</p>
                  </div>
                </div>
                <div class="flex items-center mb-6">
                  <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <p class="text-gray-700 font-medium">Espace Google Developer</p>
                    <p class="text-gray-500 text-sm">Abomey-Calavi, Bénin</p>
                  </div>
                </div>
                <p class="text-gray-600 mb-6">
                  Women Techmakers Abomey-Calavi a organisé l'événement Google I/O Extended, apportant les dernières technologies et annonces de Google à la communauté tech locale.
                </p>
                <button class="w-full py-3 border border-blue-500 text-blue-500 hover:bg-blue-50 rounded-full transition-colors">
                  Voir les Détails de l'Événement
                </button>
              </div>
            </div>
            
            <!-- Past Event Card 3 -->
            <div class="event-card flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2 animate-on-scroll animation-delay-600">
              <div class="relative h-64 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img 
                 :src="im5"
                  alt="Tech Station" 
                  class="w-full h-full object-cover"
                />
                <div class="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                  <h3 class="text-2xl font-bold mb-2">Tech Station</h3>
                  <p class="text-white/90">Tech Station: Déjeuner avec les filles en tech</p>
                </div>
              </div>
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <div>
                    <p class="text-gray-700 font-medium">Août 2023</p>
                    <p class="text-gray-500 text-sm">+ 24 Participants</p>
                  </div>
                </div>
                <div class="flex items-center mb-6">
                  <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <p class="text-gray-700 font-medium">Café Tech Station</p>
                    <p class="text-gray-500 text-sm">Abomey-Calavi, Bénin</p>
                  </div>
                </div>
                <p class="text-gray-600 mb-6">
                  Un déjeuner de réseautage intime rassemblant des femmes dans la technologie pour partager des expériences, des défis et des opportunités dans un environnement favorable.
                </p>
                <button class="w-full py-3 border border-blue-500 text-blue-500 hover:bg-blue-50 rounded-full transition-colors">
                  Voir les Détails de l'Événement
                </button>
              </div>
            </div>
            
            <!-- Past Event Card 4 -->
            <div class="event-card flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2 animate-on-scroll animation-delay-900">
              <div class="relative h-64 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ggol.PNG-tPaF1gNRQlMoNVSK7mU3YvAwfeseue.png" 
                  alt="Bootcamp de Codage" 
                  class="w-full h-full object-cover"
                />
                <div class="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                  <h3 class="text-2xl font-bold mb-2">Bootcamp de Codage</h3>
                  <p class="text-white/90">Atelier intensif de codage le weekend</p>
                </div>
              </div>
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <div>
                    <p class="text-gray-700 font-medium">Septembre 2023</p>
                    <p class="text-gray-500 text-sm">+ 50 Participants</p>
                  </div>
                </div>
                <div class="flex items-center mb-6">
                  <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <p class="text-gray-700 font-medium">Académie Tech</p>
                    <p class="text-gray-500 text-sm">Abomey-Calavi, Bénin</p>
                  </div>
                </div>
                <p class="text-gray-600 mb-6">
                  Un atelier intensif de codage d'un week-end axé sur le développement de compétences pratiques pour les femmes entrant ou progressant dans des carrières technologiques.
                </p>
                <button class="w-full py-3 border border-blue-500 text-blue-500 hover:bg-blue-50 rounded-full transition-colors">
                  Voir les Détails de l'Événement
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- View All Events Button -->
        <div class="text-center mt-12">
          <button class="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 inline-flex items-center">
            Voir Tous les Événements
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  
    <!-- Event Categories -->
    <section class="py-16 md:py-20 bg-white">
      <div class="container mx-auto px-4 md:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">Catégories d'Événements</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Category 1 -->
          <div class="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Ateliers</h3>
            <p class="text-gray-600 mb-4">Expériences d'apprentissage pratiques axées sur des compétences et outils techniques spécifiques.</p>
            <button class="text-blue-500 font-medium hover:text-blue-600">
              Voir les Ateliers
            </button>
          </div>
          
          <!-- Category 2 -->
          <div class="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Réseautage</h3>
            <p class="text-gray-600 mb-4">Connectez-vous avec d'autres femmes dans la tech, des mentors et des leaders de l'industrie.</p>
            <button class="text-blue-500 font-medium hover:text-blue-600">
              Voir les Événements de Réseautage
            </button>
          </div>
          
          <!-- Category 3 -->
          <div class="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
            <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-500">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Conférences</h3>
            <p class="text-gray-600 mb-4">Événements à grande échelle avec des discours, des panels et plusieurs sessions.</p>
            <button class="text-blue-500 font-medium hover:text-blue-600">
              Voir les Conférences
            </button>
          </div>
          
          <!-- Category 4 -->
          <div class="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-500">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Développement de Carrière</h3>
            <p class="text-gray-600 mb-4">Ateliers de CV, préparation aux entretiens et stratégies d'avancement de carrière.</p>
            <button class="text-blue-500 font-medium hover:text-blue-600">
              Voir les Événements de Carrière
            </button>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Host an Event -->
    <section class="py-16 md:py-24 bg-blue-500">
      <div class="container mx-auto px-4 md:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Vous Souhaitez Organiser un Événement?</h2>
        <p class="text-white/90 text-lg max-w-3xl mx-auto mb-10">
          Si vous êtes intéressé(e) à organiser un événement ou un atelier Women Techmakers, nous serions ravis de collaborer avec vous. Notre équipe peut fournir des ressources, des intervenants et un soutien promotionnel.
        </p>
        <button class="px-8 py-3 bg-white text-blue-500 rounded-full hover:bg-blue-50 transition-colors">
          Devenir Partenaire d'Événement
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4 md:px-8">
        <div class="flex flex-col md:flex-row justify-between">
          <div class="mb-8 md:mb-0">
            <div class="flex items-center mb-4">
              <img src="../../../assets/images/logoabwtm.png" alt="" style="width: 250px;">
            </div>
            <p class="text-gray-400 max-w-md">
              Construire une communauté soutenant les femmes (et tout le monde) pour s'épanouir et diriger dans la technologie depuis 2021.
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
import { ref, onMounted, onUnmounted } from 'vue';
import im1 from "../../../assets/images/events.png";
    import im2 from "../../../assets/images/problem.webp";
    import im3 from "../../../assets/images/brak.png";
    import im4 from "../../../assets/images/wa3.png";
    import im5 from "../../../assets/images/wa1.png";
    import im6 from "../../../assets/images/ac3.jpg";
    import im7 from "../../../assets/images/ac4.jpg";
    import im8 from "../../../assets/images/wa5.png";

// Scroll state
const isScrolled = ref(false);
const mobileMenuOpen = ref(false);
const theme = ref('light');

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

// Animation on scroll
const handleScrollAnimation = () => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  elements.forEach(element => {
    const position = element.getBoundingClientRect();
    
    // Check if element is in viewport
    if(position.top < window.innerHeight * 0.9 && position.bottom >= 0) {
      element.classList.add('animate-fade-in');
    }
  });
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', checkScroll);
  window.addEventListener('scroll', handleScrollAnimation);
  window.addEventListener('resize', handleResize);
  
  checkScroll(); // Check initial scroll position
  handleScrollAnimation(); // Check initial positions
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
  window.removeEventListener('scroll', handleScrollAnimation);
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

/* Animation on scroll */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.animate-fade-in {
  opacity: 1;
  transform: translateY(0);
}

.animation-delay-300 {
  transition-delay: 0.3s;
}

.animation-delay-600 {
  transition-delay: 0.6s;
}

.animation-delay-900 {
  transition-delay: 0.9s;
}

/* Events section specific styles */
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;  /* Chrome, Safari, Opera */
}

.event-card {
  min-width: 300px;
}

/* Responsive adjustments */
/* @media (max-  Safari, Opera ) {
  


.event-card {
  min-width: 300px;
}
} */
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