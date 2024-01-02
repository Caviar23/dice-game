var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var diceRoll1 = "dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", diceRoll1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceRoll2 = "dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", diceRoll2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}