<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <NotasHeader></NotasHeader>
  <main>
    <RouterView />
    <NotasSection sectionId="contato">
      <template v-slot:conteudo>
        <div class="row">
          <div class="col-md-4 col-lg-4 col-sm-12 lado-esquerdo">
            <h3>CONTATO</h3>
          </div>
          <div class="col-md-8 col-lg-8 col-sm-12">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
            impedit ex inventore ipsum eos rerum quidem voluptate.
          </div>
        </div>
      </template>
    </NotasSection>

    <NotasSection sectionId="rodape">
      <template v-slot:conteudo>
        <div class="row justify-content-start">
          <div class="col-md-4 col-lg-4 col-sm-12 lado-esquerdo">
            <h4>NOTASPRANOTAR</h4>
          </div>
        </div>
      </template>
    </NotasSection>
  </main>
</template>

<style lang="sass">
@import "@/assets/reset.css"
@import "./assets/styles/variaveis"

#app
  font-family: $type-writer

#rodape
  position: sticky
  bottom: 0
  border-top: 4px solid #000
  min-height: 60px
  padding: 0

  .lado-esquerdo
    border-right: 4px solid #000
    padding: 1.5rem 0

#contato
  border-bottom: none
  .lado-esquerdo
    padding-left: 0
</style>
