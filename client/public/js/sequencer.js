

var sequencer = document.getElementById('sequencer_container'); 

var drum1 = document.createElement('audio');
drum1.src="public/sound/snare01.ogg";
drum1.type = "audio/ogg";
drum1.className = "drum";

var drum2 = document.createElement('audio');
drum2.src="public/sound/clap01.ogg";
drum2.type = "audio/ogg";
drum2.className = "drum";

var drum3 = document.createElement('audio');
drum3.src="public/sound/kick01.ogg";
drum3.type = "audio/ogg";
drum3.className = "drum";

sequencer.appendChild(drum1);
sequencer.appendChild(drum2);
sequencer.appendChild(drum3);

const drums = [drum1, drum2, drum3];

var drums_line1 = document.createElement("div");
drums_line1.className = "drum_line dl1";

var drums_line2 = document.createElement("div");
drums_line2.className = "drum_line dl2 ";

var drums_line3 = document.createElement("div");
drums_line3.className = "drum_line dl3";

var drum_cont = document.createElement("div");
drum_cont.className = "drums_container";

drum_cont.appendChild(drums_line1);
drum_cont.appendChild(drums_line2);
drum_cont.appendChild(drums_line3);



var C3, C3d, D3, E3, E3b, F3, F3d, G3, A3, A3b, B3, B3b;

C3 = document.createElement("audio");
C3.type = "audio/ogg";
C3.src = "public/sound/C3.ogg";
C3.className = "synth";

C3d = document.createElement("audio");
C3d.type = "audio/ogg";
C3d.src = "public/sound/C3d.ogg";
C3d.className = "synth";

D3 = document.createElement("audio");
D3.type = "audio/ogg";
D3.src = "public/sound/D3.ogg";
D3.className = "synth";

E3 = document.createElement("audio");
E3.type = "audio/ogg";
E3.src = "public/sound/E3.ogg";
E3.className = "synth";

E3b = document.createElement("audio");
E3b.type = "audio/ogg";
E3b.src = "public/sound/E3b.ogg";
E3b.className = "synth";

F3 = document.createElement("audio");
F3.type = "audio/ogg";
F3.src = "public/sound/F3.ogg";
F3.className = "synth";

F3d = document.createElement("audio");
F3d.type = "audio/ogg";
F3d.src = "public/sound/F3d.ogg";
F3d.className = "synth";

G3 = document.createElement("audio");
G3.type = "audio/ogg";
G3.src = "public/sound/G3.ogg";
G3.className = "synth";

A3 = document.createElement("audio");
A3.type = "audio/ogg";
A3.src = "public/sound/A3.ogg";
A3.className = "synth";

A3b = document.createElement("audio");
A3b.type = "audio/ogg";
A3b.src = "public/sound/A3b.ogg";
A3b.className = "synth";

B3 = document.createElement("audio");
B3.type = "audio/ogg";
B3.src = "public/sound/B3.ogg";
B3.className = "synth";

B3b = document.createElement("audio");
B3b.type = "audio/ogg";
B3b.src = "public/sound/B3b.ogg";
B3b.className = "synth";

var C4, C4d, D4, E4b, E4, F4, F4d, G4, A4b, A4, B4b, B4;

C4 = document.createElement("audio");
C4.type = "audio/ogg";
C4.src = "public/sound/C4.ogg";
C4.className = "synth";

C4d = document.createElement("audio");
C4d.type = "audio/ogg";
C4d.src = "public/sound/C4d.ogg";
C4d.className = "synth";

D4 = document.createElement("audio");
D4.type = "audio/ogg";
D4.src = "public/sound/D4.ogg";
D4.className = "synth";

E4 = document.createElement("audio");
E4.type = "audio/ogg";
E4.src = "public/sound/E4.ogg";
E4.className = "synth";

E4b = document.createElement("audio");
E4b.type = "audio/ogg";
E4b.src = "public/sound/E4b.ogg";
E4b.className = "synth";

F4 = document.createElement("audio");
F4.type = "audio/ogg";
F4.src = "public/sound/F4.ogg";
F4.className = "synth";

F4d = document.createElement("audio");
F4d.type = "audio/ogg";
F4d.src = "public/sound/F4d.ogg";
F4d.className = "synth";

G4 = document.createElement("audio");
G4.type = "audio/ogg";
G4.src = "public/sound/G4.ogg";
G4.className = "synth";

