<template>
<div>
  <h1 class="title">Artists</h1>
  <div class="artists">
    <!-- à changer en v-for quand les artistes auront été mis dans la BDD -->

      <div class="first" id="nujabes" style="background-image: url('public/img/nujabes.jpg');"> <router-link to="/nujabes"> <p class="artist_text"> Nujabes </p> </router-link> </div>
      <div class="first" id="shaka" style="background-image: url('public/img/shakaponk.jpg');"> <router-link to="/shakaponk"> <p class="artist_text">Shakaponk</p>   </router-link> </div>
      <div class="first" id="rhcp" style="background-image: url('public/img/rhcp.jpg');"> <router-link to="/rhcp"> <p class="artist_text">Red Hot Chili Peppers</p>   </router-link> </div>
      <div class="first" id="vulfpeck" style="background-image: url('public/img/Vulfpeck.jpg');"> <router-link to="/vulfpeck"> <p class="artist_text">Vulfpeck</p>   </router-link> </div>
  </div>

  <router-link to="/artists_of_the_month"> <h1 class="title" id="special">Artists of the month</h1></router-link>
</div>
</template>

<script>
module.exports = {
  props: {
    },
  data () {
    return {
      }
  },
  async mounted (){
    // Rajouter le get des artistes quand BDD faite
  },
  methods: {

  } 
}
</script>

<style scoped src="./../public/css/artists.css">

</style>