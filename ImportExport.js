//Export one by one
export const myNumbers = [1,2,3,4,5];
export const myFunction = ()=>
{
    return("This is export function");
}

//export as a group
const myNoGroup = [90,80,70];
const myFunc = () =>
{
    return("This is exported function as a group");
}
export {myFunction,myFunc};

//Default Export
export default const myStr ="Hello There";