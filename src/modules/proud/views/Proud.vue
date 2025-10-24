<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-2">
            <img src="../../../assets/images/proud/logo.png" alt="" class="w-16 h-16"/>
            <!-- <span class="text-xl font-bold text-navy-900">Be Proud & Shine</span> -->
          </div>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <a href="#accueil" class="text-gray-700 hover:text-cyan-500 transition-colors">Accueil</a>
            <a href="#apropos" class="text-gray-700 hover:text-cyan-500 transition-colors">À propos</a>
            <a href="#challenge" class="text-gray-700 hover:text-cyan-500 transition-colors">Le Challenge</a>
            <a href="#academie" class="text-gray-700 hover:text-cyan-500 transition-colors">Académie</a>
            <a href="#testimonials" class="text-gray-700 hover:text-cyan-500 transition-colors">Témoignages</a>
            <a href="#contact" class="text-gray-700 hover:text-cyan-500 transition-colors">Contact</a>
          </div>

          <div class="hidden md:flex items-center space-x-4">
            <button class="px-4 py-2 text-cyan-500 hover:text-cyan-600 transition-colors">
              Login
            </button>
            <button class="px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all transform hover:scale-105">
              S'inscrire
            </button>
          </div>

          <!-- Mobile menu button -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t">
        <div class="px-4 py-4 space-y-3">
          <a href="#accueil" class="block text-gray-700 hover:text-cyan-500">Accueil</a>
          <a href="#apropos" class="block text-gray-700 hover:text-cyan-500">À propos</a>
          <a href="#challenge" class="block text-gray-700 hover:text-cyan-500">Le Challenge</a>
          <a href="#academie" class="block text-gray-700 hover:text-cyan-500">Académie</a>
          <a href="#testimonials" class="block text-gray-700 hover:text-cyan-500">Témoignages</a>
          <a href="#contact" class="block text-gray-700 hover:text-cyan-500">Contact</a>
          <button class="w-full px-6 py-2 bg-cyan-500 text-white rounded-lg mt-4">
            S'inscrire
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="accueil" class="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6" :class="{ 'animate-fade-in-up': isVisible.hero }">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight">
              Surmontez le syndrome de l'imposteur et 
              <span class="text-cyan-500">brillez</span>
            </h1>
            <p class="text-lg text-gray-600 leading-relaxed">
              Rejoignez une communauté de femmes inspirantes qui transforment leurs doutes en force. 
              Affirmez vos compétences, renforcez votre présence en ligne et devenez la leader que vous êtes destinée à être.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="px-8 py-4 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                <a href="https://chat.whatsapp.com/FY9pbhQMwbNDRCc7vAJobm?mode=ems_copy_t" target="_blank" rel="noopener noreferrer">
                Rejoindre le challenge

                </a>
              </button>
              <button class="px-8 py-4 border-2 border-navy-900 text-navy-900 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all">
                
                 <a href="#challenge-video">
                En savoir plus
                </a>
              </button>
            </div>
          </div>
          <div class="relative" :class="{ 'animate-fade-in': isVisible.hero }">
            <div class="aspect-square bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl overflow-hidden">
              <img 
                src="../../../assets/images/proud/c4.png" 
                alt="Femme professionnelle confiante"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-coral-500 rounded-full opacity-20 blur-2xl"></div>
            <div class="absolute -top-6 -right-6 w-40 h-40 bg-cyan-500 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="py-16 bg-navy-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center" v-for="(stat, index) in statistics" :key="index" :class="{ 'animate-fade-in-up': isVisible.stats }" :style="{ animationDelay: `${index * 100}ms` }">
            <div class="text-4xl md:text-5xl font-bold text-cyan-500 mb-2">{{ stat.value }}</div>
            <div class="text-sm md:text-base text-gray-300">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="apropos" class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="relative order-2 md:order-1" :class="{ 'animate-fade-in': isVisible.about }">
            <div class="aspect-[4/3] bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl overflow-hidden">
              <img 
                src="../../../assets/images/proud/c2.png" 
                alt="Femmes collaborant"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          <div class="space-y-6 order-1 md:order-2" :class="{ 'animate-fade-in-up': isVisible.about }">
            <h2 class="text-3xl md:text-4xl font-bold text-navy-900">
              Notre Mission
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              Be Proud & Shine est née d'un challenge de 30 jours visant à aider les femmes à surmonter 
              le syndrome de l'imposteur et à affirmer leurs compétences dans le monde de la tech.
            </p>
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p class="text-gray-600">Transformer le mouvement en académie structurée dédiée au leadership féminin</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p class="text-gray-600">Créer un espace d'apprentissage, de partage et de valorisation</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p class="text-gray-600">Renforcer la présence en ligne comme vitrine de votre parcours</p>
              </div>
            </div>
            <button class="px-8 py-3 bg-navy-900 text-white rounded-lg font-semibold hover:bg-navy-800 transition-all transform hover:scale-105">
              Découvrir notre histoire
            </button>
          </div>
        </div>
      </div>
    </section>

    <section id="fondatrice" class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6" :class="{ 'animate-fade-in-up': isVisible.founder }">
            <div class="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-4">
              La Fondatrice
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-navy-900">
              Consolas HODONOU
            </h2>
            <p class="text-xl text-cyan-600 font-semibold">
              Fondatrice du programme Be Proud & Shine
            </p>
            
            <div class="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Consolas HODONOU est Fondatrice du programme Be Proud & Shine, une initiative qui vise à renforcer 
                la confiance, le leadership et l'impact social des femmes et de toute personne désireuse de se révéler 
                à travers le développement personnel et professionnel.
              </p>
              
              <p>
                Titulaire d'une Licence en Agronomie (option Économie et Sociologie Rurales) et d'un Master en 
                Biostatistique au LABEF/UAC, elle associe expertise scientifique et vision stratégique au service 
                de l'innovation inclusive.
              </p>
              
              <p>
                Directrice Technique Genre, Éducation et Entrepreneuriat à l'ONG ICT4U, Coordonnatrice Générale 
                de l'ICPM et Lead du programme Tech'O Féminin avec IKHONO, elle s'engage activement pour 
                l'autonomisation des femmes et la promotion des STIM.
              </p>
              
              <p>
                Reconnue pour son parcours d'excellence (major de promotion et finaliste du Concours International 
                d'Éloquence de l'Université Senghor 2024), son leadership s'exprime à travers des projets qui allient 
                technologie, impact social et transformation humaine.
              </p>
            </div>

            <div class="flex flex-wrap gap-3 pt-4">
              <span class="px-4 py-2 bg-navy-900 text-white rounded-full text-sm font-semibold">
                🎓 Master en Biostatistique
              </span>
              <span class="px-4 py-2 bg-cyan-500 text-white rounded-full text-sm font-semibold">
                🏆 Major de promotion
              </span>
              <span class="px-4 py-2 bg-navy-900 text-white rounded-full text-sm font-semibold">
                🎤 Finaliste Concours Éloquence 2024
              </span>
            </div>

            <div class="flex gap-4 pt-4">
              <a href="#" class="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors">
                <span class="text-white text-xl font-bold">in</span>
              </a>
              <a href="#" class="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center hover:bg-navy-800 transition-colors">
                <span class="text-white text-xl">𝕏</span>
              </a>
            </div>
          </div>

          <div class="relative" :class="{ 'animate-fade-in': isVisible.founder }">
            <div class="aspect-[3/4] bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="../../../assets/images/proud/conso.jpg" 
                alt="Consolas HODONOU"
                class="w-full h-full object-cover"
              />
            </div>
            <!-- Decorative elements -->
            <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500 rounded-full opacity-20 blur-2xl"></div>
            <div class="absolute -top-6 -left-6 w-40 h-40 bg-navy-900 rounded-full opacity-10 blur-2xl"></div>
            
            <!-- Achievement badges -->
            <div class="absolute top-8 -left-4 bg-white p-4 rounded-2xl shadow-xl transform rotate-[-5deg]">
              <div class="text-center">
                <div class="text-3xl font-bold text-cyan-500">3+</div>
                <div class="text-xs text-gray-600 font-semibold">Organisations</div>
              </div>
            </div>
            
            <div class="absolute bottom-8 -right-4 bg-white p-4 rounded-2xl shadow-xl transform rotate-[5deg]">
              <div class="text-center">
                <div class="text-3xl font-bold text-navy-900">500+</div>
                <div class="text-xs text-gray-600 font-semibold">Femmes impactées</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Challenge Section -->
    <section id="challenge" class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16" :class="{ 'animate-fade-in-up': isVisible.challenge }">
          <h2 class="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Le Challenge 30 Jours
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Un programme transformateur pour affirmer vos compétences et renforcer votre confiance
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(step, index) in challengeSteps" :key="index" 
               class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
               :class="{ 'animate-fade-in-up': isVisible.challenge }"
               :style="{ animationDelay: `${index * 150}ms` }">
            <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-900 rounded-2xl flex items-center justify-center mb-6">
              <span class="text-2xl font-bold text-white">{{ index + 1 }}</span>
            </div>
            <h3 class="text-xl font-bold text-navy-900 mb-3">{{ step.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ step.description }}</p>
          </div>
        </div>

        <div class="mt-12 text-center">
          <button class="px-8 py-4 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-all transform hover:scale-105 shadow-lg">
           <a href="#contact">
           
            Rejoindre le prochain challenge
            </a>
          </button>
        </div>
      </div>
    </section>

    <!--  Ajout de la section Vidéo du Challenge -->
    <!-- Challenge Video Section -->
    <section id="challenge-video" class="py-20 px-4 sm:px-6 lg:px-8 bg-navy-900">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12" :class="{ 'animate-fade-in-up': isVisible.video }">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Découvrez le Challenge en Vidéo
          </h2>
          <p class="text-lg text-gray-300 max-w-2xl mx-auto">
            Plongez dans l'expérience transformatrice du challenge Be Proud & Shine
          </p>
        </div>

        <div class="relative" :class="{ 'animate-fade-in': isVisible.video }">
          <!-- Video Container -->
          <div class="relative aspect-video bg-gradient-to-br from-cyan-900 to-blue-900 rounded-3xl overflow-hidden shadow-2xl">
            <!-- Replace with your actual video URL -->
            <iframe 
              v-if="videoUrl"
              :src="videoUrl"
              class="w-full h-full"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            
            <!-- Placeholder if no video URL -->
            <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-900">
              <div class="text-center text-white p-8">
                <div class="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                  <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold mb-2">Vidéo du Challenge</h3>
                <p class="text-gray-200">La vidéo sera bientôt disponible</p>
              </div>
            </div>
          </div>

          <!-- Decorative elements -->
          <div class="absolute -bottom-8 -left-8 w-32 h-32 bg-cyan-500 rounded-full opacity-20 blur-3xl"></div>
          <div class="absolute -top-8 -right-8 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <!-- Video Stats -->
        <div class="grid grid-cols-3 gap-6 mt-12">
          <div class="text-center" :class="{ 'animate-fade-in-up': isVisible.video }" style="animation-delay: 100ms">
            <div class="text-3xl font-bold text-cyan-500 mb-2">30</div>
            <div class="text-sm text-gray-300">Jours de transformation</div>
          </div>
          <div class="text-center" :class="{ 'animate-fade-in-up': isVisible.video }" style="animation-delay: 200ms">
            <div class="text-3xl font-bold text-cyan-500 mb-2">100%</div>
            <div class="text-sm text-gray-300">Engagement communautaire</div>
          </div>
          <div class="text-center" :class="{ 'animate-fade-in-up': isVisible.video }" style="animation-delay: 300ms">
            <div class="text-3xl font-bold text-cyan-500 mb-2">500+</div>
            <div class="text-sm text-gray-300">Participantes inspirées</div>
          </div>
        </div>
      </div>
    </section>
    <!-- Community Section with Animated Dots -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="relative h-96" :class="{ 'animate-fade-in': isVisible.community }">
            <div v-for="(dot, index) in communityDots" :key="index"
                 class="absolute w-16 h-16 rounded-full transition-all duration-500 hover:scale-125 cursor-pointer"
                 :class="dot.color"
                 :style="{ 
                   left: dot.x + '%', 
                   top: dot.y + '%',
                   animationDelay: `${index * 100}ms`
                 }">
            </div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-900 rounded-2xl flex items-center justify-center">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="space-y-6" :class="{ 'animate-fade-in-up': isVisible.community }">
            <h2 class="text-3xl md:text-4xl font-bold text-navy-900">
              Rejoignez une communauté bienveillante
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              Avec Be Proud & Shine, vous ne serez jamais seule. Rejoignez une communauté de femmes 
              inspirantes qui se soutiennent mutuellement dans leur parcours professionnel.
            </p>
            <ul class="space-y-3">
              <li class="flex items-center space-x-3">
                <span class="text-cyan-500 text-xl">✓</span>
                <span class="text-gray-600">Mentorat entre pairs</span>
              </li>
              <li class="flex items-center space-x-3">
                <span class="text-cyan-500 text-xl">✓</span>
                <span class="text-gray-600">Événements communautaires réguliers</span>
              </li>
              <li class="flex items-center space-x-3">
                <span class="text-cyan-500 text-xl">✓</span>
                <span class="text-gray-600">Ressources partagées et conseils</span>
              </li>
              <li class="flex items-center space-x-3">
                <span class="text-cyan-500 text-xl">✓</span>
                <span class="text-gray-600">Réseau professionnel actif</span>
              </li>
            </ul>
            <button class="px-8 py-3 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-all transform hover:scale-105">
               <a href="https://chat.whatsapp.com/FY9pbhQMwbNDRCc7vAJobm?mode=ems_copy_t" target="_blank" rel="noopener noreferrer">
                Rejoindre la communauté

                </a>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Academy Section -->
    <section id="academie" class="py-20 px-4 sm:px-6 lg:px-8 bg-navy-900 text-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16" :class="{ 'animate-fade-in-up': isVisible.academy }">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            L'Académie Be Proud & Shine
          </h2>
          <p class="text-lg text-gray-300 max-w-2xl mx-auto">
            Des modules de formation pour développer votre leadership et votre présence professionnelle
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(module, index) in academyModules" :key="index"
               class="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all transform hover:-translate-y-2"
               :class="{ 'animate-fade-in-up': isVisible.academy }"
               :style="{ animationDelay: `${index * 100}ms` }">
            <div class="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">{{ module.title }}</h3>
            <p class="text-gray-300 text-sm">{{ module.description }}</p>
          </div>
        </div>

        <div class="mt-12 text-center">
          <button class="px-8 py-4 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-all transform hover:scale-105">
           <a href="#contact">
            Rejoindre la liste d'attente
            </a>
          </button>
        </div>
      </div>
    </section>

    <!-- Pricing Plans -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16" :class="{ 'animate-fade-in-up': isVisible.pricing }">
          <h2 class="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Choisissez votre formule
          </h2>
          <p class="text-lg text-gray-600">
            Des options adaptées à vos besoins et votre budget
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(plan, index) in pricingPlans" :key="index"
               class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden"
               :class="{ 'animate-fade-in-up': isVisible.pricing, 'ring-4 ring-cyan-500': plan.featured }"
               :style="{ animationDelay: `${index * 150}ms` }">
            <div class="p-8">
              <div v-if="plan.featured" class="inline-block px-4 py-1 bg-cyan-500 text-white text-sm font-semibold rounded-full mb-4">
                Populaire
              </div>
              <h3 class="text-2xl font-bold text-navy-900 mb-2">{{ plan.name }}</h3>
              <div class="mb-6">
                <span class="text-4xl font-bold text-navy-900">{{ plan.price }}</span>
                <span class="text-gray-600">/mois</span>
              </div>
              <p class="text-gray-600 mb-6">{{ plan.description }}</p>
              <ul class="space-y-3 mb-8">
                <li v-for="(feature, fIndex) in plan.features" :key="fIndex" class="flex items-start space-x-3">
                  <svg class="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-600 text-sm">{{ feature }}</span>
                </li>
              </ul>
              <button :class="plan.featured ? 'bg-cyan-500 text-white hover:bg-cyan-600' : 'bg-gray-100 text-navy-900 hover:bg-gray-200'" 
                      class="w-full px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                Commencer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <!-- <section id="testimonials" class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 to-blue-50"> -->
    <!-- Testimonials Section -->
    <section id="testimonials" class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16" :class="{ 'animate-fade-in-up': isVisible.testimonials }">
          <h2 class="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Ils Témoignent de leur <span class="text-cyan-500">Fierté</span>
          </h2>
          <p class="text-lg text-gray-600">
            Découvrez les témoignages inspirants du challenge #BeProudAndShine
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="testimonial in testimonials" :key="testimonial.id"
               @mouseenter="hoveredTestimonial = testimonial.id"
               @mouseleave="hoveredTestimonial = null"
               class="relative group cursor-pointer">
            
            <!-- Testimonial Card -->
            <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 hover:border-cyan-500 border-2 border-transparent h-full">
              <!-- Avatar and Name -->
              <div class="flex items-center gap-4 mb-4">
                <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  {{ testimonial.name.charAt(0) }}
                </div>
                <div>
                  <h3 class="font-bold text-lg text-navy-900">{{ testimonial.name }}</h3>
                  <p class="text-sm text-cyan-600">{{ testimonial.role }}</p>
                </div>
              </div>
              
              <!-- Excerpt -->
              <p class="text-gray-600 text-sm leading-relaxed line-clamp-4 mb-4">
                {{ testimonial.excerpt }}
              </p>
              
              <!-- Read more indicator -->
              <div class="flex items-center gap-2 text-cyan-500 text-sm font-medium">
                <span>Survolez pour lire plus</span>
                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            
            <!-- Popup on Hover -->
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 scale-95"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-95"
            >
              <div v-if="hoveredTestimonial === testimonial.id"
                   class="absolute inset-0 z-20 p-6 bg-white rounded-2xl border-2 border-cyan-500 shadow-2xl overflow-y-auto max-h-[600px]"
                   style="box-shadow: 0 25px 50px -12px rgba(0, 180, 180, 0.5);">
                
                <!-- Header -->
                <div class="flex items-center gap-4 mb-4 sticky top-0 bg-white pb-4 border-b border-gray-200">
                  <div class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {{ testimonial.name.charAt(0) }}
                  </div>
                  <div>
                    <h3 class="font-bold text-navy-900">{{ testimonial.name }}</h3>
                    <p class="text-xs text-cyan-600">{{ testimonial.role }}</p>
                  </div>
                </div>
                
                <!-- Full Content -->
                <div class="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                  {{ testimonial.fullContent }}
                </div>
                
                <!-- Hashtag -->
                <div class="mt-6 pt-4 border-t border-gray-200 sticky bottom-0 bg-white">
                  <span class="text-cyan-500 font-bold text-lg">#BeProudAndShine</span>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>


    

    <!-- Sponsors -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <h3 class="text-2xl font-bold text-center text-navy-900 mb-12">Nos partenaires</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
          <div class="text-4xl font-bold">Brandit Co</div>
          <div class="text-4xl font-bold">Jecs</div>
          <div class="text-4xl font-bold">Ikhono</div>
          <!-- <div class="text-4xl font-bold">Partner 4</div> -->
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <!-- Contact Section - VERSION MISE À JOUR -->
    <section id="contact" class="py-20 px-4 sm:px-6 lg:px-8 bg-navy-900 text-white">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12" :class="{ 'animate-fade-in-up': isVisible.contact }">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Prête à commencer votre transformation ?
          </h2>
          <p class="text-lg text-gray-300">
            Contactez-nous ou inscrivez-vous directement au prochain challenge
          </p>
        </div>

        <form @submit.prevent="sendEmail" class="space-y-6" :class="{ 'animate-fade-in-up': isVisible.contact }">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold mb-2">Nom complet</label>
              <input 
                type="text" 
                v-model="contactForm.name"
                required
                class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" 
                placeholder="Votre nom" 
              />
            </div>
            <div>
              <label class="block text-sm font-semibold mb-2">Email</label>
              <input 
                type="email" 
                v-model="contactForm.email"
                required
                class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" 
                placeholder="votre@email.com" 
              />
            </div>
          </div>
          <div>
            <label class="block text-sm font-semibold mb-2">Profil LinkedIn (optionnel)</label>
            <input 
              type="url" 
              v-model="contactForm.linkedin"
              class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" 
              placeholder="https://linkedin.com/in/..." 
            />
          </div>
          <div>
            <label class="block text-sm font-semibold mb-2">Votre motivation</label>
            <textarea 
              rows="4" 
              v-model="contactForm.motivation"
              required
              class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" 
              placeholder="Parlez-nous de vos objectifs..."
            ></textarea>
          </div>

          <!-- Message de statut -->
          <div v-if="formStatus.message" 
               :class="['p-4 rounded-lg text-center font-semibold transition-all', 
                        formStatus.type === 'success' ? 'bg-green-500/20 text-white border border-green-500' : 'bg-red-500/20 text-red-300 border border-red-500']">
            {{ formStatus.message }}
          </div>

          <button 
            type="submit" 
            :disabled="isSubmitting"
            class="w-full px-8 py-4 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer ma candidature' }}
          </button>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-navy-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <img src="../../../assets/images/proud/logo.png" alt="" class="w-20 h-20"/>
              <!-- <div class="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-900 rounded-lg"></div>
              <span class="text-xl font-bold">Be Proud & Shine</span> -->
            </div>
            <p class="text-gray-400 text-sm">
              Transformez vos doutes en force et brillez dans votre carrière.
            </p>
          </div>
          <div>
            <h4 class="font-bold mb-4">Navigation</h4>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><a href="#accueil" class="hover:text-cyan-500 transition-colors">Accueil</a></li>
              <li><a href="#apropos" class="hover:text-cyan-500 transition-colors">À propos</a></li>
              <li><a href="#challenge" class="hover:text-cyan-500 transition-colors">Le Challenge</a></li>
              <li><a href="#academie" class="hover:text-cyan-500 transition-colors">Académie</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-4">Ressources</h4>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><a href="#" class="hover:text-cyan-500 transition-colors">Blog</a></li>
              <li><a href="#" class="hover:text-cyan-500 transition-colors">FAQ</a></li>
              <li><a href="#" class="hover:text-cyan-500 transition-colors">Témoignages</a></li>
              <li><a href="#contact" class="hover:text-cyan-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-4">Suivez-nous</h4>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors">
                <span class="text-xl">in</span>
              </a>
              <a href="#" class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors">
                <span class="text-xl">𝕏</span>
              </a>
              <a href="#" class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors">
                <span class="text-xl">IG</span>
              </a>
            </div>
          </div>
        </div>
        <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2025 Be Proud & Shine. Tous droits réservés.</p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="hover:text-cyan-500 transition-colors">Mentions légales</a>
            <a href="#" class="hover:text-cyan-500 transition-colors">Politique de confidentialité</a>
            <a href="#" class="hover:text-cyan-500 transition-colors">RGPD</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import img1 from '../../../assets/images/proud/b1.png'
