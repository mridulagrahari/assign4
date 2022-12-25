//task 1 -

//Declare four variables without assigning values and print them in console
//How to get value of the variable myvar as output
//var myvar= 1;
//console.log("myvar");

var myvar=1;
console.log(myvar);

// Declare variables to store your first name, last name, marital status, country and age in multiple lines

let firstName = ("mridul")
let lastName = ("agrahari")
var maritalStatus = ("unmarried")
var country = ('india')
var age = (26)
console.log(firstName)
console.log(lastName)
console.log(maritalStatus)
console.log(country)
console.log(age)


// . Declare variables to store your first name, last name, marital status, country and age in a single line

console.log(firstName,lastName,maritalStatus,country,age)


//5. Declare variables and assign string, boolean, undefined and null data types

let a ="qwerty";
let b = true;
let c = undefined;
let d = null;


//6. Convert the string to integer

//parseInt()
let f = "10"
let e = parseInt(f);


// Task 2: Simple Programs todo for Operators

//Square of a number
let g = 2
function square(num){
    return num*num

}
square(g);


//Swapping 2 numbers

let num1 = 2;
let num2 = 3;
[num1,num2]=[num2,num1]

//Addition of 3 numbers

let n1= 2
let n2= 3
let n3 = 4;

function addition(a,b,c){
    return a+b+c;

}
console.log(addition(n1,n2,n3))


//Celsius to Fahrenheit conversion
//(0°C × 9/5) + 32 = 32°F
let celcius = 30;
function tempreture(cel){

    return (cel * 9/5)+ 32;

}

tempreture(celcius)

//Meter to miles


let meter = 30;
function length(cel){

    return (cel/1609);

}

length(meter)

//Pounds to kg

let Pounds = 30;
function weight(cel){

    return (cel/2.205);

}

weight(Pounds)




