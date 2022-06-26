<template>
  <NotasSection sectionId="header-liner">
    <template v-slot:conteudo>
      <div class="container-fluid text-center p-0">
        <img
          src="../assets/imagens/mapa.png"
          alt="Mapa Pouso Alegre (MG) 2022"
          style="width: 100%"
        />
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
