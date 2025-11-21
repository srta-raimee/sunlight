<script lang="ts" setup>
import NavBar from './components/NavBar.vue'

type MenuItem = {
  label: string
  to?: string
  href?: string
}

const items: MenuItem[] = [
  { label: 'Home', to: '/' },
  { label: 'What time is it?', to: '/wtii' },
  { label: 'Pics', to: '/pics' },
  { label: 'Tales', to: '/tales' },
  
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
