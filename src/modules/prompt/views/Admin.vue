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
            <h2 class="text-2xl font-bold text-gray-900">Dashboard</h2>
          </div>
          <div class="flex items-center gap-3">
            <button class="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
      </header>

      <!-- Dashboard Content -->
      <main class="px-4 sm:px-6 lg:px-8 py-8">
        <!-- Quick Stats -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Left Column (2/3) -->
          <div class="lg:col-span-2 space-y-8">
            <!-- Pending Prompts -->
            <div class="bg-white rounded-xl border border-gray-200">
              <div class="px-6 py-4 border-b border-gray-200">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-xl font-bold text-gray-900">Prompts en attente de validation</h3>
                  <button
                    v-if="selectedPrompts.length > 0"
                    class="px-4 py-2 bg-[#FFCB05] text-black rounded-lg hover:bg-[#FFCB05]/90 transition-colors font-medium text-sm"
                  >
                    Actions groupées ({{ selectedPrompts.length }})
                  </button>
                </div>
                <div class="flex flex-wrap gap-3">
                  <select
                    v-model="filterCategory"
                    class="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
                  >
                    <option value="">Toutes les catégories</option>
                    <option value="marketing">Marketing</option>
                    <option value="code">Développement</option>
                    <option value="writing">Rédaction</option>
                    <option value="design">Design</option>
                  </select>
                  <select
                    v-model="filterDate"
                    class="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
                  >
                    <option value="all">Toutes les dates</option>
                    <option value="today">Aujourd'hui</option>
                    <option value="week">Cette semaine</option>
                    <option value="month">Ce mois</option>
                  </select>
                </div>
              </div>

              <div class="overflow-x-auto">
                <table class="w-full">
                  <thead class="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th class="px-6 py-3 text-left">
                        <input
                          type="checkbox"
                          @change="toggleAllPrompts"
                          :checked="selectedPrompts.length === pendingPrompts.length"
                          class="w-4 h-4 text-[#FFCB05] border-gray-300 rounded focus:ring-[#FFCB05]"
                        />
                      </th>
                      <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Titre
                      </th>
                      <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Auteur
                      </th>
                      <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Catégorie
                      </th>
                      <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Date
                      </th>
                      <th class="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                    <tr
                      v-for="prompt in paginatedPrompts"
                      :key="prompt.id"
                      class="hover:bg-gray-50 transition-colors"
                    >
                      <td class="px-6 py-4">
                        <input
                          type="checkbox"
                          :checked="selectedPrompts.includes(prompt.id)"
                          @change="togglePrompt(prompt.id)"
                          class="w-4 h-4 text-[#FFCB05] border-gray-300 rounded focus:ring-[#FFCB05]"
                        />
                      </td>
                      <td class="px-6 py-4">
                        <p class="font-medium text-gray-900">{{ prompt.title }}</p>
                      </td>
                      <td class="px-6 py-4">
                        <div class="flex items-center gap-2">
                          <div class="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFCB05] to-yellow-600 flex items-center justify-center text-white text-xs font-bold">
                            {{ prompt.author.initials }}
                          </div>
                          <span class="text-sm text-gray-700">{{ prompt.author.name }}</span>
                        </div>
                      </td>
                      <td class="px-6 py-4">
                        <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {{ prompt.category }}
                        </span>
                      </td>
                      <td class="px-6 py-4 text-sm text-gray-600">
                        {{ prompt.date }}
                      </td>
                      <td class="px-6 py-4">
                        <div class="flex items-center justify-end gap-2">
                          <button
                            @click="openValidationModal(prompt)"
                            class="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            Voir
                          </button>
                          <button
                            @click="quickValidate(prompt.id)"
                            class="px-3 py-1.5 text-sm font-medium text-green-700 hover:bg-green-50 rounded-lg transition-colors"
                          >
                            Valider
                          </button>
                          <button
                            @click="quickReject(prompt.id)"
                            class="px-3 py-1.5 text-sm font-medium text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            Rejeter
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Pagination -->
              <div class="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                <p class="text-sm text-gray-600">
                  Affichage {{ (currentPage - 1) * itemsPerPage + 1 }} à {{ Math.min(currentPage * itemsPerPage, filteredPrompts.length) }} sur {{ filteredPrompts.length }} résultats
                </p>
                <div class="flex items-center gap-2">
                  <button
                    @click="currentPage--"
                    :disabled="currentPage === 1"
                    class="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Précédent
                  </button>
                  <button
                    v-for="page in totalPages"
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

            <!-- Charts -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-white rounded-xl p-6 border border-gray-200">
                <h3 class="text-lg font-bold text-gray-900 mb-4">Prompts créés (30 derniers jours)</h3>
                <div class="h-64">
                  <canvas ref="promptsChart"></canvas>
                </div>
              </div>
              <div class="bg-white rounded-xl p-6 border border-gray-200">
                <h3 class="text-lg font-bold text-gray-900 mb-4">Taux de validation</h3>
                <div class="h-64">
                  <canvas ref="validationChart"></canvas>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column (1/3) -->
          <div class="space-y-6">
            <!-- Recent Activity -->
            <div class="bg-white rounded-xl p-6 border border-gray-200">
              <h3 class="text-lg font-bold text-gray-900 mb-4">Activité récente</h3>
              <div class="space-y-4">
                <div
                  v-for="activity in recentActivities"
                  :key="activity.id"
                  class="flex gap-3"
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

            <!-- Top Contributors -->
            <div class="bg-white rounded-xl p-6 border border-gray-200">
              <h3 class="text-lg font-bold text-gray-900 mb-4">Top contributeurs ce mois</h3>
              <div class="space-y-3">
                <div
                  v-for="(contributor, index) in topContributors"
                  :key="contributor.id"
                  class="flex items-center gap-3"
                >
                  <div class="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-xs font-bold text-gray-600">
                    {{ index + 1 }}
                  </div>
                  <div class="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFCB05] to-yellow-600 flex items-center justify-center text-white text-sm font-bold">
                    {{ contributor.initials }}
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="font-medium text-gray-900 text-sm">{{ contributor.name }}</p>
                    <p class="text-xs text-gray-500">{{ contributor.prompts }} prompts</p>
                  </div>
                  <div class="text-right">
                    <p class="text-sm font-bold text-[#FFCB05]">{{ contributor.score }}</p>
                    <p class="text-xs text-gray-500">points</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Most Copied Prompts -->
            <div class="bg-white rounded-xl p-6 border border-gray-200">
              <h3 class="text-lg font-bold text-gray-900 mb-4">Prompts les plus copiés</h3>
              <div class="space-y-3">
                <a
                  v-for="prompt in mostCopiedPrompts"
                  :key="prompt.id"
                  href="#"
                  class="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                >
                  <h4 class="font-medium text-gray-900 text-sm group-hover:text-[#FFCB05] transition-colors mb-1">
                    {{ prompt.title }}
                  </h4>
                  <div class="flex items-center justify-between text-xs text-gray-600">
                    <span>{{ prompt.category }}</span>
                    <span class="font-semibold">{{ prompt.copies }} copies</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- Validation Modal -->
    <div
      v-if="showValidationModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click.self="showValidationModal = false"
    >
      <div class="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div class="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 class="text-2xl font-bold text-gray-900">Validation du prompt</h2>
          <button
            @click="showValidationModal = false"
            class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div v-if="selectedPrompt" class="p-6 space-y-6">
          <!-- Prompt Details -->
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ selectedPrompt.title }}</h3>
            <div class="flex items-center gap-3 mb-4">
              <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                {{ selectedPrompt.category }}
              </span>
              <span class="text-sm text-gray-600">Par {{ selectedPrompt.author.name }}</span>
              <span class="text-sm text-gray-600">{{ selectedPrompt.date }}</span>
            </div>
          </div>

          <!-- Prompt Content -->
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">Contenu du prompt</h4>
            <div class="p-4 bg-gray-50 rounded-lg border border-gray-200 font-mono text-sm whitespace-pre-wrap">
              {{ selectedPrompt.content }}
            </div>
          </div>

          <!-- Creator Comments -->
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">Commentaires du créateur</h4>
            <p class="text-gray-700">{{ selectedPrompt.comments }}</p>
          </div>

          <!-- Similar Prompts Warning -->
          <div v-if="selectedPrompt.similarPrompts" class="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 text-orange-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <h4 class="font-semibold text-orange-800 mb-1">Prompts similaires détectés</h4>
                <p class="text-sm text-orange-700">{{ selectedPrompt.similarPrompts }} prompts similaires ont été trouvés dans la base de données.</p>
              </div>
            </div>
          </div>

          <!-- Validation Form -->
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-900 mb-3">Décision</label>
              <div class="space-y-2">
                <label class="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-[#FFCB05] transition-colors">
                  <input
                    v-model="validationDecision"
                    type="radio"
                    value="approve"
                    class="w-4 h-4 text-[#FFCB05] border-gray-300 focus:ring-[#FFCB05]"
                  />
                  <div>
                    <p class="font-medium text-gray-900">Valider</p>
                    <p class="text-sm text-gray-600">Le prompt sera publié sur la plateforme</p>
                  </div>
                </label>
                <label class="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-[#FFCB05] transition-colors">
                  <input
                    v-model="validationDecision"
                    type="radio"
                    value="request-changes"
                    class="w-4 h-4 text-[#FFCB05] border-gray-300 focus:ring-[#FFCB05]"
                  />
                  <div>
                    <p class="font-medium text-gray-900">Demander des modifications</p>
                    <p class="text-sm text-gray-600">L'auteur devra apporter des changements</p>
                  </div>
                </label>
                <label class="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-[#FFCB05] transition-colors">
                  <input
                    v-model="validationDecision"
                    type="radio"
                    value="reject"
                    class="w-4 h-4 text-[#FFCB05] border-gray-300 focus:ring-[#FFCB05]"
                  />
                  <div>
                    <p class="font-medium text-gray-900">Rejeter</p>
                    <p class="text-sm text-gray-600">Le prompt ne sera pas publié</p>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-900 mb-2">
                Notes de validation
                <span v-if="validationDecision === 'reject'" class="text-red-500">*</span>
              </label>
              <textarea
                v-model="validationNotes"
                rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFCB05] focus:border-transparent"
                :placeholder="validationDecision === 'reject' ? 'Expliquez pourquoi ce prompt est rejeté (requis)' : 'Ajoutez des notes ou commentaires (optionnel)'"
              ></textarea>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
            <button
              @click="showValidationModal = false"
              class="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Annuler
            </button>
            <button
              @click="submitValidation"
              :disabled="validationDecision === 'reject' && !validationNotes"
              class="px-6 py-2.5 bg-[#FFCB05] text-black rounded-lg hover:bg-[#FFCB05]/90 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Soumettre la décision
            </button>
          </div>
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
import { ref, computed, onMounted, h } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

