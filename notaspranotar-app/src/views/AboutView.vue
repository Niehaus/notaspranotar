<script>
import NotasSection from "../components/NotasSection.vue";
import NotasButton from "../components/NotasButton.vue";

export default {
  data() {
    return {
      myWindow: undefined,
    };
  },
  mounted() {
    this.myWindow = window;
  },
  components: { NotasSection, NotasButton },
};
</script>

<template>
  <NotasSection sectionId="header-liner">
    <template v-slot:conteudo>
      <div class="row justify-content-center">
        <div class="col-md-6 col-sm-12">
          <h5 class="mb-3">
            O notaspranotar é um projeto literário craido pela laura conti para
            compartilhar palavras de encanto e expressões. O projeto é
            patrocinado pela Prefeitura Municipal de Pouso Alegre, por meio do
            edtail da Lei Municipal de Incentivo á Cultura, da Superintendência
            de Cultura.
          </h5>
          <h5 class="mb-3">
            Você pode conferir todos os poemas aqui no site e também pelas ruas
            de Pouso Alegre/MG. Fique atento ao seu redor, olhe as belezas da
            nossa cidade e seja abraçado por um de nossos poemas.
          </h5>
        </div>
      </div>
    </template>
  </NotasSection>

  <NotasSection sectionId="sobre">
    <template v-slot:conteudo>
      <div class="row">
        <div class="col-md-6 col-lg-6 col-sm-12 lado-esquerdo">
          <img
            src="../assets/imagens/foto-laura.png"
            alt="logo-rodape"
            style="width: 320px"
          />
          <NotasButton
            buttonClass="button-azul"
            text="laura conti"
            :foo="
              () =>
                this.myWindow.open(
                  'https://www.instagram.com/alauraconti/',
                  '_blank'
                )
            "
          ></NotasButton>
        </div>
        <div class="col-md-6 col-lg-6 col-sm-12 lado-direito">
          <div class="container">
            <h4 class="my-3 text-left">
              O <b>notaspranotar</b> nasceu para incentivar e estimular o
              contato de TODES com a literatura, cultura e poesia, do idoso a
              criança que está aprendendo a ler.
            </h4>
            <div class="button-inline-wrapper">
              <NotasButton
                buttonClass="button-laranja"
                text="insta"
                style="margin-right: 10px"
                :foo="
                  () =>
                    this.myWindow.open(
                      'https://www.instagram.com/notaspranotar/',
                      '_blank'
                    )
                "
              ></NotasButton>
              <NotasButton
                buttonClass="button-laranja"
                text="email"
                :foo="
                  () => this.myWindow.open('mailto:notaspranotar@gmail.com', '')
                "
              ></NotasButton>
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
  #sobre
    .lado-esquerdo
      border-bottom: 4px solid #000


#sobre
  padding: 0 !important
  overflow: hidden
  background-color: $notas-light-background
  .lado-esquerdo
    background-color: $notas-laranja-background
    padding: 3rem
    display: flex
    align-items: center
    flex-direction: column
  .lado-direito
    background-color: $notas-azul-background
    padding: 3rem
    border-left: 4px solid #000
    display: flex
    flex-direction: column
    justify-content: center
  img
    width: 275px
    // margin: 10px
    &.img-esquerda, &.img-direita
      position: relative
      left: -80px

.laura-foto
  height: 240px
  width: 240px
  border-radius: 50%
  background-color: $notas-light-background
  margin-bottom: 15px
</style>
