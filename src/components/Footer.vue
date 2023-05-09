<template>
  <footer id="footer" class="bg-gray-100">
    <div class="grid place-items-center">
      <div class="flex mt-12 mb-6">
        <a aria-label="Github" href="https://github.com/NikolaySimakov" class="px-2">
          <img src="https://img.icons8.com/fluency/48/000000/github.png" width="32" />
        </a>
        <a aria-label="Telegram" href="https://t.me/nikolaysimakov" class="px-2">
          <img src="https://img.icons8.com/ios-filled/50/000000/telegram-app.png" width="32" />
        </a>
      </div>
      <div class="text-xs text-center">
        <div class="mb-2">
          <router-link to="/info" class="px-2">Info</router-link>
          <router-link to="/support" class="px-2">Support</router-link>
          <router-link to="/cooperation" class="px-2">Cooperation</router-link>
        </div>
        <div class="mb-2">
          <router-link to="/terms-of-use" class="px-2">Terms of use</router-link>
          <router-link to="/privacy-policy" class="px-2">Privacy policy</router-link>
        </div>
        <p class="mb-12 text-gray-600">© 2022 Panto</p>
      </div>
    </div>
  </footer>
</template>