// Sidebar
const sidebarOpen = ref(false)
const activeTab = ref('dashboard')

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

const FileIcon = () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' })
])

const ClockIcon = () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' })
])

const UserIcon = () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' })
])

const CheckIcon = () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M5 13l4 4L19 7' })
])

const XIcon = () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M6 18L18 6M6 6l12 12' })
])

const UserAddIcon = () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z' })
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
const stats = [
  {
    label: 'Total prompts',
    value: '1,247',
    trend: 12,
    icon: FileIcon,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    label: 'En attente de validation',
    value: '23',
    trend: null,
    icon: ClockIcon,
    bgColor: 'bg-orange-100',
    iconColor: 'text-orange-600'
  },
  {
    label: 'Utilisateurs actifs',
    value: '892',
    trend: 8,
    icon: UserIcon,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    label: 'Taux de validation',
    value: '94%',
    trend: 3,
    icon: CheckIcon,
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600'
  }
]

// Pending prompts
const pendingPrompts = ref([
  {
    id: 1,
    title: 'Générateur de Posts LinkedIn Engageants',
    author: { name: 'Sophie Martin', initials: 'SM' },
    category: 'Marketing',
    date: '20 mars 2024',
    content: 'Tu es un expert en marketing LinkedIn. Crée un post engageant sur [SUJET]...',
    comments: 'Ce prompt a été testé avec GPT-4 et génère d\'excellents résultats.',
    similarPrompts: 2
  },
  {
    id: 2,
    title: 'Créateur de Code React Optimisé',
    author: { name: 'Thomas Dubois', initials: 'TD' },
    category: 'Développement',
    date: '20 mars 2024',
    content: 'Génère un composant React optimisé pour [FONCTIONNALITÉ]...',
    comments: 'Inclut les meilleures pratiques React 18.',
    similarPrompts: 0
  },
  {
    id: 3,
    title: 'Rédacteur d\'Articles SEO',
    author: { name: 'Marie Leroy', initials: 'ML' },
    category: 'Rédaction',
    date: '19 mars 2024',
    content: 'Rédige un article SEO optimisé sur [SUJET]...',
    comments: 'Testé sur plusieurs niches avec d\'excellents résultats.',
    similarPrompts: 1
  },
  {
    id: 4,
    title: 'Générateur de Palettes de Couleurs',
    author: { name: 'Lucas Bernard', initials: 'LB' },
    category: 'Design',
    date: '19 mars 2024',
    content: 'Crée une palette de couleurs harmonieuse pour [TYPE_PROJET]...',
    comments: 'Basé sur la théorie des couleurs et les tendances actuelles.',
    similarPrompts: 0
  },
  {
    id: 5,
    title: 'Analyseur de Données Marketing',
    author: { name: 'Emma Petit', initials: 'EP' },
    category: 'Data & Analyse',
    date: '18 mars 2024',
    content: 'Analyse les données marketing suivantes et fournis des insights...',
    comments: 'Parfait pour les rapports mensuels.',
    similarPrompts: 3
  }
])

