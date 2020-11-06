<template>
<div>
   <div id="artist" :style="{backgroundImage: 'url(' + artist.image + ')'}"> <h1 class="title" >{{artist.name}}</h1> </div>
            <div class="bandphoto">
                   
                 
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
    artist: Array,
    artists: Array
    },
  data () {
    return {
        
      }
  },
  async mounted (){
    let bg = document.getElementById('index_body')
    bg.style.backgroundColor = '#EC7357'
    bg.style.backgroundImage = 'none' 
    console.log(this.$route.params.artistId)
    art = this.$route.params.artistId
    this.artist = this.artists[art-1]
  },
  methods: {
    
  } 
}
</script>

<style scoped src="./../public/css/about.css">

</style>