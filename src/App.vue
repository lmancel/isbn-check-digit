<script setup lang="ts">
import BarcodeInput from './components/BarcodeInput.vue'
</script>

<template>
  <main>
    <BarcodeInput />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

main {
  min-width: 300px;
  max-width: 800px;
  width: 80%;
  background-color: var(--color-container-background);
  border-radius: 4px;
  padding: 50px 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
