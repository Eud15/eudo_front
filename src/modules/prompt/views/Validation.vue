<template>
  <div class="min-h-screen bg-gray-50 flex">
    <!-- Sidebar -->
    <aside 
      class="fixed inset-y-0 left-0 z-50 w-64 bg-black text-white transform transition-transform duration-300 lg:translate-x-0"
      :class="{ '-translate-x-full': !sidebarOpen }"
    >
      <div class="flex flex-col h-full">
        <!-- Logo -->
        <div class="flex items-center gap-3 px-6 py-6 border-b border-gray-800">
          <div class="w-10 h-10 bg-[#FFCB05] rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h1 class="font-bold text-lg">Admin Panel</h1>
            <p class="text-xs text-gray-400">Gestion de la plateforme</p>
          </div>
        </div>

        <!-- Navigation -->
        <nav class="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          <a
            v-for="item in navItems"
            :key="item.name"
            href="#"
            @click.prevent="activeTab = item.id"
            class="flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors"
            :class="activeTab === item.id ? 'bg-[#FFCB05] text-black' : 'text-gray-300 hover:bg-gray-800 hover:text-white'"
          >
            <div class="flex items-center gap-3">
              <component :is="item.icon" class="w-5 h-5" />
              <span class="font-medium">{{ item.name }}</span>
            </div>
            <span
              v-if="item.badge"
              class="px-2 py-0.5 text-xs font-bold rounded-full"
              :class="item.badgeColor || 'bg-red-500 text-white'"
            >
              {{ item.badge }}
            </span>
          </a>
        </nav>

        <!-- User -->
        <div class="px-3 py-4 border-t border-gray-800">
          <div class="flex items-center gap-3 px-3 py-2">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFCB05] to-yellow-600 flex items-center justify-center text-black font-bold">
              AD
            </div>
            <div class="flex-1 min-w-0">
              <p class="font-medium text-sm truncate">Admin User</p>
              <p class="text-xs text-gray-400">admin@platform.com</p>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <!-- Mobile sidebar overlay -->
    <div
      v-if="sidebarOpen"
      class="fixed inset-0 bg-black/50 z-40 lg:hidden"
      @click="sidebarOpen = false"
    ></div>

    <!-- Main Content -->
    <div class="flex-1 lg:ml-64">
      <!-- Top Bar -->
      <header class="sticky top-0 z-30 bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-4">
            <button
              @click="sidebarOpen = !sidebarOpen"
              class="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div>
              <h1 class="text-2xl font-bold text-black">Validation des Prompts</h1>
              <div class="flex items-center gap-4 mt-2">
                <span class="flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                  <span class="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                  {{ pendingCount }} en attente
                </span>
                <span class="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {{ validatedToday }} traités aujourd'hui
                </span>
                <span class="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {{ avgValidationTime }} min moy.
                </span>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <button class="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button
              @click="refreshList"
              class="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg class="w-5 h-5" :class="{ 'animate-spin': isRefreshing }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Rafraîchir
            </button>
          </div>
        </div>

        <!-- Filter Bar -->
        <div class="py-4 bg-gray-50 border-t border-gray-200 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div class="space-y-4">
            <!-- Status Tabs -->
            <div class="flex items-center gap-2">
              <button
                v-for="status in statusTabs"
                :key="status.value"
                @click="filters.status = status.value"
                class="px-4 py-2 rounded-lg font-medium transition-colors"
                :class="filters.status === status.value 
                  ? 'bg-black text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'"
              >
                {{ status.label }}
                <span v-if="status.count" class="ml-2 px-2 py-0.5 bg-[#FFCB05] text-black rounded-full text-xs font-bold">
                  {{ status.count }}
                </span>
              </button>
            </div>

            <!-- Filters Row -->
            <div class="flex items-center gap-3 flex-wrap">
              <!-- Category Filter -->
              <select
                v-model="filters.category"
                class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent bg-white"
              >
                <option value="">Toutes les catégories</option>
                <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
              </select>

              <!-- Date Range -->
              <div class="flex items-center gap-2">
                <input
                  v-model="filters.dateFrom"
                  type="date"
                  class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent bg-white"
                />
                <span class="text-gray-500">à</span>
                <input
                  v-model="filters.dateTo"
                  type="date"
                  class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent bg-white"
                />
              </div>

              <!-- Sort -->
              <select
                v-model="filters.sort"
                class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent bg-white"
              >
                <option value="newest">Plus récent</option>
                <option value="oldest">Plus ancien</option>
                <option value="author">Par auteur</option>
              </select>

              <!-- Search -->
              <div class="flex-1 min-w-[200px]">
                <div class="relative">
                  <input
                    v-model="filters.search"
                    type="text"
                    placeholder="Rechercher par titre ou auteur..."
                    class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent bg-white"
                  />
                  <svg class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              <!-- Clear Filters -->
              <button
                v-if="hasActiveFilters"
                @click="clearFilters"
                class="px-4 py-2 text-gray-600 hover:text-black transition-colors"
              >
                Réinitialiser
              </button>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <div class="flex h-[calc(100vh-280px)]">
        <!-- Left Column: Prompts List -->
        <div class="w-2/5 border-r border-gray-200 bg-white flex flex-col">
          <!-- Bulk Actions Bar -->
          <Transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="-translate-y-full opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="-translate-y-full opacity-0"
          >
            <div v-if="selectedPrompts.length > 0" class="bg-[#FFCB05] px-6 py-3 flex items-center justify-between border-b border-yellow-600">
              <span class="font-semibold text-black">
                {{ selectedPrompts.length }} prompt(s) sélectionné(s)
              </span>
              <div class="flex items-center gap-2">
                <button
                  @click="bulkValidate"
                  class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Valider sélectionnés
                </button>
                <button
                  @click="bulkReject"
                  class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  Rejeter sélectionnés
                </button>
                <button
                  @click="selectedPrompts = []"
                  class="p-2 hover:bg-yellow-600 rounded-lg transition-colors"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </Transition>

          <!-- Prompts List -->
          <div class="flex-1 overflow-y-auto">
            <div v-if="filteredPrompts.length === 0" class="flex flex-col items-center justify-center h-full text-center p-8">
              <svg class="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Aucun prompt à valider</h3>
              <p class="text-gray-600">Tous les prompts ont été traités ou aucun ne correspond aux filtres.</p>
            </div>

            <div v-else class="divide-y divide-gray-200">
              <button
                v-for="prompt in filteredPrompts"
                :key="prompt.id"
                @click="selectPrompt(prompt)"
                class="w-full text-left p-4 hover:bg-gray-50 transition-colors relative"
                :class="{
                  'bg-blue-50 border-l-4 border-blue-500': selectedPrompt?.id === prompt.id,
                  'bg-yellow-50': selectedPrompts.includes(prompt.id)
                }"
              >
                <!-- Selection Checkbox -->
                <input
                  type="checkbox"
                  :checked="selectedPrompts.includes(prompt.id)"
                  @click.stop="toggleSelection(prompt.id)"
                  class="absolute top-4 right-4 w-5 h-5 text-[#FFCB05] border-gray-300 rounded focus:ring-[#FFCB05]"
                />

                <div class="pr-8">
                  <div class="flex items-start gap-3 mb-2">
                    <span
                      class="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      :class="{
                        'bg-orange-500': prompt.status === 'pending',
                        'bg-green-500': prompt.status === 'approved',
                        'bg-red-500': prompt.status === 'rejected'
                      }"
                    ></span>
                    <div class="flex-1 min-w-0">
                      <h3 class="font-semibold text-gray-900 mb-1 line-clamp-2">{{ prompt.title }}</h3>
                      <div class="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <div class="flex items-center gap-1">
                          <div class="w-6 h-6 rounded-full bg-gradient-to-br from-[#FFCB05] to-yellow-600 flex items-center justify-center text-white text-xs font-bold">
                            {{ prompt.author.initials }}
                          </div>
                          <span>{{ prompt.author.name }}</span>
                        </div>
                        <span class="text-gray-400">•</span>
                        <span>{{ prompt.submittedAt }}</span>
                      </div>
                      <div class="flex items-center gap-2 flex-wrap">
                        <span class="px-2 py-0.5 bg-black text-white text-xs rounded-full">
                          {{ prompt.category }}
                        </span>
                        <span class="text-xs text-gray-500">{{ prompt.length }} caractères</span>
                        <span class="text-xs text-gray-500">{{ prompt.tagsCount }} tags</span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <!-- Pagination -->
          <div class="border-t border-gray-200 px-6 py-3 flex items-center justify-between bg-white">
            <span class="text-sm text-gray-600">
              {{ (currentPage - 1) * itemsPerPage + 1 }}-{{ Math.min(currentPage * itemsPerPage, filteredPrompts.length) }} sur {{ filteredPrompts.length }}
            </span>
            <div class="flex items-center gap-2">
              <button
                @click="currentPage--"
                :disabled="currentPage === 1"
                class="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                @click="currentPage++"
                :disabled="currentPage * itemsPerPage >= filteredPrompts.length"
                class="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Right Column: Detailed View -->
        <div class="flex-1 bg-white overflow-y-auto">
          <div v-if="!selectedPrompt" class="flex flex-col items-center justify-center h-full text-center p-8">
            <svg class="w-20 h-20 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Sélectionnez un prompt</h3>
            <p class="text-gray-600 mb-4">Choisissez un prompt dans la liste pour voir les détails et le valider.</p>
            <div class="bg-gray-50 rounded-lg p-4 text-left max-w-md">
              <p class="text-sm font-semibold text-gray-900 mb-2">Raccourcis clavier:</p>
              <div class="space-y-1 text-sm text-gray-600">
                <div class="flex items-center gap-2">
                  <kbd class="px-2 py-1 bg-white border border-gray-300 rounded text-xs font-mono">V</kbd>
                  <span>Valider le prompt</span>
                </div>
                <div class="flex items-center gap-2">
                  <kbd class="px-2 py-1 bg-white border border-gray-300 rounded text-xs font-mono">R</kbd>
                  <span>Rejeter le prompt</span>
                </div>
                <div class="flex items-center gap-2">
                  <kbd class="px-2 py-1 bg-white border border-gray-300 rounded text-xs font-mono">N</kbd>
                  <span>Prompt suivant</span>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="pb-32">
            <!-- Prompt Details -->
            <div class="p-6 space-y-6">
              <!-- Title and Meta -->
              <div>
                <h2 class="text-3xl font-bold text-black mb-3">{{ selectedPrompt.title }}</h2>
                <div class="flex items-center gap-4 text-sm text-gray-600">
                  <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Soumis {{ selectedPrompt.submittedAt }}
                  </span>
                  <span class="px-3 py-1 bg-black text-white rounded-full text-xs font-semibold">
                    {{ selectedPrompt.category }}
                  </span>
                </div>
              </div>

              <!-- Author Card -->
              <div class="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFCB05] to-yellow-600 flex items-center justify-center text-white text-lg font-bold">
                      {{ selectedPrompt.author.initials }}
                    </div>
                    <div>
                      <h3 class="font-semibold text-black">{{ selectedPrompt.author.name }}</h3>
                      <p class="text-sm text-gray-600">
                        {{ selectedPrompt.author.totalPrompts }} prompts • {{ selectedPrompt.author.acceptanceRate }}% acceptés
                      </p>
                    </div>
                  </div>
                  <a href="#" class="text-[#FFCB05] hover:underline text-sm font-medium">
                    Voir le profil →
                  </a>
                </div>
              </div>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in selectedPrompt.tags"
                  :key="tag"
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- Prompt Content -->
              <div>
                <h3 class="text-lg font-semibold text-black mb-3">Contenu du prompt</h3>
                <div class="bg-gray-50 rounded-xl p-4 border border-gray-200 font-mono text-sm leading-relaxed whitespace-pre-wrap">{{ selectedPrompt.content }}</div>
              </div>

              <!-- Description -->
              <div>
                <h3 class="text-lg font-semibold text-black mb-3">Description et contexte</h3>
                <p class="text-gray-700 leading-relaxed">{{ selectedPrompt.description }}</p>
              </div>

              <!-- Variables -->
              <div v-if="selectedPrompt.variables && selectedPrompt.variables.length > 0">
                <h3 class="text-lg font-semibold text-black mb-3">Variables</h3>
                <div class="space-y-2">
                  <div
                    v-for="variable in selectedPrompt.variables"
                    :key="variable.name"
                    class="flex gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200"
                  >
                    <code class="font-mono text-sm text-[#FFCB05] font-semibold">{{ '{' }}{{ variable.name }}{{ '}' }}</code>
                    <span class="text-sm text-gray-700">{{ variable.description }}</span>
                  </div>
                </div>
              </div>

              <!-- Example Output -->
              <div v-if="selectedPrompt.exampleOutput">
                <h3 class="text-lg font-semibold text-black mb-3">Exemple de résultat</h3>
                <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200 whitespace-pre-wrap">{{ selectedPrompt.exampleOutput }}</div>
              </div>

              <!-- AI Models -->
              <div v-if="selectedPrompt.aiModels && selectedPrompt.aiModels.length > 0">
                <h3 class="text-lg font-semibold text-black mb-3">Modèles IA recommandés</h3>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="model in selectedPrompt.aiModels"
                    :key="model"
                    class="px-3 py-1 bg-black text-white rounded-full text-sm"
                  >
                    {{ model }}
                  </span>
                </div>
              </div>

              <!-- Similarity Check -->
              <div v-if="selectedPrompt.similarPrompts && selectedPrompt.similarPrompts.length > 0" class="bg-orange-50 border border-orange-200 rounded-xl p-4">
                <div class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div class="flex-1">
                    <h3 class="font-semibold text-orange-900 mb-2">Prompts similaires détectés</h3>
                    <div class="space-y-2">
                      <a
                        v-for="similar in selectedPrompt.similarPrompts"
                        :key="similar.id"
                        href="#"
                        class="block p-3 bg-white rounded-lg hover:bg-orange-100 transition-colors"
                      >
                        <div class="flex items-center justify-between">
                          <span class="font-medium text-gray-900">{{ similar.title }}</span>
                          <span class="px-2 py-1 bg-orange-200 text-orange-800 rounded text-xs font-semibold">
                            {{ similar.similarity }}% similaire
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Validation History -->
              <div v-if="selectedPrompt.validationHistory && selectedPrompt.validationHistory.length > 0">
                <h3 class="text-lg font-semibold text-black mb-3">Historique de validation</h3>
                <div class="space-y-3">
                  <div
                    v-for="history in selectedPrompt.validationHistory"
                    :key="history.date"
                    class="p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div class="flex items-center justify-between mb-2">
                      <span class="font-medium text-gray-900">{{ history.promptTitle }}</span>
                      <span
                        class="px-2 py-1 rounded text-xs font-semibold"
                        :class="{
                          'bg-green-100 text-green-700': history.status === 'approved',
                          'bg-red-100 text-red-700': history.status === 'rejected'
                        }"
                      >
                        {{ history.status === 'approved' ? 'Validé' : 'Rejeté' }}
                      </span>
                    </div>
                    <p class="text-sm text-gray-600">{{ history.date }}</p>
                    <p v-if="history.reason" class="text-sm text-gray-700 mt-2 italic">"{{ history.reason }}"</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Action Panel (Sticky) -->
            <div class="fixed bottom-0 right-0 left-[40%] bg-white border-t border-gray-200 shadow-lg p-6">
              <div class="space-y-4">
                <!-- Notes -->
                <div>
                  <label class="block text-sm font-medium text-gray-900 mb-2">
                    Notes pour l'auteur (optionnel)
                  </label>
                  <textarea
                    v-model="validationNotes"
                    @input="autoSaveNotes"
                    rows="3"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
                    placeholder="Ajoutez des commentaires pour l'auteur..."
                  ></textarea>
                  <p v-if="notesSaved" class="text-xs text-green-600 mt-1">Notes sauvegardées automatiquement</p>
                </div>

                <!-- Quick Rejection Reasons -->
                <div v-if="showRejectionReasons">
                  <label class="block text-sm font-medium text-gray-900 mb-2">
                    Raisons du rejet <span class="text-red-500">*</span>
                  </label>
                  <div class="space-y-2">
                    <label
                      v-for="reason in rejectionReasons"
                      :key="reason.value"
                      class="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        v-model="selectedRejectionReasons"
                        type="checkbox"
                        :value="reason.value"
                        class="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                      />
                      <span class="text-sm text-gray-700">{{ reason.label }}</span>
                    </label>
                  </div>
                  <p v-if="selectedRejectionReasons.includes('other') && !validationNotes" class="text-xs text-red-600 mt-2">
                    Veuillez préciser la raison dans les notes
                  </p>
                </div>

                <!-- Action Buttons -->
                <div class="flex items-center gap-3">
                  <button
                    @click="validatePrompt"
                    class="flex-1 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center gap-2"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Valider
                    <kbd class="ml-2 px-2 py-1 bg-green-700 rounded text-xs">V</kbd>
                  </button>
                  <button
                    @click="requestModification"
                    class="flex-1 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-semibold flex items-center justify-center gap-2"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Demander modification
                  </button>
                  <button
                    @click="toggleRejectionReasons"
                    class="flex-1 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center justify-center gap-2"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Rejeter
                    <kbd class="ml-2 px-2 py-1 bg-red-700 rounded text-xs">R</kbd>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bulk Action Confirmation Modal -->
      <div
        v-if="showBulkConfirmModal"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        @click.self="showBulkConfirmModal = false"
      >
        <div class="bg-white rounded-xl max-w-md w-full p-6">
          <h3 class="text-xl font-bold text-black mb-4">Confirmer l'action groupée</h3>
          <p class="text-gray-700 mb-6">
            Êtes-vous sûr de vouloir {{ bulkAction === 'validate' ? 'valider' : 'rejeter' }} 
            {{ selectedPrompts.length }} prompt(s) ?
          </p>
          <div class="flex items-center gap-3">
            <button
              @click="showBulkConfirmModal = false"
              class="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Annuler
            </button>
            <button
              @click="confirmBulkAction"
              class="flex-1 px-4 py-2 rounded-lg text-white font-semibold transition-colors"
              :class="bulkAction === 'validate' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'"
            >
              Confirmer
            </button>
          </div>
        </div>
      </div>

      <!-- Toast Notification -->
      <Transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="translate-y-2 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition ease-in duration-200"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-2 opacity-0"
      >
        <div
          v-if="showToast"
          class="fixed bottom-8 right-8 bg-black text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 z-50"
        >
          <svg class="w-6 h-6 text-[#FFCB05]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span class="font-medium">{{ toastMessage }}</span>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, h } from 'vue'

