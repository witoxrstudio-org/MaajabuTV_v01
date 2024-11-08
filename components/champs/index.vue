<template>
  <section class="bg-white px-10 py-6 max-w-6xl mx-auto w-full">
    <div class="bg-white max-w-6xl mx-4 sm:mx-2 py-6 px-4">
      <!-- Section Header -->
      <div class="flex items-center justify-between border-gray-200 py-4">
        <div
          class="w-1/3 sm:w-[35%] border-t border-gray-300 ml-4 mr-1 hidden sm:block"
        ></div>
        <h2
          class="text-xl sm:text-3xl font-bold text-yellow-600 transform transition duration-200 hover:scale-105"
        >
          {{ title }}
        </h2>
        <div
          class="w-1/3 sm:w-[35%] border-t border-gray-300 ml-4 mr-1 hidden sm:block"
        ></div>
      </div>
      <!-- Fin Section Header -->
    </div>
    <!-- Fin titre -->

    <!-- Grille de cartes -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <!-- Carte à gauche -->
      <div class="relative h-96 overflow-hidden">
        <img
          src="/img/c1.jpeg"
          alt="Music"
          class="object-cover w-full h-full transition-all duration-300 hover:scale-110 hover:z-10 hover:shadow-lg"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white backdrop-blur-md"
          style="top: 80%"
        >
          <h2 class="text-xl font-semibold">Music</h2>
          <p class="text-sm">70 CHANNELS</p>
        </div>
      </div>

      <!-- Carte centrale avec 3 cartes -->
      <div class="flex flex-col justify-between space-y-4">
        <!-- Carte du haut -->
        <div class="relative h-48 overflow-hidden">
          <img
            src="/img/c2.jpg"
            alt="Clip du jours"
            class="object-cover w-full h-full transition-all duration-300 hover:scale-110 hover:z-10 hover:shadow-lg"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white backdrop-blur-md"
            style="top: 65%"
          >
            <h2 class="text-lg font-semibold">Clip du jours</h2>
            <p class="text-sm">55 CHANNELS</p>
          </div>
        </div>

        <!-- Carte du bas -->
        <div class="flex space-x-2">
          <!-- Story Life -->
          <div class="relative w-1/2 h-48 overflow-hidden">
            <img
              src="/img/c3.jpeg"
              alt="Story Life"
              class="object-cover w-full h-full transition-all duration-300 hover:scale-110 hover:z-10 hover:shadow-lg"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white backdrop-blur-md"
              style="top: 65%"
            >
              <h2 class="text-lg font-semibold">Story Life</h2>
              <p class="text-sm">24 CHANNELS</p>
            </div>
          </div>
          <!-- Concerts -->
          <div class="relative w-1/2 h-48 overflow-hidden">
            <img
              src="/img/c4.jpg"
              alt="Concerts"
              class="object-cover w-full h-full transition-all duration-300 hover:scale-110 hover:z-10 hover:shadow-lg"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white backdrop-blur-md"
              style="top: 65%"
            >
              <h2 class="text-lg font-semibold">Concerts</h2>
              <p class="text-sm">14 CHANNELS</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Carte à droite avec un bouton -->
      <div class="relative h-96 flex flex-col">
        <div class="flex-1 relative overflow-hidden">
          <img
            src="/img/c5.jpeg"
            alt="Music"
            class="object-cover w-full h-full transition-all duration-300 hover:scale-110 hover:z-10 hover:shadow-lg"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white backdrop-blur-md"
            style="top: 80%"
          >
            <h2 class="text-xl font-semibold">Music</h2>
            <p class="text-sm">70 CHANNELS</p>
          </div>
        </div>
        <!-- Le bouton sous la carte -->
        <button
          class="bg-black text-yellow-500 font-semibold px-4 py-3 mt-auto"
        >
          <span
            class="hover:text-yellow-200 transition duration-300 hover:scale-110"
          >
            {{ btn }}
          </span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();
const title = ref(t("champs.title"));
const btn = ref(t("champs.btn"));
</script>

<style scoped>
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.relative {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

button {
  width: 100%;
  margin-top: 1rem;
}
.relative .flex-1 {
  flex: 1 1 90%;
}
h2,
p {
  text-align: center;
}
</style>
