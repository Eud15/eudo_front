<template>
  <div class="min-h-screen  overflow-x-hidden">
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

    <!-- Hero Section -->
    <section class="container mx-auto px-4 md:px-8 pt-8 md:pt-24 pb-20">
      <div class="flex flex-col md:flex-row items-start md:items-center">
        <!-- Left Content -->
        <div class="w-full md:w-1/2 mb-16 md:mb-0 animate-slideUp z-10">
          <h1 class="text-5xl md:text-6xl font-bold text-blue-500 leading-tight">
            Women Techmakers
          </h1>
          <h2 class="text-3xl md:text-4xl text-gray-800 mt-2 mb-6">
           Abomey-Calavi
          </h2>
          <p class="text-gray-600 max-w-lg mb-8 leading-relaxed">
            Women Techmakers Abomey-Calavi a été fondée le 20 octobre 207. L'organisation est passionnée par la construction d'une communauté soutenant les femmes (et tout le monde) à prospérer et à diriger dans le domaine de la technologie.
          </p>
          <button class="px-8 py-3 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors">
            Explorer
          </button>
        </div>
        
        <!-- Right Content - Image Collage -->
        <div class="w-full md:w-1/2 relative h-[400px] md:h-[500px]">
          <!-- Background Blob with Animation -->
          <div 
            class="absolute inset-0 bg-blue-100 rounded-[50%] opacity-70 transform translate-x-[5%] animate-blob"
            style="will-change: transform, opacity;"
          ></div>
          
          <!-- Decorative Circles with Staggered Animations -->
          <div 
            class="absolute top-[15%] right-[25%] h-16 w-16 bg-blue-300 rounded-full opacity-0 animate-circle-1"
            style="will-change: transform, opacity;"
          ></div>
          <div 
            class="absolute top-[10%] right-[5%] h-12 w-12 bg-green-300 rounded-full opacity-0 animate-circle-2"
            style="will-change: transform, opacity;"
          ></div>
          <div 
            class="absolute bottom-[10%] right-[20%] h-14 w-14 bg-green-300 rounded-full opacity-0 animate-circle-3"
            style="will-change: transform, opacity;"
          ></div>
          <div 
            class="absolute bottom-[30%] left-[10%] h-20 w-20 bg-blue-300 rounded-full opacity-0 animate-circle-4"
            style="will-change: transform, opacity;"
          ></div>
          
          <!-- Image Circles with Coordinated Animations -->
          <div class="relative h-full w-full image-gallery">
            <!-- Top Right Image -->
            <div 
              class="image-container absolute top-[5%] right-[5%] w-[250px] h-[250px] rounded-full overflow-hidden border-4 border-white shadow-lg z-20 opacity-0 animate-image-1"
              style="will-change: transform, opacity;"
              @mouseenter="hoverImage = 1" 
              @mouseleave="hoverImage = null"
              :class="{'scale-image': hoverImage === 1}"
            >
              <img :src="im5" alt="Women Techmakers event" class="w-full h-full object-cover transition-transform duration-700" />
            </div>
            
            <!-- Bottom Left Image -->
            <div 
              class="image-container absolute bottom-[5%] left-[5%] w-[220px] h-[220px] rounded-full overflow-hidden border-4 border-white shadow-lg z-10 opacity-0 animate-image-2"
              style="will-change: transform, opacity;"
              @mouseenter="hoverImage = 2" 
              @mouseleave="hoverImage = null"
              :class="{'scale-image': hoverImage === 2}"
            >
              <img :src="im4"  alt="Women Techmakers event" class="w-full h-full object-cover transition-transform duration-700" />
            </div>
            
            <!-- Bottom Right Image -->
            <div 
              class="image-container absolute bottom-[15%] right-[15%] w-[180px] h-[180px] rounded-full overflow-hidden border-4 border-white shadow-lg z-30 opacity-0 animate-image-3"
              style="will-change: transform, opacity;"
              @mouseenter="hoverImage = 3" 
              @mouseleave="hoverImage = null"
              :class="{'scale-image': hoverImage === 3}"
            >
              <img :src="im6" alt="Women Techmakers event" class="w-full h-full object-cover transition-transform duration-700" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section id="stats" class="py-16 md:py-20">
      <!-- Statistics Header -->
      <div class="container mx-auto px-4 md:px-8 text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">Que disent les chiffres ?</h2>
        <p class="text-gray-600 text-lg max-w-3xl mx-auto">
            Depuis 2017, Women Techmakers Abomey-Calavi a organisé de nombreux événements technologiques, inspirant 
            et connectant les femmes dans le domaine de la technologie.
        </p>
      </div>
      
      <!-- Statistics Counters -->
      <div class="bg-gradient-to-r from-blue-400 to-blue-500 py-16 md:py-20">
        <div class="container mx-auto px-4 md:px-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            <!-- Events Counter -->
            <div class="stat-item">
              <div class="text-4xl md:text-6xl font-bold mb-2">
                <span class="counter">+</span><span>{{ displayedStats.events }}</span>
              </div>
              <div class="text-lg md:text-xl">Evènements</div>
            </div>
            
            <!-- Participants Counter -->
            <div class="stat-item">
              <div class="text-4xl md:text-6xl font-bold mb-2">
                <span class="counter">+</span><span>{{ displayedStats.participants }}</span>
              </div>
              <div class="text-lg md:text-xl">Participants</div>
            </div>
            
            <!-- Partners Counter -->
            <div class="stat-item">
              <div class="text-4xl md:text-6xl font-bold mb-2">
                <span class="counter">+</span><span>{{ displayedStats.partners }}</span>
              </div>
              <div class="text-lg md:text-xl">Partenaires</div>
            </div>
            
            <!-- Female Approaches Counter -->
            <div class="stat-item">
              <div class="text-4xl md:text-6xl font-bold mb-2">
                <span class="counter">+</span><span>{{ displayedStats.approaches }}</span>
              </div>
              <div class="text-lg md:text-xl">Approches féminines</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4 md:px-8">
        <!-- Testimonials Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">Les voix de notre communauté</h2>
          <p class="text-gray-600 text-lg max-w-3xl mx-auto">
            Écoutez les femmes qui ont participé à notre aventure et découvrez comment Women Techmakers a influencé leur carrière et leur vie.
          </p>
        </div>
        
        <!-- Testimonial Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <!-- Testimonial 1 -->
          <div class="testimonial-card bg-gray-50 rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2 animate-on-scroll">
            <div class="relative h-48 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
              <img 
              :src="im4" 
                alt="Linh Nguyen" 
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4">
                <div class="text-yellow-400 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
              </div>
              <div class="mb-6">
                <p class="text-gray-600 italic">
                  "Women Techmakers Abomey-Calavi a joué un rôle déterminant dans ma croissance en tant que développeuse. Les ateliers et les opportunités de réseautage m'ont aidée à entrer en contact avec des mentors qui m'ont guidée dans des transitions de carrière difficiles."
                </p>
              </div>
              <div class="flex items-center">
                <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    :src="im4"
                    alt="Eudoxie ABOUTA" 
                    class="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 class="font-bold text-gray-900">Eudoxie ABOUTA</h4>
                  <p class="text-sm text-gray-500">Senior Frontend Developer, TechViet</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Testimonial 2 -->
          <div class="testimonial-card bg-gray-50 rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2 animate-on-scroll animation-delay-300">
            <div class="relative h-48 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
              <img 
              :src="im6" 
                alt="Trang Pham" 
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4">
                <div class="text-yellow-400 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
              </div>
              <div class="mb-6">
                <p class="text-gray-600 italic">
                    "En tant que fondatrice d'une startup, j'ai trouvé que la communauté Women Techmakers était une ressource inestimable. Le soutien et le partage des connaissances m'ont aidée à relever les défis liés à la création d'une entreprise technologique au Viêt Nam."
                </p>
              </div>
              <div class="flex items-center">
                <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    :src="im4"
                    alt="Trang Pham" 
                    class="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 class="font-bold text-gray-900">Eudoxie ABOUTA</h4>
                  <p class="text-sm text-gray-500">CEO & Founder, EduTech Solutions</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Testimonial 3 -->
          <div class="testimonial-card bg-gray-50 rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2 animate-on-scroll animation-delay-600">
            <div class="relative h-48 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
              <img 
              :src="im5" 
                alt="Mai Tran" 
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4">
                <div class="text-yellow-400 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-gray-300">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
              </div>
              <div class="mb-6">
                <p class="text-gray-600 italic">
                  "Le programme de mentorat de Women Techmakers a changé la trajectoire de ma carrière. Je suis passée d'une situation où je n'étais pas sûre de ma voie dans la technologie à celle d'une scientifique de données sûre d'elle. Le soutien de la communauté a été crucial pour ma réussite."
                </p>
              </div>
              <div class="flex items-center">
                <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                     :src="im4"
                    alt="Mai Tran" 
                    class="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 class="font-bold text-gray-900">Eudoxie ABOUTA</h4>
                  <p class="text-sm text-gray-500">Data Scientist, Global Tech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Featured Video Testimonial -->
        <div class="bg-gray-50 rounded-xl overflow-hidden shadow-lg mb-16">
          <div class="flex flex-col lg:flex-row">
            <div class="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <div class="mb-4">
               
                <h3 class="text-2xl font-bold mb-4">D'étudiante à leader technologique</h3>
              </div>
              <div class="mb-6">
                <p class="text-gray-600 text-lg leading-relaxed">
                  "Lorsque j'ai rejoint Women Techmakers Abomey-Calavi en tant qu'étudiante en informatique, je n'aurais jamais imaginé à quel point cela allait transformer ma carrière. Les ateliers, le mentorat et le soutien de la communauté m'ont donné la confiance nécessaire pour occuper des postes de direction dans la technologie. Aujourd'hui, je dirige une équipe de développeurs dans l'une des startups Béninoises à la croissance la plus rapide."
                </p>
              </div>
              <div class="flex items-center">
                <div class="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-blue-500">
                  <img 
                    :src="im4" 
                    alt="Huong Le" 
                    class="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 text-lg">Eudoxie ABOUTA</h4>
                  <p class="text-gray-500">Tech Lead, InnoViet Solutions</p>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-0">
              <div class="absolute inset-0 bg-blue-500 flex items-center justify-center">
                <div class="text-white text-center p-8">
                  <div class="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-white/30 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                  <p class="text-lg font-medium">Regardez son histoire</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Testimonial Carousel Controls -->
        <div class="flex justify-center items-center space-x-2">
          <button class="w-3 h-3 rounded-full bg-blue-500"></button>
          <button class="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-300 transition-colors"></button>
          <button class="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-300 transition-colors"></button>
        </div>
      </div>
    </section>

    <!-- Events Section -->
    <section id="events" class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4 md:px-8">
        <!-- Events Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">Jetez un coup d'œil à nos points forts</h2>
          <p class="text-gray-600 text-lg max-w-3xl mx-auto">
            
            Visionnez les enregistrements des événements passés, parcourez les archives de la lettre d'information et découvrez les ressources mises à votre disposition en tant que membre du WTM Abomey-Calavi.
          </p>
        </div>

        <!-- Events Carousel -->
        <div class="relative">
          <!-- Navigation Arrows -->
          <button class="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-3 -ml-4 md:-ml-6 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-gray-700">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            <span class="sr-only">Previous</span>
          </button>
          
          <button class="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-3 -mr-4 md:-mr-6 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-gray-700">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
            <span class="sr-only">Next</span>
          </button>
          
          <!-- Events Cards -->
          <div class="flex overflow-x-auto pb-8 hide-scrollbar gap-6 px-2">
            <!-- Upcoming Event Card -->
            <div class="event-card flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2 animate-on-scroll">
              <div class="relative h-64 overflow-hidden">
                <div class="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium z-20">
                  Upcoming
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img 
                  :src="im8"
                  alt="Women in AI Workshop" 
                  class="w-full h-full object-cover"
                />
                <div class="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                  <h3 class="text-2xl font-bold mb-2">Women in AI Workshop</h3>
                  <p class="text-white/90">Exploring the future of AI with industry leaders</p>
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
                    <p class="text-gray-700 font-medium">April 15, 2024</p>
                    <p class="text-gray-500 text-sm">9:00 AM - 5:00 PM</p>
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
                    <p class="text-gray-700 font-medium">Tech Hub Saigon</p>
                    <p class="text-gray-500 text-sm">District 1, Ho Chi Minh City</p>
                  </div>
                </div>
                <p class="text-gray-600 mb-6">
                  Join us for a full-day workshop exploring artificial intelligence applications and career opportunities for women in the AI field. Network with industry experts and gain hands-on experience.
                </p>
                <button class="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Register Now
                </button>
              </div>
            </div>
            
            <!-- Past Event Card 1 -->
            <div class="event-card flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2 animate-on-scroll animation-delay-300">
              <div class="relative h-64 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img 
                    :src="im7"
                  alt="Dariu Foundation" 
                  class="w-full h-full object-cover"
                />
                <div class="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                  <h3 class="text-2xl font-bold mb-2">Dariu Foundation</h3>
                  <p class="text-white/90">Dariu Foundation: I'mpossible</p>
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
                    <p class="text-gray-700 font-medium">May 2023</p>
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
                    <p class="text-gray-700 font-medium">Dariu Foundation Campus</p>
                    <p class="text-gray-500 text-sm">Ho Chi Minh City</p>
                  </div>
                </div>
                <p class="text-gray-600 mb-6">
                  A collaborative event with the Dariu Foundation focused on empowering women through technology education and entrepreneurship opportunities in Vietnam.
                </p>
                <button class="w-full py-3 border border-blue-500 text-blue-500 hover:bg-blue-50 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  View Event Details
                </button>
              </div>
            </div>
            
            <!-- Past Event Card 2 -->
            <div class="event-card flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2 animate-on-scroll animation-delay-600">
              <div class="relative h-64 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img 
                 :src="im6"
                  alt="Google I/O Extended" 
                  class="w-full h-full object-cover"
                />
                <div class="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                  <h3 class="text-2xl font-bold mb-2">Google I/O 2023</h3>
                  <p class="text-white/90">Google I/O Extended HCMC 2023</p>
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
                    <p class="text-gray-700 font-medium">July 2023</p>
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
                    <p class="text-gray-700 font-medium">Google Developer Space</p>
                    <p class="text-gray-500 text-sm">District 4, Ho Chi Minh City</p>
                  </div>
                </div>
                <p class="text-gray-600 mb-6">
                  Women Techmakers HCMC hosted the Google I/O Extended event, bringing the latest Google technologies and announcements to the local tech community.
                </p>
                <button class="w-full py-3 border border-blue-500 text-blue-500 hover:bg-blue-50 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  View Event Details
                </button>
              </div>
            </div>
            
            <!-- Past Event Card 3 -->
            <div class="event-card flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2 animate-on-scroll animation-delay-900">
              <div class="relative h-64 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img 
                  :src="im6" 
                  alt="Tech Station" 
                  class="w-full h-full object-cover"
                />
                <div class="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                  <h3 class="text-2xl font-bold mb-2">Tech Station</h3>
                  <p class="text-white/90">Tech Station: Lunch with girls in tech</p>
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
                    <p class="text-gray-700 font-medium">August 2023</p>
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
                    <p class="text-gray-700 font-medium">Tech Station Café</p>
                    <p class="text-gray-500 text-sm">District 2, Ho Chi Minh City</p>
                  </div>
                </div>
                <p class="text-gray-600 mb-6">
                  An intimate networking lunch bringing together women in technology to share experiences, challenges, and opportunities in a supportive environment.
                </p>
                <button class="w-full py-3 border border-blue-500 text-blue-500 hover:bg-blue-50 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  View Event Details
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- View All Events Button -->
        <div class="text-center mt-12">
          <button class="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 inline-flex items-center">
            View All Events
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Global Impact Section -->
    <section id="impact" class="py-2 md:py-2 bg-white">
      <div class="container mx-auto px-4 md:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          <!-- Ambassador Stats -->
          <div class="text-center">
            <div class="mb-6 mx-auto w-24 h-24">
                <img src="../../../assets/images/2024homeimpact1.svg" alt="" />
            </div>
            <h3 class="text-5xl font-bold text-emerald-500 mb-2">2 674</h3>
            <p class="text-xl text-gray-800">Ambassadeurs</p>
          </div>
          
          <!-- Events Stats -->
          <div class="text-center">
            <div class="mb-6 mx-auto w-24 h-24">
                <img src="../../../assets/images/2024homeimpact2.svg" alt="" />
            </div>
            <h3 class="text-5xl font-bold text-emerald-500 mb-2">1 264</h3>
            <p class="text-xl text-gray-800">Événements</p>
          </div>
          
          <!-- Conferences Stats -->
          <div class="text-center">
            <div class="mb-6 mx-auto w-24 h-24">
                <img src="../../../assets/images/2024homeimpact3.svg" alt="" />
            </div>
            <h3 class="text-5xl font-bold text-emerald-500 mb-2">1 353</h3>
            <p class="text-xl text-gray-800">Conférences</p>
          </div>
          
          <!-- Members Stats -->
          <div class="text-center">
            <div class="mb-6 mx-auto w-24 h-24">
                <img src="../../../assets/images/2024homeimpact4.svg" alt="" />
            </div>
            <h3 class="text-5xl font-bold text-emerald-500 mb-2">82 500</h3>
            <p class="text-xl text-gray-800">membres</p>
          </div>
        </div>
        
        <div class="text-center max-w-4xl mx-auto">
          <p class="text-lg text-gray-700 leading-relaxed">
            Depuis 2013, des ambassadrices du programme Women Techmakers ont organisé des milliers d'événements technologiques mondiaux, inspirants et mettant en relation les femmes travaillant dans ce secteur.
          </p>
        </div>
      </div>
    </section>

    <!-- Section Divider -->
    <div class="w-full overflow-hidden">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" class="w-full h-auto">
        <path fill="#f9fafb" fill-opacity="1" d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
      </svg>
    </div>

    <!-- About Section -->
    <section id="about" class="bg-gray-50 py-16 md:py-24">
      <div class="container mx-auto px-4 md:px-8">
        <!-- Mission Statement -->
        <div class="flex flex-col md:flex-row items-center mb-20">
          <div class="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-12">
            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              Notre <span class="text-blue-500">Mission</span>
            </h2>
            <p class="text-gray-600 text-lg mb-6 leading-relaxed">
                Women Techmakers Abomey-Calavi se consacre à la construction d'une communauté prospère qui renforce les femmes dans le domaine de la technologie par le biais de la visibilité, de la communauté et des ressources.
            </p>
            <p class="text-gray-600 text-lg mb-8 leading-relaxed">
                Nous croyons en la création d'un environnement inclusif où chacun peut développer ses compétences, partager ses connaissances et faire évoluer sa carrière dans l'industrie technologique.
           
            </p>
            <div class="flex flex-wrap gap-4">
              <div class="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                <div class="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span class="text-gray-700">Empowerment</span>
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
                :src="im5" 
                alt="Women Techmakers event" 
                class="w-full h-full object-cover"
              />
            </div>
            <div class="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100 rounded-full z-0"></div>
            <div class="absolute -top-6 -right-6 w-32 h-32 bg-green-100 rounded-full z-0"></div>
          </div>
        </div>
        
        <!-- Our Story -->
        <div class="mb-20">
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
                  <p class="text-gray-600 mb-2">20 Octobre 2017</p>
                  <p class="text-gray-600 leading-relaxed">
                    Women Techmakers Abomey-Calavi a été fondée dans le but de créer une communauté de soutien pour les femmes dans le domaine de la technologie. À partir d'un petit groupe de passionnées de technologie, nous avons entrepris de faire la différence dans l'écosystème technologique local.
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
                    :src="im8" 
                      alt="Women Techmakers founding event" 
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
                      alt="Women Techmakers first workshop" 
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
                  <h3 class="text-2xl font-bold mb-3">Premier Workshop</h3>
                  <p class="text-gray-600 mb-2">15 Decembre 2017</p>
                  <p class="text-gray-600 leading-relaxed">
                    Nous avons organisé notre premier atelier technique axé sur le développement web, qui a attiré plus de 50 participants. Cela a marqué le début de nos initiatives éducatives visant à aider les femmes à développer des compétences pratiques dans le domaine de la technologie.
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
                    

