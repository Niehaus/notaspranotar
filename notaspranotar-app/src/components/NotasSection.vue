<script>
export default {
  name: "NotasSection",
  props: {
    sectionId: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="container-fluid notas-section-cf" :id="sectionId">
    <slot name="conteudo"></slot>
    <!-- <div class="notas-section">
    </div> -->
  </div>
</template>

<style lang="sass">
@import "../assets/styles/variaveis"

@media (max-width: $sm)
    .notas-section-cf
      padding: 0 1rem !important

.notas-section-cf
  padding: 0
  border: 4px solid #000
  border-top: none
  display: flex
  align-items: center
  min-height: 200px
  padding: 0 6rem
</style>
