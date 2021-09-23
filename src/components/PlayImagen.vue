<template>
  <div
    class="play-imagen"
    :style="{
      width: ancho,
      height: alto,
    }"
    @click="seleccionarMusica"
  >
    <img
      :style="{
        width: ancho,
        height: alto,
      }"
      class="play-imagen--foto"
      :src="imagen"
      alt="img"
    />
    <font-awesome-icon
      :style="{
        fontSize: iconosize,
      }"
      class="play-imagen--icono"
      icon="play"
    ></font-awesome-icon>
  </div>
</template>

<script>
export default {
  name: "PlayImagen",
  props: {
    ancho: String,
    alto: String,
    iconosize: String,
    imagen: String,
    idMusica: Number,
  },

  methods: {
    seleccionarMusica() {
      const musica = this.$store.state.canciones.find((musica) => {
        return musica.id == this.idMusica;
      });

      if (musica) {
        this.$store.state.cancionReproduciendo = musica;
        this.$store.state.reproduciendo = true;
      }
    },
  },
};
</script>
<style>
.play-imagen {
  position: relative;
  cursor: pointer;
}

.play-imagen--foto {
  background-size: contain;
  background-position: center;
}

.play-imagen--icono {
  position: absolute;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
</style>
