<template>
  <div>
    <div
      :class="{ 'backdrop-blur-sm': menuOpen }"
      class="relative bg-black text-white min-h-screen flex flex-col items-center"
    >
      <!-- Barre de navigation -->
      <Navbar @toggleMenu="toggleMenu" />
      <!-- HomePage -->
      <Home />
    </div>
    <!-- Latest Section -->
    <div class="rm-wrapper">
      <Latest />
    </div>
    <!-- chants Section -->
    <div class="rm-wrapper">
      <champs />
    </div>
    <!-- brands Section -->
    <div class="bg-black">
      <brands />
    </div>
    <!-- Albums Section -->
    <div>
      <albums />
    </div>
    <!-- Subscription -->
    <div>
      <subscription />
    </div>
    <!-- Footer -->
    <div>
      <laster />
    </div>
    <div class="bg-stone-800 rm-wrapper">
      <lasterUnderLaster />
    </div>
  </div>
</template>

<script setup>
// Méthode pour basculer l'état du menu
const toggleMenu = (value) => {
  menuOpen.value = value;
};

const data = ref({ musics: [], events: [] });
</script>
