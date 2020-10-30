<template>
  <div>
    <h1 class="seq_title">Let your creativity do the job</h1>
      <div class="seq_box">
          
          <div class="text_cont">
              <div class="drums_text">
                  <p>Snare</p>
                  <p>Snap</p>
                  <p>Kick</p>
              </div>
              <div class="synth_text">
                  <p>C</p>
                  <p>C#</p>
                  <p>D</p>
                  <p>Eb</p>
                  <p>E</p>
                  <p>F</p>
                  <p>F#</p>
                  <p>G</p>
                  <p>Ab</p>
                  <p>A</p>
                  <p>Bb</p>
                  <p>B</p>
              </div>
          </div>
          <div id="sequencer_container">
              
          </div>
      </div>
      
      <p style="text-align: center; margin-bottom: 20px;">Headphones are highly recommanded, some sounds might not play on speakers.</p>    
      <div  style="width: 100%; text-align: center;margin-bottom: 10px;">
          <button type="button" class="control_button" onclick="start_loop()" id="stb">▶</button>
          <button type="button" class="control_button" onclick="stop_loop()">⏹︎</button>
          <button type="button" class="control_button" onclick="set_time_8()">8</button>
          <button type="button" class="control_button" onclick="set_time_16()">16</button>
          <button type="button" class="control_button" onclick="set_time_32()">32</button>
          <button type="button" class="control_button" onclick="reset_loop()"> ⏏︎</button>
      </div>
      <div class="settings">
          <button type="button" class="control_button" id="gba_bt" onclick="set_gba()">🕹️</button>
          <button type="button" class="control_button" id="piano_bt" onclick="set_piano()">🎹</button>
          <div class="speed">
              <p>Tempo</p>
              <div class="speed_control">
                  <input type="range" autocomplete="off" value="360" min="220" max="500" step="10" onchange="updateTempo(this.value);"> 
              </div>
              <input type="text" autocomplete="off" id="textInput" value="40 bpm" style="color: black;margin: 5px;text-align: center; width: 70px; height: 70px; border-radius: 20rem;">
              
          </div>
          
      </div>
  </div>
  
</template>


<script>
require('./../public/js/sequencer.js')
module.exports = {
  props: {
  },
  data () {
    return {
      
    }
  },
  methods: {
    
  }
}

</script>

<style scoped src="./../public/css/sequencer.css">
</style>
