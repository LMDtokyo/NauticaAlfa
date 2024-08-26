<template>
  <div class="container flex flex-col sm:flex-row justify-between gap-4 mb-3">
    <section class="w-full sm:w-[482px] min-h-[863px] bg-black/30 border-[1px] border-black rounded-lg p-3">
      <hr class="mx-24 bg-[#FF9900]/20 border-none h-[1px] mb-2" />

      <div class="flex gap-[10px] mb-4 p-[10px] bg-[#0C0C0C40]/25 rounded-lg border-[1px] border-[#31323C]">
        <div
          :style="{ backgroundImage: `url(${player.avatar})` }"
          class="h-20 w-20 bg-center bg-cover rounded-lg overflow-hidden"
        ></div>

        <div class="flex-1 flex flex-col gap-1 justify-between">
          <EntityName :name="auth.user!.login" :lvl="player.lvl" />

          <div class="space-y-1 font-nunito text-[12px] font-bold text-white text-center">
            <EntityIndicator :current-value="player.hp" :max-value="player.hp" />
            <EntityIndicator
              background-color="bg-gradient-to-r from-[#00417C] from-0% to-[#0085FF] to-100%"
              :current-value="player.exp"
              :max-value="105"
              show-percent
            />
          </div>
        </div>
      </div>

      <div class="flex items-start gap-2 mb-4">
        <div class="flex gap-2 flex-wrap ml-2">
          <ResourcesCounter
            class="w-[70px] font-bold font-messiri"
            v-for="(value, name) in player.resources"
            :key="name"
          >
            <div class="w-6 flex justify-center items-center mr-2">
              <img class="h-6 w-auto" :src="`resources/${name}.png`" alt="" />
            </div>

            <GradientText :variant="1">{{ value }}</GradientText>
          </ResourcesCounter>
        </div>

        <img class="w-[69px] h-[59px]" src="icons/pngegg.png" alt="" />
      </div>

      <div class="space-y-2">
        <GradientButton
          v-for="button in buttons"
          :key="button.id"
          :active="activeTab === button.id"
          :disabled="button.id === 5"
          v-bind="buttonProps(button)"
          @click="!button.collapsibles && !button.link ? (activeTab = button.id) : null"
        >
          <template v-if="button.icon" #prefix>
            <img class="mr-[10px] h-5 w-5" :src="'/icons/' + button.icon" alt="" />
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

        <GradientButton :variant="2" @click="auth.logout" text-classes="text-red-600">
          <span class="drop-shadow-orange font-messiri font-bold text-lg leading-5">Выйти</span>
        </GradientButton>
      </div>
    </section>

    <div class="w-full sm:w-[550px]">
      <section class="relative flex flex-col h-[720px] bg-black/30 border-[1px] border-black rounded-lg p-3 mb-3">
        <h1 class="font-messiri text-[30px] text-[#FFC977] mb-[10px]">Инвентарь</h1>

        <ResourcesCounter
          class="mb-3 w-fit text-xs bg-[#0F1013] rounded-[10px] py-[5px] px-[10px] font-[Open Sans] font-bold text-white"
        >
          <img class="w-[15px] mr-1 h-[15[px]]" src="icons/cd.png" alt="" />
          {{ balance }}
        </ResourcesCounter>

        <div class="border-[1px] border-black rounded-[20px] flex-1 p-[20px] bg-black/30">
          <DraggableInventory
            class="max-w-[800px] justify-center"
            :size="inventory.size"
            :slots="slots"
            :gap="12"
            v-model:selectedSlot="selectedSlot"
            @move-item="onMoveItem"
          />
        </div>

        <div class="flex flex-col xl:flex-row gap-2 my-2">
          <GradientButton padding-classes="py-[6px] px-[10px]">
            <template #prefix>
              <img class="mr-2 -mt-1 h-[20px] w-[20px]" src="/icons/filter-icon.png" alt="" />
            </template>
            <span class="font-messiri font-bold text-lg leading-5">Фильтрация</span>
          </GradientButton>

          <GradientButton padding-classes="py-[6px] px-[10px]">
            <template #prefix>
              <img class="mr-2 -mt-1 h-[20px] w-[20px]" src="/icons/sort-icon.png" alt="" />
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
          <span class="font-messiri font-bold text-lg leading-5"><span class="text-white">П</span>родать все</span>
        </GradientButton>
      </section>
      <section class="h-[152px] bg-black/30 border-[1px] border-black rounded-lg p-3"></section>
    </div>

    <section
      class="flex flex-col w-full sm:w-[482px] h-fit sm:h-[883px] bg-black/30 border-[1px] border-black rounded-lg p-3"
    >
      <template v-if="selectedSlot">
        <div class="flex-1">
          <h1 class="font-messiri text-[30px] text-white mb-7">
            {{ selectedItem!.item.label }} <span class="text-zinc-500/60">(x{{ selectedItem!.count ?? 1 }})</span>
          </h1>

          <div :style="{ backgroundImage: `url('${selectedItem!.item.image}')` }" class="h-32 w-32 rounded-lg bg-center bg-cover mb-2"></div>

          <div class="space-y-2 mb-12">
            <h2 class="text-[#C09645] font-messiri text-xl font-bold bg-black/50 rounded-[10px] w-fit px-2 min-w-[160px]">
              Вес: {{ selectedItem!.item.weight }}
            </h2>
            <h2 class="text-[#C09645] font-messiri text-xl font-bold bg-black/50 rounded-[10px] w-fit px-2 min-w-[160px]">
              Цена продажи: {{ selectedItem!.item.sell_price }}
            </h2>
          </div>

          <div class="mb-4">
            <h2 class="font-messiri text-white font-bold text-lg leading-none">Описание:</h2>
            <p class="text-gray-400/40 font-messiri">{{ selectedItem?.item.description ?? 'Отстуствует' }}</p>
          </div>
        </div>

        <div class="flex flex-wrap gap-2">
          <GradientButton
            class="flex-1"
            elements-position="center"
            :variant="2"
            padding-classes="py-[6px] px-[10px]"
            @click="balance += 5000"
          >
            <span class="font-messiri font-bold text-lg leading-5"><span class="text-white">П</span>родать</span>
          </GradientButton>

          <GradientButton class="flex-1" elements-position="center" :variant="3" padding-classes="py-[6px] px-[10px]">
            <span class="font-messiri font-bold text-lg leading-5"><span class="text-white">Н</span>адеть</span>
          </GradientButton>
        </div>
      </template>
    </section>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta, ref, watch } from '#imports';
