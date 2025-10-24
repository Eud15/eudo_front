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
              <h2 class="text-2xl font-bold text-gray-900">Statistiques de la Plateforme</h2>
              <p class="text-sm text-gray-500 mt-1">Dernière mise à jour: {{ lastUpdate }}</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <!-- Date Range Selector -->
            <select
              v-model="dateRange"
              @change="loadData"
              class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent bg-white"
            >
              <option value="7">7 derniers jours</option>
              <option value="30">30 derniers jours</option>
              <option value="90">90 derniers jours</option>
              <option value="365">Année</option>
              <option value="custom">Personnalisé</option>
            </select>

            <!-- Export Button -->
            <div class="relative">
              <button
                @click="showExportMenu = !showExportMenu"
                class="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Exporter
              </button>
              <div
                v-if="showExportMenu"
                class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10"
              >
                <button
                  @click="exportReport('pdf')"
                  class="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors"
                >
                  Exporter en PDF
                </button>
                <button
                  @click="exportReport('excel')"
                  class="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors"
                >
                  Exporter en Excel
                </button>
              </div>
            </div>

            <!-- Refresh Button -->
            <button
              @click="refreshData"
              class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              :class="{ 'animate-spin': isRefreshing }"
            >
              <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>

            <!-- Dark Mode Toggle -->
            <button
              @click="darkMode = !darkMode"
              class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg v-if="!darkMode" class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              <svg v-else class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="px-4 sm:px-6 lg:px-8 py-8">
        <!-- Overview Stats Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div
            v-for="stat in overviewStats"
            :key="stat.label"
            class="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-medium text-gray-600">{{ stat.label }}</h3>
              <span
                class="flex items-center gap-1 text-sm font-semibold"
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
            <p class="text-3xl font-bold text-gray-900 mb-2">{{ stat.value }}</p>
            <p class="text-sm text-gray-500">{{ stat.subtitle }}</p>
            <div class="mt-4 h-12">
              <canvas :ref="el => sparklineRefs[stat.id] = el"></canvas>
            </div>
          </div>
        </div>

        <!-- Charts Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <!-- Prompts Creation Trend -->
          <div class="bg-white rounded-xl p-6 border border-gray-200">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-bold text-gray-900">Tendance de Création de Prompts</h3>
              <button class="text-sm text-gray-600 hover:text-black">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </div>
            <div class="h-80">
              <canvas ref="promptsTrendChart"></canvas>
            </div>
          </div>

          <!-- User Growth -->
          <div class="bg-white rounded-xl p-6 border border-gray-200">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-bold text-gray-900">Croissance des Utilisateurs</h3>
              <button class="text-sm text-gray-600 hover:text-black">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </div>
            <div class="h-80">
              <canvas ref="userGrowthChart"></canvas>
            </div>
          </div>

          <!-- Category Distribution -->
          <div class="bg-white rounded-xl p-6 border border-gray-200">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-bold text-gray-900">Distribution par Catégorie</h3>
              <button class="text-sm text-gray-600 hover:text-black">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </div>
            <div class="h-80 flex items-center justify-center">
              <canvas ref="categoryChart"></canvas>
            </div>
          </div>

          <!-- Validation Funnel -->
          <div class="bg-white rounded-xl p-6 border border-gray-200">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-bold text-gray-900">Entonnoir de Validation</h3>
              <button class="text-sm text-gray-600 hover:text-black">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </div>
            <div class="h-80">
              <canvas ref="validationFunnelChart"></canvas>
            </div>
          </div>

          <!-- Top Contributors -->
          <div class="bg-white rounded-xl p-6 border border-gray-200">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-bold text-gray-900">Top Contributeurs</h3>
              <button class="text-sm text-gray-600 hover:text-black">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </div>
            <div class="h-80">
              <canvas ref="contributorsChart"></canvas>
            </div>
          </div>

          <!-- Engagement Metrics -->
          <div class="bg-white rounded-xl p-6 border border-gray-200">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-bold text-gray-900">Métriques d'Engagement</h3>
              <button class="text-sm text-gray-600 hover:text-black">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </div>
            <div class="h-80">
              <canvas ref="engagementChart"></canvas>
            </div>
          </div>
        </div>

        <!-- Tables Section -->
        <div class="space-y-6 mb-8">
          <!-- Top Performing Prompts -->
          <div class="bg-white rounded-xl border border-gray-200">
            <div class="px-6 py-4 border-b border-gray-200">
              <h3 class="text-lg font-bold text-gray-900">Top Prompts Performants</h3>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Rang</th>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Titre</th>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Auteur</th>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Catégorie</th>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Copies</th>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Vues</th>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Note</th>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr
                    v-for="(prompt, index) in topPrompts"
                    :key="prompt.id"
                    class="hover:bg-gray-50 transition-colors"
                  >
                    <td class="px-6 py-4">
                      <div
                        class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                        :class="{
                          'bg-[#FFCB05] text-black': index === 0,
                          'bg-gray-300 text-gray-700': index === 1,
                          'bg-orange-300 text-orange-900': index === 2,
                          'bg-gray-100 text-gray-600': index > 2
                        }"
                      >
                        {{ index + 1 }}
                      </div>
                    </td>
                    <td class="px-6 py-4">
                      <a href="#" class="font-medium text-gray-900 hover:text-[#FFCB05]">{{ prompt.title }}</a>
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-600">{{ prompt.author }}</td>
                    <td class="px-6 py-4">
                      <span class="px-2 py-1 bg-black text-white text-xs rounded-full">{{ prompt.category }}</span>
                    </td>
                    <td class="px-6 py-4 text-sm font-semibold text-gray-900">{{ prompt.copies }}</td>
                    <td class="px-6 py-4 text-sm text-gray-600">{{ prompt.views }}</td>
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-1">
                        <svg class="w-4 h-4 text-[#FFCB05]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span class="text-sm font-medium text-gray-900">{{ prompt.rating }}</span>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-600">{{ prompt.date }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- User Activity -->
          <div class="bg-white rounded-xl border border-gray-200">
            <div class="px-6 py-4 border-b border-gray-200">
              <h3 class="text-lg font-bold text-gray-900">Utilisateurs les Plus Actifs</h3>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Rang</th>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Utilisateur</th>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Prompts créés</th>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Copies reçues</th>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Score</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr
                    v-for="(user, index) in topUsers"
                    :key="user.id"
                    class="hover:bg-gray-50 transition-colors"
                  >
                    <td class="px-6 py-4">
                      <div
                        class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                        :class="{
                          'bg-[#FFCB05] text-black': index === 0,
                          'bg-gray-300 text-gray-700': index === 1,
                          'bg-orange-300 text-orange-900': index === 2,
                          'bg-gray-100 text-gray-600': index > 2
                        }"
                      >
                        {{ index + 1 }}
                      </div>
                    </td>
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFCB05] to-yellow-600 flex items-center justify-center text-white font-bold">
                          {{ user.initials }}
                        </div>
                        <a href="#" class="font-medium text-gray-900 hover:text-[#FFCB05]">{{ user.name }}</a>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-sm font-semibold text-gray-900">{{ user.prompts }}</td>
                    <td class="px-6 py-4 text-sm text-gray-600">{{ user.copies }}</td>
                    <td class="px-6 py-4 text-sm font-bold text-[#FFCB05]">{{ user.score }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Category Performance -->
          <div class="bg-white rounded-xl border border-gray-200">
            <div class="px-6 py-4 border-b border-gray-200">
              <h3 class="text-lg font-bold text-gray-900">Performance par Catégorie</h3>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Catégorie</th>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Prompts</th>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Croissance</th>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Engagement</th>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Contributeurs actifs</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr
                    v-for="category in categoryPerformance"
                    :key="category.name"
                    class="hover:bg-gray-50 transition-colors"
                  >
                    <td class="px-6 py-4">
                      <span class="px-3 py-1 bg-black text-white text-sm rounded-full font-medium">{{ category.name }}</span>
                    </td>
                    <td class="px-6 py-4 text-sm font-semibold text-gray-900">{{ category.prompts }}</td>
                    <td class="px-6 py-4">
                      <span
                        class="flex items-center gap-1 text-sm font-semibold"
                        :class="category.growth > 0 ? 'text-green-600' : 'text-red-600'"
                      >
                        <svg
                          class="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          :class="{ 'rotate-180': category.growth < 0 }"
                        >
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        {{ Math.abs(category.growth) }}%
                      </span>
                    </td>
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-2">
                        <div class="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            class="bg-[#FFCB05] h-2 rounded-full"
                            :style="{ width: category.engagement + '%' }"
                          ></div>
                        </div>
                        <span class="text-sm font-medium text-gray-900">{{ category.engagement }}%</span>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-600">{{ category.contributors }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Real-time Metrics -->
        <div class="bg-white rounded-xl p-6 border border-gray-200">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h3 class="text-lg font-bold text-gray-900">Activité en Temps Réel</h3>
              <p class="text-sm text-gray-600 mt-1">
                <span class="inline-flex items-center gap-2">
                  <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  {{ onlineUsers }} utilisateurs en ligne
                </span>
              </p>
            </div>
          </div>

          <div class="space-y-3 max-h-96 overflow-y-auto">
            <div
              v-for="activity in realtimeActivities"
              :key="activity.id"
              class="flex items-start gap-3 p-3 bg-gray-50 rounded-lg animate-slide-in"
            >
              <div
                class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                :class="activity.iconBg"
              >
                <component :is="activity.icon" class="w-5 h-5" :class="activity.iconColor" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm text-gray-900">{{ activity.description }}</p>
                <p class="text-xs text-gray-500 mt-1">{{ activity.time }}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
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
import { ref, computed, onMounted, h } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

// Sidebar
const sidebarOpen = ref(false)
const activeTab = ref('stats')

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

const FileIcon = () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' })
])

