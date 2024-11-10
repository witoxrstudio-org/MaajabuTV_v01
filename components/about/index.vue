<template>
  <section class="rm-container bg-white px-8">
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

    <div class="flex flex-col lg:flex-row items-center lg:items-start gap-8">
      <!-- Left Image Section -->
      <div class="relative w-full lg:w-1/2 -top-8">
        <img
          src="public/img/about.png"
          alt="Maajabu Gospel"
          class="rounded-lg transform transition duration-400 hover:scale-105"
        />
      </div>

      <!-- Right Text Section -->
      <div class="w-full lg:w-1/2 space-y-4">
        <div class="relative flex items-center">
          <img
            src="public/img/mj.png"
            alt="Filigrane"
            class="absolute top-0 left-2/2 transform translate-x-5 -translate-y-8 w-auto h-16 z-10 transition duration-400 hover:scale-105"
          />
          <h3
            class="text-5xl font-bold font-inter text-gray-900 z-10 transform transition duration-400 hover:scale-105"
          >
            Maajabu
          </h3>
        </div>
        <div>
          <p class="text-gray-700 font-roboto text-justify ">
            {{ about }}
          </p>
          <p class="text-gray-700 font-roboto text-justify ">
            {{ abouter }}
          </p>
        </div>
        <button
          class="bg-yellow-500 text-white font-semibold py-2 px-6 shadow-md hover:bg-yellow-600 transform transition duration-400 hover:scale-105"
        >
          {{ bouton }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();
const menu = ref(t("menu.about"));
const about = ref(t("title.about"));
const abouter = ref(t("title.abouter"));
const bouton = ref(t("title.bouton_un"));
const localPath = useLocalePath();
</script>