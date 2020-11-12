<template>
<div>
  <h1 class="title">ABOUT</h1>
  <div class=about id="about">
      <div id="project">
          <div class="imgAbout" ><img src = "public/img/Project.jpg"></div>
          <h3 class="rellax" data-rellax-speed="0.5">The Project</h3>
          <P>The goal of this project was to create a website. We had the choice of the subject so we decided to make a music themed website. 
              Music was a great choice as all three of us are musicians. In order to do the website, we used Github to share our code whenever we did a modification.
              We did this website in one and a half week.
          </P>
      </div>
      <div id="we">
          <div id="Stan">
              <div class="imgAbout" ><img src = "public/img/Stan.jpg"></div>
              <h3 class="rellax" data-rellax-speed="0.5">Stan Méline</h3>
              <p>I'm a third year student at Efrei Paris. I am passionated by music and play the guitar since 2010.
              </p>
          </div>
          <div id="Philippe">
              <div class="imgAbout"><img src = "public/img/Philippe.png"></div>
              <h3 class="rellax" data-rellax-speed="0.5">Philippe Mangeard</h3>
              <p>3nd year IT student at Efrei Paris, I'm keen on listening to music, playing video games with my friends and programming funny stuff. 
                  When this project started, I was excited about all the things we could do, maybe too much. I still hope you enjoyed our website! 
                  I contributed in the elaboration of the homepage, the artists page, the reviews page, and I made the sequencer you can find on "Let's rock "!
              </p>
          </div>
          
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
  },
  methods: {

  } 
}
</script>

<style scoped src="/css/about.css">

</style>