Aujourd'hui, notre communauté compte plus de 500 membres et organise régulièrement des événements, des ateliers et des programmes de mentorat. Nous avons établi des partenariats avec des entreprises technologiques de premier plan afin d'offrir aux femmes la possibilité de s'épanouir dans le secteur technologique.
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
                      :src="im6" 
                      alt="Women Techmakers community event" 
                      class="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Our Values -->
        <div class="mb-20">
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
                    Nous croyons au pouvoir de la communauté pour se soutenir, s'inspirer et s'élever les uns les autres. Nos événements et nos programmes sont conçus pour favoriser des connexions et des collaborations significatives.
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
                    Nous visons l'excellence dans tout ce que nous faisons, de l'organisation d'événements à la création de contenus éducatifs. Nous nous engageons à fournir des ressources et des expériences de haute qualité.
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
                    Nous accueillons tout le monde, quels que soient les antécédents, le niveau d'expérience ou l'identité. Nous pensons que la diversité des points de vue permet de trouver de meilleures solutions et de renforcer la communauté technologique.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Become an Ambassador -->
        <div class="bg-white rounded-2xl overflow-hidden shadow-lg">
          <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h2 class="text-4xl font-bold mb-4">
                Devenez <span class="text-green-500">ambassadeur</span>
              </h2>
              <p class="text-gray-600 text-lg mb-6 leading-relaxed">
                Diriger, réseauter, apprendre et briller en tant qu'ambassadrice Women Techmakers.
              </p>
              <button class="self-start px-8 py-3 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition-colors">
               <a href="https://kloo.me/join-wtm-ac">En savoir Plus</a>
              </button>
            </div>
            <div class="w-full md:w-1/2 relative">
              <div class="absolute top-0 right-0 bottom-0 w-full md:w-1/3 bg-green-400 z-0"></div>
              <img 
                :src="im4" 
                alt="Women Techmakers Ambassador" 
                class="w-full h-full object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stay in Touch Section -->
    <section class="relative py-16 md:py-24 bg-blue-100">
      <!-- Left Bracket Image -->
      <div class="absolute left-0 ml-4 top-0 h-full w-1/6 md:w-1/4 flex items-center">
        <img 
          :src="im3" 
          alt="Decorative left bracket" 
          class="w-full h-auto object-contain reverse"
          style="height: 370px;"
        />
      </div>
      
      <div class="absolute right-0 top-0 h-full w-1/6 md:w-1/4 flex items-center">
  <img 
    :src="im3" 
    alt="Decorative right bracket" 
    class="w-full h-auto object-contain transform rotate-180"
    style="height: 370px;"
  />
