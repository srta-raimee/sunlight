<script lang="ts" setup>
import { ref } from 'vue'

import us1 from '../assets/us/us1.jpeg'
import us2 from '../assets/us/us2.jpeg'
import us3 from '../assets/us/us3.jpeg'
import us4 from '../assets/us/us4.jpeg'
import us5 from '../assets/us/us5.jpeg'
import us6 from '../assets/us/us6.jpeg'
import us7 from '../assets/us/us7.jpeg'
import us8 from '../assets/us/us8.jpeg'
import us9 from '../assets/us/us9.jpeg'

import ss1 from '../assets/sunset/s11.jpeg'
import ss2 from '../assets/sunset/s21.jpeg'
import ss3 from '../assets/sunset/s1.jpg'
import ss4 from '../assets/sunset/s2.png'
import ss5 from '../assets/sunset/s3.jpeg'



import c1 from '../assets/checkpoints/c1.png'
import c2 from '../assets/checkpoints/c2.png'
import c3 from '../assets/checkpoints/c3.png'
import c4 from '../assets/checkpoints/c4.png'

const carousel1 = [
    us8,
    us1,
    us2,
    us3,
    us4,
    us5,
    us9,
    us6,
    us7,
]

const carousel2 = [
    ss1,
    ss2,
    ss3,
    ss4,
    ss5
]

const carousel3 = [
    c1,
    c2,
    c3,
    c4,
]

const track1 = ref<HTMLElement | null>(null)
const track2 = ref<HTMLElement | null>(null)
const track3 = ref<HTMLElement | null>(null)

function scrollTrack(track: HTMLElement | null, direction = 1) {
    if (!track) return
    // scroll approx one item width (80% of visible area)
    const amount = Math.round(track.clientWidth * 0.8) * direction
    track.scrollBy({ left: amount, behavior: 'smooth' })
}

function prev1() { scrollTrack(track1.value, -1) }
function next1() { scrollTrack(track1.value, 1) }
function prev2() { scrollTrack(track2.value, -1) }
function next2() { scrollTrack(track2.value, 1) }

// --- clickable single card (c3) + small popup ---
// creates a simple centered popup (click to dismiss / auto-dismiss after 10s)
let popupEl: HTMLElement | null = null
let popupTimeout: ReturnType<typeof setTimeout> | null = null

function removePopup() {
    if (popupTimeout) {
        clearTimeout(popupTimeout)
        popupTimeout = null
    }
    if (popupEl && popupEl.parentNode) {
        popupEl.parentNode.removeChild(popupEl)
    }
    popupEl = null
}

function createPopup(text = 'Checkpoint 3 information') {
    if (popupEl) {
        // refresh text and restart timeout if already shown
        popupEl.textContent = text
        if (popupTimeout) clearTimeout(popupTimeout)
        popupTimeout = setTimeout(removePopup, 10000)
        return
    }
    popupEl = document.createElement('div')
    Object.assign(popupEl.style, {
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'rgba(0,0,0,0.9)',
        color: '#fff',
        padding: '12px 18px',
        borderRadius: '8px',
        zIndex: '9999',
        maxWidth: '90%',
        textAlign: 'center',
        boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
        cursor: 'pointer'
    })
    popupEl.textContent = text
    // click popup to close
    popupEl.addEventListener('click', removePopup)
    document.body.appendChild(popupEl)

    // auto-dismiss after 10 seconds
    popupTimeout = setTimeout(removePopup, 2500)
}

// attach click handler only to the card that uses the imported `c3` image
function attachClickableC3() {
    const tryBind = () => {
        const track = track3.value
        if (!track) return false
        const imgs = Array.from(track.querySelectorAll('img')) as HTMLImageElement[]
        if (!imgs.length) return false
        const img = imgs.find(i => {
            const srcAttr = i.getAttribute('src') || ''
            return srcAttr === c3 || srcAttr.includes(c3)
        })
        if (!img) return false
        img.style.cursor = 'pointer'
        const handler = () => createPopup('↑ ↑  ↓  ↓ ← → ← → B A')
        img.addEventListener('click', handler)
        return true
    }

    // DOM for the track may not be mounted yet; poll briefly until found
    let attempts = 0
    const maxAttempts = 30
    const interval = setInterval(() => {
        attempts++
        const bound = tryBind()
        if (bound || attempts >= maxAttempts) clearInterval(interval)
    }, 100)
}

// run binder from setup context
attachClickableC3()
function prev3() { scrollTrack(track3.value, -1) }
function next3() { scrollTrack(track3.value, 1) }
</script>

<template>
    <div class="galery-bloco">
        <h2>Galeria</h2>

        <div class="carousel">
            <h3>Primeiras Duas Semanas...</h3>
            <div class="track-wrapper">
                <button class="nav left" @click="prev1" aria-label="Previous">‹</button>
                <div class="track" ref="track1">
                    <div v-for="(src, i) in carousel1" :key="`c1-${i}`" class="card">
                        <img :src="src" :alt="`Image ${i + 1}`" />
                    </div>
                </div>
                <button class="nav right" @click="next1" aria-label="Next">›</button>
            </div>
        </div>

        <div class="carousel">
            <h3>Sunsets</h3>
            <div class="track-wrapper">
                <button class="nav left" @click="prev2" aria-label="Previous">‹</button>
                <div class="track" ref="track2">
                    <div v-for="(src, i) in carousel2" :key="`c2-${i}`" class="card">
                        <img :src="src" :alt="`Image ${i + 1}`" />
                    </div>
                </div>
                <button class="nav right" @click="next2" aria-label="Next">›</button>
            </div>
            <div class="carousel">
                <h3>Checkpoints e Momentíneos Virtuais</h3>
                <div class="track-wrapper">
                    <button class="nav left" @click="prev3" aria-label="Previous">‹</button>
                    <div class="track" ref="track3">
                        <div v-for="(src, i) in carousel3" :key="`c3-${i}`" class="card">
                            <img :src="src" :alt="`Image ${i + 1}`" />
                        </div>
                    </div>
                    <button class="nav right" @click="next3" aria-label="Next">›</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.galery-bloco {
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    color: #fff;
    text-align: center;
    background: rgba(0, 0, 0, 0.168); /* black and transparent */
    border-radius: 2%;
}

/* carousel layout */
.carousel {
    width: 100%;
    max-width: 1100px;
    margin: 1.25rem 0;
}

.carousel h3 {
    margin: 0 0 0.5rem 0;
    font-weight: 500;
}

/* wrapper keeps nav buttons positioned over the track */
.track-wrapper {
    position: relative;
}

/* horizontal scroll track - swipeable */
.track {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding: 1rem 0.5rem;
    scroll-behavior: smooth;
}

/* each card is a slide */
.card {
    min-width: 280px;
    height: 180px;
    flex: 0 0 auto;
    border-radius: 12px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.04);
    scroll-snap-align: center;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.6);
    transition: transform 180ms ease;
}

.card:hover {
    transform: translateY(-6px);
}

/* image fills card */
.card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* navigation buttons */
.nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 5;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.45);
    border: 1px solid rgba(255, 255, 255, 0.06);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    font-size: 20px;
    line-height: 1;
}

/* left / right positions */
.nav.left { left: 6px; }
.nav.right { right: 6px; }

/* hide default scrollbar (chromium) */
.track::-webkit-scrollbar { display: none; }
/* fallback for Firefox */
.track { scrollbar-width: none; }

/* responsive tweaks */
@media (max-width: 640px) {
    .card { min-width: 220px; height: 140px; }
    .nav { width: 34px; height: 34px; font-size: 18px; }
}
</style>