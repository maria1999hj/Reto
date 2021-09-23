<template>
  <div class="principal">
    <BarraLateral></BarraLateral>
    <Reproductor></Reproductor>
    <Cabecera></Cabecera>

    <div class="Loyout--contenedor">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BarraLateral from "./BarraLateral.vue";
import Reproductor from "./Reproductor.vue";
import Cabecera from "./Cabecera.vue";
export default {
  name: "Layout",
  components: {
    BarraLateral,
    Reproductor,
    Cabecera,
  },
};
</script>

<style>
.Loyout--contenedor {
  position: fixed;
  left: 330px;
  width: calc(100% - 330px);
  top: 100px;
  padding: 0px 40px;
  box-sizing: border-box;
  overflow-y: auto;
  height: calc(100vh - 200px);
  overflow-x: hidden;
}
</style>
