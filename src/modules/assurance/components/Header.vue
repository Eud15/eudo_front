<template>
  <header class="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <svg class="w-20 h-8" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="8" r="3" fill="#5B4FFF"/>
            <circle cx="12" cy="8" r="3" fill="#5B4FFF"/>
            <circle cx="4" cy="16" r="3" fill="#5B4FFF"/>
            <circle cx="12" cy="16" r="3" fill="#5B4FFF"/>
            <path d="M2 20C2 20 4 24 8 24C12 24 14 20 14 20" stroke="#5B4FFF" stroke-width="2" stroke-linecap="round"/>
            <text x="22" y="20" font-family="Arial, sans-serif" font-size="16" font-weight="600" fill="#1a1a1a">alan</text>
          </svg>
        </div>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <button class="flex items-center space-x-1 text-gray-700 hover:text-gray-900 text-sm font-medium">
            <span>Nos offres</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <button class="flex items-center space-x-1 text-gray-700 hover:text-gray-900 text-sm font-medium">
            <span>Pourquoi Alan ?</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <button class="flex items-center space-x-1 text-gray-700 hover:text-gray-900 text-sm font-medium">
            <span>Ressources</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <button class="flex items-center space-x-1 text-gray-700 hover:text-gray-900 text-sm font-medium">
            <span>À propos d'Alan</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <a href="#" class="text-[#5B4FFF] hover:text-[#4a3ecc] text-sm font-medium">
            Me connecter
          </a>
        </nav>

        <!-- Mobile menu button -->
        <button class="md:hidden p-2 text-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
</script>
