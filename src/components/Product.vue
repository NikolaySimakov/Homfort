<template>
  <div class="bg-white h-96 rounded-2xl overflow-hidden relative card-max-width">
    <img :src="productData.imageURL" class="p-3" />
    <div class="p-4">
      <p class="text-gray-400">{{productData.type}}</p>
      <h3 class="font-bold text-lg">{{productData.title}}</h3>
      <div class="flex">
        <svg
          class="w-5 h-5"
          :class="(productData.rating >= i) ? 'text-yellow-400' : 'text-gray-300'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          v-for="i in 5"
          :key="i"
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      </div>
      <h2 class="absolute bottom-0 left-0 mb-8 ml-4 font-bold text-lg">${{productData.price}}</h2>
      <button
        href
        class="flex bg-gray-900 rounded-full px-3 py-3 transition duration-300 ease-in-out hover:bg-gray-600 absolute bottom-0 right-0 mb-6 mr-4"
      >
        <svg
          class="h-5 w-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: Number,
    productData: {
      imageURL: String,
      type: String,
      title: String,
      rating: Number,
      price: Number
    }
  }
};
</script>

<style scoped>
div.card-max-width {
  max-width: 200px;
}
</style>