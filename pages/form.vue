<template>
  <div class="rm-container flex items-center pt-20 justify-center">
    <form
      class="bg-white px-8 pt-6 pb-8 mb-4 max-w-lg w-full"
      @submit.prevent="handleSubmit"
    >
      <h2 class="text-center font-bold text-lg mb-4">
        Faites attention, vous ne pouvez plus modifier une fois les données
        envoyées.
      </h2>

      <div class="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="prenom"
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
          <label class="block text-gray-700 text-sm font-bold mb-2" for="gender"
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
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email"
            >Adresse E-mail *</label
          >
          <input
            v-model="formData.email"
            type="email"
            id="email"
            required
            placeholder="Veuillez saisir votre email"
            class="border w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-yellow-600"
          />
        </div>

        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="phone"
            >Téléphone *</label
          >
          <input
            v-model="formData.phone"
            type="tel"
            id="phone"
            required
            placeholder="Veuillez entrer votre numéro de téléphone"
            class="border w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-yellow-600"
          />
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
          class="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
        >
          Continuer
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";

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

function handleSubmit() {
  console.log(formData);
}
</script>

<style scoped>
body {
  font-family: "Inter", sans-serif;
}
</style>