const CheckIcon = () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M5 13l4 4L19 7' })
])

const UserAddIcon = () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z' })
])

const CopyIcon = () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z' })
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

// Header state
const dateRange = ref('30')
const showExportMenu = ref(false)
const isRefreshing = ref(false)
const darkMode = ref(false)
const lastUpdate = ref('Il y a 2 minutes')

// Overview stats
const overviewStats = ref([
  {
    id: 'total-prompts',
    label: 'Total Prompts',
    value: '1,247',
    subtitle: '+156 ce mois',
    trend: 12.5
  },
  {
    id: 'total-users',
    label: 'Total Utilisateurs',
    value: '892',
    subtitle: '+47 nouveaux',
    trend: 8.3
  },
  {
    id: 'validated',
    label: 'Prompts Validés',
    value: '94%',
    subtitle: 'Taux de validation',
    trend: 2.1
  },
  {
    id: 'total-copies',
    label: 'Copies Totales',
    value: '15.2K',
    subtitle: 'Engagement',
    trend: 18.7
  },
  {
    id: 'activity-rate',
    label: "Taux d'Activité",
    value: '67%',
    subtitle: 'Utilisateurs actifs',
    trend: -3.2
  }
])

// Tables data
const topPrompts = ref([
  { id: 1, title: 'Générateur de Posts LinkedIn', author: 'Sophie Martin', category: 'Marketing', copies: 1247, views: 8934, rating: 4.9, date: '15 mars 2024' },
  { id: 2, title: 'Créateur de Threads Twitter', author: 'Thomas Dubois', category: 'Marketing', copies: 892, views: 6721, rating: 4.8, date: '18 mars 2024' },
  { id: 3, title: 'Rédacteur d\'Articles SEO', author: 'Marie Leroy', category: 'Rédaction', copies: 756, views: 5432, rating: 4.7, date: '20 mars 2024' },
  { id: 4, title: 'Générateur de Code React', author: 'Lucas Bernard', category: 'Développement', copies: 623, views: 4891, rating: 4.9, date: '12 mars 2024' },
  { id: 5, title: 'Assistant Email Marketing', author: 'Emma Petit', category: 'Marketing', copies: 589, views: 4234, rating: 4.6, date: '22 mars 2024' }
])

