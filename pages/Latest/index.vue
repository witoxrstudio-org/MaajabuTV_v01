<template>
  <div class="rm-container" id="rm-latest">
    <div
      class="bg-white md:shadow-md lg:px-10 py-6 max-w-6xl mx-auto w-full relative z-10 -mt-0 sm:-mt-16 lg:-mt-20"
    >
      <div class="bg-white max-w-6xl sm:mx-4 py-6 sm:px-4">
        <!-- Section Header -->

        <div
          class="flex items-center justify-between border-b border-gray-200 py-4"
        >
          <h2
            class="text-xl sm:text-2xl font-bold text-yellow-600 transform transition duration-200 hover:scale-105"
          >
            {{ title }}
          </h2>

          <!-- Ligne séparatrice centrée avec décalage vers le bouton -->
          <div
            class="w-1/3 sm:w-[35%] border-t border-gray-300 ml-4 mr-1 hidden sm:block"
          ></div>

          <button
            class="border border-yellow-500 text-yellow-500 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium hover:bg-yellow-50 transform transition duration-200 hover:scale-105"
          >
            {{ btn }}
          </button>
        </div>
        <!-- Section Musics -->
        <div class="py-6 space-y-8">
          <div
            v-for="episode in episodes"
            :key="episode.id"
            class="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4 border-b pb-4"
          >
            <img
              :src="episode.image"
              alt="Album cover"
              class="w-full h-64 sm:h-80 md:w-40 md:h-40 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div class="flex-1 mt-4 md:mt-0 text-center md:text-left">
              <h3
                class="text-base sm:text-lg font-semibold hover:text-yellow-500 hover:underline hover:translate-y-[-3px] transition-all duration-300"
              >
                <NuxtLink :to="`/musics/${episode.id}`">
                  {{ episode.title }}</NuxtLink
                >
              </h3>
              <p
                class="text-gray-600 mt-1 text-xs sm:text-sm hover:text-yellow-500 hover:underline hover:translate-y-[-3px] transition-all duration-300"
              >
                {{ episode.description }}
              </p>
              <div
                class="grid grid-cols-4 gap-4 mt-3 text-gray-400 sm:grid-cols-4 sm:space-x-1 md:space-x-1 md:flex md:text-left"
              >
                <div class="flex items-center space-x-2">
                  <i
                    class="fas fa-headphones w-5 h-5 transition-transform duration-300 hover:text-yellow-500 hover:scale-110"
                  ></i>
                  <span class="text-xs sm:text-sm">{{
                    episode.stats.listen
                  }}</span>
                </div>

                <div class="flex items-center space-x-2">
                  <i
                    class="fas fa-heart w-5 h-5 transition-transform duration-300 hover:text-red-500 hover:scale-110"
                  ></i>
                  <span class="text-xs sm:text-sm">{{
                    episode.stats.likes
                  }}</span>
                </div>

                <div class="flex items-center space-x-2">
                  <i
                    class="fas fa-comment w-5 h-5 transition-transform duration-300 hover:text-blue-500 hover:scale-110"
                  ></i>
                  <span class="text-xs sm:text-sm">{{
                    episode.stats.comments
                  }}</span>
                </div>

                <div class="flex items-center space-x-2">
                  <i
                    class="fas fa-download w-5 h-5 transition-transform duration-300 hover:text-green-500 hover:scale-110"
                  ></i>
                  <span class="text-xs sm:text-sm">{{
                    episode.stats.downloads
                  }}</span>
                </div>
              </div>
            </div>

            <!-- Bouton Lecture centré en dessous -->
            <button
              class="flex self-center items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-full mt-10 hover:bg-yellow-300 hover:scale-105 transition-colors duration-300 ease-in-out"
            >
              <img
                src="/img/frame.png"
                alt="Play icon"
                class="w-6 h-6 sm:w-8 sm:h-8"
              />
            </button>
          </div>
        </div>

        <div class="mt-6 text-center">
          <button
            class="relative inline-block px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-yellow-400 bg-black border-2 border-black overflow-hidden group"
          >
            <span
              class="relative z-10 transition-all duration-300 ease-in-out group-hover:text-black group-hover:translate-x-0 transform translate-x-full"
            >
              {{ btn_alt }}
            </span>
            <div
              class="absolute inset-0 w-full h-full bg-yellow-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
            ></div>
          </button>
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
