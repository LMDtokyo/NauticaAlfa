<template>
  <div
    class="p-3 bg-gradient-to-tr border-[1px] from-[#080808]/40 from-[40%] to-[#401f0091] border-[#FF9900]/20 rounded-[5px] flex justify-between items-center"
  >
    <div class="flex items-center text-[#DD9300]">
      <img class="h-5 w-5 mr-2" v-if="icon" :src="icon" alt="" />

      <span class="drop-shadow-orange font-messiri font-bold">
        {{ name }}
        <span v-if="lvl" class="ml-5 text-[#8A0000]">{{ lvl }} LVL</span>
      </span>
    </div>

    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({ name: { type: String, required: true }, icon: String, lvl: Number });
</script>
