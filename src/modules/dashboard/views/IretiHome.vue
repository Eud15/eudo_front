<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation Header -->
    <nav class="bg-white shadow-sm px-4 py-3">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Navigation Links - Desktop -->
        <div class="hidden md:flex items-center space-x-8">
            <img src="../../../assets/images/ireti/logoireti.png" alt="" style="width: 70px;">
          <a href="#" class="text-green-500 font-medium hover:text-green-600">Accueil</a>
          <a href="#" class="text-gray-700 hover:text-gray-900">Qui sommes-nous ?</a>
          <div class="relative group">
            <button class="text-gray-700 hover:text-gray-900 flex items-center">
              Services
              <ChevronDown class="ml-1 h-4 w-4" />
            </button>
          </div>
          <a href="#" class="text-gray-700 hover:text-gray-900">Contacts</a>
          <a href="#" class="text-gray-700 hover:text-gray-900">Faire un don</a>
          <a href="#" class="text-gray-700 hover:text-gray-900">Ireti Store</a>
        </div>

        <!-- Right Side Icons -->
        <div class="flex items-center space-x-2 md:space-x-4">
          <button class="p-2 hover:bg-gray-100 rounded-full">
            <User class="h-5 w-5 text-gray-600" />
          </button>
          <button class="relative p-2 hover:bg-gray-100 rounded-full">
            <Heart class="h-5 w-5 text-gray-600" />
            <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
          </button>
          <button class="relative p-2 hover:bg-gray-100 rounded-full">
            <ShoppingCart class="h-5 w-5 text-gray-600" />
            <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
          </button>
          <span class="text-green-500 font-medium text-sm md:text-base">0 CFA</span>
        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-gray-200">
        <div class="flex flex-col space-y-3 pt-4">
          <a href="#" class="text-green-500 font-medium hover:text-green-600 px-2 py-1">Accueil</a>
          <a href="#" class="text-gray-700 hover:text-gray-900 px-2 py-1">Qui sommes-nous ?</a>
          <a href="#" class="text-gray-700 hover:text-gray-900 px-2 py-1">Services</a>
          <a href="#" class="text-gray-700 hover:text-gray-900 px-2 py-1">Contacts</a>
          <a href="#" class="text-gray-700 hover:text-gray-900 px-2 py-1">Faire un don</a>
          <a href="#" class="text-gray-700 hover:text-gray-900 px-2 py-1">Ireti Store</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section with Carousel -->
    <section class="relative bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 min-h-screen flex items-center overflow-hidden">
      <!-- Navigation Arrows -->
      <button 
        @click="prevSlide"
        class="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 md:p-3 text-white hover:bg-white/10 rounded-full transition-colors"
      >
        <ChevronLeft class="h-6 w-6 md:h-8 md:w-8" />
      </button>
      <button 
        @click="nextSlide"
        class="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 md:p-3 text-white hover:bg-white/10 rounded-full transition-colors"
      >
        <ChevronRight class="h-6 w-6 md:h-8 md:w-8" />
      </button>

      <div class="max-w-7xl mx-auto px-4 py-10 md:py-20 flex flex-col-reverse md:flex-row items-center justify-between w-full">
        <!-- Left Side - Characters Image (Mobile: top, Desktop: right) -->
        <div class="flex-1 flex justify-center mb-8 md:mb-0 md:order-2">
          <img 
            src="../../../assets/images/ireti/home2.png"
            alt="Équipe de nutritionnistes africains"
            class="max-w-full h-auto object-contain max-h-64 md:max-h-full"
          />
        </div>
        
        <!-- Right Side - Hero Content Carousel (Mobile: bottom, Desktop: left) -->
        <div class="flex-1 max-w-xl md:pl-8 md:ml-4 md:order-1">
          <div class="relative overflow-hidden">
            <!-- Slide Container -->
            <div 
              class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
              <!-- Slide 1 -->
              <div class="w-full flex-shrink-0 text-center md:text-left">
                <h1 class="text-2xl md:text-4xl lg:text-4xl font-bold text-white leading-tight mb-6 md:mb-8">
                  {{ heroSlides[0].title }}
                </h1>
                <button class="bg-cyan-400 text-sm hover:bg-cyan-500 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors">
                  {{ heroSlides[0].buttonText }}
                </button>
              </div>
              <!-- Slide 2 -->
              <div class="w-full flex-shrink-0 text-center md:text-left">
                <h1 class="text-2xl md:text-4xl lg:text-4xl font-bold text-white leading-tight mb-6 md:mb-8">
                  {{ heroSlides[1].title }}
                </h1>
                <button class="bg-cyan-400 text-sm hover:bg-cyan-500 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors">
                  {{ heroSlides[1].buttonText }}
                </button>
              </div>
              <!-- Slide 3 -->
              <div class="w-full flex-shrink-0 text-center md:text-left">
                <h1 class="text-2xl md:text-4xl lg:text-4xl font-bold text-white leading-tight mb-6 md:mb-8">
                  {{ heroSlides[2].title }}
                </h1>
                <button class="bg-cyan-400 text-sm hover:bg-cyan-500 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors">
                  {{ heroSlides[2].buttonText }}
                </button>
              </div>
            </div>
          </div>
          <!-- Slide Indicators -->
          <div class="flex justify-center md:justify-start space-x-3 mt-6 md:mt-8">
            <button
              v-for="(slide, index) in heroSlides"
              :key="index"
              @click="goToSlide(index)"
              class="w-3 h-3 rounded-full transition-colors"
              :class="currentSlide === index ? 'bg-white' : 'bg-white/40'"
            ></button>
          </div>
        </div>
      </div>
    </section>

    <!-- About Ireti Section -->
    <section class="bg-gray-50 py-12 md:py-20 about-section">
      <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <!-- Left Side - Doctor Illustration with Speech Bubble -->
        <div class="flex-1 relative mb-8 md:mb-0 fade-in-left" :class="{ 'visible': aboutSectionVisible }">
          <div class="flex justify-center">
            <!-- Doctor Character -->
            <div class="relative">
              <!-- Speech Bubble -->
              <div class="absolute -top-12 md:-top-16 left-1/3 transform -translate-x-1/2 bg-white border-4 border-cyan-400 rounded-3xl px-4 md:px-8 py-2 md:py-4 shadow-lg">
                <div class="text-center">
                  <div class="text-lg md:text-xl font-bold text-gray-800">Bienvenue /</div>
                  <div class="text-lg md:text-xl font-bold text-gray-800">KARIBU</div>
                </div>
                <!-- Speech bubble tail -->
                <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                  <div class="w-0 h-0 border-l-[15px] border-r-[15px] border-t-[20px] border-l-transparent border-r-transparent border-t-cyan-400"></div>
                  <div class="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-1">
                    <div class="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[16px] border-l-transparent border-r-transparent border-t-white"></div>
                  </div>
                </div>
              </div>
              <!-- Doctor Illustration -->
              <div class="flex-1 flex justify-center">
                <img 
                  src="../../../assets/images/ireti/doctor.png"
                  alt="Docteur nutritionniste africain"
                  class="max-w-full h-auto object-contain max-h-64 md:max-h-full"
                />
              </div>
            </div>
          </div>
        </div>
        
        <!-- Right Side - Content -->
        <div class="flex-1 md:pl-12 fade-in-right" :class="{ 'visible': aboutSectionVisible }">
          <div class="max-w-3xl text-center md:text-left">
            <!-- Section Title -->
            <h3 class="text-green-500 font-semibold text-base md:text-lg mb-4 uppercase tracking-wide">
              À PROPOS D'IRETI
            </h3>
            
            <!-- Main Heading -->
            <h2 class="text-2xl md:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Nous offrons nos meilleurs services nutritionnels
            </h2>
            
            <!-- Description -->
            <p class="text-gray-600 text-sm leading-relaxed mb-8 justify">
              Ireti Nutrition est née de la conviction que chaque Africain mérite un accompagnement nutritionnel adapté à sa culture, ses traditions et ses réalités économiques. Nous combinons l'expertise scientifique moderne avec la sagesse ancestrale africaine pour vous offrir des solutions nutritionnelles authentiques et efficaces.
            </p>
            
            <!-- Services List -->
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <Check class="h-4 w-4 text-white" />
                </div>
                <p class="text-gray-700 text-sm">
                  Consultations nutritionnelles personnalisées 24h/24 avec nos experts certifiés
                </p>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <Check class="h-4 w-4 text-white" />
                </div>
                <p class="text-gray-700 text-sm">
                  Programmes alimentaires basés sur les ingrédients locaux et accessibles
                </p>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <Check class="h-4 w-4 text-white" />
                </div>
                <p class="text-gray-700 text-sm">
                  Éducation nutritionnelle adaptée aux traditions culinaires africaines
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="bg-gray-50 py-12 md:py-20 bg-class services-section">
      <div class="max-w-5xl mx-auto px-4">
        <!-- Section Title -->
        <h2 class="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-16 fade-in-up" :class="{ 'visible': servicesSectionVisible }">
          Nos Services de Nutrition Africaine
        </h2>
        
        <!-- Services Grid - Responsive: 1 col mobile, 2 cols tablet, 4 cols desktop -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 md:mb-16">
          <!-- Service 1 -->
          <div class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-2xl scale-in" :class="{ 'visible': serviceCard1Visible }">
            <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-br from-green-400 to-blue-500 transition-all duration-300 group-hover:scale-[10]"></span>
            <div class="relative z-10 mx-auto max-w-md">
              <span class="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-green-400 to-blue-500 transition-all duration-300 group-hover:bg-green-400">
                <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <User class="h-6 w-6 text-green-500" />
                </div>
              </span>
              <div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <h3 class="text-sm font-semibold text-green-500 transition-all duration-300 group-hover:text-white">
                  Suivi nutritionnel personnel
                </h3>
              </div>
              <div class="pt-5 text-base font-semibold leading-7">
                <p>
                  <a href="#" class="text-green-500 text-sm transition-all duration-300 group-hover:text-white inline-flex items-center">
                    En savoir plus
                    <ArrowRight class="ml-2 h-4 w-4" />
                  </a>
                </p>
              </div>
            </div>
          </div>

          <!-- Service 2 -->
          <div class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-2xl scale-in" :class="{ 'visible': serviceCard2Visible }">
            <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-br from-green-400 to-blue-500 transition-all duration-300 group-hover:scale-[10]"></span>
            <div class="relative z-10 mx-auto max-w-md">
              <span class="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-green-400 to-blue-500 transition-all duration-300 group-hover:bg-green-400">
                <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <FileText class="h-6 w-6 text-green-500" />
                </div>
              </span>
              <div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <h3 class="text-sm font-semibold text-green-500 transition-all duration-300 group-hover:text-white">
                  Programme alimentaire personnalisé
                </h3>
              </div>
              <div class="pt-5 text-base font-semibold leading-7">
                <p>
                  <a href="#" class="text-green-500 text-sm transition-all duration-300 group-hover:text-white inline-flex items-center">
                    En savoir plus
                    <ArrowRight class="ml-2 h-4 w-4" />
                  </a>
                </p>
              </div>
            </div>
          </div>

          <!-- Service 3 -->
          <div class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-2xl scale-in" :class="{ 'visible': serviceCard3Visible }">
            <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-br from-green-400 to-blue-500 transition-all duration-300 group-hover:scale-[10]"></span>
            <div class="relative z-10 mx-auto max-w-md">
              <span class="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-green-400 to-blue-500 transition-all duration-300 group-hover:bg-green-400">
                <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <BookOpen class="h-6 w-6 text-green-500" />
                </div>
              </span>
              <div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <h3 class="text-sm font-semibold text-green-500 transition-all duration-300 group-hover:text-white">
                  Éducation Nutritionnelle (Blog et Podcast)
                </h3>
              </div>
              <div class="pt-5 text-base font-semibold leading-7">
                <p>
                  <a href="#" class="text-green-500 text-sm transition-all duration-300 group-hover:text-white inline-flex items-center">
                    En savoir plus
                    <ArrowRight class="ml-2 h-4 w-4" />
                  </a>
                </p>
              </div>
            </div>
          </div>

          <!-- Service 4 -->
          <div class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-2xl scale-in" :class="{ 'visible': serviceCard4Visible }">
            <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-br from-green-400 to-blue-500 transition-all duration-300 group-hover:scale-[10]"></span>
            <div class="relative z-10 mx-auto max-w-md">
              <span class="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-green-400 to-blue-500 transition-all duration-300 group-hover:bg-green-400">
                <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <ShoppingBag class="h-6 w-6 text-green-500" />
                </div>
              </span>
              <div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <h3 class="text-sm font-semibold text-green-500 transition-all duration-300 group-hover:text-white">
                  Ireti Store (La boutique)
                </h3>
              </div>
              <div class="pt-5 text-base font-semibold leading-7">
                <p>
                  <a href="#" class="text-green-500 text-sm transition-all duration-300 group-hover:text-white inline-flex items-center">
                    En savoir plus
                    <ArrowRight class="ml-2 h-4 w-4" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Appointment Section -->
        <div class="bg-white rounded-2xl shadow-md p-4 md:p-6 flex flex-col sm:flex-row items-center justify-between max-w-5xl mx-auto gap-4">
          <div class="flex items-center space-x-4 text-center sm:text-left">
            <div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <Calendar class="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 class="text-lg font-semibold text-green-500 mb-1">
                Consultations disponibles 7j/7
              </h3>
              <p class="text-gray-500 text-xs">
                Prenez rendez-vous avec nos nutritionnistes experts en alimentation africaine
              </p>
            </div>
          </div>
          <button class="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-6 md:px-8 py-3 rounded-full transition-colors whitespace-nowrap">
            Prendre rendez-vous
          </button>
        </div>
      </div>
    </section>

    <!-- How Ireti Works Section -->
    <section class="bg-white py-12 md:py-20 timeline-section">
      <div class="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <!-- Left Side - Content -->
        <div class="flex-1 md:pr-12 mb-8 md:mb-0">
          <!-- Section Title -->
          <h3 class="text-green-500 font-semibold text-base md:text-lg mb-4 uppercase tracking-wide text-center md:text-left">
            COMMENT FONCTIONNE IRETI ?
          </h3>
          
          <!-- Main Heading -->
          <h2 class="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 text-center md:text-left">
            Votre parcours vers une nutrition optimale en 4 étapes
          </h2>
          
          <!-- Description -->
          <p class="text-gray-600 text-sm leading-relaxed mb-8 md:mb-12 text-center md:text-left">
            Découvrez notre approche structurée qui combine évaluation personnalisée, conseils d'experts et suivi continu pour transformer durablement vos habitudes alimentaires.
          </p>
          
          <!-- Timeline Steps with Progressive Animations -->
          <div class="relative">
            <!-- Animated Vertical Line -->
            <div 
              class="absolute left-6 top-0 w-0.5 bg-green-200 transition-all duration-1000 ease-out"
              :class="timelineVisible ? 'h-full opacity-100' : 'h-0 opacity-0'"
            ></div>
            
            <!-- Step 1 -->
            <div 
              class="relative flex items-start mb-8 transition-all duration-700 ease-out"
              :class="step1Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'"
            >
              <div 
                class="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center relative z-10 transition-all duration-500 ease-out transform"
                :class="step1Visible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'"
              >
                <Calendar class="h-6 w-6 text-white" />
              </div>
              <div class="ml-6">
                <h4 
                  class="text-lg font-semibold text-gray-900 mb-2 transition-all duration-700 ease-out delay-200"
                  :class="step1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
                >
                  Réservez votre consultation
                </h4>
                <p 
                  class="text-gray-600 text-xs leading-relaxed transition-all duration-700 ease-out delay-300"
                  :class="step1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
                >
                  Planifiez facilement votre première consultation avec l'un de nos nutritionnistes spécialisés en alimentation africaine, disponible en ligne ou en présentiel.
                </p>
              </div>
            </div>
            
            <!-- Step 2 -->
            <div 
              class="relative flex items-start mb-8 transition-all duration-700 ease-out delay-200"
              :class="step2Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'"
            >
              <div 
                class="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center relative z-10 transition-all duration-500 ease-out transform delay-200"
                :class="step2Visible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'"
              >
                <FileText class="h-6 w-6 text-white" />
              </div>
              <div class="ml-6">
                <h4 
                  class="text-lg font-semibold text-gray-900 mb-2 transition-all duration-700 ease-out delay-400"
                  :class="step2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
                >
                  Évaluation nutritionnelle complète
                </h4>
                <p 
                  class="text-gray-600 text-xs leading-relaxed transition-all duration-700 ease-out delay-500"
                  :class="step2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
                >
                  Analyse approfondie de vos habitudes alimentaires, état de santé, objectifs et contraintes culturelles et économiques pour un diagnostic personnalisé.
                </p>
              </div>
            </div>
            
            <!-- Step 3 -->
            <div 
              class="relative flex items-start mb-8 transition-all duration-700 ease-out delay-400"
              :class="step3Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'"
            >
              <div 
                class="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center relative z-10 transition-all duration-500 ease-out transform delay-400"
                :class="step3Visible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'"
              >
                <Activity class="h-6 w-6 text-white" />
              </div>
              <div class="ml-6">
                <h4 
                  class="text-lg font-semibold text-gray-900 mb-2 transition-all duration-700 ease-out delay-600"
                  :class="step3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
                >
                  Programme nutritionnel sur mesure
                </h4>
                <p 
                  class="text-gray-600 text-xs leading-relaxed transition-all duration-700 ease-out delay-700"
                  :class="step3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
                >
                  Recevez votre plan alimentaire personnalisé avec des recettes africaines adaptées, des conseils pratiques et des alternatives locales accessibles.
                </p>
              </div>
            </div>
            
            <!-- Step 4 -->
            <div 
              class="relative flex items-start transition-all duration-700 ease-out delay-600"
              :class="step4Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'"
            >
              <div 
                class="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center relative z-10 transition-all duration-500 ease-out transform delay-600"
                :class="step4Visible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'"
              >
                <CreditCard class="h-6 w-6 text-white" />
              </div>
              <div class="ml-6">
                <h4 
                  class="text-lg font-semibold text-gray-900 mb-2 transition-all duration-700 ease-out delay-800"
                  :class="step4Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
                >
                  Suivi et ajustements réguliers
                </h4>
                <p 
                  class="text-gray-600 text-xs leading-relaxed transition-all duration-700 ease-out delay-900"
                  :class="step4Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
                >
                  Bénéficiez d'un accompagnement continu avec des consultations de suivi, ajustements du programme et support communautaire pour garantir vos résultats.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side - Woman Illustration -->
        <div class="flex-1 flex justify-center">
          <div class="relative">
            <!-- Woman Character -->
            <img 
              src="../../../assets/images/ireti/cusino.png"
              alt="Femme africaine illustration santé"
              class="max-w-full h-auto object-contain max-h-64 md:max-h-full"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Articles Section -->
    <section class="bg-gray-50 py-12 md:py-20 articles-section">
      <div class="max-w-5xl mx-auto px-4">
        <!-- Section Title -->
        <div class="text-center mb-8 md:mb-16 fade-in-up" :class="{ 'visible': articlesVisible }">
          <h3 class="text-green-500 font-semibold text-base md:text-lg mb-4 uppercase tracking-wide">
            ARTICLES PREMIUM
          </h3>
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Guides nutritionnels spécialisés
          </h2>
          <p class="text-gray-600 text-sm max-w-2xl mx-auto">
            Accédez à nos guides complets rédigés par des nutritionnistes experts, spécialement conçus pour répondre aux besoins nutritionnels africains
          </p>
        </div>

        <!-- Articles Grid - Responsive: 1 col mobile, 2 cols tablet, 3 cols desktop -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 md:mb-12">
          <!-- Dynamic Articles -->
          <div 
            v-for="(article, index) in premiumArticles" 
            :key="article.id"
            class="flex-shrink-0 relative overflow-hidden rounded-lg shadow-lg group hover:shadow-2xl transition-all duration-300 slide-in-bottom" 
            :class="[article.bgColor, { 'visible': articleCards[index] }]"
          >
            <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                style="transform: scale(1.5); opacity: 0.1;">
              <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
              <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
            </svg>
            <div class="relative pt-10 px-10 flex items-center justify-center">
              <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                  style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;">
              </div>
              <img class="relative w-40 group-hover:scale-110 transition-transform duration-300"
                    :src="article.image"
                    :alt="article.title">
            </div>
            <div class="relative text-white px-6 pb-6 mt-6">
              <span class="block opacity-75 -mb-1 text-sm">{{ article.category }}</span>
              <div class="flex justify-between items-start">
                <div class="flex-1 mr-3">
                  <span class="block font-semibold text-sm leading-tight">{{ article.title }}</span>
                  <p class="text-xs opacity-75 mt-1">{{ article.description }}</p>
                </div>
                <span class="block bg-white rounded-full text-xs font-bold px-3 py-2 leading-none flex items-center whitespace-nowrap" :class="article.priceColor">
                  {{ article.price }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="text-center mt-8 md:mt-12">
          <button class="bg-green-400 text-xs hover:bg-green-600 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full transition-colors inline-flex items-center">
            Voir tous les guides premium
            <ArrowRight class="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>

    <!-- Blog Section -->
    <section class="bg-gray-100 py-12 md:py-20 blog-section">
      <div class="max-w-6xl mx-auto px-4">
        <!-- Section Title -->
        <div class="text-center mb-8 md:mb-16 fade-in-up" :class="{ 'visible': blogVisible }">
          <h3 class="text-green-500 font-semibold text-base md:text-lg mb-4 uppercase tracking-wide">
            NOTRE BLOG
          </h3>
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Conseils et actualités nutrition
          </h2>
          <p class="text-gray-600 text-sm max-w-2xl mx-auto">
            Découvrez nos derniers articles gratuits sur la nutrition africaine, la santé et le bien-être, rédigés par nos experts
          </p>
        </div>

        <!-- Blog Grid - Responsive: 1 col mobile, 2 cols tablet, 3 cols desktop -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <!-- Dynamic Blog Posts -->
          <div 
            v-for="(post, index) in blogPosts" 
            :key="post.id"
            class="bg-white p-4 md:p-6 border-2 border-gray-200 shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 slide-in-bottom" 
            :class="{ 'visible': blogCards[index] }"
          >
            <!-- Image wrapper -->
            <div class="mb-4 md:mb-6">
              <a href="#" class="block overflow-hidden rounded-lg">
                <img 
                  class="w-full h-40 md:h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  :src="post.image"
                  :alt="post.title"
                />
              </a>
            </div>
            
            <!-- Tag -->
            <div class="mb-4">
              <span class="inline-block font-semibold px-3 py-1 rounded-lg text-xs" :class="post.tagStyle">
                {{ post.category }}
              </span>
            </div>
            
            <!-- Article heading -->
            <div class="mb-4">
              <a href="#" class="block">
                <h3 class="text-sm md:text-sm font-bold text-gray-900 hover:text-green-600 transition-colors line-clamp-2">
                  {{ post.title }}
                </h3>
              </a>
            </div>
            
            <!-- Article text -->
            <div class="mb-4 md:mb-6">
              <p class="text-gray-600 line-clamp-3 text-xs">
                {{ post.excerpt }}
              </p>
            </div>
            
            <!-- Blogger -->
            <div class="flex items-center">
              <!-- Blogger img -->
              <div class="flex-shrink-0">
                <img 
                  class="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full border-2" 
                  :class="post.authorBorder"
                  :src="post.authorImage"
                  :alt="post.author"
                />
              </div>
              
              <!-- Blogger details -->
              <div class="ml-3 md:ml-4 flex-1">
                <!-- Blogger name -->
                <div class="font-semibold text-gray-900 text-xs md:text-base">
                  <h6>{{ post.author }}</h6>
                </div>
                <!-- Blog date -->
                <div class="text-xs md:text-xs text-gray-500">
                  <p>{{ post.date }} · {{ post.readTime }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="text-center mt-8 md:mt-12">
          <button class="bg-green-500 text-xs hover:bg-green-600 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full transition-colors inline-flex items-center group">
            Voir tous les articles du blog
            <ArrowRight class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="bg-gradient-to-r from-green-500 to-blue-600 py-12 md:py-20 newsletter-section">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 scale-in" :class="{ 'visible': newsletterVisible }">
          <h2 class="text-xl md:text-xl lg:text-xl font-bold text-white mb-4">
            Restez connecté à la nutrition africaine
          </h2>
          <p class="text-white/90 text-base md:text-sm mb-6 md:mb-8 max-w-2xl mx-auto">
            Recevez chaque semaine nos meilleurs conseils nutritionnels, recettes traditionnelles revisitées et actualités santé adaptées à votre mode de vie africain.
          </p>
          
          <!-- Newsletter Form -->
          <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email"
              placeholder="Votre adresse email"
              class="flex-1 text-xs px-4 md:px-6 py-3 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-900 placeholder-gray-500"
            />
            <button class="bg-white text-xs text-green-600 font-semibold px-6 md:px-8 py-3 rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap">
              S'abonner gratuitement
            </button>
          </div>
          
          <p class="text-white/70 text-xs md:text-xs mt-4">
            Plus de 15 000 Africains nous font déjà confiance. Pas de spam, désabonnement en un clic.
          </p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12 md:py-16 footer-section">
      <div class="max-w-7xl mx-auto px-4 fade-in-up" :class="{ 'visible': footerVisible }">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Company Info -->
          <div class="lg:col-span-2">
            <img src="../../../assets/images/ireti/logoireti.png" alt="" style="width: 150px;">
            <!-- <h3 class="text-xl md:text-2xl font-bold text-green-400 mb-4">Ireti Nutrition</h3> -->
            <p class="text-gray-300 mb-6 max-w-md text-xs md:text-base">
              La première plateforme africaine d'éducation nutritionnelle adaptée aux réalités locales. Nous accompagnons dans votre transformation nutritionnelle avec des solutions authentiques et scientifiquement prouvées.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <span class="sr-only">Facebook</span>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <span class="sr-only">Twitter</span>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <span class="sr-only">Instagram</span>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-sm font-semibold mb-4">Menu</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-300 hover:text-green-400 transition-colors text-sm md:text-base">Accueil</a></li>
              <li><a href="#" class="text-gray-300 hover:text-green-400 transition-colors text-sm md:text-base">Notre mission</a></li>
              <li><a href="#" class="text-gray-300 hover:text-green-400 transition-colors text-sm md:text-base">Nos services</a></li>
              <li><a href="#" class="text-gray-300 hover:text-green-400 transition-colors text-sm md:text-base">Blog</a></li>
              <li><a href="#" class="text-gray-300 hover:text-green-400 transition-colors text-sm md:text-base">Nous contacter</a></li>
            </ul>
          </div>

          <!-- Services -->
          <div>
            <h4 class="text-sm font-semibold mb-4">Nos services</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-300 hover:text-green-400 transition-colors text-sm md:text-base">Consultation et suivi nutritionnel</a></li>
              <li><a href="#" class="text-gray-300 hover:text-green-400 transition-colors text-sm md:text-base">Programme alimentaire</a></li>
              <li><a href="#" class="text-gray-300 hover:text-green-400 transition-colors text-sm md:text-base">Éducation nutritionnelle</a></li>
              <li><a href="#" class="text-gray-300 hover:text-green-400 transition-colors text-sm md:text-base">Ireti Store</a></li>
              <li><a href="#" class="text-gray-300 hover:text-green-400 transition-colors text-sm md:text-base">Suivi personnalisé</a></li>
            </ul>
          </div>
        </div>

        <!-- Bottom Footer -->
        <div class="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Ireti Nutrition. Tous droits réservés.
          </p>
          <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
            <a href="#" class="text-gray-400 hover:text-green-400 text-sm transition-colors">Politique de confidentialité</a>
            <a href="#" class="text-gray-400 hover:text-green-400 text-sm transition-colors">Conditions d'utilisation</a>
            <a href="#" class="text-gray-400 hover:text-green-400 text-sm transition-colors">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { 
  ChevronDown,
  User,
  Heart,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Check,
  ArrowRight,
  Calendar,
  FileText,
  BookOpen,
  ShoppingBag,
  Activity,
  CreditCard
} from 'lucide-vue-next'
import img1 from '../../../assets/images/ireti/b1.jpg'
import img2 from '../../../assets/images/ireti/b2.jpg'
import img3 from '../../../assets/images/ireti/b3.jpg'
import img4 from '../../../assets/images/ireti/b4.jpg'
import img5 from '../../../assets/images/ireti/b5.jpg'
import img6 from '../../../assets/images/ireti/b6.jpg'
import im1 from '../../../assets/images/ireti/c1.png'
import im2 from '../../../assets/images/ireti/c2.png'
import im3 from '../../../assets/images/ireti/c3.png'
import im4 from '../../../assets/images/ireti/c4.png'
import im5 from '../../../assets/images/ireti/c5.png'

// Reactive data
const currentSlide = ref(0)
const mobileMenuOpen = ref(false)

// Hero slides data
const heroSlides = ref([
  {
    title: "Première plateforme africaine d'éducation nutritionnelle adaptée aux réalités locales",
    buttonText: "Prenez rendez-vous"
  },
  {
    title: "Découvrez une nutrition authentique qui respecte vos traditions culinaires africaines",
    buttonText: "Nos services"
  },
  {
    title: "Rejoignez plus de 15 000 Africains qui transforment leur santé avec nos conseils experts",
    buttonText: "Commencer maintenant"
  }
])

// Premium articles data
const premiumArticles = ref([
  {
    id: 1,
    title: "Alimentation traditionnelle africaine",
    description: "Guide complet des bienfaits nutritionnels",
    category: "Nutrition",
    price: "2500 CFA",
    bgColor: "bg-green-500",
    priceColor: "text-green-500",
    image: im2
  },
  {
    id: 2,
    title: "Programme minceur africain",
    description: "Plan de 30 jours avec suivi personnalisé",
    category: "Minceur",
    price: "3500 CFA",
    bgColor: "bg-blue-500",
    priceColor: "text-blue-500",
    image: im4
  },
  {
    id: 3,
    title: "Gestion nutritionnelle du diabète",
    description: "Conseils et recettes adaptées aux diabétiques",
    category: "Diabète",
    price: "4000 CFA",
    bgColor: "bg-orange-500",
    priceColor: "text-orange-500",
    image: im5
  },
  {
    id: 4,
    title: "Nutrition pour la croissance",
    description: "Guide alimentaire enfants 0-12 ans",
    category: "Enfants",
    price: "3000 CFA",
    bgColor: "bg-purple-500",
    priceColor: "text-purple-500",
    image: im4
  },
  {
    id: 5,
    title: "Nutrition et performance sportive",
    description: "Optimisez vos résultats avec l'alimentation africaine",
    category: "Sport",
    price: "2800 CFA",
    bgColor: "bg-teal-500",
    priceColor: "text-teal-500",
    image: im5
  },
  {
    id: 6,
    title: "Nutrition pendant la grossesse",
    description: "Guide complet 9 mois pour futures mamans",
    category: "Grossesse",
    price: "3800 CFA",
    bgColor: "bg-pink-500",
    priceColor: "text-pink-500",
    image: im2
  }
])

// Blog posts data
const blogPosts = ref([
  {
    id: 1,
    title: "Les bienfaits des légumes-feuilles africains pour votre santé",
    excerpt: "Découvrez comment les épinards africains, le gombo et autres légumes traditionnels peuvent transformer votre alimentation et améliorer votre santé de manière naturelle grâce à leurs propriétés nutritionnelles exceptionnelles.",
    category: "Nutrition",
    tagStyle: "bg-green-100 text-green-800",
    author: "Dr. Amina Koné",
    authorImage: "data:image/jpeg;base64,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",
    authorBorder: "border-green-200",
    date: "15 Jan 2024",
    readTime: "8 min de lecture",
    image: img2
  },
  {
    id: 2,
    title: "Comment préparer vos repas de la semaine en 2 heures",
    excerpt: "Apprenez les techniques de meal prep adaptées aux saveurs africaines pour gagner du temps tout en maintenant une alimentation équilibrée et savoureuse. Recettes pratiques et conseils de conservation inclus.",
    category: "Conseils",
    tagStyle: "bg-blue-100 text-blue-800",
    author: "Chef Ibrahim Diallo",
    authorImage: "data:image/jpeg;base64,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",
    authorBorder: "border-blue-200",
    date: "12 Jan 2024",
    readTime: "6 min de lecture",
    image: img3
  },
  {
    id: 3,
    title: "Éduquer ses enfants à une alimentation saine dès le plus jeune âge",
    excerpt: "Les bases d'une alimentation équilibrée pour les enfants africains : comment introduire les fruits, les légumes et les céréales complètes de manière ludique et encourager de bonnes habitudes alimentaires durables.",
    category: "Famille",
    tagStyle: "bg-purple-100 text-purple-800",
    author: "Mme Fatou Diop",
    authorImage: "data:image/jpeg;base64,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",
    authorBorder: "border-purple-200",
    date: "10 Jan 2024",
    readTime: "7 min de lecture",
    image: img5
  },
  {
    id: 4,
    title: "Les épices africaines : des alliés santé méconnus",
    excerpt: "Explorez les propriétés thérapeutiques du gingembre, du curcuma, du piment et d'autres épices traditionnelles africaines pour renforcer votre système immunitaire et améliorer votre digestion naturellement.",
    category: "Remèdes",
    tagStyle: "bg-orange-100 text-orange-800",
    author: "Maître Ousmane Ba",
    authorImage: "data:image/jpeg;base64,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",
    authorBorder: "border-orange-200",
    date: "8 Jan 2024",
    readTime: "12 min de lecture",
    image: img6
  },
  {
    id: 5,
    title: "Nutrition sportive : adapter son alimentation à l'entraînement",
    excerpt: "Optimisez vos performances sportives avec des aliments locaux riches en nutriments. Découvrez les meilleures combinaisons pour l'énergie, la récupération et l'endurance selon les traditions alimentaires africaines.",
    category: "Sport",
    tagStyle: "bg-red-100 text-red-800",
    author: "Coach Mariama Traoré",
    authorImage: "data:image/jpeg;base64,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",
    authorBorder: "border-red-200",
    date: "8 Jan 2024",
    readTime: "10 min de lecture",
    image: img4
  },
  {
    id: 6,
    title: "Bien vieillir grâce à une alimentation adaptée après 60 ans",
    excerpt: "Les besoins nutritionnels évoluent avec l'âge. Découvrez comment adapter votre alimentation pour maintenir votre vitalité et prévenir les maladies liées au vieillissement en utilisant les ressources nutritionnelles africaines.",
    category: "Seniors",
    tagStyle: "bg-teal-100 text-teal-800",
    author: "Dr. Mamadou Camara",
    authorImage: "data:image/jpeg;base64,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",
    authorBorder: "border-teal-200",
    date: "5 Jan 2024",
    readTime: "14 min de lecture",
    image: img1
  }
])

let autoSlideInterval = null

// Animation states for timeline
const timelineVisible = ref(false)
const step1Visible = ref(false)
const step2Visible = ref(false)
const step3Visible = ref(false)
const step4Visible = ref(false)

// Animation states for scroll animations
const aboutSectionVisible = ref(false)
const servicesSectionVisible = ref(false)
const articlesVisible = ref(false)
const blogVisible = ref(false)
const newsletterVisible = ref(false)
const footerVisible = ref(false)

// Service cards animation states
const serviceCard1Visible = ref(false)
const serviceCard2Visible = ref(false)
const serviceCard3Visible = ref(false)
const serviceCard4Visible = ref(false)

// Article cards animation states
const articleCards = ref([false, false, false, false, false, false])
const blogCards = ref([false, false, false, false, false, false])

// Methods
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % heroSlides.value.length
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? heroSlides.value.length - 1 : currentSlide.value - 1
}

const goToSlide = (index) => {
  currentSlide.value = index
}

const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
  }
}

