/* for - of loop 
 
for(let val of srtVar)
{
Loop body;
} -- this is used for only strings And Arrays...

for - in loop

for(let key in object)
{
    loop Body;
} -- This is used for iterating through the keys in an Object...

*/

let str = "SUmanth Kumar";
for(let i of str)
    {
        document.writeln(i);
    }

let student = {
    Name : "Sumanth Kumar",
    age : 21,
};

for(let key in student)
    {
        console.log(key, " = " ,student.key);
    }