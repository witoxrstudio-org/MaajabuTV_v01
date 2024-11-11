<template>
  <div>
    <a href="javascript:void(0)">
      <div class="relative my-2 flex flex-col rounded-lg">
        <div class="relative h-56 overflow-hidden rounded-md text-white">
          <iframe
            class="h-full w-full"
            :src="videoUrl"
            :title="videoTitle"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="p-3">
          <!-- <div
                        class="py-0.3 px-2.2 mb-4 w-20 rounded-full border border-transparent bg-yellow-400 text-center text-xs text-white shadow-sm transition-all">
                        Popular
                    </div> -->
          <h6 class="text-light-800 mb-1 text-xl font-semibold">
            {{ videoTitle }}
          </h6>
        </div>

        <div class="flex items-center justify-between p-3">
          <div class="flex items-center">
            <img
              :alt="videoArtist"
              :src="videoPhoto"
              class="relative inline-block h-8 w-8 rounded-full"
            />
            <div class="ml-3 flex flex-col text-sm">
              <span class="text-light-800 font-semibold">{{ videoArtist }}</span>
              <span class="text-yellow-400"> Artist </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "RecentVideo",
  props: {
    videoUrl: {
      type: String,
      required: true,
    },
    videoTitle: {
      type: String,
      required: true,
    },
    videoPhoto: {
      type: String,
      required: true,
    },
    videoArtist: {
      type: String,
      required: true,
    },
  },
};
</script>
