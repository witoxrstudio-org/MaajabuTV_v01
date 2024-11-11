<template>
  <div>
    <div :class="{ 'backdrop-blur-sm': menuOpen }"
      class="relative flex min-h-screen flex-col items-center bg-black text-white">
      <div class="mj-container">
        <div class="flex justify-around space-x-4">
          <div class="w-full rounded border-none bg-none">
            <div class="h-[80vh] w-full">
              <LatestLiveVideo class="h-full" :videoUrl="'https://www.youtube.com/embed/8rhNPSmj0_c'"
                :videoTitle="'Live Recording MUNGU WA MAAJABU - Mungu wa Maajabu by Deborah Lukalu feat Mike Kalambay'" />
            </div>
          </div>
        </div>
        <div class="container mb-5 mt-4">
          <h3 class="text-base font-semibold transition-all duration-300 sm:text-lg">
            Recents Lives
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2 lg:gap-4 w-full">
            <div v-for="row in recommandations" :key="row.id">
              <LatestRecentVideo :videoTitle="row.title" :videoUrl="row.link" :videoPhoto="row.photo"
                :videoArtist="row.artist" />
            </div>
          </div>
        </div>
      </div>
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
    title: "Maajabu Talent Europe - Demi-Finale - Old School - RUTH DANIEL - Saison 2",
    link: "https://www.youtube.com/embed/Q4VCeBUeWRI",
  },
  {
    id: 2,
    artist: "KS BlOOM",
    photo:
      "https://yt3.googleusercontent.com/XcnEC7xy7a0mQVS_hMXKj1S3eJZWJjoRNVviUqAHd6NrxND5u6t11ZPbY_3Hgw-Rh9wfvs-trOk=s160-c-k-c0x00ffffff-no-rj",
    title: "KS BLOOM - C’est Dieu remix ( Official Video) ft. CHIDINMA",
    link: "https://www.youtube.com/embed/dPvkSyEkQi0",
  },
  {
    id: 3,
    artist: "Gédéon Pambani",
    photo:
      "https://yt3.googleusercontent.com/ytc/AIdro_me7D1cYywCcsR-m_yijRZTOwx9h3oAk-fpareYt8nbBA=s160-c-k-c0x00ffffff-no-rj",
    title: "Kombo na Yesu",
    link: "https://www.youtube.com/embed/b6EsZNPCuI8",
  },
  {
    id: 4,
    artist: "Maajabu Talent Saison 2 feat Mike Kalambay -  ",
    photo:
      "https://yt3.googleusercontent.com/ytc/AIdro_me7D1cYywCcsR-m_yijRZTOwx9h3oAk-fpareYt8nbBA=s160-c-k-c0x00ffffff-no-rj",
    title: "Nous sommes prêts",
    link: "https://www.youtube.com/embed/o-v4tfsuttg",
  },
]);
</script>