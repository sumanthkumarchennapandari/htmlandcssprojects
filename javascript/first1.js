//console.log("HEllo world"); - this is a single line comment
/*console.log();
This is a multiline comment
*/ 

/* operators In JS

Arthematic Operators - (+ - * /)
modulus - gives us the remainder
exponentiation - gives the powered value Of the question a**b
increment operator ->  ++
decrement operator ->  --
assignment operators -> ( = += -= *= %= **=)
relational/comparasion operators -> ( == != !== === > >= < <=)
logical operators -> ( && || ! )
ternary operator -> conditon ? true output : false output ;

*/

let a = 10;
let b = 20;
console.log(a+b);
console.log("a - b",a-b);
console.log("a**b",a**b);
console.log(a++);
console.log(b++);
console.log(a--);
console.log(b--);
console.log(a+4);
console.log("a == b : ",a==b);
 
/*

conditional statatments

-- if statement
if(condition)
{
    Body Of The if;
}

-- if else stattement
if(condition)
{
    Baody of the if;
}
else
{
    body of the else statement;
}

--else if satement
if(condition)
{
    body of the if 1;
} else if(condition){
    body of The condition 2;
} else if(condition 3){
    body Of the condotion 3;
} else {
    final condition if all of the above are wrong;
}

*/

let age = 21;
if(age <= 18)
    {
        console.log("You can vote");
    }

if(age >= 18)
    {
        console.log("You Cannot vote");
    }



if(age >= 18)
    {
        console.log("You can vote");
    }
    else{
        console.log("You Cannot Vote");
    }

let result = age > 18 ? "Adult" : "Not Adult" ;
console.log(result);

// MDN Docs is used to refer the theory of each and every topic in web development... fff f