const selectedPrompts = ref<number[]>([])
const filterCategory = ref('')
const filterDate = ref('all')
const currentPage = ref(1)
const itemsPerPage = 5

const filteredPrompts = computed(() => {
  let filtered = pendingPrompts.value
  
  if (filterCategory.value) {
    filtered = filtered.filter(p => p.category.toLowerCase() === filterCategory.value)
  }
  
  return filtered
})

const totalPages = computed(() => Math.ceil(filteredPrompts.value.length / itemsPerPage))

const paginatedPrompts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredPrompts.value.slice(start, end)
})

const togglePrompt = (id: number) => {
  const index = selectedPrompts.value.indexOf(id)
  if (index > -1) {
    selectedPrompts.value.splice(index, 1)
  } else {
    selectedPrompts.value.push(id)
  }
}

const toggleAllPrompts = () => {
  if (selectedPrompts.value.length === pendingPrompts.value.length) {
    selectedPrompts.value = []
  } else {
    selectedPrompts.value = pendingPrompts.value.map(p => p.id)
  }
}

// Validation modal
const showValidationModal = ref(false)
const selectedPrompt = ref<any>(null)
const validationDecision = ref('approve')
const validationNotes = ref('')

const openValidationModal = (prompt: any) => {
  selectedPrompt.value = prompt
  validationDecision.value = 'approve'
  validationNotes.value = ''
  showValidationModal.value = true
}

