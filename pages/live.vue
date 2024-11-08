<template>
    <div>
        <div :class="{ 'backdrop-blur-sm': menuOpen }"
            class="relative bg-black text-white min-h-screen flex flex-col items-center">
            <!-- Barre de navigation -->
            <Navbar @toggleMenu="toggleMenu" />
            <!-- Video Player -->

            <div class="rm-container">
                <div class="flex justify-around space-x-4">
                    <div class="w-full bg-none border-none rounded">
                        <div class="w-full h-[80vh]">
                            <LiveVideo class="h-full" :videoUrl="'https://www.youtube.com/embed/8rhNPSmj0_c'"
                                :videoTitle="'Live Recording MUNGU WA MAAJABU - Mungu wa Maajabu by Deborah Lukalu feat Mike Kalambay'" />
                        </div>
                    </div>
                </div>
                <div class="container mt-4 mb-5">
                    <h3 class="text-base sm:text-lg font-semibold transition-all duration-300">
                        Recents Lives
                    </h3>
                    <!-- <SliderVideo/> -->
                    <div class="grid grid-cols-4 gap-4 ">
                        <div v-for="row in recommandations" :key="row.id">
                            <RecentVideo :videoTitle="row.title" :videoUrl="row.link" :videoPhoto="row.photo" />
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
        <div class="bg-stone-800 rm-wrapper">
            <lasterUnderLaster />
        </div>
    </div>
</template>
<script setup>
// Méthode pour basculer l'état du menu
const toggleMenu = (value) => {
    menuOpen.value = value;
};

import pub1 from "../assets/img/a1.png";
import pub2 from "../assets/img/a2.png";
import pub3 from "../assets/img/a3.png";
import LiveVideo from '@/components/Latest/LiveVideo.vue';
import RecentVideo from '@/components/Latest/RecentVideo.vue';

const recommandations = ref([
    {
        id: 1,
        artist: "Maajabu Gospel",
        photo: "https://yt3.googleusercontent.com/ytc/AIdro_me7D1cYywCcsR-m_yijRZTOwx9h3oAk-fpareYt8nbBA=s160-c-k-c0x00ffffff-no-rj",
        title: "Maajabu Talent Europe - Demi-Finale - Old School - RUTH DANIEL - Saison 2",
        link: "https://www.youtube.com/embed/Q4VCeBUeWRI",
    },
    {
        id: 2,
        artist: "KS BlOOM",
        photo: "https://yt3.googleusercontent.com/XcnEC7xy7a0mQVS_hMXKj1S3eJZWJjoRNVviUqAHd6NrxND5u6t11ZPbY_3Hgw-Rh9wfvs-trOk=s160-c-k-c0x00ffffff-no-rj",
        title: "KS BLOOM - C’est Dieu remix ( Official Video) ft. CHIDINMA",
        link: "https://www.youtube.com/embed/dPvkSyEkQi0"
    },
    {
        id: 3,
        artist: "Gédéon Pambani",
        photo: "https://yt3.googleusercontent.com/ytc/AIdro_me7D1cYywCcsR-m_yijRZTOwx9h3oAk-fpareYt8nbBA=s160-c-k-c0x00ffffff-no-rj",
        title: "Kombo na Yesu",
        link:
            "https://www.youtube.com/embed/b6EsZNPCuI8",
    },
    {
        id: 4,
        artist: "Maajabu Talent Saison 2 feat Mike Kalambay -  ",
        photo: "https://yt3.googleusercontent.com/ytc/AIdro_me7D1cYywCcsR-m_yijRZTOwx9h3oAk-fpareYt8nbBA=s160-c-k-c0x00ffffff-no-rj",
        title: "Nous sommes prêts",
        link:
            "https://www.youtube.com/embed/o-v4tfsuttg",
    },
]);

</script>