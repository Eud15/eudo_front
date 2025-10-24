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
        <div class="flex items-center justify-between">
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
              <h2 class="text-2xl font-bold text-gray-900">Gestion des Catégories</h2>
              <p class="text-sm text-gray-600 mt-1">{{ categories.length }} catégories au total</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <button
              @click="reorderMode = !reorderMode"
              class="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors font-medium"
              :class="reorderMode ? 'bg-[#FFCB05] text-black' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {{ reorderMode ? 'Terminer' : 'Réorganiser' }}
            </button>
            <button
              @click="openCreateModal"
              class="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
              Nouvelle Catégorie
            </button>
            <button class="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
      </header>

      <!-- Main Content Area -->
      <div class="flex h-[calc(100vh-120px)]">
        <!-- Left Column: Categories Tree -->
        <div class="w-[35%] border-r border-gray-200 bg-white flex flex-col">
          <!-- Search -->
          <div class="p-4 border-b border-gray-200">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Rechercher une catégorie..."
                class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
              />
              <svg class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <!-- Categories Tree -->
          <div class="flex-1 overflow-y-auto p-4">
            <div v-if="filteredCategories.length === 0" class="text-center py-12">
              <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <p class="text-gray-600">Aucune catégorie trouvée</p>
            </div>

            <div v-else class="space-y-1">
              <div
                v-for="category in filteredCategories"
                :key="category.id"
                class="group"
              >
                <!-- Main Category -->
                <button
                  @click="selectCategory(category)"
                  class="w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-colors"
                  :class="selectedCategory?.id === category.id ? 'bg-[#FFCB05] text-black' : 'hover:bg-gray-100'"
                >
                  <svg
                    v-if="reorderMode"
                    class="w-4 h-4 text-gray-400 cursor-move"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                  </svg>
                  <button
                    v-if="category.children && category.children.length > 0"
                    @click.stop="toggleExpand(category.id)"
                    class="p-0.5 hover:bg-gray-200 rounded"
                  >
                    <svg
                      class="w-4 h-4 transition-transform"
                      :class="{ 'rotate-90': expandedCategories.includes(category.id) }"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <span class="w-3 h-3 rounded-full flex-shrink-0" :style="{ backgroundColor: category.color }"></span>
                  <span class="text-xl">{{ category.icon }}</span>
                  <span class="flex-1 text-left font-medium">{{ category.name }}</span>
                  <span class="text-sm text-gray-500">({{ category.promptCount }})</span>
                  <div class="opacity-0 group-hover:opacity-100 flex items-center gap-1">
                    <button
                      @click.stop="openEditModal(category)"
                      class="p-1 hover:bg-gray-200 rounded"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button
                      @click.stop="confirmDelete(category)"
                      class="p-1 hover:bg-red-100 rounded text-red-600"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </button>

                <!-- Sub-categories -->
                <div
                  v-if="category.children && expandedCategories.includes(category.id)"
                  class="ml-8 mt-1 space-y-1"
                >
                  <button
                    v-for="child in category.children"
                    :key="child.id"
                    @click="selectCategory(child)"
                    class="w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-colors group"
                    :class="selectedCategory?.id === child.id ? 'bg-[#FFCB05] text-black' : 'hover:bg-gray-100'"
                  >
                    <svg
                      v-if="reorderMode"
                      class="w-4 h-4 text-gray-400 cursor-move"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                    </svg>
                    <span class="w-2 h-2 rounded-full flex-shrink-0" :style="{ backgroundColor: child.color }"></span>
                    <span class="text-lg">{{ child.icon }}</span>
                    <span class="flex-1 text-left text-sm font-medium">{{ child.name }}</span>
                    <span class="text-xs text-gray-500">({{ child.promptCount }})</span>
                    <div class="opacity-0 group-hover:opacity-100 flex items-center gap-1">
                      <button
                        @click.stop="openEditModal(child)"
                        class="p-1 hover:bg-gray-200 rounded"
                      >
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        @click.stop="confirmDelete(child)"
                        class="p-1 hover:bg-red-100 rounded text-red-600"
                      >
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </button>
                </div>

                <!-- Add subcategory button -->
                <button
                  v-if="!reorderMode"
                  @click="openCreateSubcategoryModal(category)"
                  class="ml-8 mt-1 w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                  </svg>
                  Ajouter sous-catégorie
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Category Details -->
        <div class="flex-1 bg-white overflow-y-auto">
          <div v-if="!selectedCategory" class="flex flex-col items-center justify-center h-full text-center p-8">
            <svg class="w-20 h-20 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Sélectionnez une catégorie</h3>
            <p class="text-gray-600">Choisissez une catégorie dans la liste pour voir les détails et la modifier.</p>
          </div>

          <div v-else class="p-6 space-y-6">
            <!-- Edit Form -->
            <div class="bg-white rounded-xl border border-gray-200 p-6">
              <h3 class="text-xl font-bold text-black mb-6">Informations de la catégorie</h3>
              
              <div class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-900 mb-2">Nom de la catégorie</label>
                    <input
                      v-model="editForm.name"
                      type="text"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
                      @input="hasUnsavedChanges = true"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-900 mb-2">Slug</label>
                    <input
                      v-model="editForm.slug"
                      type="text"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
                      @input="hasUnsavedChanges = true"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-900 mb-2">Catégorie parente</label>
                  <select
                    v-model="editForm.parentId"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
                    @change="hasUnsavedChanges = true"
                  >
                    <option :value="null">Aucune (catégorie principale)</option>
                    <option
                      v-for="cat in categories.filter(c => c.id !== selectedCategory.id)"
                      :key="cat.id"
                      :value="cat.id"
                    >
                      {{ cat.name }}
                    </option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-900 mb-2">Description</label>
                  <textarea
                    v-model="editForm.description"
                    rows="3"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
                    @input="hasUnsavedChanges = true"
                  ></textarea>
                </div>

                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-900 mb-2">Icône</label>
                    <button
                      @click="showIconPicker = true"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between"
                    >
                      <span class="text-2xl">{{ editForm.icon }}</span>
                      <span class="text-sm text-gray-600">Changer</span>
                    </button>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-900 mb-2">Couleur</label>
                    <div class="flex gap-2">
                      <button
                        v-for="color in predefinedColors"
                        :key="color"
                        @click="editForm.color = color; hasUnsavedChanges = true"
                        class="w-10 h-10 rounded-lg border-2 transition-all"
                        :class="editForm.color === color ? 'border-black scale-110' : 'border-gray-300'"
                        :style="{ backgroundColor: color }"
                      ></button>
                    </div>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-900 mb-2">Meta description pour SEO</label>
                  <textarea
                    v-model="editForm.metaDescription"
                    rows="2"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
                    placeholder="Description optimisée pour les moteurs de recherche..."
                    @input="hasUnsavedChanges = true"
                  ></textarea>
                </div>

                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-900 mb-2">Ordre d'affichage</label>
                    <input
                      v-model.number="editForm.order"
                      type="number"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
                      @input="hasUnsavedChanges = true"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-900 mb-2">Statut</label>
                    <label class="flex items-center gap-3 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer">
                      <input
                        v-model="editForm.active"
                        type="checkbox"
                        class="w-5 h-5 text-[#FFCB05] border-gray-300 rounded focus:ring-[#FFCB05]"
                        @change="hasUnsavedChanges = true"
                      />
                      <span class="font-medium">{{ editForm.active ? 'Activé' : 'Désactivé' }}</span>
                    </label>
                  </div>
                </div>
              </div>

              <div class="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
                <button
                  @click="saveCategory"
                  :disabled="!hasUnsavedChanges"
                  class="px-6 py-2 bg-[#FFCB05] text-black rounded-lg hover:bg-[#FFCB05]/90 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Sauvegarder les modifications
                </button>
                <button
                  @click="cancelEdit"
                  class="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Annuler
                </button>
              </div>
            </div>

            <!-- Stats Section -->
            <div class="bg-white rounded-xl border border-gray-200 p-6">
              <h3 class="text-xl font-bold text-black mb-6">Statistiques</h3>
              
              <div class="grid grid-cols-3 gap-4 mb-6">
                <div class="bg-gray-50 rounded-lg p-4">
                  <p class="text-sm text-gray-600 mb-1">Total prompts</p>
                  <p class="text-2xl font-bold text-black">{{ selectedCategory.promptCount }}</p>
                </div>
                <div class="bg-green-50 rounded-lg p-4">
                  <p class="text-sm text-gray-600 mb-1">Validés</p>
                  <p class="text-2xl font-bold text-green-600">{{ selectedCategory.validatedCount || 0 }}</p>
                </div>
                <div class="bg-orange-50 rounded-lg p-4">
                  <p class="text-sm text-gray-600 mb-1">En attente</p>
                  <p class="text-2xl font-bold text-orange-600">{{ selectedCategory.pendingCount || 0 }}</p>
                </div>
              </div>

              <div class="mb-6">
                <h4 class="font-semibold text-gray-900 mb-3">Popularité (30 derniers jours)</h4>
                <div class="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
                  <p class="text-gray-500">Graphique de popularité</p>
                </div>
              </div>

              <div>
                <h4 class="font-semibold text-gray-900 mb-3">Top contributeurs</h4>
                <div class="space-y-2">
                  <div
                    v-for="(contributor, index) in selectedCategory.topContributors || []"
                    :key="contributor.id"
                    class="flex items-center gap-3 p-2 bg-gray-50 rounded-lg"
                  >
                    <span class="text-sm font-bold text-gray-500">{{ index + 1 }}</span>
                    <div class="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFCB05] to-yellow-600 flex items-center justify-center text-white text-xs font-bold">
                      {{ contributor.initials }}
                    </div>
                    <span class="flex-1 text-sm font-medium">{{ contributor.name }}</span>
                    <span class="text-sm text-gray-600">{{ contributor.promptCount }} prompts</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Associated Prompts -->
            <div class="bg-white rounded-xl border border-gray-200 p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-xl font-bold text-black">Prompts récents</h3>
                <a href="#" class="text-[#FFCB05] hover:underline text-sm font-medium">
                  Voir tous les prompts →
                </a>
              </div>
              
              <div class="space-y-2">
                <a
                  v-for="prompt in selectedCategory.recentPrompts || []"
                  :key="prompt.id"
                  href="#"
                  class="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <h4 class="font-medium text-gray-900 mb-1">{{ prompt.title }}</h4>
                  <div class="flex items-center gap-2 text-xs text-gray-600">
                    <span>Par {{ prompt.author }}</span>
                    <span>•</span>
                    <span>{{ prompt.date }}</span>
                  </div>
                </a>
              </div>
            </div>

            <!-- Danger Zone -->
            <div class="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 class="text-xl font-bold text-red-900 mb-4">Zone de danger</h3>
              
              <div class="space-y-3">
                <button
                  @click="openMergeModal"
                  class="w-full flex items-center justify-between p-4 bg-white border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
                >
                  <div class="text-left">
                    <p class="font-medium text-gray-900">Fusionner avec une autre catégorie</p>
                    <p class="text-sm text-gray-600">Tous les prompts seront déplacés vers la catégorie cible</p>
                  </div>
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <button
                  @click="confirmDelete(selectedCategory)"
                  class="w-full flex items-center justify-between p-4 bg-white border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
                >
                  <div class="text-left">
                    <p class="font-medium text-red-900">Supprimer la catégorie</p>
                    <p class="text-sm text-gray-600">Cette action est irréversible</p>
                  </div>
                  <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Create/Edit Category Modal -->
    <div
      v-if="showCategoryModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click.self="closeCategoryModal"
    >
      <div class="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 class="text-2xl font-bold text-gray-900">
            {{ modalMode === 'create' ? 'Nouvelle catégorie' : 'Modifier la catégorie' }}
          </h2>
          <button
            @click="closeCategoryModal"
            class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="p-6 space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-900 mb-2">Nom de la catégorie</label>
              <input
                v-model="modalForm.name"
                type="text"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-900 mb-2">Slug</label>
              <input
                v-model="modalForm.slug"
                type="text"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-900 mb-2">Catégorie parente</label>
            <select
              v-model="modalForm.parentId"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
            >
              <option :value="null">Aucune (catégorie principale)</option>
              <option
                v-for="cat in categories"
                :key="cat.id"
                :value="cat.id"
              >
                {{ cat.name }}
              </option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-900 mb-2">Description</label>
            <textarea
              v-model="modalForm.description"
              rows="3"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
            ></textarea>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-900 mb-2">Icône</label>
              <button
                @click="showIconPicker = true"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                <span class="text-2xl">{{ modalForm.icon }}</span>
                <span class="text-sm text-gray-600">Changer</span>
              </button>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-900 mb-2">Couleur</label>
              <div class="flex gap-2">
                <button
                  v-for="color in predefinedColors"
                  :key="color"
                  @click="modalForm.color = color"
                  class="w-10 h-10 rounded-lg border-2 transition-all"
                  :class="modalForm.color === color ? 'border-black scale-110' : 'border-gray-300'"
                  :style="{ backgroundColor: color }"
                ></button>
              </div>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-900 mb-2">Meta description pour SEO</label>
            <textarea
              v-model="modalForm.metaDescription"
              rows="2"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
              placeholder="Description optimisée pour les moteurs de recherche..."
            ></textarea>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-900 mb-2">Ordre d'affichage</label>
              <input
                v-model.number="modalForm.order"
                type="number"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-900 mb-2">Statut</label>
              <label class="flex items-center gap-3 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer">
                <input
                  v-model="modalForm.active"
                  type="checkbox"
                  class="w-5 h-5 text-[#FFCB05] border-gray-300 rounded focus:ring-[#FFCB05]"
                />
                <span class="font-medium">{{ modalForm.active ? 'Activé' : 'Désactivé' }}</span>
              </label>
            </div>
          </div>
        </div>

        <div class="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex items-center justify-end gap-3">
          <button
            @click="closeCategoryModal"
            class="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Annuler
          </button>
          <button
            @click="submitCategoryModal"
            class="px-6 py-2 bg-[#FFCB05] text-black rounded-lg hover:bg-[#FFCB05]/90 transition-colors font-medium"
          >
            {{ modalMode === 'create' ? 'Créer' : 'Sauvegarder' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Icon Picker Modal -->
    <div
      v-if="showIconPicker"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click.self="showIconPicker = false"
    >
      <div class="bg-white rounded-xl max-w-2xl w-full">
        <div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h3 class="text-xl font-bold text-gray-900">Choisir une icône</h3>
          <button
            @click="showIconPicker = false"
            class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="p-6">
          <div class="grid grid-cols-8 gap-3">
            <button
              v-for="icon in availableIcons"
              :key="icon"
              @click="selectIcon(icon)"
              class="w-12 h-12 flex items-center justify-center text-2xl hover:bg-gray-100 rounded-lg transition-colors border-2"
              :class="(selectedCategory ? editForm.icon : modalForm.icon) === icon ? 'border-[#FFCB05] bg-yellow-50' : 'border-transparent'"
            >
              {{ icon }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Merge Categories Modal -->
    <div
      v-if="showMergeModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click.self="showMergeModal = false"
    >
      <div class="bg-white rounded-xl max-w-md w-full p-6">
        <h3 class="text-xl font-bold text-gray-900 mb-4">Fusionner les catégories</h3>
        
        <div class="space-y-4 mb-6">
          <div>
            <label class="block text-sm font-medium text-gray-900 mb-2">Catégorie source</label>
            <input
              :value="selectedCategory?.name"
              disabled
              class="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-900 mb-2">Catégorie de destination</label>
            <select
              v-model="mergeTargetId"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
            >
              <option value="">Sélectionner une catégorie</option>
              <option
                v-for="cat in categories.filter(c => c.id !== selectedCategory?.id)"
                :key="cat.id"
                :value="cat.id"
              >
                {{ cat.name }}
              </option>
            </select>
          </div>

          <div class="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <p class="text-sm text-orange-800">
              <strong>Attention:</strong> Tous les {{ selectedCategory?.promptCount }} prompts de "{{ selectedCategory?.name }}" seront déplacés vers la catégorie de destination.
            </p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <button
            @click="showMergeModal = false"
            class="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Annuler
          </button>
          <button
            @click="confirmMerge"
            :disabled="!mergeTargetId"
            class="flex-1 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Fusionner
          </button>
        </div>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div
      v-if="showDeleteModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click.self="showDeleteModal = false"
    >
      <div class="bg-white rounded-xl max-w-md w-full p-6">
        <h3 class="text-xl font-bold text-gray-900 mb-4">Supprimer la catégorie</h3>
        
        <div class="space-y-4 mb-6">
          <p class="text-gray-700">
            Êtes-vous sûr de vouloir supprimer la catégorie <strong>"{{ categoryToDelete?.name }}"</strong> ?
          </p>

          <div v-if="categoryToDelete && categoryToDelete.promptCount > 0" class="space-y-3">
            <div class="bg-red-50 border border-red-200 rounded-lg p-4">
              <p class="text-sm text-red-800">
                <strong>Attention:</strong> Cette catégorie contient {{ categoryToDelete.promptCount }} prompts.
              </p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-900 mb-2">
                Réassigner les prompts à:
              </label>
              <select
                v-model="reassignCategoryId"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
              >
                <option value="">Supprimer les prompts</option>
                <option
                  v-for="cat in categories.filter(c => c.id !== categoryToDelete?.id)"
                  :key="cat.id"
                  :value="cat.id"
                >
                  {{ cat.name }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <button
            @click="showDeleteModal = false"
            class="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Annuler
          </button>
          <button
            @click="confirmDeleteAction"
            class="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>

    <!-- Unsaved Changes Modal -->
    <div
      v-if="showUnsavedModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click.self="showUnsavedModal = false"
    >
      <div class="bg-white rounded-xl max-w-md w-full p-6">
        <h3 class="text-xl font-bold text-gray-900 mb-4">Modifications non sauvegardées</h3>
        <p class="text-gray-700 mb-6">
          Vous avez des modifications non sauvegardées. Voulez-vous les sauvegarder avant de continuer ?
        </p>
        <div class="flex items-center gap-3">
          <button
            @click="discardChanges"
            class="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Ignorer
          </button>
          <button
            @click="saveAndContinue"
            class="flex-1 px-4 py-2 bg-[#FFCB05] text-black rounded-lg hover:bg-[#FFCB05]/90 transition-colors font-semibold"
          >
            Sauvegarder
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
</template>

<script setup lang="ts">
import { ref, computed, h } from 'vue'

// Sidebar
const sidebarOpen = ref(false)
const activeTab = ref('categories')

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

// Categories data
const categories = ref([
  {
    id: 1,
    name: 'Marketing',
    slug: 'marketing',
    icon: '📢',
    color: '#3B82F6',
    description: 'Prompts pour le marketing digital et la création de contenu',
    metaDescription: 'Découvrez nos prompts marketing pour booster votre stratégie digitale',
    parentId: null,
    promptCount: 247,
    validatedCount: 235,
    pendingCount: 12,
    order: 1,
    active: true,
    children: [
      { id: 11, name: 'Réseaux Sociaux', slug: 'reseaux-sociaux', icon: '📱', color: '#8B5CF6', parentId: 1, promptCount: 89, order: 1, active: true },
      { id: 12, name: 'Email Marketing', slug: 'email-marketing', icon: '📧', color: '#EC4899', parentId: 1, promptCount: 67, order: 2, active: true }
    ],
    topContributors: [
      { id: 1, name: 'Sophie Martin', initials: 'SM', promptCount: 45 },
      { id: 2, name: 'Thomas Dubois', initials: 'TD', promptCount: 32 }
    ],
    recentPrompts: [
      { id: 1, title: 'Générateur de Posts LinkedIn', author: 'Sophie Martin', date: 'il y a 2h' },
      { id: 2, title: 'Créateur de Threads Twitter', author: 'Thomas Dubois', date: 'il y a 5h' }
    ]
  },
  {
    id: 2,
    name: 'Développement',
    slug: 'developpement',
    icon: '💻',
    color: '#10B981',
    description: 'Prompts pour le développement et la programmation',
    metaDescription: 'Prompts pour développeurs et programmeurs',
    parentId: null,
    promptCount: 189,
    validatedCount: 180,
    pendingCount: 9,
    order: 2,
    active: true,
    children: [],
    topContributors: [
      { id: 3, name: 'Lucas Bernard', initials: 'LB', promptCount: 56 }
    ],
    recentPrompts: [
      { id: 3, title: 'Générateur de Code React', author: 'Lucas Bernard', date: 'il y a 1h' }
    ]
  },
  {
    id: 3,
    name: 'Rédaction',
    slug: 'redaction',
    icon: '✍️',
    color: '#F59E0B',
    description: 'Prompts pour la rédaction et le copywriting',
    metaDescription: 'Prompts de rédaction professionnelle',
    parentId: null,
    promptCount: 156,
    validatedCount: 150,
    pendingCount: 6,
    order: 3,
    active: true,
    children: [],
    topContributors: [],
    recentPrompts: []
  },
  {
    id: 4,
    name: 'Design',
    slug: 'design',
    icon: '🎨',
    color: '#EF4444',
    description: 'Prompts pour le design et la créativité',
    metaDescription: 'Prompts créatifs pour designers',
    parentId: null,
    promptCount: 98,
    validatedCount: 92,
    pendingCount: 6,
    order: 4,
    active: true,
    children: [],
    topContributors: [],
    recentPrompts: []
  }
])

// State
const searchQuery = ref('')
const reorderMode = ref(false)
const selectedCategory = ref<typeof categories.value[0] | null>(null)
const expandedCategories = ref<number[]>([1, 2])

// Edit form
const editForm = ref({
  name: '',
  slug: '',
  parentId: null as number | null,
  description: '',
  icon: '',
  color: '',
  metaDescription: '',
  order: 0,
  active: true
})

const hasUnsavedChanges = ref(false)

// Modals
const showCategoryModal = ref(false)
const showIconPicker = ref(false)
const showMergeModal = ref(false)
const showDeleteModal = ref(false)
const showUnsavedModal = ref(false)
const modalMode = ref<'create' | 'edit'>('create')

const modalForm = ref({
  name: '',
  slug: '',
  parentId: null as number | null,
  description: '',
  icon: '📁',
  color: '#3B82F6',
  metaDescription: '',
  order: 0,
  active: true
})

const categoryToDelete = ref<typeof categories.value[0] | null>(null)
const reassignCategoryId = ref<number | string>('')
const mergeTargetId = ref<number | string>('')

// Toast
const showToast = ref(false)
const toastMessage = ref('')

// Colors and icons
const predefinedColors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#06B6D4', '#84CC16']
const availableIcons = ['📢', '💻', '✍️', '🎨', '📊', '🎓', '🏢', '🔧', '📱', '🌐', '💡', '🎯', '📈', '🎬', '🎵', '📚', '🔬', '⚡', '🚀', '💰', '🏆', '🎮', '📷', '🍔', '✈️', '🏠', '💼', '🔒', '🌟', '🎁', '📝', '🔍']

// Computed
const filteredCategories = computed(() => {
  if (!searchQuery.value) return categories.value
  
  const query = searchQuery.value.toLowerCase()
  return categories.value.filter(cat => 
    cat.name.toLowerCase().includes(query) ||
    (cat.children && cat.children.some(child => child.name.toLowerCase().includes(query)))
  )
})

// Actions
const toggleExpand = (id: number) => {
  const index = expandedCategories.value.indexOf(id)
  if (index > -1) {
    expandedCategories.value.splice(index, 1)
  } else {
    expandedCategories.value.push(id)
  }
}

const selectCategory = (category: typeof categories.value[0]) => {
  if (hasUnsavedChanges.value) {
    showUnsavedModal.value = true
    return
  }
  
  selectedCategory.value = category
  editForm.value = {
    name: category.name,
    slug: category.slug,
    parentId: category.parentId,
    description: category.description || '',
    icon: category.icon,
    color: category.color,
    metaDescription: category.metaDescription || '',
    order: category.order,
    active: category.active
  }
  hasUnsavedChanges.value = false
}

const saveCategory = () => {
  showToastMessage('Catégorie sauvegardée avec succès')
  hasUnsavedChanges.value = false
}

const cancelEdit = () => {
  if (hasUnsavedChanges.value) {
    showUnsavedModal.value = true
  } else {
    selectedCategory.value = null
  }
}

const openCreateModal = () => {
  modalMode.value = 'create'
  modalForm.value = {
    name: '',
    slug: '',
    parentId: null,
    description: '',
    icon: '📁',
    color: '#3B82F6',
    metaDescription: '',
    order: categories.value.length + 1,
    active: true
  }
  showCategoryModal.value = true
}

const openEditModal = (category: typeof categories.value[0]) => {
  modalMode.value = 'edit'
  modalForm.value = {
    name: category.name,
    slug: category.slug,
    parentId: category.parentId,
    description: category.description || '',
    icon: category.icon,
    color: category.color,
    metaDescription: category.metaDescription || '',
    order: category.order,
    active: category.active
  }
  showCategoryModal.value = true
}

const openCreateSubcategoryModal = (parent: typeof categories.value[0]) => {
  modalMode.value = 'create'
  modalForm.value = {
    name: '',
    slug: '',
    parentId: parent.id,
    description: '',
    icon: '📁',
    color: parent.color,
    metaDescription: '',
    order: (parent.children?.length || 0) + 1,
    active: true
  }
  showCategoryModal.value = true
}

const closeCategoryModal = () => {
  showCategoryModal.value = false
}

const submitCategoryModal = () => {
  showToastMessage(modalMode.value === 'create' ? 'Catégorie créée avec succès' : 'Catégorie modifiée avec succès')
  showCategoryModal.value = false
}

const selectIcon = (icon: string) => {
  if (selectedCategory.value) {
    editForm.value.icon = icon
    hasUnsavedChanges.value = true
  } else {
    modalForm.value.icon = icon
  }
  showIconPicker.value = false
}

const openMergeModal = () => {
  mergeTargetId.value = ''
  showMergeModal.value = true
}

const confirmMerge = () => {
  showToastMessage('Catégories fusionnées avec succès')
  showMergeModal.value = false
}

const confirmDelete = (category: typeof categories.value[0]) => {
  categoryToDelete.value = category
  reassignCategoryId.value = ''
  showDeleteModal.value = true
}

const confirmDeleteAction = () => {
  showToastMessage('Catégorie supprimée avec succès')
  showDeleteModal.value = false
  selectedCategory.value = null
}

const discardChanges = () => {
  hasUnsavedChanges.value = false
  showUnsavedModal.value = false
  selectedCategory.value = null
}

const saveAndContinue = () => {
  saveCategory()
  showUnsavedModal.value = false
}

const showToastMessage = (message: string) => {
  toastMessage.value = message
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}
</script>
