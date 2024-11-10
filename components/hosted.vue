<template>
  <div class="rm-container text-white py-12">
    <!-- Header Section -->
    <div class="text-center mb-8">
      <p
        class="text-yellow-500 text-2xl font-semibold flex items-center justify-center text-center"
      >
        <span class="inline-block w-8 h-0.5 bg-yellow-500 mr-3"></span>
        <span
          class="transform transition duration-200 hover:scale-105 font-title"
        >
          Our host
        </span>
      </p>
      <h1 class="text-4xl font-bold">Meet the hosts and get the insight</h1>
    </div>
    <hr class="border-t-1 border-gray-500" />

    <!-- Hosts Section -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-items-center"
    >
      <div
        v-for="(host, index) in hosts"
        :key="index"
        class="p-4 w-72 text-center"
      >
        <img
          :src="host.image"
          :alt="host.title"
          class="mb-2 mx-auto transition-transform duration-300 hover:scale-105"
        />
        <h3
          class="text-xl font-bold text-yellow-500 transition-transform duration-300 hover:scale-105"
        >
          {{ host.title }}
        </h3>
        <p class="text-gray-400 text-sm mb-2 ">
          {{ host.description }}
        </p>
        <div class="flex justify-center space-x-2 text-yellow-500 p-2">
          <i class="fab fa-spotify"></i>
          <i class="fab fa-soundcloud"></i>
          <i class="fab fa-apple"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Données pour chaque carte
const hosts = [
  {
    title: "Rafiki",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: "/img/i1.png",
    icons: ["spotify", "facebook", "twitter"],
  },
  {
    title: "Week show",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: "/img/i2.png",
    icons: ["spotify", "facebook", "twitter"],
  },
  {
    title: "Coming soon...",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: "/img/i3.png",
    icons: ["spotify", "facebook", "twitter"],
  },
];
</script>
