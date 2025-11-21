<template>
  <header class="navbar">
    <div class="bar">
      <div class="logo">
        <img src="../assets/sunlight-logo3.svg" alt="Sunlight logo" />
      </div>
      <nav class="menu">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/pics">Pics</RouterLink>
        <RouterLink to="/wtii">Time</RouterLink>
        <RouterLink to="/tales">Tales</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
  z-index: 1000;
}

.bar {
  position: relative;
  width: 50%; /* reduz a largura do bloco */
  margin: 0 auto;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(46, 27, 15, 0.10);
  border-radius: 10px;
  overflow: visible;
  backdrop-filter: blur(2px);
}

.logo {
  position: absolute;
  left: 4%;
  top: 60%;
  transform: translateY(-50%);
  z-index: 2;
}
.logo img {
  width: 72%;
  height: auto;
  filter: sepia(5) saturate(60) hue-rotate(12deg) brightness(1.1);
  display: block;
}

.menu {
  display: flex;
  gap: 3rem;
  align-items: center;
  z-index: 1;
}

.menu a {
  text-decoration: none;
  color: #ffd445;
  font-size: 1.1rem;
  font-weight: 300;
  transition: color .2s ease, opacity .2s ease;
}
.menu a:hover {
  color: #ffc107a8;
}
</style>
