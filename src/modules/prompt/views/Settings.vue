<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Sidebar -->
    <aside class="fixed left-0 top-0 z-40 h-screen w-64 bg-black transition-transform lg:translate-x-0" :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'">
      <div class="flex h-full flex-col">
        <!-- Logo -->
        <div class="flex h-16 items-center justify-center border-b border-gray-800 px-6">
          <div class="flex items-center gap-2">
            <div class="flex h-8 w-8 items-center justify-center rounded bg-[#FFCB05]">
              <svg class="h-5 w-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span class="text-lg font-bold text-white">Admin</span>
          </div>
        </div>

        <!-- Navigation -->
        <nav class="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          <a href="#" class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-colors hover:bg-gray-800 hover:text-white">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Dashboard</span>
          </a>
          <a href="#" class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-colors hover:bg-gray-800 hover:text-white">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Validation</span>
            <span class="ml-auto rounded-full bg-red-500 px-2 py-0.5 text-xs font-medium text-white">12</span>
          </a>
          <a href="#" class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-colors hover:bg-gray-800 hover:text-white">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span>Utilisateurs</span>
          </a>
          <a href="#" class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-colors hover:bg-gray-800 hover:text-white">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <span>Catégories</span>
          </a>
          <a href="#" class="flex items-center gap-3 rounded-lg bg-gray-800 px-3 py-2 text-white">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Paramètres</span>
          </a>
        </nav>

        <!-- User Profile -->
        <div class="border-t border-gray-800 p-4">
          <div class="flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFCB05] font-semibold text-black">
              AD
            </div>
            <div class="flex-1">
              <div class="text-sm font-medium text-white">Admin User</div>
              <div class="text-xs text-gray-400">admin@platform.com</div>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <!-- Mobile overlay -->
    <div v-if="sidebarOpen" class="fixed inset-0 z-30 bg-black/50 lg:hidden" @click="sidebarOpen = false"></div>

    <!-- Main Content -->
    <div class="lg:ml-64">
      <!-- Top Header -->
      <header class="sticky top-0 z-20 border-b border-gray-200 bg-white">
        <div class="flex h-16 items-center justify-between px-6">
          <div class="flex items-center gap-4">
            <button @click="sidebarOpen = !sidebarOpen" class="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div>
              <h1 class="text-2xl font-bold text-gray-900">Paramètres de la Plateforme</h1>
              <p v-if="hasUnsavedChanges" class="text-sm text-orange-600">Modifications non sauvegardées</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <button @click="saveSettings" :disabled="!hasUnsavedChanges" class="rounded-lg px-4 py-2 font-medium transition-colors" :class="hasUnsavedChanges ? 'bg-[#FFCB05] text-black hover:bg-[#E5B700]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'">
              Sauvegarder les modifications
            </button>
          </div>
        </div>
      </header>

      <!-- Content Area -->
      <div class="flex">
        <!-- Settings Navigation Sidebar -->
        <aside class="sticky top-16 h-[calc(100vh-4rem)] w-64 overflow-y-auto border-r border-gray-200 bg-white p-4">
          <nav class="space-y-1">
            <button v-for="section in sections" :key="section.id" @click="activeSection = section.id" class="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors" :class="activeSection === section.id ? 'bg-[#FFCB05] text-black font-medium' : 'text-gray-700 hover:bg-gray-100'">
              <component :is="section.icon" class="h-5 w-5" />
              <span>{{ section.label }}</span>
            </button>
          </nav>
        </aside>

        <!-- Main Settings Content -->
        <main class="flex-1 p-6">
          <!-- Section: Général -->
          <div v-if="activeSection === 'general'" class="space-y-6">
            <div class="rounded-lg border border-gray-200 bg-white p-6">
              <div class="mb-4 flex items-center justify-between">
                <h2 class="text-lg font-semibold text-gray-900">Informations de la plateforme</h2>
                <button @click="resetSection('general')" class="text-sm text-gray-600 hover:text-gray-900">Réinitialiser</button>
              </div>
              <div class="space-y-4">
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700">Nom de la plateforme</label>
                  <input v-model="settings.general.platformName" @input="markAsChanged" type="text" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20" />
                </div>
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700">Description</label>
                  <textarea v-model="settings.general.description" @input="markAsChanged" rows="3" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20"></textarea>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700">Logo</label>
                    <div class="flex items-center gap-3">
                      <div class="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
                        <svg class="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <button class="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Télécharger</button>
                    </div>
                  </div>
                  <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700">Favicon</label>
                    <div class="flex items-center gap-3">
                      <div class="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
                        <svg class="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <button class="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Télécharger</button>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700">URL de base</label>
                    <input v-model="settings.general.baseUrl" @input="markAsChanged" type="url" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20" />
                  </div>
                  <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700">Email de contact</label>
                    <input v-model="settings.general.contactEmail" @input="markAsChanged" type="email" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20" />
                  </div>
                </div>
              </div>
            </div>

            <div class="rounded-lg border border-gray-200 bg-white p-6">
              <h2 class="mb-4 text-lg font-semibold text-gray-900">Réseaux sociaux</h2>
              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  <input v-model="settings.general.socialTwitter" @input="markAsChanged" type="url" placeholder="https://twitter.com/..." class="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20" />
                </div>
                <div class="flex items-center gap-3">
                  <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  <input v-model="settings.general.socialLinkedin" @input="markAsChanged" type="url" placeholder="https://linkedin.com/..." class="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20" />
                </div>
                <div class="flex items-center gap-3">
                  <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/></svg>
                  <input v-model="settings.general.socialDiscord" @input="markAsChanged" type="url" placeholder="https://discord.gg/..." class="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20" />
                </div>
                <div class="flex items-center gap-3">
                  <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  <input v-model="settings.general.socialGithub" @input="markAsChanged" type="url" placeholder="https://github.com/..." class="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20" />
                </div>
              </div>
            </div>

            <div class="rounded-lg border border-gray-200 bg-white p-6">
              <h2 class="mb-4 text-lg font-semibold text-gray-900">Langue et localisation</h2>
              <div class="grid grid-cols-3 gap-4">
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700">Langue par défaut</label>
                  <select v-model="settings.general.defaultLanguage" @change="markAsChanged" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20">
                    <option value="fr">Français</option>
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="de">Deutsch</option>
                  </select>
                </div>
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700">Fuseau horaire</label>
                  <select v-model="settings.general.timezone" @change="markAsChanged" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20">
                    <option value="Europe/Paris">Europe/Paris (UTC+1)</option>
                    <option value="America/New_York">America/New York (UTC-5)</option>
                    <option value="Asia/Tokyo">Asia/Tokyo (UTC+9)</option>
                  </select>
                </div>
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700">Format de date</label>
                  <select v-model="settings.general.dateFormat" @change="markAsChanged" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20">
                    <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                    <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                    <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <!-- Section: Validation -->
          <div v-if="activeSection === 'validation'" class="space-y-6">
            <div class="rounded-lg border border-gray-200 bg-white p-6">
              <div class="mb-4 flex items-center justify-between">
                <h2 class="text-lg font-semibold text-gray-900">Règles de validation</h2>
                <button @click="resetSection('validation')" class="text-sm text-gray-600 hover:text-gray-900">Réinitialiser</button>
              </div>
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium text-gray-900">Validation automatique</div>
                    <div class="text-sm text-gray-500">Activer la validation automatique des prompts</div>
                  </div>
                  <button @click="settings.validation.autoValidation = !settings.validation.autoValidation; markAsChanged()" class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors" :class="settings.validation.autoValidation ? 'bg-[#FFCB05]' : 'bg-gray-200'">
                    <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform" :class="settings.validation.autoValidation ? 'translate-x-6' : 'translate-x-1'"></span>
                  </button>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700">Délai maximum de validation (heures)</label>
                    <input v-model.number="settings.validation.maxValidationTime" @input="markAsChanged" type="number" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20" />
                  </div>
                  <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700">Nombre minimum de mots</label>
                    <input v-model.number="settings.validation.minWords" @input="markAsChanged" type="number" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20" />
                  </div>
                </div>
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700">Nombre maximum de caractères</label>
                  <input v-model.number="settings.validation.maxCharacters" @input="markAsChanged" type="number" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20" />
                </div>
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium text-gray-900">Détection de plagiat</div>
                    <div class="text-sm text-gray-500">Vérifier la similarité avec les prompts existants</div>
                  </div>
                  <button @click="settings.validation.plagiarismDetection = !settings.validation.plagiarismDetection; markAsChanged()" class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors" :class="settings.validation.plagiarismDetection ? 'bg-[#FFCB05]' : 'bg-gray-200'">
                    <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform" :class="settings.validation.plagiarismDetection ? 'translate-x-6' : 'translate-x-1'"></span>
                  </button>
                </div>
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium text-gray-900">Filtre de contenu inapproprié</div>
                    <div class="text-sm text-gray-500">Détecter et bloquer le contenu inapproprié</div>
                  </div>
                  <button @click="settings.validation.contentFilter = !settings.validation.contentFilter; markAsChanged()" class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors" :class="settings.validation.contentFilter ? 'bg-[#FFCB05]' : 'bg-gray-200'">
                    <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform" :class="settings.validation.contentFilter ? 'translate-x-6' : 'translate-x-1'"></span>
                  </button>
                </div>
                <div v-if="settings.validation.contentFilter">
                  <label class="mb-2 block text-sm font-medium text-gray-700">Niveau de sensibilité</label>
                  <div class="flex items-center gap-4">
                    <input v-model="settings.validation.contentFilterLevel" @input="markAsChanged" type="range" min="1" max="3" class="flex-1" />
                    <span class="text-sm font-medium text-gray-700">{{ ['Faible', 'Moyen', 'Élevé'][settings.validation.contentFilterLevel - 1] }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="rounded-lg border border-gray-200 bg-white p-6">
              <h2 class="mb-4 text-lg font-semibold text-gray-900">Règles d'auto-validation</h2>
              <div class="space-y-4">
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700">Seuil de score pour auto-validation</label>
                  <div class="flex items-center gap-4">
                    <input v-model.number="settings.validation.autoValidationScore" @input="markAsChanged" type="range" min="0" max="100" class="flex-1" />
                    <span class="text-sm font-medium text-gray-700">{{ settings.validation.autoValidationScore }}%</span>
                  </div>
                  <p class="mt-1 text-xs text-gray-500">Les prompts avec un score supérieur seront automatiquement validés</p>
                </div>
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">Catégories nécessitant validation manuelle</label>
                  <div class="space-y-2">
                    <label v-for="category in ['Marketing', 'Code', 'Écriture', 'Design', 'Business']" :key="category" class="flex items-center gap-2">
                      <input type="checkbox" :value="category" v-model="settings.validation.manualCategories" @change="markAsChanged" class="h-4 w-4 rounded border-gray-300 text-[#FFCB05] focus:ring-[#FFCB05]" />
                      <span class="text-sm text-gray-700">{{ category }}</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section: Utilisateurs -->
          <div v-if="activeSection === 'users'" class="space-y-6">
            <div class="rounded-lg border border-gray-200 bg-white p-6">
              <div class="mb-4 flex items-center justify-between">
                <h2 class="text-lg font-semibold text-gray-900">Inscription</h2>
                <button @click="resetSection('users')" class="text-sm text-gray-600 hover:text-gray-900">Réinitialiser</button>
              </div>
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium text-gray-900">Inscription ouverte</div>
                    <div class="text-sm text-gray-500">Permettre aux nouveaux utilisateurs de s'inscrire</div>
                  </div>
                  <button @click="settings.users.openRegistration = !settings.users.openRegistration; markAsChanged()" class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors" :class="settings.users.openRegistration ? 'bg-[#FFCB05]' : 'bg-gray-200'">
                    <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform" :class="settings.users.openRegistration ? 'translate-x-6' : 'translate-x-1'"></span>
                  </button>
                </div>
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium text-gray-900">Validation email obligatoire</div>
                    <div class="text-sm text-gray-500">Les utilisateurs doivent valider leur email</div>
                  </div>
                  <button @click="settings.users.emailVerification = !settings.users.emailVerification; markAsChanged()" class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors" :class="settings.users.emailVerification ? 'bg-[#FFCB05]' : 'bg-gray-200'">
                    <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform" :class="settings.users.emailVerification ? 'translate-x-6' : 'translate-x-1'"></span>
                  </button>
                </div>
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium text-gray-900">CAPTCHA sur inscription</div>
                    <div class="text-sm text-gray-500">Protéger contre les inscriptions automatisées</div>
                  </div>
                  <button @click="settings.users.captcha = !settings.users.captcha; markAsChanged()" class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors" :class="settings.users.captcha ? 'bg-[#FFCB05]' : 'bg-gray-200'">
                    <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform" :class="settings.users.captcha ? 'translate-x-6' : 'translate-x-1'"></span>
                  </button>
                </div>
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700">Domaines email bloqués</label>
                  <div class="flex flex-wrap gap-2 rounded-lg border border-gray-300 p-2">
                    <span v-for="(domain, index) in settings.users.blockedDomains" :key="index" class="inline-flex items-center gap-1 rounded bg-gray-100 px-2 py-1 text-sm">
                      {{ domain }}
                      <button @click="settings.users.blockedDomains.splice(index, 1); markAsChanged()" class="text-gray-500 hover:text-gray-700">×</button>
                    </span>
                    <input @keydown.enter="addBlockedDomain" placeholder="Ajouter un domaine..." class="flex-1 min-w-[150px] border-none p-1 text-sm focus:outline-none" />
                  </div>
                </div>
              </div>
            </div>

            <div class="rounded-lg border border-gray-200 bg-white p-6">
              <h2 class="mb-4 text-lg font-semibold text-gray-900">Limitations</h2>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700">Prompts par jour</label>
                  <input v-model.number="settings.users.maxPromptsPerDay" @input="markAsChanged" type="number" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20" />
                </div>
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700">Brouillons maximum</label>
                  <input v-model.number="settings.users.maxDrafts" @input="markAsChanged" type="number" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20" />
                </div>
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700">Favoris maximum</label>
                  <input v-model.number="settings.users.maxFavorites" @input="markAsChanged" type="number" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20" />
                </div>
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700">Signalements par jour</label>
                  <input v-model.number="settings.users.maxReportsPerDay" @input="markAsChanged" type="number" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20" />
                </div>
              </div>
            </div>

            <div class="rounded-lg border border-gray-200 bg-white p-6">
              <h2 class="mb-4 text-lg font-semibold text-gray-900">Gamification</h2>
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium text-gray-900">Système de points activé</div>
                    <div class="text-sm text-gray-500">Activer le système de points et récompenses</div>
                  </div>
                  <button @click="settings.users.pointsSystem = !settings.users.pointsSystem; markAsChanged()" class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors" :class="settings.users.pointsSystem ? 'bg-[#FFCB05]' : 'bg-gray-200'">
                    <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform" :class="settings.users.pointsSystem ? 'translate-x-6' : 'translate-x-1'"></span>
                  </button>
                </div>
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium text-gray-900">Leaderboard public</div>
                    <div class="text-sm text-gray-500">Afficher le classement des utilisateurs</div>
                  </div>
                  <button @click="settings.users.publicLeaderboard = !settings.users.publicLeaderboard; markAsChanged()" class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors" :class="settings.users.publicLeaderboard ? 'bg-[#FFCB05]' : 'bg-gray-200'">
                    <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform" :class="settings.users.publicLeaderboard ? 'translate-x-6' : 'translate-x-1'"></span>
                  </button>
                </div>
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium text-gray-900">Badges et achievements</div>
                    <div class="text-sm text-gray-500">Système de badges pour les accomplissements</div>
                  </div>
                  <button @click="settings.users.badges = !settings.users.badges; markAsChanged()" class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors" :class="settings.users.badges ? 'bg-[#FFCB05]' : 'bg-gray-200'">
                    <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform" :class="settings.users.badges ? 'translate-x-6' : 'translate-x-1'"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Section: Contenu -->
          <div v-if="activeSection === 'content'" class="space-y-6">
            <div class="rounded-lg border border-gray-200 bg-white p-6">
              <div class="mb-4 flex items-center justify-between">
                <h2 class="text-lg font-semibold text-gray-900">Modération</h2>
                <button @click="resetSection('content')" class="text-sm text-gray-600 hover:text-gray-900">Réinitialiser</button>
              </div>
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium text-gray-900">Modération automatique</div>
                    <div class="text-sm text-gray-500">Filtrer automatiquement le contenu inapproprié</div>
                  </div>
                  <button @click="settings.content.autoModeration = !settings.content.autoModeration; markAsChanged()" class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors" :class="settings.content.autoModeration ? 'bg-[#FFCB05]' : 'bg-gray-200'">
                    <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform" :class="settings.content.autoModeration ? 'translate-x-6' : 'translate-x-1'"></span>
                  </button>
                </div>
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700">Mots interdits</label>
                  <div class="flex flex-wrap gap-2 rounded-lg border border-gray-300 p-2">
                    <span v-for="(word, index) in settings.content.bannedWords" :key="index" class="inline-flex items-center gap-1 rounded bg-red-100 px-2 py-1 text-sm text-red-700">
                      {{ word }}
                      <button @click="settings.content.bannedWords.splice(index, 1); markAsChanged()" class="text-red-500 hover:text-red-700">×</button>
                    </span>
                    <input @keydown.enter="addBannedWord" placeholder="Ajouter un mot..." class="flex-1 min-w-[150px] border-none p-1 text-sm focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">Filtre anti-spam</label>
                  <div class="flex items-center gap-4">
                    <input v-model.number="settings.content.spamFilterLevel" @input="markAsChanged" type="range" min="1" max="3" class="flex-1" />
                    <span class="text-sm font-medium text-gray-700">{{ ['Faible', 'Moyen', 'Élevé'][settings.content.spamFilterLevel - 1] }}</span>
                  </div>
                </div>
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700">Limite de caractères pour descriptions</label>
                  <input v-model.number="settings.content.maxDescriptionLength" @input="markAsChanged" type="number" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20" />
                </div>
              </div>
            </div>

            <div class="rounded-lg border border-gray-200 bg-white p-6">
              <h2 class="mb-4 text-lg font-semibold text-gray-900">Affichage</h2>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700">Prompts par page</label>
                  <select v-model.number="settings.content.promptsPerPage" @change="markAsChanged" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20">
                    <option :value="12">12</option>
                    <option :value="24">24</option>
                    <option :value="48">48</option>
                  </select>
                </div>
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700">Ordre par défaut</label>
                  <select v-model="settings.content.defaultSort" @change="markAsChanged" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20">
                    <option value="recent">Plus récents</option>
                    <option value="popular">Plus populaires</option>
                    <option value="trending">Tendances</option>
                  </select>
                </div>
              </div>
              <div class="mt-4 space-y-3">
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium text-gray-900">Afficher le nombre de vues</div>
                    <div class="text-sm text-gray-500">Afficher les statistiques de vues publiquement</div>
                  </div>
                  <button @click="settings.content.showViews = !settings.content.showViews; markAsChanged()" class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors" :class="settings.content.showViews ? 'bg-[#FFCB05]' : 'bg-gray-200'">
                    <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform" :class="settings.content.showViews ? 'translate-x-6' : 'translate-x-1'"></span>
                  </button>
                </div>
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium text-gray-900">Afficher les stats détaillées</div>
                    <div class="text-sm text-gray-500">Statistiques complètes sur les pages de prompts</div>
                  </div>
                  <button @click="settings.content.showDetailedStats = !settings.content.showDetailedStats; markAsChanged()" class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors" :class="settings.content.showDetailedStats ? 'bg-[#FFCB05]' : 'bg-gray-200'">
                    <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform" :class="settings.content.showDetailedStats ? 'translate-x-6' : 'translate-x-1'"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Section: Notifications -->
          <div v-if="activeSection === 'notifications'" class="space-y-6">
            <div class="rounded-lg border border-gray-200 bg-white p-6">
              <div class="mb-4 flex items-center justify-between">
                <h2 class="text-lg font-semibold text-gray-900">Configuration SMTP</h2>
                <button @click="resetSection('notifications')" class="text-sm text-gray-600 hover:text-gray-900">Réinitialiser</button>
              </div>
              <div class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700">Host</label>
                    <input v-model="settings.notifications.smtpHost" @input="markAsChanged" type="text" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20" />
                  </div>
                  <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700">Port</label>
                    <input v-model.number="settings.notifications.smtpPort" @input="markAsChanged" type="number" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20" />
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700">Username</label>
                    <input v-model="settings.notifications.smtpUsername" @input="markAsChanged" type="text" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20" />
                  </div>
                  <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700">Password</label>
                    <input v-model="settings.notifications.smtpPassword" @input="markAsChanged" type="password" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20" />
                  </div>
                </div>
                <button @click="testSmtpConfig" class="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Tester la configuration
                </button>
              </div>
            </div>

            <div class="rounded-lg border border-gray-200 bg-white p-6">
              <h2 class="mb-4 text-lg font-semibold text-gray-900">Notifications automatiques</h2>
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium text-gray-900">Email de bienvenue</div>
                    <div class="text-sm text-gray-500">Envoyer un email lors de l'inscription</div>
                  </div>
                  <button @click="settings.notifications.welcomeEmail = !settings.notifications.welcomeEmail; markAsChanged()" class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors" :class="settings.notifications.welcomeEmail ? 'bg-[#FFCB05]' : 'bg-gray-200'">
                    <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform" :class="settings.notifications.welcomeEmail ? 'translate-x-6' : 'translate-x-1'"></span>
                  </button>
                </div>
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium text-gray-900">Validation de prompt</div>
                    <div class="text-sm text-gray-500">Notifier lors de la validation d'un prompt</div>
                  </div>
                  <button @click="settings.notifications.promptValidation = !settings.notifications.promptValidation; markAsChanged()" class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors" :class="settings.notifications.promptValidation ? 'bg-[#FFCB05]' : 'bg-gray-200'">
                    <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform" :class="settings.notifications.promptValidation ? 'translate-x-6' : 'translate-x-1'"></span>
                  </button>
                </div>
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium text-gray-900">Nouveau follower</div>
                    <div class="text-sm text-gray-500">Notifier quand quelqu'un vous suit</div>
                  </div>
                  <button @click="settings.notifications.newFollower = !settings.notifications.newFollower; markAsChanged()" class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors" :class="settings.notifications.newFollower ? 'bg-[#FFCB05]' : 'bg-gray-200'">
                    <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform" :class="settings.notifications.newFollower ? 'translate-x-6' : 'translate-x-1'"></span>
                  </button>
                </div>
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium text-gray-900">Résumé hebdomadaire</div>
                    <div class="text-sm text-gray-500">Envoyer un résumé chaque semaine</div>
                  </div>
                  <button @click="settings.notifications.weeklySummary = !settings.notifications.weeklySummary; markAsChanged()" class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors" :class="settings.notifications.weeklySummary ? 'bg-[#FFCB05]' : 'bg-gray-200'">
                    <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform" :class="settings.notifications.weeklySummary ? 'translate-x-6' : 'translate-x-1'"></span>
                  </button>
                </div>
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium text-gray-900">Alertes admin</div>
                    <div class="text-sm text-gray-500">Notifications pour les administrateurs</div>
                  </div>
                  <button @click="settings.notifications.adminAlerts = !settings.notifications.adminAlerts; markAsChanged()" class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors" :class="settings.notifications.adminAlerts ? 'bg-[#FFCB05]' : 'bg-gray-200'">
                    <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform" :class="settings.notifications.adminAlerts ? 'translate-x-6' : 'translate-x-1'"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Section: Sécurité -->
          <div v-if="activeSection === 'security'" class="space-y-6">
            <div class="rounded-lg border border-gray-200 bg-white p-6">
              <div class="mb-4 flex items-center justify-between">
                <h2 class="text-lg font-semibold text-gray-900">Authentification</h2>
                <button @click="resetSection('security')" class="text-sm text-gray-600 hover:text-gray-900">Réinitialiser</button>
              </div>
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium text-gray-900">Complexité du mot de passe</div>
                    <div class="text-sm text-gray-500">Exiger des mots de passe forts</div>
                  </div>
                  <button @click="settings.security.passwordComplexity = !settings.security.passwordComplexity; markAsChanged()" class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors" :class="settings.security.passwordComplexity ? 'bg-[#FFCB05]' : 'bg-gray-200'">
                    <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform" :class="settings.security.passwordComplexity ? 'translate-x-6' : 'translate-x-1'"></span>
                  </button>
                </div>
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium text-gray-900">Authentification à deux facteurs</div>
                    <div class="text-sm text-gray-500">Activer 2FA pour tous les utilisateurs</div>
                  </div>
                  <button @click="settings.security.twoFactorAuth = !settings.security.twoFactorAuth; markAsChanged()" class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors" :class="settings.security.twoFactorAuth ? 'bg-[#FFCB05]' : 'bg-gray-200'">
                    <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform" :class="settings.security.twoFactorAuth ? 'translate-x-6' : 'translate-x-1'"></span>
                  </button>
                </div>
                <div class="grid grid-cols-3 gap-4">
                  <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700">Timeout de session (min)</label>
                    <input v-model.number="settings.security.sessionTimeout" @input="markAsChanged" type="number" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20" />
                  </div>
                  <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700">Tentatives max</label>
                    <input v-model.number="settings.security.maxLoginAttempts" @input="markAsChanged" type="number" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20" />
                  </div>
                  <div>
                    <label class="mb-1 block text-sm font-medium text-gray-700">Expiration reset (h)</label>
                    <input v-model.number="settings.security.passwordResetExpiration" @input="markAsChanged" type="number" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20" />
                  </div>
                </div>
              </div>
            </div>

            <div class="rounded-lg border border-gray-200 bg-white p-6">
              <h2 class="mb-4 text-lg font-semibold text-gray-900">Sécurité API</h2>
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium text-gray-900">Rate limiting</div>
                    <div class="text-sm text-gray-500">Limiter le nombre de requêtes par minute</div>
                  </div>
                  <button @click="settings.security.rateLimiting = !settings.security.rateLimiting; markAsChanged()" class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors" :class="settings.security.rateLimiting ? 'bg-[#FFCB05]' : 'bg-gray-200'">
                    <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform" :class="settings.security.rateLimiting ? 'translate-x-6' : 'translate-x-1'"></span>
                  </button>
                </div>
                <div v-if="settings.security.rateLimiting">
                  <label class="mb-1 block text-sm font-medium text-gray-700">Requêtes par minute</label>
                  <input v-model.number="settings.security.requestsPerMinute" @input="markAsChanged" type="number" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20" />
                </div>
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700">IP whitelist</label>
                  <div class="flex flex-wrap gap-2 rounded-lg border border-gray-300 p-2">
                    <span v-for="(ip, index) in settings.security.ipWhitelist" :key="index" class="inline-flex items-center gap-1 rounded bg-green-100 px-2 py-1 text-sm text-green-700">
                      {{ ip }}
                      <button @click="settings.security.ipWhitelist.splice(index, 1); markAsChanged()" class="text-green-500 hover:text-green-700">×</button>
                    </span>
                    <input @keydown.enter="addIpWhitelist" placeholder="Ajouter une IP..." class="flex-1 min-w-[150px] border-none p-1 text-sm focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700">CORS origins</label>
                  <div class="flex flex-wrap gap-2 rounded-lg border border-gray-300 p-2">
                    <span v-for="(origin, index) in settings.security.corsOrigins" :key="index" class="inline-flex items-center gap-1 rounded bg-blue-100 px-2 py-1 text-sm text-blue-700">
                      {{ origin }}
                      <button @click="settings.security.corsOrigins.splice(index, 1); markAsChanged()" class="text-blue-500 hover:text-blue-700">×</button>
                    </span>
                    <input @keydown.enter="addCorsOrigin" placeholder="Ajouter une origine..." class="flex-1 min-w-[150px] border-none p-1 text-sm focus:outline-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section: Intégrations -->
          <div v-if="activeSection === 'integrations'" class="space-y-6">
            <div class="rounded-lg border border-gray-200 bg-white p-6">
              <div class="mb-4 flex items-center justify-between">
                <h2 class="text-lg font-semibold text-gray-900">Services externes</h2>
                <button @click="resetSection('integrations')" class="text-sm text-gray-600 hover:text-gray-900">Réinitialiser</button>
              </div>
              <div class="space-y-4">
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700">Google Analytics ID</label>
                  <input v-model="settings.integrations.googleAnalyticsId" @input="markAsChanged" type="text" placeholder="G-XXXXXXXXXX" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20" />
                </div>
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700">Sentry DSN</label>
                  <input v-model="settings.integrations.sentryDsn" @input="markAsChanged" type="text" placeholder="https://..." class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20" />
                </div>
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700">CDN URL</label>
                  <input v-model="settings.integrations.cdnUrl" @input="markAsChanged" type="url" placeholder="https://cdn.example.com" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20" />
                </div>
              </div>
            </div>

            <div class="rounded-lg border border-gray-200 bg-white p-6">
              <h2 class="mb-4 text-lg font-semibold text-gray-900">Intégration AI Models</h2>
              <div class="space-y-4">
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700">OpenAI API Key</label>
                  <input v-model="settings.integrations.openaiApiKey" @input="markAsChanged" type="password" placeholder="sk-..." class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20" />
                </div>
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700">Anthropic API Key</label>
                  <input v-model="settings.integrations.anthropicApiKey" @input="markAsChanged" type="password" placeholder="sk-ant-..." class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20" />
                </div>
              </div>
            </div>
          </div>

          <!-- Section: Avancé -->
          <div v-if="activeSection === 'advanced'" class="space-y-6">
            <div class="rounded-lg border border-gray-200 bg-white p-6">
              <div class="mb-4 flex items-center justify-between">
                <h2 class="text-lg font-semibold text-gray-900">Maintenance</h2>
                <button @click="resetSection('advanced')" class="text-sm text-gray-600 hover:text-gray-900">Réinitialiser</button>
              </div>
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium text-gray-900">Mode maintenance</div>
                    <div class="text-sm text-gray-500">Désactiver l'accès public à la plateforme</div>
                  </div>
                  <button @click="settings.advanced.maintenanceMode = !settings.advanced.maintenanceMode; markAsChanged()" class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors" :class="settings.advanced.maintenanceMode ? 'bg-[#FFCB05]' : 'bg-gray-200'">
                    <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform" :class="settings.advanced.maintenanceMode ? 'translate-x-6' : 'translate-x-1'"></span>
                  </button>
                </div>
                <div v-if="settings.advanced.maintenanceMode">
                  <label class="mb-1 block text-sm font-medium text-gray-700">Message de maintenance</label>
                  <textarea v-model="settings.advanced.maintenanceMessage" @input="markAsChanged" rows="3" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20"></textarea>
                </div>
                <div class="flex gap-3">
                  <button @click="clearCache" class="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Vider le cache
                  </button>
                  <button @click="rebuildSearchIndex" class="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Reconstruire l'index de recherche
                  </button>
                </div>
              </div>
            </div>

            <div class="rounded-lg border border-gray-200 bg-white p-6">
              <h2 class="mb-4 text-lg font-semibold text-gray-900">Base de données</h2>
              <div class="space-y-4">
                <div class="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                  <div>
                    <div class="font-medium text-gray-900">Dernière sauvegarde</div>
                    <div class="text-sm text-gray-500">{{ settings.advanced.lastBackup || 'Aucune sauvegarde' }}</div>
                  </div>
                  <button @click="backupDatabase" class="rounded-lg bg-[#FFCB05] px-4 py-2 text-sm font-medium text-black hover:bg-[#E5B700]">
                    Sauvegarder maintenant
                  </button>
                </div>
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium text-gray-900">Sauvegarde automatique</div>
                    <div class="text-sm text-gray-500">Planifier des sauvegardes régulières</div>
                  </div>
                  <button @click="settings.advanced.autoBackup = !settings.advanced.autoBackup; markAsChanged()" class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors" :class="settings.advanced.autoBackup ? 'bg-[#FFCB05]' : 'bg-gray-200'">
                    <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform" :class="settings.advanced.autoBackup ? 'translate-x-6' : 'translate-x-1'"></span>
                  </button>
                </div>
              </div>
            </div>

            <div class="rounded-lg border border-gray-200 bg-white p-6">
              <h2 class="mb-4 text-lg font-semibold text-gray-900">Logs</h2>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700">Niveau de log</label>
                  <select v-model="settings.advanced.logLevel" @change="markAsChanged" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20">
                    <option value="debug">Debug</option>
                    <option value="info">Info</option>
                    <option value="warning">Warning</option>
                    <option value="error">Error</option>
                  </select>
                </div>
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700">Rétention (jours)</label>
                  <input v-model.number="settings.advanced.logRetentionDays" @input="markAsChanged" type="number" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#FFCB05] focus:outline-none focus:ring-2 focus:ring-[#FFCB05]/20" />
                </div>
              </div>
              <button class="mt-3 text-sm font-medium text-[#FFCB05] hover:underline">
                Voir les logs →
              </button>
            </div>

            <div class="rounded-lg border-2 border-red-200 bg-red-50 p-6">
              <h2 class="mb-4 text-lg font-semibold text-red-900">Zone de danger</h2>
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium text-red-900">Réinitialiser toutes les statistiques</div>
                    <div class="text-sm text-red-700">Supprime toutes les données statistiques</div>
                  </div>
                  <button @click="confirmDangerAction('reset-stats')" class="rounded-lg border border-red-300 bg-white px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-50">
                    Réinitialiser
                  </button>
                </div>
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium text-red-900">Supprimer tous les brouillons</div>
                    <div class="text-sm text-red-700">Supprime tous les prompts en brouillon</div>
                  </div>
                  <button @click="confirmDangerAction('delete-drafts')" class="rounded-lg border border-red-300 bg-white px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-50">
                    Supprimer
                  </button>
                </div>
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium text-red-900">Réinitialisation complète</div>
                    <div class="text-sm text-red-700">Restaure tous les paramètres par défaut</div>
                  </div>
                  <button @click="confirmDangerAction('factory-reset')" class="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
                    Factory Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

    <!-- Toast Notification -->
    <div v-if="showToast" class="fixed bottom-4 right-4 z-50 rounded-lg bg-black px-6 py-3 text-white shadow-lg">
      {{ toastMessage }}
    </div>

    <!-- Unsaved Changes Warning Modal -->
    <div v-if="showUnsavedWarning" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div class="w-full max-w-md rounded-lg bg-white p-6">
        <h3 class="mb-2 text-lg font-semibold text-gray-900">Modifications non sauvegardées</h3>
        <p class="mb-4 text-sm text-gray-600">Vous avez des modifications non sauvegardées. Voulez-vous les sauvegarder avant de quitter?</p>
        <div class="flex justify-end gap-3">
          <button @click="discardChanges" class="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Ignorer
          </button>
          <button @click="saveAndContinue" class="rounded-lg bg-[#FFCB05] px-4 py-2 text-sm font-medium text-black hover:bg-[#E5B700]">
            Sauvegarder
          </button>
        </div>
      </div>
    </div>

    <!-- Danger Action Confirmation Modal -->
    <div v-if="showDangerModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div class="w-full max-w-md rounded-lg bg-white p-6">
        <h3 class="mb-2 text-lg font-semibold text-red-900">Action dangereuse</h3>
        <p class="mb-4 text-sm text-gray-600">Cette action est irréversible. Veuillez confirmer en entrant votre mot de passe.</p>
        <input v-model="dangerPassword" type="password" placeholder="Mot de passe" class="mb-4 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20" />
        <div class="flex justify-end gap-3">
          <button @click="showDangerModal = false; dangerPassword = ''" class="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Annuler
          </button>
          <button @click="executeDangerAction" class="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
            Confirmer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'

const sidebarOpen = ref(false)
const activeSection = ref('general')
const hasUnsavedChanges = ref(false)
const showToast = ref(false)
const toastMessage = ref('')
const showUnsavedWarning = ref(false)
const showDangerModal = ref(false)
const dangerPassword = ref('')
const dangerAction = ref('')

const sections = [
  { id: 'general', label: 'Général', icon: 'svg' },
  { id: 'validation', label: 'Validation', icon: 'svg' },
  { id: 'users', label: 'Utilisateurs', icon: 'svg' },
  { id: 'content', label: 'Contenu', icon: 'svg' },
  { id: 'notifications', label: 'Notifications', icon: 'svg' },
  { id: 'security', label: 'Sécurité', icon: 'svg' },
  { id: 'integrations', label: 'Intégrations', icon: 'svg' },
  { id: 'advanced', label: 'Avancé', icon: 'svg' }
]

const settings = reactive({
  general: {
    platformName: 'AI Prompt Platform',
    description: 'Une plateforme collaborative pour créer et partager des prompts IA',
    baseUrl: 'https://platform.example.com',
    contactEmail: 'contact@platform.com',
    socialTwitter: '',
    socialLinkedin: '',
    socialDiscord: '',
    socialGithub: '',
    defaultLanguage: 'fr',
    timezone: 'Europe/Paris',
    dateFormat: 'DD/MM/YYYY'
  },
  validation: {
    autoValidation: false,
    maxValidationTime: 48,
    minWords: 10,
    maxCharacters: 5000,
    plagiarismDetection: true,
    contentFilter: true,
    contentFilterLevel: 2,
    autoValidationScore: 80,
    manualCategories: ['Marketing', 'Business']
  },
  users: {
    openRegistration: true,
    emailVerification: true,
    captcha: true,
    blockedDomains: ['tempmail.com', 'guerrillamail.com'],
    maxPromptsPerDay: 10,
    maxDrafts: 50,
    maxFavorites: 100,
    maxReportsPerDay: 5,
    pointsSystem: true,
    publicLeaderboard: true,
    badges: true
  },
  content: {
    autoModeration: true,
    bannedWords: ['spam', 'scam'],
    spamFilterLevel: 2,
    maxDescriptionLength: 500,
    promptsPerPage: 24,
    defaultSort: 'recent',
    showViews: true,
    showDetailedStats: true
  },
  notifications: {
    smtpHost: '',
    smtpPort: 587,
    smtpUsername: '',
    smtpPassword: '',
    welcomeEmail: true,
    promptValidation: true,
    newFollower: true,
    weeklySummary: false,
    adminAlerts: true
  },
  security: {
    passwordComplexity: true,
    twoFactorAuth: false,
    sessionTimeout: 60,
    maxLoginAttempts: 5,
    passwordResetExpiration: 24,
    rateLimiting: true,
    requestsPerMinute: 60,
    ipWhitelist: [],
    corsOrigins: []
  },
  integrations: {
    googleAnalyticsId: '',
    sentryDsn: '',
    cdnUrl: '',
    openaiApiKey: '',
    anthropicApiKey: ''
  },
  advanced: {
    maintenanceMode: false,
    maintenanceMessage: 'La plateforme est en maintenance. Nous serons de retour bientôt.',
    lastBackup: '2024-01-15 14:30:00',
    autoBackup: true,
    logLevel: 'info',
    logRetentionDays: 30
  }
})

const originalSettings = JSON.parse(JSON.stringify(settings))

const markAsChanged = () => {
  hasUnsavedChanges.value = true
}

const saveSettings = () => {
  // Simulate save
  console.log('[v0] Saving settings:', settings)
  hasUnsavedChanges.value = false
  showToastMessage('Paramètres sauvegardés avec succès')
}

const resetSection = (section: string) => {
  if (confirm('Voulez-vous vraiment réinitialiser cette section?')) {
    settings[section] = JSON.parse(JSON.stringify(originalSettings[section]))
    markAsChanged()
    showToastMessage('Section réinitialisée')
  }
}

const showToastMessage = (message: string) => {
  toastMessage.value = message
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}

const addBlockedDomain = (event: KeyboardEvent) => {
  const input = event.target as HTMLInputElement
  const domain = input.value.trim()
  if (domain && !settings.users.blockedDomains.includes(domain)) {
    settings.users.blockedDomains.push(domain)
    input.value = ''
    markAsChanged()
  }
}

const addBannedWord = (event: KeyboardEvent) => {
  const input = event.target as HTMLInputElement
  const word = input.value.trim()
  if (word && !settings.content.bannedWords.includes(word)) {
    settings.content.bannedWords.push(word)
    input.value = ''
    markAsChanged()
  }
}

const addIpWhitelist = (event: KeyboardEvent) => {
  const input = event.target as HTMLInputElement
  const ip = input.value.trim()
  if (ip && !settings.security.ipWhitelist.includes(ip)) {
    settings.security.ipWhitelist.push(ip)
    input.value = ''
    markAsChanged()
  }
}

const addCorsOrigin = (event: KeyboardEvent) => {
  const input = event.target as HTMLInputElement
  const origin = input.value.trim()
  if (origin && !settings.security.corsOrigins.includes(origin)) {
    settings.security.corsOrigins.push(origin)
    input.value = ''
    markAsChanged()
  }
}

const testSmtpConfig = () => {
  showToastMessage('Test email envoyé avec succès')
}

const clearCache = () => {
  if (confirm('Voulez-vous vraiment vider le cache?')) {
    showToastMessage('Cache vidé avec succès')
  }
}

const rebuildSearchIndex = () => {
  if (confirm('Voulez-vous vraiment reconstruire l\'index de recherche?')) {
    showToastMessage('Index de recherche reconstruit')
  }
}

const backupDatabase = () => {
  showToastMessage('Sauvegarde de la base de données en cours...')
  setTimeout(() => {
    settings.advanced.lastBackup = new Date().toLocaleString('fr-FR')
    showToastMessage('Sauvegarde terminée avec succès')
  }, 2000)
}

const confirmDangerAction = (action: string) => {
  dangerAction.value = action
  showDangerModal.value = true
}

const executeDangerAction = () => {
  if (!dangerPassword.value) {
    showToastMessage('Veuillez entrer votre mot de passe')
    return
  }
  
  showDangerModal.value = false
  showToastMessage(`Action "${dangerAction.value}" exécutée`)
  dangerPassword.value = ''
}

const discardChanges = () => {
  hasUnsavedChanges.value = false
  showUnsavedWarning.value = false
}

const saveAndContinue = () => {
  saveSettings()
  showUnsavedWarning.value = false
}

// Warn before leaving with unsaved changes
onBeforeUnmount(() => {
  if (hasUnsavedChanges.value) {
    showUnsavedWarning.value = true
  }
})
</script>

