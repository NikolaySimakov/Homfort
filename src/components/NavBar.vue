<template>
  <div>
    <nav
      id="nav"
      class="inset-x-0 top-0 flex flex-row justify-between z-10 text-white bg-transparent"
    >
      <div class="p-8">
        <div class="font-extrabold tracking-widest text-2xl">
          <a href="#" class="transition duration-500 hover:text-gray-300">Homfort</a>
        </div>
      </div>

      <!-- Tablet & Bigger Sceen -->
      <div class="p-8 hidden md:flex flex-row justify-between font-medium">
        <a
          id="hide-after-click"
          href="#"
          v-scroll-to="'#about'"
          class="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-yellow-500 transition duration-500"
        >About</a>
        <a
          href="#"
          v-scroll-to="'#whyus'"
          class="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-yellow-500 transition duration-500"
        >
          Why
          us?
        </a>
        <a
          href="#"
          v-scroll-to="'#goods'"
          class="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-yellow-500 transition duration-500"
        >
          Our
          products
        </a>
      </div>

      <!-- Mobile -->
      <div id="nav-open" class="p-8 md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-menu"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </div>
    </nav>

    <!-- Opened Nav in Mobile, you can use javascript/jQuery -->
    <div
      id="nav-opened"
      class="left-0 right-0 hidden bg-white mx-2 mt-16 rounded-br rounded-bl shadow z-10"
    >
      <div class="p-2 divide-y divide-gray-600 flex flex-col">
        <a href="#about" class="p-2 font-semibold hover:text-indigo-700">About</a>
        <a href="#whyus" class="p-2 font-semibold hover:text-indigo-700">Why Us ?</a>
        <a href="#showcase" class="p-2 font-semibold hover:text-indigo-700">Our Products</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>