<template>
  <div
    :style="{ backgroundImage: item ? `url('${item.img}')` : '' }"
    :class="[
      item && !disabled && 'cursor-pointer',
      active ? 'border-green-800 shadow shadow-green-600' : 'border-[#31323C]',
      'relative w-16 h-16 rounded-lg border-[1px] bg-center bg-cover'
    ]"
  >
    <h2
      v-if="showCounter && item?.count"
      class="text-white absolute bottom-[-1px] right-1 select-none font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
    >
      x{{ item.count }}
    </h2>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  item?: { id: number | string; img: string; count: number };
  active?: boolean;
  disabled?: boolean;
  showCounter?: boolean;
}>();
</script>