import emailjs from '@emailjs/browser'
import video1 from '../../../assets/images/proud/c5.mp4'

const videoUrl = ref(video1)
const contactForm = ref({
  name: '',
  email: '',
  linkedin: '',
  motivation: ''
})

const isSubmitting = ref(false)
const formStatus = ref({
  message: '',
  type: '' // 'success' ou 'error'
})

// Configuration EmailJS - REMPLACE PAR TES VRAIES VALEURS
const EMAILJS_CONFIG = {
  serviceID: 'service_pugflqa',      // Ex: 'service_abc123'
  templateID: 'template_mrnnj7r',     // Ex: 'template_xyz789'
  publicKey: 'ytS2soZClzphPnz9m'        // Ex: 'abcd1234efgh5678'
}

// Fonction d'envoi du formulaire
const sendEmail = async () => {
  isSubmitting.value = true
  formStatus.value = { message: '', type: '' }

  try {
    // Paramètres à envoyer à EmailJS
    const templateParams = {
      from_name: contactForm.value.name,
      from_email: contactForm.value.email,
      linkedin_profile: contactForm.value.linkedin || 'Non renseigné',
      motivation: contactForm.value.motivation,
      to_name: 'Be Proud & Shine Team' // Le nom de ton équipe
    }

    // Envoi via EmailJS
    await emailjs.send(
      EMAILJS_CONFIG.serviceID,
      EMAILJS_CONFIG.templateID,
      templateParams,
      EMAILJS_CONFIG.publicKey
    )

    // Succès
    formStatus.value = {
      message: '✅ Merci ! Votre candidature a été envoyée avec succès. Nous vous contacterons bientôt !',
      type: 'success'
    }

    // Réinitialiser le formulaire
    contactForm.value = {
      name: '',
      email: '',
      linkedin: '',
      motivation: ''
    }

  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error)
    
    formStatus.value = {
      message: '❌ Une erreur s\'est produite. Veuillez réessayer ou nous contacter directement.',
      type: 'error'
    }
  } finally {
    isSubmitting.value = false

    // Effacer le message après 8 secondes
    setTimeout(() => {
      formStatus.value = { message: '', type: '' }
    }, 8000)
  }
}



