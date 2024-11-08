<template>
    <div>
        <iframe :src="videoUrl" class="w-full h-full" :title="videoTitle" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
</template>

<script>
export default {
    name: 'LiveVideo',
    props: {
        videoUrl: {
            type: String,
            required: true
        },
        videoTitle: {
            type: String,
            required: false
        }
    }
};
</script>