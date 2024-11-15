<template>
  <div>
    <div
      :class="{ 'backdrop-blur-sm': menuOpen }"
      class="relative flex flex-col items-center bg-black text-white"
    >
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
    <!-- Subscription Section -->
    <div>
      <subscription />
    </div>
    <!-- Footer  Section -->
    <div>
      <laster />
    </div>
    <div class="rm-wrapper bg-stone-800">
      <lasterUnderLaster />
    </div>
  </div>
</template>

<script setup>
// Méthode pour basculer l'état du menu
const menuOpen = ref(false);
const toggleMenu = (value) => {
  menuOpen.value = value;
};
</script>
