<script>
import KonamiCode from "konami-code-js"

export default {
  mounted() {
    new KonamiCode(() => {
      this.abrirPopupJogo()
    })
  },

  methods: {
    abrirPopupJogo() {
      const overlay = document.createElement("div")
      Object.assign(overlay.style, {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.4)",
        zIndex: 99998
      })
      document.body.appendChild(overlay)

      const popup = document.createElement("div")
      Object.assign(popup.style, {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "800px",
        height: "600px",
        background: "#000",
        zIndex: 99999,
        border: "1px solid black",
        borderRadius: "12px",
        boxShadow: "0 0 20px rgba(0,0,0,0.7)"
      })

      popup.innerHTML = `
        <iframe id="gameIframe"
          src="https://jcw87.github.io/c2-smb1/"
          style="width:100%; height:100%; border:0; border-radius:12px;">
        </iframe>
 
        <div id="closePopup" style="
          position:absolute;
          top: 5px;
          right: 10px;
          color:white;
          cursor:pointer;
          font-size:22px;
          z-index:100000;
        ">✖</div>
      `

      document.body.appendChild(popup)

      const closeBtn = popup.querySelector("#closePopup")
      const iframe = popup.querySelector("#gameIframe")

      closeBtn.addEventListener("click", () => {
        iframe.blur()
        iframe.src = "about:blank"
        setTimeout(() => {
          popup.remove()
          overlay.remove()
        }, 50)
      })
    }
  }
}
</script>

<template>
  <div class="joji-page">
    <!-- <h1>↑ ↑  ↓  ↓ ← → ← → B A </h1> -->
     <h1>Easter Egg</h1>
     <h3>Em algum lugar por esse site pode ter uma surpresinha... Você consegue encontrar?</h3>
    
  </div>
</template>


<style scoped>

.joji-page {
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: #fff;
  text-align: center;
};

</style>