const mobileMenuOpen = ref(false)

const statistics = [
  { value: '64%', label: 'Souffrent du syndrome de l\'imposteur' },
  { value: '28%', label: 'De femmes dans la tech' },
  { value: '500+', label: 'Participantes inspirées' },
  { value: '30', label: 'Jours de transformation' }
]

const challengeSteps = [
  {
    title: 'Publications quotidiennes',
    description: 'Partagez vos réussites, compétences et apprentissages sur LinkedIn avec #BeProudAndShine'
  },
  {
    title: 'Soutien communautaire',
    description: 'Bénéficiez du support d\'une communauté bienveillante qui vous encourage chaque jour'
  },
  {
    title: 'Transformation visible',
    description: 'Constatez l\'évolution de votre confiance et de votre présence professionnelle'
  }
]

const communityDots = [
  { x: 10, y: 20, color: 'bg-yellow-400 animate-pulse' },
  { x: 30, y: 60, color: 'bg-green-500 animate-pulse' },
  { x: 50, y: 30, color: 'bg-blue-500 animate-pulse' },
  { x: 70, y: 70, color: 'bg-cyan-500 animate-pulse' },
  { x: 20, y: 80, color: 'bg-orange-500 animate-pulse' },
  { x: 80, y: 40, color: 'bg-red-500 animate-pulse' },
  { x: 60, y: 85, color: 'bg-green-400 animate-pulse' },
  { x: 85, y: 15, color: 'bg-blue-400 animate-pulse' }
]