import resolveStackItem from '~/utils/calcStackSize';
import type { InventorySlot, NavButton } from "~";
import napi from '../api/index';

definePageMeta({ middleware: 'auth', backgroundImage: 'qwerty.png' });

const auth = useAuthStore();
const player = await napi.players.player<['resources', 'exp', 'inventoryId']>(auth.user!.id, { include: ['resources', 'exp', 'inventoryId'] });

const inventory = await napi.inventory.fetch(player.inventoryId);
const slots = ref<Array<InventorySlot | undefined>>(new Array(inventory.size).fill(undefined));
inventory.slots.forEach(item => {
  if (item) slots.value[item.slot - 1] = item;
});

const selectedSlot = ref<number | undefined>(undefined);
const selectedItem = computed(() => {
  return !selectedSlot.value ? undefined : slots.value.find(item => item && item.slot === selectedSlot.value);
})

const onMoveItem = async (slot: InventorySlot, { newSlot, oldSlot }: { newSlot: number; oldSlot: number }) => {
  if (newSlot > inventory.size || newSlot < 1 || oldSlot > inventory.size || oldSlot < 1) return;
  const secondSlot = slots.value[newSlot - 1];

  const firstSlotIsSelected = slot.slot === selectedSlot.value;
  const secondSlotIsSelected = secondSlot && secondSlot.slot === selectedSlot.value;

  if (slot.item.name === secondSlot?.item.name) { // если это одинаковые предметы
    if (secondSlot.count >= secondSlot.item.max_stack_size) return; // стак в который хотят переместить заполнен

    // получаем результат перемещения (first - стак в который переместили, second - стак который перемещали)
    const [first, second] = resolveStackItem(secondSlot.item.max_stack_size, [slot.count, secondSlot.count]);

    if (second === 0) { // Если размер стака который перемещали 0, значит в принципе ячейку эту надо очистить
      slots.value[newSlot - 1] = { ...slot, count: first, slot: newSlot };
      slots.value[oldSlot - 1] = undefined;
    } else { // если размер стака который перемещали не равен нулю, это может произойти если стак В КОТОРЫЙ перемещали заполнен
      slots.value[newSlot - 1] = { ...slot, count: first, slot: newSlot };
      slots.value[oldSlot - 1] = { ...secondSlot, count: second, slot: oldSlot };
    }
  } else { // если это разные предметы, либо на место куда перемещают предмета вообще нет, то поменять их местами
    slots.value[newSlot - 1] = { ...slot, slot: newSlot };
    secondSlot ? slots.value[oldSlot - 1] = { ...secondSlot, slot: oldSlot } : slots.value[oldSlot - 1] = undefined;
  }

  if (firstSlotIsSelected) selectedSlot.value = newSlot;
  if (secondSlotIsSelected) selectedSlot.value = oldSlot;

  try {
    await napi.inventory.move(player.inventoryId, { from: oldSlot, to: newSlot });
  } catch (e) {
    slots.value[newSlot - 1] = secondSlot;
    slots.value[oldSlot - 1] = slot;

    if (firstSlotIsSelected) selectedSlot.value = oldSlot;
    if (secondSlotIsSelected) selectedSlot.value = newSlot;
  }
};

const activeTab = ref(2);
const balance = ref(0);

const buttonProps = (button: NavButton) => {
  if (button.link) return { as: 'NuxtLink' as 'NuxtLink', to: button.path };

  if (button.collapsibles) {
    return { collapsibles: true, openedByDefault: button.content!.opened, contentBoxHeight: button.content!.height };
  }

  return {};
};

const buttons: NavButton[] = [
  { id: 1, text: 'Почта', icon: 'post-icon.png' },
  { id: 2, text: 'Инвентарь', icon: 'inventory-icon.png' },
  { id: 3, text: 'Корабль', icon: 'blue-flower-icon.png' },
  { id: 4, text: 'Профессия', icon: 'post-icon.png' },
  { id: 5, text: 'Таланты', icon: 'inventory-icon.png' },
  { id: 6, text: 'Навыки', icon: 'blue-flower-icon.png' },
  {
    id: 7,
    text: 'Метки',
    icon: 'blue-flower-icon.png',
    collapsibles: true,
    content: {
      height: 'h-[86px]',
      opened: true,
      slots: {
        count: 6,
        items: [
        ]
      }
    }
  },
  {
    id: 8,
    text: 'Питомец',
    icon: 'blue-flower-icon.png',
    collapsibles: true,
    content: { height: 'h-[86px]', opened: false, slots: { count: 2, items: [] } }
  },
  { id: 9, text: 'Поодержка', icon: 'post-icon.png', link: true, path: '/' },
  { id: 10, text: 'Соглашение', icon: 'inventory-icon.png' },
  { id: 11, text: 'Помощь', icon: 'blue-flower-icon.png' }
];
</script>
