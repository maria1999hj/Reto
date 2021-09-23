<template>
  <div class="banner">
    <PlayImagen
      ancho="250px"
      alto="250px"
      iconosize="72px"
      :imagen="cancionReproduciendo.artist.picture_big"
    />

    <div class="banner--contenedor">
      <div class="banner--informacion">
        <div class="banner--informacion--titulo">
          {{ cancionReproduciendo.title }}
        </div>
        <div class="banner--informacion--subtitulo">
          Lo mejor
          {{ cancionReproduciendo.artist.name }}
          <span class="banner--informacion--subtitulo--seguidores">
            321.123 seguidores</span
          >
        </div>
        <div class="banner--informacion--descripcion">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </div>
      <div class="banner--boton">
        <button class="banner--boton--reproducir">Reproducir</button>
        <button class="banner--boton--seguir">Seguir</button>
        <font-awesome-icon class="banner--boton--tres" icon="ellipsis-h" />
      </div>
    </div>
  </div>
</template>

<script>
import PlayImagen from "./PlayImagen.vue";
export default {
  name: "Banner",
  components: {
    PlayImagen,
  },
  computed: {
    cancionReproduciendo() {
      return this.$store.state.cancionReproduciendo;
    },
  },
};
</script>

<style>
.banner {
  width: 100%;
  height: 250px;
  position: relative;
  display: flex;
  gap: 40px;
  mix-blend-mode: normal;
}
.banner::before {
  content: "";
  background: #a70000b2;
  opacity: 0.5;
  width: 100%;
  height: 250px;
  position: absolute;
  left: 0px;
  top: 0px;
}
.banner--contenedor {
  padding: 40px 40px 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.banner--informacion {
  color: white;
  z-index: 1;
}
.banner--informacion--titulo {
  margin-bottom: 0px;
  font-size: 22px;
  font-weight: bold;
}
.banner--informacion--subtitulo {
  margin-bottom: 10px;
  font-size: 14px;
}

.banner--informacion--subtitulo--seguidores {
  color: #662323;
  font-weight: bold;
  padding-left: 10px;
  font-size: 12px;
}
.banner--informacion--descripcion {
  font-size: 12px;
}
.banner--boton {
  display: flex;
  gap: 15px;
  align-items: center;
  z-index: 1;
}
.banner--boton--reproducir {
  width: 117px;
  height: 31px;
  border-radius: 100px;
  background: #e86060;
  font-weight: bold;
  color: white;
  border-color: transparent;
  cursor: pointer;
}
.banner--boton--seguir {
  width: 117px;
  height: 31px;
  border-radius: 100px;
  border: 1px solid #eb5757;
  color: #e86060;
  background: transparent;
  font-weight: bold;
  cursor: pointer;
}
.banner--boton--tres {
  color: white;
  cursor: pointer;
  font-size: 30px;
}
</style>
