<template>
  <div class="container">
    <section class="bg-black/30 border border-black rounded-[10px] p-5">
      <div class="grid lg:grid-cols-2 2xl:grid-cols-3 gap-4">
        <NuxtLink v-for="(_, idx) in 15" :key="idx" :to="'/sea/' + idx">
          <locationEntityWrapper image="/img/sea.png" :skills="[4, 5]">
            <locationEntityHeader class="mb-2 max-h-[45px]" name="Пуэрто-Рико" icon="/icons/inventory-icon.png">
              <div class="flex items-center gap-2 font-bold font-messiri">
                <span>
                  <span class="text-[#780000]">62</span>
                  <span class="text-white">\</span>
                  <span class="text-[#159600]">2</span>
                </span>

                <img src="/icons/image76.png" class="h-[35px]" alt="" />

                <h3 class="text-[#247917]">Охотники</h3>
              </div>
            </locationEntityHeader>
          </locationEntityWrapper>
        </NuxtLink>
      </div>

      <footer class="mt-5 flex gap-6">
        <div
          class="flex items-center justify-center gap-3 text-center border border-[#38037C] rounded-[10px] p-1 font-messiri font-bold text-xl text-[#DD9300] w-[480px]"
        >
          Морские пузырики <br />вы собрали: 147\500
          <img class="h-[34px]" src="icons/47.png" alt="" />
        </div>

        <div
          class="flex items-center justify-center gap-3 border border-[#38037C] rounded-[10px] p-1 font-messiri font-bold text-xl text-[#8F00FF] text-center w-[480px]"
        >
          Мировой босс - <br />Пуэрто-Рико
          <img class="h-[34px]" src="icons/47.png" alt="" />
        </div>
      </footer>
    </section>
  </div>
</template>

<script setup></script>
