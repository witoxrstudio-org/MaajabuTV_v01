<template>
  <section
    class="mj-container relative flex flex-col items-center space-x-8 overflow-hidden bg-black px-6 pt-32 text-white sm:py-24 md:mb-24 lg:flex-row lg:justify-between"
  >
    <!-- Texte à gauche -->
    <div class="space-y-6 lg:w-1/2">
      <!-- Petite ligne avec texte -->
      <p class="flex items-center text-2xl font-semibold text-yellow-500">
        <span class="mr-3 inline-block h-0.5 w-8 bg-yellow-500"></span>
        <span class="font-title">{{ welcome }}</span>
      </p>

      <!-- Titre principal -->
      <h1
        class="transform text-4xl font-bold transition duration-200 lg:text-6xl"
      >
        {{ title }} <br />
        {{ titles }}
      </h1>

      <!-- Description -->
      <p
        class="transform text-lg text-gray-300 transition duration-200 hover:text-yellow-500"
      >
        {{ desc }}
      </p>
      <!-- Boutons -->
      <!-- Boutons -->
      <div class="mt-4 flex flex-row justify-center space-x-2 md:justify-start">
        <button
          class="flex transform items-center justify-center rounded-full bg-yellow-500 px-4 py-3 text-lg font-semibold text-black transition duration-200 hover:bg-yellow-600 hover:text-green-500 md:px-3 md:py-2 md:text-sm"
        >
          <i class="fab fa-spotify"></i>
          <span class="hidden md:inline">Spotify</span>
        </button>
        <button
          class="flex transform items-center justify-center rounded-full bg-yellow-500 px-4 py-3 text-lg font-semibold text-black transition duration-200 hover:bg-yellow-600 hover:text-orange-200 md:px-3 md:py-2 md:text-sm"
        >
          <i class="fab fa-soundcloud"></i>
          <span class="hidden md:inline">SoundCloud</span>
        </button>
        <button
          class="flex transform items-center justify-center rounded-full bg-yellow-500 px-4 py-3 text-lg font-semibold text-black transition duration-200 hover:bg-yellow-600 hover:text-white md:px-3 md:py-2 md:text-sm"
        >
          <i class="fab fa-apple"></i>
          <span class="hidden md:inline">Apple Podcast</span>
        </button>
      </div>
    </div>

    <!-- Image à droite -->
    <div class="relative mt-8 flex justify-center lg:mt-0 lg:w-1/2">
      <!-- Grand image principale avec débordement à droite -->
      <img
        src="public/img/Image_hero.png"
        alt="Main Image"
        class="w-3/3 h-auto transform rounded-lg shadow-lg transition duration-200"
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