// Sidebar
const sidebarOpen = ref(false)
const activeTab = ref('validation')

// Icons as functional components
const DashboardIcon = () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' })
])

const ValidationIcon = () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' })
])

const UsersIcon = () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' })
])

const CategoryIcon = () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z' })
])

const ReportIcon = () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' })
])

const StatsIcon = () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' })
])

const SettingsIcon = () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' }),
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z' })
])

const navItems = [
  { id: 'dashboard', name: 'Dashboard', icon: DashboardIcon },
  { id: 'validation', name: 'Validation de prompts', icon: ValidationIcon, badge: 23, badgeColor: 'bg-orange-500 text-white' },
  { id: 'users', name: 'Utilisateurs', icon: UsersIcon },
  { id: 'categories', name: 'Catégories', icon: CategoryIcon },
  { id: 'reports', name: 'Signalements', icon: ReportIcon, badge: 5, badgeColor: 'bg-red-500 text-white' },
  { id: 'stats', name: 'Statistiques', icon: StatsIcon },
  { id: 'settings', name: 'Paramètres', icon: SettingsIcon }
]

// Stats
const pendingCount = ref(23)
const validatedToday = ref(15)
const avgValidationTime = ref(8)
const isRefreshing = ref(false)

// Filters
const filters = ref({
  status: 'pending',
  category: '',
  dateFrom: '',
  dateTo: '',
  sort: 'newest',
  search: ''
})

