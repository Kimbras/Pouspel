console.log("Hello world!");
document.body.style.background = "#EFD174";

//etenknop verhogen en verlagen met timer
const etenLevel = document.querySelector("#etenLevel");
const eetKnop = document.querySelector("#eetKnop");

function verlaagEetLevel(){
    document.querySelector("#etenLevel").src = 'img/levels/eten.svg';  
}

function verhoogEetLevel(){
    document.querySelector("#etenLevel").src = 'img/levels/etengroen.svg';
    setInterval(verlaagEetLevel, 8000); 
}
eetKnop.addEventListener("click", verhoogEetLevel);

//energieknop verhogen en verlagen met timer
const energieLevel = document.querySelector("#energieLevel");
const energieKnop = document.querySelector("#energieKnop");

function verlaagEnergieLevel(){
    document.querySelector("#energieLevel").src = 'img/levels/energie.svg';   
}

function verhoogEnergieLevel(){
    document.querySelector("#energieLevel").src = 'img/levels/energiegroen.svg';
    setInterval(verlaagEnergieLevel, 5000);
}

energieKnop.addEventListener("click", verhoogEnergieLevel);

// zeep
// erik heeft geholpen
const zeepKnop = document.querySelector("#zeep");
let pouArray = ['normale.png','vies.png','viezer.png']
let statusPou = 0;
document.querySelector("#pou").src = 'img/karacters/'+pouArray[statusPou];
 
function pouSchoon(){
    statusPou = statusPou - 1;
    if (statusPou < 0){
        statusPou = 0;
        document.body.style.background = "#a4f558";


        
    }
    else if (statusPou > 2){
        statusPou = 2;
        document.body.style.background = "#64a12a";
    }
    pouUpdaten();
}
 
function viesWorden(){
    statusPou = statusPou + 1;
    if (statusPou >= 2) {
        statusPou = 2;
        document.body.style.background = "#304a17";
    }
    else if (statusPou === 1){
        statusPou = 1
        document.body.style.background = "#64a12a";
    }
    else if (statusPou <= 0){
        statusPou = 0;
        document.body.style.background = "#a4f558";
    }
    pouUpdaten();
   
    console.log(statusPou);
}
 
function pouUpdaten(){
    document.querySelector("#pou").src = 'img/karacters/'+pouArray[statusPou];
}

setInterval(viesWorden, 12000);
 
zeepKnop.addEventListener("click", pouSchoon);

//slapen
const pouSlapen = document.querySelector("#pou");
const slaapKnop = document.querySelector("#slaapKnop");

function KlaarmetSlapen(){
    document.querySelector("#pou").src = 'img/karacters/vies.png'; 
    document.body.style.background = "#19B9F3";
}

function GaanSlapen(){
    document.querySelector("#pou").src = 'img/karacters/slapen.png';
    setInterval(KlaarmetSlapen, 8000);
    document.body.style.background = "#0a1d7a";
}


slaapKnop.addEventListener("click", GaanSlapen);