<template>
  <div>
      <div class="welcome">
          <h1 class="welcome-title">WELCOME ON STAGE</h1>
          <h2 class="welcome-sub">
              <router-link to='\sequencer' class="seq-link">Your journey starts here</router-link>
              <router-link to='\sequencer' class="seq-arrow"><img class="arrow" src="public/img/right arrow.png"></router-link>
          
          </h2>
          
      </div>
      
      <div class="spot" id="P1">
          <div id="circle">
              <p id = textCircle>BAND OF THE DAY </p>
              <div id = "imgArticle"><img src = "public/img/Plus1.png" onclick="expand()"></div>
          </div>
          <div id="art">
              <div id ="artPhoto">
                  <div id="article">
                      <h2 id="title">{{title}}</h2>
                      <p id="content">{{content}}</p>
                  </div>
                  <div id="ArticlePhoto" class="rellax" data-rellax-speed="-1">
                      <img class="rellax" data-rellax-speed="0" src = public/img/EddieVedder.jpg>
                      <p id="legende">Eddie Vedder</p>
                  </div>
              </div>
              <div id="close" onclick="closing()"><img src = "public/img/Cross.png"></div>
          </div>
          
      </div>
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
  mounted (){
    let script = document.createElement('script')
      script.setAttribute('src', './../public/js/script.js')
      document.head.appendChild(script)
    
  },
  methods: {

  } 
}
</script>