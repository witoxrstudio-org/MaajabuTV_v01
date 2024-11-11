<template>
  <div>
    <section class="bg-black text-white flex items-center justify-center pt-16">
      <div class="mj-container border-r border-l border-slate-700">
        <h1 class="text-4xl font-bold py-10 text-center">
          <i class="fa-solid fa-tv"></i>TV
        </h1>

        <div class="flex flex-col items-center justify-center space-y-6">
          <!-- Titre principal de la page -->
          <h1 class="text-3xl font-bold text-yellow-600 hover:text-yellow-500">
            En Direct - Vidéo la Plus Récente
          </h1>

          <!-- Description de la vidéo -->
          <p class="text-white max-w-2xl text-center hover:text-white">
            Regardez le dernier enregistrement live de "Mungu wa Maajabu"
            interprété par Deborah Lukalu, avec la participation de Mike
            Kalambay. Profitez de ce moment spirituel inspirant !
          </p>

          <div
            class="w-full max-w-4xl border border-yellow-600 shadow-lg overflow-hidden"
          >
            <div class="h-[80vh] w-full bg-gray-900 relative">
              <LatestLiveVideo
                class="h-full w-full"
                :videoUrl="'https://www.youtube.com/embed/8rhNPSmj0_c'"
                :videoTitle="'Live Recording MUNGU WA MAAJABU - Mungu wa Maajabu by Deborah Lukalu feat Mike Kalambay'"
              />

              <!-- Overlay du titre de la vidéo -->
              <div
                class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4"
              >
                <h3 class="text-white font-semibold pt-2 text-lg">
                  Live Recording MUNGU WA MAAJABU - Mungu wa Maajabu by Deborah
                  Lukalu feat Mike Kalambay
                </h3>

                <!-- Statistiques de la vidéo -->
                <div
                  class="mt-3 flex justify-center space-x-4 bg-yellow-600 p-4 rounded text-black sm:grid sm:grid-cols-4 sm:space-x-2 md:flex md:justify-start md:space-x-4 md:text-left"
                >
                  <div class="flex items-center space-x-2">
                    <i
                      class="fas fa-headphones h-5 w-5 transition-transform duration-300 hover:scale-110 hover:text-yellow-500"
                    ></i>
                    <span class="text-xs sm:text-sm">8.9K</span>
                  </div>

                  <div class="flex items-center space-x-2">
                    <i
                      class="fas fa-heart h-5 w-5 transition-transform duration-300 hover:scale-110 hover:text-red-500"
                    ></i>
                    <span class="text-xs sm:text-sm">2.1K</span>
                  </div>

                  <div class="flex items-center space-x-2">
                    <i
                      class="fas fa-comment h-5 w-5 transition-transform duration-300 hover:scale-110 hover:text-blue-500"
                    ></i>
                    <span class="text-xs sm:text-sm">982K</span>
                  </div>

                  <div class="flex items-center space-x-2">
                    <i
                      class="fas fa-download h-5 w-5 transition-transform duration-300 hover:scale-110 hover:text-green-500"
                    ></i>
                    <span class="text-xs sm:text-sm">284K</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="mt-8 border-yellow-600" />
        <div class="container mb-5 mt-4">
          <h3
            class="text-2xl sm:text-3xl md:text-4xl font-semibold text-center transition-all duration-300"
          >
            Recents Lives
          </h3>

          <div class="container mx-auto p-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div
                v-for="row in recommandations"
                :key="row.id"
                class="flex justify-center"
              >
                <LatestRecentVideo
                  :videoTitle="row.title"
                  :videoUrl="row.link"
                  :videoPhoto="row.photo"
                  :videoArtist="row.artist"
                  class="w-full max-w-sm h-full rounded-lg shadow-lg border border-transparent transition duration-300 hover:scale-105 hover:border-yellow-400 hover:shadow-2xl p-4 flex flex-col justify-between"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup>
// Méthode pour basculer l'état du menu

const menuOpen = ref(false);
const toggleMenu = (value) => {
  menuOpen.value = value;
};

const recommandations = ref([
  {
    id: 1,
    artist: "Maajabu Gospel",
    photo:
      "https://yt3.googleusercontent.com/ytc/AIdro_me7D1cYywCcsR-m_yijRZTOwx9h3oAk-fpareYt8nbBA=s160-c-k-c0x00ffffff-no-rj",
    title:
      "Maajabu Talent Europe - Demi-Finale - Old School - RUTH DANIEL - Saison 2",
    link: "https://www.youtube.com/embed/Q4VCeBUeWRI",
    stats: {
      listen: "8.9K",
      likes: "2.1K",
      comments: "982K",
      downloads: "284K",
    },
  },
  {
    id: 2,
    artist: "KS BlOOM",
    photo:
      "https://yt3.googleusercontent.com/XcnEC7xy7a0mQVS_hMXKj1S3eJZWJjoRNVviUqAHd6NrxND5u6t11ZPbY_3Hgw-Rh9wfvs-trOk=s160-c-k-c0x00ffffff-no-rj",
    title: "KS BLOOM - C’est Dieu remix ( Official Video) ft. CHIDINMA",
    link: "https://www.youtube.com/embed/dPvkSyEkQi0",
    stats: {
      listen: "8.9K",
      likes: "2.1K",
      comments: "982K",
      downloads: "284K",
    },
  },
  {
    id: 3,
    artist: "Gédéon Pambani",
    photo:
      "https://yt3.googleusercontent.com/ytc/AIdro_me7D1cYywCcsR-m_yijRZTOwx9h3oAk-fpareYt8nbBA=s160-c-k-c0x00ffffff-no-rj",
    title: "Kombo na Yesu",
    link: "https://www.youtube.com/embed/b6EsZNPCuI8",
    stats: {
      listen: "8.9K",
      likes: "2.1K",
      comments: "982K",
      downloads: "284K",
    },
  },
]);
</script>
