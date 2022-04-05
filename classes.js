class Employee
{
    constructor()
    {
        this.name = "name";
    }
    getName()
    {
        return this.name;
    }
    setName()
    {
        this.name="newname";
    }

}
let employee = new Employee();
console.log(employee.getName());
employee.setName();
console.log(employee.getName());