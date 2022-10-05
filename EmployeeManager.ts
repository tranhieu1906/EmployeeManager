import { Employess } from "./Employess"
export class EmployeeManager {
    static Employee: Employess[] = []
    constructor() {

    }
    add(employee: Employess): void {
        EmployeeManager.Employee.push(employee)
    }
    delete(employee: Employess): void {
        EmployeeManager.Employee.splice(EmployeeManager.Employee.indexOf(employee), 1)
    }
    update(employee: Employess, employeeUpdate: Employess): void {
        EmployeeManager.Employee.splice(EmployeeManager.Employee.indexOf(employee), 1, employeeUpdate)
    }
    showAll() {
        return EmployeeManager.Employee
    }
    // showEmployee(employee: Employess) {
    //     return employee
    // }
}