<template>
  <div class="bg-gray-100" id="goods">
    <h1 class="text-3xl font-bold text-center pt-12">Best selling product</h1>
    <div class="text-center mt-8">
      <button
        v-for="i in categories.length"
        :key="i"
        class="rounded-full font-medium text-gray-900 px-3 py-2 transition duration-300 ease-in-out mx-1"
        :class="currentCategoryIndex == i-1 ? 'bg-white' : 'bg-gray-100 hover:bg-gray-200'"
        @click="categoryBtnTapped(i-1)"
      >{{categories[i-1]}}</button>
    </div>
    <div class="grid place-items-center pt-14">
      <div
        class="flex md:flex-cols-3 lg:flex-cols-4 xl:flex-cols-5 flex-cols-2 space-x-6 relative justify-center items-center"
      >
        <Product :index="1" :productData="goods[0]" />
        <Product :index="2" :productData="goods[1]" />
        <Product :index="3" :productData="goods[2]" class="hidden md:block" />
        <Product :index="4" :productData="goods[3]" class="hidden lg:block" />
        <Product :index="5" :productData="goods[4]" class="hidden xl:block" />

        <button
          type="button"
          class="absolute -left-11 text-gray-800 bg-white shadow-lg hover:bg-gray-50 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
          v-if="paginationIndex !== 0"
          @click="nextBtnTapped()"
        >
          <svg
            class="w-4 h-4"
            transform="scale(-1 1)"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button
          type="button"
          class="absolute -right-5 text-gray-800 bg-white shadow-lg hover:bg-gray-50 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
          @click="previousBtnTapped()"
        >
          <svg
            class="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="p-12">
      <a href="#" class="text-yellow-500 text-center">
        <p class="font-bold">
          Show more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="animate-bounce h-8 w-8 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </p>
      </a>
    </div>
  </div>
</template>

<script>
import Product from "./Product";
import goodsData from "./data/furniture.json";
export default {
  components: {
    Product
  },
  data() {
    return {
      categories: ["Chair", "Table", "Sofa", "Lamp"],
      currentCategoryIndex: 0,
      paginationIndex: 0,
      goods: {}
    };
  },
  created() {
    this.updateGoods();
  },
  methods: {
    categoryBtnTapped(tag) {
      if (this.categories[this.currentCategoryIndex] !== tag) {
        this.currentCategoryIndex = tag;
        this.updateGoods();
      }
    },
    updateGoods() {
      this.goods = goodsData[this.categories[this.currentCategoryIndex]];
      this.paginationIndex = 0;
    },
    nextBtnTapped() {
      this.paginationIndex += 1;
    },
    previousBtnTapped() {
      this.paginationIndex = Math.min(this.paginationIndex - 1, 0);
    }
  }
};
</script>

<style>
</style>