</div>
      
      <div class="container mx-auto px-4 md:px-8 relative z-10">
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Gardez le contact</h2>
          <p class="text-gray-700 text-lg mb-10">
            Suivez Women Techmakers pour connaître les dernières actualités et informations.
          </p>
          
          <!-- Social Media Icons -->
          <div class="flex justify-center items-center space-x-8">
            <!-- YouTube -->
            <a href="#" class="transform transition-transform hover:scale-110">
              <div class="w-12 h-12 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" class="text-gray-800">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </div>
            </a>
            
            <!-- Twitter/X -->
            <a href="#" class="transform transition-transform hover:scale-110">
              <div class="w-12 h-12 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" class="text-gray-800">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </div>
            </a>
            
            <!-- LinkedIn -->
            <a href="#" class="transform transition-transform hover:scale-110">
              <div class="w-12 h-12 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" class="text-gray-800">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </div>
            </a>
            
            <!-- Instagram -->
            <a href="#" class="transform transition-transform hover:scale-110">
              <div class="w-12 h-12 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" class="text-gray-800">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Become the Igniter Section -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4 md:px-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-12">
          <!-- Left Column - Become the Igniter -->
          <div class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Devenez les pionnières</h2>
            <p class="text-gray-600 text-lg mb-10 max-w-lg">
                Donnez du pouvoir à d'autres femmes dans leur carrière en organisant des événements et en leur donnant accès à des ressources sélectionnées.
            </p>
            <div class="mb-10 w-64">
              <img 
                :src="im1" 
                alt="Igniter badge illustration" 
                class="w-full h-auto"
              />
            </div>
            <button class="px-8 py-3 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors">
              Become the Igniter
            </button>
          </div>
          
          <!-- Right Column - Newsletter -->
          <div class="w-full md:w-1/2">
            <div class="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <h2 class="text-4xl font-bold mb-4 text-gray-800">S'inscrire à la lettre d'information</h2>
              <p class="text-gray-600 mb-8">
                Suivez les femmes Techmakers pour obtenir les dernières nouvelles et mises à jour.
              </p>
              
              <div class="relative">
                <div class="text-center mb-6">
                  <h3 class="text-2xl font-medium text-blue-500 mb-4">RESTEZ EN CONTACT AVEC NOUS</h3>
                  <div class="w-full h-px bg-gray-200"></div>
                </div>
                
                <form class="relative">
                  <div class="flex flex-col sm:flex-row gap-4">
                    <div class="flex-grow">
                      <input 
                        type="email" 
                        placeholder="contact@wtmabcalavi.com" 
                        class="w-full px-4 py-3 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      />
                      <div class="text-xs text-red-500 mt-1">Entrez votre mail</div>
                    </div>
                    <button class="bg-blue-500 hover:bg-blue-600 text-white px-1 py-1 mb-4 sm:mb-0 rounded-sm transition-colors">
                      Souscrire
                    </button>
                  </div>
                </form>
                
                <div class="absolute top-12 right-0 transform translate-y-1/4 ">
                  <img 
                  :src="im2" 
                    alt="Notepad illustration" 
                    class="w-32 h-auto"
                  />
                </div>
              </div>
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
import { ref, reactive, onMounted, onUnmounted } from 'vue';
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
const hoverImage = ref(null);

