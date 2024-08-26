<template>
  <div class="container">
    <section class="bg-black/30 border border-black rounded-[10px] px-5 py-2">
      <header class="mb-12">
        <div
          class="p-3 w-fit flex items-center bg-gradient-to-tr border-[1px] from-[#080808]/40 from-[40%] to-[#401f0091] border-[#FF9900]/20 rounded-[5px]"
        >
          <img class="h-5 w-5 mr-[10px]" src="/icons/355.png" alt="" />
          <h3 class="drop-shadow-orange font-messiri font-bold text-[#DD9300]">
            Вы находитесь в городе <span class="text-white mr-4 lg:mr-56">Порт Роял </span>Куда направимся капитан?
          </h3>
        </div>
      </header>

      <div class="grid lg:grid-cols-2 2xl:grid-cols-3 gap-3">
        <NuxtLink v-for="(_, idx) in 15" :key="idx" :to="'/trips/' + idx">
          <LocationEntityWrapper image="/img/trips.png">
            <LocationEntityHeader class="mb-2" name="Порт роял" icon="/icons/355.png" :lvl="20">
              <h4 class="drop-shadow-orange font-messiri font-bold text-[#6B6B6B]">В пути 20 сек</h4>
            </LocationEntityHeader>
          </LocationEntityWrapper>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
