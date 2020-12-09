//populate an array with numbers
const numbers = [];
for (let i = 0; i < 10; i++){
    numbers[i] = i + 1;
}

//display the number from above array
let displayString = "";
for(let i = 0; i < numbers.length; i++){
    displayString += numbers[i] + " ";
}
alert(displayString);