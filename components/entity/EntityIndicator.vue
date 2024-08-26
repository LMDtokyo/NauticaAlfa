<template>
  <div :class="[backgroundColor, 'rounded-[10px]']">
    {{ currentValue + ' / ' + maxValue }}
    <span v-if="showPercent" class="text-gray-300">({{ Math.floor((currentValue / maxValue) * 100) }}%)</span>
  </div>
</template>

<script setup lang="ts">
const {
  backgroundColor = 'bg-gradient-to-r from-[#690000] from-0% to-[#ac0c0c] to-100%',
  currentValue,
  maxValue,
  showPercent
} = defineProps<{ backgroundColor?: string; currentValue: number; maxValue: number; showPercent?: boolean }>();
</script>
