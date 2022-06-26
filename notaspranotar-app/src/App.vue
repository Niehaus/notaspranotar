<script>
import { RouterView } from "vue-router";
import emailjs from "@emailjs/browser";

export default {
  methods: {
    sendEmail() {
      console.log("envia!");
      emailjs
        .sendForm(
          "service_rckxzyn",
          "template_nh9lteo",
          this.$refs.form,
          "GIHa5sewTxZ1f7cgS"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>

<template>
  <NotasHeader></NotasHeader>
  <main>
    <RouterView />
    <NotasSection sectionId="contato">
      <template v-slot:conteudo>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-4 col-lg-4 col-sm-12 lado-esquerdo">
              <h3>CONTATO</h3>
            </div>
            <div class="col-md-8 col-lg-8 col-sm-12">
              <div class="container">
                <span>
                  Para falar com a gente use a dm do instagram @notaspranotar ou
                  o e-mail notaspranotar@gmail.com
                </span>
                <form ref="form" class="my-3">
                  <div class="form-group mb-2 row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputPassword1"
                          placeholder="Digite seu nome.."
                          name="from_name"
                        />
                      </div>

                      <div class="form-group mt-2">
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                          name="reply_to"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group mt-2 mt-lg-0">
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="Digite sua mensagem aqui.."
                          style="min-height: 95px"
                          name="message"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="align-btn-wrapper d-flex justify-content-end">
                    <NotasButton
                      buttonClass="button-creme"
                      text="Enviar Mensagem"
                      :foo="sendEmail"
                    ></NotasButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </template>
    </NotasSection>

    <NotasSection sectionId="rodape">
      <template v-slot:conteudo>
        <div class="row justify-content-start">
          <div class="col-md-12 col-lg-6 col-sm-12 lado-esquerdo flex-grow-1">
            <img
              src="./assets/imagens/logo-rodape.png"
              alt="logo-rodape"
              style="width: 170px"
            />
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

p
  font-family: Lato !important

@media (max-width: $md)
  #rodape
    justify-content: center
    .lado-esquerdo
      border-right: none !important

#rodape
  position: sticky
  bottom: 0
  border-top: 4px solid #000
  min-height: 60px
  padding: 0rem 5rem

  .lado-esquerdo
     border-right: 4px solid #000
     padding: 1rem

#contato
  border-bottom: none
  .lado-esquerdo
    padding-left: 0
  .row
    padding: 1rem 0
    flex-grow: 1

input, textarea
  background-color: inherit !important
  border: 4px solid #000 !important
  border-radius: 0 !important

.form-control
  &:focus
    box-shadow: 0 0 0 .25rem rgba(155, 148, 133, 0.25) !important
</style>
