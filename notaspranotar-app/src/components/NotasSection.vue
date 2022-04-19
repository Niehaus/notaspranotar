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
  <div class="container-fluid" :id="sectionId">
    <div class="container notas-section">
      <slot name="conteudo"></slot>
    </div>
  </div>
</template>

<style lang="sass">
.notas-section
  padding: 20px
</style>
