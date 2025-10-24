<template>
    <div class="min-h-screen bg-gray-50 text-gray-900 pb-20">
      <!-- Header -->
      <div class="bg-white p-4 rounded-b-3xl shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center">
            <div class="bg-[#FFDE59] h-10 w-10 rounded-full flex items-center justify-center mr-3">
              <coffee-icon class="h-6 w-6 text-black" />
            </div>
            <div>
              <h1 class="text-xl font-bold">Foods</h1>
              <div class="flex items-center text-sm text-gray-600">
                <map-pin-icon class="h-3 w-3 mr-1" />
                <span>Cotonou, houeyiho 39</span>
                <circle-icon class="h-1 w-1 mx-1 text-gray-400" />
              </div>
            </div>
          </div>
          <div class="flex items-center">
            <button class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mr-2">
              Maintenant
            </button>
            <button class="bg-gray-100 p-2 rounded-full">
              <x-icon class="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>
        
        <!-- Search Bar -->
        <div class="bg-gray-100 rounded-full flex items-center p-3 mb-2">
          <search-icon class="h-5 w-5 text-gray-500 mr-2" />
          <span class="text-gray-500 text-sm">Rechercher</span>
        </div>
      </div>
  
      <!-- Categories Grid -->
      <div class="p-4">
        <div class="grid grid-cols-4 gap-4">
          <!-- Restaurants -->
          <div class="bg-white rounded-xl p-3 flex flex-col items-center shadow-sm">
            <div class="h-16 w-16 mb-2 overflow-hidden rounded-lg">
              <img src="https://img.freepik.com/free-photo/top-view-noodles-with-fried-vegetables-with-tomatoes-salad-other-dishes-table_141793-13159.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" alt="Restaurants" class="h-full w-full object-cover" />
            </div>
            <span class="text-xs font-medium text-center">Restaurants</span>
          </div>
          
          <!-- Produits alimentaires -->
          <div class="bg-white rounded-xl p-3 flex flex-col items-center shadow-sm">
            <div class="h-16 w-16 mb-2 overflow-hidden rounded-lg">
              <img src="https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38014.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" alt="Produits alimentaires" class="h-full w-full object-cover" />
            </div>
            <span class="text-xs font-medium text-center">Produits alimentaires</span>
          </div>
          
          <!-- Pharmacies -->
          <div class="bg-white rounded-xl p-3 flex flex-col items-center shadow-sm">
            <div class="h-16 w-16 mb-2 overflow-hidden rounded-lg">
              <img src="https://img.freepik.com/free-photo/medicine-capsules-global-health-with-geometric-pattern-digital-remix_53876-126742.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" alt="Pharmacies" class="h-full w-full object-cover" />
            </div>
            <span class="text-xs font-medium text-center">Pharmacies</span>
          </div>
          
          <!-- Beauté -->
          <div class="bg-white rounded-xl p-3 flex flex-col items-center shadow-sm">
            <div class="h-16 w-16 mb-2 overflow-hidden rounded-lg">
              <img src="https://img.freepik.com/free-photo/flat-lay-natural-self-care-products-composition_23-2148990019.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" alt="Beauté" class="h-full w-full object-cover" />
            </div>
            <span class="text-xs font-medium text-center">Beauté</span>
          </div>
          
          <!-- Animaux domestiques -->
          <div class="bg-white rounded-xl p-3 flex flex-col items-center shadow-sm">
            <div class="h-16 w-16 mb-2 overflow-hidden rounded-lg">
              <img src="https://img.freepik.com/free-photo/cute-domestic-kitten-sitting-food-bowl-eating-pet-food_23-2149088026.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" alt="Animaux domestiques" class="h-full w-full object-cover" />
            </div>
            <span class="text-xs font-medium text-center">Animaux domestiques</span>
          </div>
          
          <!-- Fleurs -->
          <div class="bg-white rounded-xl p-3 flex flex-col items-center shadow-sm">
            <div class="h-16 w-16 mb-2 overflow-hidden rounded-lg">
              <img src="https://img.freepik.com/free-photo/beautiful-bouquet-flowers-vase_23-2149274079.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" alt="Fleurs" class="h-full w-full object-cover" />
            </div>
            <span class="text-xs font-medium text-center">Fleurs</span>
          </div>
          
          <!-- Encore -->
          <div class="bg-white rounded-xl p-3 flex flex-col items-center shadow-sm">
            <div class="h-16 w-16 mb-2 flex items-center justify-center">
              <grid-icon class="h-8 w-8 text-gray-400" />
            </div>
            <span class="text-xs font-medium text-center">Encore</span>
          </div>
        </div>
      </div>
  
      <!-- Produit alimentaire Section -->
      <div class="px-4 mt-2">
        <div class="flex items-center justify-between mb-3">
          <h2 class="text-lg font-bold">Produit alimentaire</h2>
          <button class="text-sm text-gray-500 font-medium flex items-center">
            Tous
            <chevron-right-icon class="h-4 w-4 ml-1" />
          </button>
        </div>
        
        <div class="grid grid-cols-3 gap-3">
          <!-- Super U -->
          <div class="bg-white rounded-xl overflow-hidden shadow-sm">
            <div class="h-24 w-full overflow-hidden">
              <img src="https://img.freepik.com/free-photo/assortment-fresh-fruits-vegetables-wooden-table_23-2148165334.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" alt="Super U" class="w-full h-full object-cover" />
            </div>
            <div class="p-2">
              <div class="font-medium text-sm">Super U</div>
              <div class="text-xs text-gray-500">30-50 min</div>
            </div>
          </div>
          
          <!-- Carrefour -->
          <div class="bg-white rounded-xl overflow-hidden shadow-sm">
            <div class="h-24 w-full overflow-hidden">
              <img src="https://img.freepik.com/free-photo/fresh-baked-bread-bakery-table_144627-8761.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" alt="Carrefour" class="w-full h-full object-cover" />
            </div>
            <div class="p-2">
              <div class="font-medium text-sm">Carrefour</div>
              <div class="text-xs text-gray-500">1.5-2h</div>
            </div>
          </div>
          
          <!-- Auchan -->
          <div class="bg-white rounded-xl overflow-hidden shadow-sm">
            <div class="h-24 w-full overflow-hidden">
              <img src="https://img.freepik.com/free-photo/raw-fish-market_1398-2421.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" alt="Auchan" class="w-full h-full object-cover" />
            </div>
            <div class="p-2">
              <div class="font-medium text-sm">Auchan</div>
              <div class="text-xs text-gray-500">30-50 min</div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Commandes récentes Section -->
      <div class="px-4 mt-6">
        <div class="flex items-center justify-between mb-3">
          <h2 class="text-lg font-bold">Vous avez passé une commande</h2>
          <button class="text-sm text-gray-500 font-medium flex items-center">
            Tous
            <chevron-right-icon class="h-4 w-4 ml-1" />
          </button>
        </div>
        
        <div class="grid grid-cols-2 gap-3">
          <!-- KFC -->
          <div class="bg-white rounded-xl overflow-hidden shadow-sm relative">
            <img src="https://img.freepik.com/free-photo/crispy-fried-chicken-plate-with-salad-carrot_1150-20212.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" alt="KFC" class="w-full h-32 object-cover" />
            <div class="absolute top-2 right-2 bg-white p-1 rounded-full">
              <bookmark-icon class="h-5 w-5 text-gray-400" />
            </div>
            <div class="p-2">
              <div class="font-medium">KFC</div>
              <div class="text-xs text-gray-500">Il y a 2 jours</div>
            </div>
          </div>
          
          <!-- Burger King -->
          <div class="bg-white rounded-xl overflow-hidden shadow-sm relative">
            <img src="https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" alt="Burger King" class="w-full h-32 object-cover" />
            <div class="absolute top-2 right-2 bg-white p-1 rounded-full">
              <bookmark-icon class="h-5 w-5 text-gray-400" />
            </div>
            <div class="p-2">
              <div class="font-medium">Burger King</div>
              <div class="text-xs text-gray-500">Il y a 5 jours</div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Restaurants populaires Section -->
      <div class="px-4 mt-6">
        <div class="flex items-center justify-between mb-3">
          <h2 class="text-lg font-bold">Restaurants populaires</h2>
          <button class="text-sm text-gray-500 font-medium flex items-center">
            Tous
            <chevron-right-icon class="h-4 w-4 ml-1" />
          </button>
        </div>
        
        <div class="grid grid-cols-1 gap-3">
          <!-- Restaurant 1 -->
          <div @click="goToDetail()" class="bg-white rounded-xl overflow-hidden shadow-sm">
            <div class="flex">
              <div class="w-24 h-24 overflow-hidden">
                <img src="https://img.freepik.com/free-photo/african-american-man-cooking-kitchen_23-2149056776.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" alt="Restaurant Africain" class="w-full h-full object-cover" />
              </div>
              <div class="p-3 flex-1">
                <div class="font-medium">Restaurant Africain</div>
                <div class="text-xs text-gray-500 mb-1">Cuisine locale • 1.2 km</div>
                <div class="flex items-center">
                  <star-icon class="h-4 w-4 text-[#FFCC00] fill-[#FFCC00]" />
                  <span class="text-xs ml-1">4.8 (120+)</span>
                  <span class="text-xs ml-2 px-1 py-0.5 bg-gray-100 rounded">30-45 min</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Restaurant 2 -->
          <div class="bg-white rounded-xl overflow-hidden shadow-sm">
            <div class="flex">
              <div class="w-24 h-24 overflow-hidden">
                <img src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" alt="Pizzeria Napoli" class="w-full h-full object-cover" />
              </div>
              <div class="p-3 flex-1">
                <div class="font-medium">Pizzeria Napoli</div>
                <div class="text-xs text-gray-500 mb-1">Italien • 0.8 km</div>
                <div class="flex items-center">
                  <star-icon class="h-4 w-4 text-[#FFCC00] fill-[#FFCC00]" />
                  <span class="text-xs ml-1">4.6 (85+)</span>
                  <span class="text-xs ml-2 px-1 py-0.5 bg-gray-100 rounded">20-35 min</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Restaurant 3 -->
          <div class="bg-white rounded-xl overflow-hidden shadow-sm">
            <div class="flex">
              <div class="w-24 h-24 overflow-hidden">
                <img src="https://img.freepik.com/free-photo/side-view-sushi-set-with-soy-sauce-chopsticks-wooden-serving-board_176474-3234.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" alt="Sushi House" class="w-full h-full object-cover" />
              </div>
              <div class="p-3 flex-1">
                <div class="font-medium">Sushi House</div>
                <div class="text-xs text-gray-500 mb-1">Japonais • 2.5 km</div>
                <div class="flex items-center">
                  <star-icon class="h-4 w-4 text-[#FFCC00] fill-[#FFCC00]" />
                  <span class="text-xs ml-1">4.9 (200+)</span>
                  <span class="text-xs ml-2 px-1 py-0.5 bg-gray-100 rounded">40-55 min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Bottom Navigation -->
      <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-3 z-10 shadow-lg">
        <button class="flex flex-col items-center">
          <home-icon class="h-6 w-6 text-[#FFCC00]" />
        </button>
        <button class="flex flex-col items-center">
          <search-icon class="h-6 w-6 text-gray-400" />
        </button>
        <button class="flex flex-col items-center">
          <shopping-bag-icon class="h-6 w-6 text-gray-400" />
        </button>
        <button class="flex flex-col items-center">
          <user-icon class="h-6 w-6 text-gray-400" />
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
    XIcon,
    CoffeeIcon,
    CircleIcon,
    GridIcon,
    ChevronRightIcon,
    BookmarkIcon,
    ShoppingBagIcon,
    StarIcon
  } from 'lucide-vue-next';

  const router = useRouter();

  function goToDetail() {
    router.push('/food-detail');
  }
  </script>
  
  <style scoped>
  /* Styles spécifiques à la page Foods */
  .rounded-b-3xl {
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
  }
  
  /* Désactiver le surlignage au toucher sur mobile */
  * {
    -webkit-tap-highlight-color: transparent;
  }
  
  /* Animation pour les boutons */
  button {
    transition: all 0.1s ease;
  }
  
  button:active {
    transform: scale(0.95);
  }
  </style>