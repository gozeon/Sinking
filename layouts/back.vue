<template>
  <div class="w-1/2 mx-auto p-4">
    <button class="border-2 border-gray-800 text-gray-800 px-3 py-1 rounded mb-2 hover:border-gray-300" @click="$router.go(-1)">Back</button>

    <Nuxt />
  </div>
</template>
