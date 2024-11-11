<template>
  <section class="mx-auto w-full max-w-6xl bg-white py-6 sm:px-10">
    <div class="mj-container">
      <div class="bg-white py-6">
        <!-- Section Header -->
        <div class="flex items-center justify-between border-gray-200 py-4">
          <div class="hidden w-1/3 border-t border-gray-300 sm:block sm:w-[35%]"></div>
          <h2 class="text-xl font-bold text-yellow-500 sm:text-3xl">
            {{ title }}
          </h2>
          <div
            class="mr-1 hidden w-1/3 border-t border-gray-300 sm:block sm:w-[35%]"
          ></div>
        </div>
        <!-- Fin Section Header -->
      </div>
      <!-- Fin titre -->

      <!-- Grille de cartes -->
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <!-- Carte à gauche -->
        <div class="relative h-96 overflow-hidden">
          <img
            src="/img/c1.jpeg"
            alt="Music"
            class="h-full w-full object-cover transition-all duration-300 hover:z-10 hover:scale-110 hover:shadow-lg"
          />
          <div
            class="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-50 p-4 text-white backdrop-blur-md"
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
              class="h-full w-full object-cover transition-all duration-300 hover:z-10 hover:scale-110 hover:shadow-lg"
            />
            <div
              class="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-50 p-4 text-white backdrop-blur-md"
              style="top: 65%"
            >
              <h2 class="text-lg font-semibold">Clip du jours</h2>
              <p class="text-sm">55 CHANNELS</p>
            </div>
          </div>

          <!-- Carte du bas -->
          <div class="flex space-x-2">
            <!-- Story Life -->
            <div class="relative h-48 w-1/2 overflow-hidden">
              <img
                src="/img/c3.jpeg"
                alt="Story Life"
                class="h-full w-full object-cover transition-all duration-300 hover:z-10 hover:scale-110 hover:shadow-lg"
              />
              <div
                class="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-50 p-4 text-white backdrop-blur-md"
                style="top: 65%"
              >
                <h2 class="text-lg font-semibold">Story Life</h2>
                <p class="text-sm">24 CHANNELS</p>
              </div>
            </div>
            <!-- Concerts -->
            <div class="relative h-48 w-1/2 overflow-hidden">
              <img
                src="/img/c4.jpg"
                alt="Concerts"
                class="h-full w-full object-cover transition-all duration-300 hover:z-10 hover:scale-110 hover:shadow-lg"
              />
              <div
                class="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-50 p-4 text-white backdrop-blur-md"
                style="top: 65%"
              >
                <h2 class="text-lg font-semibold">Concerts</h2>
                <p class="text-sm">14 CHANNELS</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Carte à droite avec un bouton -->
        <div class="relative flex h-96 flex-col">
          <div class="relative flex-1 overflow-hidden">
            <img
              src="/img/c5.jpeg"
              alt="Music"
              class="h-full w-full object-cover transition-all duration-300 hover:z-10 hover:scale-110 hover:shadow-lg"
            />
            <div
              class="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-50 p-4 text-white backdrop-blur-md"
              style="top: 80%"
            >
              <h2 class="text-xl font-semibold">Music</h2>
              <p class="text-sm">70 CHANNELS</p>
            </div>
          </div>
          <!-- Le bouton sous la carte -->
          <button class="mt-auto bg-black px-4 py-3 font-semibold text-yellow-500">
            <span class="transition duration-300 hover:scale-110 hover:text-yellow-200">
              {{ btn }}
            </span>
          </button>
        </div>
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
