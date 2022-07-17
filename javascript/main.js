var colorChanger = document.getElementById("color-changer");
var colours =  ["red", "green", "blue", "pink"];
var counter = 0;

function changeColor(){
    if(counter >= colours.legth){
        counter = 0;
    }
    colorChanger.style.background = colours[counter];
    counter++;
}
var myTimer = setInterval(changeColor, 3000);

colorChanger.onclick = function(){
    clearInterval(myTimer);
    colorChanger.innerHTML = "Timer Stoped";
};