const academyModules = [
  {
    title: 'Prise de parole',
    description: 'Développez votre aisance à l\'oral et votre capacité à captiver votre audience'
  },
  {
    title: 'Storytelling personnel',
    description: 'Apprenez à raconter votre parcours de manière authentique et inspirante'
  },
  {
    title: 'Valorisation numérique',
    description: 'Optimisez votre présence en ligne et votre personal branding'
  },
  {
    title: 'Confiance en soi',
    description: 'Surmontez le syndrome de l\'imposteur et affirmez votre légitimité'
  }
]

const pricingPlans = [
  {
    name: 'Challenge',
    price: '0€',
    description: 'Parfait pour commencer votre transformation',
    features: [
      'Accès au challenge 30 jours',
      'Communauté bienveillante',
      'Ressources de base',
      'Support par email'
    ],
    featured: false
  },
  {
    name: 'Académie',
    price: '59€',
    description: 'Pour aller plus loin dans votre développement',
    features: [
      'Tous les avantages Challenge',
      'Accès aux modules de formation',
      'Webinaires mensuels',
      'Mentorat de groupe',
      'Certificat de formation'
    ],
    featured: true
  },
  {
    name: 'Premium',
    price: '99€',
    description: 'Accompagnement personnalisé complet',
    features: [
      'Tous les avantages Académie',
      'Mentorat individuel',
      'Sessions de coaching 1-1',
      'Accès prioritaire aux événements',
      'Réseau exclusif de leaders'
    ],
    featured: false
  }
]


