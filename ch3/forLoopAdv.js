const totals = [];
totals [0] = 141.95;
totals [1] = 212.25;
totals [2] = 411;
totals [3] = 135.75;

//for in loop
 let sum = 0;
// for(let i in totals) {  //the variable i holds current value
//     sum += totals[i];   //so here i will be the index
// }                       //and display curent value
// alert(sum);

//for of loop
for (let val of totals){    //the val variable holds the 
    sum += val;             //current value
}
alert(sum);
