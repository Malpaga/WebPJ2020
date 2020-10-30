function but_click(){
    console.log('clicked');
    document.getElementById('done_button').className = "d_button clicked";
    document.getElementById('done_button').disabled = true;
    setTimeout(function(){but_validate();}, 2250);
}

function updateTextInput(val){
    document.getElementById('textInput').value = val;
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

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function submit_form(){

    if(document.getElementById('aname').checkValidity() == true){
        but_click();
        setTimeout(function(){
            var newReview = document.createElement("div");
            newReview.className = "review";

            var newImage = document.createElement("div");
            newImage.className = "rellax";
            imageBack = document.createElement("img");
            imageBack.className="picture";
            const newFile = document.getElementById('myFile').files;
            if(newFile.length === 0) {
                var color = getRandomColor();
                imageBack.style.background = color;
                imageBack.style.border = "1px solid" + color;
                imageBack.style.width = "130px";
                imageBack.style.height = "130px";
            }else{

                imageBack.src = URL.createObjectURL(newFile[0]);
            }
            
            newImage.appendChild(imageBack);

            var newRevBox = document.createElement("div");
            newRevBox.className = "rev_box";

            var artist = document.createElement("div");
            artist.className = "rev_name";
            artist.innerHTML = document.getElementById('aname').value + ' - ' + document.getElementById('sname').value;
            newRevBox.appendChild(artist);

            var newContent = document.createElement("div");
            newContent.className="t_content";
            var newDate = document.createElement("div");
            newDate.className="date";
            var today = new Date();
            newDate.innerHTML = String(today.getDate()).padStart(2, '0') + '/' + String(today.getMonth()+1).padStart(2, '0') + '/' + today.getFullYear();
            newContent.appendChild(newDate);

            var rev_text = document.createElement("div");
            rev_text.className="text";
            rev_text.innerHTML = '"' + document.getElementById('rev_cont').value + '"';
            newContent.appendChild(rev_text);
            newRevBox.appendChild(newContent);

            var newScore = document.createElement("div");
            newScore.className = "score";
            var newRating = document.createElement("div");
            newRating.className = "rating";
            newRating.innerHTML = "score : ";
            var jauge = document.createElement("div");
            jauge.className = "meter orange";
            var spanned = document.createElement("span");
            spanned.style.width = document.getElementById('score_range').value + '%';
            if(document.getElementById('score_range').value == 100){
                spanned.style.borderTopRightRadius = "20px";
                spanned.style.borderBottomRightRadius = "20px";
            }
            var grade = document.createElement("p");
            grade.className = "outof100";
            grade.innerHTML = document.getElementById('score_range').value + "/100";
            jauge.appendChild(spanned);
            newRating.appendChild(jauge);
            newScore.appendChild(newRating);
            newScore.appendChild(grade);

            newReview.appendChild(newImage);
            newRevBox.appendChild(newScore);
            newReview.appendChild(newRevBox);

            document.getElementById('rev_main_container').appendChild(newReview);
        }, 2250)
        
    }

}