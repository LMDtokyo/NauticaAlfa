<template>
  <div class="bg-center bg-cover min-h-screen text-white pt-[170px]" style="background-image: url('/backgrounds/qwerty.png')">
    <div class="container mx-auto text-center">
      <div class="flex justify-center mb-[30px]">
        <h1 class="text-7xl font-messiri leading-none font-black drop-shadow-orange">Nautica</h1>
      </div>
      <GradientButton :to="'/signin'" :elementsPosition="'center'" text-classes="text-[#DD9300]">
        <span class="drop-shadow-orange font-messiri font-bold text-lg leading-5">Играть</span>
      </GradientButton>
    </div>
  </div>
</template>

<script setup>
import GradientButton from '~/components/ui/GradientButton.vue'
</script>
