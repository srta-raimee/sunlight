<template>

<!-- <h2>Home</h2> -->

<img class="welcome-img" src="../assets/welcome.png" alt="Bevindo" />

<div class="bloco-esquerda" id="horas">
  <h2>Faltam</h2>
  <h1>{{ countdown }}</h1> 

  <div class="ladin-caixa">
    <h2 id="ladin">para o grande momento :)</h2>
    <!-- <br>
    <button id="butao-horas" type="button" @click="updateCountdown()" class="btn">Atualizar</button> -->
  </div>
</div>

<div class="bloco-direito" id="mensagem">
  <h2>Que horas são?</h2>
  <h1>🇧🇷 Brasil: {{ brazilTime }}</h1>
  <h1>🇵🇹 Portugal: {{ portugalTime }}</h1>
</div>

<div class="bloco-esquerda">
  <h2>Playlist Sunlight</h2>
   <div class="playlist-container">
      <iframe
      class="yt-frame"
      src="https://www.youtube-nocookie.com/embed/videoseries?list=PLm_PShu5fJfsF-mbGRIQtQHGk_BiH1EwE"
      title="Playlist"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
    </iframe>
  </div>
</div>

</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// ---------- COUNTDOWN ----------
const targetDate = new Date('2026-01-28T11:00:00-03:00')
const countdown = ref('')

function updateCountdown() {
  const now = new Date()
  const diff = targetDate.getTime() - now.getTime()

  if (diff <= 0) {
    countdown.value = "EBA, CHEGOU!!!!!!"
    return
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)

  countdown.value = `${days} dias • ${hours} horas • ${minutes} minutos`
}

// ---------- CLOCKS ----------
const brazilTime = ref('')
const portugalTime = ref('')

function updateClocks() {
  const now = new Date()

  brazilTime.value = now.toLocaleTimeString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })

  portugalTime.value = now.toLocaleTimeString('pt-PT', {
    timeZone: 'Europe/Lisbon',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}

// ---------- IMAGE POP ----------
function pop() {
  const img = document.querySelector('.welcome-img')
  if (img) {
    img.classList.remove('pop')
    void img.offsetWidth
    img.classList.add('pop')
  }
}

function onScroll() {
  const img = document.querySelector('.welcome-img')
  if (!img) return

  const rect = img.getBoundingClientRect()
  const inView = rect.top < window.innerHeight && rect.bottom > 0

  if (inView) pop()
}

// ---------- BLOCK OBSERVER ----------
function setupBlocoObserver() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("pop")
        } else {
          entry.target.classList.remove("pop")
        }
      })
    },
    { threshold: 0.2 }
  )

  document.querySelectorAll(".bloco-esquerda, .bloco-direito")
    .forEach(bloco => observer.observe(bloco))
}

// ---------- TIMERS ----------
let countdownInterval: number
let clockInterval: number

onMounted(() => {
  updateCountdown()
  countdownInterval = window.setInterval(updateCountdown, 1000 * 60 * 60)

  updateClocks()
  clockInterval = window.setInterval(updateClocks, 1000)

  pop()
  window.addEventListener("scroll", onScroll)

  setupBlocoObserver()
})

onUnmounted(() => {
  clearInterval(countdownInterval)
  clearInterval(clockInterval)
  window.removeEventListener("scroll", onScroll)
})
</script>

<style scoped>

.welcome-img {
  position: relative;
  top: 80%;
  filter: sepia(5) saturate(15) hue-rotate(8deg) brightness(1.1);
  height: 50%;
  display: block;
  margin: 0 auto;
  

  /* animação */
  transition: transform 0.4s ease, opacity 0.4s ease;
  opacity: 0;
  transform: scale(0.7);
}

.welcome-img.pop {
  opacity: 1;
  transform: scale(1.0);
}

.bloco-esquerda,
.bloco-direito {
  opacity: 0;
  transform: scale(0.7);
  transition: transform 0.4s ease, opacity 0.4s ease;
}

.bloco-esquerda.pop,
.bloco-direito.pop {
  opacity: 1;
  transform: scale(1.0);
}

</style>
