<template>
<div>
  
  <h1 class="title">Artists</h1>
  <div class="artists">
    <div class="first" v-for="artist in artists" :key="artist.id" id="artist" :style="{ backgroundImage: 'url(' + artist.image + ')' }">
      <router-link :to="{path: '/artist/' + artist.id}"><p class="artist_text"> {{artist.name}} </p></router-link>
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
      }
  },
  async mounted (){
    let bg = document.getElementById('index_body')
    bg.style.backgroundColor = '#EC7357'
    bg.style.backgroundImage = 'none'
  },
  methods: {

  } 
}
</script>

<style scoped>

</style>