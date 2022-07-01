<script>
import NotasSection from "../components/NotasSection.vue";
import NotasButton from "../components/NotasButton.vue";
import poems from "../assets/js/poems.js";

export default {
  // Properties returned from data() becomes reactive state
  // and will be exposed on `this`.
  data() {
    return {
      poems: poems,
    };
  },
  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event listeners in templates.
  methods: {
    seeMap() {
      this.$router.push("/mapa");
    },
    seeAbout() {
      this.$router.push("/sobre");
    },
    seePoems() {
      this.$router.push("/poemas");
    },
  },
  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {},
  components: { NotasSection, NotasButton },
};
</script>

<template>
  <NotasSection sectionId="header-liner">
    <template v-slot:conteudo>
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <p class="mb-3">
              Projeto literário materializado em arte urbana, com poesia e
              ilustração. Patrocinado pela Lei Municipal de Incentivo à Cultura,
              do Edital 004/2021 - Lei de Incentivo à Cultura: FPC - Fundo de
              Projetos Culturais
            </p>
            <NotasButton
              buttonClass="button-creme"
              text="Ver Mais"
              :foo="seeAbout"
            ></NotasButton>
          </div>
        </div>
      </div>
    </template>
  </NotasSection>

  <NotasSection sectionId="poemas">
    <template v-slot:conteudo>
      <div class="conatiner">
        <div class="row flex-grow-1">
          <div class="col-md-12 col-lg-4 col-sm-12 lado-esquerdo">
            <h1>POEMAS</h1>
            <p class="my-3">
              Nessa primeira edição do projeto, contamos com os versos de laura
              conti ilustrados pela Malu Marzagão. Além de disponíveis nas ruas
              da cidade, aqui você encontra todos eles ilustrados e recitados!
            </p>
            <NotasButton
              buttonClass="button-azul"
              text="Ver Poemas"
              :foo="seePoems"
            ></NotasButton>
          </div>
          <div class="col-md-8 col-lg-8 col-sm-12 lado-direito">
            <div class="container overflow-auto img-container">
              <div class="d-flex flex-row flex-nowrap">
                <div
                  v-for="(item, i) in poems"
                  class="card card-body card-img"
                  v-bind:key="i"
                >
                  <img :src="item.imgPath" alt="Imagem-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </NotasSection>

  <NotasSection sectionId="mapa">
    <template v-slot:conteudo>
      <div class="container">
        <div class="row flex-grow-1">
          <div class="col-md-12 col-lg-4 col-sm-12 lado-mapa">
            <h1>MAPA</h1>
            <img
              src="../assets/imagens/mapapin.png"
              alt="Pin do Mapa"
              style="max-width: 50px; padding-bottom: 15px"
            />
          </div>
          <div class="col-md-12 col-lg-8 col-sm-12 lado-texto">
            <div class="container">
              <p>
                Percurso poético da cidade de Pouso Alegre! Para que você saiba
                onde está cada um de nossos poemas.
              </p>
              <div class="align-btn-wrapper d-flex justify-content-start mt-3">
                <NotasButton
                  buttonClass="button-laranja"
                  text="Ver Mapa"
                  :foo="seeMap"
                ></NotasButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </NotasSection>
</template>

<style lang="sass">

@import "../assets/styles/variaveis"

@media (max-width: 1000px)
    #header-liner
      padding-top: 12rem !important
    #mapa
      .lado-mapa
            justify-content: center
            border-right: none !important
            padding: 0 !important
    .align-btn-wrapper
      justify-content: center !important
      padding: 25px 0
      margin-top: 15px
    #contato
      .lado-esquerdo
        text-align: center
        margin: 15px 0
    #poemas
      padding: 0 !important
    .img-container
      left: 0px !important
      // max-width: 100vw !important

#mapa
  background-color: $notas-azul-background
  color: $notas-light-background
  // padding: 0 !important
  .row
    align-items: center
  .lado-mapa
    padding: 3rem 0
    border-right: 4px solid #000
    display: flex
    align-items: center
    min-height: 200px
    // justify-content: center

#contato, #rodape
  background-color: $notas-light-background

#header-liner
  background: url('../assets/imagens/background1.png')
  background-size: 740px
  background-position: bottom right
  background-repeat: no-repeat
  background-color: $notas-light-background
  padding-top: 8rem
  padding-bottom: 3.5rem
  background-blend-mode: exclusion
  min-height: 650px

#poemas
  // padding: 0 !important
  overflow: hidden
  background-color: $notas-laranja-background
  .lado-esquerdo
    background-color: $notas-laranja-background
    padding: 3rem
  .lado-direito
    background-color: $notas-light-background
    padding: 3rem 0
    border-left: 4px solid #000
  img
    width: 275px
    &.img-esquerda, &.img-direita
      position: relative
      left: -80px

.img-container
      position: relative
      left: -50px
      max-width: 100vw

.card-body
  min-height: 240px
  min-width: 275px
  max-width: 275px
  margin-right: 15px
  &.card-img
    padding: 0
    border: none
    box-shadow: none
    background: transparent
</style>
