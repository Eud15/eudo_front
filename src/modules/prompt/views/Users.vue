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
              <h2 class="text-2xl font-bold text-gray-900">Gestion des Utilisateurs</h2>
              <div class="flex items-center gap-2 mt-1">
                <span class="text-sm text-gray-600">{{ totalUsers }} utilisateurs</span>
                <span class="flex items-center gap-1 text-sm font-medium text-green-600">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  +12% ce mois
                </span>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <button class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Exporter les données
            </button>
            <button class="px-4 py-2 bg-[#FFCB05] text-black rounded-lg hover:bg-[#FFCB05]/90 transition-colors font-medium">
              + Créer un administrateur
            </button>
          </div>
        </div>
      </header>

      <!-- Main Content Area -->
      <main class="px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex gap-6">
          <!-- Left Column -->
          <div class="flex-1 space-y-6">
            <!-- Stats Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div
                v-for="stat in stats"
                :key="stat.label"
                class="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div class="flex items-center justify-between mb-4">
                  <div
                    class="w-12 h-12 rounded-lg flex items-center justify-center"
                    :class="stat.bgColor"
                  >
                    <component :is="stat.icon" class="w-6 h-6" :class="stat.iconColor" />
                  </div>
                  <span
                    v-if="stat.trend"
                    class="flex items-center gap-1 text-sm font-medium"
                    :class="stat.trend > 0 ? 'text-green-600' : 'text-red-600'"
                  >
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      :class="{ 'rotate-180': stat.trend < 0 }"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    {{ Math.abs(stat.trend) }}%
                  </span>
                </div>
                <h3 class="text-3xl font-bold text-gray-900 mb-1">{{ stat.value }}</h3>
                <p class="text-sm text-gray-600">{{ stat.label }}</p>
              </div>
            </div>

            <!-- Filters Section -->
            <div class="bg-white rounded-xl p-6 border border-gray-200">
              <div class="space-y-4">
                <!-- Search and Role Filter -->
                <div class="flex flex-wrap gap-3">
                  <div class="flex-1 min-w-[300px]">
                    <div class="relative">
                      <input
                        v-model="filters.search"
                        type="text"
                        placeholder="Rechercher par nom, email ou username..."
                        class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
                      />
                      <svg class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                  <select
                    v-model="filters.role"
                    class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
                  >
                    <option value="">Tous les rôles</option>
                    <option value="user">Utilisateurs</option>
                    <option value="admin">Administrateurs</option>
                    <option value="banned">Bannis</option>
                  </select>
                  <select
                    v-model="filters.activity"
                    class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
                  >
                    <option value="">Toute activité</option>
                    <option value="active">Actifs</option>
                    <option value="inactive">Inactifs (30+ jours)</option>
                  </select>
                </div>

                <!-- Date Range and Sort -->
                <div class="flex flex-wrap gap-3">
                  <div class="flex items-center gap-2">
                    <input
                      v-model="filters.dateFrom"
                      type="date"
                      class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
                    />
                    <span class="text-gray-500">à</span>
                    <input
                      v-model="filters.dateTo"
                      type="date"
                      class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
                    />
                  </div>
                  <select
                    v-model="filters.sort"
                    class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
                  >
                    <option value="recent">Plus récent</option>
                    <option value="alphabetic">Alphabétique</option>
                    <option value="prompts">Plus de prompts</option>
                    <option value="score">Score le plus élevé</option>
                  </select>
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

            <!-- Bulk Actions Bar -->
            <Transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="-translate-y-full opacity-0"
              enter-to-class="translate-y-0 opacity-100"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="translate-y-0 opacity-100"
              leave-to-class="-translate-y-full opacity-0"
            >
              <div v-if="selectedUsers.length > 0" class="bg-[#FFCB05] rounded-xl p-4 flex items-center justify-between">
                <span class="font-semibold text-black">
                  {{ selectedUsers.length }} utilisateur(s) sélectionné(s)
                </span>
                <div class="flex items-center gap-2">
                  <button class="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
                    Export sélection
                  </button>
                  <button class="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
                    Envoyer email
                  </button>
                  <button class="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium">
                    Suspendre
                  </button>
                  <button
                    @click="selectedUsers = []"
                    class="p-2 hover:bg-yellow-600 rounded-lg transition-colors"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </Transition>

            <!-- Users Table -->
            <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div class="overflow-x-auto">
                <table class="w-full">
                  <thead class="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th class="px-6 py-3 text-left">
                        <input
                          type="checkbox"
                          @change="toggleAllUsers"
                          :checked="selectedUsers.length === filteredUsers.length && filteredUsers.length > 0"
                          class="w-4 h-4 text-[#FFCB05] border-gray-300 rounded focus:ring-[#FFCB05]"
                        />
                      </th>
                      <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Utilisateur
                      </th>
                      <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Email
                      </th>
                      <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Rôle
                      </th>
                      <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Inscription
                      </th>
                      <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Dernière activité
                      </th>
                      <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Prompts
                      </th>
                      <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Score
                      </th>
                      <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Statut
                      </th>
                      <th class="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                    <tr
                      v-for="user in paginatedUsers"
                      :key="user.id"
                      class="hover:bg-gray-50 transition-colors"
                    >
                      <td class="px-6 py-4">
                        <input
                          type="checkbox"
                          :checked="selectedUsers.includes(user.id)"
                          @change="toggleUser(user.id)"
                          class="w-4 h-4 text-[#FFCB05] border-gray-300 rounded focus:ring-[#FFCB05]"
                        />
                      </td>
                      <td class="px-6 py-4">
                        <button
                          @click="openUserModal(user)"
                          class="flex items-center gap-3 hover:opacity-80 transition-opacity"
                        >
                          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFCB05] to-yellow-600 flex items-center justify-center text-white text-sm font-bold">
                            {{ user.initials }}
                          </div>
                          <div class="text-left">
                            <div class="flex items-center gap-2">
                              <span class="font-medium text-gray-900">{{ user.username }}</span>
                              <svg v-if="user.verified" class="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                              </svg>
                            </div>
                            <p class="text-xs text-gray-500">{{ user.name }}</p>
                          </div>
                        </button>
                      </td>
                      <td class="px-6 py-4 text-sm text-gray-700">
                        {{ user.email }}
                      </td>
                      <td class="px-6 py-4">
                        <span
                          class="px-2 py-1 rounded-full text-xs font-semibold"
                          :class="{
                            'bg-blue-100 text-blue-700': user.role === 'user',
                            'bg-purple-100 text-purple-700': user.role === 'admin'
                          }"
                        >
                          {{ user.role === 'admin' ? 'Admin' : 'Utilisateur' }}
                        </span>
                      </td>
                      <td class="px-6 py-4 text-sm text-gray-600">
                        {{ user.registrationDate }}
                      </td>
                      <td class="px-6 py-4">
                        <div class="flex items-center gap-2">
                          <span
                            class="w-2 h-2 rounded-full"
                            :class="user.isActive ? 'bg-green-500' : 'bg-gray-300'"
                          ></span>
                          <span class="text-sm text-gray-600">{{ user.lastActivity }}</span>
                        </div>
                      </td>
                      <td class="px-6 py-4">
                        <a href="#" class="text-sm font-medium text-[#FFCB05] hover:underline">
                          {{ user.promptsCount }}
                        </a>
                      </td>
                      <td class="px-6 py-4 text-sm font-semibold text-gray-900">
                        {{ user.score }}
                      </td>
                      <td class="px-6 py-4">
                        <span
                          class="px-2 py-1 rounded-full text-xs font-semibold"
                          :class="{
                            'bg-green-100 text-green-700': user.status === 'active',
                            'bg-red-100 text-red-700': user.status === 'banned',
                            'bg-orange-100 text-orange-700': user.status === 'suspended'
                          }"
                        >
                          {{ user.status === 'active' ? 'Actif' : user.status === 'banned' ? 'Banni' : 'Suspendu' }}
                        </span>
                      </td>
                      <td class="px-6 py-4">
                        <div class="relative">
                          <button
                            @click="toggleActionsMenu(user.id)"
                            class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                          </button>
                          <Transition
                            enter-active-class="transition ease-out duration-100"
                            enter-from-class="transform opacity-0 scale-95"
                            enter-to-class="transform opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75"
                            leave-from-class="transform opacity-100 scale-100"
                            leave-to-class="transform opacity-0 scale-95"
                          >
                            <div
                              v-if="activeActionsMenu === user.id"
                              class="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10"
                            >
                              <button
                                @click="openUserModal(user)"
                                class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                              >
                                Voir le profil
                              </button>
                              <button class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                                Modifier les informations
                              </button>
                              <button class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                                {{ user.role === 'admin' ? 'Rétrograder' : 'Promouvoir en admin' }}
                              </button>
                              <div class="border-t border-gray-200 my-1"></div>
                              <button class="w-full text-left px-4 py-2 text-sm text-orange-600 hover:bg-orange-50 transition-colors">
                                Suspendre
                              </button>
                              <button
                                @click="confirmBanUser(user)"
                                class="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                              >
                                Bannir définitivement
                              </button>
                              <div class="border-t border-gray-200 my-1"></div>
                              <button class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                                Réinitialiser le mot de passe
                              </button>
                              <button
                                @click="confirmDeleteUser(user)"
                                class="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                              >
                                Supprimer le compte
                              </button>
                            </div>
                          </Transition>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Pagination -->
              <div class="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <span class="text-sm text-gray-600">
                    Affichage {{ (currentPage - 1) * pageSize + 1 }} à {{ Math.min(currentPage * pageSize, filteredUsers.length) }} sur {{ filteredUsers.length }}
                  </span>
                  <select
                    v-model="pageSize"
                    class="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
                  >
                    <option :value="20">20 par page</option>
                    <option :value="50">50 par page</option>
                    <option :value="100">100 par page</option>
                  </select>
                </div>
                <div class="flex items-center gap-2">
                  <button
                    @click="currentPage--"
                    :disabled="currentPage === 1"
                    class="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Précédent
                  </button>
                  <button
                    v-for="page in visiblePages"
                    :key="page"
                    @click="currentPage = page"
                    class="px-3 py-2 rounded-lg transition-colors"
                    :class="currentPage === page ? 'bg-[#FFCB05] text-black font-medium' : 'border border-gray-300 hover:bg-gray-50'"
                  >
                    {{ page }}
                  </button>
                  <button
                    @click="currentPage++"
                    :disabled="currentPage === totalPages"
                    class="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Suivant
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Sidebar -->
          <div class="w-80 space-y-6">
            <!-- Quick Filters -->
            <div class="bg-white rounded-xl p-6 border border-gray-200">
              <h3 class="text-lg font-bold text-gray-900 mb-4">Filtres rapides</h3>
              <div class="space-y-2">
                <button
                  @click="applyQuickFilter('new')"
                  class="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div class="flex items-center justify-between">
                    <span class="font-medium text-gray-900">Nouveaux utilisateurs</span>
                    <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      {{ newUsersCount }}
                    </span>
                  </div>
                  <p class="text-xs text-gray-600 mt-1">7 derniers jours</p>
                </button>
                <button
                  @click="applyQuickFilter('top')"
                  class="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div class="flex items-center justify-between">
                    <span class="font-medium text-gray-900">Top contributeurs</span>
                    <span class="px-2 py-1 bg-[#FFCB05] text-black rounded-full text-xs font-semibold">
                      {{ topContributorsCount }}
                    </span>
                  </div>
                  <p class="text-xs text-gray-600 mt-1">Plus de 50 prompts</p>
                </button>
                <button
                  @click="applyQuickFilter('reported')"
                  class="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div class="flex items-center justify-between">
                    <span class="font-medium text-gray-900">Utilisateurs signalés</span>
                    <span class="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">
                      {{ reportedUsersCount }}
                    </span>
                  </div>
                  <p class="text-xs text-gray-600 mt-1">Nécessite attention</p>
                </button>
                <button
                  @click="applyQuickFilter('inactive')"
                  class="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div class="flex items-center justify-between">
                    <span class="font-medium text-gray-900">Comptes inactifs</span>
                    <span class="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-semibold">
                      {{ inactiveUsersCount }}
                    </span>
                  </div>
                  <p class="text-xs text-gray-600 mt-1">30+ jours sans activité</p>
                </button>
              </div>
            </div>

            <!-- Recent Registrations -->
            <div class="bg-white rounded-xl p-6 border border-gray-200">
              <h3 class="text-lg font-bold text-gray-900 mb-4">Inscriptions récentes</h3>
              <div class="space-y-4">
                <div
                  v-for="registration in recentRegistrations"
                  :key="registration.id"
                  class="flex items-center gap-3"
                >
                  <div class="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFCB05] to-yellow-600 flex items-center justify-center text-white text-sm font-bold">
                    {{ registration.initials }}
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="font-medium text-gray-900 text-sm truncate">{{ registration.username }}</p>
                    <p class="text-xs text-gray-500">{{ registration.time }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- User Detail Modal -->
    <div
      v-if="showUserModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click.self="showUserModal = false"
    >
      <div class="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div class="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 class="text-2xl font-bold text-gray-900">Profil utilisateur</h2>
          <button
            @click="showUserModal = false"
            class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div v-if="selectedUser" class="p-6 space-y-6">
          <!-- User Header -->
          <div class="flex items-start gap-6">
            <div class="w-24 h-24 rounded-full bg-gradient-to-br from-[#FFCB05] to-yellow-600 flex items-center justify-center text-white text-3xl font-bold">
              {{ selectedUser.initials }}
            </div>
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-2">
                <h3 class="text-2xl font-bold text-gray-900">{{ selectedUser.username }}</h3>
                <svg v-if="selectedUser.verified" class="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span
                  class="px-3 py-1 rounded-full text-sm font-semibold"
                  :class="{
                    'bg-blue-100 text-blue-700': selectedUser.role === 'user',
                    'bg-purple-100 text-purple-700': selectedUser.role === 'admin'
                  }"
                >
                  {{ selectedUser.role === 'admin' ? 'Administrateur' : 'Utilisateur' }}
                </span>
              </div>
              <p class="text-gray-700 mb-1">{{ selectedUser.name }}</p>
              <p class="text-gray-600 mb-3">{{ selectedUser.email }}</p>
              <div class="flex items-center gap-4 text-sm text-gray-600">
                <span>Inscrit le {{ selectedUser.registrationDate }}</span>
                <span>•</span>
                <span>Dernière activité {{ selectedUser.lastActivity }}</span>
              </div>
            </div>
          </div>

          <!-- Activity Stats -->
          <div class="grid grid-cols-4 gap-4">
            <div class="bg-gray-50 rounded-lg p-4 text-center">
              <p class="text-3xl font-bold text-gray-900">{{ selectedUser.promptsCount }}</p>
              <p class="text-sm text-gray-600 mt-1">Prompts créés</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-4 text-center">
              <p class="text-3xl font-bold text-gray-900">{{ selectedUser.score }}</p>
              <p class="text-sm text-gray-600 mt-1">Score total</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-4 text-center">
              <p class="text-3xl font-bold text-gray-900">{{ selectedUser.followers || 0 }}</p>
              <p class="text-sm text-gray-600 mt-1">Abonnés</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-4 text-center">
              <p class="text-3xl font-bold text-gray-900">{{ selectedUser.likes || 0 }}</p>
              <p class="text-sm text-gray-600 mt-1">Likes reçus</p>
            </div>
          </div>

          <!-- Recent Prompts -->
          <div>
            <h4 class="text-lg font-bold text-gray-900 mb-3">Prompts récents</h4>
            <div class="space-y-2">
              <div
                v-for="prompt in selectedUser.recentPrompts"
                :key="prompt.id"
                class="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h5 class="font-medium text-gray-900 mb-1">{{ prompt.title }}</h5>
                <div class="flex items-center gap-3 text-sm text-gray-600">
                  <span>{{ prompt.category }}</span>
                  <span>•</span>
                  <span>{{ prompt.copies }} copies</span>
                  <span>•</span>
                  <span>{{ prompt.date }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Login History -->
          <div>
            <h4 class="text-lg font-bold text-gray-900 mb-3">Historique de connexion</h4>
            <div class="space-y-2">
              <div
                v-for="login in selectedUser.loginHistory"
                :key="login.id"
                class="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <p class="text-sm font-medium text-gray-900">{{ login.location }}</p>
                    <p class="text-xs text-gray-600">{{ login.device }}</p>
                  </div>
                </div>
                <span class="text-sm text-gray-600">{{ login.time }}</span>
              </div>
            </div>
          </div>

          <!-- Moderation History -->
          <div v-if="selectedUser.moderationHistory && selectedUser.moderationHistory.length > 0">
            <h4 class="text-lg font-bold text-gray-900 mb-3">Historique de modération</h4>
            <div class="space-y-2">
              <div
                v-for="mod in selectedUser.moderationHistory"
                :key="mod.id"
                class="p-4 bg-orange-50 border border-orange-200 rounded-lg"
              >
                <div class="flex items-center justify-between mb-2">
                  <span
                    class="px-2 py-1 rounded text-xs font-semibold"
                    :class="{
                      'bg-yellow-100 text-yellow-700': mod.type === 'warning',
                      'bg-orange-100 text-orange-700': mod.type === 'suspension',
                      'bg-red-100 text-red-700': mod.type === 'ban'
                    }"
                  >
                    {{ mod.type === 'warning' ? 'Avertissement' : mod.type === 'suspension' ? 'Suspension' : 'Bannissement' }}
                  </span>
                  <span class="text-sm text-gray-600">{{ mod.date }}</span>
                </div>
                <p class="text-sm text-gray-700">{{ mod.reason }}</p>
                <p class="text-xs text-gray-600 mt-1">Par {{ mod.moderator }}</p>
              </div>
            </div>
          </div>

          <!-- Admin Notes -->
          <div>
            <h4 class="text-lg font-bold text-gray-900 mb-3">Notes administrateur</h4>
            <textarea
              v-model="adminNotes"
              rows="4"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
              placeholder="Ajoutez des notes privées sur cet utilisateur..."
            ></textarea>
          </div>

          <!-- Quick Actions -->
          <div class="flex items-center gap-3 pt-4 border-t border-gray-200">
            <button class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Envoyer un email
            </button>
            <button class="flex-1 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium">
              Suspendre
            </button>
            <button class="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium">
              Bannir
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Confirmation Modal -->
    <div
      v-if="showConfirmModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click.self="showConfirmModal = false"
    >
      <div class="bg-white rounded-xl max-w-md w-full p-6">
        <h3 class="text-xl font-bold text-gray-900 mb-4">{{ confirmModalTitle }}</h3>
        <p class="text-gray-700 mb-6">{{ confirmModalMessage }}</p>
        <div class="flex items-center gap-3">
          <button
            @click="showConfirmModal = false"
            class="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Annuler
          </button>
          <button
            @click="confirmAction"
            class="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
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
</template>

