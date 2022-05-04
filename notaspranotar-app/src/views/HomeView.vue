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
    increment() {
      this.count++;
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
  <NotasHeader></NotasHeader>
  <main>
    <NotasSection sectionId="header-liner">
      <template v-slot:conteudo>
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <p class="mb-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              impedit ex inventore ipsum eos rerum quidem voluptate? Dignissimos
              voluptatem iste, quaerat suscipit debitis iusto, fugiat totam, error
              reprehenderit repudiandae quos.
            </p>
            <NotasButton buttonClass="button-creme"></NotasButton>
            <!-- <NotasButton buttonClass="button-azul"></NotasButton>
            <NotasButton buttonClass="button-laranja"></NotasButton> -->
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              impedit ex inventore ipsum eos rerum quidem voluptate? Dignissimos
              voluptatem iste, quaerat suscipit debitis iusto, fugiat totam, error
              reprehenderit repudiandae quos.
            </p>
            <NotasButton buttonClass="button-azul"></NotasButton>
          </div>
          <div class="col-md-8 col-lg-8 col-sm-12 lado-direito">
            <img src="../assets/imagens/poema9.jpg" class="img-esquerda" alt="Imagem-1" />
            <img src="../assets/imagens/poema11.jpg" class="img-direita" alt="Imagem-2" />
          </div>
        </div>
      </template>
    </NotasSection>

    <NotasSection sectionId="mapa">
      <template v-slot:conteudo>
        <div class="row">
          <div class="col-md-4 col-lg-4 col-sm-12 lado-mapa">
            <h3>MAPA</h3>
          </div>
          <div class="col-md-8 col-lg-8 col-sm-12 lado-texto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
            impedit ex inventore ipsum eos rerum quidem voluptate.
          </div>
        </div>
      </template>
    </NotasSection>

    <NotasSection sectionId="contato">
      <template v-slot:conteudo>
        <div class="row">
          <div class="col-md-4 col-lg-4 col-sm-12">
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
        <div class="row">
          <div class="col-md-4 col-lg-4 col-sm-12">
            <h3>RODAPE</h3>
          </div>
        </div>
      </template>
    </NotasSection>
  </main>
</template>


<style lang="sass">

@import "../assets/styles/variaveis"

#mapa
  background-color: $notas-azul-background
  color: $notas-light-background
  padding: 0 !important
  .row  
    align-items: center
  .lado-mapa
    padding: 3rem
    border-right: 4px solid #000
    display: flex
    align-items: center
    min-height: 200px

#contato
  background-color: $notas-light-background

#header-liner
  background-color: $notas-light-background
  
  padding-top: 8rem
  padding-bottom: 3.5rem
  
#poemas
  padding: 0 !important
  padding-left: 12px !important
  background-color: $notas-light-background
  .lado-esquerdo
    background-color: $notas-laranja-background
    padding: 3rem
  .lado-direito
    background-color: $notas-light-background
    padding: 3rem
    border-left: 4px solid #000
  img 
    width: 275px
    margin: 10px
    &.img-esquerda, &.img-direita
      position: relative
      left: -80px

    // &.img-direita
</style>