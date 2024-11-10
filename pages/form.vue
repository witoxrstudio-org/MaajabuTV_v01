<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <form class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 class="text-2xl font-bold mb-6">Formulaire</h1>

      <label class="block mb-4">
        <span class="text-gray-700">Prenom</span>
        <input
          type="text"
          class="mt-1 block w-full px-4 py-2 border rounded-md text-gray-900"
          placeholder="Vincent"
        />
      </label>

      <label class="block mb-4">
        <span class="text-gray-700">Nom de la famille</span>
        <input
          type="text"
          class="mt-1 block w-full px-4 py-2 border rounded-md text-gray-900"
          placeholder="ASANI"
        />
      </label>

      <label class="block mb-4">
        <span class="text-gray-700">Qui est-tu?</span>
        <input
          type="text"
          class="mt-1 block w-full px-4 py-2 border rounded-md text-gray-900"
          placeholder="Homme"
        />
      </label>

      <label class="block mb-4">
        <span class="text-gray-700">Email</span>
        <input
          type="email"
          class="mt-1 block w-full px-4 py-2 border rounded-md text-gray-900"
          placeholder="vincentasani@gmail.com"
        />
      </label>

      <div class="flex flex-col space-y-2">
        <label for="phone" class="text-gray-700 font-medium">Phone No.</label>
        <div
          class="flex items-center border gap-2 border-gray-300 rounded-md overflow-hidden"
        >
          <span
            class="bg-gray-100 px-4 py-2 text-gray-600 font-medium border border-gray-300"
            >+243</span
          >
          <input
            type="text"
            id="phone"
            placeholder="999 249 663"
            class="w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-1"
          />
        </div>
      </div>

      <label class="block mb-4">
        <span class="text-gray-700">Pays</span>
        <select
          class="mt-1 block w-full px-4 py-2 border rounded-md text-gray-900"
        >
          <option>Congo Dem. Rep</option>
          <option>Other Country</option>
        </select>
      </label>

      <label class="block mb-4">
        <span class="text-gray-700">Profile Social Media</span>
        <input
          type="text"
          class="mt-1 block w-full px-4 py-2 border rounded-md text-gray-900"
          placeholder="Veuillez entrer votre lien de réseau social"
        />
      </label>

      <label class="block mb-6">
        <span class="text-gray-700">Image de l'artiste</span>
        <select
          class="mt-1 block w-full px-4 py-2 border rounded-md text-gray-900"
        >
          <option>Choisir un fichier</option>
        </select>
      </label>

      <button
        type="submit"
        class="w-full bg-yellow-500 text-white font-bold py-2 rounded-md hover:bg-yellow-600"
      >
        Submit
      </button>
    </form>
  </div>
</template>