<script setup lang="ts">
// @ts-nocheck
import { ref, computed, h } from 'vue'

// Sidebar
const sidebarOpen = ref(false)
const activeTab = ref('users')

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

const UserIcon = () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' })
])

const UserAddIcon = () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z' })
])

const ShieldIcon = () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' })
])

const BanIcon = () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636' })
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
const totalUsers = ref(892)

const stats = [
  {
    label: 'Utilisateurs actifs (ce mois)',
    value: '687',
    trend: 8,
    icon: UserIcon,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    label: 'Nouveaux utilisateurs (cette semaine)',
    value: '34',
    trend: 12,
    icon: UserAddIcon,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    label: 'Utilisateurs bannis',
    value: '12',
    trend: -3,
    icon: BanIcon,
    bgColor: 'bg-red-100',
    iconColor: 'text-red-600'
  },
  {
    label: 'Administrateurs',
    value: '8',
    trend: null,
    icon: ShieldIcon,
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600'
  }
]

// Filters
const filters = ref({
  search: '',
  role: '',
  activity: '',
  dateFrom: '',
  dateTo: '',
  sort: 'recent'
})

const hasActiveFilters = computed(() => {
  return filters.value.search || filters.value.role || filters.value.activity || filters.value.dateFrom || filters.value.dateTo
})

