var rellax = new Rellax('.rellax', {center: true, speed: 1});

function activate()
{
    hamburger = document.getElementById('burg');

    if(hamburger.classList.contains('is-active')){

        hamburger.classList.remove('is-active');
        document.getElementById('nl').className = "nav_left hidden";
    
    }else{

        hamburger.classList.add('is-active');
        document.getElementById('nl').className = "nav_left active";
    }
}

window.onscroll = function()
{
    if (document.documentElement.scrollTop > 80) { 
        document.getElementById('h').className = "scrolled";
    } else {
        document.getElementById('h').className = "";
    }
    
}

function expand(){
    document.getElementById('circle').className = "active";
    document.getElementById('textCircle').style.opacity = "0";
    setTimeout(function(){ 
        document.getElementById('P1').style.background = "#EC7357";
        document.getElementById('circle').style.display = "none";
        document.getElementById('art').style.display = "flex";
    }, 1000);
}

function closing(){
    document.getElementById('circle').style.display = "block";
    document.getElementById('P1').style = "revert";
    document.getElementById('circle').className = "";
    document.getElementById('art').style.display = "none";
    document.getElementById('textCircle').style.opacity = "1";
}

function albumhover()
{
    this.opacity = 0.5;
    
    document.getElementsByClassName("Albumtext1").opacity = 1;  
}