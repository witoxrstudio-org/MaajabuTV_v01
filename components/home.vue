<template>
  <section
    class="rm-container flex flex-col lg:flex-row items-center lg:justify-between bg-black text-white py-12 px-6 mb-16 lg:px-16 relative overflow-hidden"
  >
    <!-- Texte à gauche -->
    <div class="lg:w-1/2 space-y-6">
      <!-- Petite ligne avec texte -->
      <p class="text-yellow-500 font-semibold flex items-center">
        <span class="inline-block w-8 h-0.5 bg-yellow-500 mr-3"></span>
        {{ welcome }}
      </p>

      <!-- Titre principal -->
      <h1 class="text-4xl lg:text-6xl font-bold">
        {{ title }} <br />
        {{ titles }}
      </h1>

      <!-- Description -->
      <p class="text-lg text-gray-300">
        {{ desc }}
      </p>
      <!-- Boutons -->
      <div
        class="flex flex-col md:flex-row md:space-x-4 mt-4 space-y-2 md:space-y-0"
      >
        <button
          class="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-3 rounded-full font-semibold text-sm flex items-center justify-center space-x-2 hover:text-green-500 w-full md:w-auto"
        >
          <i class="fab fa-spotify"></i> <span>Spotify</span>
        </button>
        <button
          class="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-3 rounded-full font-semibold text-sm flex items-center justify-center space-x-2 hover:text-orange-200 w-full md:w-auto"
        >
          <i class="fab fa-soundcloud"></i>
          <span>SoundCloud</span>
        </button>
        <button
          class="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-3 rounded-full font-semibold text-sm flex items-center justify-center space-x-2 hover:text-white w-full md:w-auto"
        >
          <i class="fab fa-apple"></i> <span>Apple Podcast</span>
        </button>
      </div>
    </div>

    <!-- Image à droite -->
    <div class="lg:w-1/2 flex justify-center mt-8 lg:mt-0 relative">
      <!-- Grand image principale avec débordement à droite -->
      <img
        src="public/img/Image_hero.png"
        alt="Main Image"
        class="w-2/3 h-auto rounded-lg shadow-lg lg:transform lg:translate-x-1/4"
      />
    </div>

    <!-- Grand espace en bas de la section -->
    <div class="h-24 lg:h-48"></div>
  </section>
</template>

<script setup>
const { t } = useI18n();
const title = ref(t("title.title"));
const titles = ref(t("title.titles"));
const welcome = ref(t("title.welcome"));
const desc = ref(t("title.desc"));
</script>