const hoveredTestimonial = ref(null)

const testimonials = [
  {
    id: 1,
    name: 'Myriam',
    role: 'Ingénieure en Cybersécurité',
    excerpt: 'Aujourd\'hui, je choisis de célébrer chacune de mes réussites, même celles que j\'ai trop souvent minimisées avec un simple « c\'est normal ».',
    image: img1,
    fullContent: `✨ Be Proud & Shine – Jour 1 ✨

Aujourd'hui, je choisis de célébrer chacune de mes réussites, même celles que j'ai trop souvent minimisées avec un simple « c'est normal ».

Oui, c'est peut-être « normal »… mais ce n'est pas un hasard.
C'est le fruit de mon travail, de mon engagement, de mes sacrifices.

Pendant longtemps, le syndrome de l'imposteur a étouffé ma fierté.
Mais aujourd'hui, je refuse de me cacher derrière la modestie.

Je reconnais ma valeur. Je mérite ma place. Et je compte bien briller – encore plus fort.

Ce challenge est une promesse que je me fais :
Celle de croire en moi, d'oser célébrer mes victoires, petites ou grandes, et d'inspirer d'autres à faire de même.

Je participe fièrement au challenge #BeProudAndShine initié par Consolas HODONOU.
Un pas de plus pour faire face, ensemble, à ce sentiment d'illégitimité qui nous freine trop souvent.`
  },
  {
    id: 2,
    name: 'Antonella',
    role: 'Dév Fullstack web & mobile',
    excerpt: 'Je n\'ai pas l\'habitude de poster sur les réseaux. Je suis plutôt du genre à observer, liker en silence, soutenir de loin. Pourtant, aujourd\'hui je sors de ma zone de confort.',
    image: img1,
    fullContent: `Be Proud & Shine : Jour 1

Je n'ai pas l'habitude de poster sur les réseaux. Je suis plutôt du genre à observer, liker en silence, soutenir de loin.
Pourtant, aujourd'hui je sors de ma zone de confort. Parce que certaines prises de parole méritent d'exister, même si elles arrivent un peu plus tard.

J'ai longtemps appréhendé cet exercice. Peur de "trop", peur de "pas assez". Et c'est exactement pour ça que j'ai failli ne pas commencer ce challenge.

Il m'a fallu m'inspirer du courage de mes pairs. Il m'a fallu entendre, lire, ressentir cette lumière collective qui émergeait sous le hashtag #BeProudAndShine.

Et surtout, il m'a fallu voir Mlle Consolas HODONOU elle-même montrer que la fierté peut être un acte de résistance, que briller ne signifie pas écraser, mais éclairer les autres aussi.

Alors me voici.

Pendant 30 jours, je vais prendre un espace que je n'ai jamais vraiment occupé : celui de la parole publique.

Et j'espère que, quelque part, une personne qui hésite encore se dira : "Si elle l'a fait, je peux peut-être essayer aussi."

C'est le début. Merci à celles et ceux qui brillent déjà. Vous avez été mon point d'entrée.`
  },
  {
    id: 3,
    name: 'Josiane',
    role: 'Rédactrice web SEO & Aspirante Data Scientist',
    excerpt: 'Aujourd\'hui marque le dernier jour du challenge #BeProudAndShine. Ce challenge m\'a permis de travailler ma constance et ma discipline.',
    image: img1,
    fullContent: `J30/30 – Fin du challenge #BeProudAndShine

Aujourd'hui marque le dernier jour du challenge #BeProudAndShine initié par Consolas HODONOU.

Ce que ce challenge m'a apporté :

✨ Il m'a permis de travailler ma constance et ma discipline.
✨ Il m'a aidée à faire un petit pas dans la création de contenu sur LinkedIn.
✨ Il m'a surtout permis de sortir de ma zone de confort.

Depuis deux ans, je n'arrivais pas à me lancer par peur et procrastination. Mais grâce à ce challenge, j'ai fait un grand pas.

30 jours de partage, 30 jours à explorer mes pensées, mes expériences et mes apprentissages.
30 jours à oser me montrer telle que je suis.

🙏 Je voudrais remercier Consolas HODONOU pour cette belle opportunité.
💫 Bravo à tous ceux qui ont relevé le challenge avec moi.`
  },


  {
    id: 6,
    name: 'Melvin',
    role: 'Ingénieur TIC & Formateur',
    excerpt: 'Aujourd’hui, je me lance un nouveau défi : participer au challenge “Be Proud and Shine” initié par Mlle Consolas HODONOU.',
    image: img1,
    fullContent: `

Aujourd’hui, je me lance un nouveau défi : participer au challenge “Be Proud and Shine” initié par Mlle Consolas HODONOU.
Ce challenge, véritable déclaration d’amour envers soi-même, consiste à publier chaque jour pendant 30 jours sur différents réseaux sociaux.

Au fil des jours, je partagerai des contenus personnels ou professionnels en lien avec mes expériences, mes idées, mes projets et ma vision.
Je l’avoue, ce ne sera pas facile : trouver l’inspiration quotidienne, oser se livrer un peu plus, rester constant. Ce sont de vrais défis.
Mais je crois en la force de l’échange, et avec votre bienveillance, vos commentaires et vos encouragements, je suis convaincu que j’y arriverai.

L’objectif ? Partager, inspirer, apprendre, et pourquoi pas, créer des liens autour de nos passions communes.

Merci à vous qui lirez, réagirez ou simplement suivrez cette aventure avec moi.
À très bientôt !

#beproudandshine 
#affirmationdesoi
#célébration
Merci à Consolas HODONOU pour cette belle initiative.`
  },


  {
    id: 4,
    name: 'Nadège',
    role: 'Développeuse web',
    excerpt: '30 jours à partager mon histoire, mon vécu, ma fierté, mes forces. 30 jours à honorer la personne que je suis.',
    image: img1,
    fullContent: `30 jours à partager mon histoire, mon vécu, ma fierté, mes forces, etc.
30 jours à honorer la personne que je suis.
30 jours à combattre le doute, le syndrome de l'imposteur, la peur.
30 jours à être fière et briller.

Quand j'ai commencé ce challenge, je ne savais pas exactement ce que j'allais dire.
Je ne savais pas si j'allais tenir.
Je ne savais même pas si j'étais "légitime" à me raconter ici, tous les jours, pendant 30 jours.

Mais j'ai essayé.
Puis j'ai continué.
Et aujourd'hui, je suis allée jusqu'au bout.

Un immense merci à Consolas HODONOU, l'initiatrice du challenge Be Proud & Shine.
Merci pour cette idée simple mais puissante. Merci d'avoir créé cet espace où les participants ont pu s'exprimer librement, se reconnecter à eux-mêmes et se révéler avec fierté.`
  },
  {
    id: 5,
    name: 'Anne-Marie',
    role: 'Financial Engineer',
    excerpt: 'I\'m backkkkkkkkkkkkkkkkkkkkkkk! Oui oui, 6 mois d\'absence... Je me suis longtemps tue. J\'ai minimisé mes réussites, douté de ma place.',
    image: img1,
    fullContent: `I'm backkkkkkkkkkkkkkkkkkkkkkk!

Oui oui, 6 mois d'absence... C'est la vie. Que puis-je vous dire d'autre?
Breffff!

Je me suis longtemps tue.
J'ai minimisé mes réussites, douté de ma place, cru que je n'étais "pas assez".

Aujourd'hui, je fais un pas de côté.
Je choisis de me voir avec bienveillance, de reconnaître mon parcours, de célébrer qui je suis devenue, et surtout d'inspirer mon entourage.

C'est pourquoi j'ai décidé de participer au challenge #BeProudAndShine de Consolas HODONOU. Franchement, 30 jours à vous parler de mon parcours et de mon histoire, j'ai hâte.

J'espère que ce chemin inspirera aussi d'autres à se lever, à briller et à être fiers de leur parcours, sans attendre une validation extérieure.`
  }
]