const submitValidation = () => {
  showValidationModal.value = false
  showToastNotification(`Prompt ${validationDecision.value === 'approve' ? 'validé' : validationDecision.value === 'reject' ? 'rejeté' : 'renvoyé pour modifications'}`)
}

const quickValidate = (id: number) => {
  showToastNotification('Prompt validé avec succès')
}

const quickReject = (id: number) => {
  if (confirm('Êtes-vous sûr de vouloir rejeter ce prompt ?')) {
    showToastNotification('Prompt rejeté')
  }
}

// Toast
const showToast = ref(false)
const toastMessage = ref('')

const showToastNotification = (message: string) => {
  toastMessage.value = message
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}

// Recent activities
const recentActivities = [
  {
    id: 1,
    description: 'Sophie Martin a soumis un nouveau prompt',
    time: 'Il y a 5 minutes',
    icon: FileIcon,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    id: 2,
    description: 'Prompt "Générateur de Tweets" validé',
    time: 'Il y a 12 minutes',
    icon: CheckIcon,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    id: 3,
    description: 'Nouveau utilisateur inscrit',
    time: 'Il y a 23 minutes',
    icon: UserAddIcon,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    id: 4,
    description: 'Prompt "Code Python" rejeté',
    time: 'Il y a 1 heure',
    icon: XIcon,
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600'
  },
  {
    id: 5,
    description: 'Thomas Dubois a soumis un nouveau prompt',
    time: 'Il y a 2 heures',
    icon: FileIcon,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600'
  }
]

// Top contributors
const topContributors = [
  { id: 1, name: 'Sophie Martin', initials: 'SM', prompts: 127, score: 2450 },
  { id: 2, name: 'Thomas Dubois', initials: 'TD', prompts: 98, score: 1890 },
  { id: 3, name: 'Marie Leroy', initials: 'ML', prompts: 76, score: 1520 },
  { id: 4, name: 'Lucas Bernard', initials: 'LB', prompts: 64, score: 1280 },
  { id: 5, name: 'Emma Petit', initials: 'EP', prompts: 52, score: 1040 }
]

// Most copied prompts
const mostCopiedPrompts = [
  { id: 1, title: 'Générateur de Posts LinkedIn', category: 'Marketing', copies: 1247 },
  { id: 2, title: 'Créateur de Threads Twitter', category: 'Marketing', copies: 892 },
  { id: 3, title: 'Rédacteur d\'Articles SEO', category: 'Rédaction', copies: 756 },
  { id: 4, title: 'Générateur de Code React', category: 'Développement', copies: 623 }
]

// Charts
const promptsChart = ref<HTMLCanvasElement | null>(null)
const validationChart = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  // Prompts created chart
  if (promptsChart.value) {
    new Chart(promptsChart.value, {
      type: 'line',
      data: {
        labels: ['1 Mar', '5 Mar', '10 Mar', '15 Mar', '20 Mar', '25 Mar', '30 Mar'],
        datasets: [{
          label: 'Prompts créés',
          data: [12, 19, 15, 25, 22, 30, 28],
          borderColor: '#FFCB05',
          backgroundColor: 'rgba(255, 203, 5, 0.1)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  }

  // Validation rate chart
  if (validationChart.value) {
    new Chart(validationChart.value, {
      type: 'doughnut',
      data: {
        labels: ['Validés', 'Rejetés', 'En attente'],
        datasets: [{
          data: [94, 3, 3],
          backgroundColor: ['#10B981', '#EF4444', '#F59E0B'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    })
  }
})
</script>