//how to code selectors

//using an element id
//returns the object for the html element whose id is rate
const rate = document.querySelector("#rate");

//using element type
//returns an array of objects for all the <a> elements in the document
const links = document.querySelectorAll("a");

//using a class
//returns an array of objects for all the elements assigned 
//to the error class
const errors = document.querySelectorAll(".error"); //note the period 

//using a decendant selector
//returns an array of all the h2 elements that are decendants
//of the element whose id is "faqs"
const h2s = document.querySelectorAll("#faqs h2");

//Using a combination of selectors
//returns an array of all the div elements assigned to the closed class
const minus = document.querySelectorAll("div.closed");

//Using multiple Selectors
//returns an array of elements specified by two decendants selectors
const elements = docue.querySelectorAll("#faqs h2, div p");

//how to write a line of html in the document
document.write("<b>Welcome to our website!</b>");