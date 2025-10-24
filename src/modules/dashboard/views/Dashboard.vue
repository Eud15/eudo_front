<template>
    <div class="min-h-screen bg-gray-50">
      <!-- Header avec logo et profil -->
      <header class="bg-white border-b">
        <div class="container mx-auto px-4 py-2 flex justify-between items-center">
          <div class="flex items-center">
            <div class="text-green-600 font-bold text-xl flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                <path d="M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
              <span>AGBALE</span>
            </div>
            <span class="text-xs text-gray-500 ml-1">Gestion électronique des documents</span>
          </div>
          <div class="flex items-center">
            <div class="relative mr-4">
              <button class="relative">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span class="absolute -top-1 -right-1 bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">1</span>
              </button>
            </div>
            <div class="flex items-center">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/t2.PNG-51YpCMZHGKW1IUTTM1uEAXDGvSCgD9.png" alt="Profile" class="h-8 w-8 rounded-full object-cover mr-2" />
              <div class="text-sm">
                <div class="font-semibold">Boris Osana</div>
                <div class="text-xs text-gray-500">borisosana@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </header>
  
      <!-- Navigation principale - couleur exacte du vert -->
      <nav class="bg-[#5cb85c] text-white">
        <div class="container mx-auto">
          <ul class="flex flex-wrap">
            <li class="px-4 py-3 flex items-center font-medium border-b-2 border-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Tableau de bord
            </li>
            <li class="px-4 py-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              Archivage
            </li>
            <li class="px-4 py-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Recherche
            </li>
            <li class="px-4 py-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Gestion catégories & types
            </li>
            <li class="px-4 py-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Droits d'accès
            </li>
            <li class="px-4 py-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Suivi des activités
            </li>
            <li class="px-4 py-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Paramètres
            </li>
          </ul>
        </div>
      </nav>
  
      <!-- Contenu principal -->
      <main class="container mx-auto px-4 py-6">
        <div class="flex justify-between items-center mb-6">
          <h1 class="text-2xl font-semibold text-gray-800">Dashboard</h1>
          <div class="text-sm text-gray-600">Accueil</div>
        </div>
  
        <!-- Cartes statistiques -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <!-- Carte stockage -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <div class="flex">
              <div class="w-24 h-24 relative">
                <!-- Graphique circulaire avec pourcentage exact -->
                <svg viewBox="0 0 36 36" class="w-24 h-24 transform -rotate-90">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#E6E6E6"
                    stroke-width="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#5cb85c"
                    stroke-width="3"
                    stroke-dasharray="78, 100"
                  />
                  <text x="18" y="20.5" class="text-3xl font-bold" text-anchor="middle" fill="#333">78%</text>
                </svg>
              </div>
              <div class="ml-4">
                <h3 class="text-gray-600 font-medium">Volume stockage utilisé</h3>
                <p class="text-sm text-gray-500">95 GB sur 12,290 GB</p>
                <p class="text-xs text-green-600 mt-2">Voir les détails</p>
              </div>
            </div>
          </div>
  
          <!-- Carte documents archivés -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <div class="flex items-center">
              <div class="flex-grow">
                <h3 class="text-gray-600 font-medium">Documents archivés</h3>
                <p class="text-4xl font-bold text-gray-800 my-2">14,352</p>
                <p class="text-xs text-green-600">+25.36% depuis le mois dernier</p>
              </div>
              <div class="bg-yellow-100 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
            </div>
          </div>
  
          <!-- Carte nombre de catégories -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <div class="flex items-center">
              <div class="flex-grow">
                <h3 class="text-gray-600 font-medium">Nombre de catégorie</h3>
                <p class="text-4xl font-bold text-gray-800 my-2">365</p>
                <p class="text-xs text-green-600">+9.60% depuis le mois dernier</p>
              </div>
              <div class="bg-green-100 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>
          </div>
  
          <!-- Carte nombre de types -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <div class="flex items-center">
              <div class="flex-grow">
                <h3 class="text-gray-600 font-medium">Nombre de type</h3>
                <p class="text-4xl font-bold text-gray-800 my-2">253</p>
                <p class="text-xs text-green-600">+13.22% Since last month</p>
              </div>
              <div class="bg-blue-100 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Graphiques et tableaux -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <!-- Graphique camembert - couleurs exactes -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <div class="flex justify-between items-center mb-4">
              <h3 class="font-medium">Top 7 des catégories les plus consultées</h3>
              <button class="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </button>
            </div>
            <div class="h-64 flex justify-center items-center">
              <!-- Simulation du graphique camembert avec les couleurs exactes -->
              <svg width="200" height="200" viewBox="0 0 200 200">
                <!-- Cercle de base -->
                <circle cx="100" cy="100" r="80" fill="white"/>
                
                <!-- Segments du camembert avec les couleurs exactes -->
                <path d="M100,100 L180,100 A80,80 0 0,1 140,173 z" fill="#4285F4"/>
                <path d="M100,100 L140,173 A80,80 0 0,1 59,173 z" fill="#34A853"/>
                <path d="M100,100 L59,173 A80,80 0 0,1 20,100 z" fill="#00BCD4"/>
                <path d="M100,100 L20,100 A80,80 0 0,1 59,27 z" fill="#FF9800"/>
                <path d="M100,100 L59,27 A80,80 0 0,1 140,27 z" fill="#9C27B0"/>
                <path d="M100,100 L140,27 A80,80 0 0,1 175,80 z" fill="#3F51B5"/>
                <path d="M100,100 L175,80 A80,80 0 0,1 180,100 z" fill="#F44336"/>
                
                <!-- Cercle blanc au centre pour créer l'effet donut -->
                <circle cx="100" cy="100" r="40" fill="white"/>
              </svg>
            </div>
            <div class="grid grid-cols-2 gap-2 mt-4 text-xs">
              <div class="flex items-center">
                <span class="w-3 h-3 bg-[#4285F4] rounded-full mr-1"></span>
                <span>Actes d'état civil</span>
              </div>
              <div class="flex items-center">
                <span class="w-3 h-3 bg-[#9C27B0] rounded-full mr-1"></span>
                <span>Certificats administratifs</span>
              </div>
              <div class="flex items-center">
                <span class="w-3 h-3 bg-[#F44336] rounded-full mr-1"></span>
                <span>Permis et autorisations</span>
              </div>
              <div class="flex items-center">
                <span class="w-3 h-3 bg-[#34A853] rounded-full mr-1"></span>
                <span>Documents fonciers</span>
              </div>
              <div class="flex items-center">
                <span class="w-3 h-3 bg-[#FF9800] rounded-full mr-1"></span>
                <span>Documents financiers</span>
              </div>
              <div class="flex items-center">
                <span class="w-3 h-3 bg-[#3F51B5] rounded-full mr-1"></span>
                <span>Décisions municipales</span>
              </div>
              <div class="flex items-center">
                <span class="w-3 h-3 bg-[#00BCD4] rounded-full mr-1"></span>
                <span>Corresp. administrative</span>
              </div>
            </div>
          </div>
  
          <!-- Graphique barres - proportions exactes -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <div class="flex justify-between items-center mb-4">
              <h3 class="font-medium">Top 5 des catégories avec le plus de fichiers</h3>
              <button class="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </button>
            </div>
            <div class="h-64 px-2">
              <!-- Graphique à barres avec les bonnes proportions -->
              <div class="flex flex-col h-full">
                <!-- Échelle Y -->
                <div class="flex justify-between text-xs text-gray-500 mb-1">
                  <div>1000</div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div class="flex justify-between text-xs text-gray-500 mb-1">
                  <div>800</div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div class="flex justify-between text-xs text-gray-500 mb-1">
                  <div>600</div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div class="flex justify-between text-xs text-gray-500 mb-1">
                  <div>400</div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div class="flex justify-between text-xs text-gray-500 mb-1">
                  <div>200</div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div class="flex justify-between text-xs text-gray-500 mb-1">
                  <div>0</div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                
                <!-- Barres -->
                <div class="flex-grow flex items-end space-x-4 mt-2">
                  <div class="w-1/5 bg-[#4285F4] h-[70%] rounded-t"></div>
                  <div class="w-1/5 bg-[#34A853] h-[80%] rounded-t"></div>
                  <div class="w-1/5 bg-[#EA4335] h-[75%] rounded-t"></div>
                  <div class="w-1/5 bg-[#9C27B0] h-[60%] rounded-t"></div>
                  <div class="w-1/5 bg-[#3F51B5] h-[40%] rounded-t"></div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-2 mt-4 text-xs">
              <div class="flex items-center">
                <span class="w-3 h-3 bg-[#4285F4] rounded-full mr-1"></span>
                <span>Actes d'état civil</span>
              </div>
              <div class="flex items-center">
                <span class="w-3 h-3 bg-[#34A853] rounded-full mr-1"></span>
                <span>Certificats d'administrateur</span>
              </div>
              <div class="flex items-center">
                <span class="w-3 h-3 bg-[#EA4335] rounded-full mr-1"></span>
                <span>Permis et autorisations</span>
              </div>
              <div class="flex items-center">
                <span class="w-3 h-3 bg-[#9C27B0] rounded-full mr-1"></span>
                <span>Documents fonciers</span>
              </div>
              <div class="flex items-center">
                <span class="w-3 h-3 bg-[#3F51B5] rounded-full mr-1"></span>
                <span>Documents financiers</span>
              </div>
            </div>
          </div>
  
          <!-- Documents par extension - formatage exact -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <h3 class="font-medium mb-4">Documents archivés par extension</h3>
            <div class="space-y-4">
              <div>
                <div class="flex justify-between text-sm mb-1">
                  <span class="flex items-center">
                    <span class="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                    PDF
                  </span>
                  <span>55%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-red-500 h-2 rounded-full" style="width: 55%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-sm mb-1">
                  <span class="flex items-center">
                    <span class="w-3 h-3 bg-teal-500 rounded-full mr-2"></span>
                    JPG
                  </span>
                  <span>23%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-teal-500 h-2 rounded-full" style="width: 23%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-sm mb-1">
                  <span class="flex items-center">
                    <span class="w-3 h-3 bg-teal-300 rounded-full mr-2"></span>
                    PNG
                  </span>
                  <span>10%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-teal-300 h-2 rounded-full" style="width: 10%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-sm mb-1">
                  <span class="flex items-center">
                    <span class="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    XSL
                  </span>
                  <span>5%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-green-500 h-2 rounded-full" style="width: 5%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-sm mb-1">
                  <span class="flex items-center">
                    <span class="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    DOCX
                  </span>
                  <span>3%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-blue-500 h-2 rounded-full" style="width: 3%"></div>
                </div>
              </div>
              <div class="text-xs text-green-600 mt-4">Voir plus</div>
            </div>
          </div>
        </div>
  
        <!-- Graphique bas de page - exactement comme dans l'image -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <div class="flex justify-between items-center mb-4">
            <h3 class="font-medium">Types de fichiers les plus consultés</h3>
            <div class="flex space-x-2">
              <button class="bg-green-100 text-green-600 px-3 py-1 rounded-md text-sm">
                Exporter le rapport
              </button>
              <button class="border border-gray-300 px-3 py-1 rounded-md text-sm flex items-center">
                Les deux derniers mois
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
          <div class="h-48">
            <!-- Simulation du graphique avec les barres exactes -->
            <div class="flex h-full items-end space-x-6 pt-8">
              <div class="flex flex-col items-center">
                <div class="w-8 bg-[#9C27B0] h-24 rounded-t"></div>
                <div class="mt-2 text-xs text-gray-500">Jan</div>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-8 bg-[#34A853] h-16 rounded-t"></div>
                <div class="mt-2 text-xs text-gray-500">Fév</div>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-8 h-0"></div>
                <div class="mt-2 text-xs text-gray-500">Mar</div>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-8 h-0"></div>
                <div class="mt-2 text-xs text-gray-500">Avr</div>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-8 h-0"></div>
                <div class="mt-2 text-xs text-gray-500">Mai</div>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-8 bg-[#9C27B0] h-24 rounded-t"></div>
                <div class="mt-2 text-xs text-gray-500">Juin</div>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-8 bg-[#34A853] h-16 rounded-t"></div>
                <div class="mt-2 text-xs text-gray-500">Juil</div>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-8 h-0"></div>
                <div class="mt-2 text-xs text-gray-500">Août</div>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-8 bg-[#9C27B0] h-12 rounded-t"></div>
                <div class="mt-2 text-xs text-gray-500">Sept</div>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-8 h-0"></div>
                <div class="mt-2 text-xs text-gray-500">Oct</div>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-8 h-0"></div>
                <div class="mt-2 text-xs text-gray-500">Nov</div>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-8 h-0"></div>
                <div class="mt-2 text-xs text-gray-500">Déc</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  // Données pour les statistiques
  const stats = ref({
    storage: {
      percentage: 78,
      used: '95 GB',
      total: '12,290 GB'
    },
    documents: {
      count: 14352,
      increase: '+25.36%'
    },
    categories: {
      count: 365,
      increase: '+9.60%'
    },
    types: {
      count: 253,
      increase: '+13.22%'
    }
  });
  
  // Données pour les extensions de fichiers
  const fileExtensions = ref([
    { name: 'PDF', percentage: 55, color: 'bg-red-500' },
    { name: 'JPG', percentage: 23, color: 'bg-teal-500' },
    { name: 'PNG', percentage: 10, color: 'bg-teal-300' },
    { name: 'XSL', percentage: 5, color: 'bg-green-500' },
    { name: 'DOCX', percentage: 3, color: 'bg-blue-500' }
  ]);
  
  // Données pour les catégories
  const categories = ref([
    { name: 'Actes d\'état civil', color: 'bg-[#4285F4]' },
    { name: 'Certificats administratifs', color: 'bg-[#9C27B0]' },
    { name: 'Permis et autorisations', color: 'bg-[#F44336]' },
    { name: 'Documents fonciers', color: 'bg-[#34A853]' },
    { name: 'Documents financiers', color: 'bg-[#FF9800]' },
    { name: 'Décisions municipales', color: 'bg-[#3F51B5]' },
    { name: 'Corresp. administrative', color: 'bg-[#00BCD4]' }
  ]);
  
  // Données pour le graphique à barres
  const barChartData = ref([
    { category: 'Actes d\'état civil', value: 700, color: 'bg-[#4285F4]' },
    { category: 'Certificats d\'administrateur', value: 800, color: 'bg-[#34A853]' },
    { category: 'Permis et autorisations', value: 750, color: 'bg-[#EA4335]' },
    { category: 'Documents fonciers', value: 600, color: 'bg-[#9C27B0]' },
    { category: 'Documents financiers', value: 400, color: 'bg-[#3F51B5]' }
  ]);
  
  onMounted(() => {
    // Ici, vous pourriez ajouter du code pour initialiser des graphiques
    // avec des bibliothèques comme Chart.js ou ApexCharts si nécessaire
    console.log('Dashboard component mounted');
  });
  </script>
  
  <style>
  /* Styles supplémentaires pour correspondre exactement au design */
  body {
    font-family: 'Inter', sans-serif;
    background-color: #f9fafb;
  }
  
  /* Animation pour les barres de progression */
  @keyframes progress {
    0% { width: 0; }
    100% { width: var(--progress-width); }
  }
  
  .progress-bar {
    animation: progress 1s ease-out forwards;
  }
  </style>