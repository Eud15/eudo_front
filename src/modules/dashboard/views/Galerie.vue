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
              <router-link to="/gallery" class="text-gray-900 border-b-2 border-gray-900 pb-1 text-sm font-medium">Galerie</router-link>
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
          <router-link to="/gallery" class="block text-gray-900 font-medium">Galerie</router-link>
          <button class="w-full mt-4 px-6 py-2 rounded-full border border-gray-300">
            Rejoignez-nous
          </button>
        </div>
      </header>
  
      <!-- Page Header -->
      <section class="bg-blue-500 py-16 md:py-24">
        <div class="container mx-auto px-4 md:px-8 text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 animate-slideUp">Notre Galerie</h1>
          <p class="text-white/90 text-lg max-w-3xl mx-auto">
            Explorez les moments de nos événements, ateliers et activités communautaires qui mettent en valeur la vibrante communauté Women Techmakers d'Abomey-Calavi.
          </p>
        </div>
      </section>
    
      <!-- Gallery Filters -->
      <section class="py-8 bg-white border-b">
        <div class="container mx-auto px-4 md:px-8">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <!-- Category Filters -->
            <div class="flex flex-wrap gap-2">
              <button 
                @click="setActiveFilter('all')" 
                :class="[
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                  activeFilter === 'all' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                ]"
              >
                Toutes les Photos
              </button>
              <button 
                @click="setActiveFilter('events')" 
                :class="[
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                  activeFilter === 'events' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                ]"
              >
                Événements
              </button>
              <button 
                @click="setActiveFilter('workshops')" 
                :class="[
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                  activeFilter === 'workshops' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                ]"
              >
                Ateliers
              </button>
              <button 
                @click="setActiveFilter('community')" 
                :class="[
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                  activeFilter === 'community' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                ]"
              >
                Communauté
              </button>
              <button 
                @click="setActiveFilter('team')" 
                :class="[
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                  activeFilter === 'team' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                ]"
              >
                Équipe
              </button>
            </div>
            
            <!-- View Toggle -->
            <div class="flex items-center gap-2">
              <button 
                @click="viewMode = 'grid'" 
                :class="[
                  'p-2 rounded-md transition-colors',
                  viewMode === 'grid' 
                    ? 'bg-blue-100 text-blue-500' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                ]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </button>
              <button 
                @click="viewMode = 'masonry'" 
                :class="[
                  'p-2 rounded-md transition-colors',
                  viewMode === 'masonry' 
                    ? 'bg-blue-100 text-blue-500' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                ]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    
      <!-- Gallery Content -->
      <section class="py-12 md:py-16 bg-white">
        <div class="container mx-auto px-4 md:px-8">
          <!-- Grid View -->
          <div v-if="viewMode === 'grid'" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div 
              v-for="(image, index) in filteredImages" 
              :key="index" 
              class="gallery-item overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              @click="openLightbox(index)"
            >
              <div class="relative aspect-square">
                <img 
                  :src="image.src" 
                  :alt="image.alt" 
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <h3 class="text-white font-bold">{{ image.title }}</h3>
                  <p class="text-white/90 text-sm">{{ image.date }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Masonry View -->
          <div v-else class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            <div 
              v-for="(image, index) in filteredImages" 
              :key="index" 
              class="gallery-item break-inside-avoid overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              @click="openLightbox(index)"
            >
              <div class="relative">
                <img 
                  :src="image.src" 
                  :alt="image.alt" 
                  class="w-full h-auto"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <h3 class="text-white font-bold">{{ image.title }}</h3>
                  <p class="text-white/90 text-sm">{{ image.date }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- No Results Message -->
          <div v-if="filteredImages.length === 0" class="text-center py-16">
            <div class="w-20 h-20 mx-auto mb-6 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-700 mb-2">Aucune image trouvée</h3>
            <p class="text-gray-500">Aucune image ne correspond à votre sélection de filtre actuelle.</p>
            <button 
              @click="setActiveFilter('all')" 
              class="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            >
              Voir Toutes les Photos
            </button>
          </div>
        </div>
      </section>
    
      <!-- Featured Albums -->
      <section class="py-16 md:py-24 bg-gray-50">
        <div class="container mx-auto px-4 md:px-8">
          <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center">Albums en Vedette</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Album 1 -->
            <div class="bg-white rounded-xl overflow-hidden shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div class="relative h-48 overflow-hidden">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wta1.PNG-QpTqRi5Q8QighA37a2AsYttbrftQBs.png" 
                  alt="Google I/O Extended 2023" 
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <h3 class="text-white text-xl font-bold">Google I/O Extended 2023</h3>
                  <p class="text-white/90">Juillet 2023 • 45 photos</p>
                </div>
              </div>
              <div class="p-6">
                <p class="text-gray-600 mb-6">
                  Moments forts de notre événement Google I/O Extended, avec des conférences techniques, des sessions de réseautage et des ateliers pratiques.
                </p>
                <button 
                  @click="setActiveFilter('events')" 
                  class="text-blue-500 hover:text-blue-700 inline-flex items-center"
                >
                  Voir l'Album
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
            
            <!-- Album 2 -->
            <div class="bg-white rounded-xl overflow-hidden shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div class="relative h-48 overflow-hidden">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wta1.PNG-QpTqRi5Q8QighA37a2AsYttbrftQBs.png" 
                  alt="Femmes dans l'IA Atelier" 
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <h3 class="text-white text-xl font-bold">Femmes dans l'IA Atelier</h3>
                  <p class="text-white/90">Mars 2023 • 32 photos</p>
                </div>
              </div>
              <div class="p-6">
                <p class="text-gray-600 mb-6">
                  Notre atelier sur l'intelligence artificielle a réuni des femmes intéressées par les technologies d'IA pour l'apprentissage et la collaboration.
                </p>
                <button 
                  @click="setActiveFilter('workshops')" 
                  class="text-blue-500 hover:text-blue-700 inline-flex items-center"
                >
                  Voir l'Album
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
            
            <!-- Album 3 -->
            <div class="bg-white rounded-xl overflow-hidden shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div class="relative h-48 overflow-hidden">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wta1.PNG-QpTqRi5Q8QighA37a2AsYttbrftQBs.png" 
                  alt="Retraite d'Équipe 2023" 
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <h3 class="text-white text-xl font-bold">Retraite d'Équipe 2023</h3>
                  <p class="text-white/90">Septembre 2023 • 28 photos</p>
                </div>
              </div>
              <div class="p-6">
                <p class="text-gray-600 mb-6">
                  Notre retraite annuelle d'équipe a réuni notre équipe principale et nos bénévoles pour la planification, le renforcement d'équipe et la célébration.
                </p>
                <button 
                  @click="setActiveFilter('team')" 
                  class="text-blue-500 hover:text-blue-700 inline-flex items-center"
                >
                  Voir l'Album
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <!-- Share Your Photos -->
      <section class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-4 md:px-8">
          <div class="bg-blue-50 rounded-xl p-8 md:p-12">
            <div class="flex flex-col md:flex-row items-center gap-8">
              <div class="w-full md:w-1/2">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">Partagez Vos Photos</h2>
                <p class="text-gray-600 text-lg mb-8 leading-relaxed">
                  Étiez-vous présent à l'un de nos événements ? Nous aimerions voir et partager vos photos ! Soumettez vos images pour être présentées dans notre galerie communautaire.
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                  <a href="#" class="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors text-center">
                    Soumettre des Photos
                  </a>
                  <router-link to="/contact" class="px-8 py-3 border border-blue-500 text-blue-500 hover:bg-blue-50 rounded-full transition-colors text-center">
                    Nous Contacter
                  </router-link>
                </div>
              </div>
              <div class="w-full md:w-1/2 grid grid-cols-2 gap-4">
                <div class="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png" 
                    alt="Photo communautaire 1" 
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png" 
                    alt="Photo communautaire 2" 
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png" 
                    alt="Photo communautaire 3" 
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png" 
                    alt="Photo communautaire 4" 
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <!-- Lightbox -->
      <div 
        v-if="lightboxOpen" 
        class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
        @click="closeLightbox"
      >
        <div class="relative w-full max-w-5xl p-4">
          <!-- Close Button -->
          <button 
            class="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            @click.stop="closeLightbox"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <!-- Navigation Buttons -->
          <button 
            class="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            @click.stop="prevImage"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <button 
            class="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            @click.stop="nextImage"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
          
          <!-- Image -->
          <div class="flex items-center justify-center h-[80vh]">
            <img 
              :src="currentLightboxImage.src" 
              :alt="currentLightboxImage.alt" 
              class="max-h-full max-w-full object-contain"
            />
          </div>
          
          <!-- Caption -->
          <div class="text-white text-center mt-4">
            <h3 class="text-xl font-bold">{{ currentLightboxImage.title }}</h3>
            <p class="text-white/80">{{ currentLightboxImage.date }}</p>
            <p v-if="currentLightboxImage.description" class="mt-2 text-white/80">{{ currentLightboxImage.description }}</p>
          </div>
        </div>
      </div>
  
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
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
  
  // Scroll state
  const isScrolled = ref(false);
  const mobileMenuOpen = ref(false);
  const theme = ref('light');
  
  // View mode (grid or masonry)
  const viewMode = ref('grid');
  
  // Filter state
  const activeFilter = ref('all');
  
  // Lightbox state
  const lightboxOpen = ref(false);
  const currentLightboxIndex = ref(0);
  
  // Gallery images data
  const galleryImages = ref([
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wta1.PNG-QpTqRi5Q8QighA37a2AsYttbrftQBs.png',
      alt: 'Google I/O Extended 2023',
      title: 'Google I/O Extended 2023',
      date: '15 Juillet 2023',
      category: 'events',
      description: 'Notre événement annuel Google I/O Extended a réuni des développeurs de tout Abomey-Calavi.'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png',
      alt: 'Atelier Femmes dans l\'IA',
      title: 'Atelier Femmes dans l\'IA',
      date: '8 Mars 2023',
      category: 'workshops',
      description: 'Les participantes ont appris les derniers développements en intelligence artificielle et apprentissage automatique.'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ggol.PNG-tPaF1gNRQlMoNVSK7mU3YvAwfeseue.png',
      alt: 'Rencontre Communautaire',
      title: 'Rencontre Communautaire',
      date: '22 Avril 2023',
      category: 'community',
      description: 'Notre rencontre communautaire mensuelle offre un espace de réseautage et de partage de connaissances.'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wta1.PNG-QpTqRi5Q8QighA37a2AsYttbrftQBs.png',
      alt: 'Session de Planification d\'Équipe',
      title: 'Session de Planification d\'Équipe',
      date: '5 Février 2023',
      category: 'team',
      description: 'Notre équipe principale se réunit régulièrement pour planifier des événements et des initiatives pour la communauté.'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png',
      alt: 'Atelier de Développement Web',
      title: 'Atelier de Développement Web',
      date: '12 Mai 2023',
      category: 'workshops',
      description: 'Les participantes ont appris les techniques et frameworks modernes de développement web.'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ggol.PNG-tPaF1gNRQlMoNVSK7mU3YvAwfeseue.png',
      alt: 'Série de Conférences Tech',
      title: 'Série de Conférences Tech',
      date: '18 Juin 2023',
      category: 'events',
      description: 'Des experts de l\'industrie ont partagé leurs connaissances sur les technologies émergentes et le développement de carrière.'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wta1.PNG-QpTqRi5Q8QighA37a2AsYttbrftQBs.png',
      alt: 'Journée d\'Appréciation des Bénévoles',
      title: 'Journée d\'Appréciation des Bénévoles',
      date: '30 Août 2023',
      category: 'team',
      description: 'Nous avons célébré le dévouement et le travail acharné de nos incroyables bénévoles.'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png',
      alt: 'Déjeuner de Réseautage',
      title: 'Déjeuner de Réseautage',
      date: '10 Septembre 2023',
      category: 'community',
      description: 'Les membres de la communauté se sont connectés autour d\'un déjeuner pour partager des expériences et construire des relations.'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ggol.PNG-tPaF1gNRQlMoNVSK7mU3YvAwfeseue.png',
      alt: 'Atelier de Développement d\'Applications Mobiles',
      title: 'Atelier de Développement d\'Applications Mobiles',
      date: '5 Octobre 2023',
      category: 'workshops',
      description: 'Les participantes ont appris à créer des applications mobiles pour Android et iOS.'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wta1.PNG-QpTqRi5Q8QighA37a2AsYttbrftQBs.png',
      alt: 'Conférence Annuelle',
      title: 'Conférence Annuelle',
      date: '18 Novembre 2023',
      category: 'events',
      description: 'Notre conférence annuelle a présenté des conférenciers, des discussions de panel et des opportunités de réseautage.'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ere.PNG-Ad3yBVMP4r48ivpGjm9g1WZUrfueID.png',
      alt: 'Retraite de Leadership',
      title: 'Retraite de Leadership',
      date: '2 Décembre 2023',
      category: 'team',
      description: 'Notre équipe de leadership s\'est réunie pour la planification stratégique et le renforcement d\'équipe.'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ggol.PNG-tPaF1gNRQlMoNVSK7mU3YvAwfeseue.png',
      alt: 'Célébration des Fêtes',
      title: 'Célébration des Fêtes',
      date: '20 Décembre 2023',
      category: 'community',
      description: 'Nous avons célébré la fin d\'une année réussie avec les membres de notre communauté.'
    }
  ]);
  
  // Check scroll position
  const checkScroll = () => {
    isScrolled.value = window.scrollY > 10;
  };
  
  // Toggle theme
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  };
  
  // Filtered images based on active filter
  const filteredImages = computed(() => {
    if (activeFilter.value === 'all') {
      return galleryImages.value;
    }
    return galleryImages.value.filter(image => image.category === activeFilter.value);
  });
  
  // Current lightbox image
  const currentLightboxImage = computed(() => {
    return filteredImages.value[currentLightboxIndex.value] || {};
  });
  
  // Set active filter
  const setActiveFilter = (filter) => {
    activeFilter.value = filter;
  };
  
  // Lightbox functions
  const openLightbox = (index) => {
    currentLightboxIndex.value = index;
    lightboxOpen.value = true;
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };
  
  const closeLightbox = () => {
    lightboxOpen.value = false;
    document.body.style.overflow = ''; // Restore scrolling
  };
  
  const nextImage = (e) => {
    e.stopPropagation();
    if (currentLightboxIndex.value < filteredImages.value.length - 1) {
      currentLightboxIndex.value++;
    } else {
      currentLightboxIndex.value = 0; // Loop back to the first image
    }
  };
  
  const prevImage = (e) => {
    e.stopPropagation();
    if (currentLightboxIndex.value > 0) {
      currentLightboxIndex.value--;
    } else {
      currentLightboxIndex.value = filteredImages.value.length - 1; // Loop to the last image
    }
  };
  
  // Handle keyboard navigation for lightbox
  const handleKeyDown = (e) => {
    if (!lightboxOpen.value) return;
    
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      nextImage(e);
    } else if (e.key === 'ArrowLeft') {
      prevImage(e);
    }
  };
  
  // Lifecycle hooks
  onMounted(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', checkScroll);
    
    checkScroll(); // Check initial scroll position
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('scroll', checkScroll);
    
    // Make sure to restore scrolling if component is unmounted while lightbox is open
    if (lightboxOpen.value) {
      document.body.style.overflow = '';
    }
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
  
  /* Masonry layout styles */
  .break-inside-avoid {
    break-inside: avoid;
  }
  
  /* Lightbox animation */
  .lightbox-enter-active,
  .lightbox-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .lightbox-enter-from,
  .lightbox-leave-to {
    opacity: 0;
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