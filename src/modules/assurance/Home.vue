<template>
  <div class="min-h-screen bg-white overflow-x-hidden">
    <!-- Fixed Header -->
<header class="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 transition-shadow duration-300 hover:shadow-md">
  <nav class="max-w-7xl mx-auto px-6 py-4">
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center transform transition-transform duration-300 hover:scale-105">
        <img src="../../assets/images/assurance/kangu-primary.png" alt="logo" style="width: 80px;">
      </div>

      <!-- Navigation Menu Desktop -->
      <div class="hidden md:flex items-center gap-8">
        <a href="#fonctionnalites" class="text-gray-700 hover:text-[#1c4b42] text-sm font-medium transition-all duration-200 hover:translate-y-[-2px]">
          Fonctionnalités
        </a>
        <a href="#avantages" class="text-gray-700 hover:text-[#1c4b42] text-sm font-medium transition-all duration-200 hover:translate-y-[-2px]">
          Avantages
        </a>
        
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
      <button 
        @click="toggleMobileMenu"
        class="md:hidden text-gray-700 hover:text-[#1c4b42] transition-colors duration-200"
      >
        <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-down">
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4 space-y-4">
        <a 
          href="#fonctionnalites" 
          @click="toggleMobileMenu"
          class="block text-gray-700 hover:text-[#1c4b42] text-base font-medium py-2"
        >
          Fonctionnalités
        </a>
        <a 
          href="#avantages" 
          @click="toggleMobileMenu"
          class="block text-gray-700 hover:text-[#1c4b42] text-base font-medium py-2"
        >
          Avantages
        </a>
        <a 
          href="#" 
          class="block text-gray-700 hover:text-[#1c4b42] text-base font-medium py-2 flex items-center gap-2"
        >
          <User class="w-4 h-4" />
          Espace Assuré
        </a>
        <a 
          href="#" 
          class="block bg-[#1c4b42] hover:bg-[#009342] text-white px-6 py-3 rounded-full text-base font-semibold text-center"
        >
          Espace Entreprise
        </a>
      </div>
    </transition>
  </nav>
</header>

<!-- Hero section -->
<section class="relative w-full h-screen min-h-[600px] overflow-hidden pt-16">
  <div class="absolute inset-0">
    <img 
      src="../../assets/images/assurance/m3.png" 
      alt="Kangu - Assurance Santé Digitale"
      class="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
  </div>

  <div class="relative z-10 h-full flex items-center pt-20">
    <div class="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 w-full">
      <div class="max-w-4xl animate-fade-in">
        <!-- Titre responsive -->
        <h1 class="text-white font-bold mb-6 md:mb-8 animate-slide-up tracking-wide leading-tight
                   text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" 
            style="letter-spacing: 0.02em;">
          L'assurance santé 100% digitale qui vous simplifie la vie au Bénin, en Afrique et partout dans le monde !
        </h1>

        <!-- Boutons responsive -->
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
          <button class="bg-[#b7f400] hover:bg-[#009342] text-[#000000] font-semibold 
                         px-6 sm:px-8 md:px-12 py-3 sm:py-4 
                         rounded-full transition-all duration-300 
                         text-sm sm:text-base 
                         transform hover:scale-105 hover:shadow-xl 
                         flex items-center justify-center gap-2 group">
            <Zap class="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
            Devis instantané
          </button>
          <button class="bg-white hover:bg-gray-50 text-gray-900 font-semibold 
                         px-6 sm:px-8 py-3 sm:py-4 
                         rounded-full transition-all duration-300 
                         text-sm sm:text-base 
                         border-2 border-white 
                         transform hover:scale-105 hover:shadow-xl 
                         flex items-center justify-center gap-2">
            <Calendar class="w-4 h-4 sm:w-5 sm:h-5" />
            Demander une démo
          </button>
        </div>

        <!-- Lien vidéo responsive -->
        <a href="#" class="inline-flex items-center gap-2 sm:gap-3 text-white 
                          text-xs sm:text-sm 
                          font-medium hover:opacity-80 transition-all duration-200 group">
          <span>Découvrez notre plateforme en vidéo</span>
          <span class="flex items-center justify-center 
                       w-8 h-8 sm:w-10 sm:h-10 
                       bg-white rounded-full 
                       group-hover:scale-110 transition-transform duration-300">
            <Play class="w-3 h-3 sm:w-4 sm:h-4 text-[#1c4b42] ml-0.5" fill="currentColor" />
          </span>
        </a>
      </div>
    </div>
  </div>
