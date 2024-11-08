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
  </section>
</template>

<script setup>
import { useRoute } from "#app";
const route = useRoute();
</script>
