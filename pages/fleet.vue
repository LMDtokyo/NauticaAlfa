<template>
  <div class="container flex flex-col sm:flex-row justify-between gap-4 mb-3">
    <aside class="w-full flex flex-col sm:w-[482px] sm:min-h-[880px] border border-black bg-black/30 rounded-[10px]">
      <header class="relative h-[268px] mb-4">
        <div class="h-full bg-[url('/img/IP7n-3.png')] bg-cover bg-center blur-[8px]"></div>
        <div class="absolute h-full inset-y-0 inset-x-0 pt-6 sm:pt-12 px-10 sm:px-20">
          <h1 class="text-center drop-shadow-[0_2px_2px_rgba(0,0,0,1)] text-3xl font-messiri text-[#FFC977]">
            Jolly Roger
            <GradientText as="span" :variant="2">437</GradientText>
            lvl
          </h1>

          <img class="mx-auto drop-shadow" src="/icons/pngegg195x188.png" alt=""/>
        </div>
      </header>

      <div class="flex-1 flex flex-col justify-between p-[10px]">
        <nav class="space-y-2 mb-4">
          <GradientButton
            v-for="button in fleetNavControls"
            :key="button.id"
            :active="activeTab === button.id"
            @click="!button.collapsibles && !button.link ? (activeTab = button.id) : null"
            :collapsibles="button.collapsibles"
            :opened-by-default="button.content?.opened"
            :content-box-height="button.content?.height"
          >
            <template v-if="button.icon" #prefix>
              <img class="mr-[10px] h-5 w-5" :src="'/icons/' + button.icon" alt=""/>
            </template>

            <span class="drop-shadow-orange font-messiri font-bold text-lg leading-5">{{ button.text }}</span>

            <template v-if="button.collapsibles" #content>
              <div class="flex flex-wrap gap-2">
                <InventorySlot
                  v-for="(_, idx) in button.content!.slots.count"
                  :key="idx"
                  :item="button.content!.slots.items[idx]"
                />
              </div>
            </template>
          </GradientButton>
        </nav>

        <GradientButton text-classes="text-[#ED2B00]" :variant="2">
          <template #prefix>
            <img class="mr-[10px] h-5 w-5" src="/icons/blue-flower-icon.png" alt=""/>
          </template>

          <span class="drop-shadow-orange font-messiri font-bold text-lg leading-5">Покинуть флот</span>
        </GradientButton>
      </div>
    </aside>

    <div class="flex-1 flex flex-col space-y-2">
      <section class="flex flex-col border border-black bg-black/30 p-[10px] rounded-[10px] flex-1">
        <h1 class="font-messiri text-[30px] text-[#FFC977] mb-[10px]">Казна</h1>

        <div class="flex flex-wrap gap-1 items-center mb-4">
          <ResourcesCounter
            v-for="(_, idx) in 5"
            :key="idx"
            class="w-fit text-xs bg-[#0F1013] rounded-[10px] py-[5px] px-[10px] font-[Open Sans] font-bold text-white"
          >
            <img class="w-[15px] mr-1 h-[15[px]]" src="icons/cd.png" alt=""/>
            1000
          </ResourcesCounter>

          <ResourcesCounter class="mt-1 sm:mt-0 ml-2 font-bold font-messiri" v-for="(_, idx) in 2" :key="idx">
            <img class="h-6 w-6 mr-2" src="icons/ore.png" alt=""/>
            <GradientText :variant="1">15.6К</GradientText>
          </ResourcesCounter>
        </div>

        <div class="p-[20px] border border-black rounded-[10px] bg-black/30 flex-1">
          <h1 class="font-messiri text-[20px] text-[#FFC977] mb-[10px]">Артефакты</h1>

          <div class="flex gap-3 flex-wrap max-w-[500px]">
            <InventorySlot
              v-for="(_, idx) in 12"
              :key="idx"
              :item="idx > 2 ? undefined : { id: idx, img: '1.png', count: 1 }"
              :active="idx === selectedItem"
              @click="idx > 2 ? null : (selectedItem = idx)"
            />
          </div>
        </div>

        <div class="flex flex-col xl:flex-row gap-2 my-2">
          <GradientButton padding-classes="py-[6px] px-[10px]">
            <template #prefix>
              <img class="mr-2 -mt-1 h-[20px] w-[20px]" src="/icons/filter-icon.png" alt=""/>
            </template>
            <span class="font-messiri font-bold text-lg leading-5">Фильтрация</span>
          </GradientButton>

          <GradientButton padding-classes="py-[6px] px-[10px]">
            <template #prefix>
              <img class="mr-2 -mt-1 h-[20px] w-[20px]" src="/icons/sort-icon.png" alt=""/>
            </template>
            <span class="font-messiri font-bold text-lg leading-5">В начале дорогие</span>
          </GradientButton>
        </div>

        <GradientButton
          class="w-full xl:w-fit"
          elements-position="center"
          :variant="2"
          padding-classes="py-[6px] px-14"
        >
          <span class="font-messiri font-bold text-lg leading-5"><span class="text-white">В</span>ложить ресурсы</span>
        </GradientButton>
      </section>

      <section class="border border-black bg-black/30 p-[10px] rounded-[10px] min-h-[150px] flex gap-2">
        <div class="w-1/2 border border-black bg-black/30 p-2 rounded-[10px]">
          <GradientButton
            class="flex-1 mb-2"
            elements-position="center"
            :variant="3"
            padding-classes="px-0 py-[6px] sm:px-[10px]"
          >
            <span class="font-messiri font-bold text-lg leading-5 whitespace-nowrap"
            ><span class="text-white">А</span>ктивные бонусы</span
            >
          </GradientButton>

          <div class="flex flex-wrap gap-3">
            <InventorySlot
              v-for="(_, idx) in 5"
              :item="idx > 2 ? undefined : { id: idx, img: '1.png', count: 1 }"
              :key="idx"
              disabled
            />
          </div>
        </div>

        <div class="w-1/2 border border-black bg-black/30 p-2 rounded-[10px]">
          <GradientButton
            class="flex-1 mb-2"
            elements-position="center"
            :variant="2"
            padding-classes="py-[6px] px-[10px]"
          >
            <span class="font-messiri font-bold text-lg leading-5"><span class="text-white">В</span>оюет</span>
          </GradientButton>

          <div class="flex flex-wrap gap-3">
            <InventorySlot
              v-for="(_, idx) in 3"
              :item="idx === 0 ? { id: 1, img: '2.png', count: 1 } : undefined"
              :key="idx"
              disabled
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NavButton } from '~';
import { ref } from '#imports';
definePageMeta({ middleware: 'auth', backgroundImage: 'qwerty.png' });

const fleetNavControls: NavButton[] = [
  {
    id: 1,
    text: 'Метки флота',
    icon: 'blue-flower-icon.png',
    collapsibles: true,
    content: {
      height: 'h-[86px]',
      opened: true,
      slots: {
        count: 4,
        items: []
      }
    }
  },
  { id: 2, text: 'Казна', icon: 'inventory-icon.png' },
  { id: 3, text: 'Постройки', icon: 'inventory-icon.png' },
  { id: 4, text: 'Статуя', icon: 'inventory-icon.png' },
  { id: 5, text: 'Чат', icon: 'inventory-icon.png' },
  { id: 6, text: 'Форум', icon: 'inventory-icon.png' },
  { id: 7, text: 'Достижения флота', icon: 'inventory-icon.png' },
  { id: 8, text: 'Плантация флота', icon: 'inventory-icon.png' }
];

const activeTab = ref(2);
const selectedItem = ref<number | null>(null);
</script>
