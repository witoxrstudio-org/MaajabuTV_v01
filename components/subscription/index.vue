<template>
  <div
    class="flex items-center justify-center bg-pattern bg-cover bg-center p-4"
  >
    <div class="text-center text-yellow-500 p-8 rounded-lg max-w-md w-full">
      <h1
        class="text-3xl font-bold mb-4 transform transition duration-200 hover:scale-105 hover:text-yellow-500 "
      >
        {{ title_1 }}<br />{{ title_2 }}
      </h1>
      <p
        class="text-gray-300 mb-6 transform transition duration-200 hover:scale-105"
      >
        {{ desc }}
      </p>
      <div class="relative max-w-lg mx-auto">
        <input
          type="text"
          class="w-full bg-black py-4 pl-3 pr-16 border border-gray-300"
          :placeholder="form"
        />
        <button
          type="submit"
          class="absolute inset-y-0 right-0 px-4 py-2 m-2 bg-yellow-500 text-white hover: focus:outline-none transition-all duration-300 hover:scale-110"
        >
          {{ label }}
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
const { t } = useI18n();
const title_1 = ref(t("sub.title_1"));
const title_2 = ref(t("sub.title_2"));
const desc = ref(t("sub.desc"));
const form = ref(t("sub.form"));
const label = ref(t("sub.label"));
</script>

<style>
.bg-pattern {
  background-image: url("/img/subBg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
