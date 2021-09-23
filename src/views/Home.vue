<template>
  <div class="home">
    <Banner></Banner>
    <Loading v-if="cargandoBusqueda"></Loading>

    <div class="home--resultado">
      <div class="home--resultado--texto">Resultados</div>
      <div class="home--resultado--lista">
        <div
          class="home--resultado--item"
          v-for="cancion in canciones"
          :key="cancion.id"
        >
          <PlayImagen
            ancho="100%"
            alto="160px"
            iconosize="36px"
            :imagen="cancion.artist.picture_big"
            :idMusica="cancion.id"
          ></PlayImagen>
          <div class="home--resultado--item--titulo">
            {{ cancion.title_short }}
          </div>
          <div class="home--resultado--item--artista">
            {{ cancion.artist.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlayImagen from "../components/PlayImagen.vue";
import Banner from "../components/Banner.vue";
import Loading from "../components/Loading.vue";
export default {
  name: "Home",
  components: {
    Banner,
    PlayImagen,
    Loading,
  },
  computed: {
    canciones() {
      return this.$store.state.canciones;
    },
    cargandoBusqueda() {
      return this.$store.state.cargando;
    },
  },
};
</script>
<style>
.home--resultado--texto {
  font-size: 22px;
  color: #e86060;
  margin-top: 40px;
  font-weight: bold;
  margin-bottom: 20px;
}
.home--resultado--item--titulo {
  font-size: 14px;
  font-weight: bold;
  color: #555555;
}
.home--resultado--item--artista {
  font-size: 12px;
  font-weight: bold;
  color: #828282;
}
.home--resultado--lista {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
}
</style>
