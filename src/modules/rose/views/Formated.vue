<template>
  <div class="animate-fade-in">
    <!-- Text Message -->
    <div v-if="type === 'text'" class="space-y-2">
      <p class="text-sm leading-relaxed whitespace-pre-wrap" v-html="formattedContent"></p>
    </div>

    <!-- List Message -->
    <div v-else-if="type === 'list'" class="space-y-2">
      <p v-if="content.title" class="font-semibold text-sm mb-2">{{ content.title }}</p>
      <ul v-if="content.ordered === false" class="space-y-1.5">
        <li 
          v-for="(item, index) in content.items" 
          :key="index"
          class="flex items-start gap-2 text-sm"
        >
          <span class="text-[#D91E7E] mt-1">•</span>
          <span class="flex-1">{{ item }}</span>
        </li>
      </ul>
      <ol v-else class="space-y-1.5 list-decimal list-inside">
        <li 
          v-for="(item, index) in content.items" 
          :key="index"
          class="text-sm text-gray-700"
        >
          {{ item }}
        </li>
      </ol>
    </div>

    <!-- Card Message -->
    <div v-else-if="type === 'card'" class="bg-white rounded-xl border-2 border-pink-100 overflow-hidden">
      <div v-if="content.title" class="bg-gradient-to-r from-pink-50 to-pink-100 px-4 py-3 border-b border-pink-200">
        <h3 class="font-semibold text-[#D91E7E]">{{ content.title }}</h3>
      </div>
      <div class="p-4">
        <p class="text-sm text-gray-700 leading-relaxed">{{ content.body }}</p>
        <button 
          v-if="content.action"
          @click="handleAction(content.action)"
          class="mt-3 w-full bg-gradient-to-r from-[#D91E7E] to-[#FF69B4] text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all"
        >
          {{ content.action.label }}
        </button>
      </div>
    </div>

    <!-- Quick Actions Message -->
    <div v-else-if="type === 'actions'" class="space-y-3">
      <p v-if="content.text" class="text-sm text-gray-700 mb-2">{{ content.text }}</p>
      <div class="flex gap-2 overflow-x-auto scrollbar-hide">
        <button
          v-for="(action, index) in content.actions"
          :key="index"
          @click="handleAction(action)"
          class="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-white text-[#D91E7E] rounded-lg text-sm font-medium hover:bg-pink-50 transition-colors border-2 border-[#D91E7E]"
        >
          <component v-if="action.icon" :is="action.icon" :size="16" />
          <span>{{ action.label }}</span>
        </button>
      </div>
    </div>

    <!-- Image Message -->
    <div v-else-if="type === 'image'" class="space-y-2">
      <img 
        :src="content.url" 
        :alt="content.caption || 'Image'"
        class="w-full rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
        @click="openLightbox"
      />
      <p v-if="content.caption" class="text-xs text-gray-500 italic">{{ content.caption }}</p>
    </div>

    <!-- Warning/Alert Message -->
    <div v-else-if="type === 'warning'" class="bg-red-50 border-l-4 border-red-400 rounded-lg p-4">
      <div class="flex gap-3">
        <AlertTriangle :size="20" class="text-red-500 flex-shrink-0 mt-0.5" />
        <div class="flex-1">
          <h4 class="font-semibold text-red-800 text-sm mb-1">{{ content.title }}</h4>
          <p class="text-sm text-red-700">{{ content.text }}</p>
        </div>
      </div>
    </div>

    <!-- Info Box -->
    <div v-else-if="type === 'info'" class="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-4">
      <div class="flex gap-3">
        <Info :size="20" class="text-blue-500 flex-shrink-0 mt-0.5" />
        <div class="flex-1">
          <h4 class="font-semibold text-blue-800 text-sm mb-1">{{ content.title }}</h4>
          <p class="text-sm text-blue-700">{{ content.text }}</p>
        </div>
      </div>
    </div>

    <!-- Link Preview -->
    <div v-else-if="type === 'link'" class="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <a 
        :href="content.url" 
        target="_blank" 
        rel="noopener noreferrer"
        class="block p-4"
      >
        <div class="flex items-start justify-between gap-3">
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-2">
              <Globe :size="16" class="text-gray-400" />
              <span class="text-xs text-gray-500">{{ content.domain }}</span>
            </div>
            <h4 class="font-semibold text-gray-800 text-sm mb-1">{{ content.title }}</h4>
            <p class="text-xs text-gray-600 line-clamp-2">{{ content.description }}</p>
          </div>
          <ExternalLink :size="18" class="text-[#D91E7E] flex-shrink-0" />
        </div>
      </a>
    </div>

    <!-- Timestamp -->
    <div v-if="timestamp" class="mt-2">
      <span class="text-xs text-gray-400">{{ timestamp }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { 
  AlertTriangle, 
  Info, 
  Globe, 
  ExternalLink,
  Phone,
  Calendar,
  MapPin
} from 'lucide-vue-next'

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: (value) => [
      'text', 'list', 'card', 'actions', 'image', 'warning', 'info', 'link'
    ].includes(value)
  },
  content: {
    type: [String, Object, Array],
    required: true
  },
  timestamp: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['action'])

const formattedContent = computed(() => {
  if (props.type === 'text' && typeof props.content === 'string') {
    return props.content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
  }
  return props.content
})

const handleAction = (action) => {
  emit('action', action)
}

const openLightbox = () => {
  // Implement lightbox functionality
  console.log('Open lightbox')
}
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}

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
</style>
