<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation Header -->
    <nav class="bg-white shadow-sm px-4 py-3">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <!-- Navigation Links -->
        <div class="flex items-center space-x-8">
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
        <div class="flex items-center space-x-4">
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
          <span class="text-green-500 font-medium">0 CFA</span>
        </div>
      </div>
    </nav>

    <!-- Hero Section with Carousel -->
    <section class="relative bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 min-h-screen flex items-center overflow-hidden">
      <!-- Navigation Arrows -->
      <button 
        @click="prevSlide" 
        class="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 text-white hover:bg-white/10 rounded-full transition-colors"
      >
        <ChevronLeft class="h-8 w-8" />
      </button>
      <button 
        @click="nextSlide"
        class="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 text-white hover:bg-white/10 rounded-full transition-colors"
      >
        <ChevronRight class="h-8 w-8" />
      </button>

      <div class="max-w-7xl mx-auto px-4 py-20 flex items-center justify-between w-full">
        <!-- Left Side - Characters Image -->
        <div class="flex-1 flex justify-center">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iret.PNG-3r5NSCdu4UaGDm4RSuk5bWpB9g2aDb.png" 
            alt="Équipe de nutritionnistes africains" 
            class="max-w-full h-auto object-contain"
          />
        </div>

        <!-- Right Side - Hero Content Carousel -->
        <div class="flex-1 max-w-2xl pl-8">
          <div class="relative overflow-hidden">
            <!-- Slide Container -->
            <div 
              class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
              <!-- Slide 1 -->
              <div class="w-full flex-shrink-0">
                <h1 class="text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                  Première plateforme africaine d'éducation nutritionnelle adaptée aux réalités africaines.
                </h1>
                <button class="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors">
                  Prenez rendez-vous
                </button>
              </div>

              <!-- Slide 2 -->
              <div class="w-full flex-shrink-0">
                <h1 class="text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                  Découvrez une nutrition adaptée à votre culture et vos habitudes alimentaires.
                </h1>
                <button class="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors">
                  Nos services
                </button>
              </div>

              <!-- Slide 3 -->
              <div class="w-full flex-shrink-0">
                <h1 class="text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                  Rejoignez des milliers d'Africains qui transforment leur santé grâce à nos conseils.
                </h1>
                <button class="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors">
                  Commencer maintenant
                </button>
              </div>
            </div>
          </div>

          <!-- Slide Indicators -->
          <div class="flex space-x-3 mt-8">
            <button
              v-for="(slide, index) in slides"
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
    <section class="bg-gray-50 py-20">
      <div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <!-- Left Side - Doctor Illustration with Speech Bubble -->
        <div class="flex-1 relative">
          <div class="flex justify-center">
            <!-- Doctor Character -->
            <div class="relative">
              <!-- Speech Bubble -->
              <div class="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white border-4 border-cyan-400 rounded-3xl px-8 py-4 shadow-lg">
                <div class="text-center">
                  <div class="text-xl font-bold text-gray-800">Bienvenue /</div>
                  <div class="text-xl font-bold text-gray-800">KARIBU</div>
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
              <div class="w-80 h-96 relative">
                <!-- Head -->
                <div class="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-amber-800 rounded-full"></div>
                <!-- Hair -->
                <div class="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-gray-900 rounded-full"></div>
                <!-- Glasses -->
                <div class="absolute top-12 left-1/2 transform -translate-x-1/2 w-12 h-6 border-2 border-gray-700 rounded-full bg-transparent"></div>
                <div class="absolute top-12 left-1/2 transform -translate-x-1/2 -translate-x-3 w-5 h-5 border-2 border-gray-700 rounded-full bg-white/20"></div>
                <div class="absolute top-12 left-1/2 transform -translate-x-1/2 translate-x-3 w-5 h-5 border-2 border-gray-700 rounded-full bg-white/20"></div>
                
                <!-- White Coat -->
                <div class="absolute top-24 left-1/2 transform -translate-x-1/2 w-32 h-48 bg-white rounded-t-3xl shadow-lg">
                  <!-- Coat details -->
                  <div class="absolute top-4 left-4 w-2 h-16 bg-gray-200"></div>
                  <div class="absolute top-4 right-4 w-2 h-16 bg-gray-200"></div>
                  <!-- Pocket -->
                  <div class="absolute top-8 left-6 w-20 h-8 bg-gray-100 rounded"></div>
                </div>
                
                <!-- Arms -->
                <div class="absolute top-32 left-8 w-8 h-24 bg-white rounded-full transform -rotate-12"></div>
                <div class="absolute top-32 right-8 w-8 h-24 bg-white rounded-full transform rotate-12"></div>
                <!-- Hands -->
                <div class="absolute top-52 left-4 w-6 h-6 bg-amber-800 rounded-full"></div>
                <div class="absolute top-52 right-4 w-6 h-6 bg-amber-800 rounded-full"></div>
                
                <!-- Blue Pants -->
                <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-32 bg-blue-600 rounded-b-lg"></div>
                
                <!-- Red Shoes -->
                <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-x-6 w-12 h-8 bg-red-600 rounded-lg"></div>
                <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-x-6 w-12 h-8 bg-red-600 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side - Content -->
        <div class="flex-1 pl-12">
          <div class="max-w-2xl">
            <!-- Section Title -->
            <h3 class="text-green-500 font-semibold text-lg mb-4 uppercase tracking-wide">
              À PROPOS D'IRETI
            </h3>
            
            <!-- Main Heading -->
            <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Nous offrons nos meilleurs services
            </h2>
            
            <!-- Description -->
            <p class="text-gray-600 text-lg leading-relaxed mb-8">
              Add Your Heading text here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <!-- Services List -->
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <Check class="h-4 w-4 text-white" />
                </div>
                <p class="text-gray-700 text-lg">
                  Assistance d'urgence 24 heures sur 24 Appelez-nous
                </p>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <Check class="h-4 w-4 text-white" />
                </div>
                <p class="text-gray-700 text-lg">
                  Nous nous engageons à fournir des services de santé
                </p>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <Check class="h-4 w-4 text-white" />
                </div>
                <p class="text-gray-700 text-lg">
                  Connaître réellement les véritables besoins et attentes des patients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="bg-gray-50 py-20">
      <div class="max-w-7xl mx-auto px-4">
        <!-- Section Title -->
        <h2 class="text-4xl font-bold text-gray-900 text-center mb-16">
          Nos Services de Santé
        </h2>
        
        <!-- Services Grid - 4 cards in a single row with hover effects -->
        <div class="grid grid-cols-4 gap-6 mb-16">
          <!-- Service 1 -->
          <div class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-2xl">
            <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-br from-green-400 to-blue-500 transition-all duration-300 group-hover:scale-[10]"></span>
            <div class="relative z-10 mx-auto max-w-md">
              <span class="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-green-400 to-blue-500 transition-all duration-300 group-hover:bg-green-400">
                <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <User class="h-6 w-6 text-green-500" />
                </div>
              </span>
              <div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <h3 class="text-lg font-semibold text-green-500 transition-all duration-300 group-hover:text-white">
                  Suivi nutritionnel personnel
                </h3>
              </div>
              <div class="pt-5 text-base font-semibold leading-7">
                <p>
                  <a href="#" class="text-green-500 transition-all duration-300 group-hover:text-white inline-flex items-center">
                    En savoir plus
                    <ArrowRight class="ml-2 h-4 w-4" />
                  </a>
                </p>
              </div>
            </div>
          </div>

          <!-- Service 2 -->
          <div class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-2xl">
            <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-br from-green-400 to-blue-500 transition-all duration-300 group-hover:scale-[10]"></span>
            <div class="relative z-10 mx-auto max-w-md">
              <span class="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-green-400 to-blue-500 transition-all duration-300 group-hover:bg-green-400">
                <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <FileText class="h-6 w-6 text-green-500" />
                </div>
              </span>
              <div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <h3 class="text-lg font-semibold text-green-500 transition-all duration-300 group-hover:text-white">
                  Obtenir un programme alimentaire
                </h3>
              </div>
              <div class="pt-5 text-base font-semibold leading-7">
                <p>
                  <a href="#" class="text-green-500 transition-all duration-300 group-hover:text-white inline-flex items-center">
                    En savoir plus
                    <ArrowRight class="ml-2 h-4 w-4" />
                  </a>
                </p>
              </div>
            </div>
          </div>

          <!-- Service 3 -->
          <div class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-2xl">
            <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-br from-green-400 to-blue-500 transition-all duration-300 group-hover:scale-[10]"></span>
            <div class="relative z-10 mx-auto max-w-md">
              <span class="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-green-400 to-blue-500 transition-all duration-300 group-hover:bg-green-400">
                <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <BookOpen class="h-6 w-6 text-green-500" />
                </div>
              </span>
              <div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <h3 class="text-lg font-semibold text-green-500 transition-all duration-300 group-hover:text-white">
                  Éducation Nutritionnel (Blog et Podcast)
                </h3>
              </div>
              <div class="pt-5 text-base font-semibold leading-7">
                <p>
                  <a href="#" class="text-green-500 transition-all duration-300 group-hover:text-white inline-flex items-center">
                    En savoir plus
                    <ArrowRight class="ml-2 h-4 w-4" />
                  </a>
                </p>
              </div>
            </div>
          </div>

          <!-- Service 4 -->
          <div class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-2xl">
            <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-br from-green-400 to-blue-500 transition-all duration-300 group-hover:scale-[10]"></span>
            <div class="relative z-10 mx-auto max-w-md">
              <span class="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-green-400 to-blue-500 transition-all duration-300 group-hover:bg-green-400">
                <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <ShoppingBag class="h-6 w-6 text-green-500" />
                </div>
              </span>
              <div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <h3 class="text-lg font-semibold text-green-500 transition-all duration-300 group-hover:text-white">
                  Ireti Store
                </h3>
              </div>
              <div class="pt-5 text-base font-semibold leading-7">
                <p>
                  <a href="#" class="text-green-500 transition-all duration-300 group-hover:text-white inline-flex items-center">
                    En savoir plus
                    <ArrowRight class="ml-2 h-4 w-4" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Appointment Section - exactly like screenshot -->
        <div class="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between max-w-5xl mx-auto">
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <Calendar class="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 class="text-xl font-semibold text-green-500 mb-1">
                Ouvert aux rendez-vous
              </h3>
              <p class="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
          <button class="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full transition-colors">
            Prendre rendez-vous
          </button>
        </div>
      </div>
    </section>

    <!-- How Ireti Works Section -->
    <section class="bg-white py-20 timeline-section">
      <div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <!-- Left Side - Content -->
        <div class="flex-1 max-w-2xl pr-12">
          <!-- Section Title -->
          <h3 class="text-green-500 font-semibold text-lg mb-4 uppercase tracking-wide">
            COMMENT TRAVAILLE IRETI ?
          </h3>
          
          <!-- Main Heading -->
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Un répertoire complet pour vos soins de santé
          </h2>
          
          <!-- Description -->
          <p class="text-gray-600 text-lg leading-relaxed mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                  class="text-xl font-semibold text-gray-900 mb-2 transition-all duration-700 ease-out delay-200"
                  :class="step1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
                >
                  Prendre rendez-vous
                </h4>
                <p 
                  class="text-gray-600 leading-relaxed transition-all duration-700 ease-out delay-300"
                  :class="step1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
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
                  class="text-xl font-semibold text-gray-900 mb-2 transition-all duration-700 ease-out delay-400"
                  :class="step2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
                >
                  Effectuer un bilan de santé
                </h4>
                <p 
                  class="text-gray-600 leading-relaxed transition-all duration-700 ease-out delay-500"
                  :class="step2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
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
                  class="text-xl font-semibold text-gray-900 mb-2 transition-all duration-700 ease-out delay-600"
                  :class="step3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
                >
                  Effectuer un traitement
                </h4>
                <p 
                  class="text-gray-600 leading-relaxed transition-all duration-700 ease-out delay-700"
                  :class="step3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
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
                  class="text-xl font-semibold text-gray-900 mb-2 transition-all duration-700 ease-out delay-800"
                  :class="step4Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
                >
                  Prescription et paiement
                </h4>
                <p 
                  class="text-gray-600 leading-relaxed transition-all duration-700 ease-out delay-900"
                  :class="step4Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side - Woman Illustration -->
        <div class="flex-1 flex justify-center">
          <div class="relative">
            <!-- Woman Character -->
            <div class="w-80 h-96 relative">
              <!-- Head -->
              <div class="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-amber-800 rounded-full"></div>
              <!-- Hair -->
              <div class="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-gray-900 rounded-full"></div>
              
              <!-- Orange Top -->
              <div class="absolute top-24 left-1/2 transform -translate-x-1/2 w-28 h-20 bg-orange-500 rounded-t-2xl">
                <!-- Neckline -->
                <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-orange-600 rounded-b-full"></div>
              </div>
              
              <!-- Green Apron/Dress -->
              <div class="absolute top-40 left-1/2 transform -translate-x-1/2 w-32 h-40 bg-green-600 rounded-t-3xl">
                <!-- Apron strings -->
                <div class="absolute top-2 left-2 w-1 h-8 bg-green-700"></div>
                <div class="absolute top-2 right-2 w-1 h-8 bg-green-700"></div>
                <!-- Apron pocket -->
                <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-green-700 rounded"></div>
              </div>
              
              <!-- Arms -->
              <div class="absolute top-32 left-6 w-6 h-20 bg-orange-500 rounded-full transform -rotate-12"></div>
              <div class="absolute top-32 right-6 w-6 h-20 bg-orange-500 rounded-full transform rotate-12"></div>
              
              <!-- Hands -->
              <div class="absolute top-48 left-2 w-5 h-5 bg-amber-800 rounded-full"></div>
              <div class="absolute top-48 right-2 w-5 h-5 bg-amber-800 rounded-full"></div>
              
              <!-- Wooden Spoon in right hand -->
              <div class="absolute top-44 right-0 w-1 h-16 bg-amber-700 transform rotate-45 origin-bottom"></div>
              <div class="absolute top-40 right-2 w-4 h-4 bg-amber-600 rounded-full"></div>
              
              <!-- Green Skirt -->
              <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-28 h-24 bg-green-500 rounded-b-2xl"></div>
              
              <!-- Blue Shoes -->
              <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-x-8 w-12 h-8 bg-blue-600 rounded-lg"></div>
              <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-x-8 w-12 h-8 bg-blue-600 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Articles Section -->
    <section class="bg-gray-50 py-20">
      <div class="max-w-7xl mx-auto px-4">
        <!-- Section Title -->
        <div class="text-center mb-16">
          <h3 class="text-green-500 font-semibold text-lg mb-4 uppercase tracking-wide">
            ARTICLES RÉCENTS
          </h3>
          <h2 class="text-4xl font-bold text-gray-900 mb-6">
            Nos derniers conseils nutritionnels
          </h2>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto">
            Découvrez nos articles premium rédigés par des nutritionnistes experts pour améliorer votre santé
          </p>
        </div>

        <!-- Articles Grid -->
        <div class="p-1 flex flex-wrap items-center justify-center">
          <!-- Article 1 -->
          <div class="flex-shrink-0 m-6 relative overflow-hidden bg-green-500 rounded-lg max-w-xs shadow-lg group hover:shadow-2xl transition-all duration-300">
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
                  src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                   alt="Nutrition africaine">
            </div>
            <div class="relative text-white px-6 pb-6 mt-6">
              <span class="block opacity-75 -mb-1">Nutrition</span>
              <div class="flex justify-between items-start">
                <div class="flex-1 mr-3">
                  <span class="block font-semibold text-lg leading-tight">Alimentation traditionnelle africaine</span>
                  <p class="text-sm opacity-75 mt-1">Guide complet des bienfaits nutritionnels</p>
                </div>
                <span class="block bg-white rounded-full text-green-500 text-xs font-bold px-3 py-2 leading-none flex items-center whitespace-nowrap">2500 CFA</span>
              </div>
            </div>
          </div>

          <!-- Article 2 -->
          <div class="flex-shrink-0 m-6 relative overflow-hidden bg-blue-500 rounded-lg max-w-xs shadow-lg group hover:shadow-2xl transition-all duration-300">
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
                   src="https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png" 
                   alt="Plan de perte de poids">
            </div>
            <div class="relative text-white px-6 pb-6 mt-6">
              <span class="block opacity-75 -mb-1">Minceur</span>
              <div class="flex justify-between items-start">
                <div class="flex-1 mr-3">
                  <span class="block font-semibold text-lg leading-tight">Programme minceur personnalisé</span>
                  <p class="text-sm opacity-75 mt-1">Plan de 30 jours avec suivi</p>
                </div>
                <span class="block bg-white rounded-full text-blue-500 text-xs font-bold px-3 py-2 leading-none flex items-center whitespace-nowrap">3500 CFA</span>
              </div>
            </div>
          </div>

          <!-- Article 3 -->
          <div class="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg group hover:shadow-2xl transition-all duration-300">
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
                   src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" 
                   alt="Gestion du diabète">
            </div>
            <div class="relative text-white px-6 pb-6 mt-6">
              <span class="block opacity-75 -mb-1">Diabète</span>
              <div class="flex justify-between items-start">
                <div class="flex-1 mr-3">
                  <span class="block font-semibold text-lg leading-tight">Gestion nutritionnelle du diabète</span>
                  <p class="text-sm opacity-75 mt-1">Conseils et recettes adaptées</p>
                </div>
                <span class="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center whitespace-nowrap">4000 CFA</span>
              </div>
            </div>
          </div>

          <!-- Article 4 -->
          <div class="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg group hover:shadow-2xl transition-all duration-300">
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
                   src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" 
                   alt="Nutrition infantile">
            </div>
            <div class="relative text-white px-6 pb-6 mt-6">
              <span class="block opacity-75 -mb-1">Enfants</span>
              <div class="flex justify-between items-start">
                <div class="flex-1 mr-3">
                  <span class="block font-semibold text-lg leading-tight">Nutrition pour la croissance</span>
                  <p class="text-sm opacity-75 mt-1">Guide alimentaire 0-12 ans</p>
                </div>
                <span class="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center whitespace-nowrap">3000 CFA</span>
              </div>
            </div>
          </div>

          <!-- Article 5 -->
          <div class="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg group hover:shadow-2xl transition-all duration-300">
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
                src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" 

                   alt="Nutrition sportive">
            </div>
            <div class="relative text-white px-6 pb-6 mt-6">
              <span class="block opacity-75 -mb-1">Sport</span>
              <div class="flex justify-between items-start">
                <div class="flex-1 mr-3">
                  <span class="block font-semibold text-lg leading-tight">Nutrition et performance</span>
                  <p class="text-sm opacity-75 mt-1">Optimisez vos résultats sportifs</p>
                </div>
                <span class="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center whitespace-nowrap">2800 CFA</span>
              </div>
            </div>
          </div>

          <!-- Article 6 -->
          <div class="flex-shrink-0 m-6 relative overflow-hidden bg-pink-500 rounded-lg max-w-xs shadow-lg group hover:shadow-2xl transition-all duration-300">
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
                   src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" 
                   alt="Nutrition grossesse">
            </div>
            <div class="relative text-white px-6 pb-6 mt-6">
              <span class="block opacity-75 -mb-1">Grossesse</span>
              <div class="flex justify-between items-start">
                <div class="flex-1 mr-3">
                  <span class="block font-semibold text-lg leading-tight">Nutrition pendant la grossesse</span>
                  <p class="text-sm opacity-75 mt-1">Guide complet 9 mois</p>
                </div>
                <span class="block bg-white rounded-full text-pink-500 text-xs font-bold px-3 py-2 leading-none flex items-center whitespace-nowrap">3800 CFA</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="text-center mt-12">
          <button class="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-colors inline-flex items-center">
            Voir tous les articles
            <ArrowRight class="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
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

