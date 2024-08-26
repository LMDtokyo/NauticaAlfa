<template>
  <div class="container">
    <div class="flex flex-col lg:flex-row bg-black/30 border border-black rounded-[10px] p-3 gap-2 justify-between">
      <section class="bg-black/30 border border-black rounded-[10px] p-2 h-[860px] flex-1 overflow-auto">
        <header class="mb-4 h-[45px] flex items-center">
          <h3
            class="text-[#DD9300] py-[1px] bg-gradient-to-tr w-fit rounded-[10px] border-[1px] px-7 font-messiri font-bold text-xl from-[#080808]/40 from-[30%] to-[#5F0000AB] to-[100%] border-[#AE1F00]"
          >
            Рейтинг событий
          </h3>
        </header>

        <div class="grid grid-cols-1 2xl:grid-cols-2 gap-3">
          <NuxtLink v-for="(_, idx) in 8" :key="idx" :to="'/monsters/' + idx">
            <LocationEntityWrapper image="/img/monsters.png" :skills="[1, 2, 3]">
              <LocationEntityHeader class="mb-2" name="На краю земли" icon="/icons/inventory-icon.png" :lvl="20">
                <h4 class="drop-shadow-orange font-messiri font-bold text-[#550098]">S</h4>
              </LocationEntityHeader>
            </LocationEntityWrapper>
          </NuxtLink>
        </div>
      </section>

      <section class="bg-black/30 border border-black rounded-[10px] p-2 h-[860px] lg:w-[480px] overflow-auto">
        <header class="mb-4 flex justify-center">
          <div
            class="gap-[10px] h-[45px] items-center p-[10px] rounded-md flex w-fit bg-gradient-to-tr border from-[#080808]/40 from-[40%] to-[#401F00] border-[#FF9900]/20"
          >
            <img src="/icons/inventory-icon.png" class="h-[20px] w-[20px]" alt="" />
            <span class="drop-shadow-orange font-messiri font-bold text-lg leading-5 text-[#DD9300]">Флот монстры</span>
          </div>
        </header>

        <div class="space-y-2">
          <NuxtLink v-for="(_, idx) in 5" :key="idx" :to="'/monsters/' + idx">
            <LocationEntityWrapper image="/img/monsters.png" :skills="[1, 2, 3]">
              <LocationEntityHeader class="mb-2" name="На краю земли" icon="/icons/inventory-icon.png" :lvl="20" />
            </LocationEntityWrapper>
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>
