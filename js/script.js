'use strict';
/* JavaScript will go here */
console.log("Hello World");

//JavaScript
function sayHello(name){
    return "Hello, "+name;
}
var msg = sayHello("Joel");
console.log(msg);

//Practice
var circle={x:50, y:50, radius:35};
function getArea(circle){
    return Math.PI*circle.radius*circle.radius;
}
console.log(Math.PI);

//anonymous function syntax

var doAtOnce = function(funcA, funcB) {
    funcA();
    console.log(' and ');
    funcB();
    console.log(' at the same time! ');
}
var patHead = function(name) {
    console.log(name + " pat your head");
}

var rubBelly = function(name) {
    console.log("rub your belly");
}


doAtOnce(patHead, rubBelly);

//Iterate through an array
var array = ['a','b','c'];
var printItem = function(item) {
   console.log(item);
}

array.forEach(printItem);
//more common to use anonymous function
array.forEach(function(item) {
   console.log(item);
});
