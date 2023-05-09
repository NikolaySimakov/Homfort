<template>
  <div class="grid md:grid-cols-4 grid-cols-2 gap-x-6 gap-y-8 px-12 py-20" id="whyus">
    <div class="text-3xl font-bold text-justify my-auto">
      <h1>Why</h1>
      <h1>choosing us</h1>
    </div>
    <div v-for="i in 3" :key="i">
      <h1 class="text-lg font-bold">{{benefits[i-1].title}}</h1>
      <p class="text-sm my-4 text-gray-500">{{benefits[i-1].desc}}</p>
      <a href="#more-info" class="text-yellow-500">
        <p class="text-sm">
          More info
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 inline-block"
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
export default {
  data() {
    return {
      benefits: [
        {
          title: "Luxury facilities",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium architecto aperiam mollitia totam reprehenderit quae et illo eaque dicta."
        },
        {
          title: "Affordable price",
          desc:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum unde mollitia culpa suscipit veritatis."
        },
        {
          title: "Many choices",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, consectetur ullam tenetur quod maiores sed aspernatur aliquid ipsa cumque quisquam!"
        }
      ]
    };
  }
};
</script>

<style>
@media (min-width: 960px) {
  .md\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
  }
}
</style>