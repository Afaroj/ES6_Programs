//Arrow function will allow us to write more accurate way to write a function in JS.
//It will allow to write smaller function syntax.
var arrowFun = () =>
{
    console.log("It is an Arrow function without parameter . . .");
};
arrowFun();

console.log("");
var show = (a,b,c) =>{
    console.log("This is an arrow function with parameters . . .");
    console.log(a+ " "+b+" "+c);
}
show(100,110,120);

console.log("");
var show2 = (a, b=250) =>{
    console.log("Arrow function with default parameter . . .");
    console.log(a+" "+b);
}
show2(100);

console.log("");
var show3 = (a,...args) =>
{
    console.log("Arrow function with rest parameter . . .");
    console.log(a+" "+args);
}
show3('a','b','c','d','e','f','g','h','i');