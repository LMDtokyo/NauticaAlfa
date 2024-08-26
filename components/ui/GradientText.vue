<template>
  <component :is="as" :class="[classes, 'bg-clip-text text-transparent']">
    <slot />
  </component>
</template>

<script lang="ts">
const variants: { [key: number]: string } = {
  1: 'bg-gradient-to-t from-[#F6F5F5] from-0% via-[#636363] via-50% to-[#FCFCFC] to-100%', // Серый такой крч какой-то
  2: 'bg-gradient-to-t from-[#A09D97] from-50% to-[#EA7305] to-100%' // Снизу такой серенький какой-то, а сверху оранжевый
};
</script>

<script setup lang="ts">
const { as = 'h2', variant } = defineProps<{ as?: string; variant: number }>();

const classes = computed(() => variants[variant] ?? variants[1]);
</script>
