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
  </section>
</template>

<script setup>
const { t } = useI18n();
const menu = ref(t("menu.news"));
const localPath = useLocalePath();
</script>