const clearFilters = () => {
  filters.value = {
    search: '',
    role: '',
    activity: '',
    dateFrom: '',
    dateTo: '',
    sort: 'recent'
  }
}

// Users data
const users = ref([
  {
    id: 1,
    username: 'sophie_martin',
    name: 'Sophie Martin',
    initials: 'SM',
    email: 'sophie.martin@email.com',
    role: 'user',
    verified: true,
    registrationDate: '15 mars 2024',
    lastActivity: 'il y a 2 heures',
    isActive: true,
    promptsCount: 127,
    score: 2450,
    status: 'active',
    followers: 234,
    likes: 1890,
    recentPrompts: [
      { id: 1, title: 'Générateur de Posts LinkedIn', category: 'Marketing', copies: 156, date: 'il y a 2 jours' },
      { id: 2, title: 'Créateur de Threads Twitter', category: 'Marketing', copies: 89, date: 'il y a 5 jours' }
    ],
    loginHistory: [
      { id: 1, location: 'Paris, France', device: 'Chrome sur Windows', time: 'il y a 2 heures' },
      { id: 2, location: 'Paris, France', device: 'Safari sur iPhone', time: 'il y a 1 jour' }
    ],
    moderationHistory: []
  },
  {
    id: 2,
    username: 'thomas_dev',
    name: 'Thomas Dubois',
    initials: 'TD',
    email: 'thomas.dubois@email.com',
    role: 'admin',
    verified: true,
    registrationDate: '10 février 2024',
    lastActivity: 'il y a 30 minutes',
    isActive: true,
    promptsCount: 98,
    score: 1890,
    status: 'active',
    followers: 189,
    likes: 1456,
    recentPrompts: [
      { id: 3, title: 'Assistant de Débogage Python', category: 'Développement', copies: 234, date: 'il y a 1 jour' }
    ],
    loginHistory: [
      { id: 1, location: 'Lyon, France', device: 'Chrome sur Mac', time: 'il y a 30 minutes' }
    ],
    moderationHistory: []
  },
  {
    id: 3,
    username: 'marie_writer',
    name: 'Marie Leroy',
    initials: 'ML',
    email: 'marie.leroy@email.com',
    role: 'user',
    verified: false,
    registrationDate: '20 mars 2024',
    lastActivity: 'il y a 5 jours',
    isActive: false,
    promptsCount: 76,
    score: 1520,
    status: 'active',
    followers: 145,
    likes: 987,
    recentPrompts: [
      { id: 4, title: 'Rédacteur d\'Articles SEO', category: 'Rédaction', copies: 178, date: 'il y a 1 semaine' }
    ],
    loginHistory: [
      { id: 1, location: 'Marseille, France', device: 'Firefox sur Windows', time: 'il y a 5 jours' }
    ],
    moderationHistory: []
  },
  {
    id: 4,
    username: 'lucas_design',
    name: 'Lucas Bernard',
    initials: 'LB',
    email: 'lucas.bernard@email.com',
    role: 'user',
    verified: true,
    registrationDate: '5 mars 2024',
    lastActivity: 'il y a 1 jour',
    isActive: true,
    promptsCount: 64,
    score: 1280,
    status: 'active',
    followers: 98,
    likes: 756,
    recentPrompts: [],
    loginHistory: [
      { id: 1, location: 'Toulouse, France', device: 'Chrome sur Mac', time: 'il y a 1 jour' }
    ],
    moderationHistory: []
  },
  {
    id: 5,
    username: 'spam_user',
    name: 'Spam Account',
    initials: 'SA',
    email: 'spam@email.com',
    role: 'user',
    verified: false,
    registrationDate: '1 avril 2024',
    lastActivity: 'il y a 2 mois',
    isActive: false,
    promptsCount: 3,
    score: 15,
    status: 'banned',
    followers: 0,
    likes: 0,
    recentPrompts: [],
    loginHistory: [],
    moderationHistory: [
      { id: 1, type: 'warning', reason: 'Contenu spam détecté', date: '2 avril 2024', moderator: 'Admin' },
      { id: 2, type: 'ban', reason: 'Récidive de spam', date: '5 avril 2024', moderator: 'Admin' }
    ]
  }
])

