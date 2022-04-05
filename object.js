let uname = 'Alex'
    uage = 50
    email = 'alex@gmail.com'

let user = {
    uname,
    uage,
    email
}  
console.log("User name : "+user.uname);  
console.log("User age : "+user.unage);
console.log("User email : "+user.email); 

console.log("");
let emp = {
    ename : 'abc',
    eid : 'e001',
    edept : 'sales',
    esalary : 20000

}
console.log(emp);

//computed property names
console.log("");
var salary = 'esalary';
console.log("new employee");
let emp1 = {
    ename : 'xyz',
    eid : 'e002',
    edept : 'management',
    [salary] : 30000

}
console.log(emp1);

console.log("");
console.log("Array Destructing . . .");
var student = {stname:"abc",
               stid:001,
               faculty:"S&T",                
}
const {stname,stid,faculty}=student;
console.log(stname);
console.log(stid);
console.log(faculty);