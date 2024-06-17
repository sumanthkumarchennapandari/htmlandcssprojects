// Get user to input a number using a prompt and Check the Number Is a Multiple of 5 or not

let num = prompt("Enter the Number you want to check : ");
if(num % 5 === 0)
    {
        document.write("The number you've entred is a multiple of 5...");
    } else {
        document.write("The number you've entred is not a multiple of 5...");
    }