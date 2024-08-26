<template>
  <div class="relative h-fit w-fit">
    <svg class="circle-container" viewBox="2 -2 28 36" xmlns="http://www.w3.org/2000/svg">
      <circle class="circle-container__background" r="16" cx="16" cy="16"></circle>
      <circle class="circle-container__progress" r="16" cx="16" cy="16" style="stroke-dashoffset: 0"></circle>
    </svg>
    <h2 class="absolute font-mono text-white top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">30%</h2>
  </div>
</template>

<script setup lang="ts">
// не оч, переделать нормально не позорится
defineProps<{ size: number; borderWidth: number; progress: number; defaultColor: string; completionColor: string }>();
</script>

<style scoped>
:root {
  --dot-diameter: 120px;
  --circle-border-width: 3px;
  --default-color: rgb(160, 159, 159);
  --completion-color: rgb(255, 255, 255);
}

.circle-container {
  width: v-bind(size + 'px');
  height: v-bind(size + 'px');
  transform: rotate(-90deg);
}

.circle-container__background {
  fill: none;
  stroke: v-bind(defaultColor);
  stroke-width: v-bind(borderWidth + 'px');
}

.circle-container__progress {
  fill: none;
  stroke: v-bind(completionColor);
  stroke-dasharray: 100 100;
  stroke-linecap: round; /* rounded */
  stroke-width: v-bind(borderWidth + 'px');
}
</style>
