<script>
import NotasSection from "../components/NotasSection.vue";
import NotasPoem from "../components/NotasPoem.vue";
import NotasModal from "../components/NotasModal.vue";

import poems from "../assets/js/poems.js";

export default {
  data() {
    return {
      poems: poems,
      text: "",
      audio: "",
    };
  },
  components: { NotasSection, NotasPoem, NotasModal },
  computed: {
    currentText() {
      return this.text;
    },
    currentAudio() {
      return this.audio;
    },
  },
  methods: {
    modalChangeEvent({ type, content }) {
      if (type == "audio") {
        this.audio = content;
        this.text = "";
      } else {
        this.audio = "";
        this.text = content;
      }
    },
  },
};
</script>

<template>
  <NotasSection sectionId="header-liner">
    <template v-slot:conteudo>
      <div class="container text-center">
        <h2>POEMAS</h2>
        <div class="row justify-content-center">
          <NotasModal :text="currentText" :audio="currentAudio"></NotasModal>
          <template v-for="(poem, index) in poems" v-bind:key="index">
            <NotasPoem
              :poem="poem"
              @modal-change="(data) => modalChangeEvent(data)"
            ></NotasPoem>
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
