<script>
import NotasSection from "../components/NotasSection.vue";
import NotasButton from "../components/NotasButton.vue";
import NotasPoem from "../components/NotasPoem.vue";

import poems from "../assets/js/poems.js";

export default {
  data() {
    return {
      poems: poems,
    };
  },
  components: { NotasSection, NotasButton, NotasPoem },
};
</script>

<template>
  <NotasSection sectionId="header-liner">
    <template v-slot:conteudo>
      <div class="container text-center">
        <h2>POEMAS</h2>
        <div class="row justify-content-center">
          <template v-for="(poem, index) in poems" v-bind:key="index">
            <NotasPoem :poem="poem"></NotasPoem>
          </template>
        </div>
      </div>
    </template>
  </NotasSection>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
