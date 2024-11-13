<template>
  <div class="mj-container" id="rm-latest">
    <div
      class="relative z-10 mx-auto -mt-0 w-full max-w-6xl bg-white py-6 sm:-mt-16 md:shadow-md lg:-mt-20 lg:px-8"
    >
      <div class="max-w-6xl bg-white py-0 sm:mx-4 sm:px-4">
        <!-- Section Header -->

        <div
          class="flex items-center justify-between border-b border-gray-200 py-4"
        >
          <h2 class="text-xl font-bold text-yellow-600 sm:text-2xl">
            {{ title }}
          </h2>

          <NuxtLink
            to="/news"
            class="inline-block border border-yellow-500 px-3 py-1 text-center text-xs font-medium text-yellow-500 hover:bg-yellow-50 sm:px-4 sm:py-2 sm:text-sm"
          >
            {{ btn }}
          </NuxtLink>
        </div>
        <!-- Section Musics -->
        <div class="space-y-8 py-6">
          <div
            v-for="episode in episodes"
            :key="episode.id"
            class="flex flex-col items-start space-y-4 border-b pb-4 md:flex-row md:space-x-4 md:space-y-0"
          >
            <div class="w-full h-full md:w-24 md:h-24">
              <img
                :src="episode.image"
                alt="Album cover"
                class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div
              class="mt-4 h-full flex-1 flex-col justify-between text-center md:mt-0 md:text-left"
            >
              <div>
                <h3
                  class="text-base font-semibold transition-all duration-300 hover:translate-y-[-3px] hover:text-yellow-500 sm:text-lg"
                >
                  <NuxtLink :to="`/musics/${episode.id}`">
                    {{ episode.title }}</NuxtLink
                  >
                </h3>
                <p
                  class="mt-1 text-xs text-gray-600 transition-all duration-300 hover:translate-y-[-3px] hover:text-yellow-500 sm:text-sm"
                >
                  {{ episode.description }}
                </p>
              </div>
              <div
                class="mt-3 flex justify-center space-x-4 text-gray-400 sm:grid-cols-4 sm:space-x-1 md:flex md:justify-start md:space-x-1 md:text-left"
              >
                <div class="flex items-center space-x-2">
                  <i
                    class="fas fa-headphones h-5 w-5 transition-transform duration-300 hover:scale-110 hover:text-yellow-500"
                  ></i>
                  <span class="text-xs sm:text-sm">{{
                    episode.stats.listen
                  }}</span>
                </div>
                <div class="flex items-center space-x-2">
                  <i
                    class="fas fa-heart h-5 w-5 transition-transform duration-300 hover:scale-110 hover:text-red-500"
                  ></i>
                  <span class="text-xs sm:text-sm">{{
                    episode.stats.likes
                  }}</span>
                </div>
                <div class="flex items-center space-x-2">
                  <i
                    class="fas fa-comment h-5 w-5 transition-transform duration-300 hover:scale-110 hover:text-blue-500"
                  ></i>
                  <span class="text-xs sm:text-sm">{{
                    episode.stats.comments
                  }}</span>
                </div>
                <div class="flex items-center space-x-2">
                  <i
                    class="fas fa-download h-5 w-5 transition-transform duration-300 hover:scale-110 hover:text-green-500"
                  ></i>
                  <span class="text-xs sm:text-sm">{{
                    episode.stats.downloads
                  }}</span>
                </div>
              </div>
            </div>

            <!-- Bouton Lecture centré en dessous -->
            <button
              class="mt-10 flex h-14 w-14 items-center justify-center self-center rounded-full bg-gray-100 transition-colors duration-300 ease-in-out hover:bg-yellow-300 sm:h-16 sm:w-16"
            >
              <img
                src="/img/frame.png"
                alt="Play icon"
                class="h-6 w-6 sm:h-8 sm:w-8"
              />
            </button>
          </div>
        </div>

        <div class="mt-6 text-center">
          <NuxtLink
            to="/news"
            class="group relative inline-block overflow-hidden border-2 border-black bg-black px-4 py-2 text-sm font-semibold text-yellow-400 sm:px-6 sm:py-3 sm:text-base"
          >
            <span
              class="relative z-10 translate-x-full transform transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:text-black"
            >
              {{ btn_alt }}
            </span>
            <div
              class="absolute inset-0 h-full w-full translate-x-full transform bg-yellow-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0"
            ></div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { t } = useI18n();
const title = ref(t("latest.title"));
const btn = ref(t("latest.btn"));
const btn_alt = ref(t("latest.btn_alt"));

const episodes = ref([
  {
    id: 1,
    artist: "RUTH KIMONGOLI",
    duration: "46 min",
    episode: 10,
    title: "PLUS QU'UN CHANT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac neque sagittis...",
    image: "/img/al1.jpg",
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
  {
    id: 4,
    artist: "DAVID IZE",
    duration: "46 min",
    episode: 8,
    title: "BENGA NGAI",
    description:
      "Cras facilisis orci in arcu ullamcorper viverra. Maecenas vulputate risus...",
    image: "/img/al4.jpg",
    stats: {
      listen: "42K",
      likes: "10K",
      comments: "16K",
      downloads: "5.1K",
    },
  },
]);

defineProps({
  musics: {
    type: Array,
    default: [
      {
        title: "Je suis un titre",
        id: "2349495858",
      },
    ],
  },
});
</script>
