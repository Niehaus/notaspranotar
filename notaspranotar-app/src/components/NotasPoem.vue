<script>
import NotasButton from "../components/NotasButton.vue";

export default {
  name: "NotasPoem",
  props: {
    poem: {},
  },
  components: { NotasButton },
  methods: {
    audioFoo(message) {
      console.log(message);
    },
    textFoo(message) {
      console.log(message);
    },
  },
};
</script>

<template>
  <!-- Modal -->
  <div
    class="modal fade"
    :id="`modal-${poem.name}`"
    tabindex="-1"
    :aria-labelledby="`modal-${poem.name}`"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" :id="`modal-${poem.name}`">
            {{ poem.name }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">{{ poem.text }}</div>
        <div class="modal-footer" v-if="poem.audioPath != ''">
          <!--  <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button> -->
        </div>
      </div>
    </div>
  </div>

  <span class="poem-wrapper">
    <div class="card card-body card-img">
      <img :src="poem.imgPath" :alt="poem.name" />
    </div>
    <div class="action-btn-wrapper">
      <NotasButton
        buttonClass="button-laranja"
        text="audio"
        :foo="() => audioFoo('play audio!')"
        data-bs-toggle="modal"
        :data-bs-target="`#modal-${poem.name}`"
      ></NotasButton>
      <NotasButton
        buttonClass="button-laranja"
        text="texto"
        :foo="() => textFoo('read text!')"
        data-bs-toggle="modal"
        :data-bs-target="`#modal-${poem.name}`"
      ></NotasButton>
    </div>
  </span>
</template>

<style lang="sass">
@import "../assets/styles/variaveis"

.modal-dialog, .modal-content
  background-color: $notas-light-background
  border-radius: 0

.modal-dialog
  border: 4px solid #000

.modal-header
  border-bottom: 4px solid #000

.modal-footer
  border-top: 4px solid #000

.action-btn-wrapper
  display: flex
  justify-content: center

  :first-child
    margin-right: 10px

.poem-wrapper
  display: flex
  flex-direction: column
  max-width: 275px
  margin: 0 10px
  & *
    margin-top: 10px
</style>
