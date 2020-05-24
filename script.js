var prevscroll = window.pageYOffset
var xprevscroll = window.pageXOffset

window.onscroll = function(){

var atualscroll = window.pageYOffset

if(atualscroll != 0){
    document.getElementById("faixatop").style.top = "-9vh"
}else{
    document.getElementById("faixatop").style.top = "0"
}

if(atualscroll > 0){
    document.getElementById("navcima").style.top = "0"
    if(prevscroll > atualscroll){
        document.getElementById("navbaixo").style.top = "10vh"
    } else {
        document.getElementById("navbaixo").style.top = "-100px"
    }
}else{
    document.getElementById("navcima").style.top = "9vh"
    if(prevscroll > atualscroll){
        document.getElementById("navbaixo").style.top = "19vh"
    } else {
        document.getElementById("navbaixo").style.top = "-100px"
    }
}

prevscroll = atualscroll
}

function passaDireita() {
    window.document.getElementById("ofertops").scrollBy(5000,0);
    document.getElementById('button-right').style.display = 'none';
    document.getElementById('button-left').style.display = 'block';
}

function passaEsquerda() {
    window.document.getElementById("ofertops").scrollBy(-5000,0);
    document.getElementById('button-left').style.display = 'none';
    document.getElementById('button-right').style.display = 'block';
}




