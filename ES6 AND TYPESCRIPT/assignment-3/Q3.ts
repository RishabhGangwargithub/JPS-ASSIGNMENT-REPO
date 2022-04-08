interface Printable{
    print():string;
}

class Circle implements Printable{
    constructor(public radius:number){}
    print(): string {
        return `The radius of Cicle is ${this.radius} Area is  ${(Math.PI*this.radius*this.radius)}`;
    }

}
class Employee implements Printable{
    constructor( public empname:string,public empid:number,public designation:string){
    }
    print(): string {
        return `Employee Details:\n Employee Id:${this.empid}\n Employee Name: ${this.empname}\n Employee Designation: ${this.designation}`;
    }

}
function printAll(obj1,obj2){
    console.log(obj1.print());
    console.log(obj2.print());
}
let circleObj = new Circle(2);
let employeeObj = new Employee("RG",1,"jr analyst");

printAll(circleObj,employeeObj);