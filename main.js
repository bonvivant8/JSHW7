let str='';
for (let i=20;i<=30;i=i+0.5)
{
    str=str+i +' ';
}
console.log(str)



for (let hryvnia=10 ;hryvnia<=100;hryvnia=hryvnia+10)
{
    console.log(`You will get ${hryvnia*27} dolors for ${hryvnia} hryvnias.`)
}



let str2='';
let n=prompt('Enter your number')
for(let a =1;a<=100;a++){
    if (a*a<=n){
       str2=str2+a+' '

    }
}
console.log(`The numbers are: ${str2}`)



const yourNumber=parseInt(prompt("Enter your number:"))
let isPrime= true
if(yourNumber===1)
{
    console.log("1 is neither prime nor composite number.");
}
else if (yourNumber > 1)
{
    for (let z = 2; z < yourNumber; z++)
    {
        if (yourNumber % z ===0)
        {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${yourNumber} is a prime number`);
    } else {
        console.log(`${yourNumber} is a not prime number`);
    }
}



let oneN =parseInt(prompt ('Enter your number'));
let isBased=false
const MAX_EXP=10000
const BASE=3

for (let exp = 1; exp < MAX_EXP; exp++)
{
    if (oneN===BASE**exp)
    {
        isBased = true;
        break;
    }
}
if (isBased) {
    console.log(`True  ${oneN} `);
} else {
    console.log(`False  ${oneN} `);
}








