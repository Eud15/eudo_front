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
              <router-link to="/about" class="text-gray-900 border-b-2 border-gray-900 pb-1 text-sm font-medium">À propos</router-link>
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
          <router-link to="/events" class="block text-gray-600">Événements</router-link>
          <!-- <router-link to="/impact" class="block text-gray-600">Impact</router-link> -->
          <router-link to="/about" class="block text-gray-900 font-medium">À propos</router-link>
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
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 animate-slideUp">À Propos de Nous</h1>
          <p class="text-white/90 text-lg max-w-3xl mx-auto">
            Découvrez notre mission, nos valeurs et l'équipe passionnée derrière Women Techmakers Abomey-Calavi.
          </p>
        </div>
      </section>
    
      <!-- Mission Statement -->
      <section class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-4 md:px-8">
          <div class="flex flex-col md:flex-row items-center mb-20">
            <div class="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-12">
              <h2 class="text-4xl md:text-5xl font-bold mb-6">
                Notre <span class="text-blue-500">Mission</span>
              </h2>
              <p class="text-gray-600 text-lg mb-6 leading-relaxed">
                Women Techmakers Abomey-Calavi se consacre à la construction d'une communauté dynamique qui autonomise les femmes dans la technologie grâce à la visibilité, à la communauté et aux ressources.
              </p>
              <p class="text-gray-600 text-lg mb-8 leading-relaxed">
                Nous croyons en la création d'un environnement inclusif où chacun peut développer ses compétences, partager ses connaissances et faire progresser sa carrière dans l'industrie technologique.
              </p>
              <div class="flex flex-wrap gap-4">
                <div class="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                  <div class="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span class="text-gray-700">Autonomisation</span>
                </div>
                <div class="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                  <div class="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span class="text-gray-700">Inclusion</span>
                </div>
                <div class="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                  <div class="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span class="text-gray-700">Innovation</span>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 relative">
              <div class="aspect-video relative overflow-hidden rounded-lg shadow-xl animate-on-scroll">
                <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-400/20 z-10"></div>
                <img 
                  :src="im4"
                  alt="Événement Women Techmakers" 
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100 rounded-full z-0"></div>
              <div class="absolute -top-6 -right-6 w-32 h-32 bg-green-100 rounded-full z-0"></div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Our Story -->
      <section class="py-16 md:py-24 bg-gray-50">
        <div class="container mx-auto px-4 md:px-8">
          <h2 class="text-4xl md:text-5xl font-bold mb-10 text-center">
            Notre <span class="text-blue-500">Histoire</span>
          </h2>
          
          <div class="timeline relative">
            <!-- Timeline Line -->
            <div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-blue-200 transform md:translate-x-[-0.5px]"></div>
            
            <!-- Timeline Items -->
            <div class="timeline-item mb-16">
              <div class="flex flex-col md:flex-row items-start">
                <div class="w-full md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <h3 class="text-2xl font-bold mb-3">Fondation</h3>
                  <p class="text-gray-600 mb-2">15 Mars 2021</p>
                  <p class="text-gray-600 leading-relaxed">
                    Women Techmakers Abomey-Calavi a été fondé avec la vision de créer une communauté de soutien pour les femmes dans la technologie. En commençant avec un petit groupe de passionnés de technologie, nous nous sommes fixés pour objectif de faire une différence dans l'écosystème technologique local.
                  </p>
                </div>
                <div class="timeline-marker order-1 md:order-2 flex items-center justify-center w-full md:w-0 mb-4 md:mb-0">
                  <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                  </div>
                </div>
                <div class="w-full md:w-1/2 md:pl-12 order-3">
                  <div class="bg-blue-50 rounded-lg overflow-hidden shadow-md animate-on-scroll">
                    <img 
                      :src="im6"
                      alt="Événement de fondation de Women Techmakers" 
                      class="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div class="timeline-item mb-16">
              <div class="flex flex-col md:flex-row items-start">
                <div class="w-full md:w-1/2 md:pr-12 order-2">
                  <div class="bg-green-50 rounded-lg overflow-hidden shadow-md animate-on-scroll">
                    <img 
                      :src="im7"
                      alt="Premier atelier de Women Techmakers" 
                      class="w-full h-48 object-cover"
                    />
                  </div>
                </div>
                <div class="timeline-marker order-1 flex items-center justify-center w-full md:w-0 mb-4 md:mb-0">
                  <div class="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center shadow-lg z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  </div>
                </div>
                <div class="w-full md:w-1/2 md:pl-12 md:text-left order-3">
                  <h3 class="text-2xl font-bold mb-3">Premier Atelier</h3>
                  <p class="text-gray-600 mb-2">10 Avril 2021</p>
                  <p class="text-gray-600 leading-relaxed">
                    Nous avons organisé notre premier atelier technique axé sur le développement web, attirant plus de 40 participants. Cela a marqué le début de nos initiatives éducatives pour aider les femmes à développer des compétences pratiques en technologie.
                  </p>
                </div>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="flex flex-col md:flex-row items-start">
                <div class="w-full md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <h3 class="text-2xl font-bold mb-3">Croissance de la Communauté</h3>
                  <p class="text-gray-600 mb-2">Aujourd'hui</p>
                  <p class="text-gray-600 leading-relaxed">
                    Aujourd'hui, notre communauté compte plus de 300 membres, avec des événements réguliers, des ateliers et des programmes de mentorat. Nous avons établi des partenariats avec des entreprises technologiques de premier plan pour offrir des opportunités aux femmes de s'épanouir dans le secteur technologique.
                  </p>
                </div>
                <div class="timeline-marker order-1 md:order-2 flex items-center justify-center w-full md:w-0 mb-4 md:mb-0">
                  <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                </div>
                <div class="w-full md:w-1/2 md:pl-12 order-3">
                  <div class="bg-blue-50 rounded-lg overflow-hidden shadow-md animate-on-scroll">
                    <img 
                     :src="im8"
                      alt="Événement communautaire Women Techmakers" 
                      class="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Our Values -->
      <section class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-4 md:px-8">
          <h2 class="text-4xl md:text-5xl font-bold mb-10 text-center">
            Nos <span class="text-blue-500">Valeurs</span>
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="value-card bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg animate-on-scroll">
              <div class="h-3 bg-blue-500"></div>
              <div class="p-6">
                <div class="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold mb-2">Communauté</h3>
                <p class="text-gray-600">
                  Nous croyons au pouvoir de la communauté pour se soutenir, s'inspirer et s'élever mutuellement. Nos événements et programmes sont conçus pour favoriser des connexions et des collaborations significatives.
                </p>
              </div>
            </div>
            
            <div class="value-card bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg animate-on-scroll animation-delay-300">
              <div class="h-3 bg-green-400"></div>
              <div class="p-6">
                <div class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <h3 class="text-xl font-bold mb-2">Excellence</h3>
                <p class="text-gray-600">
                  Nous visons l'excellence dans tout ce que nous faisons, de l'organisation d'événements à la création de contenu éducatif. Nous nous engageons à fournir des ressources et des expériences de haute qualité.
                </p>
              </div>
            </div>
            
            <div class="value-card bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg animate-on-scroll animation-delay-600">
              <div class="h-3 bg-blue-500"></div>
              <div class="p-6">
                <div class="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold mb-2">Inclusivité</h3>
                <p class="text-gray-600">
                  Nous accueillons tout le monde, indépendamment de son origine, de son niveau d'expérience ou de son identité. Nous croyons que des perspectives diverses mènent à de meilleures solutions et à une communauté technologique plus forte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <!-- Our Team -->
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
    
      <!-- Become an Ambassador -->
      <section class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-4 md:px-8">
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div class="flex flex-col md:flex-row">
              <div class="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h2 class="text-4xl font-bold mb-4">
                  Devenez <span class="text-green-500">Ambassadrice</span>
                </h2>
                <p class="text-gray-600 text-lg mb-6 leading-relaxed">
                  Dirigez, réseautez, apprenez et brillez en tant qu'ambassadrice Women Techmakers Abomey-Calavi.
                </p>
                <button class="self-start px-8 py-3 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition-colors">
                  En savoir plus
                </button>
              </div>
              <div class="w-full md:w-1/2 relative">
                <div class="absolute top-0 right-0 bottom-0 w-full md:w-1/3 bg-green-400 z-0"></div>
                <img 
                  :src="im7"
                  alt="Ambassadrice Women Techmakers" 
                  class="w-full h-full object-cover relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <!-- FAQ Section -->
      <section class="py-16 md:py-24 bg-gray-50">
        <div class="container mx-auto px-4 md:px-8">
          <h2 class="text-4xl md:text-5xl font-bold mb-10 text-center">
            Questions <span class="text-blue-500">Fréquentes</span>
          </h2>
          
          <div class="max-w-3xl mx-auto">
            <!-- FAQ Item 1 -->
            <div class="mb-6">
              <button @click="toggleFaq(1)" class="w-full flex justify-between items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 class="text-lg font-bold">Qu'est-ce que Women Techmakers?</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="{'transform rotate-180': openFaq === 1}">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div v-if="openFaq === 1" class="bg-white p-4 rounded-b-lg shadow-sm mt-1 animate-slideDown">
                <p class="text-gray-600">
                  Women Techmakers est le programme de Google qui offre visibilité, communauté et ressources aux femmes dans la technologie. Women Techmakers Abomey-Calavi est le chapitre local à Abomey-Calavi, Bénin, axé sur l'autonomisation des femmes dans la communauté technologique locale.
                </p>
              </div>
            </div>
            
            <!-- FAQ Item 2 -->
            <div class="mb-6">
              <button @click="toggleFaq(2)" class="w-full flex justify-between items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 class="text-lg font-bold">Comment puis-je rejoindre Women Techmakers Abomey-Calavi?</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="{'transform rotate-180': openFaq === 2}">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div v-if="openFaq === 2" class="bg-white p-4 rounded-b-lg shadow-sm mt-1 animate-slideDown">
                <p class="text-gray-600">
                  Vous pouvez rejoindre notre communauté en participant à nos événements, en vous inscrivant à notre newsletter ou en nous suivant sur les réseaux sociaux. Nous accueillons toutes les personnes qui soutiennent notre mission d'autonomisation des femmes dans la technologie.
                </p>
              </div>
            </div>
            
            <!-- FAQ Item 3 -->
            <div class="mb-6">
              <button @click="toggleFaq(3)" class="w-full flex justify-between items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 class="text-lg font-bold">Dois-je être une femme pour participer?</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="{'transform rotate-180': openFaq === 3}">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div v-if="openFaq === 3" class="bg-white p-4 rounded-b-lg shadow-sm mt-1 animate-slideDown">
                <p class="text-gray-600">
                  Non, nos événements et programmes sont ouverts à tous ceux qui soutiennent notre mission d'autonomisation des femmes dans la technologie. Nous accueillons les alliés de tous genres qui souhaitent contribuer à une communauté technologique plus inclusive.
                </p>
              </div>
            </div>
            
            <!-- FAQ Item 4 -->
            <div class="mb-6">
              <button @click="toggleFaq(4)" class="w-full flex justify-between items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 class="text-lg font-bold">Comment puis-je devenir bénévole ou ambassadrice?</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="{'transform rotate-180': openFaq === 4}">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div v-if="openFaq === 4" class="bg-white p-4 rounded-b-lg shadow-sm mt-1 animate-slideDown">
                <p class="text-gray-600">
                  Nous recherchons toujours des bénévoles et des ambassadrices passionnés! Vous pouvez postuler via notre site web ou nous contacter directement à contact@wtmabomey-calavi.com. Nous avons différents rôles disponibles selon vos compétences et intérêts.
                </p>
              </div>
            </div>
            
            <!-- FAQ Item 5 -->
            <div class="mb-6">
              <button @click="toggleFaq(5)" class="w-full flex justify-between items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 class="text-lg font-bold">Comment mon entreprise peut-elle s'associer à Women Techmakers Abomey-Calavi?</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="{'transform rotate-180': openFaq === 5}">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div v-if="openFaq === 5" class="bg-white p-4 rounded-b-lg shadow-sm mt-1 animate-slideDown">
                <p class="text-gray-600">
                  Nous offrons diverses opportunités de partenariat pour les entreprises qui partagent nos valeurs et notre mission. Cela inclut le parrainage d'événements, la collaboration pour des ateliers et des programmes de mentorat. Veuillez contacter notre équipe de partenariats à partenariats@wtmabomey-calavi.com pour discuter des collaborations potentielles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <!-- Contact CTA -->
      <section class="py-16 md:py-24 bg-blue-500">
        <div class="container mx-auto px-4 md:px-8 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Contactez-Nous</h2>
          <p class="text-white/90 text-lg max-w-3xl mx-auto mb-10">
            Vous avez des questions sur Women Techmakers Abomey-Calavi? Vous souhaitez en savoir plus sur nos programmes ou comment vous impliquer? Nous serions ravis d'avoir de vos nouvelles!
          </p>
          <router-link to="/contact" class="px-8 py-3 bg-white text-blue-500 rounded-full hover:bg-blue-50 transition-colors">
            Nous Contacter
          </router-link>
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
                  <!-- <path d="M16 11.37A4 4 0 1 1 12.63 8  width="20" height="20" rx="5" ry="5"></rect> -->
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
  
  // FAQ state
  const openFaq = ref(null);
  
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
  
  // Toggle FAQ
  const toggleFaq = (index) => {
    if (openFaq.value === index) {
      openFaq.value = null;
    } else {
      openFaq.value = index;
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
  
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-slideUp {
    animation: slideUp 0.8s ease-out forwards;
  }
  
  .animate-fadeIn {
    animation: fadeIn 1s ease-out forwards;
  }
  
  .animate-slideDown {
    animation: slideDown 0.3s ease-out forwards;
  }
  
  /* Timeline styles */
  .timeline-marker {
    position: relative;
  }
  
  @media (min-width: 768px) {
    .timeline-marker::before {
      content: '';
      position: absolute;
      width: 50px;
      height: 2px;
      background-color: #BFDBFE; /* blue-200 */
      top: 50%;
      left: 50%;
    }
  
    .timeline-item:nth-child(odd) .timeline-marker::before {
      transform: translateY(-50%);
    }
  
    .timeline-item:nth-child(even) .timeline-marker::before {
      transform: translateY(-50%) translateX(-100%);
    }
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