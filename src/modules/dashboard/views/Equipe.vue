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
              <router-link to="/events" class="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Événements</router-link>
              <!-- <router-link to="/impact" class="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Impact</router-link> -->
              <router-link to="/about" class="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">À propos</router-link>
              <router-link to="/team" class="text-gray-900 border-b-2 border-gray-900 pb-1 text-sm font-medium">Équipe</router-link>
              <router-link to="/contact" class="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Contact</router-link>
            </div>
            <button class="px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors text-sm">
              Rejoignez-nous
            </button>
            <!-- <button @click="toggleTheme" class="ml-4 p-2 rounded-full hover:bg-gray-100 transition-colors">
              
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
           
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </button> -->
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
          <router-link to="/events" class="block text-gray-600">Événements</router-link>
          <!-- <router-link to="/impact" class="block text-gray-600">Impact</router-link> -->
          <router-link to="/about" class="block text-gray-600">À propos</router-link>
          <router-link to="/team" class="block text-gray-900 font-medium">Équipe</router-link>
          <router-link to="/contact" class="block text-gray-600">Contact</router-link>
          <button class="w-full mt-4 px-6 py-2 rounded-full border border-gray-300">
            Rejoignez-nous
          </button>
        </div>
      </header>
  
      <!-- Page Header -->
      <section class="bg-blue-500 py-16 md:py-24">
        <div class="container mx-auto px-4 md:px-8 text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 animate-slideUp">Notre Équipe</h1>
          <p class="text-white/90 text-lg max-w-3xl mx-auto">
            Rencontrez les personnes passionnées derrière Women Techmakers Abomey-Calavi qui se consacrent à l'autonomisation des femmes dans la technologie.
          </p>
        </div>
      </section>
    
      <!-- Leadership Team -->
      <section class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-4 md:px-8">
          <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center">Core Team</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
            <!-- Team Member 1 -->
            <div class="bg-white rounded-xl overflow-hidden shadow-md text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div class="h-64 overflow-hidden">
                <img 
                  src="../../../assets/images/t1.png" 
                  alt="Aïcha Koné" 
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-1">Laetitia Sessi AGASSA</h3>
                <p class="text-blue-500 mb-4">Lead WTM Abomey-Calavi</p>
                <p class="text-gray-600 mb-6">
                    Hi, I'm Laetitia, web developer. My curiosity about the internet led me to touch a few bits of code, but given my literary baccalaureate and the precept that this sector of code was only open to scientists, I obtained a professional degree in diplomacy and international relations.
                </p>
                <div class="flex justify-center space-x-4">
                  <a href="#" class="text-gray-400 hover:text-blue-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                  <a href="#" class="text-gray-400 hover:text-blue-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Team Member 2 -->
            <div class="bg-white rounded-xl overflow-hidden shadow-md text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div class="h-64 overflow-hidden">
                <img 
                  src="../../../assets/images/t2.png" 
                  alt="Fatou Diallo" 
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-1">Micrette TOHOUNGNAN</h3>
                <p class="text-blue-500 mb-4">Lead GDG</p>
                <p class="text-gray-600 mb-6">
                    Micrette a technology enthusiast. Currently, she is an experienced user interface design consultant and educator with proven experience in UX/UI design applied to any field (Stem, education, health, finetech, agromony, networks...).
                </p>
                <div class="flex justify-center space-x-4">
                  <a href="https://www.linkedin.com/in/micrette-tohoungnan/" class="text-gray-400 hover:text-blue-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                  <a href="#" class="text-gray-400 hover:text-blue-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Team Member 3 -->
            <div class="bg-white rounded-xl overflow-hidden shadow-md text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div class="h-64 overflow-hidden">
                <img 
                src="../../../assets/images/t3.png" 
                  alt="Aminata Sow" 
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-1">Nabilath ADELEKE</h3>
                <p class="text-blue-500 mb-4">Responsable de la Communication</p>
                <p class="text-gray-600 mb-6">
       Social media manager| Personal branding Strategist.
                </p>
                <div class="flex justify-center space-x-4">
                  <a href="https://www.linkedin.com/in/nabilath-adeleke-360209194/" class="text-gray-400 hover:text-blue-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                  <a href="#" class="text-gray-400 hover:text-blue-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <!-- Core Team -->
      <section class="py-16 md:py-24 bg-gray-50">
        <div class="container mx-auto px-4 md:px-8">
          <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center">Équipe d'organisation</h2>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <!-- Core Team Member 1 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-md text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div class="h-48 overflow-hidden">
                <img 
                src="../../../assets/images/ca1.jpeg" 
                  alt="Mariama Bah" 
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="p-4">
                <h3 class="font-bold text-lg mb-1">Eudoxie ABOUTA</h3>
                <p class="text-blue-500 text-sm mb-3">Coordonatrice activités </p>
                <p class="text-gray-600 text-sm mb-4">
                  Organise et gère tous les événements communautaires, en s'assurant qu'ils se déroulent bien et atteignent nos objectifs.
                </p>
                <div class="flex justify-center space-x-3">
                  <a href="#" class="text-gray-400 hover:text-blue-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Core Team Member 2 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-md text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div class="h-48 overflow-hidden">
                <img 
                src="../../../assets/images/c3.png" 
                  alt="Kadiatou Barry" 
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="p-4">
                <h3 class="font-bold text-lg mb-1">Abigail Ligan</h3>
                <p class="text-blue-500 text-sm mb-3">Coordonatrice des activités</p>
                <p class="text-gray-600 text-sm mb-4">
                  Développe et met en œuvre des stratégies marketing pour promouvoir notre communauté et nos événements.
                </p>
                <div class="flex justify-center space-x-3">
                  <a href="#" class="text-gray-400 hover:text-blue-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Core Team Member 3 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-md text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div class="h-48 overflow-hidden">
                <img 
                src="../../../assets/images/c1.png" 
                  alt="Awa Cissé" 
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="p-4">
                <h3 class="font-bold text-lg mb-1">Faridatou Salifou</h3>
                <p class="text-blue-500 text-sm mb-3">Responsale partenariat</p>
                <p class="text-gray-600 text-sm mb-4">
                    Elle développe des relations avec les entreprises tech, les espaces de coworking et autres communautés. Elle trouve des sponsors et négocie des collaborations pour soutenir les activités de la communauté.


                
                </p>
                <div class="flex justify-center space-x-3">
                  <a href="#" class="text-gray-400 hover:text-blue-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Core Team Member 4 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-md text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div class="h-48 overflow-hidden">
                <img 
                src="../../../assets/images/c6.png" 
                  alt="Fatoumata Diop" 
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="p-4">
                <h3 class="font-bold text-lg mb-1">Divine Kenagnon</h3>
                <p class="text-blue-500 text-sm mb-3">Responsable Partenariats</p>
                <p class="text-gray-600 text-sm mb-4">
                    Elle développe des relations avec les entreprises tech, les espaces de coworking et autres communautés. Elle trouve des sponsors et négocie des collaborations pour soutenir les activités de la communauté.


                
                </p>
                <div class="flex justify-center space-x-3">
                  <a href="#" class="text-gray-400 hover:text-blue-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Core Team Member 5 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-md text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div class="h-48 overflow-hidden">
                <img 
                src="../../../assets/images/c5.png" 
                  alt="Bintou Koné" 
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="p-4">
                <h3 class="font-bold text-lg mb-1">Emmanuella Sodabi</h3>
                <p class="text-blue-500 text-sm mb-3">Responsable des programmes
                </p>
                <p class="text-gray-600 text-sm mb-4">
                    Elle met en place des programmes de mentorat entre membres expérimentées et débutantes. Elle identifie les besoins en développement professionnel et organise des sessions de coaching et de partage d'expérience.

                
                </p>
                <div class="flex justify-center space-x-3">
                  <a href="#" class="text-gray-400 hover:text-blue-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div class="bg-white rounded-lg overflow-hidden shadow-md text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div class="h-48 overflow-hidden">
                <img 
                src="../../../assets/images/c4.png" 
                  alt="Bintou Koné" 
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="p-4">
                <h3 class="font-bold text-lg mb-1">Diana Missekpe</h3>
                <p class="text-blue-500 text-sm mb-3">Responsable des programmes
                </p>
                <p class="text-gray-600 text-sm mb-4">
                    Elle met en place des programmes de mentorat entre membres expérimentées et débutantes. Elle identifie les besoins en développement professionnel et organise des sessions de coaching et de partage d'expérience.

                
                </p>
                <div class="flex justify-center space-x-3">
                  <a href="#" class="text-gray-400 hover:text-blue-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <!-- Core Team Member 6 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-md text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div class="h-48 overflow-hidden">
                <img 
                src="../../../assets/images/ca2.jpeg" 
                  alt="Adja Ndiaye" 
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="p-4">
                <h3 class="font-bold text-lg mb-1">Letícia Biova</h3>
                <p class="text-blue-500 text-sm mb-3">Responsable communication et marketing digital</p>
                <p class="text-gray-600 text-sm mb-4">
                    Créative et à l'aise avec les réseaux sociaux, elle gère la visibilité de la communauté. Elle crée du contenu engageant, anime les réseaux sociaux et gère la newsletter pour mobiliser les membres.

                </p>
                <div class="flex justify-center space-x-3">
                  <a href="#" class="text-gray-400 hover:text-blue-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Core Team Member 7 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-md text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div class="h-48 overflow-hidden">
                <img 
                src="../../../assets/images/c2.png" 
                  alt="Aïssatou Barry" 
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="p-4">
                <h3 class="font-bold text-lg mb-1">Murielle Kpinso</h3>
                <p class="text-blue-500 text-sm mb-3">Responsable artistique</p>
                <p class="text-gray-600 text-sm mb-4">
                    Elle est une personne créative, qui a un bon sens de l'initiative. Elle se charge des designs et des visuels, de tout ce qui fait partie de la communication visuelle.
                
                </p>
                <div class="flex justify-center space-x-3">
                  <a href="#" class="text-gray-400 hover:text-blue-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Core Team Member 8 -->
           
          </div>
        </div>
      </section>
    
      <!-- Volunteer Team -->
      <!-- <section class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-4 md:px-8">
          <h2 class="text-3xl md:text-4xl font-bold mb-6 text-center">Équipe de Bénévoles</h2>
          <p class="text-gray-600 text-lg max-w-3xl mx-auto text-center mb-16">
            Nos bénévoles dévoués aident à rendre nos événements et programmes possibles. Nous sommes reconnaissants pour leur passion et leur engagement envers notre mission.
          </p>
          
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
           
            <div class="bg-gray-50 rounded-lg p-4 text-center">
              <div class="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png" 
                  alt="Bénévole" 
                  class="w-full h-full object-cover"
                />
              </div>
              <h3 class="font-bold">Mariam Touré</h3>
              <p class="text-blue-500 text-xs">Support Événementiel</p>
            </div>
            
         
            <div class="bg-gray-50 rounded-lg p-4 text-center">
              <div class="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png" 
                  alt="Bénévole" 
                  class="w-full h-full object-cover"
                />
              </div>
              <h3 class="font-bold">Moussa Diallo</h3>
              <p class="text-blue-500 text-xs">Assistant d'Atelier</p>
            </div>
            
            
            <div class="bg-gray-50 rounded-lg p-4 text-center">
              <div class="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png" 
                  alt="Bénévole" 
                  class="w-full h-full object-cover"
                />
              </div>
              <h3 class="font-bold">Aïcha Traoré</h3>
              <p class="text-blue-500 text-xs">Rédactrice de Contenu</p>
            </div>
            
        
            <div class="bg-gray-50 rounded-lg p-4 text-center">
              <div class="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png" 
                  alt="Bénévole" 
                  class="w-full h-full object-cover"
                />
              </div>
              <h3 class="font-bold">Seydou Koné</h3>
              <p class="text-blue-500 text-xs">Photographe</p>
            </div>
            
       
            <div class="bg-gray-50 rounded-lg p-4 text-center">
              <div class="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png" 
                  alt="Bénévole" 
                  class="w-full h-full object-cover"
                />
              </div>
              <h3 class="font-bold">Ibrahim Sow</h3>
              <p class="text-blue-500 text-xs">Support Technique</p>
            </div>
            
          
            <div class="bg-gray-50 rounded-lg p-4 text-center">
              <div class="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png" 
                  alt="Bénévole" 
                  class="w-full h-full object-cover"
                />
              </div>
              <h3 class="font-bold">Fatima Diallo</h3>
              <p class="text-blue-500 text-xs">Designer Graphique</p>
            </div>
          </div>
        </div>
      </section> -->
    
      <!-- Join Our Team -->
      <section class="py-16 md:py-24 bg-gray-50">
        <div class="container mx-auto px-4 md:px-8">
          <div class="bg-white rounded-xl shadow-lg overflow-hidden">
            <div class="flex flex-col md:flex-row">
              <div class="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">Rejoignez Notre Équipe</h2>
                <p class="text-gray-600 text-lg mb-8 leading-relaxed">
                  Nous recherchons toujours des personnes passionnées pour rejoindre notre équipe. Que vous soyez intéressé(e) par le bénévolat, devenir membre de l'équipe principale, ou explorer d'autres opportunités, nous serions ravis d'avoir de vos nouvelles.
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                  <router-link to="/hiring" class="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors text-center">
                    Voir les Postes Ouverts
                  </router-link>
                  <router-link to="/contact" class="px-8 py-3 border border-blue-500 text-blue-500 hover:bg-blue-50 rounded-full transition-colors text-center">
                    Contactez-Nous
                  </router-link>
                </div>
              </div>
              <div class="w-full md:w-1/2">
                <img 
                src="../../../assets/images/wa2.png" 
                  alt="Collaboration d'équipe" 
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <!-- Team Values -->
      <section class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-4 md:px-8">
          <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center">Nos Valeurs d'Équipe</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Value 1 -->
            <div class="bg-gray-50 rounded-xl p-8 text-center">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-4">Collaboration</h3>
              <p class="text-gray-600">
                Nous croyons au pouvoir du travail d'équipe. En combinant nos compétences et perspectives diverses, nous créons de meilleures solutions et des communautés plus fortes.
              </p>
            </div>
            
            <!-- Value 2 -->
            <div class="bg-gray-50 rounded-xl p-8 text-center">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-4">Autonomisation</h3>
              <p class="text-gray-600">
                Nous nous engageons à autonomiser les femmes dans la technologie en leur fournissant les ressources, le soutien et les opportunités dont elles ont besoin pour réussir.
              </p>
            </div>
            
            <!-- Value 3 -->
            <div class="bg-gray-50 rounded-xl p-8 text-center">
              <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-500">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-4">Inclusivité</h3>
              <p class="text-gray-600">
                Nous accueillons tout le monde, indépendamment de son origine, de son niveau d'expérience ou de son identité. Nous croyons que des perspectives diverses mènent à de meilleures solutions et à une communauté technologique plus forte.
              </p>
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