const selectedUsers = ref<number[]>([])
const currentPage = ref(1)
const pageSize = ref(20)

const filteredUsers = computed(() => {
  let result = users.value

  if (filters.value.search) {
    const search = filters.value.search.toLowerCase()
    result = result.filter(u => 
      u.username.toLowerCase().includes(search) || 
      u.name.toLowerCase().includes(search) ||
      u.email.toLowerCase().includes(search)
    )
  }

  if (filters.value.role) {
    result = result.filter(u => u.role === filters.value.role || (filters.value.role === 'banned' && u.status === 'banned'))
  }

  if (filters.value.activity === 'active') {
    result = result.filter(u => u.isActive)
  } else if (filters.value.activity === 'inactive') {
    result = result.filter(u => !u.isActive)
  }

  return result
})

const totalPages = computed(() => Math.ceil(filteredUsers.value.length / pageSize.value))

const visiblePages = computed(() => {
  const pages = []
  const maxVisible = 5
  let start = Math.max(1, currentPage.value - Math.floor(maxVisible / 2))
  let end = Math.min(totalPages.value, start + maxVisible - 1)
  
  if (end - start < maxVisible - 1) {
    start = Math.max(1, end - maxVisible + 1)
  }
  
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  
  return pages
})

const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return filteredUsers.value.slice(start, end)
})

