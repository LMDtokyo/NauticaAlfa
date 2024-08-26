<template>
  <div class="p-[10px] border border-black bg-black/30 flex gap-2 rounded-[10px]">
    <img class="h-[120px] w-[82px] bg-gray-200/20 rounded-lg" :src="image" alt="" />

    <div class="w-full">
      <slot />

      <div class="flex gap-4">
        <img v-for="(skill, idx) in skills" :key="idx" class="h-16 w-16" :src="`/skills/${skill}.png`" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  skills: Array
});
</script>
