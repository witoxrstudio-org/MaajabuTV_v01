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
        <baseSlideTransition>
          <div v-if="activeButton === 'recent'">
            <div class="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div
                v-for="(card, index) in cards"
                :key="index"
                class="bg-white shadow-md overflow-hidden max-w-xs mx-auto hover:text-yellow-500 hover:underline cursor-pointer"
                @click="addToPlaylist(card)"
              >
                <img
                  :src="card.image"
                  alt="Card Image"
                  class="w-full h-36 object-cover transform transition duration-200 hover:scale-105"
                />
                <div class="p-3">
                  <h3 class="font-semibold text-sm mb-1">{{ card.title }}</h3>
                  <p class="text-gray-500 text-xs mb-1">{{ card.time }}</p>
                  <div class="flex items-center mt-2">
                    <img
                      :src="card.channelAvatar"
                      alt="Channel Avatar"
                      class="w-6 h-6 rounded-full mr-2"
                    />
                    <p class="text-gray-700 text-xs">{{ card.channel }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </baseSlideTransition>
        <baseZoomTransition>
          <div v-if="activeButton === 'new'">
            <div class="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div
                v-for="(card, index) in cards"
                :key="index"
                class="bg-white shadow-md overflow-hidden max-w-xs mx-auto hover:text-yellow-500 hover:underline cursor-pointer"
                @click="addToPlaylist(card)"
              >
                <img
                  :src="card.image"
                  alt="Card Image"
                  class="w-full h-36 object-cover transform transition duration-200 hover:scale-105"
                />
                <div class="p-3">
                  <h3 class="font-semibold text-sm mb-1">{{ card.title }}</h3>
                  <p class="text-gray-500 text-xs mb-1">{{ card.time }}</p>
                  <div class="flex items-center mt-2">
                    <img
                      :src="card.channelAvatar"
                      alt="Channel Avatar"
                      class="w-6 h-6 rounded-full mr-2"
                    />
                    <p class="text-gray-700 text-xs">{{ card.channel }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </baseZoomTransition>
        <baseSlideTransition>
          <div v-if="activeButton === 'playlists'">
            <div v-if="playlists.length === 0">
              <p class="text-center text-gray-500">
                Aucune carte dans la playlist.
              </p>
            </div>
            <div
              class="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              v-else
            >
              <div
                v-for="(card, index) in playlists"
                :key="index"
                class="bg-white shadow-md overflow-hidden max-w-xs mx-auto"
              >
                <img
                  :src="card.image"
                  alt="Card Image"
                  class="w-full h-36 object-cover"
                />
                <div class="p-3">
                  <h3 class="font-semibold text-sm mb-1">{{ card.title }}</h3>
                  <p class="text-gray-500 text-xs mb-1">{{ card.time }}</p>
                  <div class="flex items-center mt-2">
                    <p class="text-gray-700 text-xs">{{ card.channel }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </baseSlideTransition>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();
const menu = ref(t("menu.news"));
const btn_1 = ref(t("news.btn1"));
const btn_2 = ref(t("news.btn2"));
const btn_3 = ref(t("news.btn3"));

const activeButton = ref("recent");

const buttons = [
  { value: "recent", label: btn_1 },
  { value: "new", label: btn_2 },
  { value: "playlists", label: btn_3 },
];

function setActiveButton(button) {
  activeButton.value = button;
}
const cards = [
  {
    image: "/img/r1.png",
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    channel: "Maajabu TV",
  },
  {
    image: "/img/r2.png",
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    channel: "Maajabu TV",
  },
  {
    image: "/img/r3.png",
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    channel: "Maajabu TV",
  },
  {
    image: "/img/r4.png",
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    channel: "Maajabu TV",
  },
  {
    image: "/img/r5.png",
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    channel: "Maajabu TV",
  },
  {
    image: "/img/r6.png",
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    channel: "Maajabu TV",
  },
  {
    image: "/img/r7.png",
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    channel: "Maajabu TV",
  },
  {
    image: "/img/r8.png",
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    channel: "Maajabu TV",
  },
];
const playlists = ref([]);
function addToPlaylist(card) {
  // Évite d'ajouter des duplications dans la playlist
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
