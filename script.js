//Colors,Code,Body
var color1 = document.getElementsByTagName("input")[0];
var color2 = document.getElementsByTagName("input")[1];
var adder = document.querySelector(".dta1");
var body = document.getElementById("gradient");

//before
adder.innerText = "color1:"+color1.value+" color2:"+color2.value+"";

//Background changer and print color code
function Changer(){
    adder.innerText = "color1: "+color1.value+"   color2: "+color2.value+"";
    body.style.background = "linear-gradient(to right,"
    +color1.value
    +","
    +color2.value
    +")";
}

//actions
color1.addEventListener("input",Changer);
color2.addEventListener("input",Changer);

