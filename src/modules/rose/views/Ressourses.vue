<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center md:p-4">
    <div class="w-full max-w-[428px] min-h-[844px] bg-white md:rounded-3xl md:shadow-2xl overflow-hidden flex flex-col">
      <!-- Header -->
      <header class="bg-gradient-to-r from-[#D91E7E] to-[#FF69B4] text-white px-4 py-4 flex items-center gap-4 shadow-md sticky top-0 z-10">
        <button 
          @click="goBack"
          class="p-2 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Retour"
        >
          <ChevronLeft :size="24" />
        </button>
        <h1 class="text-xl font-semibold flex-1">Ressources</h1>
        <button
          @click="isSidebarOpen = true"
          class="p-2 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Menu"
        >
          <Menu :size="24" />
        </button>
      </header>

      <!-- Emergency Banner -->
      <div class="bg-red-50 border-l-4 border-red-500 p-4 m-4 rounded-lg flex items-center gap-3">
        <Phone class="text-red-500 flex-shrink-0" :size="24" />
        <div>
          <p class="font-semibold text-red-800">En cas d'urgence</p>
          <a href="tel:112" class="text-red-600 font-bold text-lg hover:underline">112 (SAMU)</a>
        </div>
      </div>

      <!-- Search Bar -->
      <div class="px-4 mb-4">
        <div class="relative">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 text-[#D91E7E]" :size="20" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Rechercher une ressource..."
            class="w-full pl-10 pr-4 py-3 bg-white border-2 border-pink-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#D91E7E] focus:border-transparent text-sm"
          />
        </div>
      </div>

      <!-- Filter Chips -->
      <div class="px-4 mb-4">
        <div class="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button
            v-for="filter in filters"
            :key="filter"
            @click="activeFilter = filter"
            :class="[
              'flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all',
              activeFilter === filter
                ? 'bg-[#D91E7E] text-white shadow-md'
                : 'bg-white text-[#D91E7E] border-2 border-pink-200 hover:border-[#D91E7E]'
            ]"
          >
            {{ filter }}
          </button>
        </div>
      </div>

      <!-- Resources Content -->
      <div class="flex-1 overflow-y-auto px-4 pb-4 space-y-4">
        <div
          v-for="category in filteredCategories"
          :key="category.id"
          class="bg-white rounded-2xl shadow-md overflow-hidden border border-pink-100"
        >
          <!-- Category Header -->
          <button
            @click="toggleCategory(category.id)"
            class="w-full flex items-center justify-between p-4 bg-gradient-to-r from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 transition-colors"
          >
            <div class="flex items-center gap-3">
              <span class="text-2xl">{{ category.icon }}</span>
              <h2 class="font-semibold text-gray-800">{{ category.title }}</h2>
            </div>
            <ChevronDown
              :class="[
                'text-[#D91E7E] transition-transform',
                expandedCategories.includes(category.id) ? 'rotate-180' : ''
              ]"
              :size="20"
            />
          </button>

          <!-- Category Content -->
          <Transition name="expand">
            <div v-if="expandedCategories.includes(category.id)" class="p-4 space-y-3">
              <div
                v-for="resource in category.resources"
                :key="resource.id"
                class="bg-white border-2 border-pink-100 rounded-xl p-4 hover:shadow-lg hover:border-[#D91E7E] transition-all"
              >
                <div class="flex gap-3">
                  <div class="w-12 h-12 bg-gradient-to-br from-[#D91E7E] to-[#FF69B4] rounded-full flex items-center justify-center flex-shrink-0">
                    <component :is="resource.iconComponent" class="text-white" :size="24" />
                  </div>
                  <div class="flex-1">
                    <h3 class="font-semibold text-gray-800 mb-1">{{ resource.name }}</h3>
                    <p class="text-sm text-gray-600 mb-2 line-clamp-2">{{ resource.description }}</p>
                    
                    <!-- Event Details (Date, Time, Location) - Only for events -->
                    <div v-if="resource.date || resource.time || resource.location" class="space-y-1 mb-3 bg-pink-50 rounded-lg p-3">
                      <div v-if="resource.date" class="flex items-center gap-2 text-sm text-gray-800">
                        <Calendar :size="16" class="text-[#D91E7E] flex-shrink-0" />
                        <span class="font-medium">{{ formatDate(resource.date) }}</span>
                      </div>
                      <div v-if="resource.time" class="flex items-center gap-2 text-sm text-gray-800">
                        <Clock :size="16" class="text-[#D91E7E] flex-shrink-0" />
                        <span class="font-medium">{{ resource.time }}</span>
                      </div>
                      <div v-if="resource.location" class="flex items-center gap-2 text-sm text-gray-800">
                        <MapPin :size="16" class="text-[#D91E7E] flex-shrink-0" />
                        <span class="font-medium">{{ resource.location }}</span>
                      </div>
                    </div>

                    <!-- Contact Info -->
                    <div class="space-y-1 mb-3">
                      <a
                        v-if="resource.phone"
                        :href="`tel:${resource.phone}`"
                        class="flex items-center gap-2 text-sm text-gray-700 hover:text-[#D91E7E]"
                      >
                        <Phone :size="14" />
                        <span>{{ resource.phone }}</span>
                      </a>
                      <a
                        v-if="resource.email"
                        :href="`mailto:${resource.email}`"
                        class="flex items-center gap-2 text-sm text-gray-700 hover:text-[#D91E7E]"
                      >
                        <Mail :size="14" />
                        <span>{{ resource.email }}</span>
                      </a>
                      <a
                        v-if="resource.website"
                        :href="resource.website"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center gap-2 text-sm text-gray-700 hover:text-[#D91E7E]"
                      >
                        <Globe :size="14" />
                        <span>Site web</span>
                      </a>
                    </div>

                    <!-- Learn More Link -->
                    <a
                      href="#"
                      @click.prevent="openResource(resource)"
                      class="inline-flex items-center gap-1 text-sm font-medium text-[#D91E7E] hover:underline"
                    >
                      En savoir plus
                      <ExternalLink :size="14" />
                    </a>
                  </div>
                </div>
              </div>

              <!-- Empty State -->
              <div v-if="category.resources.length === 0" class="text-center py-8 text-gray-500">
                <p class="text-sm">Aucune ressource disponible</p>
              </div>
            </div>
          </Transition>
        </div>

        <!-- No Results -->
        <div v-if="filteredCategories.length === 0" class="text-center py-12">
          <Search class="mx-auto text-gray-300 mb-4" :size="48" />
          <p class="text-gray-500">Aucune ressource trouvée</p>
          <p class="text-sm text-gray-400 mt-2">Essayez avec d'autres mots-clés</p>
        </div>
      </div>
    </div>

    <!-- Sidebar Menu Component -->
    <RoseSidebarMenu 
      v-model="isSidebarOpen"
      @navigate="handleNavigation"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { 
  ChevronLeft, 
  ChevronDown,
  Search,
  Phone,
  Mail,
  Globe,
  ExternalLink,
  MapPin,
  Heart,
  Users,
  BookOpen,
  Calendar,
  HelpCircle,
  Clock,
  Menu
} from 'lucide-vue-next'
import RoseSidebarMenu from '../../rose/views/Sidebar.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
// State
const searchQuery = ref('')
const activeFilter = ref('Tous')
const expandedCategories = ref(['screening', 'associations'])
const isSidebarOpen = ref(false)

const filters = ['Tous', 'À proximité', 'En ligne', 'Gratuit']

const categories = ref([
  {
    id: 'screening',
    icon: '🏥',
    title: 'Centres de dépistage',
    resources: [
      {
        id: 1,
        name: 'CHU-MEL',
        description: 'Mammographies et échographies mammaires. Prise en charge complète du dépistage.',
        phone: '01 23 45 67 89',
        email: 'contact@crm-paris.fr',
        website: 'https://example.com',
        iconComponent: MapPin,
        tags: ['proximité', 'gratuit']
      },
      {
        id: 2,
        name: 'Fondation Claudine Talon',
        description: 'Ce projet consiste à faire gratuitement le dépistage précoce par la méthode IVA/IVL et le traitement de lésions précancéreuses auprès des femmes âgées de 25 à 49 ans au Bénin. ',
        phone: '+229 01 97 68 01 06',
        email: 'info@depistage.fr',
        website: 'http://fondationclaudinetalon.org',
        iconComponent: Heart,
        tags: ['gratuit']
      },
      
    ]
  },
  {
    id: 'associations',
    icon: '🤝',
    title: 'Associations',
    resources: [
      {
        id: 3,
        name: 'beautyandbrainsorority',
        description: 'Beauty & Brain | Le rendez-vous des femmes ambitieuses. ',
        phone: '+229 01 46 09 95 72',
        email: '',
        website: 'https://www.instagram.com/beautyandbrainsorority/',
        iconComponent: Users,
        tags: ['physique']
      },
       {
        id: 4,
        name: 'Fondation Claudine Talon',
        description: 'Ce projet consiste à faire gratuitement le dépistage précoce par la méthode IVA/IVL et le traitement de lésions précancéreuses auprès des femmes âgées de 25 à 49 ans au Bénin. ',
        phone: '+229 01 97 68 01 06',
        email: 'info@depistage.fr',
        website: 'http://fondationclaudinetalon.org',
        iconComponent: Heart,
        tags: ['physique']
      },
    ]
  },
  {
    id: 'emergency',
    icon: '📞',
    title: 'Numéros d\'urgence',
    resources: [
       {
      id: 5,
      name: "SAMU",
      description: "Service d'aide médicale urgente disponible 24h/24.",
      phone: "112",
      iconComponent: "Phone",
      tags: ["gratuit"]
    },
    {
      id: 6,
      name: "MEDOM-Bénin (Médecin à domicile 24h/24)",
      description: "Consultations médicales à domicile 7j/7.",
      phone: "60 93 94 94",
      website: "https://medom.bj/",
      iconComponent: "Phone",
      tags: []
    }
    ]
  },
  {
    id: 'documentation',
    icon: '📚',
    title: "Documentation",
  resources: [
    {
      id: 7,
      name: "Directives nationales et guide pour la prévention et le contrôle du cancer du col de l’utérus et du cancer du sein",
      description: "Guide officiel béninois portant sur la prévention, le diagnostic et la gestion des cancers gynécologiques et mammaires (dont le cancer du sein) au Bénin.",
      website: "https://www.medbox.org/document/directives-nationales-et-guide-pour-la-prevention-et-le-controle-du-cancer-du-col-de-luterus-et-cu-cancer-du-sein",
    iconComponent: "BookOpen",
      tags: ["en ligne", "gratuit"]
    },
    {
      id: 8,
      name: "Plan stratégique de lutte contre le cancer du col de l’utérus et les autres cancers gynécologiques et mammaires au Bénin 2019-2023",
      description: "Document national détaillant les axes stratégiques, la situation du cancer du sein, les objectifs et actions pour la période 2019-2023 au Bénin.",
      website: "https://www.afro.who.int/sites/default/files/2022-06/PLAN%20STRATEGIQUE%20DE%20LUTTE%20CONTRE%20LE%20CANCER%20DU%20COL%20DE%20L%E2%80%99UTERUS%20ET%20LES%20AUTRES%20CANCERS%20GYNECOLOGIQUES%20ET%20MAMMAIRES%20AU%20BENIN_final_0.pdf",
      iconComponent: "BookOpen",
      tags: ["en ligne", "gratuit"]
    }
  ]


  },
  {
    id: 'events',
    icon: '🎗️',
    title: 'Événements Octobre Rose',
    resources: [
      {
        id: 9,
        name: 'MOVE FOR PINK le 25 octobre au Padel Club Cotonou',
        description: 'Marche solidaire  pour sensibiliser au dépistage du cancer du sein.',
        phone: '+229 01 46 09 95 72',
        website: 'https://www.instagram.com/beautyandbrainsorority/',
        date: '2024-10-25',
        time: '10h00 - 18h00',
        location: 'Padel Club Cotonou',
        iconComponent: Calendar,
        tags: ['payant']
      },
      {
        id: 10,
        name: 'BSM Group & Clinique Serena',
        description: 'Dépistage gratuit du cancer du sein à la Clinique Serena',
        phone: '+229 68 45 80 28',
        email: 'contact@bsmgroupe.com',
        website: 'https://www.facebook.com/share/p/1966x4cpuU/',
        date: '2024-10-25',
        time: '09h00 - 13h00',
        location: 'Clinique Serena, Cotonou',
        iconComponent: Heart,
        tags: ['gratuit']
      }
    ]
  }
])

// Computed
const filteredCategories = computed(() => {
  let filtered = categories.value

  // Filter by search query
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.map(category => ({
      ...category,
      resources: category.resources.filter(resource =>
        resource.name.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.location?.toLowerCase().includes(query)
      )
    })).filter(category => category.resources.length > 0)
  }

  // Filter by active filter
  if (activeFilter.value !== 'Tous') {
    const filterTag = activeFilter.value.toLowerCase().replace('à ', '')
    filtered = filtered.map(category => ({
      ...category,
      resources: category.resources.filter(resource =>
        resource.tags?.includes(filterTag)
      )
    })).filter(category => category.resources.length > 0)
  }

  return filtered
})

// Methods
const toggleCategory = (categoryId) => {
  const index = expandedCategories.value.indexOf(categoryId)
  if (index > -1) {
    expandedCategories.value.splice(index, 1)
  } else {
    expandedCategories.value.push(categoryId)
  }
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString('fr-FR', options)
}

const openResource = (resource) => {
  console.log('Opening resource:', resource)
  if (resource.website) {
    window.open(resource.website, '_blank')
  }
}

const goBack = () => {
  console.log('Navigate back')
   router.push("/")
}

const handleNavigation = (itemId) => {
  console.log('Navigate to:', itemId)
  router.push({ name: itemId })
  // Handle navigation based on itemId
  // You can emit an event or use router here
}
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Expand transition */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 2000px;
  opacity: 1;
}
</style>