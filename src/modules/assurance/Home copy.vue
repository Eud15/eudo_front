<template>
  <div class="min-h-screen bg-white">
    <!-- Fixed Header with Enhanced Login -->
    <header class="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 transition-shadow duration-300 hover:shadow-md">
      <nav class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center transform transition-transform duration-300 hover:scale-105">
            <img src="../../assets/images/assurance/kangu-primary.png" alt="logo" style="width: 80px;">
            
          </div>

          <!-- Navigation Menu -->
          <div class="hidden md:flex items-center gap-8">
            <button class="flex items-center gap-1 text-gray-700 hover:text-[#1c4b42] text-sm font-medium transition-all duration-200 hover:translate-y-[-2px]">
              Nos solutions
              <ChevronDown class="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <button class="flex items-center gap-1 text-gray-700 hover:text-[#1c4b42] text-sm font-medium transition-all duration-200 hover:translate-y-[-2px]">
              Pourquoi AssurApp ?
              
            </button>
            <button class="flex items-center gap-1 text-gray-700 hover:text-[#1c4b42] text-sm font-medium transition-all duration-200 hover:translate-y-[-2px]">
              Ressources
             
            </button>
            <button class="flex items-center gap-1 text-gray-700 hover:text-[#1c4b42] text-sm font-medium transition-all duration-200 hover:translate-y-[-2px]">
              À propos
              
            </button>
            
            <!-- Enhanced Login Buttons -->
            <div class="flex items-center gap-3 ml-4 border-l pl-4 border-gray-200">
              <a href="#" class="text-gray-700 hover:text-[#1c4b42] text-sm font-medium transition-all duration-200 hover:translate-y-[-2px] flex items-center gap-2">
                <User class="w-4 h-4" />
                Espace Assuré
              </a>
              <a href="#" class="bg-[#1c4b42] hover:bg-[#009342] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2">
                <Building2 class="w-4 h-4" />
                Espace Entreprise
              </a>
            </div>
          </div>

          <!-- Mobile Menu Button -->
          <button class="md:hidden text-gray-700 hover:text-[#1c4b42] transition-colors duration-200">
            <Menu class="w-6 h-6" />
          </button>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="relative w-full h-screen min-h-[600px] overflow-hidden pt-16">
      <div class="absolute inset-0">
        <img 
          src="../../assets/images/assurance/m3.png" 
          alt="AssurApp Bénin - Assurance Santé Digitale"
          class="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
      </div>

      <div class="relative z-10 h-full flex items-center pt-20">
        <div class="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl pt-24 mt-36">
          <div class="max-w-xl animate-fade-in">
            <h1 class="text-white text-2xl md:text-3xl font-bold leading-tight mb-8 animate-slide-up">
              L'assurance santé 100% digitale qui simplifie la vie au Bénin
            </h1>

            <div class="flex flex-col sm:flex-row gap-4 mb-6">
              <button class="bg-[#b7f400] hover:bg-[#009342] text-[#000000] font-semibold px-8 py-4 rounded-full transition-all duration-300 text-base transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 group">
                <Zap class="w-5 h-5 group-hover:animate-pulse" />
                Devis instantané
              </button>
              <button class="bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 text-base border-2 border-white transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2">
                <Calendar class="w-5 h-5" />
                Demander une démo
              </button>
            </div>

            <a href="#" class="inline-flex items-center gap-3 text-white text-sm font-medium hover:opacity-80 transition-all duration-200 group">
              <span>Découvrez notre plateforme en vidéo</span>
              <span class="flex items-center justify-center w-10 h-10 bg-white rounded-full group-hover:scale-110 transition-transform duration-300">
                <Play class="w-4 h-4 text-[#1c4b42] ml-0.5" fill="currentColor" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners Section -->
    <section class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center mb-8">
          <div class="flex items-center justify-center h-12 transition-all duration-300 hover:scale-110">
            <span class="text-gray-400 text-2xl font-light tracking-wider">SOBEBRA</span>
          </div>
          <div class="flex items-center justify-center h-12 transition-all duration-300 hover:scale-110">
            <span class="text-gray-400 text-xl font-semibold">MTN Bénin</span>
          </div>
          <div class="flex items-center justify-center h-12 transition-all duration-300 hover:scale-110">
            <span class="text-gray-400 text-lg font-semibold">Moov Africa</span>
          </div>
          <div class="flex items-center justify-center h-12 transition-all duration-300 hover:scale-110">
            <span class="text-gray-400 text-xl font-serif tracking-widest">ISOCEL</span>
          </div>
          <div class="flex items-center justify-center h-12 transition-all duration-300 hover:scale-110">
            <span class="text-gray-300 text-lg font-light">SUNU Assurances</span>
          </div>
          <div class="flex items-center justify-center h-12 transition-all duration-300 hover:scale-110">
            <span class="text-gray-400 text-xl font-bold tracking-wider">CFAO</span>
          </div>
          <div class="flex items-center justify-center h-12 transition-all duration-300 hover:scale-110">
            <span class="text-gray-300 text-xl font-light tracking-widest">BENIN CONTROL</span>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mb-12">
          <div class="flex items-center justify-center h-12 transition-all duration-300 hover:scale-110">
            <span class="text-gray-300 text-sm font-light tracking-wider">PETROLIN</span>
          </div>
          <div class="flex items-center justify-center h-12 transition-all duration-300 hover:scale-110">
            <span class="text-gray-400 text-3xl font-serif italic">SONEB</span>
          </div>
          <div class="flex items-center justify-center h-12 transition-all duration-300 hover:scale-110">
            <span class="text-gray-400 text-2xl font-serif italic">SBEE</span>
          </div>
          <div class="flex items-center justify-center h-12 transition-all duration-300 hover:scale-110">
            <span class="text-gray-400 text-xl font-bold">CANAL+ Bénin</span>
          </div>
        </div>

        <p class="text-center text-gray-600 text-sm animate-fade-in">
          Plus de 45 000 assurés et 850 entreprises béninoises font confiance à AssurApp pour leur santé
        </p>
      </div>
    </section>

    <!-- Healthcare Crisis Section -->
    <section class="bg-white py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="mb-6 animate-slide-up">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            L'accès aux soins de santé reste un défi au Bénin
          </h2>
          <p class="text-gray-600 text-base max-w-4xl leading-relaxed">
            Coûts élevés, manque de structures de qualité, procédures complexes... Vos employés ont du mal à accéder aux soins et cela impacte la productivité de votre entreprise.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="relative aspect-[4/3] overflow-hidden">
              <img 
                src="../../assets/images/assurance/m1.png" 
                alt="Accès aux soins au Bénin"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div class="bg-[#f0e9e0] rounded-2xl p-6 max-w-[280px] absolute top-6 left-6 animate-bounce-slow">
                <div class="text-5xl font-bold mb-2">68%</div>
                <p class="text-sm leading-relaxed max-w-[200px]">
                  des Béninois renoncent à des soins faute de moyens financiers
                </p>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-bold text-gray-900 mb-2">
                L'accès aux soins de qualité reste limité
              </h3>
              <p class="text-gray-500 text-sm flex items-center gap-2">
                <TrendingUp class="w-4 h-4" />
                Ministère de la Santé, 2024
              </p>
            </div>
          </div>

          <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="relative aspect-[4/3] overflow-hidden">
              <img 
                src="../../assets/images/assurance/m1.png" 
                alt="Coûts des soins"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div class="absolute bottom-0 left-6 right-6 mb-6">
                <div class="bg-[#f0e9e0] rounded-2xl p-6 animate-fade-in">
                  <div class="text-5xl font-bold text-gray-900 mb-2">250 000 FCFA</div>
                  <p class="text-gray-700 text-sm leading-relaxed">
                    C'est le coût moyen d'une hospitalisation au Bénin, soit plus de 6 mois de SMIG
                  </p>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-bold text-gray-900 mb-2">
                Les frais médicaux pèsent lourd sur les ménages
              </h3>
              <p class="text-gray-500 text-sm flex items-center gap-2">
                <DollarSign class="w-4 h-4" />
                Enquête INSAE, 2024
              </p>
            </div>
          </div>

          <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="relative aspect-[4/3] overflow-hidden">
              <img 
                src="../../assets/images/assurance/m1.png" 
                alt="Impact sur les entreprises"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div class="absolute top-6 right-6">
                <div class="bg-[#f0e9e0] rounded-2xl p-6 max-w-[280px] animate-pulse-slow">
                  <div class="text-3xl font-bold text-gray-900 mb-1">3,2 millions FCFA</div>
                  <p class="text-gray-700 text-sm leading-relaxed">
                    perdus par employé/an en absentéisme et baisse de productivité
                  </p>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-bold text-gray-900 mb-2">
                L'absence de couverture santé coûte cher aux entreprises
              </h3>
              <p class="text-gray-500 text-sm flex items-center gap-2">
                <BarChart3 class="w-4 h-4" />
                Étude AssurApp Bénin, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- NEW: Subscriber/Company Focus Section -->
    <section class="bg-gradient-to-br from-[#1c4b42] to-[#009342] py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12 animate-slide-up">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Plateforme Souscripteur : Pilotez votre assurance santé en toute sérénité
          </h2>
          <p class="text-white/90 text-lg max-w-3xl mx-auto">
            Interface mobile et web intuitive pour les RH, responsables finance et dirigeants d'entreprise
          </p>
        </div>

        <!-- Main Features Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <!-- Feature 1: Gestion des Assurés -->
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6">
              <Users class="w-8 h-8 text-[#1c4b42]" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">
              Gestion des Assurés
            </h3>
            <p class="text-white/80 text-base leading-relaxed mb-4">
              Liste complète du personnel assuré par famille avec recherche et filtres avancés
            </p>
            <ul class="text-white/70 text-sm space-y-2">
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0" />
                Incorporations, retraits, suspensions
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0" />
                Suivi de l'avancement des demandes
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0" />
                Distinction principal/ayants droit
              </li>
            </ul>
          </div>

          <!-- Feature 2: Alertes Automatiques -->
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6">
              <Bell class="w-8 h-8 text-[#1c4b42]" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">
              Alertes en Temps Réel
            </h3>
            <p class="text-white/80 text-base leading-relaxed mb-4">
              Notifications automatiques pour une gestion proactive
            </p>
            <ul class="text-white/70 text-sm space-y-2">
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0" />
                Ayants droit atteignant 21 ans
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0" />
                Assurés principaux à 60 ans
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0" />
                Échéances et retards de paiement
              </li>
            </ul>
          </div>

          <!-- Feature 3: Demandes d'Accord -->
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6">
              <FileText class="w-8 h-8 text-[#1c4b42]" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">
              Demandes d'Accord
            </h3>
            <p class="text-white/80 text-base leading-relaxed mb-4">
              Consultation et gestion des accords préalables
            </p>
            <ul class="text-white/70 text-sm space-y-2">
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0" />
                Visualisation des demandes assurés
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0" />
                Initiation de demandes exceptionnelles
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0" />
                Historique accords/refus/statuts
              </li>
            </ul>
          </div>

          <!-- Feature 4: Suivi Contractuel -->
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6">
              <DollarSign class="w-8 h-8 text-[#1c4b42]" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">
              Suivi Contractuel
            </h3>
            <p class="text-white/80 text-base leading-relaxed mb-4">
              Gestion financière et échéanciers simplifiés
            </p>
            <ul class="text-white/70 text-sm space-y-2">
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0" />
                Montants primes TTC & paiements
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0" />
                Échéanciers et validité contrat
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0" />
                Taux de consommation vs prime nette
              </li>
            </ul>
          </div>

          <!-- Feature 5: Statistiques & Analytics -->
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6">
              <BarChart3 class="w-8 h-8 text-[#1c4b42]" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">
              Statistiques Avancées
            </h3>
            <p class="text-white/80 text-base leading-relaxed mb-4">
              Analytics détaillées et exports de données
            </p>
            <ul class="text-white/70 text-sm space-y-2">
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0" />
                Consommations par famille/collège
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0" />
                Stats par actes (consultations, etc.)
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0" />
                Exports PDF/Excel & graphiques
              </li>
            </ul>
          </div>

          <!-- Feature 6: Garanties & Réseau -->
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6">
              <MapPin class="w-8 h-8 text-[#1c4b42]" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">
              Garanties & Réseau de Soins
            </h3>
            <p class="text-white/80 text-base leading-relaxed mb-4">
              Informations complètes sur la couverture
            </p>
            <ul class="text-white/70 text-sm space-y-2">
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0" />
                Garanties incluses/exclues & plafonds
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0" />
                Indicateurs de consommation
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0" />
                Réseau partenaires + géolocalisation
              </li>
            </ul>
          </div>
        </div>

        <!-- Security & Compliance Badge -->
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-12 max-w-4xl mx-auto">
          <div class="flex flex-col md:flex-row items-center justify-center gap-6 text-white">
            <div class="flex items-center gap-3">
              <Shield class="w-8 h-8" />
              <div>
                <p class="font-bold text-sm">Authentification MFA</p>
                <p class="text-xs text-white/70">Sécurité renforcée</p>
              </div>
            </div>
            <div class="hidden md:block w-px h-12 bg-white/20"></div>
            <div class="flex items-center gap-3">
              <Lock class="w-8 h-8" />
              <div>
                <p class="font-bold text-sm">Conformité RGPD</p>
                <p class="text-xs text-white/70">Protection des données santé</p>
              </div>
            </div>
            <div class="hidden md:block w-px h-12 bg-white/20"></div>
            <div class="flex items-center gap-3">
              <Smartphone class="w-8 h-8" />
              <div>
                <p class="font-bold text-sm">Multi-plateforme</p>
                <p class="text-xs text-white/70">iOS, Android, Web</p>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA for Subscribers -->
        <div class="text-center">
          <a href="#" class="inline-flex items-center gap-3 bg-[#b7f400] hover:bg-white text-[#000000] px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <Building2 class="w-6 h-6" />
            Accéder à l'Espace Souscripteur
            <ArrowRight class="w-5 h-5" />
          </a>
          <p class="text-white/80 text-sm mt-4">
            Pas encore inscrit ? <a href="#" class="underline hover:text-white font-semibold">Demandez une démo gratuite</a>
          </p>
        </div>
      </div>
    </section>

    <!-- Solutions Section -->
    <section class="bg-gray-50 py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="mb-12 animate-slide-up">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Des solutions adaptées à chaque entreprise béninoise
          </h2>
          <p class="text-gray-600 text-lg max-w-3xl">
            AssurApp accompagne les TPE, PME et grandes entreprises du Bénin avec une plateforme 100% digitale pour simplifier la gestion de l'assurance santé.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div class="aspect-[4/3] overflow-hidden">
              <img 
                src="../../assets/images/assurance/m1.png" 
                alt="Startups & TPE au Bénin"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div class="p-6 pb-16 relative">
              <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Rocket class="w-5 h-5 text-[#1c4b42]" />
                Startups & TPE
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                Vous lancez votre activité ? Vous avez <span class="font-semibold">moins de 10 employés</span> ? Démarrez avec AssurApp en quelques clics depuis votre smartphone.
              </p>
              <button class="absolute bottom-6 right-6 w-10 h-10 bg-[#1c4b42] hover:bg-[#009342] rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                <ArrowRight class="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div class="aspect-[4/3] overflow-hidden">
              <img 
                src="../../assets/images/assurance/m1.png" 
                alt="PME béninoises"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div class="p-6 pb-16 relative">
              <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Building2 class="w-5 h-5 text-[#1c4b42]" />
                PME
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                Vous avez <span class="font-semibold">entre 10 et 100 employés</span> ? Gérez tout depuis notre plateforme : adhésions, remboursements, statistiques en temps réel.
              </p>
              <button class="absolute bottom-6 right-6 w-10 h-10 bg-[#1c4b42] hover:bg-[#009342] rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                <ArrowRight class="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div class="aspect-[4/3] overflow-hidden">
              <img 
                src="../../assets/images/assurance/m1.png" 
                alt="Grandes entreprises"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div class="p-6 pb-16 relative">
              <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Building class="w-5 h-5 text-[#1c4b42]" />
                Grandes Entreprises
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                <span class="font-semibold">Plus de 100 employés</span> ? Solution sur-mesure avec API d'intégration à votre SIRH et accompagnement dédié.
              </p>
              <button class="absolute bottom-6 right-6 w-10 h-10 bg-[#1c4b42] hover:bg-[#009342] rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                <ArrowRight class="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div class="aspect-[4/3] overflow-hidden">
              <img 
                src="../../assets/images/assurance/m1.png"
                alt="Travailleurs indépendants"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div class="p-6 pb-16 relative">
              <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <User class="w-5 h-5 text-[#1c4b42]" />
                Indépendants
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                Freelances, consultants, commerçants : protégez-vous et votre famille avec une <span class="font-semibold">assurance flexible et abordable</span>.
              </p>
              <button class="absolute bottom-6 right-6 w-10 h-10 bg-[#1c4b42] hover:bg-[#009342] rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                <ArrowRight class="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- NEW: Teleconsultation & Appointment Section -->
    <section class="bg-white py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Left: Content -->
          <div class="animate-slide-up">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Consultez un médecin sans vous déplacer
            </h2>
            
            <p class="text-gray-700 text-lg leading-relaxed mb-8">
              Avec AssurApp, accédez à des consultations médicales à distance et prenez rendez-vous avec des spécialistes en quelques clics.
            </p>

            <!-- Features List -->
            <div class="space-y-4 mb-8">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-[#1c4b42]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Video class="w-6 h-6 text-[#1c4b42]" />
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 mb-1">Téléconsultation 24/7</h4>
                  <p class="text-gray-600 text-sm">
                    Connectez-vous avec un médecin généraliste disponible à tout moment via vidéo
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-[#1c4b42]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar class="w-6 h-6 text-[#1c4b42]" />
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 mb-1">Prise de rendez-vous en ligne</h4>
                  <p class="text-gray-600 text-sm">
                    Réservez vos consultations chez nos partenaires (hôpitaux, cliniques, spécialistes)
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-[#1c4b42]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText class="w-6 h-6 text-[#1c4b42]" />
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 mb-1">Ordonnances numériques</h4>
                  <p class="text-gray-600 text-sm">
                    Recevez vos ordonnances directement dans l'app et commandez vos médicaments
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-[#1c4b42]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Bell class="w-6 h-6 text-[#1c4b42]" />
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 mb-1">Rappels automatiques</h4>
                  <p class="text-gray-600 text-sm">
                    Ne manquez plus jamais un rendez-vous avec nos notifications SMS et push
                  </p>
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <a href="#" class="bg-[#1c4b42] hover:bg-[#009342] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2">
                <Video class="w-5 h-5" />
                Démarrer une téléconsultation
              </a>
              <a href="#" class="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full font-semibold border-2 border-gray-200 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <Calendar class="w-5 h-5" />
                Prendre rendez-vous
              </a>
            </div>
          </div>

          <!-- Right: Visual -->
          <div class="relative">
            <!-- Decorative elements -->
            <div class="absolute -top-8 -right-8 w-32 h-32 bg-[#b7f400]/30 rounded-full opacity-50 blur-2xl"></div>
            <div class="absolute -bottom-8 -left-8 w-40 h-40 bg-[#009342]/30 rounded-full opacity-50 blur-2xl"></div>
            
            <!-- Main mockup -->
            <div class="relative z-10 bg-gradient-to-br from-[#1c4b42] to-[#009342] rounded-3xl p-8 shadow-2xl">
              <div class="bg-white rounded-2xl p-6 mb-6">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-16 h-16 rounded-full overflow-hidden">
                    <img src="../../assets/images/assurance/m2.png" alt="Médecin" class="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900">Dr. Kofi Mensah</h4>
                    <p class="text-sm text-gray-600">Médecin généraliste</p>
                    <div class="flex items-center gap-1 mt-1">
                      <Star class="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star class="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star class="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star class="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star class="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span class="text-xs text-gray-600 ml-1">(4.9)</span>
                    </div>
                  </div>
                </div>

                <div class="space-y-3">
                  <div class="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span class="text-sm text-gray-700">Disponibilité</span>
                    <span class="text-sm font-semibold text-[#009342] flex items-center gap-1">
                      <Circle class="w-2 h-2 fill-[#009342]" />
                      Disponible maintenant
                    </span>
                  </div>
                  
                  <div class="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span class="text-sm text-gray-700">Durée</span>
                    <span class="text-sm font-semibold text-gray-900">20-30 min</span>
                  </div>
                  
                  <div class="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span class="text-sm text-gray-700">Coût</span>
                    <span class="text-sm font-semibold text-[#1c4b42]">100% Remboursé</span>
                  </div>
                </div>

                <button class="w-full mt-6 bg-[#1c4b42] hover:bg-[#009342] text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                  <Video class="w-5 h-5" />
                  Consulter maintenant
                </button>
              </div>

              <div class="text-white text-center">
                <p class="text-sm opacity-90">
                   Plus de 250 médecins partenaires
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Wellbeing Benefits Section -->
    <section class="bg-white py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="mb-8 animate-slide-up">
              <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Des employés en bonne santé = Une entreprise performante
              </h2>
              <p class="text-gray-600 text-sm mb-4">
                82% des employés béninois considèrent l'assurance santé comme un critère essentiel dans le choix de leur employeur (Étude AssurApp, 2024)
              </p>
              <p class="text-gray-900 text-base font-medium">
                Investissez dans la santé de vos équipes et boostez votre performance.
              </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div class="bg-[#f0e9e0] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div class="flex items-center gap-2 mb-4">
                  <span class="text-sm font-semibold text-gray-900">Fidélisation</span>
                  <Heart class="w-5 h-5 text-red-500 animate-pulse" />
                </div>
                <div class="text-4xl font-bold text-gray-900 mb-2">4x</div>
                <p class="text-gray-700 text-sm leading-relaxed">
                  plus de chances de retenir vos meilleurs talents
                </p>
              </div>

              <div class="bg-[#f0e9e0] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div class="flex items-center gap-2 mb-4">
                  <span class="text-sm font-semibold text-gray-900">Productivité</span>
                  <TrendingUp class="w-5 h-5 text-[#009342]" />
                </div>
                <div class="text-4xl font-bold text-gray-900 mb-2">+35%</div>
                <p class="text-gray-700 text-sm leading-relaxed">
                  d'augmentation de la productivité avec une bonne couverture santé
                </p>
              </div>

              <div class="bg-[#f0e9e0] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div class="flex items-center gap-2 mb-4">
                  <span class="text-sm font-semibold text-gray-900">Absentéisme</span>
                  <CalendarCheck class="w-5 h-5 text-[#1c4b42]" />
                </div>
                <div class="text-4xl font-bold text-gray-900 mb-2">-45%</div>
                <p class="text-gray-700 text-sm leading-relaxed">
                  de réduction de l'absentéisme lié aux problèmes de santé
                </p>
              </div>

              <div class="relative rounded-2xl overflow-hidden group">
                <img 
                  src="../../assets/images/assurance/m1.png" 
                  alt="Témoignage client"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                <div class="absolute inset-0 p-6 flex flex-col justify-end">
                  <p class="text-white text-sm leading-relaxed mb-3">
                    "Depuis qu'on a adopté AssurApp, <span class="font-semibold">nos employés sont plus sereins</span> et notre turnover a chuté de 60%."
                  </p>
                  <p class="text-white text-xs mb-4">
                    Koffi M., DRH d'une entreprise de 200 employés à Cotonou
                  </p>
                  <button class="absolute bottom-6 right-6 w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                    <ArrowRight class="w-5 h-5 text-[#1c4b42]" />
                  </button>
                </div>
              </div>
            </div>

            <p class="text-gray-500 text-xs mt-4 flex items-center gap-2">
              <FileText class="w-3 h-3" />
              Source: Études AssurApp Bénin & INSAE
            </p>
          </div>

          <div class="flex items-center justify-center animate-float">
            <img 
              src="../../assets/images/assurance/m2.png" 
              alt="Mascotte AssurApp"
              class="w-full max-w-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- HR Investment Section -->
    <section class="bg-white py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12 animate-slide-up">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            La solution digitale qui révolutionne l'assurance santé au Bénin
          </h2>
          <p class="text-gray-600 text-sm mb-2">
            Gestion 100% en ligne. Remboursements instantanés. Zéro paperasse.
          </p>
          <p class="text-gray-600 text-sm flex items-center justify-center gap-2">
            <Smartphone class="w-4 h-4" />
            Tout depuis votre smartphone ou ordinateur.
          </p>
        </div>

        <div class="rounded-[3rem] overflow-hidden bg-gradient-to-b from-[#f0e9e0] via-[#f0e9e0]/80 to-[#f0e9e0]/60 p-12 md:p-16">
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div class="animate-slide-up">
              <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Zap class="w-8 h-8 text-[#b7f400]" />
                Gestion automatisée et instantanée
              </h3>
              <p class="text-gray-700 text-base">
                Adhésions, modifications, remboursements... Tout se fait en quelques clics depuis votre tableau de bord digital.
              </p>
            </div>

            <div class="relative">
              <div class="absolute top-0 right-0 bg-[#1c4b42] text-white rounded-2xl p-4 shadow-lg max-w-xs z-10 animate-slide-in-right">
                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle class="w-5 h-5" />
                  </div>
                  <div>
                    <p class="font-semibold text-sm mb-1">Kouassi est maintenant assuré !</p>
                    <p class="text-xs text-gray-300">Inscription finalisée en 3 minutes.</p>
                  </div>
                </div>
              </div>

              <div class="mt-24 bg-white rounded-2xl p-4 shadow-lg max-w-sm animate-slide-in-left">
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 bg-[#b7f400]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail class="w-5 h-5 text-[#1c4b42]" />
                  </div>
                  <div>
                    <p class="font-semibold text-sm text-gray-900 mb-1">8 nouveaux employés invités</p>
                    <p class="text-xs text-gray-600">Ils peuvent s'inscrire via SMS ou WhatsApp</p>
                  </div>
                </div>
              </div>

              <div class="mt-6 bg-white/50 rounded-xl p-4 backdrop-blur-sm animate-pulse-slow">
                <div class="space-y-2">
                  <div class="h-2 bg-[#1c4b42] rounded w-3/4"></div>
                  <div class="h-2 bg-[#009342] rounded w-1/2"></div>
                  <div class="h-2 bg-[#b7f400] rounded w-2/3"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="animate-slide-up">
              <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Smartphone class="w-8 h-8 text-[#1c4b42]" />
                Remboursements via Mobile Money
              </h3>
              
              <p class="text-gray-700 text-base leading-relaxed mb-4">
                Prenez votre facture en photo, envoyez-la via l'app et recevez votre remboursement directement sur MTN Money, Moov Money ou Celtiis Money.
              </p>
              
              <p class="text-gray-700 text-base leading-relaxed mb-4 flex items-center gap-2">
                <Clock class="w-5 h-5 text-[#1c4b42]" />
                Délai moyen de remboursement : <span class="font-bold">moins de 2 heures</span>
              </p>
              
              <p class="text-gray-900 text-base font-semibold mb-2 flex items-center gap-2">
                <Star class="w-5 h-5 text-yellow-500 fill-yellow-500" />
                92% de nos assurés reçoivent leur remboursement le jour même
              </p>
              
              <p class="text-gray-500 text-sm">
                Enquête satisfaction AssurApp Bénin, Janvier 2025
              </p>
            </div>

            <div class="relative flex items-center justify-center">
              <div class="relative z-10 animate-float">
                <img 
                  src="../../assets/images/assurance/mascotte.png" 
                  alt="Utilisation de l'app AssurApp"
                  class="rounded-3xl shadow-2xl transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div class="absolute right-0 top-1/2 -translate-y-1/2 z-20 animate-slide-in-right">
                <div class="w-[280px] bg-white rounded-[3rem] shadow-2xl overflow-hidden border-8 border-gray-900">
                  <div class="bg-white pt-2 pb-1">
                    <div class="flex justify-center">
                      <div class="w-32 h-6 bg-gray-900 rounded-full"></div>
                    </div>
                  </div>

                  <div class="bg-gray-50 p-4 h-[500px] flex flex-col">
                    <div class="flex items-center gap-3 mb-4 bg-white p-3 rounded-xl shadow-sm">
                      <div class="w-10 h-10 bg-[#1c4b42] rounded-full flex items-center justify-center">
                        <Stethoscope class="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p class="text-sm font-semibold text-gray-900">Dr Adjovi</p>
                        <p class="text-xs text-gray-500 flex items-center gap-1">
                          <Circle class="w-2 h-2 fill-[#009342] text-[#009342]" />
                          En ligne
                        </p>
                      </div>
                    </div>

                    <div class="flex-1 space-y-3">
                      <div class="flex justify-end">
                        <div class="bg-[#1c4b42] text-white rounded-2xl rounded-tr-sm p-3 max-w-[200px]">
                          <p class="text-xs leading-relaxed">
                            Bonjour, j'ai besoin d'un remboursement pour ma consultation d'hier
                          </p>
                        </div>
                      </div>

                      <div class="flex justify-start">
                        <div class="bg-white rounded-2xl rounded-tl-sm p-3 max-w-[200px] shadow-sm">
                          <p class="text-xs text-gray-700 leading-relaxed">
                            Bonjour ! Envoyez-moi simplement la photo de votre facture 📸
                          </p>
                        </div>
                      </div>

                      <div class="flex justify-end">
                        <div class="bg-[#1c4b42] text-white rounded-2xl rounded-tr-sm p-3 max-w-[200px]">
                          <div class="bg-white/20 rounded-lg p-2 mb-2">
                            <FileText class="w-8 h-8 text-white mx-auto" />
                          </div>
                          <p class="text-xs">Facture_consultation.jpg</p>
                        </div>
                      </div>

                      <div class="flex justify-start">
                        <div class="bg-white rounded-2xl rounded-tl-sm p-3 max-w-[200px] shadow-sm">
                          <p class="text-xs text-gray-700 leading-relaxed">
                            Parfait ! Vous recevrez 15 000 FCFA sur votre MTN Money dans 1h ✅
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="mt-4 bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
                      <Camera class="w-4 h-4 text-[#1c4b42]" />
                      <input 
                        type="text" 
                        placeholder="Votre message" 
                        class="flex-1 text-xs bg-transparent outline-none"
                        disabled
                      />
                      <Mic class="w-4 h-4 text-[#1c4b42]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- App Section with Download Links -->
    <section class="bg-white py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div class="mb-12 animate-slide-up">
              <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Tout dans une seule application
              </h2>
              <p class="text-gray-700 text-base leading-relaxed flex items-center gap-2 mb-6">
                <Star class="w-5 h-5 text-yellow-500 fill-yellow-500" />
                4,8/5 selon nos assurés sur Google Play et App Store
              </p>

              <!-- Download Buttons -->
              <div class="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="https://apps.apple.com/app/assurapp" 
                  target="_blank"
                  class="bg-black hover:bg-gray-900 text-white px-6 py-4 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3"
                >
                  <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div class="text-left">
                    <p class="text-xs text-white/80">Télécharger sur</p>
                    <p class="text-lg font-semibold">App Store</p>
                  </div>
                </a>

                <a 
                  href="https://play.google.com/store/apps/details?id=com.assurapp" 
                  target="_blank"
                  class="bg-black hover:bg-gray-900 text-white px-6 py-4 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3"
                >
                  <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                  </svg>
                  <div class="text-left">
                    <p class="text-xs text-white/80">Télécharger sur</p>
                    <p class="text-lg font-semibold">Google Play</p>
                  </div>
                </a>
              </div>
            </div>

            <div class="space-y-4">
              <div class="border-t border-gray-200 pt-6 hover:bg-gray-50 transition-colors duration-200 rounded-lg px-4">
                <button class="w-full flex items-start justify-between text-left group">
                  <h3 class="text-xl font-bold text-gray-900 pr-4 flex items-center gap-3">
                    <Zap class="w-6 h-6 text-[#b7f400]" />
                    Remboursements ultra-rapides
                  </h3>
                  <ChevronUp class="w-6 h-6 text-gray-400 flex-shrink-0 transition-transform" />
                </button>
                <div class="mt-4 space-y-4 ml-9">
                  <p class="text-gray-700 text-base leading-relaxed">
                    Photographiez votre facture et recevez votre remboursement sur Mobile Money en quelques heures.
                  </p>
                  <p class="text-gray-900 text-base font-semibold flex items-center gap-2">
                    <Clock class="w-5 h-5 text-[#1c4b42]" />
                    85% des remboursements traités en moins de 3 heures.
                  </p>
                </div>
              </div>

              <div class="border-t border-gray-200 pt-6 hover:bg-gray-50 transition-colors duration-200 rounded-lg px-4">
                <button class="w-full flex items-start justify-between text-left group">
                  <h3 class="text-xl font-bold text-gray-900 pr-4 flex items-center gap-3">
                    <MapPin class="w-6 h-6 text-[#1c4b42]" />
                    Réseau de soins partenaires
                  </h3>
                  <ChevronDown class="w-6 h-6 text-gray-400 flex-shrink-0 transition-transform" />
                </button>
              </div>

              <div class="border-t border-gray-200 pt-6 hover:bg-gray-50 transition-colors duration-200 rounded-lg px-4">
                <button class="w-full flex items-start justify-between text-left group">
                  <h3 class="text-xl font-bold text-gray-900 pr-4 flex items-center gap-3">
                    <MessageCircle class="w-6 h-6 text-[#1c4b42]" />
                    Support client 7j/7
                  </h3>
                  <ChevronDown class="w-6 h-6 text-gray-400 flex-shrink-0 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          <div class="relative animate-float">
            <div class="absolute -top-8 -left-8 w-24 h-24 bg-[#b7f400]/50 rounded-full opacity-80 blur-sm animate-pulse-slow"></div>
            <div class="absolute top-20 -right-12 w-32 h-32 bg-[#009342]/40 rounded-full opacity-70 blur-sm animate-pulse-slow"></div>
            <div class="absolute bottom-32 -left-16 w-28 h-28 bg-[#b7f400]/60 rounded-full opacity-75 blur-sm animate-pulse-slow"></div>
            <div class="absolute bottom-12 right-8 w-20 h-20 bg-[#1c4b42]/40 rounded-full opacity-80 blur-sm animate-pulse-slow"></div>

            <div class="relative z-10 rounded-3xl overflow-hidden">
              <img 
                src="../../assets/images/assurance/m6.png" 
                alt="Application AssurApp"
                class="w-full h-auto rounded-3xl transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div class="absolute bottom-8 left-8 right-8 z-20 animate-slide-up">
              <div class="bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div class="w-12 h-12 bg-[#1c4b42] rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle class="w-6 h-6 text-white" />
                </div>
                
                <div class="flex-1">
                  <div class="flex items-start justify-between">
                    <div>
                      <p class="text-sm font-semibold text-gray-900">Remboursement reçu</p>
                      <p class="text-xs text-gray-600 mt-0.5">15 000 FCFA sur MTN Money</p>
                    </div>
                    <span class="text-xs text-gray-500 ml-2">À l'instant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Customer Service Section -->
    <section class="bg-white py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="relative bg-[#1c4b42] rounded-[3rem] overflow-hidden p-12 md:p-16">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="relative animate-float">
              <div class="relative z-10">
                <img 
                  src="../../assets/images/assurance/m5.png" 
                  alt="Mascotte AssurApp"
                  class="w-full max-w-md mx-auto transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div class="absolute top-8 left-1/4 bg-white rounded-full px-6 py-3 shadow-lg z-20 animate-bounce-slow">
                <span class="text-gray-900 font-medium text-sm flex items-center gap-2">
                  <Zap class="w-4 h-4 text-[#b7f400]" />
                  Rapide
                </span>
              </div>

              <div class="absolute top-32 left-12 bg-white rounded-full px-6 py-3 shadow-lg z-20 animate-bounce-slow" style="animation-delay: 0.2s">
                <span class="text-gray-900 font-medium text-sm flex items-center gap-2">
                  <MessageCircle class="w-4 h-4 text-[#1c4b42]" />
                  À l'écoute
                </span>
              </div>

              <div class="absolute bottom-32 left-8 bg-white rounded-full px-6 py-3 shadow-lg z-20 animate-bounce-slow" style="animation-delay: 0.4s">
                <span class="text-gray-900 font-medium text-sm flex items-center gap-2">
                  <CheckCircle class="w-4 h-4 text-[#009342]" />
                  Efficace
                </span>
              </div>
            </div>

            <div class="relative animate-slide-up">
              <div class="flex items-center gap-2 mb-6">
                <div class="flex -space-x-2">
                  <div class="w-10 h-10 rounded-full bg-gray-300 border-2 border-white overflow-hidden transition-transform duration-300 hover:scale-110">
                    <img src="../../assets/images/assurance/m1.png" alt="Équipe AssurApp" class="w-full h-full object-cover" />
                  </div>
                  <div class="w-10 h-10 rounded-full bg-gray-400 border-2 border-white overflow-hidden transition-transform duration-300 hover:scale-110">
                    <img src="../../assets/images/assurance/m2.png" alt="Équipe AssurApp" class="w-full h-full object-cover" />
                  </div>
                  <div class="w-10 h-10 rounded-full bg-gray-500 border-2 border-white overflow-hidden transition-transform duration-300 hover:scale-110">
                    <img src="../../assets/images/assurance/m3.png" alt="Équipe AssurApp" class="w-full h-full object-cover" />
                  </div>
                  <div class="w-10 h-10 rounded-full bg-gray-600 border-2 border-white overflow-hidden transition-transform duration-300 hover:scale-110">
                    <img src="../../assets/images/assurance/m4.png" alt="Équipe AssurApp" class="w-full h-full object-cover" />
                  </div>
                  <div class="w-10 h-10 rounded-full bg-white border-2 border-white flex items-center justify-center">
                    <span class="text-gray-900 text-xs font-semibold">+25</span>
                  </div>
                </div>
              </div>

              <h2 class="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Un service client disponible et réactif
              </h2>

              <div class="space-y-4 text-white">
                <p class="text-base leading-relaxed flex items-center gap-2">
                  <Phone class="w-5 h-5" />
                  Contactez-nous par WhatsApp, téléphone ou email.
                </p>
                <p class="text-base leading-relaxed flex items-center gap-2">
                  <Clock class="w-5 h-5" />
                  Réponse en moins de 10 minutes en moyenne, 7 jours sur 7.
                </p>
                <p class="text-base leading-relaxed flex items-center gap-2">
                  <Star class="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  Noté 4,7/5 par nos assurés béninois.
                </p>
              </div>

              <div class="absolute -bottom-8 right-0 bg-[#b7f400] rounded-full px-6 py-3 shadow-lg z-20 animate-bounce-slow">
                <span class="text-gray-900 font-medium text-sm flex items-center gap-2">
                  <Heart class="w-4 h-4 text-red-500 fill-red-500" />
                  Bienveillant
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Individuals Section -->
    <section class="bg-white py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div class="mb-12 animate-slide-up">
              <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                AssurApp pour les particuliers
              </h2>
              <p class="text-gray-700 text-base leading-relaxed">
                Que vous soyez retraité, travailleur indépendant ou fonctionnaire, AssurApp vous propose des solutions adaptées à votre situation.
              </p>
            </div>

            <div class="space-y-0">
              <div class="border-t border-gray-200 pt-6 pb-6 hover:bg-gray-50 transition-colors duration-200 rounded-lg px-4">
                <button 
                  @click="activeIndividualTab = 0"
                  class="w-full flex items-start justify-between text-left group mb-4"
                >
                  <h3 class="text-xl font-bold text-gray-900 pr-4 flex items-center gap-3">
                    <Users class="w-6 h-6 text-[#1c4b42]" />
                    Assurance santé retraités
                  </h3>
                  <ChevronUp 
                    class="w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-300" 
                    :class="{ 'rotate-0': activeIndividualTab === 0, 'rotate-180': activeIndividualTab !== 0 }"
                  />
                </button>
                <div v-show="activeIndividualTab === 0" class="space-y-4 ml-9 animate-fade-in">
                  <p class="text-gray-700 text-base leading-relaxed">
                    Profitez de votre retraite en toute sérénité avec AssurApp Sérénité. Couverture complète, tarifs adaptés et gestion 100% digitale.
                  </p>
                  <a href="#" class="inline-flex items-center gap-2 text-[#1c4b42] hover:text-[#009342] font-medium text-base transition-all duration-200 group">
                    <span>Découvrir l'offre retraités</span>
                    <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              <div class="border-t border-gray-200 pt-6 pb-6 hover:bg-gray-50 transition-colors duration-200 rounded-lg px-4">
                <button 
                  @click="activeIndividualTab = 1"
                  class="w-full flex items-start justify-between text-left group"
                >
                  <h3 class="text-xl font-bold text-gray-900 pr-4 flex items-center gap-3">
                    <Briefcase class="w-6 h-6 text-[#1c4b42]" />
                    Travailleurs indépendants
                  </h3>
                  <ChevronUp 
                    class="w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-300" 
                    :class="{ 'rotate-0': activeIndividualTab === 1, 'rotate-180': activeIndividualTab !== 1 }"
                  />
                </button>
                <div v-show="activeIndividualTab === 1" class="space-y-4 mt-4 ml-9 animate-fade-in">
                  <p class="text-gray-700 text-base leading-relaxed">
                    Freelances, commerçants, artisans : protégez-vous avec une assurance flexible qui s'adapte à vos revenus.
                  </p>
                </div>
              </div>

              <div class="border-t border-gray-200 pt-6 pb-6 hover:bg-gray-50 transition-colors duration-200 rounded-lg px-4">
                <button 
                  @click="activeIndividualTab = 2"
                  class="w-full flex items-start justify-between text-left group"
                >
                  <h3 class="text-xl font-bold text-gray-900 pr-4 flex items-center gap-3">
                    <Shield class="w-6 h-6 text-[#1c4b42]" />
                    Fonction publique
                  </h3>
                  <ChevronUp 
                    class="w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-300" 
                    :class="{ 'rotate-0': activeIndividualTab === 2, 'rotate-180': activeIndividualTab !== 2 }"
                  />
                </button>
                <div v-show="activeIndividualTab === 2" class="space-y-4 mt-4 ml-9 animate-fade-in">
                  <p class="text-gray-700 text-base leading-relaxed">
                    Agents de la fonction publique béninoise, bénéficiez d'offres spéciales négociées pour vous.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="rounded-3xl overflow-hidden">
              <img 
                v-if="activeIndividualTab === 0"
                src="../../assets/images/assurance/m1.png" 
                alt="Assurance retraités"
                class="w-full h-auto rounded-3xl transition-all duration-500 transform hover:scale-105"
              />
              <img 
                v-if="activeIndividualTab === 1"
                src="../../assets/images/assurance/m4.png" 
                alt="Travailleurs indépendants"
                class="w-full h-auto rounded-3xl transition-all duration-500 transform hover:scale-105"
              />
              <img 
                v-if="activeIndividualTab === 2"
                src="../../assets/images/assurance/m5.png" 
                alt="Fonction publique"
                class="w-full h-auto rounded-3xl transition-all duration-500 transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="bg-[#1c4b42] py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex justify-center mb-12 animate-slide-up">
          <div class="inline-flex bg-white rounded-full p-1 border-2 border-white">
            <button 
              @click="activeTestimonialView = 'avant'"
              :class="[
                'px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 transform',
                activeTestimonialView === 'avant' 
                  ? 'bg-[#1c4b42] text-white scale-105' 
                  : 'bg-white text-gray-700 hover:text-gray-900 hover:scale-105'
              ]"
            >
              Avant AssurApp
            </button>
            <button 
              @click="activeTestimonialView = 'avec'"
              :class="[
                'px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 transform',
                activeTestimonialView === 'avec' 
                  ? 'bg-[#1c4b42] text-white scale-105' 
                  : 'bg-white text-gray-700 hover:text-gray-900 hover:scale-105'
              ]"
            >
              Avec AssurApp
            </button>
          </div>
        </div>

        <div v-show="activeTestimonialView === 'avant'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-[#009342] rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="text-5xl font-bold text-white mb-4 flex items-center gap-3">
              <AlertCircle class="w-12 h-12" />
              72%
            </div>
            <p class="text-white text-base leading-relaxed">
              des Béninois renoncent à des soins faute de moyens financiers (OMS, 2024)
            </p>
          </div>

          <div class="relative rounded-3xl overflow-hidden group">
            <img 
              src="../../assets/images/assurance/m1.png" 
              alt="Témoignage"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="absolute inset-0 p-8 flex flex-col justify-end">
              <p class="text-white text-lg leading-relaxed mb-4">
                "Avant, quand mon enfant tombait malade, je devais emprunter de l'argent pour payer l'hôpital."
              </p>
              <p class="text-white/80 text-sm mb-4">
                Aïcha, mère de famille à Porto-Novo
              </p>
              <button class="absolute bottom-8 right-8 w-12 h-12 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <ArrowRight class="w-6 h-6 text-gray-900" />
              </button>
            </div>
          </div>

          <div class="bg-[#009342] rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <p class="text-white text-base leading-relaxed mb-6">
              "On passait des heures à gérer les dossiers papier de nos employés. C'était un cauchemar administratif."
            </p>
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-full bg-white/20 overflow-hidden">
                <img src="../../assets/images/assurance/m2.png" alt="Témoignage" class="w-full h-full object-cover" />
              </div>
              <div>
                <p class="text-white font-semibold text-sm">Serge K.</p>
                <p class="text-white/70 text-xs">DRH, entreprise de 80 employés</p>
                <p class="text-white/70 text-xs">Cotonou</p>
              </div>
            </div>
          </div>

          <div class="relative rounded-3xl overflow-hidden group">
            <img 
              src="../../assets/images/assurance/m1.png"
              alt="Témoignage"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="absolute inset-0 p-8 flex flex-col justify-end">
              <p class="text-white text-lg leading-relaxed mb-4">
                "Les remboursements prenaient 3 mois minimum. Parfois, on abandonnait carrément."
              </p>
              <p class="text-white/80 text-sm mb-4">
                Rodrigue, employé dans une PME
              </p>
              <button class="absolute bottom-8 right-8 w-12 h-12 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <ArrowRight class="w-6 h-6 text-gray-900" />
              </button>
            </div>
          </div>

          <div class="bg-[#009342] rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="text-5xl font-bold text-white mb-4 flex items-center gap-3">
              <Clock class="w-12 h-12" />
              6 mois
            </div>
            <p class="text-white text-base leading-relaxed">
              C'est le délai moyen pour obtenir un remboursement avec les assurances traditionnelles au Bénin
            </p>
          </div>

          <div class="relative rounded-3xl overflow-hidden group">
            <img 
              src="../../assets/images/assurance/m1.png" 
              alt="Témoignage"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="absolute inset-0 p-8 flex flex-col justify-end">
              <p class="text-white text-lg leading-relaxed mb-4">
                "L'assurance santé, c'était trop compliqué. Je ne comprenais rien aux formulaires."
              </p>
              <p class="text-white/80 text-sm mb-4">
                Fatou, commerçante à Parakou
              </p>
              <button class="absolute bottom-8 right-8 w-12 h-12 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <ArrowRight class="w-6 h-6 text-gray-900" />
              </button>
            </div>
          </div>
        </div>

        <div v-show="activeTestimonialView === 'avec'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-[#009342] rounded-3xl p-8 flex items-center justify-center min-h-[300px] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="text-center">
              <Sparkles class="w-16 h-16 text-white mx-auto mb-4 animate-pulse" />
              <p class="text-white text-2xl font-bold">
                Découvrez bientôt les témoignages de nos assurés satisfaits !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- NEW: Becotrac References Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Propulsé par Becotrac
          </h3>
          <p class="text-gray-600 text-base">
            Une technologie développée au Bénin, pour les Béninois
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Reference 1 -->
          <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div class="w-16 h-16 bg-[#1c4b42]/10 rounded-2xl flex items-center justify-center mb-6">
              <Shield class="w-8 h-8 text-[#1c4b42]" />
            </div>
            <h4 class="text-lg font-bold text-gray-900 mb-3">
              Sécurité & Conformité
            </h4>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              Infrastructure hébergée localement avec conformité CIMA et respect des normes de protection des données au Bénin
            </p>
            <div class="flex items-center gap-2 text-sm text-gray-500">
              <CheckCircle class="w-4 h-4 text-[#009342]" />
              Certifié ISO 27001
            </div>
          </div>

          <!-- Reference 2 -->
          <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div class="w-16 h-16 bg-[#1c4b42]/10 rounded-2xl flex items-center justify-center mb-6">
              <Zap class="w-8 h-8 text-[#1c4b42]" />
            </div>
            <h4 class="text-lg font-bold text-gray-900 mb-3">
              Innovation Locale
            </h4>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              Becotrac développe des solutions technologiques innovantes adaptées aux réalités du marché béninois depuis 2018
            </p>
            <div class="flex items-center gap-2 text-sm text-gray-500">
              <CheckCircle class="w-4 h-4 text-[#009342]" />
              +5 ans d'expertise
            </div>
          </div>

          <!-- Reference 3 -->
          <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div class="w-16 h-16 bg-[#1c4b42]/10 rounded-2xl flex items-center justify-center mb-6">
              <Users class="w-8 h-8 text-[#1c4b42]" />
            </div>
            <h4 class="text-lg font-bold text-gray-900 mb-3">
              Partenaire de confiance
            </h4>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              Becotrac accompagne plus de 200 entreprises béninoises dans leur transformation digitale
            </p>
            <div class="flex items-center gap-2 text-sm text-gray-500">
              <CheckCircle class="w-4 h-4 text-[#009342]" />
              200+ clients satisfaits
            </div>
          </div>
        </div>

        <!-- Becotrac Logo/Link -->
        <div class="text-center mt-12">
          <a 
            href="https://becotrac.com" 
            target="_blank" 
            class="inline-flex items-center gap-3 text-gray-600 hover:text-[#1c4b42] transition-colors duration-200 group"
          >
            <span class="text-sm font-medium">En savoir plus sur Becotrac</span>
            <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="relative bg-[#f0e9e0] py-32 overflow-hidden">
      <div class="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight animate-slide-up">
          Rejoignez la révolution digitale<br />
          de l'assurance santé au Bénin
        </h2>

        <p class="text-gray-600 text-base mb-8 flex items-center justify-center gap-2 animate-fade-in">
          <Star class="w-5 h-5 text-yellow-500 fill-yellow-500" />
          94% de nos assurés recommandent AssurApp à leur entourage (Janvier 2025)
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <button class="bg-[#1c4b42] hover:bg-[#009342] text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 group">
            <Zap class="w-5 h-5 group-hover:animate-pulse" />
            Obtenir mon devis gratuit
          </button>
          <button class="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 border-2 border-gray-200 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2">
            <Calendar class="w-5 h-5" />
            Planifier une démo
          </button>
        </div>
      </div>

      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl">
        <img 
          src="../../assets/images/assurance/m9.png" 
          alt="Mascotte AssurApp"
          class="w-full h-auto"
        />
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white">
      <!-- App Download Banner -->
      <div class="bg-[#1c4b42] py-6">
        <div class="max-w-7xl mx-auto px-6">
          <div class="flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="text-center md:text-left">
              <h3 class="text-white font-bold text-lg mb-1">Téléchargez l'application AssurApp</h3>
              <p class="text-white/80 text-sm">Gérez votre santé en toute simplicité depuis votre mobile</p>
            </div>
            <div class="flex items-center gap-4">
              <a 
                href="https://apps.apple.com/app/assurapp" 
                target="_blank"
                class="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                App Store
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.assurapp" 
                target="_blank"
                class="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                </svg>
                Google Play
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Footer Content -->
      <div class="max-w-7xl mx-auto px-6 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <!-- Column 1: Logo & Description -->
          <div class="lg:col-span-2">
            <div class="flex items-center mb-6">
              <img src="../../assets/images/assurance/kangu-white.png" alt="logo" style="width: 100px;">
            </div>
            
            <p class="text-gray-400 text-sm leading-relaxed mb-6">
              La première plateforme digitale d'assurance santé au Bénin. Simplifiez vos démarches, protégez votre santé et celle de vos employés avec une solution 100% numérique.
            </p>

            <!-- Social Media Links -->
            <div class="flex items-center gap-4">
              <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-[#1c4b42] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-[#1c4b42] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-[#1c4b42] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-[#1c4b42] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Column 2: Nos Offres -->
          <div>
            <h3 class="text-white font-bold text-base mb-6">Nos Offres</h3>
            <ul class="space-y-3">
              <li>
                <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                  Entreprises
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                  Startups & TPE
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                  PME
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                  Grands Comptes
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                  Travailleurs Indépendants
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                  Retraités
                </a>
              </li>
            </ul>
          </div>

          <!-- Column 3: Ressources -->
          <div>
            <h3 class="text-white font-bold text-base mb-6">Ressources</h3>
            <ul class="space-y-3">
              <li>
                <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                  Centre d'aide
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                  Guides pratiques
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                  Témoignages
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                  Partenaires
                </a>
              </li>
            </ul>
          </div>

          <!-- Column 4: À propos -->
          <div>
            <h3 class="text-white font-bold text-base mb-6">À propos</h3>
            <ul class="space-y-3">
              <li>
                <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                  Notre mission
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                  L'équipe
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                  Carrières
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                  Presse
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Contact Information -->
        <div class="border-t border-gray-800 pt-12 pb-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <!-- Phone -->
            <div class="flex items-start gap-4 group">
              <div class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#1c4b42] transition-colors duration-300">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <h4 class="text-white font-semibold text-sm mb-1">Téléphone</h4>
                <p class="text-gray-400 text-sm">+229 XX XX XX XX</p>
                <p class="text-gray-500 text-xs mt-1">Lun - Ven: 8h - 18h</p>
              </div>
            </div>

            <!-- Email -->
            <div class="flex items-start gap-4 group">
              <div class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#1c4b42] transition-colors duration-300">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h4 class="text-white font-semibold text-sm mb-1">Email</h4>
                <p class="text-gray-400 text-sm">contact@assurapp.bj</p>
                <p class="text-gray-500 text-xs mt-1">Réponse sous 24h</p>
              </div>
            </div>

            <!-- Address -->
            <div class="flex items-start gap-4 group">
              <div class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#1c4b42] transition-colors duration-300">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <h4 class="text-white font-semibold text-sm mb-1">Adresse</h4>
                <p class="text-gray-400 text-sm">Cotonou, Bénin</p>
                <p class="text-gray-500 text-xs mt-1">Quartier des Affaires</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Bar with Becotrac -->
        <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="flex flex-col md:flex-row items-center gap-4">
            <p class="text-gray-500 text-sm">
              © 2025 AssurApp Bénin. Tous droits réservés.
            </p>
            <span class="hidden md:block text-gray-700">|</span>
            <a 
              href="https://becotrac.com" 
              target="_blank" 
              class="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2"
            >
              Propulsé par <span class="font-semibold">Becotrac</span>
              <ArrowRight class="w-3 h-3" />
            </a>
          </div>
          
          <div class="flex items-center gap-6">
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Mentions légales
            </a>
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Politique de confidentialité
            </a>
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              CGU
            </a>
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  ChevronDown, 
  ChevronUp, 
  Menu, 
  Play, 
  Zap, 
  Calendar,
  TrendingUp,
  DollarSign,
  BarChart3,
  Rocket,
  Building2,
  Building,
  User,
  ArrowRight,
  Heart,
  CalendarCheck,
  FileText,
  CheckCircle,
  Mail,
  Clock,
  Star,
  Smartphone,
  Stethoscope,
  Circle,
  Camera,
  Mic,
  MapPin,
  MessageCircle,
  Phone,
  Users,
  Briefcase,
  Shield,
  AlertCircle,
  Sparkles,
  LogIn,
  Video,
  Bell,
  Lock
} from 'lucide-vue-next'

const activeIndividualTab = ref(0)
const activeTestimonialView = ref('avant')
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-slide-up {
  animation: slide-up 0.6s ease-out;
}

.animate-slide-in-right {
  animation: slide-in-right 0.6s ease-out;
}

.animate-slide-in-left {
  animation: slide-in-left 0.6s ease-out;
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}
</style>