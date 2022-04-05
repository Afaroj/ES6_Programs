//spread operator will allow to insert another array within an initialized array.
let colors = ['grey','voilet','orange'];
let array = [...colors,'red','yellow','white','black'];
console.log(array);

//with using spread operator
console.log("Without using spread operator . . .");
let color = ['grey','voilet','orange'];
let newArray = color;
console.log(color);
newArray.push("Green");
console.log(newArray);
console.log(color);
console.log("");

//with using spread
console.log("With using spread operator . . . ");
let color1 = ['grey','voilet','orange'];
let newArray1 = [...color];
console.log(color1);
newArray.push("Green");
console.log(newArray1);
console.log(color1);