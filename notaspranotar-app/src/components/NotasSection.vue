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
    <div class="container">
      <div class="notas-section">
        <slot name="conteudo"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
/* .notas-section
  padding: 3rem */

.notas-section-cf
  padding: 0
  border: 4px solid #000
  border-top: none
  display: flex
  align-items: center
  min-height: 200px
  padding: 3rem
</style>
