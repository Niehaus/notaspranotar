<script>
import NotasButton from "./NotasButton.vue";

export default {
  name: "NotasPoem",
  props: {
    text: {
      type: String,
      default: "",
    },
    audio: {
      type: String,
      default: "",
    },
  },
  components: { NotasButton },
  methods: {
    stopAudio() {
      if (this.$refs.plyr != undefined) {
        this.$refs.plyr.player.pause();
      }
    },
  },
  watch: {
    // whenever audio changes, this function will run
    audio(newAudio, oldAudio) {
      let audio = document.querySelector("audio");

      if (audio != undefined && audio != null) {
        audio.src = newAudio;
        audio.load();
      }
    },
  },
  mounted() {},
};
</script>

<template>
  <!-- Modal -->
  <div
    class="modal fade"
    :id="`modal-poem`"
    tabindex="-1"
    :aria-labelledby="`modal-poem`"
    aria-hidden="true"
    :data-bs-keyboard="false"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" :id="`modal-poem`">
            <!-- {{ poem.name }} -->
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="
              () => {
                this.stopAudio();
              }
            "
          ></button>
        </div>
        <div class="modal-body text-justify d-flex justify-content-center">
          <div v-html="text" style="width: 240px"></div>
        </div>
        <div class="modal-footer">
          <!-- audio element -->
          <vue-plyr ref="plyr">
            <audio controls crossorigin playsinline>
              <source :src="audio" type="audio/wav" />
            </audio>
          </vue-plyr>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
@import "../assets/styles/variaveis"

.modal-body
  max-height: 400px
  overflow: auto
.modal-dialog, .modal-content
  background-color: $notas-light-background
  border-radius: 0

.modal-dialog
  border: 4px solid #000

.modal-header
  border-bottom: 4px solid #000

.modal-footer
  border-top: 4px solid #000

.action-btn-wrapper
  display: flex
  justify-content: center

  :first-child
    margin-right: 10px

.poem-wrapper
  display: flex
  flex-direction: column
  max-width: 300px
  margin: 0 10px
  & *
    margin-top: 10px

.estrofe
  margin-bottom: 20px
  display: block
  text-align: justify


.plyr__controls
  border: 4px solid #000
  // background-color: $notas-laranja-background !important

.plyr__progress, .plyr__controls__item
  input
    border: none !important
</style>