A4 = document.createElement("audio");
A4.type = "audio/ogg";
A4.src = "public/sound/A4.ogg";
A4.className = "synth";

A4b = document.createElement("audio");
A4b.type = "audio/ogg";
A4b.src = "public/sound/A4b.ogg";
A4b.className = "synth";

B4 = document.createElement("audio");
B4.type = "audio/ogg";
B4.src = "public/sound/B4.ogg";
B4.className = "synth";

B4b = document.createElement("audio");
B4b.type = "audio/ogg";
B4b.src = "public/sound/B4b.ogg";
B4b.className = "synth";

const tones = [C3, C3d, D3, E3b, E3, F3, F3d, G3, A3b, A3, B3b, B3];
const tones2 = [C4, C4d, D4, E4b, E4, F4, F4d, G4, A4b, A4, B4b, B4];

var synth_cont = document.createElement("div");
synth_cont.className = "synth_container";

var s_line1, s_line2, s_line3, s_line4, s_line5, s_line6, s_line7, s_line8, s_line9, s_line10, s_line11, s_line12;



s_line1 = document.createElement("div");
s_line1.className = "synth_line";
synth_cont.appendChild(s_line1);

s_line2 = document.createElement("div");
s_line2.className = "synth_line";
synth_cont.appendChild(s_line2);

s_line3 = document.createElement("div");
s_line3.className = "synth_line";
synth_cont.appendChild(s_line3);

s_line4 = document.createElement("div");
s_line4.className = "synth_line";
synth_cont.appendChild(s_line4);

s_line5 = document.createElement("div");
s_line5.className = "synth_line";
synth_cont.appendChild(s_line5);

s_line6 = document.createElement("div");
s_line6.className = "synth_line";
synth_cont.appendChild(s_line6);

s_line7 = document.createElement("div");
s_line7.className = "synth_line";
synth_cont.appendChild(s_line7);

s_line8 = document.createElement("div");
s_line8.className = "synth_line";
synth_cont.appendChild(s_line8);

s_line9 = document.createElement("div");
s_line9.className = "synth_line";
synth_cont.appendChild(s_line9);

s_line10 = document.createElement("div");
s_line10.className = "synth_line";
synth_cont.appendChild(s_line10);

s_line11 = document.createElement("div");
s_line11.className = "synth_line";
synth_cont.appendChild(s_line11);

s_line12 = document.createElement("div");
s_line12.className = "synth_line";
synth_cont.appendChild(s_line12);

var timeNb = 16;

let but1, but2, but3, but4, but5, but6, but7, but8, but9, but10, but11, but12;

function set_time_8(){
    if(timeNb == 16){
        timeNb = 8;
        shrink_sequencer(8);   
        init_buttons();
    }

    if(timeNb == 32){
        timeNb = 8;
        shrink_sequencer(24);   
        init_buttons();
    }
}

function set_time_16(){
    if(timeNb == 8){
        timeNb = 16;
        expand_sequencer(8);   
        init_buttons();
    }

    if(timeNb == 32){
        timeNb = 16;
        shrink_sequencer(16);
    }
}

function set_time_32(){
    if(timeNb == 8){
        timeNb = 32;
        expand_sequencer(24);   
        init_buttons();
    }

    if(timeNb == 16){
        timeNb = 32;
        expand_sequencer(16);
        init_buttons();
    }
}

function shrink_sequencer(n){
    for(let i=0; i<n; i++){
        drums_line1.removeChild(drums_line1.lastElementChild);
        drums_line2.removeChild(drums_line2.lastElementChild);
        drums_line3.removeChild(drums_line3.lastElementChild);
        s_line1.removeChild(s_line1.lastElementChild);
        s_line2.removeChild(s_line2.lastElementChild);
        s_line3.removeChild(s_line3.lastElementChild);
        s_line4.removeChild(s_line4.lastElementChild);
        s_line5.removeChild(s_line5.lastElementChild);
        s_line6.removeChild(s_line6.lastElementChild);
        s_line7.removeChild(s_line7.lastElementChild); 
        s_line8.removeChild(s_line8.lastElementChild);
        s_line9.removeChild(s_line9.lastElementChild);
        s_line10.removeChild(s_line10.lastElementChild);
        s_line11.removeChild(s_line11.lastElementChild);
        s_line12.removeChild(s_line12.lastElementChild);
    }
}

