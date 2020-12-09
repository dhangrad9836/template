//declare and initialize an empty array to hld test scores from user
const scores = [];

//use do-while loop to get scores from user and store in
//the empty array
let score = 0;

do{
    score = parseInt(
        prompt("Enter a test score, or enter -1 to end scores", -1));
    if (score >= 0 && score <= 100){
        scores[scores.length] = score;
    }     
    else if (score != -1){
        alert("Score my be a valid number from 0 to 100");
    }
}
while(score != -1);

//averate test score calculated
if(scores.length > 0){
    //use for-in loop to add each score to total and display it
    let total = 0;
    for(let i in scores){
        total = total + scores[i];
        document.write(`<p>Score ${parseInt(i) + 1}: ${scores[i]}</p>`);
    }
    
    //calculate and display the average score
    const average = parseInt(total/scores.length);
    document.write(`<p>Average score is ${average}</p>`);
}