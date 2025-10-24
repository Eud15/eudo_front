<template>
  <div class="bg-white border-t border-pink-100 shadow-sm">
    <div 
      ref="scrollContainer"
      class="flex gap-2 overflow-x-auto px-4 py-3 scrollbar-hide scroll-smooth"
    >
      <button
        v-for="suggestion in suggestions"
        :key="suggestion.id"
        @click="handleSelect(suggestion)"
        class="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 bg-white text-[#D91E7E] rounded-full text-sm font-medium hover:bg-[#D91E7E] hover:text-white transition-all duration-200 border-2 border-[#D91E7E] active:scale-95 min-w-fit whitespace-nowrap"
      >
        <component 
          v-if="suggestion.icon" 
          :is="suggestion.icon" 
          :size="16" 
        />
        <span>{{ suggestion.text }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  Stethoscope, 
  Search, 
  AlertCircle, 
  ClipboardList,
  Phone,
  BookOpen,
  MapPin,
  Calendar,
  BookMarked,
  UserCheck
} from 'lucide-vue-next'

const props = defineProps({
  suggestions: {
    type: Array,
    required: true,
    default: () => []
  }
})

const emit = defineEmits(['select'])

const scrollContainer = ref(null)

const handleSelect = (suggestion) => {
  emit('select', suggestion)
}

// Icon mapping
const iconMap = {
  'stethoscope': Stethoscope,
  'search': Search,
  'alert': AlertCircle,
  'clipboard': ClipboardList,
  'phone': Phone,
  'book': BookOpen,
  'map': MapPin,
  'calendar': Calendar,
  'bookmark': BookMarked,
  'user': UserCheck
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
</style>