// Reactive data
const currentSlide = ref(0)
const slides = ref([
  {
    title: "Première plateforme africaine d'éducation nutritionnelle adaptée aux réalités africaines.",
    buttonText: "Prenez rendez-vous"
  },
  {
    title: "Découvrez une nutrition adaptée à votre culture et vos habitudes alimentaires.",
    buttonText: "Nos services"
  },
  {
    title: "Rejoignez des milliers d'Africains qui transforment leur santé grâce à nos conseils.",
    buttonText: "Commencer maintenant"
  }
])

let autoSlideInterval = null

// Animation states for timeline
const timelineVisible = ref(false)
const step1Visible = ref(false)
const step2Visible = ref(false)
const step3Visible = ref(false)
const step4Visible = ref(false)
const timelineRef = ref(null)

// Methods
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? slides.value.length - 1 : currentSlide.value - 1
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

// Intersection Observer for timeline animations
const setupTimelineAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start timeline animation sequence
          timelineVisible.value = true
          
          // Animate steps progressively
          setTimeout(() => step1Visible.value = true, 300)
          setTimeout(() => step2Visible.value = true, 600)
          setTimeout(() => step3Visible.value = true, 900)
          setTimeout(() => step4Visible.value = true, 1200)
        }
      })
    },
    {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    }
  )

  // Observer the timeline section
  const timelineSection = document.querySelector('.timeline-section')
  if (timelineSection) {
    observer.observe(timelineSection)
  }
}

// Lifecycle
onMounted(() => {
  startAutoSlide()
  setupTimelineAnimations()
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
</style>
