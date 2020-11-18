<template>
  <div>
      <div class="welcome">
          <h1 class="welcome-title">WELCOME ON STAGE</h1>
          <h2 class="welcome-sub">
              <router-link to='/sequencer' class="seq-link">Your journey starts here</router-link>
              <router-link to='/sequencer' class="seq-arrow"><img class="arrow" src="img/right arrow.png"></router-link>
          
          </h2>
          
      </div>
      
      <div class="spot" id="P1">
          <div id="circle">
              <p id = textCircle>BAND OF THE DAY </p>
              <div id = "imgArticle"><img src = "img/Plus1.png" onclick="expand()"></div>
          </div>
          <div id="art">
              <div id ="artPhoto">
                  <div id="article">
                      <h2 id="title">{{harttitle}}</h2>
                      <p id="content"><span v-html="hartcontent"></span></p>
                  </div>
                  <div id="ArticlePhoto" class="rellax" data-rellax-speed="-1">
                      <img class="rellax" data-rellax-speed="0" :src="hartimage">
                      <p id="legende">{{hartcaption}}</p>
                  </div>
              </div>
              <div id="close" onclick="closing()"><img src = "img/Cross.png"></div>
          </div>
          
      </div>
  </div>
</template>

<script>
module.exports = {
  props: {
      harttitle: String,
      hartcontent: String,
      hartimage: String,
      hartcaption: String
    },
  data () {
    return {
      }
  },
  mounted (){
    let script = document.createElement('script')
    script.setAttribute('src', '/js/script.js')
    document.head.appendChild(script)
    let bg = document.getElementById('index_body')
    bg.style.backgroundImage = 'url("/img/background.jpg")'
  },
  methods: {

  } 
}
</script>

<style>
</style>