// Statistics data
const stats = {
  events: 20,
  participants: 5000,
  partners: 20,
  approaches: 500
};

// Displayed stats for animation
const displayedStats = reactive({
  events: 30,
  participants: 300,
  partners: 10,
  approaches: 40
});

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

// Animate counter
const animateCounter = (targetValue, displayValue, duration = 2000) => {
  const startTime = Date.now();
  const startValue = 0;
  
  const updateCounter = () => {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    
    if (elapsedTime < duration) {
      const progress = elapsedTime / duration;
      displayValue.value = Math.floor(startValue + progress * (targetValue - startValue));
      requestAnimationFrame(updateCounter);
    } else {
      displayValue.value = targetValue;
    }
  };
  
  updateCounter();
};

// Check for reduced motion preference
const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Animate stats when they come into view
const animateStats = () => {
  const statsSection = document.getElementById('stats');
  if (!statsSection) return;
  
  const position = statsSection.getBoundingClientRect();
  
  if (position.top < window.innerHeight * 0.75 && position.bottom >= 0) {
    // Only animate once
    if (displayedStats.events === 0) {
      animateCounter(stats.events, reactive(displayedStats).events);
      animateCounter(stats.participants, reactive(displayedStats).participants);
      animateCounter(stats.partners, reactive(displayedStats).partners);
      animateCounter(stats.approaches, reactive(displayedStats).approaches);
      
      // Remove the scroll listener after animation
      window.removeEventListener('scroll', animateStats);
    }
  }
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', checkScroll);
  window.addEventListener('scroll', handleScrollAnimation);
  window.addEventListener('scroll', animateStats);
  window.addEventListener('resize', handleResize);
  
  checkScroll(); // Check initial scroll position
  handleScrollAnimation(); // Check initial positions
  animateStats(); // Check if stats are in view initially
  
  // Disable animations for users who prefer reduced motion
  if (prefersReducedMotion()) {
    document.documentElement.classList.add('reduce-motion');
    // Set stats directly without animation
    displayedStats.events = stats.events;
    displayedStats.participants = stats.participants;
    displayedStats.partners = stats.partners;
    displayedStats.approaches = stats.approaches;
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
  window.removeEventListener('scroll', handleScrollAnimation);
  window.removeEventListener('scroll', animateStats);
  window.removeEventListener('resize', handleResize);
});
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'); */

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

