<template>
    <div>
        <div :class="{ 'backdrop-blur-sm': menuOpen }"
            class="relative bg-black text-white min-h-screen flex flex-col items-center">
            <!-- Barre de navigation -->
            <Navbar @toggleMenu="toggleMenu" />
            <!-- Video Player -->

            <div class="rm-container">
                <div class="flex flex-row space-x-4">
                    <!-- Première colonne -->
                    <div class="w-full lg:w-8/12 sm:w-full">
                        <!-- Contenu de la première colonne -->
                        <div class="w-full bg-none border-none">
                            <div class="flex flex-wrap">
                                <div class="w-full h-[400px]">
                                    <iframe class="w-full h-full" src="https://www.youtube.com/embed/EEBkV_rwGAM"
                                        title="Mike Kalambay - Stade des Martyrs (Kinshasa)" frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                                <div class="flex-1 mt-4 lg:mt-5 sm:mt-3 text-center md:text-left">
                                    <h3 class="text-base sm:text-lg font-semibold transition-all duration-300">
                                        Mike Kalambay - Stade des Martyrs (Kinshasa)
                                    </h3>
                                    <div
                                        class="grid grid-cols-4 gap-4 mb-3 mt-3 text-gray-200 sm:grid-cols-4 sm:space-x-1 md:space-x-1 md:flex md:text-left">
                                        <div class="flex items-center space-x-2">
                                            <i
                                                class="fas fa-eye w-5 h-5 transition-transform duration-300 hover:text-yellow-500 hover:scale-110"></i>
                                            <span class="text-xs sm:text-sm"> 21k views</span>
                                        </div>

                                        <div class="flex items-center space-x-2">
                                            <i
                                                class="fas fa-heart w-5 h-5 transition-transform duration-300 hover:text-red-500 hover:scale-110"></i>
                                            <span class="text-xs sm:text-sm">5k likes</span>
                                        </div>

                                        <div class="flex items-center space-x-2">
                                            <i
                                                class="fas fa-comment w-5 h-5 transition-transform duration-300 hover:text-blue-500 hover:scale-110"></i>
                                            <span class="text-xs sm:text-sm"> 1.1k comments</span>
                                        </div>

                                        <div class="flex items-center space-x-2">
                                            <i
                                                class="fas fa-download w-5 h-5 transition-transform duration-300 hover:text-green-500 hover:scale-110"></i>
                                            <span class="text-xs sm:text-sm">4.5k downloads</span>
                                        </div>
                                        <div class="flex items-center space-x-2">
                                            <i
                                                class="fas fa-calendar w-5 h-5 transition-transform duration-300 hover:text-blue-500 hover:scale-110"></i>
                                            <span class="text-xs sm:text-sm">22 Oct. 2024 at 08:25 AM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <!-- Deuxième colonne  -->
                    <div class="w-full sm:w-3/12">
                        <!-- Contenu de la deuxième colonne -->
                        <h3 class="text-base mt-0 sm:text-lg font-semibold transition-all duration-300">
                            The same artist
                        </h3>
                        <div v-for="episode in episodes" :key="episode.id"
                            class="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4 pb-4">
                            <img :src="episode.image" alt="Album cover"
                                class="w-20 h-20 object-cover transition-transform duration-300 hover:scale-105" />
                            <div class="flex-1 mt-4 md:mt-0 text-center md:text-left">
                                <h5
                                    class="text-base sm:text-lg font-semibold hover:text-yellow-500 hover:underline hover:translate-y-[-3px] transition-all duration-300">
                                    {{ episode.title }}
                                </h5>
                                <div
                                    class="grid grid-cols-4 gap-4 mt-3 text-gray-400 sm:grid-cols-4 sm:space-x-1 md:space-x-1 md:flex md:text-left">
                                    <div class="flex items-center space-x-2">
                                        <i
                                            class="fas fa-clock w-5 h-5 transition-transform duration-300 hover:text-yellow-500 hover:scale-110"></i>
                                        <span class="text-xs sm:text-sm">48 min</span>
                                    </div>

                                    <div class="flex items-center space-x-2">
                                        <i
                                            class="fas fa-eye w-5 h-5 transition-transform duration-300 hover:text-red-500 hover:scale-110"></i>
                                        <span class="text-xs sm:text-sm">{{
                                            episode.stats.likes
                                        }} views</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="container mt-4">
                    <h3 class="text-base mt-0 sm:text-lg font-semibold transition-all duration-300">
                        Recommandations
                    </h3>
                    <div class="grid grid-cols-4 gap-4">
                        <div v-for="row in recommandations" :key="row.id">
                            <a href="javascript:void(0)">
                                <div class="relative flex flex-col my-2 rounded-lg">
                                    <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                                        <iframe class="w-full h-full" :src="row.link" title="{{ row.title }}"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    </div>
                                    <div class="p-3">
                                        <div
                                            class="mb-4 rounded-full bg-yellow-400 py-0.3 px-2.2 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                                            Popular
                                        </div>
                                        <h6 class="mb-1 text-light-800 text-xl font-semibold">
                                            {{ row.title }}
                                        </h6>
                                    </div>

                                    <div class="flex items-center justify-between p-3">
                                        <div class="flex items-center">
                                            <img alt="{{ row.artist }}" :src="row.photo"
                                                class="relative inline-block h-8 w-8 rounded-full" />
                                            <div class="flex flex-col ml-3 text-sm">
                                                <span class="text-light-800 font-semibold">{{ row.artist }}</span>
                                                <span class="text-yellow-400">
                                                    Artist
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

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


const episodes = ref([
    {
        id: 1,
        artist: "SHEKINAH MPIANA",
        duration: "46 min",
        episode: 10,
        title: "Désormais",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac neque sagittis...",
        image: pub1,
        stats: {
            listen: "8.9K",
            likes: "2.1K",
            comments: "982K",
            downloads: "284K",
        },
    },
    {
        id: 2,
        artist: "LORD LOMBO",
        duration: "34 min",
        episode: 9,
        title: "CELEBRONS HEBRON AUJOURD'HUI",
        description:
            "Quisque sit amet lacus luctus, ultrices eros ac, laoreet sem...",
        image: pub2,
        stats: {
            listen: "24K",
            likes: "3.2K",
            comments: "5.6K",
            downloads: "1.9K",
        },
    },
    {
        id: 3,
        artist: "FAVEUR MUKOKO",
        duration: "46 min",
        episode: 8,
        title: "Hakuniacaha",
        description:
            "Cras facilisis orci in arcu ullamcorper viverra. Maecenas vulputate risus...",
        image: pub3,
        stats: {
            listen: "42K",
            likes: "10K",
            comments: "16K",
            downloads: "5.1K",
        },
    },
    {
        id: 4,
        artist: "FAVEUR MUKOKO",
        duration: "46 min",
        episode: 8,
        title: "Hakuniacaha",
        description:
            "Cras facilisis orci in arcu ullamcorper viverra. Maecenas vulputate risus...",
        image: pub3,
        stats: {
            listen: "42K",
            likes: "10K",
            comments: "16K",
            downloads: "5.1K",
        },
    },
]);
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