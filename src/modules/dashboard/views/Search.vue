<template>
    <div class="min-h-screen bg-white text-gray-900">
      <!-- Search Header -->
      <div class="p-4 border-b border-gray-200">
        <div class="flex items-center bg-gray-100 rounded-full p-2">
          <search-icon class="h-5 w-5 text-gray-500 ml-1 mr-2" />
          <input 
            ref="searchInput"
            v-model="searchQuery" 
            type="text" 
            placeholder="Où allons nous ?" 
            class="flex-1 bg-transparent border-none focus:outline-none text-sm font-medium"
            @focus="isSearchFocused = true"
          />
          <button v-if="searchQuery" @click="clearSearch" class="p-1">
            <x-icon class="h-5 w-5 text-gray-500" />
          </button>
          <button class="ml-2 text-[#FFCC00] font-medium text-sm">
            Carte
          </button>
        </div>
      </div>
  
      <!-- Search Results -->
      <div class="overflow-y-auto" style="height: calc(100vh - 72px - 260px)">
        <!-- Current Location -->
        <div class="flex items-center p-4 hover:bg-gray-50 active:bg-gray-100 cursor-pointer">
          <div class="bg-gray-200 p-2 rounded-full mr-3">
            <navigation-icon class="h-5 w-5 text-gray-600" />
          </div>
          <div>
            <div class="font-medium">Votre position</div>
            <div class="text-sm text-gray-500">Using your GPS</div>
          </div>
        </div>
  
        <!-- Divider -->
        <div class="border-b border-gray-200"></div>
  
        <!-- Recent Locations -->
        <div v-for="(location, index) in filteredLocations" :key="index" class="flex items-center p-4 hover:bg-gray-50 active:bg-gray-100 cursor-pointer">
          <div class="bg-gray-200 p-2 rounded-full mr-3">
            <component :is="location.icon" class="h-5 w-5 text-gray-600" />
          </div>
          <div>
            <div class="font-medium">{{ location.name }}</div>
            <div v-if="location.description" class="text-sm text-gray-500">{{ location.description }}</div>
          </div>
        </div>
      </div>
  
      <!-- Virtual Keyboard -->
      <div class="fixed bottom-0 left-0 right-0 bg-gray-200 py-1 border-t border-gray-300">
        <!-- First Row -->
        <div class="flex justify-center space-x-1 mb-1 px-1">
          <button v-for="key in ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']" :key="key" 
            class="w-[9%] h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-800 font-medium"
            @click="typeKey(key)">
            {{ key }}
          </button>
        </div>
        
        <!-- Second Row -->
        <div class="flex justify-center space-x-1 mb-1 px-1">
          <button v-for="key in ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']" :key="key" 
            class="w-[9%] h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-800 font-medium"
            @click="typeKey(key)">
            {{ key }}
          </button>
        </div>
        
        <!-- Third Row -->
        <div class="flex justify-center space-x-1 mb-1 px-1">
          <button class="w-[11%] h-10 bg-gray-300 rounded-lg shadow-sm flex items-center justify-center text-gray-800">
            <arrow-up-icon class="h-5 w-5" />
          </button>
          <button v-for="key in ['z', 'x', 'c', 'v', 'b', 'n', 'm']" :key="key" 
            class="w-[9%] h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-800 font-medium"
            @click="typeKey(key)">
            {{ key }}
          </button>
          <button class="w-[11%] h-10 bg-gray-300 rounded-lg shadow-sm flex items-center justify-center text-gray-800">
            <delete-icon class="h-5 w-5" />
          </button>
        </div>
        
        <!-- Fourth Row -->
        <div class="flex justify-center space-x-1 px-1 mb-1">
          <button class="w-[15%] h-10 bg-gray-300 rounded-lg shadow-sm flex items-center justify-center text-gray-800 text-sm">
            123
          </button>
          <button class="w-[15%] h-10 bg-gray-300 rounded-lg shadow-sm flex items-center justify-center text-gray-800">
            <smile-icon class="h-5 w-5" />
          </button>
          <button class="w-[40%] h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-800"
            @click="typeKey(' ')">
            espace
          </button>
          <button class="w-[25%] h-10 bg-[#007AFF] rounded-lg shadow-sm flex items-center justify-center text-white font-medium">
            search
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import { 
    SearchIcon, 
    XIcon, 
    NavigationIcon, 
    MapPinIcon, 
    BookmarkIcon,
    ArrowUpIcon,
    DeleteIcon,
    SmileIcon
  } from 'lucide-vue-next';
  
  const searchQuery = ref('');
  const isSearchFocused = ref(false);
  const searchInput = ref(null);
  
  // Liste des emplacements suggérés
  const locations = ref([
    { 
      name: '30, Grazhdanskiy Ave', 
      icon: BookmarkIcon 
    },
    { 
      name: 'Tolubeevskiy Dr 8x2', 
      description: 'Pargologo Settlement, St. Petersburg',
      icon: MapPinIcon 
    },
    { 
      name: 'Vysotnaya 1', 
      description: 'Ville de Saint-Pétersbourg',
      icon: MapPinIcon 
    },
    { 
      name: '12, entrance 1, Charushinskaya ulitsa', 
      icon: BookmarkIcon 
    },
    { 
      name: 'Shuvalova 22x3', 
      description: 'Murino, Vsevolozhskiy District, Leningrad Region',
      icon: BookmarkIcon 
    },
    { 
      name: '6, entrance 3, Starorusskiy Ave', 
      icon: BookmarkIcon 
    },
    { 
      name: '2, Matrosa Zheleznyaka', 
      icon: BookmarkIcon 
    },
    // Ajoutez des emplacements locaux pour RAPIDO
    { 
      name: 'Akpakpa, Centre', 
      description: 'Cotonou, Bénin',
      icon: MapPinIcon 
    },
    { 
      name: 'Calavi, emba cite 12', 
      description: 'Abomey-Calavi, Bénin',
      icon: BookmarkIcon 
    },
    { 
      name: 'Ouidah, 36', 
      description: 'Ouidah, Bénin',
      icon: BookmarkIcon 
    }
  ]);
  
  // Filtrer les emplacements en fonction de la recherche
  const filteredLocations = computed(() => {
    if (!searchQuery.value) return locations.value;
    
    return locations.value.filter(location => 
      location.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      (location.description && location.description.toLowerCase().includes(searchQuery.value.toLowerCase()))
    );
  });
  
  // Effacer la recherche
  const clearSearch = () => {
    searchQuery.value = '';
    searchInput.value.focus();
  };
  
  // Simuler la frappe au clavier
  const typeKey = (key) => {
    searchQuery.value += key;
  };
  
  // Focus sur l'input de recherche au chargement
  onMounted(() => {
    searchInput.value.focus();
    // Simuler une recherche initiale pour la démo
    searchQuery.value = 'obkhod Murino';
  });
  </script>
  
  <style scoped>
  /* Styles spécifiques à la page de recherche */
  input::placeholder {
    color: #9ca3af;
  }
  
  /* Désactiver le surlignage au toucher sur mobile */
  * {
    -webkit-tap-highlight-color: transparent;
  }
  
  /* Animation pour les boutons du clavier */
  button {
    transition: all 0.1s ease;
  }
  
  button:active {
    transform: scale(0.95);
  }
  </style>