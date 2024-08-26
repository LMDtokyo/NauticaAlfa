<template>
  <GradientText class="font-bold font-messiri text-xl" :variant="1">
    {{ name }}
    <template v-if="lvl">
      <GradientText as="span" :variant="2">
        {{ lvl }}
      </GradientText>
      <span class="text-[#FFC977]"> lvl</span>
    </template>
  </GradientText>
</template>

<script setup lang="ts">
defineProps<{ name: string; lvl?: number }>();
</script>
