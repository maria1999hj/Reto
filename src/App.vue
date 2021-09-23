<template>
  <div id="apps">
    <Layout>
      <router-view></router-view>
    </Layout>
  </div>
</template>

<script>
import Layout from "./components/Layout.vue";
export default {
  name: "App",
  components: {
    Layout,
  },
  created() {
    this.$store.state.cargando = true;
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=romeo", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "011e3bd46amsh6e15056be3ae6a7p167e5bjsnce40dba7d426",
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.$store.state.canciones = data.data;
        this.$store.state.cancionReproduciendo = data.data[0];
        this.$store.state.cargando = false;
      });
  },
};
</script>
<style>
html,
body {
  padding: 0px;
  margin: 0px;
}
* {
  font-family: "Quicksand", sans-serif;
}
</style>
