<script lang="ts" setup>
import NavBar from './components/NavBar.vue'
import FooterPe from './components/FooterPe.vue'

type MenuItem = {
  label: string
  to?: string
  href?: string
}

const items: MenuItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Joji', to: '/joji' },
  { label: 'Pics', to: '/pics' },
  { label: 'Tales', to: '/tales' },
  
]
</script>

<template>
  <NavBar brand="Sunlight" :items="items" />

  <main class="page">
    <RouterView />
  </main>

  <FooterPe company="Sunlight"/>

</template>

<style scoped>
.page {
  max-width: 1200px;
  margin: calc(var(--nav-height) + 24px) auto 0;
  padding: 0 24px 24px;
}
</style>
