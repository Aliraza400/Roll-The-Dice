
function rollDice() {

    const numOfDice = document.getElementById("numOfDice").value;

//const btn = document.getElementById("btn");


let diceResult = document.getElementById("diceResult");
let diceImages = document.getElementById("diceImages");
const values = [];

const images = [];

    for(let i = 0; i < numOfDice; i++) {

        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="Dice: ${value}">`)
        
    }

    diceResult.textContent = `Dice: ${values.join(", ")}`;

    diceImages.innerHTML = images.join("")

    

}