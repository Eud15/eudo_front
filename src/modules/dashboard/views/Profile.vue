<template>
    <div class="min-h-screen bg-gradient-to-b from-[#FFDE59] to-[#FFD000] text-gray-900 pb-20">
      <!-- Header with subtle animation -->
      <div class="pt-6 px-5 pb-3 animate-fadeIn">
        <div class="flex items-center justify-between">
          <button class="text-black p-2 -ml-2 hover:bg-white/20 rounded-full transition-all">
            <chevron-left-icon class="h-6 w-6" />
          </button>
          <div class="text-center">
            <h1 class="text-xl font-extrabold text-black tracking-tight">Mon Profil</h1>
          </div>
          <button class="text-black p-2 -mr-2 hover:bg-white/20 rounded-full transition-all">
            <settings-icon class="h-6 w-6" />
          </button>
        </div>
      </div>
  
      <!-- User Profile Card -->
      <div class="px-4 animate-fadeIn animation-delay-100">
        <div class="bg-white rounded-2xl p-5 shadow-lg">
          <div class="flex items-center">
            <div class="bg-gradient-to-br from-[#FFCC00] to-[#FF9500] h-16 w-16 rounded-full flex items-center justify-center shadow-md">
              <user-icon class="h-8 w-8 text-white" />
            </div>
            <div class="ml-4">
              <h2 class="text-xl font-bold text-gray-800">AIMONTCHE Celfrid</h2>
              <div class="flex items-center text-gray-600 mt-1">
                <phone-icon class="h-4 w-4 mr-1" />
                <span>+229 62345732</span>
              </div>
            </div>
            <div class="ml-auto">
              <button class="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-all">
                <edit-icon class="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
          
          <!-- User Stats -->
          <div class="grid grid-cols-3 gap-3 mt-5 text-center">
            <div class="bg-gray-50 rounded-xl p-3">
              <div class="text-lg font-bold text-[#FFCC00]">12</div>
              <div class="text-xs text-gray-600 font-medium">Courses</div>
            </div>
            <div class="bg-gray-50 rounded-xl p-3">
              <div class="text-lg font-bold text-[#FFCC00]">4.8</div>
              <div class="text-xs text-gray-600 font-medium">Note</div>
            </div>
            <div class="bg-gray-50 rounded-xl p-3">
              <div class="text-lg font-bold text-[#FFCC00]">3</div>
              <div class="text-xs text-gray-600 font-medium">Favoris</div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Profile Options -->
      <div class="px-4 mt-5 animate-fadeIn animation-delay-200">
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
          <!-- Option Groups -->
          <div class="divide-y divide-gray-100">
            <!-- Account Group -->
            <div class="p-4">
              <h3 class="text-sm font-bold text-gray-500 uppercase mb-3">Compte</h3>
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="bg-blue-100 p-2 rounded-lg mr-3">
                      <map-pin-icon class="h-5 w-5 text-blue-600" />
                    </div>
                    <span class="font-medium">Adresse actuelle</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-sm text-gray-500 mr-2">cocotomey, marché, 11</span>
                    <chevron-right-icon class="h-5 w-5 text-gray-400" />
                  </div>
                </div>
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="bg-purple-100 p-2 rounded-lg mr-3">
                      <clipboard-list-icon class="h-5 w-5 text-purple-600" />
                    </div>
                    <span class="font-medium">Historique des commandes</span>
                  </div>
                  <chevron-right-icon class="h-5 w-5 text-gray-400" />
                </div>
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="bg-green-100 p-2 rounded-lg mr-3">
                      <credit-card-icon class="h-5 w-5 text-green-600" />
                    </div>
                    <span class="font-medium">Modes de paiement</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-sm text-gray-500 mr-2">Card .... 4617</span>
                    <chevron-right-icon class="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Services Group -->
            <div class="p-4">
              <h3 class="text-sm font-bold text-gray-500 uppercase mb-3">Services</h3>
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="bg-yellow-100 p-2 rounded-lg mr-3">
                      <star-icon class="h-5 w-5 text-yellow-600" />
                    </div>
                    <span class="font-medium">Activer Y.Plus</span>
                  </div>
                  <chevron-right-icon class="h-5 w-5 text-gray-400" />
                </div>
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="bg-red-100 p-2 rounded-lg mr-3">
                      <heart-icon class="h-5 w-5 text-red-600" />
                    </div>
                    <span class="font-medium">Coup de main</span>
                  </div>
                  <chevron-right-icon class="h-5 w-5 text-gray-400" />
                </div>
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="bg-indigo-100 p-2 rounded-lg mr-3">
                      <users-icon class="h-5 w-5 text-indigo-600" />
                    </div>
                    <span class="font-medium">Un projet social RAPIDO</span>
                  </div>
                  <chevron-right-icon class="h-5 w-5 text-gray-400" />
                </div>
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="bg-gray-100 p-2 rounded-lg mr-3">
                      <briefcase-icon class="h-5 w-5 text-gray-600" />
                    </div>
                    <span class="font-medium">Compte professionnel</span>
                  </div>
                  <chevron-right-icon class="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            
            <!-- Support Group -->
            <div class="p-4">
              <h3 class="text-sm font-bold text-gray-500 uppercase mb-3">Support & Sécurité</h3>
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="bg-teal-100 p-2 rounded-lg mr-3">
                      <help-circle-icon class="h-5 w-5 text-teal-600" />
                    </div>
                    <span class="font-medium">Service d'assistance</span>
                  </div>
                  <chevron-right-icon class="h-5 w-5 text-gray-400" />
                </div>
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="bg-orange-100 p-2 rounded-lg mr-3">
                      <shield-icon class="h-5 w-5 text-orange-600" />
                    </div>
                    <span class="font-medium">Sécurité</span>
                  </div>
                  <chevron-right-icon class="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            
            <!-- Preferences Group -->
            <div class="p-4">
              <h3 class="text-sm font-bold text-gray-500 uppercase mb-3">Préférences</h3>
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="bg-pink-100 p-2 rounded-lg mr-3">
                      <map-icon class="h-5 w-5 text-pink-600" />
                    </div>
                    <span class="font-medium">Lieux favoris</span>
                  </div>
                  <chevron-right-icon class="h-5 w-5 text-gray-400" />
                </div>
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="bg-emerald-100 p-2 rounded-lg mr-3">
                      <tag-icon class="h-5 w-5 text-emerald-600" />
                    </div>
                    <span class="font-medium">Réductions</span>
                  </div>
                  <chevron-right-icon class="h-5 w-5 text-gray-400" />
                </div>
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="bg-amber-100 p-2 rounded-lg mr-3">
                      <ticket-icon class="h-5 w-5 text-amber-600" />
                    </div>
                    <span class="font-medium">Saisir le code promotionnel</span>
                  </div>
                  <chevron-right-icon class="h-5 w-5 text-gray-400" />
                </div>
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="bg-violet-100 p-2 rounded-lg mr-3">
                      <users-icon class="h-5 w-5 text-violet-600" />
                    </div>
                    <span class="font-medium">Compte familial</span>
                  </div>
                  <chevron-right-icon class="h-5 w-5 text-gray-400" />
                </div>
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="bg-blue-100 p-2 rounded-lg mr-3">
                      <info-icon class="h-5 w-5 text-blue-600" />
                    </div>
                    <span class="font-medium">Informations</span>
                  </div>
                  <chevron-right-icon class="h-5 w-5 text-gray-400" />
                </div>
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="bg-gray-100 p-2 rounded-lg mr-3">
                      <plus-icon class="h-5 w-5 text-gray-600" />
                    </div>
                    <span class="font-medium">Plus</span>
                  </div>
                  <chevron-right-icon class="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Logout Button -->
      <div class="px-4 mt-5 mb-24 animate-fadeIn animation-delay-300">
        <button class="w-full bg-white text-red-500 font-bold py-3 rounded-xl shadow-md hover:bg-gray-50 transition-all flex items-center justify-center">
          <log-out-icon class="h-5 w-5 mr-2" />
          Déconnexion
        </button>
      </div>
  
      <!-- Bottom Navigation -->
      <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-yellow-200 flex justify-around py-3 z-10 shadow-lg animate-slideUp">
        <button @click="goToHome()" class="flex flex-col items-center w-1/3 transform transition-all hover:scale-110 active:scale-95">
          <div class="bg-gray-100 p-2 rounded-full">
            <home-icon class="h-5 w-5 text-gray-500" />
          </div>
          <span class="text-xs mt-1 font-medium text-gray-500">Accueil</span>
        </button>
        <button class="flex flex-col items-center w-1/3 transform transition-all hover:scale-110 active:scale-95">
          <div class="bg-gray-100 p-2 rounded-full">
            <search-icon class="h-5 w-5 text-gray-500" />
          </div>
          <span class="text-xs mt-1 font-medium text-gray-500">Recherche</span>
        </button>
        <button class="flex flex-col items-center w-1/3 transform transition-all hover:scale-110 active:scale-95">
          <div class="bg-[#FFCC00] p-2 rounded-full shadow-md">
            <user-icon class="h-5 w-5 text-white" />
          </div>
          <span class="text-xs mt-1 font-bold text-[#FFCC00]">Profil</span>
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
    ChevronLeftIcon,
    ChevronRightIcon,
    SettingsIcon,
    PhoneIcon,
    EditIcon,
    ClipboardListIcon,
    CreditCardIcon,
    StarIcon,
    HeartIcon,
    UsersIcon,
    BriefcaseIcon,
    HelpCircleIcon,
    ShieldIcon,
    MapIcon,
    TagIcon,
    TicketIcon,
    InfoIcon,
    LogOutIcon
  } from 'lucide-vue-next';

  const router = useRouter();

  function goToHome() {
    router.push('/rapido');
  }
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
  
  /* Désactiver le surlignage au toucher sur mobile */
  * {
    -webkit-tap-highlight-color: transparent;
  }
  </style>