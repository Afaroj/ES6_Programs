afterFoursec = () =>
{
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve("Resolving after four seconds");
        },4000);
    },
    reject =>{
        setTimeout(() =>{
            reject("Rejected");
        })
    }
    )
}
asyncFunction = async () =>
{
    console.log("Inside async funtion");
    console.log(await afterFoursec);
}
asyncFunction();