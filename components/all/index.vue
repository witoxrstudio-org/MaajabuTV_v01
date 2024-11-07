<template>
  <section class="rm-container bg-white py-16 px-8 relative">
    <img
      src="public/img/wellness.png"
      alt="Filigrane"
      class="absolute top-10 left-10 w-32 h-32 z-10"
    />
    <!-- Upper Section Title -->
    <p
      class="text-yellow-500 text-2xl font-semibold flex items-center justify-center text-center"
    >
      <span class="inline-block w-8 h-0.5 bg-yellow-500 mr-3"></span>
      <span
        class="transform transition duration-200 hover:scale-105 font-title"
      >
        {{ menu }}
      </span>
    </p>
    <h1
      class="text-center text-3xl font-bold mb-12 transform transition duration-400 hover:scale-105"
    >
      {{ menu }}
    </h1>
    <div>
      <!-- Les Boutons -->
      <div class="flex space-x-4 justify-center text-center">
        <button
          v-for="(button, index) in buttons"
          :key="index"
          :class="
            activeButton === button.value
              ? 'bg-yellow-500 text-white'
              : 'bg-gray-200 text-black'
          "
          @click="setActiveButton(button.value)"
          class="px-4 py-2 transition duration-300"
        >
          {{ button.label }}
        </button>
      </div>
      <!-- Le Contenu -->
      <div class="mt-4">
        <p v-if="activeButton === 'recent'">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p v-if="activeButton === 'new'">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p v-if="activeButton === 'playlists'">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();
const menu = ref(t("menu.news"));
const activeButton = ref("recent");

const buttons = [
  { value: "recent", label: "Les Plus récents" },
  { value: "new", label: "Toutes les Nouveautés" },
  { value: "playlists", label: "Mes PlayLists" },
];

function setActiveButton(button) {
  activeButton.value = button;
}
</script>

<style scoped>
button {
  transition: background-color 0.3s, color 0.3s;
}
</style>
