

var image_fuagraEL;
var image_fuagraID = document.getElementById('image_fuagra');

var image_fishEL;
var image_fishID = document.getElementById('image_fish');

var image_chickenEL;
var image_chickenID = document.getElementById('image_chicken');



function changeImage(){
    let displayImage = image_fuagraID;
    if(displayImage.src.match('IMG/fuagra.png')){
        displayImage.src = 'IMG/fuagrared.png'
    } else {
        displayImage.src = 'IMG/fuagra.png'
    } 
}


function change(){
    let displayImage = image_fishID;
    if(displayImage.src.match('IMG/fish.png')){
        displayImage.src = 'IMG/fish.png'
    } else {
        displayImage.src = 'IMG/fish.png'
    } 
}


function change2(){
    let displayImage = image_chickenID;
    if(displayImage.src.match('IMG/chicken.png')){
        displayImage.src = 'IMG/chicken_no.png'
    } else {
        displayImage.src = 'IMG/chicken.png'
    } 
}