function expand_sequencer(n){
    for(let i=0; i<n; i++){
        but1 = document.createElement("button");
        but1.type = "button";
        but1.className = "drum_button";

        but2 = document.createElement("button");
        but2.type = "button";
        but2.className = "drum_button";

        but3 = document.createElement("button");
        but3.type = "button";
        but3.className = "drum_button";

        drums_line1.appendChild(but1);
        drums_line2.appendChild(but2);
        drums_line3.appendChild(but3);

        but1 = document.createElement("button");
        but1.type = "button";
        but1.className = "synth_button";

        but2 = document.createElement("button");
        but2.type = "button";
        but2.className = "synth_button";
        but2.style.backgroundColor = "rgb(136, 78, 136)";

        but3 = document.createElement("button");
        but3.type = "button";
        but3.className = "synth_button";

        but4 = document.createElement("button");
        but4.type = "button";
        but4.className = "synth_button";
        but4.style.backgroundColor = "rgb(136, 78, 136)";

        but5 = document.createElement("button");
        but5.type = "button";
        but5.className = "synth_button";

        but6 = document.createElement("button");
        but6.type = "button";
        but6.className = "synth_button";

        but7 = document.createElement("button");
        but7.type = "button";
        but7.className = "synth_button";
        but7.style.backgroundColor = "rgb(136, 78, 136)";

        but8 = document.createElement("button");
        but8.type = "button";
        but8.className = "synth_button";

        but9 = document.createElement("button");
        but9.type = "button";
        but9.className = "synth_button";
        but9.style.backgroundColor = "rgb(136, 78, 136)";

        but10 = document.createElement("button");
        but10.type = "button";
        but10.className = "synth_button";

        but11 = document.createElement("button");
        but11.type = "button";
        but11.className = "synth_button";
        but11.style.backgroundColor = "rgb(136, 78, 136)";

        but12 = document.createElement("button");
        but12.type = "button";
        but12.className = "synth_button";

        s_line1.appendChild(but1);
        s_line2.appendChild(but2);
        s_line3.appendChild(but3);
        s_line4.appendChild(but4);
        s_line5.appendChild(but5);
        s_line6.appendChild(but6);
        s_line7.appendChild(but7);
        s_line8.appendChild(but8);
        s_line9.appendChild(but9);
        s_line10.appendChild(but10);
        s_line11.appendChild(but11);
        s_line12.appendChild(but12);
    }
}

init_drums();  
init_synths();
init_buttons();

function init_drums(){
    for(let i=0; i<timeNb; i++)
    {
        let but1 = document.createElement("button");
        but1.type = "button";
        but1.className = "drum_button";

        let but2 = document.createElement("button");
        but2.type = "button";
        but2.className = "drum_button";

        let but3 = document.createElement("button");
        but3.type = "button";
        but3.className = "drum_button";

        drums_line1.appendChild(but1);
        drums_line2.appendChild(but2);
        drums_line3.appendChild(but3);
    }
    sequencer.appendChild(drum_cont);
}

function init_synths(){
    for(let i=0; i<timeNb; i++)
    {
        but1 = document.createElement("button");
        but1.type = "button";
        but1.className = "synth_button";

        but2 = document.createElement("button");
        but2.type = "button";
        but2.className = "synth_button";
        but2.style.backgroundColor = "rgb(136, 78, 136)";

        but3 = document.createElement("button");
        but3.type = "button";
        but3.className = "synth_button";

        but4 = document.createElement("button");
        but4.type = "button";
        but4.className = "synth_button";
        but4.style.backgroundColor = "rgb(136, 78, 136)";

        but5 = document.createElement("button");
        but5.type = "button";
        but5.className = "synth_button";

        but6 = document.createElement("button");
        but6.type = "button";
        but6.className = "synth_button";

        but7 = document.createElement("button");
        but7.type = "button";
        but7.className = "synth_button";
        but7.style.backgroundColor = "rgb(136, 78, 136)";

        but8 = document.createElement("button");
        but8.type = "button";
        but8.className = "synth_button";

        but9 = document.createElement("button");
        but9.type = "button";
        but9.className = "synth_button";
        but9.style.backgroundColor = "rgb(136, 78, 136)";

        but10 = document.createElement("button");
        but10.type = "button";
        but10.className = "synth_button";

        but11 = document.createElement("button");
        but11.type = "button";
        but11.className = "synth_button";
        but11.style.backgroundColor = "rgb(136, 78, 136)";

        but12 = document.createElement("button");
        but12.type = "button";
        but12.className = "synth_button";

        s_line1.appendChild(but1);
        s_line2.appendChild(but2);
        s_line3.appendChild(but3);
        s_line4.appendChild(but4);
        s_line5.appendChild(but5);
        s_line6.appendChild(but6);
        s_line7.appendChild(but7);
        s_line8.appendChild(but8);
        s_line9.appendChild(but9);
        s_line10.appendChild(but10);
        s_line11.appendChild(but11);
        s_line12.appendChild(but12);
        
    }
    sequencer.appendChild(synth_cont);
}

