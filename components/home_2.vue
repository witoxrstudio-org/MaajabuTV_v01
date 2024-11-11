<template>
  <!-- Titre principal responsive -->
  <div>
    <div class="mb-4">
      <h1 class="mt-6 text-center text-3xl font-bold sm:text-5xl md:text-2xl lg:text-6xl">
        {{ title }}
      </h1>
      <h1 class="mt-6 text-center text-3xl font-bold sm:text-5xl md:text-2xl lg:text-6xl">
        {{ titles }}
      </h1>
    </div>

    <!-- La Section des cartes avec gradient et filigrane -->
    <div
      class="relative mt-10 flex flex-wrap justify-center space-y-4 sm:space-x-0 sm:space-y-0 md:space-x-4"
    >
      <div
        v-for="(person, index) in people"
        :key="index"
        :class="[
          'relative bg-gradient-to-b from-transparent to-yellow-400 w-40 h-60 md:w-60 md:h-80 overflow-hidden m-2  hover:shadow-lg',
          index === 0 || index === 2
            ? '-translate-y-4 sm:-translate-y-6 md:-translate-y-8'
            : '',
        ]"
      >
        <img
          :src="person.image"
          :alt="person.name"
          class="h-full w-full object-cover opacity-75 transition-all duration-300 hover:scale-110"
        />
        <div class="absolute bottom-0 p-4 text-left text-white">
          <h2
            class="text-lg font-semibold transition duration-300 hover:text-yellow-300 md:text-xl"
          >
            {{ person.name }}
          </h2>
          <p class="text-sm">{{ person.role }}</p>
        </div>
      </div>

      <!-- "MAAJABU TV" -->
      <div
        class="font-train absolute font-bold text-white opacity-20"
        :class="[
          'flex items-center justify-start text-4xl md:text-7xl',
          'left-1 md:left-0',
          'top-auto bottom-12',
        ]"
        style="transform: translateY(100px)"
      >
        MAAJABU TV
      </div>
    </div>

    <!-- Bouton Spotify -->
    <div class="mb-36 mt-10 flex justify-center">
      <button
        class="flex transform items-center space-x-2 bg-yellow-400 px-4 py-3 font-semibold text-black transition-transform duration-300 hover:bg-yellow-500"
      >
        <img src="/img/spotify.png" alt="Spotify Icon" class="h-5 w-5" />
        <span>Connect Spotify</span>
      </button>
    </div>
  </div>
</template>
<script setup>
const { t } = useI18n();
// Déclaration des variables réactives
const menuOpen = ref(false);
const people = [
  {
    name: "PASTOR MIKE KALAMBAY",
    role: "PODCASTMASTER",
    image: "/img/pastor-mike.png",
  },
  {
    name: "SISTER DEBORAH LUKALU",
    role: "GIRLSPOD",
    image: "/img/deborah.png",
  },
  { name: "PASTOR DAVID IZE", role: "AMERICANOPOD", image: "/img/david.png" },
  { name: "SISTER ROSNY", role: "BARBARPOD", image: "/img/rosny.png" },
];
const toggleMenu = (value) => {
  menuOpen.value = value;
};
// Le Titre
const title = ref(t("title.title"));
const titles = ref(t("title.titles"));
</script>
