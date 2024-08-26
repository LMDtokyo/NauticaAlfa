// components/Clicker.vue
<template>
  <div class="clicker">
    <button @click="collectGold">Collect Gold</button>
    <p>Gold: {{ gold }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gold: 0,
    };
  },
  methods: {
    collectGold() {
      this.gold += 1;
    },
  },
};
</script>

<style scoped>
.clicker {
  text-align: center;
  margin-top: 50px;
}
button {
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
}
</style>
