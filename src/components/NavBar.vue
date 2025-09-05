<template>
  <header class="navbar">
    <div class="logo">
      <img src="../assets/sunlight-logo3.svg" alt="Sunlight logo" />
    </div>
    <nav class="menu">
      <RouterLink to="/sunlight">Home</RouterLink>
      <RouterLink to="/pics">Pics</RouterLink>
      <RouterLink to="/wtii">Time</RouterLink>
      <RouterLink to="/tales">Tales</RouterLink>
    </nav>
  </header>
</template>

<script setup>
// nothing here yet
</script>

<style scoped>
.navbar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    to right,
    rgba(46, 27, 15, 0.2),  
    rgba(58, 43, 28, 0.2)
  ); 
  padding: 2rem 2rem;
  z-index: 10;
}

.menu {
  /* margin-left: auto; */
  display: flex;
  gap: 10rem;

}

.menu a {
  text-decoration: none;
  color: #ffd445;
  font-size: 1.2rem;
  transition: color 0.3s;
  font-weight: 300;
}
.menu a:hover {
  color: #ffc10757;
}

.logo {
  position: absolute;
  bottom: -60%;  /* faz o solzinho “vazar” */
  left: 6%;
  z-index: 20;
}
.logo img {
  width: 90%;
  height: auto;
  filter: sepia(5) saturate(60) hue-rotate(12deg) brightness(1.1);

  /* opacity: 1; */
  /* filter: drop-shadow(0 2px 6px rgba(0,0,0,0.5)); */
}
</style>
