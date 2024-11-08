<!-- components/Card.vue -->
<template>
  <div class="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <div
      class="bg-white shadow-md overflow-hidden max-w-xs mx-auto hover:text-yellow-500 hover:underline cursor-pointer"
    >
      <img
        :src="card.image"
        alt="Card Image"
        class="w-full h-36 object-cover transform transition duration-200 hover:scale-105"
      />
      <div class="p-3">
        <h3 class="font-semibold text-sm mb-1">{{ card.title }}</h3>
        <p class="text-gray-500 text-xs mb-1">{{ card.time }}</p>
        <div class="flex items-center mt-2">
          <img
            :src="card.channelAvatar"
            alt="Channel Avatar"
            class="w-6 h-6 rounded-full mr-2"
          />
          <p class="text-gray-700 text-xs">{{ card.channel }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    image: "/img/r1.png",
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    channel: "Maajabu TV",
    channelAvatar: "/img/tv.png",
  },
  {
    image: "/img/r2.png",
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    channel: "Maajabu TV",
    channelAvatar: "/img/tv.png",
  },
  {
    image: "/img/r3.png",
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    channel: "Maajabu TV",
    channelAvatar: "/img/tv.png",
  },
  {
    image: "/img/r4.png",
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    channel: "Maajabu TV",
    channelAvatar: "/img/tv.png",
  },
  {
    image: "/img/r5.png",
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    channel: "Maajabu TV",
    channelAvatar: "/img/tv.png",
  },
  {
    image: "/img/r6.png",
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    channel: "Maajabu TV",
    channelAvatar: "/img/tv.png",
  },
  {
    image: "/img/r7.png",
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    channel: "Maajabu TV",
    channelAvatar: "/img/tv.png",
  },
  {
    image: "/img/r8.png",
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    channel: "Maajabu TV",
    channelAvatar: "/img/tv.png",
  },
];
</script>