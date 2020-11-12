<template>
  <div>  
    <div class="bandphoto" :style="{backgroundImage: 'url(' + artist.image + ')'}">
      <div id="artist" > <h1 class="title" >{{artist.name}}</h1> </div> 
    </div>

    <div class="quickinfos">
        <span class="infos"><p>Genre : {{artist.genre}} </p></span>
        <span class="infos"><p>Origin : {{artist.origin}} </p></span>
        <span class="infos">  <p> Years of activity : {{artist.activity}}</p> </span>
        <span class="infos"> <p> Number of albums : {{artist.albumnb}} </p></span>
    
    </div>

    <div class="Bio">
        <h2 class="Bio1">About the Artist</h2>
        <p class="Bio2">{{artist.bio}}
        </p>

    </div>
    
    <div class="Bio">
        <h2 class="Bio1">Discography</h2>
        <div class="album" v-for="album in artist.discography" :key="album.id">
          <img :src="album.img" class="albumphoto">
          <p class="albumtext"> {{album.title}} </p>
        </div>
            

    </div>
  </div>
</template>

<script>
module.exports = {
  props: {
    artists: Array
    },
  data () {
    return {
      artist
      }
  },
  async mounted (){
    let bg = document.getElementById('index_body')
    bg.style.backgroundColor = '#EC7357'
    bg.style.backgroundImage = 'none'
    art = this.$route.params.artistId
    let i = 0
    while( art != this.artists[i].id){
      i++
    }
    this.artist = this.artists[i]
  },
  methods: {
    
  } 
}
</script>

<style scoped src="/css/about.css">

</style>