const statusTabs = computed(() => [
  { label: 'Tous', value: 'all', count: null },
  { label: 'En attente', value: 'pending', count: pendingCount.value },
  { label: 'Validés', value: 'approved', count: null },
  { label: 'Rejetés', value: 'rejected', count: null }
])

const categories = ref([
  'Marketing',
  'Développement',
  'Rédaction',
  'Design',
  'Data & Analyse',
  'Éducation'
])

const hasActiveFilters = computed(() => {
  return filters.value.category || filters.value.dateFrom || filters.value.dateTo || filters.value.search
})

// Prompts data
const prompts = ref([
  {
    id: 1,
    title: 'Générateur de Posts LinkedIn Engageants',
    author: { name: 'Sophie Martin', initials: 'SM', totalPrompts: 127, acceptanceRate: 94 },
    category: 'Marketing',
    status: 'pending',
    submittedAt: 'il y a 2 heures',
    length: 1247,
    tagsCount: 4,
    tags: ['LinkedIn', 'Réseaux Sociaux', 'Content Marketing', 'B2B'],
    content: `Tu es un expert en marketing LinkedIn. Crée un post engageant sur [SUJET] qui :

1. Commence par un hook accrocheur (question, statistique surprenante, ou affirmation forte)
2. Utilise des sauts de ligne pour faciliter la lecture
3. Inclut 3-5 points clés avec des émojis pertinents
4. S'adresse directement à [AUDIENCE]
5. Se termine par [CTA] qui encourage l'interaction

Format :
- Maximum 1300 caractères
- Ton professionnel mais accessible
- Utilise des listes à puces ou numérotées
- Ajoute 3-5 hashtags pertinents à la fin`,
    description: 'Ce prompt est conçu pour générer des posts LinkedIn engageants et professionnels. Il utilise une structure éprouvée qui capte l\'attention et encourage l\'interaction.',
    variables: [
      { name: 'SUJET', description: 'Le thème principal de votre post' },
      { name: 'AUDIENCE', description: 'Votre public cible (ex: entrepreneurs, marketeurs)' },
      { name: 'CTA', description: 'Votre appel à l\'action' }
    ],
    exampleOutput: '🚀 3 erreurs qui tuent votre stratégie de contenu LinkedIn\n\nAprès avoir analysé +500 profils, voici ce qui sépare les créateurs qui réussissent des autres...',
    aiModels: ['GPT-4', 'Claude 3 Opus'],
    similarPrompts: [
      { id: 2, title: 'Créateur de Posts LinkedIn pour Entrepreneurs', similarity: 78 },
      { id: 3, title: 'Générateur de Contenu LinkedIn B2B', similarity: 65 }
    ],
    validationHistory: [
      { promptTitle: 'Guide de Stratégie LinkedIn', status: 'approved', date: 'il y a 1 mois', reason: null },
      { promptTitle: 'Templates de Posts LinkedIn', status: 'rejected', date: 'il y a 2 mois', reason: 'Manque de clarté dans les instructions' }
    ]
  },
  {
    id: 2,
    title: 'Assistant de Débogage de Code Python',
    author: { name: 'Thomas Dubois', initials: 'TD', totalPrompts: 89, acceptanceRate: 87 },
    category: 'Développement',
    status: 'pending',
    submittedAt: 'il y a 5 heures',
    length: 892,
    tagsCount: 3,
    tags: ['Python', 'Debug', 'Code'],
    content: 'Tu es un expert en Python. Analyse le code suivant et identifie les bugs...',
    description: 'Aide à identifier et corriger les erreurs dans le code Python.',
    variables: [],
    exampleOutput: null,
    aiModels: ['GPT-4', 'Claude 3'],
    similarPrompts: [],
    validationHistory: []
  },
  {
    id: 3,
    title: 'Créateur de Descriptions de Produits E-commerce',
    author: { name: 'Marie Leroy', initials: 'ML', totalPrompts: 156, acceptanceRate: 96 },
    category: 'Rédaction',
    status: 'pending',
    submittedAt: 'il y a 1 jour',
    length: 1534,
    tagsCount: 5,
    tags: ['E-commerce', 'SEO', 'Copywriting', 'Vente', 'Marketing'],
    content: 'Rédige une description de produit optimisée SEO pour [PRODUIT]...',
    description: 'Génère des descriptions de produits convaincantes et optimisées pour le référencement.',
    variables: [{ name: 'PRODUIT', description: 'Le nom du produit' }],
    exampleOutput: null,
    aiModels: ['GPT-4'],
    similarPrompts: [],
    validationHistory: []
  }
])

