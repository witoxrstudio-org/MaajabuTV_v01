<template>
  <div class="pb-24 pt-32">
    <div class="rm-wrapper">
      <div class="mj-container relative bg-white">
        <img
          src="public/img/wellness.png"
          alt="Filigrane"
          class="absolute left-10 top-10 z-10 h-32 w-32"
        />
        <!-- Upper Section Title -->
        <p
          class="flex items-center justify-center text-center text-sm font-semibold text-yellow-500"
        >
          <span class="mr-3 inline-block h-0.5 w-8 bg-yellow-500"></span>
          <span class="font-title">
            {{ menu }}
          </span>
        </p>
        <h1
          class="duration-400 mb-12 transform text-center text-3xl font-bold transition hover:scale-105"
        >
          {{ menu }}
        </h1>
        <div>
          <!-- Les Boutons -->
          <div class="flex justify-center space-x-4 text-center">
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
          <div class="mt-4 pb-24 pt-8">
            <div v-if="activeButton === 'recent'">
              <div class="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                <NuxtLink
                  v-for="(card, index) in cards"
                  to="#"
                  :key="index"
                  class="mx-auto max-w-xs cursor-pointer overflow-hidden bg-white shadow-md hover:text-yellow-500"
                  @click="addToPlaylist(card)"
                >
                  <img
                    :src="card.image"
                    alt="Card Image"
                    class="h-36 w-full object-cover"
                  />
                  <div class="p-3">
                    <h3 class="mb-1 text-sm font-semibold">
                      {{ card.title }}
                    </h3>
                    <p class="mb-1 text-xs text-gray-500">{{ card.time }}</p>
                    <div class="mt-2 flex items-center">
                      <p class="text-xs text-gray-700">{{ card.channel }}</p>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
            <div v-if="activeButton === 'new'">
              <div class="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                <NuxtLink
                  v-for="(card, index) in cards"
                  to="#"
                  :key="index"
                  class="mx-auto max-w-xs cursor-pointer overflow-hidden bg-white shadow-md hover:text-yellow-500"
                  @click="addToPlaylist(card)"
                >
                  <img
                    :src="card.image"
                    alt="Card Image"
                    class="h-36 w-full object-cover"
                  />
                  <div class="p-3">
                    <h3 class="mb-1 text-sm font-semibold">
                      {{ card.title }}
                    </h3>
                    <p class="mb-1 text-xs text-gray-500">{{ card.time }}</p>
                    <div class="mt-2 flex items-center">
                      <p class="text-xs text-gray-700">{{ card.channel }}</p>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>

            <div v-if="activeButton === 'playlists'">
              <div v-if="playlists.length === 0">
                <p class="text-center text-gray-500">Aucune carte dans la playlist.</p>
              </div>
              <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4" v-else>
                <NuxtLink
                  v-for="(card, index) in playlists"
                  to="#"
                  :key="index"
                  class="mx-auto max-w-xs overflow-hidden bg-white shadow-md"
                >
                  <img
                    :src="card.image"
                    alt="Card Image"
                    class="h-36 w-full object-cover"
                  />
                  <div class="p-3">
                    <h3 class="mb-1 text-sm font-semibold">
                      {{ card.title }}
                    </h3>
                    <p class="mb-1 text-xs text-gray-500">{{ card.time }}</p>
                    <div class="mt-2 flex items-center">
                      <p class="text-xs text-gray-700">{{ card.channel }}</p>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  </div>
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
