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
  <main>
    <NotasSection sectionId="header-liner">
      <template v-slot:conteudo>
        <div class="row">
          <div class="col-md-6 col-sm-12">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
            impedit ex inventore ipsum eos rerum quidem voluptate? Dignissimos
            voluptatem iste, quaerat suscipit debitis iusto, fugiat totam, error
            reprehenderit repudiandae quos.

            <NotasButton buttonClass="button-creme"></NotasButton>
            <NotasButton buttonClass="button-azul"></NotasButton>
            <NotasButton buttonClass="button-laranja"></NotasButton>
          </div>
        </div>
      </template>
    </NotasSection>

    <NotasSection sectionId="poemas">
      <template v-slot:conteudo>
        <div class="row">
          <div class="col-md-4 col-lg-4 col-sm-12">
            <h3>POEMAS</h3>

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
            impedit ex inventore ipsum eos rerum quidem voluptate? Dignissimos
            voluptatem iste, quaerat suscipit debitis iusto, fugiat totam, error
            reprehenderit repudiandae quos.
          </div>
          <div class="col-md-8 col-lg-8 col-sm-12">
            <img src="" alt="Imagem-1" />
            <img src="" alt="Imagem-2" />
          </div>
        </div>
      </template>
    </NotasSection>

    <NotasSection sectionId="mapa">
      <template v-slot:conteudo>
        <div class="row">
          <div class="col-md-4 col-lg-4 col-sm-12">
            <h3>MAPA</h3>
          </div>
          <div class="col-md-8 col-lg-8 col-sm-12">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
            impedit ex inventore ipsum eos rerum quidem voluptate.
          </div>
        </div>
      </template>
    </NotasSection>
  </main>
</template>


<style lang="sass">

#header-liner
  background-color: #cccc
  
</style>