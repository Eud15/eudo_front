<template>
  <!-- Added pt-16 to account for fixed header height -->
  <section class="relative w-full h-screen min-h-[600px] overflow-hidden pt-16">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img 
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%202-cNYL1wzGFH8eeDFlNzX5Wv6PTEVxAe.png" 
        alt="Alan Health Background"
        class="w-full h-full object-cover"
      />
      <!-- Removed overlay for cleaner look matching mockup -->
    </div>

    <!-- Content Overlay -->
    <div class="relative z-10 h-full flex items-center">
      <div class="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div class="max-w-xl">
          <!-- Heading -->
          <h1 class="text-white text-5xl md:text-6xl font-semibold leading-tight mb-8">
            Votre partenaire santé qui prévient, assure et accompagne au quotidien
          </h1>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 mb-6">
            <button class="bg-[#5B4FFF] hover:bg-[#4A3FE8] text-white font-medium px-6 py-3.5 rounded-full transition-colors duration-200 text-base">
              Mon devis en 2 min
            </button>
            <button class="bg-white hover:bg-gray-50 text-gray-900 font-medium px-6 py-3.5 rounded-full transition-colors duration-200 text-base border border-white">
              Demander une démo
            </button>
          </div>

          <!-- Video Link -->
          <a href="#" class="inline-flex items-center gap-2 text-white text-sm font-medium hover:opacity-80 transition-opacity">
            <span>Tout savoir sur Alan en vidéo</span>
            <span class="flex items-center justify-center w-6 h-6 bg-white rounded-full">
              <svg class="w-3 h-3 text-[#5B4FFF] ml-0.5" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4 3.5v9l8-4.5-8-4.5z"/>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>


</script>