const topUsers = ref([
  { id: 1, name: 'Sophie Martin', initials: 'SM', prompts: 127, copies: 3456, score: 2450 },
  { id: 2, name: 'Thomas Dubois', initials: 'TD', prompts: 98, copies: 2891, score: 1890 },
  { id: 3, name: 'Marie Leroy', initials: 'ML', prompts: 76, copies: 2134, score: 1520 },
  { id: 4, name: 'Lucas Bernard', initials: 'LB', prompts: 64, copies: 1876, score: 1280 },
  { id: 5, name: 'Emma Petit', initials: 'EP', prompts: 52, copies: 1543, score: 1040 }
])

const categoryPerformance = ref([
  { name: 'Marketing', prompts: 342, growth: 15.3, engagement: 87, contributors: 156 },
  { name: 'Développement', prompts: 289, growth: 12.7, engagement: 82, contributors: 134 },
  { name: 'Rédaction', prompts: 267, growth: 8.9, engagement: 79, contributors: 98 },
  { name: 'Design', prompts: 198, growth: 18.2, engagement: 75, contributors: 87 },
  { name: 'Data & Analyse', prompts: 151, growth: -2.4, engagement: 71, contributors: 62 }
])

// Real-time activities
const realtimeActivities = ref([
  {
    id: 1,
    description: 'Sophie Martin a créé un nouveau prompt "Guide SEO 2024"',
    time: 'À l\'instant',
    icon: FileIcon,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    id: 2,
    description: 'Prompt "Générateur de Tweets" a été validé',
    time: 'Il y a 1 minute',
    icon: CheckIcon,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    id: 3,
    description: 'Thomas Dubois a copié "Créateur de Code React"',
    time: 'Il y a 2 minutes',
    icon: CopyIcon,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    id: 4,
    description: 'Nouvel utilisateur inscrit: Marie Leroy',
    time: 'Il y a 3 minutes',
    icon: UserAddIcon,
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600'
  }
])

const onlineUsers = ref(47)

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

// Actions
const loadData = () => {
  showToastMessage('Données chargées pour la période sélectionnée')
}

const exportReport = (format: string) => {
  showExportMenu.value = false
  showToastMessage(`Rapport exporté en ${format.toUpperCase()}`)
}

