const investment = 10000;
const annualRate = 7.0;
const years = 10;

let futureValue = investment;
for( let i = 1; i <= years; i++){
    futureValue += futureValue * annualRate /100;
}
alert(futureValue.toFixed(0));

for(let i = 3; i > 0; i--){
    document.write(i + "...");
}
document.write("Blast off!");
