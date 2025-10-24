<template>
  <div class="min-h-screen flex">
    <!-- Left Side - Branding -->
    <div class="hidden lg:flex lg:w-2/5 bg-gradient-to-br from-black via-gray-900 to-yellow-600 text-white p-12 flex-col justify-between relative overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full opacity-10 -mr-32 -mt-32"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400 rounded-full opacity-5 -ml-48 -mb-48"></div>
      
      <div class="relative z-10">
        <!-- Logo -->
        <div class="flex items-center gap-3 mb-12">
          <div class="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
            <svg class="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span class="text-2xl font-bold">PromptHub</span>
        </div>

        <!-- Tagline -->
        <h1 class="text-4xl font-bold mb-4 leading-tight">
          Rejoignez la communauté<br />des créateurs de prompts
        </h1>
        <p class="text-gray-300 text-lg mb-12">
          Partagez, découvrez et optimisez vos prompts IA
        </p>

        <!-- Benefits -->
        <div class="space-y-6">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 bg-yellow-500 bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold mb-1">Partagez vos prompts avec la communauté</h3>
              <p class="text-gray-400 text-sm">Contribuez et aidez d'autres créateurs</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-10 h-10 bg-yellow-500 bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold mb-1">Découvrez des milliers de prompts</h3>
              <p class="text-gray-400 text-sm">Explorez une bibliothèque riche et variée</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-10 h-10 bg-yellow-500 bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold mb-1">Gagnez des points et montez dans le classement</h3>
              <p class="text-gray-400 text-sm">Devenez un expert reconnu</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="relative z-10 text-gray-400 text-sm">
        © 2025 PromptHub. Tous droits réservés.
      </div>
    </div>

    <!-- Right Side - Forms -->
    <div class="flex-1 flex items-center justify-center p-6 bg-white">
      <div class="w-full max-w-md">
        <!-- Mobile Logo -->
        <div class="lg:hidden flex items-center justify-center gap-3 mb-8">
          <div class="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span class="text-xl font-bold text-black">PromptHub</span>
        </div>

        <!-- Tab Toggle -->
        <div class="flex bg-gray-100 rounded-lg p-1 mb-8">
          <button
            @click="activeTab = 'login'"
            :class="[
              'flex-1 py-2.5 px-4 rounded-md font-medium transition-all duration-200',
              activeTab === 'login'
                ? 'bg-white text-black shadow-sm'
                : 'text-gray-600 hover:text-black'
            ]"
          >
            Connexion
          </button>
          <button
            @click="activeTab = 'signup'"
            :class="[
              'flex-1 py-2.5 px-4 rounded-md font-medium transition-all duration-200',
              activeTab === 'signup'
                ? 'bg-white text-black shadow-sm'
                : 'text-gray-600 hover:text-black'
            ]"
          >
            Inscription
          </button>
        </div>

        <!-- Login Form -->
        <div v-show="activeTab === 'login'" class="space-y-6">
          <div>
            <h2 class="text-2xl font-bold text-black mb-2">Bon retour !</h2>
            <p class="text-gray-600">Connectez-vous pour continuer</p>
          </div>

          <form @submit.prevent="handleLogin" class="space-y-4">
            <!-- Email -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input
                  v-model="loginForm.email"
                  type="email"
                  required
                  class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  :class="{ 'border-red-500': loginForm.errors.email }"
                  placeholder="votre@email.com"
                />
              </div>
              <p v-if="loginForm.errors.email" class="mt-1 text-sm text-red-600">{{ loginForm.errors.email }}</p>
            </div>

            <!-- Password -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  v-model="loginForm.password"
                  :type="showLoginPassword ? 'text' : 'password'"
                  required
                  class="w-full pl-10 pr-12 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  :class="{ 'border-red-500': loginForm.errors.password }"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  @click="showLoginPassword = !showLoginPassword"
                  class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <svg v-if="!showLoginPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                </button>
              </div>
              <p v-if="loginForm.errors.password" class="mt-1 text-sm text-red-600">{{ loginForm.errors.password }}</p>
            </div>

            <!-- Remember & Forgot -->
            <div class="flex items-center justify-between">
              <label class="flex items-center">
                <input v-model="loginForm.remember" type="checkbox" class="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500" />
                <span class="ml-2 text-sm text-gray-600">Se souvenir de moi</span>
              </label>
              <a href="#" class="text-sm text-yellow-600 hover:text-yellow-700 font-medium">Mot de passe oublié?</a>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="loginForm.loading"
              class="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <svg v-if="loginForm.loading" class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>{{ loginForm.loading ? 'Connexion...' : 'Se connecter' }}</span>
            </button>
          </form>

          <!-- Divider -->
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-4 bg-white text-gray-500">OU</span>
            </div>
          </div>

          <!-- Social Login -->
          <div class="space-y-3">
            <button class="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg class="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span class="font-medium text-gray-700">Continuer avec Google</span>
            </button>

            <button class="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span class="font-medium text-gray-700">Continuer avec GitHub</span>
            </button>
          </div>

          <!-- Signup Link -->
          <p class="text-center text-sm text-gray-600">
            Pas encore de compte? 
            <button @click="activeTab = 'signup'" class="text-yellow-600 hover:text-yellow-700 font-medium">
              Inscrivez-vous
            </button>
          </p>
        </div>

        <!-- Signup Form -->
        <div v-show="activeTab === 'signup'" class="space-y-6">
          <div>
            <h2 class="text-2xl font-bold text-black mb-2">Créer un compte</h2>
            <p class="text-gray-600">Rejoignez la communauté dès maintenant</p>
          </div>

          <form @submit.prevent="handleSignup" class="space-y-4">
            <!-- Username -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Nom d'utilisateur</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  v-model="signupForm.username"
                  @input="checkUsernameAvailability"
                  type="text"
                  required
                  class="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  :class="{
                    'border-red-500': signupForm.errors.username,
                    'border-green-500': signupForm.usernameAvailable && signupForm.username.length > 0
                  }"
                  placeholder="johndoe"
                />
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <svg v-if="signupForm.checkingUsername" class="animate-spin h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <svg v-else-if="signupForm.usernameAvailable && signupForm.username.length > 0" class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p v-if="signupForm.errors.username" class="mt-1 text-sm text-red-600">{{ signupForm.errors.username }}</p>
              <p v-else-if="signupForm.usernameAvailable && signupForm.username.length > 0" class="mt-1 text-sm text-green-600">Nom d'utilisateur disponible</p>
            </div>

            <!-- Email -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input
                  v-model="signupForm.email"
                  type="email"
                  required
                  class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  :class="{ 'border-red-500': signupForm.errors.email }"
                  placeholder="votre@email.com"
                />
              </div>
              <p v-if="signupForm.errors.email" class="mt-1 text-sm text-red-600">{{ signupForm.errors.email }}</p>
            </div>

            <!-- Password -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  v-model="signupForm.password"
                  @input="checkPasswordStrength"
                  :type="showSignupPassword ? 'text' : 'password'"
                  required
                  class="w-full pl-10 pr-12 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  :class="{ 'border-red-500': signupForm.errors.password }"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  @click="showSignupPassword = !showSignupPassword"
                  class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <svg v-if="!showSignupPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                </button>
              </div>
              <!-- Password Strength Indicator -->
              <div v-if="signupForm.password.length > 0" class="mt-2">
                <div class="flex gap-1 mb-1">
                  <div class="h-1 flex-1 rounded-full" :class="passwordStrength >= 1 ? (passwordStrength === 1 ? 'bg-red-500' : passwordStrength === 2 ? 'bg-yellow-500' : 'bg-green-500') : 'bg-gray-200'"></div>
                  <div class="h-1 flex-1 rounded-full" :class="passwordStrength >= 2 ? (passwordStrength === 2 ? 'bg-yellow-500' : 'bg-green-500') : 'bg-gray-200'"></div>
                  <div class="h-1 flex-1 rounded-full" :class="passwordStrength >= 3 ? 'bg-green-500' : 'bg-gray-200'"></div>
                </div>
                <p class="text-xs" :class="passwordStrength === 1 ? 'text-red-600' : passwordStrength === 2 ? 'text-yellow-600' : 'text-green-600'">
                  {{ passwordStrength === 1 ? 'Faible' : passwordStrength === 2 ? 'Moyen' : 'Fort' }}
                </p>
              </div>
              <p v-if="signupForm.errors.password" class="mt-1 text-sm text-red-600">{{ signupForm.errors.password }}</p>
            </div>

            <!-- Confirm Password -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Confirmer le mot de passe</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <input
                  v-model="signupForm.confirmPassword"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  required
                  class="w-full pl-10 pr-12 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  :class="{
                    'border-red-500': signupForm.errors.confirmPassword,
                    'border-green-500': signupForm.confirmPassword === signupForm.password && signupForm.confirmPassword.length > 0
                  }"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  @click="showConfirmPassword = !showConfirmPassword"
                  class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <svg v-if="!showConfirmPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                </button>
              </div>
              <p v-if="signupForm.errors.confirmPassword" class="mt-1 text-sm text-red-600">{{ signupForm.errors.confirmPassword }}</p>
            </div>

            <!-- Terms Checkbox -->
            <div>
              <label class="flex items-start">
                <input v-model="signupForm.acceptTerms" type="checkbox" required class="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500 mt-0.5" />
                <span class="ml-2 text-sm text-gray-600">
                  J'accepte les <a href="#" class="text-yellow-600 hover:text-yellow-700 font-medium">conditions d'utilisation</a> et la <a href="#" class="text-yellow-600 hover:text-yellow-700 font-medium">politique de confidentialité</a>
                </span>
              </label>
              <p v-if="signupForm.errors.acceptTerms" class="mt-1 text-sm text-red-600">{{ signupForm.errors.acceptTerms }}</p>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="signupForm.loading || !signupForm.acceptTerms"
              class="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <svg v-if="signupForm.loading" class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>{{ signupForm.loading ? 'Création...' : 'Créer mon compte' }}</span>
            </button>
          </form>

          <!-- Divider -->
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-4 bg-white text-gray-500">OU</span>
            </div>
          </div>

          <!-- Social Signup -->
          <div class="space-y-3">
            <button class="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg class="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span class="font-medium text-gray-700">S'inscrire avec Google</span>
            </button>

            <button class="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span class="font-medium text-gray-700">S'inscrire avec GitHub</span>
            </button>
          </div>

          <!-- Login Link -->
          <p class="text-center text-sm text-gray-600">
            Déjà un compte? 
            <button @click="activeTab = 'login'" class="text-yellow-600 hover:text-yellow-700 font-medium">
              Connectez-vous
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const activeTab = ref('login')
const showLoginPassword = ref(false)
const showSignupPassword = ref(false)
const showConfirmPassword = ref(false)
const passwordStrength = ref(0)

