<template>
  <section class="rm-container bg-white relative">
    <div v-if="card">
      <!-- Image de la carte -->
      <img
        :src="card.image"
        alt="Image de la carte"
        class="w-full h-72 object-cover mb-6"
      />

      <!-- Titre de la carte -->
      <h1 class="text-center text-3xl font-bold mb-4">{{ card.title }}</h1>

      <!-- Informations supplémentaires -->
      <p class="text-center text-gray-500 text-sm mb-2">
        Publié il y a : {{ card.time }}
      </p>
      <p class="text-center text-gray-700 text-base mb-4">
        Chaîne : {{ card.channel }}
      </p>

      <!-- Bouton pour ajouter à la playlist -->
      <div class="flex justify-center">
        <button
          @click="addToPlaylist(card)"
          class="bg-yellow-500 text-white px-6 py-2 rounded transition duration-300 hover:bg-yellow-600"
        >
          Ajouter à la playlist
        </button>
      </div>
    </div>
    <div v-else>
      <p class="text-center text-gray-500">Chargement...</p>
    </div>
  </section>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";

// Liste des cartes d'exemple (à remplacer par une requête API si nécessaire)
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
