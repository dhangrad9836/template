let sum = 0;
let i = 1;

while (i <= 5){
    sum += i;
    i++;
}
alert(sum);

//while loop to make sure only positive numbers entered
let years = parseInt(prompt("Enter number of years."));

while( isNaN(years) || years <= 0){
    years = parseInt(prompt("years must be a positive number."));
}