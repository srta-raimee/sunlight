<script setup lang="ts"></script>

<template>
  <details class="card">
    <summary class="card-header">Título do card</summary>
    <div class="card-content">
      <p>Conteúdo expandido aqui.</p>
    </div>
  </details>
</template>

<style scoped>
.card { border: 1px solid #ddd; border-radius: 12px; padding: .5rem 1rem; }
.card-header { cursor: pointer; font-weight: 600; list-style: none; }
.card[open] .card-header { color: #222; }
.card-content { padding: .5rem 0 1rem; }
</style>
