<template>
  <section class="bg-white px-10 py-6 max-w-6xl mx-auto w-full">
    <div class="bg-white max-w-6xl mx-4 sm:mx-2 py-6 px-4">
      <!-- Section Header -->
      <div class="flex items-center justify-between border-gray-200 py-4">
        <div
          class="w-1/3 sm:w-[35%] border-t border-gray-300 ml-4 mr-1 hidden sm:block"
        ></div>
        <h2
          class="text-xl sm:text-3xl font-bold text-yellow-500 transform transition duration-200 hover:scale-105"
        >
          Albums
        </h2>
        <div
          class="w-1/3 sm:w-[35%] border-t border-gray-300 ml-4 mr-1 hidden sm:block"
        ></div>
      </div>
      <!-- Fin Section Header -->

      <div class="flex items-start gap-6 justify-between flex-wrap">
        <!-- Cards Section -->
        <div class="flex flex-wrap gap-6 justify-center">
          <!-- Card 1 -->
          <div
            class="bg-white w-full sm:w-48 md:w-56 shadow-md overflow-hidden transform transition duration-200 hover:scale-105 hover:text-yellow-500 hover:underline"
          >
            <img
              src="assets/img/e1.png"
              alt="Psaumes"
              class="w-full h-52 object-cover"
            />
            <div class="p-3 transform transition duration-200 hover:scale-105">
              <h3 class="text-md font-semibold">PSAUMES</h3>
              <p class="text-gray-500 text-sm">Story Life • 102 Podcast</p>
              <p class="text-gray-500 text-sm">535K Followers</p>
            </div>
            <div>
              <button
                class="mt-3 bg-black text-yellow-500 px-3 py-1.5 w-full text-sm"
              >
                FOLLOWED
              </button>
            </div>
          </div>

          <!-- Card 2 -->
          <div
            class="bg-white w-full sm:w-48 md:w-56 shadow-md overflow-hidden transform transition duration-200 hover:scale-105 hover:text-yellow-500 hover:underline"
          >
            <img
              src="assets/img/e2.png"
              alt="Dayly Artist"
              class="w-full h-52 object-cover"
            />
            <div class="p-3 transform transition duration-200 hover:scale-105">
              <h3 class="text-md font-semibold">DAYLY ARTIST</h3>
              <p class="text-gray-500 text-sm">Rimance • 94 Podcast</p>
              <p class="text-gray-500 text-sm">412K Followers</p>
            </div>
            <div>
              <button
                class="mt-3 bg-white border border-black text-black px-3 py-1.5 w-full text-sm"
              >
                FOLLOW
              </button>
            </div>
          </div>

          <!-- Card 3 -->
          <div
            class="bg-white w-full sm:w-48 md:w-56 shadow-md overflow-hidden transform transition duration-200 hover:scale-105 hover:text-yellow-500 hover:underline"
          >
            <img
              src="assets/img/e3.jpeg"
              alt="Faveur Mukoko"
              class="w-full h-52 object-cover transition-all duration-300 hover:scale-110 hover:z-10 hover:shadow-lg"
            />
            <div class="p-3">
              <h3 class="text-md font-semibold">AMOUR INCONDITIONNEL</h3>
              <p class="text-gray-500 text-sm">Comedy • 152 Podcast</p>
              <p class="text-gray-500 text-sm">389 Followers</p>
            </div>
            <div>
              <button
                class="mt-3 bg-white border border-black text-black px-3 py-1.5 w-full text-sm"
              >
                FOLLOW
              </button>
            </div>
          </div>
        </div>

        <!-- Description & Navigation Section -->
        <!-- Description & Navigation Section -->
        <div class="flex flex-col justify-center text-center mt-8 sm:mt-0">
          <h2
            class="text-2xl font-bold text-yellow-500 transform transition duration-200 hover:scale-105 hover:text-yellow-500 hover:underline"
          >
            Top Albums
          </h2>
          <div class="text-black mt-2 space-y-1">
            <p>Here are the podcasters</p>
            <p>with the highest followers</p>
            <p>and viewers. Immediately follow</p>
            <p>to follow the podcast</p>
          </div>

          <!-- Navigation Section -->
          <div class="mt-8 flex items-center gap-4 justify-center">
            <!-- Flèche gauche -->
            <button
              class="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 bg-gray-200 flex items-center justify-center object-cover transition-all duration-300 hover:scale-110 hover:z-10 hover:shadow-lg"
            >
              <img
                src="public/img/Arrow - Left.png"
                alt="Flèche gauche"
                class="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6"
              />
            </button>

            <!-- Flèche droite -->
            <button
              class="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 bg-yellow-500 flex items-center justify-center object-cover transition-all duration-300 hover:scale-110 hover:z-10 hover:shadow-lg"
            >
              <img
                src="public/img/Arrow - Right.png"
                alt="Flèche droite"
                class="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
