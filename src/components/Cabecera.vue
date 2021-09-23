<template>
  <div class="cabecera">
    <div class="cabecera--buscador">
      <div class="cabecera--buscador--input">
        <input
          class="cabecera--buscador--input--caja"
          placeholder="Buscar"
          v-model="buscarMusica"
          @keypress.enter="filtrarMusica"
        />

        <font-awesome-icon
          class="cabecera--buscador--input--icon"
          icon="search"
          @click="filtrarMusica"
        ></font-awesome-icon>
      </div>
    </div>

    <div class="cabecera--login">
      <font-awesome-icon
        icon="user"
        class="cabecera--login--icon"
      ></font-awesome-icon>
      <span class="cabecera--login--texto">Maria Hernández</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cabecera",
  data: () => ({
    buscarMusica: "",
  }),
  methods: {
    filtrarMusica() {
      if (this.buscarMusica != "") {
        this.$store.state.cargando = true;
        fetch(
          "https://deezerdevs-deezer.p.rapidapi.com/search?q=" +
            this.buscarMusica,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
              "x-rapidapi-key":
                "011e3bd46amsh6e15056be3ae6a7p167e5bjsnce40dba7d426",
            },
          }
        )
          .then((data) => {
            return data.json();
          })
          .then((data) => {
            this.$store.state.canciones = data.data;
            this.$store.state.cargando = false;
          });
      }
    },
  },
};
</script>

<style>
.cabecera {
  left: 330px;
  width: calc(100% - 330px);
  height: 100px;
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  box-sizing: border-box;
}

.cabecera--loading {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;

  z-index: 9900;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cabecera--buscador--input {
  background: #ffffff;
  padding: 5px 20px;
  width: 524px;
  height: 36px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  border: 1px solid #828282;
}
.cabecera--buscador--input--caja {
  border: none;
  outline: none;
  width: 100%;
}
.cabecera--buscador--input--icon {
  cursor: pointer;
  color: #bdbdbd;
}
.cabecera--login {
  display: flex;
  gap: 20px;
}
.cabecera--login--icon {
  color: #e86060;
  cursor: pointer;
}
</style>
