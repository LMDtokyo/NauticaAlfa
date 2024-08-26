<template>
  <div class="group rounded-[10px] py-2 px-4 flex items-center justify-between duration-200 hover:bg-black/30">
    <div class="flex gap-3">
      <div
        class="h-[60px] w-[60px] rounded-full bg-cover bg-center cursor-pointer"
        :style="{ 'background-image': `url('${sender.avatar}')` }"
      ></div>

      <div class="font-messiri">
        <div class="flex md:gap-3 flex-col md:flex-row md:items-center mb-2 md:mb-0">
          <EntityName class="cursor-pointer" style="font-size: 16px" :name="sender.login" :lvl="sender.lvl" />
          <span class="text-xs md:text-base -mt-1 md:mt-0 font-bold text-[#545453]/70"
            >Сегодня в {{ new Date(timestamp).toLocaleTimeString().slice(0, -3) }}</span
          >
        </div>

        <p class="text-[#D7D7D7] text-sm max-w-lg">
          <slot />
        </p>
      </div>
    </div>

    <button class="opacity-0 group-hover:opacity-100 duration-200 h-6 w-6 text-[#D7D7D7] hover:text-white">
      <svg
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{ sender: { id: number, login: string, lvl: number; avatar: string; }; timestamp: number }>()
</script>
