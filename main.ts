import { Employess } from "./Employess"
import { EmployeeManager } from "./EmployeeManager"


let employee = new Employess("Tran", "Hieu", new Date(), "", "")
let employee1 = new Employess("Thi", "Hoa", new Date(), "", "")


let employeeManager = new EmployeeManager()
employeeManager.add(employee1)
employeeManager.add(employee)

employeeManager.update(employee, employee1);
// employeeManager.delete(employee1)
// console.log(employeeManager.showAll())