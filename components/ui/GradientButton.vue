<template>
  <div>
    <component
      :is="tag"
      v-bind="attributes"
      :class="[
        paddingClasses,
        variantClasses,
        textClasses,
        disabled && 'cursor-default',
        `flex items-center justify-between rounded-[10px] w-full duration-200 bg-gradient-to-tr border-[1px] ${paddingClasses}`
      ]"
      @click="handleOpenCollapse"
    >
      <div :class="[elementsPositionComputed, 'w-full flex items-center']">
        <slot name="prefix"/>
        <slot/>
      </div>
      <svg
        v-if="collapsibles"
        :class="[opened && 'rotate-180', 'duration-300 h-5 w-5']"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width="2.3em"
        height="2.3em"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
      <svg
        v-else-if="as === 'NuxtLink'"
        class="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width="2.3em"
        height="2.3em"
      >
        <path
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </svg>
      <slot name="suffix" v-else/>
    </component>
    <Transition>
      <div
        v-if="collapsibles && opened"
        :class="[
          contentBoxHeight || '',
          'mt-1 rounded-[10px] bg-[#080808]/40 border-[1px] border-[#FF9900]/20 p-[10px] overflow-auto'
        ]"
      >
        <slot name="content"/>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts">
interface Variants {
  [key: number]: { default: string; disabled: string; active: string };
}

const variants: Variants = {
  1: {
    default: 'from-[#8BAE00]/40 to-[#8BAE00]/10 border-[#8BAE00]',
    disabled: 'btn-disabled border-[#8BAE00]',
    active: 'from-[#080808]/40 from-[30%] to-[#0b1906] to-[80%] border-[#8BAE00]'
  }
};

const positions = { center: 'justify-center', end: 'justify-end', start: 'justify-start' };
</script>

<script setup lang="ts">
import { computed, ref, resolveComponent } from '#imports';

const {
  variant = 1,
  paddingClasses = 'p-[10px]',
  textClasses = 'text-[#DD9300]',
  as = 'button',
  to,
  elementsPosition = 'start',
  active,
  collapsibles,
  contentBoxHeight,
  openedByDefault,
  disabled
} = defineProps<{
  paddingClasses?: string;
  variant?: number;
  textClasses?: string;
  as?: 'button' | 'NuxtLink';
  to?: string;
  elementsPosition?: 'start' | 'center' | 'end';
  active?: boolean;
  collapsibles?: boolean;
  contentBoxHeight?: string;
  openedByDefault?: boolean;
  disabled?: boolean;
}>();

const tag = computed(() => (as === 'NuxtLink' ? resolveComponent('NuxtLink') : as));
const attributes = computed(() => as === 'NuxtLink' && { to });

const variantClasses = computed(() => {
  if (disabled) return variants[variant].disabled;
  return active ? variants[variant].active : variants[variant].default;
});

const elementsPositionComputed = computed(() => positions[elementsPosition] ?? positions.start);

const opened = ref(openedByDefault);
const handleOpenCollapse = () => collapsibles && (opened.value = !opened.value);
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  overflow: hidden;
  transition: all 0.3s;
}

.v-enter-from,
.v-leave-to {
  height: 0;
  padding-top: 0;
  padding-bottom: 0;
  opacity: 0;
}

.btn-disabled {
  background: linear-gradient(-45deg, rgba(0, 0, 0, 0) 48%, #452f0e 50%, rgba(0, 0, 0, 0) 52%);
  background-size: 1em 1em;
}
</style>
