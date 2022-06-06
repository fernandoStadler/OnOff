let btn_switch = document.getElementById("btn_switch");
let lamp = document.getElementById("circle");

function switchState () {
    if(lamp.classList.contains("on")){
        lamp.classList.remove("on");
        lamp.classList.add("off");
        btn_switch.innerHTML = "Ligar";
    } else {
        lamp.classList.add("on");
        lamp.classList.remove("off");
        btn_switch.innerHTML = "Deligar";
    }   
}
btn_switch.onclick = switchState;