<script setup lang="ts">
import type {InventorySlot} from "~";

const props = defineProps<{ size: number; slots: Array<InventorySlot | undefined>; gap: number; }>();
const emit = defineEmits<{
  (e: 'move-item', item: InventorySlot, positions: { oldSlot: number; newSlot: number; }): void
}>();

const selectedSlot = defineModel<number | undefined>('selectedSlot');

const onDragStart = (e: DragEvent, idx: number) => {
  const slot = props.slots.find(slot => slot?.slot === idx + 1);

  if (!slot) return e.preventDefault();

  e.dataTransfer!.dropEffect = 'move';
  e.dataTransfer!.effectAllowed = 'move';

  e.dataTransfer!.setData('slot', JSON.stringify(slot));
};

const resolveItem = (idx: number) => {
  const currentSlot = props.slots.find(slot => slot?.slot === idx + 1);

  return currentSlot ? {id: currentSlot.item.name, img: currentSlot.item.image, count: currentSlot.count} : undefined;
};

const TargetClassListController = (target: HTMLElement) => {
  return {
    add: () => target.classList.add('bg-green-300/30', 'border-green-300'),
    remove: () => target.classList.remove('bg-green-300/30', 'border-green-300')
  };
};

const onDragEnter = (e: DragEvent) => {
  e.preventDefault();

  TargetClassListController(e.target as HTMLElement).add();
};

const onDragLeave = (e: DragEvent) => {
  e.preventDefault();

  TargetClassListController(e.target as HTMLElement).remove();
};
const onDrop = (e: DragEvent, newIndex: number) => {
  const newSlot = props.slots.find(slot => slot?.slot === newIndex + 1);
  TargetClassListController(e.target as HTMLElement).remove();

  const slot: InventorySlot = JSON.parse(e.dataTransfer!.getData('slot'));

  if (newSlot?.slot === slot.slot) return;

  emit('move-item', slot, {oldSlot: slot.slot, newSlot: newIndex + 1});
};
</script>

<template>
  <div :style="{ gap: gap + 'px' }" class="flex flex-wrap">
    <InventorySlot
        class="shadow shadow-black/30 select-none"
        v-for="(_, idx) in size"
        :key="idx"
        :item="resolveItem(idx)"
        :show-counter="(resolveItem(idx)?.count ?? 0) > 1"
        :active="selectedSlot !== undefined && selectedSlot === slots[idx]?.slot"
        draggable="true"
        @click="selectedSlot = slots[idx]?.slot"
        @drop="onDrop($event, idx)"
        @dragstart="onDragStart($event, idx)"
        @dragover.prevent
        @dragenter="onDragEnter"
        @dragleave="onDragLeave"
    />
  </div>
</template>