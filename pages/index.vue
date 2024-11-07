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
    <div class="rm-wrapper">
      <champs />
    </div>

    <div class="bg-black">
      <brands />
    </div>
    <div>
      <albums />
    </div>
    <div>
      <subscription />
    </div>
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
</script>
