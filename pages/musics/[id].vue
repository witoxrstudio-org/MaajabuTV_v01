<template>
  <section>
    <div class="rm-wrapper bg-black text-white">
      <Navbar @toggleMenu="toggleMenu" />
    </div>

    <div>
      <h1 class="text-3xl items-center justify-center">
        <!-- {{ route.params.id }} -->
        Coolest
      </h1>
    </div>
    <div class="relative">
      <!-- Image en filigrane en haut à gauche -->
      <img
        src="/img/Titik-titik.png"
        class="absolute top-0 left-0 opacity-20 w-32 h-32"
        alt="Watermark Top Left"
      />

      <!-- Image en filigrane en bas à droite -->
    </div>
    <div class="rm-container relative border-l border-r">
      <div class="flex flex-col md:flex-row md:space-x-4">
        <!-- Contenu principal -->
        <div class="w-full md:w-2/3 mb-4 md:mb-0">
          <div class="relative bg-white shadow-lg overflow-hidden rounded-lg">
            <img
              :src="currentPost.image"
              alt="Main Post Image"
              class="w-full h-72 md:h-80 lg:h-96 object-cover transition-transform duration-300 ease-out transform hover:scale-105"
            />
            <div
              class="absolute top-2 left-2 bg-yellow-500 text-white px-3 py-1 text-sm rounded"
            >
              {{ currentPost.category }}
            </div>
            <div class="p-6">
              <h2 class="text-2xl font-bold mb-2">{{ currentPost.title }}</h2>
              <p class="text-gray-600 mb-4">{{ currentPost.description }}</p>
              <hr class="mb-4" />
              <div
                class="flex flex-col md:flex-row md:justify-between md:items-center mt-4 space-y-4 md:space-y-0"
              >
                <button
                  class="px-4 py-2 bg-yellow-500 text-white transition-transform hover:scale-105 self-center md:self-auto"
                >
                  Read More
                </button>
                <div
                  class="flex flex-row items-center text-sm text-gray-500 space-x-4"
                >
                  <span class="flex items-center space-x-1">
                    <i class="fas fa-star"></i>
                    <span>sticky post</span>
                  </span>
                  <span class="flex items-center space-x-1">
                    <i class="fas fa-user"></i>
                    <span>{{ currentPost.author }}</span>
                  </span>
                  <span class="flex items-center space-x-1">
                    <i class="fas fa-calendar"></i>
                    <span>{{ currentPost.date }}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar avec les posts récents -->
        <div class="w-full md:w-1/3">
          <h3 class="font-bold text-lg mb-4 text-yblack p-2">Recent Posts</h3>
          <ul class="space-y-4">
            <li
              v-for="(post, index) in posts"
              :key="index"
              @click="setCurrentPost(post)"
              class="flex items-center cursor-pointer space-x-3 p-3 shadow-md hover:bg-yellow-100 rounded-lg transition-transform hover:scale-105"
            >
              <img
                :src="post.image"
                alt="Post Thumbnail"
                class="w-16 h-16 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
              <div class="hover:underline">
                <h4 class="text-sm font-semibold">{{ post.title }}</h4>
                <p class="text-xs text-gray-500">{{ post.date }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="relative">
      <img
        src="/img/Titik-titik.png"
        class="absolute bottom-0 right-0 opacity-20 w-32 h-32"
        alt="Watermark Bottom Right"
      />
    </div>
    <div class="mt-10">
      <subscription />
    </div>
    <div>
      <laster />
    </div>
    <div class="bg-stone-800 rm-wrapper">
      <lasterUnderLaster />
    </div>
  </section>
</template>

<script setup>
import { useRoute } from "#app";
const route = useRoute();
const posts = ref([
  {
    title: "Our Giving Champions: Thank You to Our Top Supporters",
    image: "/img/r2.png",
    category: "Impact Stories",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "merklove",
    date: "Jun 12, 2024",
  },
  {
    title: "Amelia’s Journey of Resilience and Joy",
    image: "/img/r3.png",
    date: "Jun 12, 2024",
    category: "Impact Stories",
  },
  {
    title: "The Never-Ending Need for Lifesavers",
    image: "/img/r4.png",
    date: "Sep 30, 2024",
    category: "Impact Stories",
  },
  {
    title: "Pairing Insulin With Brighter Tomorrows",
    image: "/img/r5.png",
    date: "Aug 22, 2024",
    category: "Impact Stories",
  },
]);

const currentPost = ref(posts.value[0]);

const setCurrentPost = (post) => {
  currentPost.value = post;
};
</script>
