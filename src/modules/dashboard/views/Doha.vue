<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-white shadow-sm">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span class="text-white font-bold text-sm">W</span>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <a href="#" class="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Accueil</a>
              <a href="#" class="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">À propos</a>
              <a href="#" class="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">Services</a>
              <a href="#" class="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">Contact</a>
            </div>
          </div>
          <div>
            <button class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
              Commencer
            </button>
          </div>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-50 to-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p class="text-blue-600 text-sm font-medium mb-4">L'équilibre mental pour un meilleur</p>
            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Agir ensemble pour l'équilibre mental
            </h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div class="bg-white p-6 rounded-lg shadow-sm">
                <p class="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm">
                <p class="text-gray-600 text-sm leading-relaxed">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="relative z-10">
              <img src="../../../assets/images/p1.png" alt="Mental Health Illustration" class="w-full max-w-md mx-auto">
            </div>
            <div class="absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
              <svg class="w-10 h-10 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="absolute bottom-10 right-10 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="bg-blue-400 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-3xl lg:text-4xl font-bold text-white mb-2">24/7</div>
            <p class="text-blue-100 text-sm">Support disponible</p>
          </div>
          <div>
            <div class="text-3xl lg:text-4xl font-bold text-white mb-2">100+</div>
            <p class="text-blue-100 text-sm">Professionnels</p>
          </div>
          <div>
            <div class="text-3xl lg:text-4xl font-bold text-white mb-2">1M+</div>
            <p class="text-blue-100 text-sm">Utilisateurs aidés</p>
          </div>
          <div>
            <div class="text-3xl lg:text-4xl font-bold text-white mb-2">01</div>
            <p class="text-blue-100 text-sm">Plateforme leader</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-12">Our Consulting Specialists</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Diagnostic de santé</h3>
            <p class="text-gray-600 text-sm">Évaluation complète de votre état mental et émotionnel</p>
          </div>
          <div class="bg-blue-600 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-white">
            <div class="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Accompagnement</h3>
            <p class="text-blue-100 text-sm">Suivi personnalisé avec nos thérapeutes qualifiés</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Communauté</h3>
            <p class="text-gray-600 text-sm">Rejoignez notre communauté bienveillante</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Suivi personnalisé</h3>
            <p class="text-gray-600 text-sm">Outils et ressources adaptés à vos besoins</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src="../../../assets/images/p1.png" alt="About Illustration" class="w-full max-w-md mx-auto">
          </div>
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">À propos</h2>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Notre mission est d'accompagner chaque personne vers un meilleur équilibre mental. 
              Nous croyons que la santé mentale est un droit fondamental et que chacun mérite 
              d'avoir accès à des soins de qualité.
            </p>
            <ul class="space-y-3">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                <span class="text-gray-600 text-sm">Équipe de professionnels certifiés et expérimentés</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                <span class="text-gray-600 text-sm">Approche personnalisée et bienveillante</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                <span class="text-gray-600 text-sm">Confidentialité et sécurité garanties</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-12">Ce que <span class="text-blue-600">Nos Membre</span><br>Disent à propos</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="flex items-center mb-4">
              <div class="flex space-x-1">
                <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <span class="ml-2 text-sm text-gray-600">5.0</span>
            </div>
            <blockquote class="text-lg text-gray-700 mb-6 leading-relaxed">
              "Cette plateforme a vraiment changé ma vie. L'accompagnement est exceptionnel et j'ai retrouvé confiance en moi. 
              Je recommande vivement leurs services à toute personne qui souhaite améliorer son bien-être mental."
            </blockquote>
            <div class="flex items-center">
              <img src="../../../assets/images/ac3.jpg" alt="Marie Dupont" class="w-12 h-12 rounded-full mr-4">
              <div>
                <div class="font-semibold text-gray-900">Marie Dupont</div>
                <div class="text-sm text-gray-600">Utilisatrice depuis 2 ans</div>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="flex space-x-2">
              <div v-for="i in 5" :key="i" class="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-12">Nos articles</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article class="group cursor-pointer">
            <div class="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
              <img src="../../../assets/images/p1.png" alt="Article 1" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
            </div>
            <div class="flex items-center text-sm text-gray-500 mb-2">
              <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Santé mentale
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              Éviter pour reprendre pied?
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet...
            </p>
          </article>
          <article class="group cursor-pointer">
            <div class="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
              <img src="../../../assets/images/p2.png" alt="Article 2" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
            </div>
            <div class="flex items-center text-sm text-gray-500 mb-2">
              <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Bien-être
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              Gérer son stress
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet...
            </p>
          </article>
          <article class="group cursor-pointer">
            <div class="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
              <img src="../../../assets/images/p3.png" alt="Article 3" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
            </div>
            <div class="flex items-center text-sm text-gray-500 mb-2">
              <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Productivité
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              Équilibre vie pro
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet...
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">
              Votre voie<br>vers <span class="text-blue-600">la guérison</span>
            </h2>
            <p class="text-gray-600 mb-8 leading-relaxed">
              Commencez votre parcours vers un meilleur équilibre mental dès aujourd'hui. 
              Notre équipe d'experts est là pour vous accompagner à chaque étape de votre transformation personnelle.
            </p>
            <button class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Lire Plus →
            </button>
          </div>
          <div>
            <img src="../../../assets/images/p4.png" alt="Healing Journey" class="w-full rounded-lg shadow-lg">
          </div>
        </div>
      </div>
    </section>

    <!-- App Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          L'app qui t'accompagne vers<br>l'équilibre
        </h2>
        <p class="text-gray-600 mb-12 max-w-2xl mx-auto">
          Une interface simple et bien conçue pour une utilisation quotidienne
        </p>
        <div class="flex justify-center items-end space-x-4 max-w-4xl mx-auto">
          <div class="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-3xl">
            <img src="../../../assets/images/p1.png" alt="App Screen 1" class="w-32 h-64 rounded-2xl">
          </div>
          <div class="bg-gradient-to-br from-orange-100 to-red-200 p-4 rounded-3xl">
            <img src="../../../assets/images/p2.png" alt="App Screen 2" class="w-36 h-72 rounded-2xl">
          </div>
          <div class="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-3xl">
            <img src="../../../assets/images/p3.png" alt="App Screen 3" class="w-32 h-64 rounded-2xl">
          </div>
          <div class="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-3xl">
            <img src="../../../assets/images/p4.png" alt="App Screen 4" class="w-30 h-60 rounded-2xl">
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-16 bg-blue-600">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl font-bold text-white mb-8">Inscrivez-vous à notre Newsletter</h2>
        <div class="max-w-md mx-auto">
          <div class="flex">
            <input 
              type="email" 
              placeholder="Votre adresse email"
              class="flex-1 px-6 py-3 rounded-l-full border-0 focus:ring-2 focus:ring-blue-300 focus:outline-none"
            >
            <button class="bg-white text-blue-600 px-6 py-3 rounded-r-full font-medium hover:bg-gray-50 transition-colors">
              →
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-blue-900 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">OURA</h3>
            <p class="text-blue-200 text-sm leading-relaxed mb-4">
              Notre mission est d'accompagner chaque personne vers un meilleur équilibre mental et émotionnel.
            </p>
            <div class="flex space-x-4">
              <div class="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center">
                <span class="text-xs">f</span>
              </div>
              <div class="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center">
                <span class="text-xs">t</span>
              </div>
              <div class="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center">
                <span class="text-xs">in</span>
              </div>
            </div>
          </div>
          <div>
            <h4 class="font-semibold mb-4">LIENS UTILES</h4>
            <ul class="space-y-2 text-sm text-blue-200">
              <li><a href="#" class="hover:text-white transition-colors">À propos</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">ADRESSE</h4>
            <div class="text-sm text-blue-200 space-y-2">
              <p>123 Rue de la Santé</p>
              <p>75001 Paris, France</p>
              <p>+33 1 23 45 67 89</p>
              <p>contact@oura-sante.fr</p>
            </div>
          </div>
          <div>
            <div class="bg-blue-800 p-4 rounded-lg">
              <div class="w-full h-32 bg-blue-700 rounded flex items-center justify-center">
                <span class="text-blue-300 text-xs">Carte</span>
              </div>
            </div>
          </div>
        </div>
        <div class="border-t border-blue-800 mt-12 pt-8 text-center">
          <p class="text-blue-200 text-sm">© 2024 Oura Santé Mentale. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Reactive data can be added here if needed for interactivity
const email = ref('')
</script>

<style scoped>
/* Additional custom styles if needed */
.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
}

.aspect-h-9 {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>