// Intersection Observer for all scroll animations
const setupScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target
        
        // About section
        if (target.classList.contains('about-section')) {
          aboutSectionVisible.value = true
        }
        
        // Services section
        if (target.classList.contains('services-section')) {
          servicesSectionVisible.value = true
          // Animate service cards with progressive delay
          setTimeout(() => serviceCard1Visible.value = true, 200)
          setTimeout(() => serviceCard2Visible.value = true, 400)
          setTimeout(() => serviceCard3Visible.value = true, 600)
          setTimeout(() => serviceCard4Visible.value = true, 800)
        }
        
        // Timeline section
        if (target.classList.contains('timeline-section')) {
          timelineVisible.value = true
          setTimeout(() => step1Visible.value = true, 300)
          setTimeout(() => step2Visible.value = true, 600)
          setTimeout(() => step3Visible.value = true, 900)
          setTimeout(() => step4Visible.value = true, 1200)
        }
        
        // Articles section
        if (target.classList.contains('articles-section')) {
          articlesVisible.value = true
          // Animate article cards progressively
          articleCards.value.forEach((_, index) => {
            setTimeout(() => {
              articleCards.value[index] = true
            }, index * 150)
          })
        }
        
        // Blog section
        if (target.classList.contains('blog-section')) {
          blogVisible.value = true
          // Animate blog cards progressively
          blogCards.value.forEach((_, index) => {
            setTimeout(() => {
              blogCards.value[index] = true
            }, index * 150)
          })
        }
        
        // Newsletter section
        if (target.classList.contains('newsletter-section')) {
          newsletterVisible.value = true
        }
        
        // Footer section
        if (target.classList.contains('footer-section')) {
          footerVisible.value = true
        }
      }
    })
  }, observerOptions)

  // Observe all sections
  const sections = [
    '.about-section',
    '.services-section', 
    '.timeline-section',
    '.articles-section',
    '.blog-section',
    '.newsletter-section',
    '.footer-section'
  ]

  sections.forEach(selector => {
    const element = document.querySelector(selector)
    if (element) observer.observe(element)
  })
}