const toggleUser = (id: number) => {
  const index = selectedUsers.value.indexOf(id)
  if (index > -1) {
    selectedUsers.value.splice(index, 1)
  } else {
    selectedUsers.value.push(id)
  }
}

const toggleAllUsers = () => {
  if (selectedUsers.value.length === filteredUsers.value.length) {
    selectedUsers.value = []
  } else {
    selectedUsers.value = filteredUsers.value.map(u => u.id)
  }
}

// Actions menu
const activeActionsMenu = ref<number | null>(null)

const toggleActionsMenu = (userId: number) => {
  activeActionsMenu.value = activeActionsMenu.value === userId ? null : userId
}

// User modal
const showUserModal = ref(false)
const selectedUser = ref<typeof users.value[0] | null>(null)
const adminNotes = ref('')

const openUserModal = (user: typeof users.value[0]) => {
  selectedUser.value = user
  adminNotes.value = ''
  showUserModal.value = true
  activeActionsMenu.value = null
}

// Confirmation modal
const showConfirmModal = ref(false)
const confirmModalTitle = ref('')
const confirmModalMessage = ref('')
const confirmCallback = ref<(() => void) | null>(null)

const confirmBanUser = (user: typeof users.value[0]) => {
  confirmModalTitle.value = 'Bannir l\'utilisateur'
  confirmModalMessage.value = `Êtes-vous sûr de vouloir bannir définitivement ${user.username} ? Cette action est irréversible.`
  confirmCallback.value = () => {
    showToastMessage(`${user.username} a été banni`)
    showConfirmModal.value = false
    activeActionsMenu.value = null
  }
  showConfirmModal.value = true
}

