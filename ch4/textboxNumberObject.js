//focus() moves the cursor into the textbox
//select() Highlights all the text in the text box

//value - a string that represents the contents of the text box
//disabled - A boolean value that controls whether the text box is disabled

//toFixed() returns a string representation of the number after it has been
//rounded to the number of decimal places

//define two text boxes
// <input type="text" id="first_name"></input>
// <input type="text" id="sales_amount"></input>

//HOW to use the value property to the value from the textbox
let firstName = document.querySelector("#first_name");
firstName = firstName.value;

//Using chaining
const firstName = document.querySelector("#first_name").value;

//using parseFloat() to get value number from textbox
const salesAmt = parseFloat(document.querySelector("#sales_amount").value);


