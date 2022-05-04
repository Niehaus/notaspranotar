<script setup>
import { onMounted } from "vue";
import { RouterLink } from "vue-router";

onMounted(() => {
  console.log(`hello im header`);
});
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <!--     <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
    <nav class="navbar notas-nav navbar-light navbar-expand-md fixed-top p-0">
      <div class="container-fluid p-0">
        <div class="d-flex brand-wrapper">
          <a class="navbar-brand">NOTASPRANOTAR</a>
        </div>
        <form class="d-flex router-link-wrapper">
          <RouterLink to="/sobre">Sobre</RouterLink>
          <RouterLink to="/poemas">Poemas</RouterLink>
          <RouterLink to="/mapa">Mapa</RouterLink>
          <RouterLink to="/contato">Contato</RouterLink>
        </form>
      </div>
    </nav>
  </header>
</template>


<style lang="sass">

@import "../assets/styles/variaveis"


.notas-nav
  background-color: $notas-light-background

.brand-wrapper
  justify-content: center
  border: 4px solid #000
  border-right: none
  padding: 21px
  flex-grow: 1

.router-link-wrapper
  min-width: 65%
  justify-content: space-around
  padding: 28px
  border: 4px solid #000
  
  a
    color: #000
    text-transform: uppercase
    text-decoration: none
    font-family: "Laura-Regular"

</style>