<script>
import NotasSection from "../components/NotasSection.vue";
import NotasButton from "../components/NotasButton.vue";

export default {
  // Properties returned from data() becomes reactive state
  // and will be exposed on `this`.
  data() {
    return {
      count: 0,
    };
  },
  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event listeners in templates.
  methods: {
    seeMap() {
      this.$router.push("/mapa");
    },
  },
  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`hello homee!!`);
  },
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
            <NotasButton buttonClass="button-creme"></NotasButton>
          </div>
        </div>
      </div>
    </template>
  </NotasSection>

  <NotasSection sectionId="poemas">
    <template v-slot:conteudo>
      <div class="row">
        <div class="col-md-4 col-lg-4 col-sm-12 lado-esquerdo">
          <h1>POEMAS</h1>
          <p class="my-3">
            Nessa primeira edição do projeto, contamos com os versos de laura
            conti ilustrados pela Malu Marzagão. Além de disponíveis nas ruas da
            cidade, aqui você encontra todos eles ilustrados e recitados!
          </p>
          <NotasButton buttonClass="button-azul"></NotasButton>
        </div>
        <div class="col-md-8 col-lg-8 col-sm-12 lado-direito">
          <!-- <img src="../assets/imagens/poema9.jpg" class="img-esquerda" alt="Imagem-1" />
            <img src="../assets/imagens/poema11.jpg" class="img-direita" alt="Imagem-2" /> -->

          <div
            class="container overflow-auto img-container"
            style="max-width: 1920px"
          >
            <div class="d-flex flex-row flex-nowrap">
              <div class="card card-body card-img">
                <img src="../assets/imagens/poema9.jpg" alt="Imagem-1" />
              </div>
              <div class="card card-body card-img">
                <img src="../assets/imagens/poema11.jpg" alt="Imagem-2" />
              </div>
              <div class="card card-body card-img">
                <img src="../assets/imagens/poema11.jpg" alt="Imagem-2" />
              </div>
              <div class="card card-body card-img">
                <img src="../assets/imagens/poema11.jpg" alt="Imagem-2" />
              </div>
              <div class="card card-body card-img">
                <img src="../assets/imagens/poema11.jpg" alt="Imagem-2" />
              </div>
              <div class="card card-body card-img">
                <img src="../assets/imagens/poema11.jpg" alt="Imagem-2" />
              </div>
              <div class="card card-body card-img">
                <img src="../assets/imagens/poema11.jpg" alt="Imagem-2" />
              </div>
              <div class="card card-body card-img">
                <img src="../assets/imagens/poema11.jpg" alt="Imagem-2" />
              </div>
              <div class="card card-body card-img">
                <img src="../assets/imagens/poema11.jpg" alt="Imagem-2" />
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
          <div class="col-md-4 col-lg-4 col-sm-12 lado-mapa">
            <h1>MAPA</h1>
            <img
              src="../assets/imagens/mapapin.png"
              alt="Pin do Mapa"
              style="max-width: 100px"
            />
          </div>
          <div class="col-md-8 col-lg-8 col-sm-12 lado-texto">
            <div class="container">
              <p>
                Percurso poético da cidade de Pouso Alegre! Para que você saiba
                onde está cada um de nossos poemas.
              </p>
              <div class="align-btn-wrapper d-flex justify-content-end">
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

@media (max-width: $md)
    #header-liner
      padding-top: 12rem !important

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
  padding: 0 !important
  overflow: hidden
  background-color: $notas-light-background
  .lado-esquerdo
    background-color: $notas-laranja-background
    padding: 6rem
  .lado-direito
    background-color: $notas-light-background
    padding: 6rem
    border-left: 4px solid #000
  img
    width: 275px
    // margin: 10px
    &.img-esquerda, &.img-direita
      position: relative
      left: -80px

    // &.img-direita
.img-container
      position: relative
      left: -100px

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