const loginForm = reactive({
  email: '',
  password: '',
  remember: false,
  loading: false,
  errors: {}
})

const signupForm = reactive({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false,
  loading: false,
  checkingUsername: false,
  usernameAvailable: false,
  errors: {}
})

let usernameCheckTimeout = null

const checkUsernameAvailability = () => {
  signupForm.errors.username = ''
  
  if (signupForm.username.length < 3) {
    signupForm.usernameAvailable = false
    return
  }

  signupForm.checkingUsername = true
  
  clearTimeout(usernameCheckTimeout)
  usernameCheckTimeout = setTimeout(() => {
    // Simulate API call
    setTimeout(() => {
      // Mock: usernames starting with 'admin' are taken
      if (signupForm.username.toLowerCase().startsWith('admin')) {
        signupForm.usernameAvailable = false
        signupForm.errors.username = 'Ce nom d\'utilisateur est déjà pris'
      } else {
        signupForm.usernameAvailable = true
      }
      signupForm.checkingUsername = false
    }, 500)
  }, 500)
}

const checkPasswordStrength = () => {
  const password = signupForm.password
  let strength = 0
  
  if (password.length >= 8) strength++
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++
  if (/[0-9]/.test(password) && /[^a-zA-Z0-9]/.test(password)) strength++
  
  passwordStrength.value = strength
}

