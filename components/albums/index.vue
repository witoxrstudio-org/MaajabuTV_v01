<template>
  <section class="bg-white px-10 py-6 max-w-6xl mx-auto w-full">
    <div class="bg-white max-w-6xl mx-4 sm:mx-2 py-6 px-4">
      <!-- Section Header -->
      <div class="flex items-center justify-between border-gray-200 py-4">
        <div
          class="w-1/3 sm:w-[35%] border-t border-gray-300 ml-4 mr-1 hidden sm:block"
        ></div>
        <h2
          class="text-xl sm:text-3xl font-bold text-yellow-500 transform transition duration-200 hover:scale-105"
        >
          {{ title }}
        </h2>
        <div
          class="w-1/3 sm:w-[35%] border-t border-gray-300 ml-4 mr-1 hidden sm:block"
        ></div>
      </div>
      <!-- Fin Section Header -->

      <div class="flex items-start gap-6 justify-between flex-wrap">
        <!-- Cards Section -->
        <div
          class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center"
        >
          <baseSlideTransition v-for="(card, index) in cards" :key="index">
            <div
              class="bg-white w-full sm:w-48 md:w-56 shadow-md overflow-hidden transform transition duration-200 hover:scale-105"
            >
              <img
                :src="card.image"
                :alt="card.title"
                class="w-full h-52 object-cover transition-all duration-300 hover:scale-110 hover:z-10 hover:shadow-lg"
              />
              <div class="p-3">
                <h3 class="text-md font-semibold">{{ card.title }}</h3>
                <p class="text-gray-500 text-sm">{{ card.description }}</p>
                <p class="text-gray-500 text-sm">
                  {{ card.followers }} Followers
                </p>
              </div>
              <div>
                <button
                  :class="card.buttonStyle"
                  class="mt-3 px-3 py-1.5 w-full text-sm"
                >
                  {{ card.buttonText }}
                </button>
              </div>
            </div>
          </baseSlideTransition>
        </div>

        <!-- Description & Navigation Section -->
        <!-- Description & Navigation Section -->
        <div class="flex flex-col justify-center text-center mt-8 sm:mt-0">
          <h2
            class="text-2xl font-bold text-yellow-500 transform transition duration-200 hover:scale-105 hover:text-yellow-500 hover:underline"
          >
            {{ title_2 }}
          </h2>
          <div class="text-black mt-2 space-y-1">
            <p v-html="formattedDesc"></p>
          </div>

          <!-- Navigation Section -->
          <div class="mt-8 flex items-center gap-4 justify-center">
            <!-- Flèche gauche -->
            <button
              class="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 bg-gray-200 flex items-center justify-center object-cover transition-all duration-300 hover:scale-110 hover:z-10 hover:shadow-lg"
            >
              <img
                src="public/img/Arrow - Left.png"
                alt="Flèche gauche"
                class="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6"
              />
            </button>

            <!-- Flèche droite -->
            <button
              class="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 bg-yellow-500 flex items-center justify-center object-cover transition-all duration-300 hover:scale-110 hover:z-10 hover:shadow-lg"
            >
              <img
                src="public/img/Arrow - Right.png"
                alt="Flèche droite"
                class="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const { t } = useI18n();
const title = ref(t("album.title"));
const title_2 = ref(t("album.title_2"));
const desc = ref(t("album.desc"));
const follow = ref(t("album.follow"));
const followed = ref(t("album.followed"));

const formatTextWithLineBreaks = (text) => {
  return text.replace(/(.{23})/g, "$1<br>");
};
const formattedDesc = computed(() => formatTextWithLineBreaks(desc.value));
const cards = [
  {
    image: "img/e1.png",
    title: "PSAUMES",
    description: "Story Life • 102 Podcast",
    followers: "535K",
    buttonText: "FOLLOWED",
    buttonStyle: "bg-black text-yellow-500",
  },
  {
    image: "img/e2.png",
    title: "DAYLY ARTIST",
    description: "Rimance • 94 Podcast",
    followers: "412K",
    buttonText: "FOLLOW",
    buttonStyle: "bg-white border border-black text-black",
  },
  {
    image: "img/e3.jpeg",
    title: "AMOUR INCONDITIONNEL",
    description: "Comedy • 152 Podcast",
    followers: "389",
    buttonText: "FOLLOW",
    buttonStyle: "bg-white border border-black text-black",
  },
];
</script>

