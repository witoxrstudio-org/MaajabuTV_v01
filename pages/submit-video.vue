<template>
  <div>
    <section class="rm-container flex items-center pt-20 justify-center">
      <form
        class="bg-gray-50 px-8 pt-6 pb-8 mb-4 max-w-lg w-full"
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
              >Prénom *</label
            >
            <input
              v-model="formData.prenom"
              type="text"
              id="prenom"
              required
              placeholder="Veuillez saisir votre prénom"
              class="border w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-yellow-600"
            />
          </div>

          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="nom"
              >Nom de famille *</label
            >
            <input
              v-model="formData.nom"
              type="text"
              id="nom"
              required
              placeholder="Veuillez saisir votre nom de famille"
              class="border w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-yellow-600"
            />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-2 mb-4">
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="gender"
              >Qui es-tu ?</label
            >
            <select
              v-model="formData.gender"
              id="gender"
              required
              class="border w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-yellow-600"
            >
              <option value="Homme">Homme</option>
              <option value="Femme">Femme</option>
              <option value="Autre">Autre</option>
            </select>
          </div>

          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="country"
              >Pays *</label
            >
            <input
              v-model="formData.country"
              type="text"
              id="country"
              required
              placeholder="Veuillez saisir votre pays"
              class="border w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-yellow-600"
            />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
              >Adresse E-mail *</label
            >
            <input
              v-model="formData.email"
              type="email"
              id="email"
              :class="{ 'border-red-500': !isEmailValid }"
              required
              placeholder="Veuillez saisir votre email"
              class="border w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-yellow-600"
            />
            <span v-if="!isEmailValid" class="text-red-500 text-xs"
              >Email invalide</span
            >
          </div>

          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="phone"
              >Téléphone *</label
            >
            <input
              v-model="formData.phone"
              type="text"
              id="phone"
              :class="{ 'border-red-500': !isPhoneValid }"
              required
              placeholder="Veuillez entrer votre numéro de téléphone"
              class="border w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-yellow-600"
            />
            <span v-if="!isPhoneValid" class="text-red-500 text-xs"
              >Numéro de téléphone invalide</span
            >
          </div>
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="social"
            >Profile Social media *</label
          >
          <input
            v-model="formData.social"
            type="url"
            id="social"
            required
            placeholder="Veuillez entrer votre lien de réseau social"
            class="border w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-yellow-600"
          />
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="image"
            >Image de l'artiste *</label
          >
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
            Continuer
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
