<template>
  <div
    :style="{ backgroundImage: background?`url('/backgrounds/${background}')` : '' }"
    class='bg-[#1f2126] bg-cover bg-center flex flex-col min-h-screen'
  >
    <AppNavbar class='mb-4' />

    <slot />
  </div>
</template>

<script setup lang='ts'>
const route = useRoute();

const background = computed(() => route.meta.backgroundImage);
</script>
