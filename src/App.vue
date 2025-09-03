<script lang="ts" setup>
import NavBar, { type MenuItem } from './components/NavBar.vue'

const items: MenuItem[] = [
  { label: 'Home', to: '/' },
  { label: 'What time is it?', to: '/wtii' },
  { label: 'BUNDA (externo)', href: 'https://example.com' },
]
</script>

<template>
  <NavBar brand="Sunlight" :items="items" />
  <main class="page">
    <RouterView />
  </main>
</template>

<style scoped>
.page {
  max-width: 1200px;
  margin: calc(var(--nav-height) + 24px) auto 0;
  padding: 0 24px 24px;
}
</style>
