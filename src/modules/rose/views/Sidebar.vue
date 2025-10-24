<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="modelValue"
        class="fixed inset-0 bg-black/50 z-40"
        @click="close"
      />
    </Transition>

    <Transition name="slide">
      <div
        v-if="modelValue"
        class="fixed top-0 right-0 bottom-0 w-full max-w-[280px] bg-white shadow-2xl z-50 flex flex-col"
        @keydown.esc="close"
        tabindex="-1"
        ref="sidebarRef"
      >
        <!-- Header -->
        <div class="bg-gradient-to-r from-[#D91E7E] to-[#FF69B4] p-4 flex items-center justify-between">
          <h2 class="text-white text-xl font-bold">Menu</h2>
          <button
            @click="close"
            class="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
            aria-label="Fermer le menu"
          >
            <X :size="24" />
          </button>
        </div>

        <!-- Menu Items -->
        <nav class="flex-1 overflow-y-auto py-2">
          <button
            v-for="item in menuItems"
            :key="item.id"
            @click="handleMenuClick(item.id)"
            class="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-pink-50 transition-colors text-left"
          >
            <component :is="item.icon" :size="20" class="text-[#D91E7E] flex-shrink-0" />
            <span class="font-medium">{{ item.label }}</span>
          </button>

          <div class="border-t border-gray-200 my-2" />

          <button
            v-for="item in secondaryItems"
            :key="item.id"
            @click="handleMenuClick(item.id)"
            class="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-pink-50 transition-colors text-left"
          >
            <component :is="item.icon" :size="20" class="text-[#D91E7E] flex-shrink-0" />
            <span class="font-medium">{{ item.label }}</span>
          </button>
        </nav>

        <!-- Footer -->
        <div class="border-t border-gray-200 p-4 text-center">
          <p class="text-xs text-gray-500 mb-1">Version 1.0.0</p>
          <p class="text-xs text-gray-400">Octobre Rose 2025</p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import { X, Home, MessageCircle, BookOpen, Info, Phone, Settings, HelpCircle } from 'lucide-vue-next'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['update:modelValue', 'navigate'])

const sidebarRef = ref(null)

const menuItems = [
  { id: 'rose', label: 'Accueil', icon: Home },
  { id: 'chat', label: 'Nouvelle conversation', icon: MessageCircle },
  { id: 'ressources', label: 'Ressources', icon: BookOpen },
  { id: 'evaluation', label: 'Evaluation', icon: HelpCircle },
  // { id: 'about', label: 'À propos', icon: Info }
]

const secondaryItems = [
  { id: 'emergency', label: 'Contacts d\'urgence', icon: Phone },
  { id: 'settings', label: 'Paramètres', icon: Settings }
]

const close = () => {
  emit('update:modelValue', false)
}

const handleMenuClick = (itemId) => {
  emit('navigate', itemId)
  close()
}

// Focus trap: focus sidebar when opened
watch(() => props.modelValue, async (isOpen) => {
  if (isOpen) {
    await nextTick()
    sidebarRef.value?.focus()
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>