<template>
  <div class="border-b-[1px] border-[#565863] overflow-hidden">
    <div class="container flex justify-between">
      <div class="flex-1 flex items-center">
        <NuxtLink to="/">
          <img :src="`/img/logo${randomNumber}.png`" class="h-14" alt="" />
        </NuxtLink>
      </div>

      <nav class="flex -mb-[1px]">
        <NuxtLink
          v-for="(link, idx) in links"
          :key="idx"
          :to="link.path"
          class="text-[#717790c7] border-transparent flex font-poppis items-center gap-8 text-[15px] font-medium py-5 px-8 duration-200 border-b-2 hover:border-[#bbb4b4] hover:text-[#bbb4b4]"
        >
          <div :class="[link.icon, 'h-6 w-6 bg-cover bg-center']" />
          <span>{{ link.text }}</span>
        </NuxtLink>
      </nav>

      <div class="flex gap-7 whitespace-nowrap items-center flex-1 justify-end">
        <button class="relative cursor-pointer h-8 w-8 bg-[url('/icons/notification.png')] bg-center bg-cover">
          <h2 class="absolute font-messiri text-[#FFC977] text-lg -bottom-3 -right-1">24</h2>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const links = [
  { path: '/gorod', icon: `bg-[url('/icons/anchor.png')]`, text: 'Город' },
  { path: '/pirat', icon: `bg-[url('/icons/pirate.png')]`, text: 'Пират' },
  { path: '/fleet', icon: `bg-[url('/icons/fleet.png')]`, text: 'Флот' },
  { path: '/chat', icon: `bg-[url('/icons/chat.png')]`, text: 'Чат' },
  { path: '/trips', icon: `bg-[url('/icons/compass.png')]`, text: 'Путешествие' }
];

const randomNumber = Math.floor(Math.random() * 2);
</script>

<style scoped>
/* exact-active-class="border-[#bbb4b4] active text-[#bbb4b4]" почему-то не работает, когда-то узнай почему */
.router-link-active {
  color: #bbb4b4;
  border-color: #bbb4b4;
}
</style>
