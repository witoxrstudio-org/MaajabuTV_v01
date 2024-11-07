<template>
  <section class="rm-container bg-white -pt-8 px-8 sm:px-6 md:px-8 relative">
    <!-- Upper Section Title -->
    <img
      src="public/img/Titik-titik.png"
      alt="Image"
      class="absolute opacity-50 -top-36 right-0 w-auto h-36 sm:h-28 md:h-36 transition duration-400 hover:scale-105"
    />
    <p
      class="text-yellow-500 text-2xl sm:text-2xl font-semibold flex items-center justify-center text-center"
    >
      <span class="inline-block w-8 h-0.5 bg-yellow-500 mr-3"></span>
      <span
        class="transform transition duration-200 hover:scale-105 font-title"
      >
        {{ one }}
      </span>
    </p>
  </section>
</template>


<script setup>
const { t } = useI18n();
const one = ref(t("about.one"));

const localPath = useLocalePath();
</script>