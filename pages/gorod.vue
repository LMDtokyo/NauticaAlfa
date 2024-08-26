<template>
  <div class="container">
    <div class="flex flex-wrap justify-center gap-10 max-w-[1400px] mx-auto">
      <NuxtLink v-for="location in locations" :key="location.name" :to="location.path ?? '/'">
        <LocationCard :image="location.img">
          {{ location.name }}
        </LocationCard>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'auth', backgroundImage: 'qwerty.png' });
// Картинки так, чтобы tailwind подгружал), или можно просто поменять на тег <img>

type location = { name: string; img: string; path?: string };

const locations: location[] = [
  { name: 'Море', img: `bg-[url('/img/locations/more.jpg')]`, path: '/sea' },
  { name: 'Монстры', img: `bg-[url('/img/locations/monstr.jpg')]`, path: '/monsters' },
  { name: 'Турниры', img: `bg-[url('/img/locations/ternir.jpg')]` },
  { name: 'Битва за карибы', img: `bg-[url('/img/locations/trevel.jpg')]` },
  { name: 'Осада порта', img: `bg-[url('/img/locations/war.jpg')]` },
  { name: 'Осада замка', img: `bg-[url('/img/locations/war2.jpg')]` },
  { name: 'Плантация', img: `bg-[url('/img/locations/plantan.jpg')]` },
  { name: 'Таверна', img: `bg-[url('/img/locations/tavern.jpg')]` },
  { name: 'Верфь', img: `bg-[url('/img/locations/werf.jpg')]` },
  { name: 'Пиратский рынок', img: `bg-[url('/img/locations/shop.jpg')]` },
  { name: 'Калипсо', img: `bg-[url('/img/locations/calipso.jpg')]` },
  { name: 'Пиратские мастера', img: `bg-[url('/img/locations/master.jpg')]` }
];
</script>