const selectedPrompt = ref<typeof prompts.value[0] | null>(null)
const selectedPrompts = ref<number[]>([])
const currentPage = ref(1)
const itemsPerPage = ref(20)

const filteredPrompts = computed(() => {
  let result = prompts.value

  if (filters.value.status !== 'all') {
    result = result.filter(p => p.status === filters.value.status)
  }

  if (filters.value.category) {
    result = result.filter(p => p.category === filters.value.category)
  }

  if (filters.value.search) {
    const search = filters.value.search.toLowerCase()
    result = result.filter(p => 
      p.title.toLowerCase().includes(search) || 
      p.author.name.toLowerCase().includes(search)
    )
  }

  return result
})

// Validation
const validationNotes = ref('')
const notesSaved = ref(false)
const showRejectionReasons = ref(false)
const selectedRejectionReasons = ref<string[]>([])

const rejectionReasons = [
  { value: 'inappropriate', label: 'Contenu inapproprié' },
  { value: 'quality', label: 'Qualité insuffisante' },
  { value: 'spam', label: 'Spam/Duplication' },
  { value: 'clarity', label: 'Manque de clarté' },
  { value: 'other', label: 'Autre (préciser dans les notes)' }
]

let autoSaveTimeout: number | null = null

const autoSaveNotes = () => {
  if (autoSaveTimeout) {
    clearTimeout(autoSaveTimeout)
  }
  
  autoSaveTimeout = window.setTimeout(() => {
    notesSaved.value = true
    setTimeout(() => {
      notesSaved.value = false
    }, 2000)
  }, 1000)
}

