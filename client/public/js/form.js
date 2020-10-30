function but_click(){
    console.log('clicked');
    document.getElementById('done_button').className = "d_button clicked";
    document.getElementById('done_button').disabled = true;
    setTimeout(function(){but_validate();}, 2250);
}

function but_validate(){
    console.log('validate');
    document.getElementById('done_button').className = "d_button done";
    setTimeout(function(){but_reset();}, 1250);
}

function but_reset(){
    console.log('reset');
    document.getElementById('done_button').className = "d_button";
    document.getElementById('done_button').disabled = false;
}

function submit_form(){

    if(document.getElementById('name').checkValidity() == true){
        but_click();
    }
}