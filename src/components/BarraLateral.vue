<template>
  <div class="barra-lateral">
    <img alt="logo" class="barra-lateral--logo" :src="logo" />
    <h2 class="barra-lateral--titulo">Mi Librería</h2>
    <ul class="barra-lateral--lista-opciones">
      <li class="barra-lateral--lista-opciones--item --color">Recientes</li>
      <li class="barra-lateral--lista-opciones--item">Artistas</li>
      <li class="barra-lateral--lista-opciones--item">Álbunes</li>
      <li class="barra-lateral--lista-opciones--item">Canciones</li>
      <li class="barra-lateral--lista-opciones--item">Estaciones</li>
    </ul>

    <h2 class="barra-lateral--titulo">Playlist</h2>
    <ul class="barra-lateral--lista-opciones">
      <li class="barra-lateral--lista-opciones--item">Metal</li>
      <li class="barra-lateral--lista-opciones--item">Para Bailar</li>
      <li class="barra-lateral--lista-opciones--item">Rock 90s</li>
      <li class="barra-lateral--lista-opciones--item">Baladas</li>
    </ul>
  </div>
</template>

<script>
import Logo from "../assets/logo.png";
export default {
  name: "BarraLateral",
  data() {
    return {
      logo: Logo,
    };
  },
};
</script>

<style>
.barra-lateral {
  height: 100vh;
  width: 330px;
  background: #662323;
}
.barra-lateral--logo {
  width: 250px;
  height: 59px;
  margin-top: 50px;
  left: 40px;
  position: relative;
}
.barra-lateral--titulo {
  width: 111;
  left: 40px;
  color: #ffffff;
  font-size: 22px;
  font-style: normal;
  position: relative;
  margin-top: 18px;
  margin-bottom: 0px;
  line-height: 10px;
}
.barra-lateral--lista-opciones {
  width: 100px;
  left: 40px;
  list-style-type: none;
  color: #ffffff;
  font-size: 16px;
  font-style: normal;
  margin-bottom: 40px;
  padding-left: 0;
}
.barra-lateral--lista-opciones--item {
  margin-bottom: 6px;
  cursor: pointer;
  position: relative;
  padding-inline-start: 40px;
}

.barra-lateral--lista-opciones--item:hover {
  color: #e86060;
}
.--color {
  color: #e86060;
}

.--color::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 5px;
  background-color: #e86060;
}
</style>