const confirmDeleteUser = (user: typeof users.value[0]) => {
  confirmModalTitle.value = 'Supprimer le compte'
  confirmModalMessage.value = `Êtes-vous sûr de vouloir supprimer le compte de ${user.username} ? Toutes ses données seront définitivement supprimées.`
  confirmCallback.value = () => {
    showToastMessage(`Le compte de ${user.username} a été supprimé`)
    showConfirmModal.value = false
    activeActionsMenu.value = null
  }
  showConfirmModal.value = true
}

const confirmAction = () => {
  if (confirmCallback.value) {
    confirmCallback.value()
  }
}

// Quick filters
const newUsersCount = ref(34)
const topContributorsCount = ref(28)
const reportedUsersCount = ref(5)
const inactiveUsersCount = ref(156)

const applyQuickFilter = (filter: string) => {
  clearFilters()
  
  switch (filter) {
    case 'new':
      // Filter logic for new users
      showToastMessage('Affichage des nouveaux utilisateurs')
      break
    case 'top':
      filters.value.sort = 'prompts'
      showToastMessage('Affichage des top contributeurs')
      break
    case 'reported':
      showToastMessage('Affichage des utilisateurs signalés')
      break
    case 'inactive':
      filters.value.activity = 'inactive'
      showToastMessage('Affichage des comptes inactifs')
      break
  }
}

// Recent registrations
const recentRegistrations = ref([
  { id: 1, username: 'alex_nouveau', initials: 'AN', time: 'il y a 5 minutes' },
  { id: 2, username: 'julie_m', initials: 'JM', time: 'il y a 1 heure' },
  { id: 3, username: 'pierre_dev', initials: 'PD', time: 'il y a 3 heures' },
  { id: 4, username: 'emma_design', initials: 'ED', time: 'il y a 5 heures' },
  { id: 5, username: 'nicolas_writer', initials: 'NW', time: 'il y a 8 heures' }
])

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
</script>
