<template>
  <section>
    <div class="rm-wrapper bg-black text-white">
      <Navbar @toggleMenu="toggleMenu" />
    </div>
    <div class="flex items-center justify-center bg-black py-12 text-white">
      <div
        class="mx-auto grid max-w-4xl grid-cols-1 items-center gap-8 md:grid-cols-2"
        v-if="episode"
      >
        <!-- Section de l'image -->
        <div class="relative mb-8 md:mb-0">
          <!-- Image principale de l'épisode -->
          <img
            :src="episode.image"
            :alt="episode.title"
            class="h-auto w-full rounded-lg transition-all duration-300 hover:grayscale"
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
            {{ episode.title }}
          </h1>
          <h2 class="mb-4 text-lg font-semibold md:text-xl">
            {{ episode.artist }}
          </h2>
          <p class="mb-6 text-gray-300 ">
            {{ episode.description }}
          </p>

          <!-- Statistiques -->
          <div
            class="grid grid-cols-1 gap-2 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            <div>
              <p class="text-2xl font-bold md:text-3xl">
                {{ episode.stats.listen }}
              </p>
              <p class="text-xs text-gray-400 md:text-sm">Écoutes</p>
            </div>
            <div>
              <p class="text-2xl font-bold md:text-3xl">
                {{ episode.stats.likes }}
              </p>
              <p class="text-xs text-gray-400 md:text-sm">J'aime</p>
            </div>
            <div>
              <p class="text-2xl font-bold md:text-3xl">
                {{ episode.stats.comments }}
              </p>
              <p class="text-xs text-gray-400 md:text-sm">Commentaires</p>
            </div>
            <div>
              <p class="text-2xl font-bold md:text-3xl">
                {{ episode.stats.downloads }}
              </p>
              <p class="text-xs text-gray-400 md:text-sm">Téléchargements</p>
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
    description: "Quisque sit amet lacus luctus, ultrices eros ac, laoreet sem...",
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
