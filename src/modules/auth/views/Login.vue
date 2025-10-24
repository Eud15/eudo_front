<template>
    <div class="min-h-screen flex items-center justify-center bg-cover bg-center" 
         style="background-image: url('/assets/images/agba1.png');">
        
      <div class="w-full max-w-md">
        <!-- Logo et titre -->
        <div class="flex flex-col items-center mb-6">
          <!--<div class="flex items-center mb-2">
            <div class="w-10 h-10 bg-green-500 flex items-center justify-center rounded">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 class="text-3xl font-bold ml-2 text-gray-800">AGBALE</h1> 
           
          </div>
          <p class="text-xs text-gray-600">Organisez, Conservez, Retrouvez</p> -->
          <img src="../../../assets/images/logo.png" alt="" style="width: 70px;" />
        </div>
  
        <!-- Texte descriptif -->
        <div class="text-center mb-6">
          <p class="text-gray-800">Gestion électronique de documents pour</p>
          <p class="text-gray-800">
            <span class="font-bold">l'archivage</span> et la 
            <span class="font-bold">numérisation</span>.
          </p>
        </div>
  
        <!-- Formulaire de connexion -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="bg-white px-6 py-4">
            <h2 class="text-center text-green-500 font-medium mb-6">CONNEXION</h2>
            
            <div class="mb-4">
              <label class="block text-sm text-gray-700 mb-1">Identifiant / Adresse mail</label>
              <input 
                type="text" 
                class="w-full px-3 py-2 border border-gray-300 rounded text-sm" 
                placeholder="Identifiant / Adresse mail"
                v-model="email"
              >
            </div>
            
            <div class="mb-4">
              <label class="block text-sm text-gray-700 mb-1">Mot de passe</label>
              <div class="relative">
                <input 
                  :type="showPassword ? 'text' : 'password'" 
                  class="w-full px-3 py-2 border border-gray-300 rounded text-sm" 
                  placeholder="••••••••••"
                  v-model="password"
                >
                <button 
                  @click="showPassword = !showPassword" 
                  class="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path v-if="showPassword" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div class="mb-6 flex justify-between mt-4 text-xs ">
              <label class="mt-2 text-xs text-gray-600">Mot de passe oublié ?</label>
              <div class="flex items-center ">
                <input 
                  type="checkbox" 
                  id="remember" 
                  class="h-3 w-3  text-green-500 border-gray-300 rounded"
                  v-model="rememberMe"
                >
                <label for="remember" class="ml-2 mt-1 text-xs text-gray-700">Rester connecté</label>
              </div>
            </div>
            
            <button 
              class="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition duration-200"
              @click="login"
            >
              Se connecter
            </button>
          </div>
        </div>
  
        <!-- Footer -->
        <div class="flex justify-between mt-4 text-xs text-white">
          <a href="#" class="hover:underline">Politiques de confidentialités</a>
          <span>By AF-Coporations</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import img1 from "../../../assets/images/agba1.png";
  
  // État du formulaire
  const email = ref('');
  const password = ref('');
  const rememberMe = ref(false);
  const showPassword = ref(false);
  
  // Fonction de connexion
  const login = () => {
    // Logique de connexion à implémenter
    console.log('Tentative de connexion avec:', {
      email: email.value,
      password: password.value,
      rememberMe: rememberMe.value
    });
  };
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
  
  body {
    font-family: 'Roboto', sans-serif;
  }
  
  /* Personnalisation de la case à cocher */
  input[type="checkbox"] {
    accent-color: #22c55e;
  }
  </style>