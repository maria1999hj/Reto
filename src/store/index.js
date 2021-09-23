import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    canciones: [],
    reproduciendo: true,
    cancionReproduciendo: {
      id: 634405112,
      readable: true,
      title: "Malade",
      title_short: "Malade",
      title_version: "",
      link: "https://www.deezer.com/track/634405112",
      duration: 191,
      rank: 735402,
      explicit_lyrics: true,
      explicit_content_lyrics: 1,
      explicit_content_cover: 0,
      preview:
        "https://cdns-preview-8.dzcdn.net/stream/c-8800bdc2cb16208f57ab3d86bfde7435-6.mp3",
      md5_image: "507899c27d0e71f995c591a01c64cf09",
      artist: {
        id: 7961408,
        name: "Romeo Elvis",
        link: "https://www.deezer.com/artist/7961408",
        picture: "https://api.deezer.com/artist/7961408/image",
        picture_small:
          "https://cdns-images.dzcdn.net/images/artist/94a88b581682b1d5b3f2841029d050b6/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://cdns-images.dzcdn.net/images/artist/94a88b581682b1d5b3f2841029d050b6/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://cdns-images.dzcdn.net/images/artist/94a88b581682b1d5b3f2841029d050b6/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://cdns-images.dzcdn.net/images/artist/94a88b581682b1d5b3f2841029d050b6/1000x1000-000000-80-0-0.jpg",
        tracklist: "https://api.deezer.com/artist/7961408/top?limit=50",
        type: "artist",
      },
      album: {
        id: 87709862,
        title: "Malade",
        cover: "https://api.deezer.com/album/87709862/image",
        cover_small:
          "https://cdns-images.dzcdn.net/images/cover/507899c27d0e71f995c591a01c64cf09/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://cdns-images.dzcdn.net/images/cover/507899c27d0e71f995c591a01c64cf09/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://cdns-images.dzcdn.net/images/cover/507899c27d0e71f995c591a01c64cf09/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://cdns-images.dzcdn.net/images/cover/507899c27d0e71f995c591a01c64cf09/1000x1000-000000-80-0-0.jpg",
        md5_image: "507899c27d0e71f995c591a01c64cf09",
        tracklist: "https://api.deezer.com/album/87709862/tracks",
        type: "album",
      },
      type: "track",
    },
    cargando: false,
  },
  mutations: {},
  actions: {},
  modules: {},
});
