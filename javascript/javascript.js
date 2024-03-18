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
let pouArray = ['schoon.png','vies.png','viezer.png']
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
    document.querySelector("#pou").src = 'img/karacters/schoon.png'; 
    document.body.style.background = "#19B9F3";
}

function GaanSlapen(){
    document.querySelector("#pou").src = 'img/karacters/slapen.png';
    setInterval(KlaarmetSlapen, 8000);
    document.body.style.background = "#0a1d7a";
}


slaapKnop.addEventListener("click", GaanSlapen);

// geluid toevoegen
// https://pixabay.com/nl/sound-effects/search/klink/

let audioKledingkast = new Audio("img/audio/klikgeluidKledingkast.mp3");
let audioSlapen = new Audio("img/audio/slapen.mp3");

function geluid (knop){
    knop.play;
    console.log("check")
}

kledingKnop.addEventListener("click", geluid(audioKledingkast));
slaapKnop.addEventListener("click", geluid(audioSlapen));

// kledingkast
//terug en verder knop in beeld

    const kledingKnop = document.querySelector("#kledingKnop");
    const kledingKnopTerug = document.querySelector("#terugKnop").classList;
    const kledingKnopVerder = document.querySelector("#verderKnop").classList;

    kledingKnopTerug.add("navigatieVerbergen");
    kledingKnopVerder.add("navigatieVerbergen");
    
    function kledingKnoppenTonen(){
        kledingKnopTerug.add("navigatieShow");
        kledingKnopVerder.add("navigatieShow");
    }
    
     // function kledingKnoppenVerbergen(){
   //     kledingKnopTerug.classList.remove("navigatieVerbergen");
   //     kledingKnopVerder.classList.remove("navigatieVerbergen");
   // }

   kledingKnop.addEventListener("click", kledingKnoppenTonen);
   //  andereKnoppen.addEventListener("click", kledingKnoppenVerbergen);

   
 
 // math random kleding toevoegen
 
 let outfitsArray = ['een.png', 'twee.png', 'drie.png', 'vier.png', 'vijf.png'];
 let imgElement = document.querySelector(".Wakker");
 
 function kledingRandomAanpassen() {
     let randomIndex = Math.floor(Math.random() * 4);
     let randomOutfit = outfitsArray[randomIndex];
     imgElement.src = 'img/karacters/' + randomOutfit;
 }
 console.log(kledingRandomAanpassen);
 //kledingKnopVerder.addEventListener("click", kledingRandomAanpassen);