// Toast
const showToast = ref(false)
const toastMessage = ref('')

const showToastMessage = (message: string) => {
  toastMessage.value = message
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}

// Bulk actions
const showBulkConfirmModal = ref(false)
const bulkAction = ref<'validate' | 'reject'>('validate')

// Actions
const refreshList = async () => {
  isRefreshing.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  isRefreshing.value = false
  showToastMessage('Liste rafraîchie')
}

const clearFilters = () => {
  filters.value = {
    status: 'all',
    category: '',
    dateFrom: '',
    dateTo: '',
    sort: 'newest',
    search: ''
  }
}

const selectPrompt = (prompt: typeof prompts.value[0]) => {
  selectedPrompt.value = prompt
  validationNotes.value = ''
  showRejectionReasons.value = false
  selectedRejectionReasons.value = []
}

const toggleSelection = (id: number) => {
  const index = selectedPrompts.value.indexOf(id)
  if (index > -1) {
    selectedPrompts.value.splice(index, 1)
  } else {
    selectedPrompts.value.push(id)
  }
}

const validatePrompt = () => {
  if (selectedPrompt.value) {
    showToastMessage(`Prompt "${selectedPrompt.value.title}" validé avec succès`)
    goToNextPrompt()
  }
}

const toggleRejectionReasons = () => {
  showRejectionReasons.value = !showRejectionReasons.value
}

