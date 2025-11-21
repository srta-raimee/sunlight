<template>
    <footer class="footer" role="contentinfo">
        <div class="footer__inner">
            <div class="footer__brand">
                <img src="../assets/sunlight-logo.png" class="footer__logo" alt="" aria-hidden="true" width="28" height="28" />
                <span class="footer__company">{{ company }}</span>
            </div>

            <nav class="footer__nav" aria-label="Footer navigation">
                <a class="footer__link" href="/">Home</a>
                <a class="footer__link" href="/pics">Pics</a>
                <a class="footer__link" href="/tales">Tales</a>
                <a class="footer__link" href="/joji">Mistério</a>
      
            </nav>

            <div class="footer__social" aria-label="Social links">
                <a class="icon" href="https://github.com/srta-raimee" target="_blank" rel="noopener" aria-label="GitHub">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 .5C5.73.5.75 5.47.75 11.74c0 4.92 3.19 9.09 7.61 10.56.56.1.77-.24.77-.54 0-.26-.01-1.12-.02-2.03-3.09.67-3.74-1.49-3.74-1.49-.51-1.31-1.25-1.66-1.25-1.66-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1.01 1.73 2.66 1.23 3.31.94.1-.73.39-1.23.71-1.51-2.47-.28-5.07-1.24-5.07-5.51 0-1.22.44-2.21 1.16-2.99-.12-.28-.5-1.41.11-2.95 0 0 .95-.31 3.12 1.15a10.8 10.8 0 012.84-.38c.96.01 1.93.13 2.84.38 2.17-1.46 3.12-1.15 3.12-1.15.61 1.54.23 2.67.11 2.95.72.78 1.16 1.77 1.16 2.99 0 4.28-2.61 5.23-5.09 5.5.4.35.76 1.03.76 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.21.65.78.54 4.42-1.48 7.6-5.65 7.6-10.56C23.25 5.47 18.27.5 12 .5z"/>
                    </svg>
                </a>

                <a class="icon" href="https://twitter.com/_DearAmerie" target="_blank" rel="noopener" aria-label="Twitter">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.88-2.36 8.52 8.52 0 01-2.7 1.03 4.25 4.25 0 00-7.24 3.88A12.07 12.07 0 013 4.79a4.25 4.25 0 001.32 5.67 4.19 4.19 0 01-1.92-.53v.05a4.25 4.25 0 003.41 4.17c-.5.14-1.02.17-1.56.06a4.25 4.25 0 003.97 2.95A8.52 8.52 0 012 19.54a12.05 12.05 0 006.53 1.91c7.84 0 12.13-6.49 12.13-12.12l-.01-.55A8.6 8.6 0 0024 5.5a8.3 8.3 0 01-2.54.7z"/>
                    </svg>
                </a>
                <a class="icon" href="https://instagram.com/srta.raimee" target="_blank" rel="noopener" aria-label="Instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zM17.8 6a1.3 1.3 0 1 1-1.3-1.3A1.3 1.3 0 0 1 17.8 6z"/>
                    </svg>
                </a>


            <a class="icon" href="https://dear-amerie.tumblr.com/" target="_blank" rel="noopener" aria-label="Tumblr">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M14.7 20.4c-2.3 0-3.9-1.2-3.9-3.7v-5.7h-2V8.2c1.6-.5 2.8-1.7 3.2-3.2h2.3v3h3v3.1h-3v5.1c0 .9.4 1.4 1.4 1.4h1.6v3.1c-.7.1-1.9.3-2.6.3z"/>
                </svg>
            </a>
              
            </div>
        </div>

        <div class="footer__bottom">
            <small>© {{ year }} {{ company }}. All rights reserved.</small>
            <br/>
            <small> By Larissa Raimee, with 💛</small>
        </div>
    </footer>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    company: { type: String, default: 'Sunlight' }
})

const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
    margin-top: 2rem;
    background-color: rgba(0, 0, 0, 0.139);
    color: #e9e9e9;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}


.footer__inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 1.25rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    background: rgba(46, 27, 15, 0.10);
}

.footer__brand {
    display: flex;
    gap: .5rem;
    align-items: center;
    font-weight: 600;
    font-size: 1rem;
}

.footer__logo {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
}

.footer__nav {
    display: flex;
    gap: .75rem;
    flex-wrap: wrap;
}

.footer__link {
    color: inherit;
    text-decoration: none;
    padding: .35rem .5rem;
    border-radius: .375rem;
    transition: background-color .15s ease, color .15s ease;
    font-size: .95rem;
}

.footer__link:hover,
.footer__link:focus {
    background: rgba(46, 27, 15, 0.10);
    outline: none;
}

.footer__social {
    display: flex;
    gap: .5rem;
    align-items: center;
}

.icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: inherit;
    text-decoration: none;
    padding: .35rem;
    border-radius: .375rem;
    transition: background-color .15s ease, transform .08s ease;
}

.icon:hover,
.icon:focus {
    background: rgba(46, 27, 15, 0.10);
    transform: translateY(-1px);
    outline: none;
}

.footer__bottom {
    border-top: 1px solid rgba(15,23,42,0.04);
    padding: .6rem 1.25rem;
    text-align: center;
    font-size: .875rem;
    color: rgb(255, 255, 255);
}

/* Responsive */
@media (max-width: 640px) {
    .footer__inner {
        padding-bottom: .5rem;
        gap: .5rem;
    }
    .footer__nav {
        order: 3;
        width: 100%;
        justify-content: center;
    }
    .footer__social {
        order: 2;
    }
    .footer__brand {
        order: 1;
        width: 100%;
        justify-content: center;
    }
}
</style>
