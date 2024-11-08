<template>
    <div>
        <a href="javascript:void(0)">
            <div class="relative flex flex-col my-2 rounded-lg">
                <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                    <iframe class="w-full h-full" :src="videoUrl" :title="videoTitle" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div class="p-3">
                    <div
                        class="mb-4 rounded-full bg-yellow-400 py-0.3 px-2.2 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                        Popular
                    </div>
                    <h6 class="mb-1 text-light-800 text-xl font-semibold">
                        {{ videoTitle }}
                    </h6>
                </div>

                <div class="flex items-center justify-between p-3">
                    <div class="flex items-center">
                        <img :alt="videoArtist" :src="videoPhoto" class="relative inline-block h-8 w-8 rounded-full" />
                        <div class="flex flex-col ml-3 text-sm">
                            <span class="text-light-800 font-semibold">videoArtist</span>
                            <span class="text-yellow-400">
                                Artist
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'Recentideo',
    props: {
        videoUrl: {
            type: String,
            required: true
        },
        videoTitle: {
            type: String,
            required: true
        },
        videoPhoto: {
            type: String,
            required: true
        },
        videoArtist: {
            type: String,
            required: true
        }
    }
};
</script>