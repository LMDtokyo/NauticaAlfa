<template>
  <div
    :class="[
      image,
      'location relative group bg-cover h-[270px] w-[180px] rounded-lg bg-gray-400/30 cursor-pointer shadow-lg shadow-black/70 p-5 overflow-hidden duration-300 flex items-end'
    ]"
  >
    <h2
      class="duration-300 text-white font-semibold text-xl -mb-20 group-hover:mb-0 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
    >
      <slot />
    </h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{ image: string }>();
</script>

<style scoped>
/* не знаю почему, стили от tailwind не применяются эти */
.location:hover {
  box-shadow: 0 8px 16px 3px rgba(0, 0, 0, 0.6);
  transform: translateY(-3px) scale(1.05) rotateX(15deg);
}

.location::after {
  position: absolute;
  content: '';
  z-index: 10;
  width: 200%;
  height: 100%;
  top: -90%;
  left: -20px;
  opacity: 0.1;
  transform: rotate(45deg);
  background: linear-gradient(to top, transparent, #fff 15%, rgba(255, 255, 255, 0.5));
  transition: 0.3s;
}

.location:hover::after {
  transform: rotate(25deg);
  top: -40%;
  opacity: 0.15;
}
</style>
