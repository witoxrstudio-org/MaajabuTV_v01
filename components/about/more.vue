<template>
  <section class="rm-container bg-white -pt-8 px-8 sm:px-6 md:px-8 relative">
    <!-- Upper Section Title -->
    <img
      src="public/img/Titik-titik.png"
      alt="Image"
      class="absolute opacity-50 -top-36 right-0 w-auto h-36 sm:h-28 md:h-36 transition duration-400 hover:scale-105"
    />
    <div class="max-w-2xl mx-auto p-6 sm:p-8 space-y-6">
      <p
        class="text-yellow-500 text-2xl sm:text-3xl font-semibold flex items-center justify-center text-center space-x-3 sm:space-x-4"
      >
        <span class="inline-block w-8 h-1 sm:w-10 bg-yellow-500"></span>
        <span
          class="transform transition duration-200 hover:scale-105 font-title"
        >
          {{ one }}
        </span>
      </p>

      <h1
        class="text-center text-3xl sm:text-5xl font-bold mt-8 sm:mt-10 mb-4 sm:mb-6 text-black transform transition duration-500 hover:scale-105"
      >
        {{ two }}
      </h1>

      <p
        class="text-base sm:text-lg text-black leading-relaxed text-center px-4 sm:px-0"
      >
        {{ three }}
      </p>
    </div>

    <div class="mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Première Colonne -->
      <div class="flex flex-col justify-between space-y-12">
        <div
          class="flex flex-col items-center text-center transform transition duration-200 hover:scale-105 hover:underline"
        >
          <div class="text-yellow-500 text-4xl mb-2">
            <img src="public/img/z1.png" alt="Trophy" class="w-12 h-auto" />
          </div>
          <h2 class="font-semibold text-lg">{{ about_icon_1 }}</h2>
          <p>
            {{ about_icon_desc1 }}
          </p>
        </div>
        <div
          class="flex flex-col items-center text-center transform transition duration-200 hover:scale-105 hover:underline"
        >
          <div class="text-yellow-500 text-4xl mb-2">
            <img src="public/img/z2.png" alt="Trophy" class="w-12 h-auto" />
          </div>
          <h2 class="font-semibold text-lg">{{ about_icon_2 }}</h2>
          <p>
            {{ about_icon_desc2 }}
          </p>
        </div>
      </div>

      <!-- Carte Centrale -->
      <div class="relative">
        <div
          class="bg-cover bg-center relative rounded-lg overflow-hidden shadow-lg"
          id="card"
        >
          <!-- Dégradé -->
          <div
            class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
          ></div>

          <!-- Icone en haut à droite -->
          <div
            class="absolute top-4 right-4 bg-yellow-500 text-white p-2 rounded-full"
          >
            🎶
          </div>

          <!-- Contenu de l'image (Titre et Auteur) -->
          <div class="absolute bottom-4 left-4 text-white">
            <h3 class="text-3xl font-bold">HakuniAcha</h3>
            <p class="text-sm">Maajabu Gospel</p>
            <p class="text-xl font-bold">Faveur Mukoko</p>
          </div>
        </div>

        <!-- Image source -->
        <img
          src="public/img/fav.png"
          alt="Carte image"
          class="hidden"
          id="imgSource"
        />
      </div>

      <!-- Troisième Colonne -->
      <div class="flex flex-col justify-between space-y-12">
        <div
          class="flex flex-col items-center text-center transform transition duration-200 hover:scale-105 hover:underline"
        >
          <div class="text-yellow-500 text-4xl mb-2">
            <img src="public/img/z3.png" alt="Trophy" class="w-12 h-auto" />
          </div>
          <h2 class="font-semibold text-lg">{{ about_icon_3 }}</h2>
          <p>{{ about_icon_desc3 }}</p>
        </div>
        <div
          class="flex flex-col items-center text-center transform transition duration-200 hover:scale-105 hover:underline"
        >
          <div class="text-yellow-500 text-4xl mb-2">
            <img src="public/img/z4.png" alt="Trophy" class="w-12 h-auto" />
          </div>
          <h2 class="font-semibold text-lg">{{ about_icon_4 }}</h2>
          <p>
            {{ about_icon_desc4 }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
const { t } = useI18n();
const one = ref(t("about.one"));
const two = ref(t("about.two"));
const three = ref(t("about.three"));
const about_icon_1 = ref(t("about.about_icon_1"));
const about_icon_desc1 = ref(t("about.about_icon_desc1"));
const about_icon_2 = ref(t("about.about_icon_2"));
const about_icon_desc2 = ref(t("about.about_icon_desc2"));
const about_icon_3 = ref(t("about.about_icon_3"));
const about_icon_desc3 = ref(t("about.about_icon_desc3"));
const about_icon_4 = ref(t("about.about_icon_4"));
const about_icon_desc4 = ref(t("about.about_icon_desc4"));

const localPath = useLocalePath();
</script>