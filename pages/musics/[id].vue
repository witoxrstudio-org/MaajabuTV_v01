<template>
  <section>
    <div>
      <Navbar @toggleMenu="toggleMenu" class="text white" />
    </div>
    <div>
      <h1 class="text-3xl items-center justify-center">
        {{ route.params.id }}
      </h1>
    </div>
    <div class="rm-container">
      <div class="flex flex-col md:flex-row md:space-x-4">
        <!-- Contenu principal -->
        <div class="w-full md:w-2/3 mb-4 md:mb-0">
          <div class="relative bg-white shadow-lg overflow-hidden">
            <img
              :src="currentPost.image"
              alt="Main Post Image"
              class="w-full h-60 object-cover"
            />
            <div
              class="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 text-sm rounded"
            >
              {{ currentPost.category }}
            </div>
            <div class="p-4">
              <h2 class="text-2xl font-bold">{{ currentPost.title }}</h2>
              <p class="text-gray-600 mt-2">{{ currentPost.description }}</p>
              <button class="mt-4 px-4 py-2 bg-yellow-500 text-white">
                Read More
              </button>
              <div
                class="flex items-center text-sm text-gray-500 mt-2 space-x-4"
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

        <!-- Sidebar avec les posts récents -->
        <div class="w-full md:w-1/3">
          <h3 class="font-semibold text-lg mb-4">Recent Posts</h3>
          <ul class="space-y-4">
            <li
              v-for="(post, index) in posts"
              :key="index"
              @click="setCurrentPost(post)"
              class="flex items-center cursor-pointer space-x-3 p-3 hover:bg-gray-100 rounded-lg transition"
            >
              <img
                :src="post.image"
                alt="Post Thumbnail"
                class="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <h4 class="text-sm font-semibold">{{ post.title }}</h4>
                <p class="text-xs text-gray-500">{{ post.date }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
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
  },
  {
    title: "The Never-Ending Need for Lifesavers",
    image: "/img/r4.png",
    date: "Sep 30, 2024",
  },
  {
    title: "Pairing Insulin With Brighter Tomorrows",
    image: "/img/r5.png",
    date: "Aug 22, 2024",
  },
]);

const currentPost = ref(posts.value[0]);

const setCurrentPost = (post) => {
  currentPost.value = post;
};
</script>
