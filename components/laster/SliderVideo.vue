<template>
    <swiper :slidesPerView="3" :spaceBetween="30" :pagination="{
        clickable: true,
    }" :modules="modules" class="mySwiper">
        <div v-for="row in recommandations" :key="row.id"> 
            <swiper-slide>
                <a href="javascript:void(0)">
                    <div class="relative flex flex-col my-2 rounded-lg">
                        <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                            <iframe class="w-full h-full" :src="row.link" title="{{ row.title }}" frameborder="0"
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
            </swiper-slide>
        </div>


    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
};

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
