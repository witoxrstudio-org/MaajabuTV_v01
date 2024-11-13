<template>
  <section class="mx-auto w-full max-w-6xl bg-white px-4 py-6 sm:px-10">
    <div class="max-w-6xl bg-white py-6 pb-12 sm:mx-2">
      <!-- Section Header -->
      <div class="flex items-center justify-between border-gray-200 py-4 pb-12">
        <div
          class="hidden w-1/3 border-t border-gray-300 sm:block sm:w-[35%]"
        ></div>
        <h2 class="text-xl font-bold text-yellow-500 sm:text-3xl">
          {{ title }}
        </h2>
        <div
          class="hidden w-1/3 border-t border-gray-300 sm:block sm:w-[35%]"
        ></div>
      </div>
      <!-- Fin Section Header -->

      <div class="items-start justify-between sm:flex sm:flex-wrap">
        <!-- Cards Section -->
        <div
          class="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3"
        >
          <div
            class="w-full border border-gray-200"
            v-for="(card, index) in cards"
            :key="index"
          >
            <div class="w-full overflow-hidden bg-white">
              <img
                :src="card.image"
                :alt="card.title"
                class="w-full h-full md:h-52 md:w-full object-cover transition-all duration-300 hover:z-10 hover:scale-110 hover:shadow-lg"
              />
              <div class="p-3">
                <h3 class="text-md font-semibold">{{ card.title }}</h3>
                <p class="text-sm text-gray-500">{{ card.description }}</p>
                <p class="text-sm text-gray-500">
                  {{ card.followers }} Followers
                </p>
              </div>
              <div>
                <button
                  :class="card.buttonStyle"
                  class="mt-3 w-full px-3 py-1.5 text-sm"
                >
                  {{ card.buttonText }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Description & Navigation Section -->
        <!-- Description & Navigation Section -->
        <div class="mt-8 flex flex-col justify-center text-center sm:mt-0">
          <h2 class="text-2xl font-bold text-yellow-500 hover:text-yellow-500">
            {{ title_2 }}
          </h2>
          <div class="mt-2 space-y-1 text-black">
            <p v-html="formattedDesc"></p>
          </div>

          <!-- Navigation Section -->
          <div class="mt-8 flex items-center justify-center gap-4">
            <!-- Flèche gauche -->
            <button
              class="flex h-8 w-8 items-center justify-center bg-gray-200 object-cover transition-all duration-300 hover:z-10 hover:scale-110 hover:shadow-lg md:h-10 md:w-10 lg:h-12 lg:w-12"
            >
              <img
                src="public/img/Arrow - Left.png"
                alt="Flèche gauche"
                class="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6"
              />
            </button>

            <!-- Flèche droite -->
            <button
              class="flex h-8 w-8 items-center justify-center bg-yellow-500 object-cover transition-all duration-300 hover:z-10 hover:scale-110 hover:shadow-lg md:h-10 md:w-10 lg:h-12 lg:w-12"
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
    image: "img/fol1.png",
    title: "PSAUMES",
    description: "Story Life • 102 Podcast",
    followers: "535K",
    buttonText: follow,
    buttonStyle: "bg-black text-yellow-500",
  },
  {
    image: "img/al3.jpg",
    title: "DAYLY ARTIST",
    description: "Rimance • 94 Podcast",
    followers: "412K",
    buttonText: followed,
    buttonStyle: "bg-white border border-black text-black",
  },
  {
    image: "img/fol3.png",
    title: "AMOUR INCONDITIONNEL",
    description: "Comedy • 152 Podcast",
    followers: "389",
    buttonText: follow,
    buttonStyle: "bg-white border border-black text-black",
  },
];
</script>
