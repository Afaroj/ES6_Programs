//rest parameter will allow to create a function with indefinite numbers of arguments as an array anf to call that finction
function rest(...args)
{
    let sum=0;
    for(let i of args)
    {
        sum +=i;
    }
    console.log("sum = "+sum);
}
rest(10,20,30,40,50,60);