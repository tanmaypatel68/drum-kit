var num=document.querySelectorAll(".drum").length;

for(var i=0;i<num;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);
}

function handleclick(){
    var x=this.innerHTML;
    makesound(x);
    buttonAnimation(x);
}
document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});

function makesound(key){
    switch(key){
        case "w":
            var audio=new Audio("sounds/sounds_crash.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/sounds_kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/sounds_snare.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/sounds_tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/sounds_tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/sounds_tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/sounds_tom-4.mp3");
            audio.play();
            break;
    }
}
function buttonAnimation(currentkey){
    var activebutton=document.querySelector("."+currentkey);
    activebutton.classList.add("pressed");
    setTimeout(function(){activebutton.classList.remove("pressed");},150);
}