const handleLogin = () => {
  loginForm.errors = {}
  
  // Basic validation
  if (!loginForm.email) {
    loginForm.errors.email = 'L\'email est requis'
    return
  }
  
  if (!loginForm.password) {
    loginForm.errors.password = 'Le mot de passe est requis'
    return
  }
  
  loginForm.loading = true
  
  // Simulate API call
  setTimeout(() => {
    console.log('Login:', loginForm)
    loginForm.loading = false
    // Handle successful login
  }, 1500)
}

const handleSignup = () => {
  signupForm.errors = {}
  
  // Validation
  if (signupForm.username.length < 3) {
    signupForm.errors.username = 'Le nom d\'utilisateur doit contenir au moins 3 caractères'
    return
  }
  
  if (!signupForm.usernameAvailable) {
    signupForm.errors.username = 'Ce nom d\'utilisateur n\'est pas disponible'
    return
  }
  
  if (!signupForm.email) {
    signupForm.errors.email = 'L\'email est requis'
    return
  }
  
  if (signupForm.password.length < 8) {
    signupForm.errors.password = 'Le mot de passe doit contenir au moins 8 caractères'
    return
  }
  
  if (signupForm.password !== signupForm.confirmPassword) {
    signupForm.errors.confirmPassword = 'Les mots de passe ne correspondent pas'
    return
  }
  
  if (!signupForm.acceptTerms) {
    signupForm.errors.acceptTerms = 'Vous devez accepter les conditions d\'utilisation'
    return
  }
  
  signupForm.loading = true
  
  // Simulate API call
  setTimeout(() => {
    console.log('Signup:', signupForm)
    signupForm.loading = false
    // Handle successful signup
  }, 1500)
}
</script>