// Intersection Observer for scroll animations
const isVisible = ref({
  hero: false,
  stats: false,
  about: false,
  challenge: false,
  community: false,
  academy: false,
  pricing: false,
  testimonials: false,
  contact: false
})

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target.id || entry.target.closest('section')?.id
          if (section) {
            isVisible.value[section] = true
          }
        }
      })
    },
    { threshold: 0.1 }
  )

  // Observe all sections
  const sections = document.querySelectorAll('section')
  sections.forEach((section) => observer.observe(section))

  // Initial visibility for hero
  isVisible.value.hero = true
})
</script>

<style>


@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
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

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

/* Custom colors */
:root {
  --navy-900: #001B44;
  --cyan-500: #00B4B4;
  --coral-500: #FF6B6B;
}

.text-navy-900 {
  color: var(--navy-900);
}

.bg-navy-900 {
  background-color: var(--navy-900);
}

.bg-navy-800 {
  background-color: #002855;
}

.text-cyan-500 {
  color: var(--cyan-500);
}

.bg-cyan-500 {
  background-color: var(--cyan-500);
}

.bg-cyan-600 {
  background-color: #009999;
}

.bg-coral-500 {
  background-color: var(--coral-500);
}

.ring-cyan-500 {
  --tw-ring-color: var(--cyan-500);
}

.hover\:text-cyan-500:hover {
  color: var(--cyan-500);
}

.hover\:bg-cyan-500:hover {
  background-color: var(--cyan-500);
}

.hover\:bg-cyan-600:hover {
  background-color: #009999;
}

.focus\:ring-cyan-500:focus {
  --tw-ring-color: var(--cyan-500);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: var(--cyan-500);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #009999;
}
</style>