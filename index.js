var button = document.querySelectorAll(".animal");

for ( i = 0 ; i < button.length ; i++){

button[i].addEventListener("click", function (){

    var letter = this.textContent;
    playSound (letter);
})
}
document.addEventListener("keydown", function(event){
    var pressedKey = event.key;
    playSound (pressedKey);
})

function playSound(hit){

    switch(hit) {

        case "d":
        var dogSound = new Audio("./sounds/Dog.mp3");
        dogSound.play();
        break;

        case "c":
        var catSound = new Audio("./sounds/Cat.mp3");
        catSound.play();
        break;

        case "s":
        var sheepSound = new Audio("./sounds/Sheep.mp3");
        sheepSound.play();
        break;

        case "h":
        var horseSound = new Audio("./sounds/Horse.mp3");
        horseSound.play();
        break;

        case "b":
        var birdSound = new Audio("./sounds/Bird.mp3");
        birdSound.play();
        break;

        default: console.log(letter);
    }
}