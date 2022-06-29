<script>
import NotasButton from "../components/NotasButton.vue";

export default {
  name: "NotasPoem",
  components: { NotasButton },
  data() {
    return {
      myWindow: undefined,
    };
  },
  mounted() {
    this.myWindow = window;
  },
};
</script>

<template>
  <NotasSection sectionId="header-liner">
    <template v-slot:conteudo>
      <div class="container-fluid text-center p-0 pb-2">
        <img
          src="../assets/imagens/mapa.png"
          alt="Mapa Pouso Alegre (MG) 2022"
          style="width: 100%"
        />
        <NotasButton
          buttonClass="button-azul mt-2"
          text="Veja no Maps"
          :foo="
            () =>
              this.myWindow.open(
                'https://www.google.com.br/maps/@-22.2542687,-45.9325076,15z/data=!3m1!4b1!4m3!11m2!2sAcC6QvkFuxAzWAiiHkk2cx8KxdVoQg!3e3',
                '_blank'
              )
          "
        ></NotasButton>
      </div>
    </template>
  </NotasSection>
</template>

<style lang="sass" scoped>
@import "../assets/styles/variaveis"

#header-liner
    padding: 5rem 0 0 !important

@media (max-width: $md)
    #header-liner
      padding: 9rem 0 0 !important
</style>
