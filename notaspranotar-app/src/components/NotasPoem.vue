<script>
import NotasButton from "../components/NotasButton.vue";

export default {
  name: "NotasPoem",
  props: {
    poem: {},
  },
  components: { NotasButton },
  methods: {
    setupModal({ text, audio }) {
      this.$emit("modalChange", { text, audio });
    },
  },
};
</script>

<template>
  <!-- Modal -->
  <span class="poem-wrapper">
    <div class="card card-body card-img">
      <img :src="poem.imgPath" :alt="poem.name" />
    </div>
    <div class="action-btn-wrapper">
      <NotasButton
        buttonClass="button-laranja"
        text="audio/texto"
        :foo="() => setupModal({ text: poem.text, audio: poem.audioPath })"
        data-bs-toggle="modal"
        :data-bs-target="`#modal-poem`"
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
