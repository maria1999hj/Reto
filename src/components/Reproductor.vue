<template>
  <div class="reproductor">
    <div class="reproductor--artista">
      <img
        class="reproductor--img"
        :src="cancionReproduciendo.artist.picture_big"
        alt="img"
      />
      <div class="reproductor--informacion">
        <span class="reproductor--informacion--cancion">{{
          cancionReproduciendo.title
        }}</span>
        <span class="reproductor--informacion--albun">{{
          cancionReproduciendo.artist.name
        }}</span>
      </div>
    </div>

    <div class="reproductor--botones">
      <img
        @click="anteriorMusica"
        class="reproductor--botones--izquierda"
        :src="izquierda"
        alt="izquierda"
      />

      <div class="reproductor--botones--play" @click="playMusica">
        <font-awesome-icon
          icon="play"
          v-if="controlPlayYPausa"
        ></font-awesome-icon>
        <font-awesome-icon icon="pause" v-else></font-awesome-icon>
      </div>

      <img
        @click="siguienteMusica"
        class="reproductor--botones--derecha"
        :src="derecha"
        alt="derecha"
      />
    </div>

    <div class="reproductor--volumen">
      <VueSlider
        width=" 100px"
        :min="0"
        :max="100"
        tooltip="none"
        :processStyle="{ background: 'white' }"
        v-model="reproductorVolumen"
      ></VueSlider>
      <font-awesome-icon
        v-if="reproductorVolumen > 0"
        class="reproductor--volumen--icon"
        icon="volume-down"
      ></font-awesome-icon>

      <font-awesome-icon
        v-else
        class="reproductor--volumen--icon"
        icon="volume-mute"
      ></font-awesome-icon>
    </div>
    <audio id="reproductor" autoplay />
  </div>
</template>

<script>
import derecha from "../assets/derecha.png";
import izquierda from "../assets/izquierda.png";

// import CustomSlider from "vue-custom-range-slider";
// import "vue-custom-range-slider/dist/vue-custom-range-slider.css";

import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

export default {
  name: "Reproductor",
  components: {
    VueSlider,
  },
  data() {
    return {
      derecha,
      izquierda,
      play: true,
      reproductorVolumen: 100,
      tooltipStyle: {
        backgroundColor: "transparent",
        borderColor: "transparent",
      },
      processStyle: {
        backgroundColor: "white",
      },
      bgStyle: {
        backgroundColor: "#fff",
        boxShadow: "inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)",
      },
    };
  },
  watch: {
    reproductorVolumen(nuevoValor) {
      console.log(nuevoValor);
      const audio = document.getElementById("reproductor");
      audio.volume = nuevoValor / 100;
      this.reproductorVolumen = nuevoValor;
    },
  },

  computed: {
    cancionReproduciendo() {
      const audio = document.getElementById("reproductor");

      if (audio != null && audio != undefined) {
        audio.setAttribute(
          "src",
          this.$store.state.cancionReproduciendo.preview
        );
      }

      return this.$store.state.cancionReproduciendo;
    },
    controlPlayYPausa() {
      return this.$store.state.reproduciendo;
    },
  },
  methods: {
    playMusica() {
      const audio = document.getElementById("reproductor");

      if (this.$store.state.reproduciendo) {
        audio.pause();

        this.$store.state.reproduciendo = false;
      } else {
        audio.play();

        this.$store.state.reproduciendo = true;
      }
    },

    siguienteMusica() {
      const musica = this.$store.state.canciones.findIndex((cancion) => {
        return cancion.id == this.$store.state.cancionReproduciendo.id;
      });
      const sizeCanciones = this.$store.state.canciones.length;
      if (musica < sizeCanciones - 1) {
        this.$store.state.cancionReproduciendo =
          this.$store.state.canciones[musica + 1];
      } else {
        this.$store.state.cancionReproduciendo = this.$store.state.canciones[0];
      }

      this.$store.state.reproduciendo = true;
    },

    anteriorMusica() {
      const musica = this.$store.state.canciones.findIndex((cancion) => {
        return cancion.id == this.$store.state.cancionReproduciendo.id;
      });
      const sizeCanciones = this.$store.state.canciones.length;
      if (musica == 0) {
        this.$store.state.cancionReproduciendo =
          this.$store.state.canciones[sizeCanciones - 1];
      } else {
        this.$store.state.cancionReproduciendo =
          this.$store.state.canciones[musica - 1];
      }
      this.$store.state.reproduciendo = true;
    },
  },
};
</script>

<style>
.reproductor--artista {
  display: flex;
  width: 100%;
}

.reproductor {
  width: 100vw;
  height: 100px;
  background: #eb5757;
  position: fixed;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.reproductor--img {
  height: 100px;
  width: 100px;
  background-size: contain;
}
.reproductor--informacion {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  color: white;
}
.reproductor--informacion--cancion {
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
}
.reproductor--informacion--albun {
  font-size: 12px;
  font-weight: normal;
  line-height: 15px;
}
.reproductor--botones--play {
  color: white;
  background: #ececef8a;
  border-radius: 50%;
  padding: 10px;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.reproductor--botones {
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
  justify-content: center;
}
.reproductor--botones--izquierda {
  height: 40px;
  width: 40px;
  filter: invert(100%);
  cursor: pointer;
}
.reproductor--botones--derecha {
  height: 40px;
  width: 40px;
  filter: invert(100%);
  cursor: pointer;
}
.reproductor--volumen {
  display: flex;
  align-items: center;
  padding-right: 20px;
  gap: 25px;
  width: 100%;
  justify-content: flex-end;
}
.reproductor--volumen--icon {
  font-size: 30px;
  width: 40px !important;
  color: white;
}
.reproductor--volumen--range {
  color: white;
  width: 100px;
}
</style>
