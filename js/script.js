const { createApp } = Vue;

createApp({
  data() {
    return {
      albums: [
        // {
        //   img: "img/NewJersey.jpg",
        //   name_song: "New Jersey",
        //   artist: "Bon jovi",
        //   data: "1988",
        // },
        // {
        //   img: "img/LiveatWembley.jpg",
        //   name_song: "Live at Wembley 86",
        //   artist: "Queen",
        //   data: "1992",
        // },
        // {
        //   img: "img/Summoner.jpg",
        //   name_song: "Ten's Summoner's Tales",
        //   artist: "Sting",
        //   data: "1993",
        // },
        // {
        //   img: "img/Stevegaddband.jpg",
        //   name_song: "Steve Gadd band",
        //   artist: "Steve Gadd Band",
        //   data: "2018",
        // },
        // {
        //   img: "img/bravenewworld.jpg",
        //   name_song: "Brave new world",
        //   artist: "Iron Maiden",
        //   data: "2000",
        // },
        // {
        //   img: "img/Onemorecar.jpg",
        //   name_song: "One more car, one more rider",
        //   artist: "Eric Clapton",
        //   data: "2002",
        // },
      ],

      
    };

    
  },

  methods: {
    requestAlbums() {
      axios
        .get("server.php")
        .then(response => (this.albums = response.data));
    },
  },

  created() {
    this.requestAlbums();
  },
}).mount("#app");