@keyframes blob {
  0% {
    transform: scale(0.8) translate(5%, 0);
    opacity: 0;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    transform: scale(1.25) translate(5%, 0);
    opacity: 0.7;
  }
}

@keyframes circle {
  0% {
    opacity: 0;
    transform: scale(0.5) translateY(20px);
  }
  100% {
    opacity: 0.7;
    transform: scale(1) translateY(0);
  }
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes image-appear {
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(30px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Animation classes */
.animate-slideUp {
  animation: slideUp 0.8s ease-out forwards;
}

.animate-fadeIn {
  animation: fadeIn 1s ease-out forwards;
}

.animate-blob {
  animation: blob 1.5s ease-out forwards;
}

.animate-circle-1 {
  animation: circle 0.6s ease-out 0.3s forwards, float 6s ease-in-out 0.9s infinite;
}

.animate-circle-2 {
  animation: circle 0.6s ease-out 0.6s forwards, float 7s ease-in-out 1.2s infinite;
}

.animate-circle-3 {
  animation: circle 0.6s ease-out 0.9s forwards, float 8s ease-in-out 1.5s infinite;
}

.animate-circle-4 {
  animation: circle 0.6s ease-out 1.2s forwards, float 6s ease-in-out 1.8s infinite;
}

.animate-image-1 {
  animation: image-appear 0.8s cubic-bezier(0.26, 0.53, 0.74, 1.48) 0.5s forwards;
}

.animate-image-2 {
  animation: image-appear 0.8s cubic-bezier(0.26, 0.53, 0.74, 1.48) 0.8s forwards;
}

.animate-image-3 {
  animation: image-appear 0.8s cubic-bezier(0.26, 0.53, 0.74, 1.48) 1.1s forwards;
}

/* Image hover effect */
.scale-image img {
  transform: scale(1.1);
}

/* Base styles */
body {
  font-family: 'Inter', sans-serif;
}

/* Fix for fixed header spacing */
header.fixed + section {
  padding-top: calc(6rem + 56px);
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

.animation-delay-900 {
  transition-delay: 0.9s;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .image-gallery {
    transform: scale(0.8);
  }
}

/* Accessibility - Respect user preference for reduced motion */
.reduce-motion * {
  animation-duration: 0.001ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.001ms !important;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Smooth scrolling disabled for those who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

/* Stats section specific styles */
.stat-item {
  position: relative;
}

.counter {
  display: inline-block;
}

/* Testimonial specific styles */
.testimonial-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.testimonial-card > div:last-child {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.testimonial-card .mb-6 {
  flex-grow: 1;
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
</style>

<style>
/* Add Tailwind directives */
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>