// Lifecycle
onMounted(() => {
  startAutoSlide()
  setupScrollAnimations()
})

onUnmounted(() => {
  stopAutoSlide()
})
</script>

<style scoped>
/* Custom gradient for the hero section */
.bg-gradient-to-r {
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%);
}

/* Smooth transitions */
* {
  transition: all 0.3s ease;
}

/* Ensure proper image sizing */
img {
  max-height: 80vh;
  width: auto;
}

/* Speech bubble animation */
.speech-bubble {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* Timeline animations */
.timeline-step {
  transform: translateX(-20px);
  opacity: 0;
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.timeline-step.visible {
  transform: translateX(0);
  opacity: 1;
}

.timeline-icon {
  transform: scale(0) rotate(180deg);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.timeline-icon.visible {
  transform: scale(1) rotate(0deg);
}

/* Pulse animation for icons */
@keyframes pulse-green {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
  }
}

.timeline-icon.visible {
  animation: pulse-green 2s infinite;
}

/* Smooth line drawing animation */
.timeline-line {
  height: 0;
  transition: height 1s ease-out;
}

.timeline-line.visible {
  height: 100%;
}

/* Line clamp utility for text truncation */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Newsletter section gradient */
.bg-gradient-to-r {
  background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
}

/* Glassmorphism effect */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* Hover effects for cards */
.hover\:shadow-2xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.hover\:-translate-y-2:hover {
  transform: translateY(-0.5rem);
}

/* Social media icons hover effects */
.hover\:bg-green-600:hover {
  background-color: #059669;
}

/* Button group hover effects */
.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}

.bg-class {
  background-image: url('../../../assets//images/ireti/backg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
}

/* Scroll animations */
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}

.fade-in-left {
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-in-left.visible {
  opacity: 1;
  transform: translateX(0);
}

.fade-in-right {
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-in-right.visible {
  opacity: 1;
  transform: translateX(0);
}

.scale-in {
  opacity: 0;
  transform: scale(0.9);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.scale-in.visible {
  opacity: 1;
  transform: scale(1);
}

.slide-in-bottom {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-in-bottom.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Staggered animations */
.stagger-1 { transition-delay: 0.1s; }
.stagger-2 { transition-delay: 0.2s; }
.stagger-3 { transition-delay: 0.3s; }
.stagger-4 { transition-delay: 0.4s; }
.stagger-5 { transition-delay: 0.5s; }
.stagger-6 { transition-delay: 0.6s; }
</style>
