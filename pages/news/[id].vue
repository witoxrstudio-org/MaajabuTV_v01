<template>
  <section class="pt-16">
    <div class="flex items-center justify-center bg-black py-12 text-white">
      <div
        class="mx-auto grid max-w-4xl grid-cols-1 items-center gap-8 md:grid-cols-2"
        v-if="card"
      >
        <!-- Section de l'image -->
        <div class="relative mb-8 md:mb-0">
          <!-- Image principale de la carte -->
          <img
            :src="card.image"
            alt="Singer"
            class="h-auto w-full rounded-lg transition-all duration-300 hover:scale-110"
          />

          <!-- Image vectorielle en haut à gauche -->
          <img
            src="/img/Vector_4.png"
            alt="Vector 4"
            class="absolute left-2 top-2 z-10 h-10 w-10 sm:-left-4 sm:-top-4 md:h-16 md:w-16"
          />

          <!-- Image vectorielle en bas à droite -->
          <img
            src="/img/Vector_3.png"
            alt="Vector 3"
            class="absolute bottom-2 right-2 z-10 h-10 w-10 sm:-bottom-4 sm:-right-4 md:h-16 md:w-16"
          />
        </div>

        <!-- Section de texte -->
        <div class="text-center md:text-left">
          <h1 class="mb-2 text-3xl font-bold text-yellow-500 md:text-4xl">
            {{ card.title }}
          </h1>
          <h2 class="mb-4 text-lg font-semibold md:text-xl">Your Playlist, Your Mood</h2>

          <p class="mb-6 text-gray-300">
            Symphra brings you closer to the music you love, with personalized playlists,
            high-quality sound, and endless tracks to match every moment. Dive into a
            world where every beat, song, and melody is tailored just for you.
          </p>

          <!-- Statistiques -->
          <div class="grid grid-cols-3 gap-4 text-center">
            <div>
              <p class="text-2xl font-bold md:text-3xl">50M+</p>
              <p class="text-xs text-gray-400 md:text-sm">Tracks Streamed</p>
            </div>
            <div>
              <p class="text-2xl font-bold md:text-3xl">10M+</p>
              <p class="text-xs text-gray-400 md:text-sm">Listeners</p>
            </div>
            <div>
              <p class="text-2xl font-bold md:text-3xl">12M+</p>
              <p class="text-xs text-gray-400 md:text-sm">Downloads App</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p class="text-center text-xl font-bold text-gray-500">Chargement...</p>
      </div>
    </div>
    <div class="bg-black">
      <hosted />
    </div>
    <div class="bg-stone-800">
      <brands />
    </div>
    <div>
      <subscription />
    </div>
    <div>
      <laster />
    </div>
    <div class="rm-wrapper bg-stone-800">
      <lasterUnderLaster />
    </div>
  </section>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
const cards = [
  {
    id: "1",
    image: "/img/r1.png",
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    channel: "Maajabu TV",
  },
  {
    id: "2",
    image: "/img/r2.png",
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    channel: "Maajabu TV",
  },
  {
    id: "3",
    image: "/img/r3.png",
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    channel: "Maajabu TV",
  },
  {
    id: "4",
    image: "/img/r4.png",
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    channel: "Maajabu TV",
  },
  {
    id: "5",
    image: "/img/r5.png",
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    channel: "Maajabu TV",
  },
  {
    id: "6",
    image: "/img/r6.png",
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    channel: "Maajabu TV",
  },
  {
    id: "7",
    image: "/img/r7.png",
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    channel: "Maajabu TV",
  },
  {
    id: "8",
    image: "/img/r8.png",
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    channel: "Maajabu TV",
  },
];

const route = useRoute();
const router = useRouter();
const card = ref(null);

// Fonction pour obtenir la carte par ID
function fetchCardById(id) {
  card.value = cards.find((c) => c.id === id);
  if (!card.value) {
    router.push("/404");
  }
}

onMounted(() => {
  const id = route.params.id;
  fetchCardById(id);
});

// Ajouter à la playlist
const playlists = ref([]);

function addToPlaylist(card) {
  if (!playlists.value.some((item) => item.title === card.title)) {
    playlists.value.push(card);
  }
}
</script>

<style scoped>
button {
  transition: background-color 0.3s, color 0.3s;
}
</style>
