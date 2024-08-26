// components/CharacterInfo.vue
<template>
  <div v-if="character" class="character-info">
    <h1>{{ character.name }}</h1>
    <p>Level: {{ character.level }}</p>
    <p>Gold: {{ character.gold }}</p>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>
export default {
  data() {
    return {
      character: null,
    };
  },
  async created() {
    const response = await fetch('http://localhost:5000/api/character/1');
    const data = await response.json();
    this.character = data;
  },
};
</script>

<style scoped>
.character-info {
  text-align: center;
  margin-top: 50px;
}
</style>