const refreshData = async () => {
  isRefreshing.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  isRefreshing.value = false
  lastUpdate.value = 'À l\'instant'
  showToastMessage('Données rafraîchies')
}

// Chart refs
const sparklineRefs = ref<Record<string, HTMLCanvasElement | null>>({})
const promptsTrendChart = ref<HTMLCanvasElement | null>(null)
const userGrowthChart = ref<HTMLCanvasElement | null>(null)
const categoryChart = ref<HTMLCanvasElement | null>(null)
const validationFunnelChart = ref<HTMLCanvasElement | null>(null)
const contributorsChart = ref<HTMLCanvasElement | null>(null)
const engagementChart = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  // Sparkline charts
  Object.keys(sparklineRefs.value).forEach(key => {
    const canvas = sparklineRefs.value[key]
    if (canvas) {
      new Chart(canvas, {
        type: 'line',
        data: {
          labels: ['', '', '', '', '', '', ''],
          datasets: [{
            data: [12, 19, 15, 25, 22, 30, 28],
            borderColor: '#FFCB05',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            pointRadius: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { display: false },
            y: { display: false }
          }
        }
      })
    }
  })

  // Prompts trend chart
  if (promptsTrendChart.value) {
    new Chart(promptsTrendChart.value, {
      type: 'line',
      data: {
        labels: ['1 Mar', '5 Mar', '10 Mar', '15 Mar', '20 Mar', '25 Mar', '30 Mar'],
        datasets: [
          {
            label: 'Total',
            data: [45, 52, 48, 65, 58, 72, 68],
            borderColor: '#000000',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'Validés',
            data: [42, 48, 45, 61, 54, 68, 64],
            borderColor: '#10B981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'Rejetés',
            data: [3, 4, 3, 4, 4, 4, 4],
            borderColor: '#EF4444',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            tension: 0.4,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top' }
        }
      }
    })
  }

  // User growth chart
  if (userGrowthChart.value) {
    new Chart(userGrowthChart.value, {
      type: 'line',
      data: {
        labels: ['1 Mar', '5 Mar', '10 Mar', '15 Mar', '20 Mar', '25 Mar', '30 Mar'],
        datasets: [
          {
            label: 'Nouvelles inscriptions',
            data: [12, 15, 18, 14, 22, 19, 25],
            borderColor: '#FFCB05',
            backgroundColor: 'rgba(255, 203, 5, 0.2)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'Total cumulé',
            data: [800, 815, 833, 847, 869, 888, 913],
            borderColor: '#000000',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            tension: 0.4,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top' }
        }
      }
    })
  }

  // Category distribution chart
  if (categoryChart.value) {
    new Chart(categoryChart.value, {
      type: 'doughnut',
      data: {
        labels: ['Marketing', 'Développement', 'Rédaction', 'Design', 'Data & Analyse'],
        datasets: [{
          data: [342, 289, 267, 198, 151],
          backgroundColor: ['#FFCB05', '#000000', '#6B7280', '#F59E0B', '#10B981'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'right' }
        }
      }
    })
  }

  // Validation funnel chart
  if (validationFunnelChart.value) {
    new Chart(validationFunnelChart.value, {
      type: 'bar',
      data: {
        labels: ['Soumis', 'En attente', 'Validés', 'Rejetés'],
        datasets: [{
          label: 'Prompts',
          data: [1320, 23, 1247, 50],
          backgroundColor: ['#6B7280', '#F59E0B', '#10B981', '#EF4444'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
          legend: { display: false }
        }
      }
    })
  }

  // Top contributors chart
  if (contributorsChart.value) {
    new Chart(contributorsChart.value, {
      type: 'bar',
      data: {
        labels: ['Sophie M.', 'Thomas D.', 'Marie L.', 'Lucas B.', 'Emma P.'],
        datasets: [{
          label: 'Prompts créés',
          data: [127, 98, 76, 64, 52],
          backgroundColor: '#FFCB05',
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
          legend: { display: false }
        }
      }
    })
  }

  // Engagement metrics chart
  if (engagementChart.value) {
    new Chart(engagementChart.value, {
      type: 'bar',
      data: {
        labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
        datasets: [
          {
            label: 'Vues',
            data: [1200, 1400, 1100, 1600, 1300, 900, 800],
            backgroundColor: '#FFCB05'
          },
          {
            label: 'Copies',
            data: [450, 520, 480, 590, 510, 380, 340],
            backgroundColor: '#000000'
          },
          {
            label: 'Favoris',
            data: [180, 210, 190, 240, 220, 160, 140],
            backgroundColor: '#6B7280'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top' }
        }
      }
    })
  }
})
</script>

<style scoped>
@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in {
  animation: slide-in 0.3s ease-out;
}
</style>