var bt ;


function init_buttons(){
    bt = document.querySelectorAll(".drum_button");
    bt.forEach(element=>{element.onclick=function(){
        element.classList.toggle("on");
    }})
    bt = document.querySelectorAll(".synth_button");
    bt.forEach(element=>
    {
        element.onclick=function(){
        element.classList.toggle("on");
        }
        if(set == 1){
            element.style.backgroundColor = "rgba(0, 255, 234, 0.507)";
        }
    })
}

const drum_rows = document.getElementsByClassName('drum_line');
const synth_rows = document.getElementsByClassName('synth_line');

let index = 0;

var delay = 360;
var bpm = 40;
var set = 0;
let gbt  = document.getElementById('gba_bt'), pbt  = document.getElementById('piano_bt');
gbt.style.backgroundColor = "grey";


function updateTempo(val){
    console.log(val);
    delay = val;
    bpm = Math.round(60000/(4*val));
    document.getElementById('textInput').value = bpm + " bpm";
    if(looping == true)
    {
        pause_loop();
        start_loop();
    }
}

function set_gba(){
    gbt.style.backgroundColor = "grey";
    pbt.style.backgroundColor = "white";
    bt.forEach(element=>{element.style.backgroundColor = "rgba(182, 102, 182, 0.507)"})
    set = 0;
}

function set_piano(){
    gbt.style.backgroundColor = "white";
    pbt.style.backgroundColor = "grey";
    bt = document.querySelectorAll(".synth_button");
    bt.forEach(element=>{element.style.backgroundColor = "rgba(0, 255, 234, 0.507)"})
    set = 1;
}

var int;
var looping = false;

function start_loop(){
    if(looping == false)
    {
        int = setInterval(main_Loop, delay);
        looping = true;
        document.getElementById('stb').textContent = "⏸";
        document.getElementById('stb').onclick = pause_loop;
    }
}

function pause_loop(){
    if(looping == true)
    {
        clearInterval(int);
        looping = false;
        document.getElementById('stb').textContent = "▶";
        document.getElementById('stb').onclick = start_loop;
    }
}

function stop_loop(){
    if(looping == true)
    {
        clearInterval(int);
    }
    
    index = 0;
    past();
    looping = false;
    
    document.getElementById('stb').textContent = "▶";
    document.getElementById('stb').onclick = start_loop;
}

function reset_loop(){
    var bt = document.querySelectorAll(".drum_button");
    bt.forEach(element=>{
        element.classList.remove("on");
    })
    bt = document.querySelectorAll(".synth_button");
    bt.forEach(element=>{
        element.classList.remove("on");
    })
}


function past(){
    var bt = document.querySelectorAll(".drum_button");
    bt.forEach(element=>{
        element.classList.remove("current");
        element.classList.remove("played");
    })
    bt = document.querySelectorAll(".synth_button");
    bt.forEach(element=>{
        element.classList.remove("current");
        element.classList.remove("played");
    })
}

function main_Loop(){
    
    index = index%timeNb;
    past();
    beat_Loop();
    synth_Loop();
    index++;
}

function beat_Loop(){
    for (let i=0; i < drum_rows.length; i++){
        let beat = drums[i],
        drum_row = drum_rows[i];
        is_on = drum_row.querySelector('button:nth-child(' + (index+1) + ')');
        is_on.classList.add("current");
        if (is_on.classList.contains('on')){
            beat.play();
            is_on.classList.remove("current");
            is_on.classList.add("played");
        }
    }
    
}

function synth_Loop(){
    for (let i=0; i < synth_rows.length; i++){
        let tone;
        if(set == 0){
            tone = tones[i];
        }else if(set == 1){  
            tone = tones2[i];
        }
        let synth_row = synth_rows[i];
        is_on = synth_row.querySelector('button:nth-child(' + (index+1) + ')');
        is_on.classList.add("current");
        if (is_on.classList.contains('on')){
            tone.play();
            is_on.classList.remove("current");
            is_on.classList.add("played");
        }
    }
}