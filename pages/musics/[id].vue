<template>
  <section>
    <div class="rm-wrapper bg-black text-white">
      <Navbar @toggleMenu="toggleMenu" />
    </div>
    <div class="flex justify-center items-center bg-black text-white py-12">
      <div
        class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        v-if="episode"
      >
        <!-- Section de l'image -->
        <div class="relative mb-8 md:mb-0">
          <!-- Image principale de l'épisode -->
          <img
            :src="episode.image"
            :alt="episode.title"
            class="rounded-lg w-full h-auto transition-all duration-300 hover:grayscale"
          />

          <!-- Image vectorielle en haut à gauche -->
          <img
            src="/img/vector_4.png"
            alt="Vector 4"
            class="absolute top-2 left-2 sm:-top-4 sm:-left-4 md:w-16 md:h-16 w-10 h-10 z-10"
          />

          <!-- Image vectorielle en bas à droite -->
          <img
            src="/img/vector_3.png"
            alt="Vector 3"
            class="absolute bottom-2 right-2 sm:-bottom-4 sm:-right-4 md:w-16 md:h-16 w-10 h-10 z-10"
          />
        </div>

        <!-- Section de texte -->
        <div class="text-center md:text-left">
          <h1 class="text-yellow-500 text-3xl md:text-4xl font-bold mb-2">
            {{ episode.title }}
          </h1>
          <h2 class="text-lg md:text-xl font-semibold mb-4">
            {{ episode.artist }}
          </h2>
          <p class="text-gray-300 mb-6 hover:underline">
            {{ episode.description }}
          </p>

          <!-- Statistiques -->
          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-center"
          >
            <div>
              <p class="text-2xl md:text-3xl font-bold">
                {{ episode.stats.listen }}
              </p>
              <p class="text-gray-400 text-xs md:text-sm">Écoutes</p>
            </div>
            <div>
              <p class="text-2xl md:text-3xl font-bold">
                {{ episode.stats.likes }}
              </p>
              <p class="text-gray-400 text-xs md:text-sm">J'aime</p>
            </div>
            <div>
              <p class="text-2xl md:text-3xl font-bold">
                {{ episode.stats.comments }}
              </p>
              <p class="text-gray-400 text-xs md:text-sm">Commentaires</p>
            </div>
            <div>
              <p class="text-2xl md:text-3xl font-bold">
                {{ episode.stats.downloads }}
              </p>
              <p class="text-gray-400 text-xs md:text-sm">Téléchargements</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p class="text-center text-xl text-gray-500 font-bold">Chargement...</p>
      </div>
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
    <div class="bg-stone-800 rm-wrapper">
      <lasterUnderLaster />
    </div>
  </section>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const episodes = ref([
  {
    id: 1,
    artist: "SHEKINAH MPIANA",
    duration: "46 min",
    episode: 10,
    title: "Désormais",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac neque sagittis...",
    image: "/img/a1.png",
    stats: {
      listen: "8.9K",
      likes: "2.1K",
      comments: "982K",
      downloads: "284K",
    },
  },
  {
    id: 2,
    artist: "LORD LOMBO",
    duration: "34 min",
    episode: 9,
    title: "CELEBRONS HEBRON AUJOURD'HUI",
    description:
      "Quisque sit amet lacus luctus, ultrices eros ac, laoreet sem...",
    image: "/img/a2.png",
    stats: {
      listen: "24K",
      likes: "3.2K",
      comments: "5.6K",
      downloads: "1.9K",
    },
  },
  {
    id: 3,
    artist: "FAVEUR MUKOKO",
    duration: "46 min",
    episode: 8,
    title: "Hakuniacaha",
    description:
      "Cras facilisis orci in arcu ullamcorper viverra. Maecenas vulputate risus...",
    image: "/img/a3.png",
    stats: {
      listen: "42K",
      likes: "10K",
      comments: "16K",
      downloads: "5.1K",
    },
  },
]);

const route = useRoute();
const router = useRouter();
const episode = ref(null);

// Fonction pour obtenir l'épisode par ID
function fetchEpisodeById(id) {
  episode.value = episodes.value.find((e) => e.id === id);
  if (!episode.value) {
    router.push("/404");
  }
}

onMounted(() => {
  const id = parseInt(route.params.id);
  fetchEpisodeById(id);
});

// Ajouter à la playlist
const playlists = ref([]);

function addToPlaylist(episode) {
  if (!playlists.value.some((item) => item.title === episode.title)) {
    playlists.value.push(episode);
  }
}
</script>

<style scoped>
button {
  transition: background-color 0.3s, color 0.3s;
}
</style>
