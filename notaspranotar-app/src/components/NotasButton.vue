<script>
export default {
  name: "NotasButton",
  props: {
    buttonClass: {
      type: String,
      required: true,
      default: "button-creme",
    },
    text: {
      type: String,
      default: "lorem ipsum",
    },
  },
};
</script>

<template>
  <button type="button" :class="['btn', 'btn-primary', buttonClass]">
    {{ text }}
  </button>
</template>

<style lang="sass">
@import "../assets/styles/variaveis"

.btn-primary
  border-radius: 0
  font-family: $type-writer
  &:focus-visible
    outline: none
  &.button-creme
    background-color: $notas-creme
    border: 2px solid black
    color: black
    &:hover
      background-color: $button-creme-hover !important
    &:focus
      background-color: 0 0 0 .25rem rgba(242, 220, 177, 0.5)

  &.button-azul
    background-color: $notas-azul-background
    border: 2px solid white
    &:hover
      background-color: $button-azul-hover !important
    &:focus
      box-shadow: 0 0 0 0.25rem rgba(49, 177, 253, 0.5)

  &.button-laranja
    background-color: $notas-laranja-background
    border: 2px solid white
    &:hover
      background-color: $button-laranja-hover !important
    &:focus
      box-shadow: 0 0 0 .25rem rgba(253, 116, 49, 0.5)
</style>
