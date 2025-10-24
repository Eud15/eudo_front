<template>
    <div class="min-h-screen bg-gray-50 text-gray-900 pb-20">
      <!-- Image de couverture et bouton retour -->
      <div class="relative">
        <img 
          src="https://img.freepik.com/free-photo/interior-shot-cafe-with-chairs-near-bar-with-wooden-tables_181624-1669.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" 
          alt="Restaurant Cover" 
          class="w-full h-56 object-cover"
        />
        <div class="absolute top-0 left-0 w-full p-4 flex justify-between items-center">
          <button 
            @click="$emit('navigate', 'foods')" 
            class="bg-white p-2 rounded-full shadow-md"
          >
            <arrow-left-icon class="h-5 w-5 text-gray-800" />
          </button>
          <div class="flex gap-2">
            <button class="bg-white p-2 rounded-full shadow-md">
              <share-icon class="h-5 w-5 text-gray-800" />
            </button>
            <button class="bg-white p-2 rounded-full shadow-md">
              <heart-icon class="h-5 w-5 text-gray-800" />
            </button>
          </div>
        </div>
        <div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
          <div class="flex items-center">
            <div class="bg-[#FFDE59] h-12 w-12 rounded-xl flex items-center justify-center mr-3 shadow-lg">
              <utensils-icon class="h-6 w-6 text-black" />
            </div>
          </div>
        </div>
      </div>
  
      <!-- Informations du restaurant -->
      <div class="bg-white rounded-t-3xl -mt-6 relative z-10 p-4 shadow-sm">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-xl font-bold">Pizzeria Napoli</h1>
            <div class="flex items-center text-sm text-gray-600 mt-1">
              <pizza-icon class="h-4 w-4 mr-1 text-[#FFCC00]" />
              <span>Italien • Pizza • Pâtes</span>
            </div>
          </div>
          <div class="bg-[#FFDE59] p-2 rounded-lg shadow-md">
            <star-icon class="h-5 w-5 text-black" fill="black" />
          </div>
        </div>
  
        <div class="flex items-center mt-3 text-sm">
          <div class="flex items-center mr-4">
            <star-icon class="h-4 w-4 text-[#FFCC00] fill-[#FFCC00] mr-1" />
            <span class="font-medium">4.8</span>
            <span class="text-gray-500 ml-1">(120+)</span>
          </div>
          <div class="flex items-center mr-4">
            <clock-icon class="h-4 w-4 text-gray-500 mr-1" />
            <span>20-35 min</span>
          </div>
          <div class="flex items-center">
            <map-pin-icon class="h-4 w-4 text-gray-500 mr-1" />
            <span>0.8 km</span>
          </div>
        </div>
  
        <!-- Badges -->
        <div class="flex flex-wrap gap-2 mt-3">
          <div class="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full flex items-center">
            <check-circle-icon class="h-3 w-3 mr-1" />
            <span>Livraison gratuite</span>
          </div>
          <div class="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full flex items-center">
            <truck-icon class="h-3 w-3 mr-1" />
            <span>Livraison rapide</span>
          </div>
          <div class="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full flex items-center">
            <thumbs-up-icon class="h-3 w-3 mr-1" />
            <span>Très bien noté</span>
          </div>
        </div>
  
        <!-- Offre promotionnelle -->
        <div class="bg-[#FFF8E1] border border-[#FFDE59] rounded-lg p-3 mt-4 flex items-center">
          <percent-icon class="h-5 w-5 text-[#FFCC00] mr-2" />
          <div>
            <p class="text-sm font-medium">20% de réduction sur votre première commande</p>
            <p class="text-xs text-gray-600">Utilisez le code: RAPIDO20</p>
          </div>
        </div>
      </div>
  
      <!-- Navigation du menu -->
      <div class="bg-white sticky top-0 z-20 shadow-sm">
        <div class="overflow-x-auto scrollbar-hide">
          <div class="flex p-2 space-x-2 min-w-max">
            <button 
              v-for="category in menuCategories" 
              :key="category.id"
              @click="activeCategory = category.id"
              :class="[
                'px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors flex items-center',
                activeCategory === category.id 
                  ? 'bg-[#FFDE59] text-black font-medium' 
                  : 'bg-gray-100 text-gray-700'
              ]"
            >
              <component :is="category.icon" class="h-4 w-4 mr-1.5" />
              {{ category.name }}
            </button>
          </div>
        </div>
      </div>
  
      <!-- Contenu du menu -->
      <div class="p-4">
        <!-- Populaires -->
        <div v-if="activeCategory === 'popular'" class="space-y-4">
          <h2 class="text-lg font-bold flex items-center">
            <flame-icon class="h-5 w-5 mr-2 text-orange-500" />
            Les plus populaires
          </h2>
          
          <div class="bg-white rounded-xl overflow-hidden shadow-sm">
            <div class="flex">
              <div class="p-3 flex-1">
                <div class="font-medium">Pizza Margherita</div>
                <div class="text-xs text-gray-500 mt-1 mb-2">
                  Sauce tomate, mozzarella, basilic frais, huile d'olive
                </div>
                <div class="flex items-center justify-between">
                  <span class="font-bold">8,90 €</span>
                  <button class="bg-[#FFDE59] p-1 rounded-lg shadow-sm">
                    <plus-icon class="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div class="w-28 h-28 overflow-hidden">
                <img 
                  src="https://img.freepik.com/free-photo/pizza-margarita-wooden-table_140725-9150.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" 
                  alt="Pizza Margherita" 
                  class="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
  
          <div class="bg-white rounded-xl overflow-hidden shadow-sm">
            <div class="flex">
              <div class="p-3 flex-1">
                <div class="font-medium flex items-center">
                  Pizza Quattro Formaggi
                  <badge-icon class="h-4 w-4 ml-1 text-[#FFCC00]" fill="#FFCC00" />
                </div>
                <div class="text-xs text-gray-500 mt-1 mb-2">
                  Mozzarella, gorgonzola, parmesan, ricotta
                </div>
                <div class="flex items-center justify-between">
                  <span class="font-bold">11,90 €</span>
                  <button class="bg-[#FFDE59] p-1 rounded-lg shadow-sm">
                    <plus-icon class="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div class="w-28 h-28 overflow-hidden">
                <img 
                  src="https://img.freepik.com/free-photo/pizza-four-cheeses-wooden-board_140725-9287.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" 
                  alt="Pizza Quattro Formaggi" 
                  class="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
  
          <div class="bg-white rounded-xl overflow-hidden shadow-sm">
            <div class="flex">
              <div class="p-3 flex-1">
                <div class="font-medium">Tiramisu</div>
                <div class="text-xs text-gray-500 mt-1 mb-2">
                  Mascarpone, café, cacao, biscuits
                </div>
                <div class="flex items-center justify-between">
                  <span class="font-bold">6,50 €</span>
                  <button class="bg-[#FFDE59] p-1 rounded-lg shadow-sm">
                    <plus-icon class="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div class="w-28 h-28 overflow-hidden">
                <img 
                  src="https://img.freepik.com/free-photo/tiramisu-dessert-rustic-wooden-table_123827-21182.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" 
                  alt="Tiramisu" 
                  class="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
  
        <!-- Pizzas -->
        <div v-if="activeCategory === 'pizzas'" class="space-y-4">
          <h2 class="text-lg font-bold flex items-center">
            <pizza-icon class="h-5 w-5 mr-2 text-red-500" />
            Pizzas
          </h2>
          
          <div class="bg-white rounded-xl overflow-hidden shadow-sm">
            <div class="flex">
              <div class="p-3 flex-1">
                <div class="font-medium">Pizza Margherita</div>
                <div class="text-xs text-gray-500 mt-1 mb-2">
                  Sauce tomate, mozzarella, basilic frais, huile d'olive
                </div>
                <div class="flex items-center justify-between">
                  <span class="font-bold">8,90 €</span>
                  <button class="bg-[#FFDE59] p-1 rounded-lg shadow-sm">
                    <plus-icon class="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div class="w-28 h-28 overflow-hidden">
                <img 
                  src="https://img.freepik.com/free-photo/pizza-margarita-wooden-table_140725-9150.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" 
                  alt="Pizza Margherita" 
                  class="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
  
          <div class="bg-white rounded-xl overflow-hidden shadow-sm">
            <div class="flex">
              <div class="p-3 flex-1">
                <div class="font-medium flex items-center">
                  Pizza Pepperoni
                  <fire-icon class="h-4 w-4 ml-1 text-red-500" />
                </div>
                <div class="text-xs text-gray-500 mt-1 mb-2">
                  Sauce tomate, mozzarella, pepperoni, origan
                </div>
                <div class="flex items-center justify-between">
                  <span class="font-bold">10,90 €</span>
                  <button class="bg-[#FFDE59] p-1 rounded-lg shadow-sm">
                    <plus-icon class="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div class="w-28 h-28 overflow-hidden">
                <img 
                  src="https://img.freepik.com/free-photo/pepperoni-pizza-with-mushrooms-table_140725-1454.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" 
                  alt="Pizza Pepperoni" 
                  class="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
  
          <div class="bg-white rounded-xl overflow-hidden shadow-sm">
            <div class="flex">
              <div class="p-3 flex-1">
                <div class="font-medium flex items-center">
                  Pizza Végétarienne
                  <leaf-icon class="h-4 w-4 ml-1 text-green-500" />
                </div>
                <div class="text-xs text-gray-500 mt-1 mb-2">
                  Sauce tomate, mozzarella, poivrons, champignons, oignons, olives
                </div>
                <div class="flex items-center justify-between">
                  <span class="font-bold">11,50 €</span>
                  <button class="bg-[#FFDE59] p-1 rounded-lg shadow-sm">
                    <plus-icon class="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div class="w-28 h-28 overflow-hidden">
                <img 
                  src="https://img.freepik.com/free-photo/vegetarian-pizza-with-mushrooms-olives_140725-1228.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" 
                  alt="Pizza Végétarienne" 
                  class="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
  
        <!-- Pâtes -->
        <div v-if="activeCategory === 'pastas'" class="space-y-4">
          <h2 class="text-lg font-bold flex items-center">
            <noodles-icon class="h-5 w-5 mr-2 text-yellow-600" />
            Pâtes
          </h2>
          
          <div class="bg-white rounded-xl overflow-hidden shadow-sm">
            <div class="flex">
              <div class="p-3 flex-1">
                <div class="font-medium flex items-center">
                  Spaghetti Carbonara
                  <badge-icon class="h-4 w-4 ml-1 text-[#FFCC00]" fill="#FFCC00" />
                </div>
                <div class="text-xs text-gray-500 mt-1 mb-2">
                  Spaghetti, œuf, pancetta, parmesan, poivre noir
                </div>
                <div class="flex items-center justify-between">
                  <span class="font-bold">12,90 €</span>
                  <button class="bg-[#FFDE59] p-1 rounded-lg shadow-sm">
                    <plus-icon class="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div class="w-28 h-28 overflow-hidden">
                <img 
                  src="https://img.freepik.com/free-photo/spaghetti-carbonara-with-bacon-parmesan-wooden-table_123827-20.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" 
                  alt="Spaghetti Carbonara" 
                  class="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
  
          <div class="bg-white rounded-xl overflow-hidden shadow-sm">
            <div class="flex">
              <div class="p-3 flex-1">
                <div class="font-medium">Lasagnes Bolognaise</div>
                <div class="text-xs text-gray-500 mt-1 mb-2">
                  Pâtes, viande de bœuf, sauce tomate, béchamel, parmesan
                </div>
                <div class="flex items-center justify-between">
                  <span class="font-bold">13,50 €</span>
                  <button class="bg-[#FFDE59] p-1 rounded-lg shadow-sm">
                    <plus-icon class="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div class="w-28 h-28 overflow-hidden">
                <img 
                  src="https://img.freepik.com/free-photo/lasagna-plate_144627-18110.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" 
                  alt="Lasagnes Bolognaise" 
                  class="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
  
          <div class="bg-white rounded-xl overflow-hidden shadow-sm">
            <div class="flex">
              <div class="p-3 flex-1">
                <div class="font-medium">Penne Arrabiata</div>
                <div class="text-xs text-gray-500 mt-1 mb-2 flex items-center">
                  Penne, sauce tomate piquante, ail, persil
                  <fire-icon class="h-3 w-3 ml-1 text-red-500" />
                </div>
                <div class="flex items-center justify-between">
                  <span class="font-bold">11,90 €</span>
                  <button class="bg-[#FFDE59] p-1 rounded-lg shadow-sm">
                    <plus-icon class="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div class="w-28 h-28 overflow-hidden">
                <img 
                  src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" 
                  alt="Penne Arrabiata" 
                  class="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
  
        <!-- Desserts -->
        <div v-if="activeCategory === 'desserts'" class="space-y-4">
          <h2 class="text-lg font-bold flex items-center">
            <cake-icon class="h-5 w-5 mr-2 text-pink-500" />
            Desserts
          </h2>
          
          <div class="bg-white rounded-xl overflow-hidden shadow-sm">
            <div class="flex">
              <div class="p-3 flex-1">
                <div class="font-medium flex items-center">
                  Tiramisu
                  <badge-icon class="h-4 w-4 ml-1 text-[#FFCC00]" fill="#FFCC00" />
                </div>
                <div class="text-xs text-gray-500 mt-1 mb-2">
                  Mascarpone, café, cacao, biscuits
                </div>
                <div class="flex items-center justify-between">
                  <span class="font-bold">6,50 €</span>
                  <button class="bg-[#FFDE59] p-1 rounded-lg shadow-sm">
                    <plus-icon class="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div class="w-28 h-28 overflow-hidden">
                <img 
                  src="https://img.freepik.com/free-photo/tiramisu-dessert-rustic-wooden-table_123827-21182.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" 
                  alt="Tiramisu" 
                  class="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
  
          <div class="bg-white rounded-xl overflow-hidden shadow-sm">
            <div class="flex">
              <div class="p-3 flex-1">
                <div class="font-medium">Panna Cotta</div>
                <div class="text-xs text-gray-500 mt-1 mb-2">
                  Crème, vanille, coulis de fruits rouges
                </div>
                <div class="flex items-center justify-between">
                  <span class="font-bold">5,90 €</span>
                  <button class="bg-[#FFDE59] p-1 rounded-lg shadow-sm">
                    <plus-icon class="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div class="w-28 h-28 overflow-hidden">
                <img 
                  src="https://img.freepik.com/free-photo/panna-cotta-with-berry-sauce-dessert_2829-11719.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" 
                  alt="Panna Cotta" 
                  class="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
  
          <div class="bg-white rounded-xl overflow-hidden shadow-sm">
            <div class="flex">
              <div class="p-3 flex-1">
                <div class="font-medium">Cannoli Siciliani</div>
                <div class="text-xs text-gray-500 mt-1 mb-2">
                  Tubes croustillants, ricotta sucrée, pépites de chocolat
                </div>
                <div class="flex items-center justify-between">
                  <span class="font-bold">7,50 €</span>
                  <button class="bg-[#FFDE59] p-1 rounded-lg shadow-sm">
                    <plus-icon class="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div class="w-28 h-28 overflow-hidden">
                <img 
                  src="https://img.freepik.com/free-photo/cannoli-siciliani-italian-pastry-dessert_123827-21232.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" 
                  alt="Cannoli Siciliani" 
                  class="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
  
        <!-- Boissons -->
        <div v-if="activeCategory === 'drinks'" class="space-y-4">
          <h2 class="text-lg font-bold flex items-center">
            <glass-water-icon class="h-5 w-5 mr-2 text-blue-500" />
            Boissons
          </h2>
          
          <div class="bg-white rounded-xl overflow-hidden shadow-sm">
            <div class="flex">
              <div class="p-3 flex-1">
                <div class="font-medium">Coca-Cola</div>
                <div class="text-xs text-gray-500 mt-1 mb-2">
                  33cl
                </div>
                <div class="flex items-center justify-between">
                  <span class="font-bold">2,50 €</span>
                  <button class="bg-[#FFDE59] p-1 rounded-lg shadow-sm">
                    <plus-icon class="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div class="w-28 h-28 overflow-hidden">
                <img 
                  src="https://img.freepik.com/free-photo/fresh-cola-drink-glass_144627-16201.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" 
                  alt="Coca-Cola" 
                  class="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
  
          <div class="bg-white rounded-xl overflow-hidden shadow-sm">
            <div class="flex">
              <div class="p-3 flex-1">
                <div class="font-medium">Eau minérale</div>
                <div class="text-xs text-gray-500 mt-1 mb-2">
                  50cl
                </div>
                <div class="flex items-center justify-between">
                  <span class="font-bold">1,90 €</span>
                  <button class="bg-[#FFDE59] p-1 rounded-lg shadow-sm">
                    <plus-icon class="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div class="w-28 h-28 overflow-hidden">
                <img 
                  src="https://img.freepik.com/free-photo/water-bottle-with-blue-cap_144627-16566.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" 
                  alt="Eau minérale" 
                  class="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
  
          <div class="bg-white rounded-xl overflow-hidden shadow-sm">
            <div class="flex">
              <div class="p-3 flex-1">
                <div class="font-medium">Vin Rouge Maison</div>
                <div class="text-xs text-gray-500 mt-1 mb-2">
                  Verre 15cl
                </div>
                <div class="flex items-center justify-between">
                  <span class="font-bold">4,50 €</span>
                  <button class="bg-[#FFDE59] p-1 rounded-lg shadow-sm">
                    <plus-icon class="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div class="w-28 h-28 overflow-hidden">
                <img 
                  src="https://img.freepik.com/free-photo/glass-red-wine-table_140725-916.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" 
                  alt="Vin Rouge" 
                  class="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
  
        <!-- Informations -->
        <div v-if="activeCategory === 'info'" class="space-y-4">
          <h2 class="text-lg font-bold flex items-center">
            <info-icon class="h-5 w-5 mr-2 text-blue-500" />
            Informations
          </h2>
          
          <div class="bg-white rounded-xl p-4 shadow-sm">
            <h3 class="font-medium mb-2 flex items-center">
              <clock-icon class="h-4 w-4 mr-2 text-gray-600" />
              Horaires d'ouverture
            </h3>
            <div class="text-sm space-y-1">
              <div class="flex justify-between">
                <span>Lundi - Vendredi</span>
                <span>11:00 - 22:30</span>
              </div>
              <div class="flex justify-between">
                <span>Samedi - Dimanche</span>
                <span>11:00 - 23:30</span>
              </div>
            </div>
  
            <h3 class="font-medium mt-4 mb-2 flex items-center">
              <map-pin-icon class="h-4 w-4 mr-2 text-gray-600" />
              Adresse
            </h3>
            <div class="flex items-center">
              <p class="text-sm">123 Rue de la Pizza, Cotonou</p>
              <button class="ml-2 text-xs text-blue-500 flex items-center">
                <map-icon class="h-3 w-3 mr-1" />
                Voir
              </button>
            </div>
            
            <h3 class="font-medium mt-4 mb-2 flex items-center">
              <phone-icon class="h-4 w-4 mr-2 text-gray-600" />
              Contact
            </h3>
            <div class="flex items-center">
              <p class="text-sm">+229 12 34 56 78</p>
              <button class="ml-2 text-xs text-blue-500 flex items-center">
                <phone-call-icon class="h-3 w-3 mr-1" />
                Appeler
              </button>
            </div>
  
            <h3 class="font-medium mt-4 mb-2 flex items-center">
              <credit-card-icon class="h-4 w-4 mr-2 text-gray-600" />
              Moyens de paiement
            </h3>
            <div class="flex gap-2">
              <div class="bg-gray-100 p-1 rounded">
                <img 
                  src="https://img.freepik.com/free-vector/visa-logo-red-blue-colours_1017-4541.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" 
                  alt="Visa" 
                  class="h-6 w-9 object-contain" 
                />
              </div>
              <div class="bg-gray-100 p-1 rounded">
                <img 
                  src="https://img.freepik.com/free-vector/mastercard-logo-design_1017-4423.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" 
                  alt="Mastercard" 
                  class="h-6 w-9 object-contain" 
                />
              </div>
              <div class="bg-gray-100 p-1 rounded">
                <img 
                  src="https://img.freepik.com/free-vector/american-express-logo_1017-4522.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" 
                  alt="American Express" 
                  class="h-6 w-9 object-contain" 
                />
              </div>
              <div class="bg-gray-100 p-1 rounded">
                <credit-card-icon class="h-6 w-6 text-gray-600" />
              </div>
            </div>
          </div>
  
          <div class="bg-white rounded-xl p-4 shadow-sm">
            <h3 class="font-medium mb-3 flex items-center">
              <message-square-icon class="h-4 w-4 mr-2 text-gray-600" />
              Avis des clients
              <span class="ml-auto text-sm text-gray-500">(120 avis)</span>
            </h3>
            
            <div class="flex items-center mb-3">
              <div class="flex">
                <star-icon class="h-5 w-5 text-[#FFCC00] fill-[#FFCC00]" />
                <star-icon class="h-5 w-5 text-[#FFCC00] fill-[#FFCC00]" />
                <star-icon class="h-5 w-5 text-[#FFCC00] fill-[#FFCC00]" />
                <star-icon class="h-5 w-5 text-[#FFCC00] fill-[#FFCC00]" />
                <star-icon class="h-5 w-5 text-[#FFCC00]" fill="none" />
              </div>
              <span class="ml-2 font-bold">4.8</span>
            </div>
            
            <div class="space-y-3">
              <div class="flex items-start">
                <div class="bg-gray-100 rounded-full h-8 w-8 flex items-center justify-center mr-2 overflow-hidden">
                  <img 
                    src="https://img.freepik.com/free-photo/portrait-white-woman-with-blonde-hair-blue-eyes_53876-148184.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" 
                    alt="Marie L." 
                    class="h-full w-full object-cover" 
                  />
                </div>
                <div class="flex-1">
                  <div class="flex items-center">
                    <span class="font-medium text-sm">Marie L.</span>
                    <div class="flex ml-2">
                      <star-icon class="h-3 w-3 text-[#FFCC00] fill-[#FFCC00]" />
                      <star-icon class="h-3 w-3 text-[#FFCC00] fill-[#FFCC00]" />
                      <star-icon class="h-3 w-3 text-[#FFCC00] fill-[#FFCC00]" />
                      <star-icon class="h-3 w-3 text-[#FFCC00] fill-[#FFCC00]" />
                      <star-icon class="h-3 w-3 text-[#FFCC00] fill-[#FFCC00]" />
                    </div>
                  </div>
                  <p class="text-xs text-gray-600 mt-1">
                    Pizza délicieuse et livraison rapide. Je recommande vivement !
                  </p>
                  <div class="flex items-center mt-1">
                    <span class="text-xs text-gray-500">Il y a 2 jours</span>
                    <div class="flex items-center ml-2">
                      <button class="flex items-center text-xs text-gray-500">
                        <thumbs-up-icon class="h-3 w-3 mr-1" />
                        12
                      </button>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="flex items-start">
                <div class="bg-gray-100 rounded-full h-8 w-8 flex items-center justify-center mr-2 overflow-hidden">
                  <img 
                    src="https://img.freepik.com/free-photo/portrait-handsome-man-with-dark-hairstyle-bristle-toothy-smile-dressed-white-sweatshirt-feels-very-glad-poses_295783-1165.jpg?uid=R47636482&ga=GA1.1.715729691.1730052194&semt=ais_hybrid&w=740" 
                    alt="Thomas K." 
                    class="h-full w-full object-cover" 
                  />
                </div>
                <div class="flex-1">
                  <div class="flex items-center">
                    <span class="font-medium text-sm">Thomas K.</span>
                    <div class="flex ml-2">
                      <star-icon class="h-3 w-3 text-[#FFCC00] fill-[#FFCC00]" />
                      <star-icon class="h-3 w-3 text-[#FFCC00] fill-[#FFCC00]" />
                      <star-icon class="h-3 w-3 text-[#FFCC00] fill-[#FFCC00]" />
                      <star-icon class="h-3 w-3 text-[#FFCC00] fill-[#FFCC00]" />
                      <star-icon class="h-3 w-3 text-gray-300" />
                    </div>
                  </div>
                  <p class="text-xs text-gray-600 mt-1">
                    Très bon rapport qualité-prix. Les pâtes carbonara sont excellentes.
                  </p>
                  <div class="flex items-center mt-1">
                    <span class="text-xs text-gray-500">Il y a 5 jours</span>
                    <div class="flex items-center ml-2">
                      <button class="flex items-center text-xs text-gray-500">
                        <thumbs-up-icon class="h-3 w-3 mr-1" />
                        8
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <button class="w-full mt-3 text-sm text-[#FFCC00] flex items-center justify-center font-medium">
              Voir tous les avis
              <chevron-down-icon class="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
  
      <!-- Bouton de commande -->
      <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-20 shadow-lg">
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center">
            <shopping-cart-icon class="h-5 w-5 text-gray-600 mr-2" />
            <span class="font-medium">3 articles</span>
          </div>
          <span class="font-bold text-lg">29,30 €</span>
        </div>
        <button class="w-full bg-[#FFDE59] py-3 rounded-xl font-bold text-black flex items-center justify-center shadow-md">
          Commander
          <arrow-right-icon class="h-5 w-5 ml-2" />
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { 
    ArrowLeftIcon,
    ShareIcon,
    HeartIcon,
    StarIcon,
    ClockIcon,
    MapPinIcon,
    TagIcon,
    PlusIcon,
    UserIcon,
    ChevronDownIcon,
    ShoppingCartIcon,
    PizzaIcon,
    UtensilsIcon,
    FlameIcon,
    BadgeIcon,
    CakeIcon,
    GlassWaterIcon,
    InfoIcon,
    PhoneIcon,
    PhoneCallIcon,
    MapIcon,
    MessageSquareIcon,
    ThumbsUpIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    TruckIcon,
    PercentIcon,
    LeafIcon,
    CreditCardIcon,
  } from 'lucide-vue-next';
  
  // Catégories du menu avec icônes
  const menuCategories = [
    { id: 'popular', name: 'Populaires', icon: FlameIcon },
    { id: 'pizzas', name: 'Pizzas', icon: PizzaIcon },
    { id: 'pastas', name: 'Pâtes', icon: PizzaIcon },
    { id: 'desserts', name: 'Desserts', icon: CakeIcon },
    { id: 'drinks', name: 'Boissons', icon: GlassWaterIcon },
    { id: 'info', name: 'Informations', icon: InfoIcon }
  ];
  
  // Catégorie active
  const activeCategory = ref('popular');
  
  // Émission d'événements pour la navigation
  defineEmits(['navigate']);
  </script>
  
  <style scoped>
  /* Styles spécifiques à la page de détails du restaurant */
  .rounded-t-3xl {
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
  }
  
  /* Masquer la barre de défilement tout en permettant le défilement */
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
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