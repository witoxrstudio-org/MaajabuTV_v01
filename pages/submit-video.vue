<template>
  <div>
    <section class="rm-container flex items-center pt-20 justify-center">
      <form
        class="bg-black bg-opacity-5 px-8 pt-6 pb-8 mb-4 max-w-lg w-full"
        @submit.prevent="handleSubmit"
      >
        <h1 class="text-4xl font-bold text-center pb-8">{{ title }}</h1>
        <h2 class="text-center font-bold text-lg mb-4">
          {{ desc }}
        </h2>

        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="prenom"
            >
              {{ prenomLabel }}</label
            >
            <input
              v-model="formData.prenom"
              type="text"
              id="prenom"
              required
              :placeholder="prenomPlaceholder"
              class="border w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-yellow-600"
            />
          </div>

          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="nom"
              >{{ nomLabel }}</label
            >
            <input
              v-model="formData.nom"
              type="text"
              id="nom"
              required
              :placeholder="nomPlaceholder"
              class="border w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-yellow-600"
            />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-2 mb-4">
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="gender"
            >
              {{ genreLabel }}
            </label>
            <select
              v-model="formData.gender"
              id="gender"
              required
              class="border w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-yellow-600"
            >
              <option value="Homme">{{ genreOptionM }}</option>
              <option value="Femme">{{ genreOptionF }}</option>
              <option value="Autre">{{ genreOptionO }}</option>
            </select>
          </div>

          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="country"
            >
              {{ countryLabel }}
            </label>
            <input
              v-model="formData.country"
              type="text"
              id="country"
              required
              :placeholder="countryPlaceholder"
              class="border w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-yellow-600"
            />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              {{ emailLabel }}</label
            >
            <input
              v-model="formData.email"
              type="email"
              id="email"
              :class="{ 'border-red-500': !isEmailValid }"
              required
              :placeholder="emailPlaceholder"
              class="border w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-yellow-600"
            />
            <span v-if="!isEmailValid" class="text-red-500 text-xs">
              {{ emailError }}</span
            >
          </div>

          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="phone"
              >{{ phoneLabel }}</label
            >
            <input
              v-model="formData.phone"
              type="text"
              id="phone"
              :class="{ 'border-red-500': !isPhoneValid }"
              required
              :placeholder="phonePlaceholder"
              class="border w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-yellow-600"
            />
            <span v-if="!isPhoneValid" class="text-red-500 text-xs">
              {{ phoneError }}
            </span>
          </div>
        </div>

        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="social"
          >
            {{ socialLabel }}</label
          >
          <input
            v-model="formData.social"
            type="url"
            id="social"
            required
            :placeholder="socialPlaceholder"
            class="border w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-yellow-600"
          />
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="image">
            {{ imageLabel }}
          </label>
          <input
            type="file"
            id="image"
            required
            class="border w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-yellow-600"
          />
        </div>

        <div class="flex items-center justify-start">
          <button
            type="submit"
            class="bg-yellow-600 w-full hover:bg-yellow-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
            :disabled="!isFormValid"
          >
            {{ submitButton }}
          </button>
        </div>
      </form>
    </section>

    <Footer />
  </div>
</template>

<script setup>
const { t } = useI18n();
const title = ref(t("submit.title"));
const desc = ref(t("submit.desc"));
const prenomLabel = ref(t("submit.form.prenom.label"));
const prenomPlaceholder = ref(t("submit.form.prenom.placeholder"));
const nomLabel = ref(t("submit.form.nom.label"));
const nomPlaceholder = ref(t("submit.form.nom.placeholder"));
const genreLabel = ref(t("submit.form.gender.label"));
const genreOptionM = ref(t("submit.form.gender.options.male"));
const genreOptionF = ref(t("submit.form.gender.options.female"));
const genreOptionO = ref(t("submit.form.gender.options.other"));
const countryLabel = ref(t("submit.form.country.label"));
const countryPlaceholder = ref(t("submit.form.country.placeholder"));
const emailLabel = ref(t("submit.form.email.label"));
const emailPlaceholder = ref(t("submit.form.email.placeholder"));
const emailError = ref(t("submit.form.email.error"));
const phoneLabel = ref(t("submit.form.phone.label"));
const phonePlaceholder = ref(t("submit.form.phone.placeholder"));
const phoneError = ref(t("submit.form.phone.error"));
const socialLabel = ref(t("submit.form.social.label"));
const socialPlaceholder = ref(t("submit.form.social.placeholder"));
const imageLabel = ref(t("submit.form.image.label"));
const submitButton = ref(t("submit.form.submitButton.text"));

const formData = reactive({
  prenom: "",
  nom: "",
  gender: "Homme",
  email: "",
  phone: "",
  country: "",
  social: "",
  image: null,
});

// Regex pour valider l'email et le téléphone
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^[0-9]{10}$/;

const isEmailValid = computed(() => emailRegex.test(formData.email));
const isPhoneValid = computed(() => phoneRegex.test(formData.phone));

// Vérification générale de la validité du formulaire
const isFormValid = computed(() => {
  return (
    formData.prenom &&
    formData.nom &&
    formData.email &&
    isEmailValid.value &&
    formData.phone &&
    isPhoneValid.value &&
    formData.country &&
    formData.social &&
    formData.image
  );
});

function handleSubmit() {
  console.log(formData);
}
</script>
