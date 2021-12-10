const btns = document.querySelectorAll(".sound_btn");
function sound_play(item){
    var _audio;
    if(item==="E"){
        _audio = new Audio("crash.mp3");
        _audio.play();
    }
    else if(item==="R"){
        _audio = new Audio("ride.mp3");
        _audio.play();
    }
    else if(item==="F"){
        _audio = new Audio("floor_tom.mp3");
        _audio.play();
    }
    else if(item==="G"){
        _audio = new Audio("mid_tom.mp3");
        _audio.play();
    }
    else if(item==="H"){
        _audio = new Audio("high_tom.mp3");
        _audio.play();
    }
    else if(item==="J"){
        _audio = new Audio("snare.mp3");
        _audio.play();
    }
    else if(item==="I"){
        _audio = new Audio("hit_hat_open.mp3");
        _audio.play();
    }
    else if(item==="K"){
        _audio = new Audio("hit_hat_close.mp3");
        _audio.play();
    }
    else if(item==="V"){
        _audio = new Audio("kick.mp3");
        _audio.play();
    }
    else if(item==="B"){
        _audio = new Audio("kick.mp3");
        _audio.play();
    }
}
function play(event){
    var x = event.keyCode || event.which;
    var y = String.fromCharCode(x).toUpperCase();
    sound_play(y);
    btns.forEach(function(item){
        if(item.innerHTML===y){
            item.classList.add("shrink");
        }
    });
}
function back(event){
    var x = event.keyCode || event.which;
    var y = String.fromCharCode(x).toUpperCase();
    btns.forEach(function(item){
        if(item.innerHTML===y){
            item.classList.remove("shrink");
        }
    });
}
window.addEventListener("keydown", play);
window.addEventListener("keyup", back);