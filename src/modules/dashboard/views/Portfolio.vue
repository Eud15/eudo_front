<template>
  <div class=" min-h-screen bg-gradient-to-b from-[#FFDE59] to-[#FFD000] text-gray-900 pb-20">
    <!-- Header with subtle animation -->
    <div class="pt-6 px-5 pb-3 animate-fadeIn">
      <div class="flex items-center justify-between">
        <button class="text-black p-2 -ml-2 hover:bg-white/20 rounded-full transition-all">
          <menu-icon class="h-6 w-6" />
        </button>
        <div class="text-center">
          <h1 class="text-2xl font-extrabold text-black tracking-tight">RAPIDO</h1>
          <div class="flex items-center justify-center text-sm bg-black/10 px-3 py-1 rounded-full mt-1">
            <map-pin-icon class="h-3 w-3 mr-1" />
            <span class="font-medium">Cotonou, houeyiho 39</span>
          </div>
        </div>
        <button class="bg-white text-black px-3 py-1 rounded-full flex items-center shadow-md hover:shadow-lg transition-all transform hover:scale-105 active:scale-95">
          <zap-icon class="h-4 w-4 mr-1 text-[#FFCC00]" />
          <span class="text-sm font-bold">Plus</span>
        </button>
      </div>
    </div>

    <!-- Services Grid with improved styling -->
    <div class="px-4 py-2 animate-fadeIn animation-delay-100">
      <div class="grid grid-cols-3 gap-3">
        <!-- Livraison -->
        <div class="bg-white rounded-2xl p-3 flex flex-col items-center shadow-lg transform transition-all hover:scale-105 active:scale-95 hover:shadow-xl">
          <div class="h-20 w-full flex items-center justify-center">
            <div class="relative bg-gradient-to-br from-orange-100 to-orange-50 p-3 rounded-xl">
              <truck-icon class="h-10 w-10 text-orange-500" />
              <div class="absolute -bottom-2 -right-2 bg-orange-500 text-white p-1 rounded-lg shadow-md">
                <package-icon class="h-4 w-4" />
              </div>
            </div>
          </div>
          <span class="text-sm font-bold mt-2 text-gray-800">Livraison</span>
        </div>

        <!-- Trottinette -->
        <div class="bg-white rounded-2xl p-3 flex flex-col items-center shadow-lg transform transition-all hover:scale-105 active:scale-95 hover:shadow-xl">
          <div class="h-20 w-full flex items-center justify-center">
            <div class="bg-gradient-to-br from-blue-100 to-blue-50 p-3 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                <circle cx="4" cy="16" r="3"/>
                <circle cx="19" cy="16" r="3"/>
                <path d="M14 7h2a2 2 0 0 1 2 2v7"/>
                <path d="M6 16h12"/>
                <path d="M9 9h7"/>
                <path d="M9 9V4"/>
              </svg>
            </div>
          </div>
          <span class="text-sm font-bold mt-2 text-gray-800">Trottinette</span>
        </div>

        <!-- Pharmacie -->
        <div class="bg-white rounded-2xl p-3 flex flex-col items-center shadow-lg transform transition-all hover:scale-105 active:scale-95 hover:shadow-xl">
          <div class="h-20 w-full flex items-center justify-center">
            <div class="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl shadow-md">
              <plus-icon class="h-10 w-10 text-white" />
            </div>
          </div>
          <span class="text-sm font-bold mt-2 text-gray-800">Pharmacie</span>
        </div>

        <!-- Super U -->
        <div class="bg-white rounded-2xl p-3 flex flex-col items-center shadow-lg transform transition-all hover:scale-105 active:scale-95 hover:shadow-xl">
          <div class="h-20 w-full flex items-center justify-center">
            <div class="bg-gradient-to-br from-[#FFAA00] to-[#FF8800] p-3 rounded-xl shadow-md">
              <shopping-cart-icon class="h-10 w-10 text-white" />
            </div>
          </div>
          <span class="text-sm font-bold mt-2 text-gray-800">Super U</span>
        </div>

        <!-- Foods -->
        <div @click="goToFood()" class="bg-white rounded-2xl p-3 flex flex-col items-center shadow-lg transform transition-all hover:scale-105 active:scale-95 hover:shadow-xl">
          <div class="h-20 w-full flex items-center justify-center">
            <div class="bg-gradient-to-br from-amber-100 to-amber-50 p-3 rounded-xl">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-500">
                  <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/>
                  <line x1="6" y1="17" x2="18" y2="17"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-700 ml-1">
                  <path d="M17 8h1a4 4 0 1 1 0 8h-1"/>
                  <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/>
                  <line x1="6" y1="2" x2="6" y2="4"/>
                  <line x1="10" y1="2" x2="10" y2="4"/>
                  <line x1="14" y1="2" x2="14" y2="4"/>
                </svg>
              </div>
            </div>
          </div>
          <span class="text-sm font-bold mt-2 text-gray-800">Foods</span>
        </div>

        <!-- Billetterie -->
        <div class="bg-white rounded-2xl p-3 flex flex-col items-center shadow-lg transform transition-all hover:scale-105 active:scale-95 hover:shadow-xl">
          <div class="h-20 w-full flex items-center justify-center">
            <div class="bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-xl shadow-md transform rotate-3">
              <ticket-icon class="h-10 w-10 text-white" />
            </div>
          </div>
          <span class="text-sm font-bold mt-2 text-gray-800">Billetterie</span>
        </div>

        <!-- Interurbain -->
        <div class="bg-white rounded-2xl p-3 flex flex-col items-center shadow-lg transform transition-all hover:scale-105 active:scale-95 hover:shadow-xl">
          <div class="h-20 w-full flex items-center justify-center">
            <div class="relative bg-gradient-to-br from-orange-100 to-orange-50 p-3 rounded-xl">
              <car-icon class="h-10 w-10 text-orange-500" />
              <div class="absolute -bottom-2 -right-2 bg-gray-700 text-white p-1 rounded-lg shadow-md">
                <briefcase-icon class="h-4 w-4" />
              </div>
            </div>
          </div>
          <span class="text-sm font-bold mt-2 text-gray-800">Interurbain</span>
        </div>

        <!-- Course - Double width -->
        <div class="bg-white rounded-2xl p-3 flex flex-col items-center col-span-2 shadow-lg transform transition-all hover:scale-105 active:scale-95 hover:shadow-xl">
          <div class="h-20 w-full flex items-center justify-center">
            <div class="bg-gradient-to-r from-orange-500 to-amber-500 p-3 px-6 rounded-xl shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
                <circle cx="7" cy="17" r="2"/>
                <path d="M9 17h6"/>
                <circle cx="17" cy="17" r="2"/>
              </svg>
            </div>
          </div>
          <span class="text-sm font-bold mt-2 text-gray-800">Course</span>
        </div>

        <!-- Déménagement -->
        <div class="bg-white rounded-2xl p-3 flex flex-col items-center col-span-1 shadow-lg transform transition-all hover:scale-105 active:scale-95 hover:shadow-xl">
          <div class="h-20 w-full flex items-center justify-center">
            <div class="bg-gradient-to-br from-amber-100 to-amber-50 p-3 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-amber-700">
                <rect x="4" y="8" width="16" height="12" rx="2"/>
                <path d="M8 8V5c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v3"/>
                <path d="M2 14h2"/>
                <path d="M20 14h2"/>
                <path d="M6 18h12"/>
              </svg>
            </div>
          </div>
          <span class="text-xs font-bold mt-2 text-gray-800">Déménagement</span>
        </div>
      </div>
    </div>

    <!-- Search Bar with improved styling -->
    <div class="px-4 mt-5 animate-fadeIn animation-delay-200">
      <div class="bg-white rounded-full flex items-center p-2 pr-1 shadow-lg border border-yellow-200">
        <div class="ml-2 mr-2 bg-gradient-to-r from-orange-400 to-amber-500 p-1 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-white">
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
            <circle cx="7" cy="17" r="2"/>
            <path d="M9 17h6"/>
            <circle cx="17" cy="17" r="2"/>
          </svg>
        </div>
        <input 
          type="text" 
          placeholder="Où allons nous ?" 
          class="flex-1 bg-transparent border-none focus:outline-none text-sm font-medium"
        />
        <button class="bg-black text-white rounded-full p-2 shadow-md transform transition-all hover:scale-105 active:scale-95">
          <chevron-right-icon class="h-5 w-5" />
        </button>
      </div>
    </div>

    <!-- Recent Locations with corrected text alignment -->
    <div class="px-4 mt-5 grid grid-cols-3 gap-3 animate-fadeIn animation-delay-300">
      <!-- Akpakpa -->
      <div class="bg-white rounded-2xl p-3 flex flex-col items-center shadow-lg transform transition-all hover:scale-105 active:scale-95 hover:shadow-xl border-t-4 border-yellow-400">
        <div class="h-12 flex items-center justify-center">
          <span class="text-xs font-bold text-gray-800">Akpakpa</span>
        </div>
        <div class="bg-gray-100 p-2 rounded-full mt-1">
          <map-pin-icon class="h-5 w-5 text-gray-500" />
        </div>
      </div>
      
      <!-- Calavi, emba -->
      <div class="bg-white rounded-2xl p-3 flex flex-col items-center shadow-lg transform transition-all hover:scale-105 active:scale-95 hover:shadow-xl border-t-4 border-yellow-400">
        <div class="h-12 flex flex-col items-center justify-center">
          <span class="text-xs font-bold text-gray-800">Calavi, emba</span>
          <div class="text-xs text-gray-500 font-medium">cite 12</div>
        </div>
        <div class="bg-gray-100 p-2 rounded-full mt-1">
          <map-pin-icon class="h-5 w-5 text-gray-500" />
        </div>
      </div>
      
      <!-- Ouidah, 36 -->
      <div class="bg-white rounded-2xl p-3 flex flex-col items-center shadow-lg transform transition-all hover:scale-105 active:scale-95 hover:shadow-xl border-t-4 border-yellow-400">
        <div class="h-12 flex items-center justify-center">
          <span class="text-xs font-bold text-gray-800">Ouidah, 36</span>
        </div>
        <div class="bg-gray-100 p-2 rounded-full mt-1">
          <map-pin-icon class="h-5 w-5 text-gray-500" />
        </div>
      </div>
    </div>

    <!-- Bottom Navigation with improved styling -->
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-yellow-200 flex justify-around py-3 z-10 shadow-lg animate-slideUp">
      <button class="flex flex-col items-center w-1/3 transform transition-all hover:scale-110 active:scale-95">
        <div class="bg-[#FFCC00] p-2 rounded-full shadow-md">
          <home-icon class="h-5 w-5 text-white" />
        </div>
        <span class="text-xs mt-1 font-bold text-[#FFCC00]">Accueil</span>
      </button>
      <button @click="goToSearch()" class="flex flex-col items-center w-1/3 transform transition-all hover:scale-110 active:scale-95">
        <div class="bg-gray-100 p-2 rounded-full">
          <search-icon class="h-5 w-5 text-gray-500" />
        </div>
        <span class="text-xs mt-1 font-medium text-gray-500">Recherche</span>
      </button>
      <button @click="goToprofil()" class="flex flex-col items-center w-1/3 transform transition-all hover:scale-110 active:scale-95">
        <div class="bg-gray-100 p-2 rounded-full">
          <user-icon class="h-5 w-5 text-gray-500" />
        </div>
        <span class="text-xs mt-1 font-medium text-gray-500">Profil</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { 
  HomeIcon, 
  UserIcon, 
  MapPinIcon, 
  SearchIcon, 
  PlusIcon,
  MenuIcon,
  ShoppingCartIcon,
  ChevronRightIcon,
  ZapIcon,
  CircleIcon,
  TruckIcon,
  PackageIcon,
  CarIcon,
  BriefcaseIcon,
  TicketIcon
} from 'lucide-vue-next';

// Active tab state

const router = useRouter();

function goToprofil() {
  router.push('/profile');
}

function goToSearch() {
  router.push('/search');
}

function goToFood() {
  router.push('/food');
}
const activeTab = ref('home');
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Styles personnalisés */
body {
  @apply antialiased;
  touch-action: manipulation;
}

input:focus {
  outline: none;
}

/* Animations et transitions */
.transition-all {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideUp {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-out forwards;
}

.animate-slideUp {
  animation: slideUp 0.5s ease-out forwards;
}

.animation-delay-100 {
  animation-delay: 0.1s;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-300 {
  animation-delay: 0.3s;
}

/* Optimisations pour mobile */
@media (max-width: 640px) {
  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

/* Désactiver le surlignage au toucher sur mobile */
* {
  -webkit-tap-highlight-color: transparent;
}
</style>