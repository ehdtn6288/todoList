const body = document.querySelector("body");
const NUMBER_OF_IMG = 3;


function paintBg(imageNumber){
    const image = new Image();
    image.src = `images/${imageNumber + 1}.jpg`
    image.classList.add("bgImage");
    body.appendChild(image);
}

function getRandom(){
    const number = Math.floor(Math.random() * NUMBER_OF_IMG) ;
    console.log(number);
    return number;
    
}

function init(){
    const randomNumber = getRandom();
    paintBg(randomNumber);
}

init();