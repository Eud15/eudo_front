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
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 animate-slideUp">Contactez-nous</h1>
          <p class="text-white/90 text-lg max-w-3xl mx-auto">
            Vous avez des questions ou vous souhaitez vous impliquer ? Nous serions ravis de vous entendre !
          </p>
        </div>
      </section>
    
      <!-- Contact Information -->
      <section class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-4 md:px-8">
          <div class="flex flex-col md:flex-row gap-12">
            <!-- Contact Form -->
            <div class="w-full md:w-2/3">
              <h2 class="text-3xl font-bold mb-8">Entrer en contact</h2>
              
              <form class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="firstName" class="block text-gray-700 font-medium mb-2">Prénom</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Entrez votre prénom"
                    />
                  </div>
                  <div>
                    <label for="lastName" class="block text-gray-700 font-medium mb-2">Nom</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Entrez votre nom"
                    />
                  </div>
                </div>
                
                <div>
                  <label for="email" class="block text-gray-700 font-medium mb-2">Adresse e-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Entrez votre adresse e-mail"
                  />
                </div>
                
                <div>
                  <label for="subject" class="block text-gray-700 font-medium mb-2">Sujet</label>
                  <select 
                    id="subject" 
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="" disabled selected>Sélectionnez un sujet</option>
                    <option value="general">Demande générale</option>
                    <option value="partnership">Opportunités de partenariat</option>
                    <option value="volunteer">Information sur le bénévolat</option>
                    <option value="event">Information sur les événements</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                
                <div>
                  <label for="message" class="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Entrez votre message"
                  ></textarea>
                </div>
                
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input 
                      id="newsletter" 
                      type="checkbox" 
                      class="w-4 h-4 border border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                  </div>
                  <label for="newsletter" class="ml-2 text-gray-600">
                    Abonnez-vous à notre newsletter pour recevoir des mises à jour sur les événements et opportunités
                  </label>
                </div>
                
                <button type="submit" class="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
                  Envoyer le message
                </button>
              </form>
            </div>
            
            <!-- Contact Information -->
            <div class="w-full md:w-1/3">
              <h2 class="text-3xl font-bold mb-8">Informations de contact</h2>
              
              <div class="bg-gray-50 rounded-xl p-6 shadow-sm mb-8">
                <div class="space-y-6">
                  <!-- Email -->
                  <div class="flex items-start">
                    <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-bold text-gray-900 mb-1">Email</h3>
                      <p class="text-gray-600">contact@wtmabomey-calavi.com</p>
                    </div>
                  </div>
                  
                  <!-- Phone -->
                  <div class="flex items-start">
                    <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-bold text-gray-900 mb-1">Téléphone</h3>
                      <p class="text-gray-600">+229 97 12 34 56</p>
                    </div>
                  </div>
                  
                  <!-- Location -->
                  <div class="flex items-start">
                    <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-500">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-bold text-gray-900 mb-1">Emplacement</h3>
                      <p class="text-gray-600">Abomey-Calavi, Bénin</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Social Media -->
              <div class="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 class="font-bold text-gray-900 mb-4">Suivez-nous</h3>
                <div class="flex space-x-4">
                  <a href="#" class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="text-gray-700">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                  <a href="#" class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="text-gray-700">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                  <a href="#" class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="text-gray-700">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                    </svg>
                  </a>
                  <a href="#" class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="text-gray-700">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <!-- Map Section -->
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4 md:px-8">
          <h2 class="text-3xl font-bold mb-8 text-center">Trouvez-nous</h2>
          
          <div class="bg-white rounded-xl overflow-hidden shadow-md">
            <div class="aspect-[16/9] bg-gray-200 relative">
              <!-- Map Placeholder -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-gray-500">Carte Interactive</div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-bold text-gray-900 mb-2">Women Techmakers Abomey-Calavi</h3>
              <p class="text-gray-600">123 Rue de la Technologie, Abomey-Calavi, Bénin</p>
            </div>
          </div>
        </div>
      </section>
    
      <!-- FAQ Section -->
      <section class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-4 md:px-8">
          <h2 class="text-3xl font-bold mb-12 text-center">Questions Fréquemment Posées</h2>
          
          <div class="max-w-3xl mx-auto">
            <!-- FAQ Item 1 -->
            <div class="mb-6">
              <button @click="toggleFaq(1)" class="w-full flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 class="text-lg font-bold">Comment puis-je rejoindre Women Techmakers Abomey-Calavi ?</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="{'transform rotate-180': openFaq === 1}">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div v-if="openFaq === 1" class="bg-gray-50 p-4 rounded-b-lg shadow-sm mt-1 animate-slideDown">
                <p class="text-gray-600">
                  Vous pouvez rejoindre notre communauté en participant à nos événements, en vous inscrivant à notre newsletter ou en nous suivant sur les réseaux sociaux. Nous accueillons toutes les personnes qui soutiennent notre mission d'autonomisation des femmes dans la technologie.
                </p>
              </div>
            </div>
            
            <!-- FAQ Item 2 -->
            <div class="mb-6">
              <button @click="toggleFaq(2)" class="w-full flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 class="text-lg font-bold">Comment puis-je devenir bénévole ou ambassadrice ?</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="{'transform rotate-180': openFaq === 2}">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div v-if="openFaq === 2" class="bg-gray-50 p-4 rounded-b-lg shadow-sm mt-1 animate-slideDown">
                <p class="text-gray-600">
                  Nous recherchons toujours des bénévoles et ambassadrices passionnées ! Vous pouvez postuler via notre site web ou nous contacter directement à contact@wtmabomey-calavi.com. Nous avons différents rôles disponibles selon vos compétences et intérêts.
                </p>
              </div>
            </div>
            
            <!-- FAQ Item 3 -->
            <div class="mb-6">
              <button @click="toggleFaq(3)" class="w-full flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 class="text-lg font-bold">Comment mon entreprise peut-elle s'associer à Women Techmakers Abomey-Calavi ?</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="{'transform rotate-180': openFaq === 3}">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div v-if="openFaq === 3" class="bg-gray-50 p-4 rounded-b-lg shadow-sm mt-1 animate-slideDown">
                <p class="text-gray-600">
                  Nous offrons diverses opportunités de partenariat pour les entreprises qui partagent nos valeurs et notre mission. Celles-ci comprennent des parrainages d'événements, des collaborations d'ateliers et des programmes de mentorat. Veuillez contacter notre équipe de partenariats à partenariats@wtmabomey-calavi.com pour discuter des collaborations potentielles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <!-- Newsletter Section -->
      <section class="py-16 md:py-24 bg-blue-500">
        <div class="container mx-auto px-4 md:px-8 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Restez Informé</h2>
          <p class="text-white/90 text-lg max-w-3xl mx-auto mb-10">
            Abonnez-vous à notre newsletter pour recevoir des mises à jour sur les événements à venir, les ateliers et les opportunités.
          </p>
          <div class="max-w-md mx-auto">
            <div class="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Entrez votre adresse e-mail" 
                class="flex-grow px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button class="px-6 py-3 bg-white text-blue-500 rounded-full hover:bg-blue-50 transition-colors">
                S'abonner
              </button>
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
  import { ref, onMounted } from 'vue';
  
  // Scroll state
  const isScrolled = ref(false);
  const mobileMenuOpen = ref(false);
  const theme = ref('light');
  
  // FAQ state
  const openFaq = ref(null);
  
  // Toggle theme
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  };
  
  // Check scroll position
  const checkScroll = () => {
    isScrolled.value = window.scrollY > 10;
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
    window.addEventListener('scroll', handleScrollAnimation);
    window.addEventListener('scroll', checkScroll);
    
    handleScrollAnimation(); // Check initial positions
    checkScroll(); // Check initial scroll position
    
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
      window.removeEventListener('scroll', checkScroll);
    };
  });
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  
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
  
  .animate-slideDown {
    animation: slideDown 0.3s ease-out forwards;
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