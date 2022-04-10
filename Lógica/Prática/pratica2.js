/*
4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. 
*/

let a = 5;
let b = 6;
let c = 7;

const lados = (a + b + c) / 2;

var areaTriangulo =  Math.sqrt(lados*((lados-a)*(lados-b)*(lados-c)));

console.log(areaTriangulo);