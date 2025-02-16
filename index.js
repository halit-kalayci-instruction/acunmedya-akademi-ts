// node.js
console.log("Merhaba");
 
// node index.js

// type-safe değildir.
// variable
var number = 50;
console.log(number);
number = "abc";
console.log(number);
// let
let age = 25;
console.log(age);
age = "abc";
console.log(age);

// Kapsam(Scope) farkı
// var fonksiyon kapsamlı
function test()
{
    if(true)
    {
        var x=10;
    }
    console.log(x)
}
// let blok kapsamlı iken
function test2() {
        if(true)    
        {
            let x=10;
        }
        console.log(x)
}

test();
//test2();

// **********************************
// re-declare
var a = 5;
var a = 10;
console.log(a);

let b = 5;
// let b = 10; YAPILAMAZ
console.log(b);
// ***********************************

// **************

console.log(x)
var x = 10;

//console.log(y)
let y = 10;

// **************
// constant
const PI = 3.1;
//PI = 5;
console.log(PI);