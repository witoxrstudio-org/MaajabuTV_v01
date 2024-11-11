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
        <div class="relative -top-24 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto">
          <img
            src="/img/pastor.png"
            alt="Maajabu Gospel"
            class="duration-400 transform rounded-lg transition hover:scale-105 w-full"
          />

          <!-- Card en bas à gauche avec compteur de reviews -->
          <div
            class="absolute bottom-2 left-4 sm:left-8 md:left-12 flex flex-col items-center bg-white p-2 sm:p-3 rounded-lg shadow-lg text-center"
          >
            <div class="flex space-x-1 sm:space-x-2">
              <img
                src="/img/profile_1.png"
                alt="Profile 1"
                class="w-10 h-10 sm:w-14 sm:h-14 rounded-full"
              />
              <img
                src="/img/profile_2.png"
                alt="Profile 2"
                class="w-10 h-10 sm:w-14 sm:h-14 rounded-full"
              />
            </div>
            <!-- Affichage du compteur de reviews -->
            <span
              class="mt-1 sm:mt-2 text-xs sm:text-sm font-semibold text-gray-700"
            >
              {{ reviewsCount }}+ reviews
            </span>
          </div>

          <!-- Card en haut à droite avec compteur de membres -->
          <div
            class="absolute top-20 sm:top-28 right-2 sm:-right-4 bg-white p-2 sm:p-3 rounded-lg shadow-lg flex flex-col items-center text-center"
          >
            <span class="text-xs font-medium text-gray-500"
              >Monthly Members</span
            >
            <span class="text-lg sm:text-2xl font-bold text-gray-800 mt-1">
              {{ membersCount }}+
            </span>
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
// Les Variables réactives pour les deux compteurs
const membersCount = ref(0);
const reviewsCount = ref(0);

onMounted(() => {
  // Compteur de membres (jusqu'à 5000)
  const targetMembers = 5000;
  const durationMembers = 2000;
  const incrementMembers = Math.ceil(targetMembers / (durationMembers / 16));

  const membersCounter = setInterval(() => {
    if (membersCount.value < targetMembers) {
      membersCount.value += incrementMembers;
    } else {
      membersCount.value = targetMembers;
      clearInterval(membersCounter);
    }
  }, 16);

  // Compteur de reviews (jusqu'à 8000)
  const targetReviews = 8000;
  const durationReviews = 2500;
  const incrementReviews = Math.ceil(targetReviews / (durationReviews / 16));

  const reviewsCounter = setInterval(() => {
    if (reviewsCount.value < targetReviews) {
      reviewsCount.value += incrementReviews;
    } else {
      reviewsCount.value = targetReviews;
      clearInterval(reviewsCounter);
    }
  }, 16);
});
</script>