const requestModification = () => {
  if (selectedPrompt.value) {
    showToastMessage(`Demande de modification envoyée pour "${selectedPrompt.value.title}"`)
    goToNextPrompt()
  }
}

const goToNextPrompt = () => {
  const currentIndex = filteredPrompts.value.findIndex(p => p.id === selectedPrompt.value?.id)
  if (currentIndex < filteredPrompts.value.length - 1) {
    selectPrompt(filteredPrompts.value[currentIndex + 1])
  } else if (filteredPrompts.value.length > 0) {
    selectPrompt(filteredPrompts.value[0])
  } else {
    selectedPrompt.value = null
  }
}

const bulkValidate = () => {
  bulkAction.value = 'validate'
  showBulkConfirmModal.value = true
}

const bulkReject = () => {
  bulkAction.value = 'reject'
  showBulkConfirmModal.value = true
}

const confirmBulkAction = () => {
  const action = bulkAction.value === 'validate' ? 'validés' : 'rejetés'
  showToastMessage(`${selectedPrompts.value.length} prompts ${action}`)
  selectedPrompts.value = []
  showBulkConfirmModal.value = false
}

// Keyboard shortcuts
const handleKeyPress = (e: KeyboardEvent) => {
  if (!selectedPrompt.value) return
  
  // Ignore if typing in textarea
  if (e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLInputElement) return
  
  if (e.key === 'v' || e.key === 'V') {
    validatePrompt()
  } else if (e.key === 'r' || e.key === 'R') {
    toggleRejectionReasons()
  } else if (e.key === 'n' || e.key === 'N') {
    goToNextPrompt()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyPress)
  if (filteredPrompts.value.length > 0) {
    selectPrompt(filteredPrompts.value[0])
  }
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyPress)
  if (autoSaveTimeout) {
    clearTimeout(autoSaveTimeout)
  }
})
</script>
