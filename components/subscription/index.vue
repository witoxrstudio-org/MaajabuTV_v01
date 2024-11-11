<template>
  <div class="bg-pattern flex items-center justify-center bg-cover bg-center p-4">
    <div class="w-full max-w-md rounded-lg py-8 text-center text-yellow-500 sm:p-8">
      <h1 class="mb-4 text-3xl font-bold hover:text-yellow-500">
        {{ title_1 }}<br />{{ title_2 }}
      </h1>
      <p class="mb-6 text-gray-300">
        {{ desc }}
      </p>
      <div class="relative mx-auto max-w-lg">
        <input
          type="text"
          class="w-full border border-gray-700 bg-black py-4 pl-3 pr-16"
          :placeholder="form"
        />
        <button
          type="submit"
          class="hover: absolute inset-y-0 right-0 m-2 bg-yellow-500 px-4 py-2 text-white transition-all duration-300 hover:scale-110 focus:outline-none"
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
