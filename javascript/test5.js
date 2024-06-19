// prompt the user to enter their full name and themn generate a username for them 
// based on the input - start the username with @ followed by their full name and ending by their length of full name

let name = prompt("Enter your name without spaces");
let username = `@${name}${name.length}`;
console.log("Username Generated is : ",username);