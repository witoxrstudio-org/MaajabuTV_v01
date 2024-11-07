<template>
  <section
    class="rm-container flex flex-col lg:flex-row items-center lg:justify-between bg-black text-white py-12 px-6 mb-16 lg:px-16 relative overflow-hidden"
  >
    <!-- Texte à gauche -->
    <div class="lg:w-1/2 space-y-6">
      <!-- Petite ligne avec texte -->
      <p class="text-yellow-500 font-semibold">Let's get started</p>

      <!-- Titre principal -->
      <h1 class="text-4xl lg:text-6xl font-bold">
        Now showing! <br />
        Let's share dreams
      </h1>

      <!-- Description -->
      <p class="text-lg text-gray-300">
        Available on Apple Soundcast and Spotify
      </p>

      <!-- Boutons -->
      <div class="flex space-x-4 mt-4">
        <button
          class="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-3 rounded-full font-semibold text-sm"
        >
          <i class="fab fa-spotify"></i> Spotify
        </button>
        <button
          class="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-3 rounded-full font-semibold text-sm"
        >
          <i class="fab fa-soundcloud"></i> SoundCloud
        </button>
        <button
          class="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-3 rounded-full font-semibold text-sm"
        >
          <i class="fab fa-apple"></i> Apple Podcast
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

<script>
export default {
  name: "HeroSection",
};
</script>
