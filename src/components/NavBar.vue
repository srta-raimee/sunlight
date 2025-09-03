<script lang="ts" setup>
import { computed, ref } from 'vue'

export interface MenuItem {
  label: string
  to?: string
  href?: string
  target?: '_blank' | '_self'
}

const props = defineProps<{
  brand?: string
  items: MenuItem[]
  sticky?: boolean
}>()

const open = ref(false)
const isSticky = computed(() => props.sticky ?? true)
</script>

<template>
  <header :class="['nv-wrap', { sticky: isSticky }]">
    <nav class="nv" aria-label="Main navigation">
      <div class="nv__brand">
        <slot name="brand">
          <span class="nv__brand-text">{{ brand ?? 'MyApp' }}</span>
        </slot>
      </div>

      <button
        class="nv__toggle"
        :aria-expanded="open"
        aria-label="Abrir menu"
        @click="open = !open"
      >
        ☰
      </button>

      <ul :class="['nv__list', { 'nv__list--open': open }]">
        <li v-for="(item, i) in items" :key="i" class="nv__item">
          <slot name="item" :item="item">
            <component
              :is="item.to ? 'RouterLink' : 'a'"
              class="nv__link"
              :to="item.to"
              :href="item.href"
              :target="item.target ?? (item.href?.startsWith('http') ? '_blank' : '_self')"
            >
              {{ item.label }}
            </component>
          </slot>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
/* Barra ocupa 100% da largura, mas continua no fluxo (sticky) */
.nv-wrap {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);     /* desfoca o fundo */
  -webkit-backdrop-filter: blur(8px); 
  color: #fff;
  z-index: 1000;
  border-bottom: 1px solid rgba(255,255,255,0.2);
}


/* Conteúdo interno centralizado; troque max-width se quiser mais largo/estreito */
.nv {
  max-width: 1200px;
  margin: 0 auto;
  padding: 18px 24px;
  display: flex;
  align-items: center;
  gap: 20px;
}

/* Brand */
.nv__brand-text {
  font-weight: 800;         /* 700–900 são válidos */
  letter-spacing: .2px;
  font-size: 3.2rem;
}

/* Toggle (mobile) */
.nv__toggle {
  display: none;
  font-size: 1.25rem;
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
}

/* Lista de links */
.nv__list {
  margin-left: auto;
  display: flex;
  gap: 12px;
  list-style: none;
  padding: 0;
}
.nv__link {
  text-decoration: none;
  color: #fff;
  padding: 8px 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: background .2s ease;
}
.nv__link:hover,
.nv__link:focus { background: rgba(255,255,255,.08); }

@media (max-width: 720px) {
  .nv { flex-wrap: wrap; }
  .nv__toggle { display: inline-block; margin-left: auto; }
  .nv__list {
    width: 100%;
    display: none;
    flex-direction: column;
    margin-top: 8px;
  }
  .nv__list--open { display: flex; }
}
</style>
