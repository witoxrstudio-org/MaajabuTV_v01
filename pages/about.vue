<template>
  <div class="pt-32">
    <section class="mj-container bg-white px-8">
      <!-- Upper Section Title -->
      <p
        class="flex items-center justify-center text-center font-semibold text-yellow-500"
      >
        <span class="mr-3 inline-block h-0.5 w-8 bg-yellow-500"></span>
        <span class="font-title">
          {{ menu }}
        </span>
      </p>
      <h1
        class="duration-400 mb-12 transform text-center text-4xl font-bold transition hover:scale-105 sm:text-5xl"
      >
        {{ menu }}
      </h1>

      <div
        class="flex flex-col items-center gap-8 pt-8 lg:flex-row lg:items-start"
      >
        <!-- Left Image Section -->
        <!-- <div class="relative -top-24 w-full lg:w-1/2">
          <img
            src="public/img/pastor.png"
            alt="Maajabu Gospel"
            class="duration-400 transform rounded-lg transition hover:scale-105"
          />
        </div> -->
        <div class="relative -top-24 w-full lg:w-1/2">
          <img
            src="/img/pastor.png"
            alt="Maajabu Gospel"
            class="duration-400 transform rounded-lg transition hover:scale-105"
          />

          <!-- Card en bas à gauche -->
          <div
            class="absolute bottom-2 left-12 flex flex-col items-center bg-white p-3 rounded-lg shadow-lg"
          >
            <div class="flex space-x-2">
              <img
                src="/img/profile_1.png"
                alt="Profile 1"
                class="w-14 h-14 rounded-full"
              />
              <img
                src="/img/profile_2.png"
                alt="Profile 2"
                class="w-14 h-14 rounded-full"
              />
            </div>
            <span class="mt-2 text-sm font-semibold text-gray-700 text-center"
              >8000+ reviews</span
            >
          </div>

          <!-- Nouveau card en haut à droite -->
          <div
            class="absolute top-2 right-2 bg-white p-3 rounded-lg shadow-lg flex flex-col items-center"
          >
            <span class="text-sm font-semibold text-gray-700">New Feature</span>
            <p class="mt-1 text-xs text-gray-500 text-center">
              Explore our latest update!
            </p>
          </div>
        </div>

        <!-- Right Text Section -->
        <div class="w-full space-y-4 lg:w-1/2">
          <div class="relative flex items-center">
            <img
              src="public/img/mj.png"
              alt="Filigrane"
              class="left-2/2 duration-400 absolute top-0 z-10 h-16 w-auto -translate-y-8 translate-x-5 transform transition hover:scale-105"
            />
            <h3
              class="font-inter duration-400 z-10 transform text-3xl font-bold text-gray-900 transition hover:scale-105"
            >
              Maajabu
            </h3>
          </div>
          <div>
            <p class="font-roboto text-justify text-gray-700">
              {{ about }}
            </p>
            <p class="font-roboto text-justify text-gray-700">
              {{ abouter }}
            </p>
          </div>
          <button
            class="duration-400 transform bg-yellow-500 px-6 py-2 font-semibold text-white shadow-md transition hover:scale-105 hover:bg-yellow-600"
          >
            {{ bouton }}
          </button>
        </div>
      </div>
    </section>
    <div class="rm-wrapper bg-slate-50">
      <aboutMore />
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
const menu = ref(t("menu.about"));
const about = ref(t("title.about"));
const abouter = ref(t("title.abouter"));
const bouton = ref(t("title.bouton_un"));
const localPath = useLocalePath();
</script>