</section>

    <!-- Partners Section with Logo Carousel -->
    <section class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-8 items-center justify-items-center mb-8">
          <div class="flex items-center justify-center h-12 transition-all duration-300 hover:scale-110">
            
            <img src="../../assets/images/assurance/ClientsLogo/client1.png" alt="" style="width: 150px;">
          </div>
          <div class="flex items-center justify-center h-12 transition-all duration-300 hover:scale-110">
                <img src="../../assets/images/assurance/ClientsLogo/client2.png" alt="" style="width: 150px;">
          </div>
          <div class="flex items-center justify-center h-12 transition-all duration-300 hover:scale-110">
                <img src="../../assets/images/assurance/ClientsLogo/client3.svg" alt="" style="width: 150px;">
          </div>
          
        </div>

      
      </div>
    </section>

    <!-- Subscriber Platform Section -->
    <section id="fonctionnalites" class="bg-[#1c4b42] py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12 animate-slide-up">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
            <span class="text-[#b7f400]">En tant que Souscripteur</span><br />
            Pilotez votre couverture santé en toute sérénité
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

        <!-- CTA for Subscribers -->
        <div class="text-center">
          <a href="#" class="inline-flex items-center gap-3 bg-[#b7f400] hover:bg-white text-[#000000] px-10 py-5 rounded-full font-bold lg:text-lg md:text-lg sm:text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
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

    <!-- Insured Platform Section -->
    <section class="bg-[#b7f400] py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12 animate-slide-up">
          <h2 class="text-4xl md:text-5xl font-bold text-[#1c4b42] mb-4">
            En tant qu'assuré
          </h2>
          <p class="text-[#1c4b42]/80 text-lg max-w-3xl mx-auto">
            Gérez au mieux vos consommations santé
          </p>
        </div>

        <!-- Main Features Grid for Insured -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Envoi de Facture -->
          <div class="bg-[#1c4b42] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-[#b7f400] rounded-2xl flex items-center justify-center mb-6">
              <FileText class="w-8 h-8 text-[#1c4b42]" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">
              Envoi de Facture
            </h3>
            <p class="text-white/80 text-base leading-relaxed mb-4">
              Dépôt simple et rapide de vos factures médicales depuis l'application
            </p>
            <ul class="text-white/70 text-sm space-y-2">
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0 text-[#b7f400]" />
                Téléversement via photo ou fichier
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0 text-[#b7f400]" />
                Vérification automatique des informations
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0 text-[#b7f400]" />
                Historique des factures envoyées
              </li>
            </ul>
          </div>

          <!-- Suivi de Remboursement -->
          <div class="bg-[#1c4b42] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-[#b7f400] rounded-2xl flex items-center justify-center mb-6">
              <Clock class="w-8 h-8 text-[#1c4b42]" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">
              Suivi de Remboursement
            </h3>
            <p class="text-white/80 text-base leading-relaxed mb-4">
              Visualisez en temps réel l'avancement de vos remboursements
            </p>
            <ul class="text-white/70 text-sm space-y-2">
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0 text-[#b7f400]" />
                Statut détaillé (en cours, validé, payé)
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0 text-[#b7f400]" />
                Notifications lors de chaque étape
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0 text-[#b7f400]" />
                Historique complet des montants remboursés
              </li>
            </ul>
          </div>

          <!-- Suivi des Dépenses -->
          <div class="bg-[#1c4b42] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-[#b7f400] rounded-2xl flex items-center justify-center mb-6">
              <BarChart3 class="w-8 h-8 text-[#1c4b42]" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">
              Suivi des Dépenses
            </h3>
            <p class="text-white/80 text-base leading-relaxed mb-4">
              Contrôlez votre consommation santé en un coup d'œil
            </p>
            <ul class="text-white/70 text-sm space-y-2">
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0 text-[#b7f400]" />
                Synthèse des dépenses par type d'acte
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0 text-[#b7f400]" />
                Comparaison par période
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0 text-[#b7f400]" />
                Visualisation des restes à charge
              </li>
            </ul>
          </div>

          <!-- Recherche de Professionnel -->
          <div class="bg-[#1c4b42] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-[#b7f400] rounded-2xl flex items-center justify-center mb-6">
              <MapPin class="w-8 h-8 text-[#1c4b42]" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">
              Recherche de Professionnel de Santé
            </h3>
            <p class="text-white/80 text-base leading-relaxed mb-4">
              Trouvez facilement un praticien proche de chez vous
            </p>
            <ul class="text-white/70 text-sm space-y-2">
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0 text-[#b7f400]" />
                Annuaire géolocalisé
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0 text-[#b7f400]" />
                Filtre par spécialité ou réseau partenaire
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0 text-[#b7f400]" />
                Accès aux coordonnées et informations pratiques
              </li>
            </ul>
          </div>

          <!-- Estimation de Dépense -->
          <div class="bg-[#1c4b42] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-[#b7f400] rounded-2xl flex items-center justify-center mb-6">
              <DollarSign class="w-8 h-8 text-[#1c4b42]" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">
              Estimation de Dépense
            </h3>
            <p class="text-white/80 text-base leading-relaxed mb-4">
              Anticipez le coût de vos soins avant de consulter
            </p>
            <ul class="text-white/70 text-sm space-y-2">
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0 text-[#b7f400]" />
                Simulation du tarif selon l'acte médical
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0 text-[#b7f400]" />
                Indication des plafonds et remboursements prévus
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0 text-[#b7f400]" />
                Montant estimé du reste à charge
              </li>
            </ul>
          </div>

          <!-- Carte & Garanties -->
          <div class="bg-[#1c4b42] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-[#b7f400] rounded-2xl flex items-center justify-center mb-6">
              <Shield class="w-8 h-8 text-[#1c4b42]" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">
              Carte & Garanties de Couverture
            </h3>
            <p class="text-white/80 text-base leading-relaxed mb-4">
              Accédez à tout moment à vos informations d'assurance
            </p>
            <ul class="text-white/70 text-sm space-y-2">
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0 text-[#b7f400]" />
                Carte de tiers payant disponible en version numérique
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0 text-[#b7f400]" />
                Consultation des garanties et plafonds
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 flex-shrink-0 text-[#b7f400]" />
                Détail des exclusions et niveaux de couverture
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Solutions Section -->
    <section class="bg-gray-50 py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="mb-12 animate-slide-up">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Des solutions adaptées à chaque entreprise
          </h2>
          <p class="text-gray-600 text-lg max-w-3xl">
            Kangu accompagne les TPE, PME et grandes entreprises du Bénin et d'ailleurs avec une plateforme 100% digitale pour simplifier la gestion de leur couverture santé.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div class="aspect-[4/3] overflow-hidden">
              <img 
                src="../../assets/images/assurance/Photos/startup.jpg" 
                alt="Startups & TPE"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div class="p-6 pb-16 relative">
              <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Rocket class="w-5 h-5 text-[#1c4b42]" />
                Startups & TPE
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                Vous lancez votre activité ? Vous avez <span class="font-semibold">moins de 10 employés</span> ? Démarrez avec Kangu en quelques clics depuis votre smartphone.
              </p>
              <button class="absolute bottom-6 right-6 w-10 h-10 bg-[#1c4b42] hover:bg-[#009342] rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                <ArrowRight class="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div class="aspect-[4/3] overflow-hidden">
              <img 
                src="../../assets/images/assurance/Photos/PME.jpg" 
                alt="PME"
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
                src="../../assets/images/assurance/Photos/grande-entreprise.jpg" 
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
                src="../../assets/images/assurance/Photos/particuliers.jpg" 
                alt="Particuliers"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div class="p-6 pb-16 relative">
              <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <User class="w-5 h-5 text-[#1c4b42]" />
                Particuliers
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

     <!-- Wellbeing Benefits Section -->
    <section class="bg-white py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="mb-8 animate-slide-up">
              <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Employés bien protégés ? Une entreprise qui performe…!
              </h2>
              <p class="text-gray-600 text-sm mb-4">
               Avec Kangu, que votre couverture santé soit gérée par un assureur ou
gérée en autofinancement, vous boostez la performance de votre
organisation.

              </p>
              <p class="text-gray-900 text-sm font-medium">
                Dans un contexte où la sérénité, la transparence et l’efficacité
deviennent essentielles, Kangu apporte une nouvelle manière de gérer
la santé de vos équipes — plus simple, plus fiable et clairement plus
performante.
              </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div class="bg-[#f0e9e0] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div class="flex items-center gap-2 mb-4">
                  <span class="text-base font-semibold text-gray-900">Fidélisation renforcée</span>
                  <Rocket class="w-5 h-5 text-red-500 animate-pulse" />
                </div>
                
                <p class="text-gray-700 text-sm leading-relaxed">
                  Grâce à une expérience santé fluide, transparente et mieux maîtrisée,
vos collaborateurs se sentent soutenus.

                </p>

                <p class="text-gray-700 text-sm leading-relaxed">
                  <span class="font-bold"> Résultat :</span>
 une meilleure rétention et une confiance durable dans
l’entreprise.
                </p>
              </div>

              <div class="bg-[#f0e9e0]  rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div class="flex items-center gap-1 mb-4">
                  <span class="text-base font-semibold text-gray-900">Productivité</span>
                  <TrendingUp class="w-5 h-5 text-[#009342]" />
                </div>
                <div class="text-xl font-bold text-gray-900 mb-2">+35% de gain de productivité</div>
                <p class="text-gray-700 text-sm leading-relaxed">
                  Kangu automatise les processus clés, réduit les tâches répétitives et
simplifie le suivi des dossiers santé.
Vos équipes RH gagnent un temps considérable et se concentrent enfin
sur des missions à forte valeur ajoutée.
                </p>
              </div>

             
            
            </div>

             <div class="bg-[#f0e9e0] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div class="flex items-center gap-2 mb-4">
                  <span class="text-base font-semibold text-gray-900">Réduction des anomalies et fraudes</span>
                  <Shield class="w-5 h-5 text-[#1c4b42]" />
                </div>
                <div class="text-xl font-bold text-gray-900 mb-2">-45% d’anomalies et de fraudes détectées</div>
                <p class="text-gray-700 text-sm leading-relaxed">
                  Grâce à des contrôles intelligents et une traçabilité renforcée, Kangu
sécurise toute la chaîne de gestion santé, limitant les pertes et
améliorant la qualité du service.
                </p>
              </div>


           
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


    <!-- Advantages Section -->
     <!--<section id="avantages" class="bg-white py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12 animate-slide-up">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Employés bien protégés ? Une entreprise qui performe…!
          </h2>
          <p class="text-gray-600 text-lg max-w-4xl mx-auto">
            Avec Kangu, que votre couverture santé soit gérée par un assureur ou gérée en autofinancement, vous boostez la performance de votre organisation.
          </p>
          <p class="text-gray-700 text-base max-w-4xl mx-auto mt-4">
            Dans un contexte où la sérénité, la transparence et l'efficacité deviennent essentielles, Kangu apporte une nouvelle manière de gérer la santé de vos équipes — plus simple, plus fiable et clairement plus performante.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div class="bg-gradient-to-br from-[#1c4b42] to-[#009342] rounded-2xl p-8 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="flex items-center gap-3 mb-6">
              <Rocket class="w-10 h-10" />
              <h3 class="text-2xl font-bold">Fidélisation renforcée</h3>
            </div>
            <div class="mb-4">
              <div class="text-6xl font-bold mb-2">4x</div>
              <p class="text-white/90 text-base leading-relaxed">
                plus de chances de retenir vos meilleurs talents
              </p>
            </div>
            <p class="text-white/80 text-sm leading-relaxed">
              Grâce à une expérience santé fluide, transparente et mieux maîtrisée, vos collaborateurs se sentent soutenus. Résultat : une meilleure rétention et une confiance durable dans l'entreprise.
            </p>
          </div>

       
          <div class="bg-gradient-to-br from-[#009342] to-[#1c4b42] rounded-2xl p-8 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="flex items-center gap-3 mb-6">
              <TrendingUp class="w-10 h-10" />
              <h3 class="text-2xl font-bold">Productivité administrative</h3>
            </div>
            <div class="mb-4">
              <div class="text-6xl font-bold mb-2">+35%</div>
              <p class="text-white/90 text-base leading-relaxed">
                de gain de productivité
              </p>
            </div>
            <p class="text-white/80 text-sm leading-relaxed">
              Kangu automatise les processus clés, réduit les tâches répétitives et simplifie le suivi des dossiers santé. Vos équipes RH gagnent un temps considérable et se concentrent enfin sur des missions à forte valeur ajoutée.
            </p>
          </div>

        
          <div class="bg-gradient-to-br from-[#1c4b42] to-[#009342] rounded-2xl p-8 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="flex items-center gap-3 mb-6">
              <Shield class="w-10 h-10" />
              <h3 class="text-2xl font-bold">Réduction des anomalies et fraudes</h3>
            </div>
            <div class="mb-4">
              <div class="text-6xl font-bold mb-2">-45%</div>
              <p class="text-white/90 text-base leading-relaxed">
                d'anomalies et de fraudes détectées
              </p>
            </div>
            <p class="text-white/80 text-sm leading-relaxed">
              Grâce à des contrôles intelligents et une traçabilité renforcée, Kangu sécurise toute la chaîne de gestion santé, limitant les pertes et améliorant la qualité du service.
            </p>
          </div>
        </div>
      </div>
    </section> -->

<!-- Customer Service Section -->
<section class="bg-white py-20">
  <div class="max-w-7xl mx-auto px-6">
    <div class="relative bg-[#1c4b42] rounded-[3rem] overflow-hidden p-8 md:p-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Image avec badges - Affichage adaptatif -->
        <div class="relative order-2 lg:order-1">
          <!-- Image mascotte -->
          <div class="relative z-10 max-w-md mx-auto">
            <img 
              src="../../assets/images/assurance/m5.png" 
              alt="Mascotte Kangu"
              class="w-full transition-transform duration-300 hover:scale-105"
            />
          </div>

          <!-- Badges flottants - cachés sur mobile, visibles sur desktop -->
          <div class="hidden lg:block">
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

          <!-- Badges en ligne pour mobile -->
          <div class="flex flex-wrap justify-center gap-3 mt-6 lg:hidden">
            <div class="bg-white rounded-full px-4 py-2 shadow-lg">
              <span class="text-gray-900 font-medium text-sm flex items-center gap-2">
                <Zap class="w-4 h-4 text-[#b7f400]" />
                Rapide
              </span>
            </div>
            <div class="bg-white rounded-full px-4 py-2 shadow-lg">
              <span class="text-gray-900 font-medium text-sm flex items-center gap-2">
                <MessageCircle class="w-4 h-4 text-[#1c4b42]" />
                À l'écoute
              </span>
            </div>
            <div class="bg-white rounded-full px-4 py-2 shadow-lg">
              <span class="text-gray-900 font-medium text-sm flex items-center gap-2">
                <CheckCircle class="w-4 h-4 text-[#009342]" />
                Efficace
              </span>
            </div>
          </div>
        </div>

        <!-- Contenu texte -->
        <div class="relative order-1 lg:order-2">
          <div class="flex items-center gap-2 mb-6">
            <div class="flex -space-x-2">
              <div class="w-10 h-10 rounded-full bg-gray-300 border-2 border-white overflow-hidden transition-transform duration-300 hover:scale-110">
                <img src="../../assets/images/assurance/m1.png" alt="Équipe Kangu" class="w-full h-full object-cover" />
              </div>
              <div class="w-10 h-10 rounded-full bg-gray-400 border-2 border-white overflow-hidden transition-transform duration-300 hover:scale-110">
                <img src="../../assets/images/assurance/m2.png" alt="Équipe Kangu" class="w-full h-full object-cover" />
              </div>
              <div class="w-10 h-10 rounded-full bg-gray-500 border-2 border-white overflow-hidden transition-transform duration-300 hover:scale-110">
                <img src="../../assets/images/assurance/m3.png" alt="Équipe Kangu" class="w-full h-full object-cover" />
              </div>
              <div class="w-10 h-10 rounded-full bg-gray-600 border-2 border-white overflow-hidden transition-transform duration-300 hover:scale-110">
                <img src="../../assets/images/assurance/m4.png" alt="Équipe Kangu" class="w-full h-full object-cover" />
              </div>
              <div class="w-10 h-10 rounded-full bg-white border-2 border-white flex items-center justify-center">
                <span class="text-gray-900 text-xs font-semibold">+25</span>
              </div>
            </div>
          </div>

          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Support client 7j/7
          </h2>

          <div class="space-y-4 text-white">
            <p class="text-base leading-relaxed flex items-center gap-2">
              <Phone class="w-5 h-5 flex-shrink-0" />
              Contactez-nous par WhatsApp, téléphone ou email.
            </p>
            <p class="text-base leading-relaxed flex items-center gap-2">
              <Clock class="w-5 h-5 flex-shrink-0" />
              Réponse rapide et personnalisée, 7 jours sur 7.
            </p>
            <p class="text-base leading-relaxed flex items-center gap-2">
              <Star class="w-5 h-5 fill-yellow-400 text-yellow-400 flex-shrink-0" />
              Une équipe dédiée à votre réussite.
            </p>
          </div>

          <!-- Badge Bienveillant - caché sur mobile -->
          <div class="hidden lg:block absolute -bottom-8 right-0 bg-[#b7f400] rounded-full px-6 py-3 shadow-lg z-20 animate-bounce-slow">
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

        <!-- App Section with Download Links -->
    <section class="bg-white py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div class="mt-20">
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

            <div class="space-y-4 ">
              

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
                src="../../assets/images/assurance/phone.png" 
                alt="Application AssurApp"
                class="w-full h-auto rounded-3xl transition-transform duration-300 hover:scale-105"
              />
            </div>

            
          </div>
        </div>
      </div>
    </section>


    <!-- Becotrac Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left: Becotrac Logo & Info -->
          <div>
            <div class="flex items-center justify-center gap-4 mb-6">
              <img src="../../assets/images/assurance/logobecot.webp"  alt="Becotrac" class="h-12" />
         
            </div>
            
            <p class="text-gray-700 text-base leading-relaxed mb-6">
              Nous combinons la <span class="font-semibold">proximité</span> et la <span class="font-semibold">réactivité</span> d'une <span class="font-semibold">équipe locale</span> avec une <span class="font-semibold">vision globale</span> et des solutions <span class="font-semibold">sur mesure</span> en assurance et réassurance.
            </p>

            <p class="text-gray-700 text-base leading-relaxed mb-8">
              <span class="font-semibold">Becotrac Network</span> vous accompagne avec des <span class="font-semibold">solutions d'assurance et de réassurance</span> sur mesure, maîtrisant ainsi le processus de <span class="font-semibold">gestion des risques</span> pour une protection <span class="font-semibold">optimale</span> et <span class="font-semibold">efficace</span>.
            </p>
          </div>

          <!-- Right: Becotrac Stats -->
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <h3 class="text-2xl font-bold text-[#1c4b42] mb-8 text-center">
              BECOTRAC NETWORK EN CHIFFRES
            </h3>
            
            <div class="grid grid-cols-2 gap-8">
              <div class="text-center">
                <div class="text-5xl font-bold text-[#1c4b42] mb-2">90+</div>
                <p class="text-gray-600 text-sm">des professionnels situés dans le monde</p>
              </div>
              
              <div class="text-center">
                <div class="text-5xl font-bold text-[#1c4b42] mb-2">2500+</div>
                <p class="text-gray-600 text-sm">réclamations traitées annuellement</p>
              </div>
              
              <div class="text-center">
                <div class="text-5xl font-bold text-[#1c4b42] mb-2">800+</div>
                <p class="text-gray-600 text-sm">clients corporatifs servis</p>
              </div>
              
              <div class="text-center">
                <div class="text-5xl font-bold text-[#1c4b42] mb-2">40+</div>
                <p class="text-gray-600 text-sm">BECOTRAC Network est présent dans plus de 40 pays en Afrique (zone CIMA, Ghana, Nigeria, RDC, Rwanda) et en Europe via BECOTRAC Global Solutions (BGS)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="relative bg-[#f0e9e0] py-32 overflow-hidden">
      <div class="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight animate-slide-up tracking-wide" style="letter-spacing: 0.02em;">
          Rejoignez la révolution digitale<br />
          de l'assurance santé
        </h2>

        <p class="text-gray-600 text-lg mb-8 animate-fade-in">
          Simplifiez la gestion de votre couverture santé dès aujourd'hui
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
          alt="Mascotte Kangu"
          class="w-full h-auto"
        />
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-6 py-16">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <!-- Column 1: Logo & Description -->
          <div class="lg:col-span-1">
            <div class="flex items-center mb-6">
              <img src="../../assets/images/assurance/kangu-white.png" alt="logo" style="width: 100px;">
            </div>
            
            <p class="text-gray-400 text-sm leading-relaxed mb-6">
              La première plateforme digitale d'assurance santé. Simplifiez vos démarches, protégez votre santé et celle de vos employés avec une solution 100% numérique.
            </p>

            <!-- Social Media Links -->
            <div class="flex items-center gap-4">
              <a  href="https://www.facebook.com/becotrac/" target="_blank" class="w-10 h-10 bg-gray-800 hover:bg-[#1c4b42] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
             
              <a href="https://www.linkedin.com/company/becotrac-assurances/"  target="_blank" class="w-10 h-10 bg-gray-800 hover:bg-[#1c4b42] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://api.whatsapp.com/send/?phone=22959112138&text&type=phone_number&app_absent=0" target="_blank" class="w-10 h-10 bg-gray-800 hover:bg-[#1c4b42] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-icon lucide-message-circle"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/></svg>
              </a>
            </div>
          </div>

          <!-- Column 2 & 3: Empty for contact info positioning -->
          <div class="lg:col-span-2"></div>

          <!-- Column 4: Contact Info (Vertical on right) -->
          <div class="space-y-6">
            <!-- Phone -->
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone class="w-6 h-6" />
              </div>
              <div>
                <h4 class="text-white font-semibold text-sm mb-1">Téléphone</h4>
                <p class="text-gray-400 text-sm">(+229) 01 59 11 21 38</p>

                <p class="text-gray-400 text-sm">(+229) 01 20 22 25 81</p>
              </div>
            </div>

            <!-- Email -->
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail class="w-6 h-6" />
              </div>
              <div>
                <h4 class="text-white font-semibold text-sm mb-1">Email</h4>
                <p class="text-gray-400 text-sm">contact@becotrac.com</p>
              </div>
            </div>

            <!-- Address -->
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin class="w-6 h-6" />
              </div>
              <div>
                <h4 class="text-white font-semibold text-sm mb-1">Adresse</h4>
                <p class="text-gray-400 text-sm">Cotonou, Bénin</p>
                <p class="text-gray-500 text-xs mt-1">Rue 308, Boulevard Steinmetz</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="flex flex-col md:flex-row items-center gap-4">
            <p class="text-gray-500 text-sm">
              © 2025 - Kangu by AdjibolaTech. Tous droits réservés.
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
  Lock,
  X
} from 'lucide-vue-next'

// État pour le menu mobile
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
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