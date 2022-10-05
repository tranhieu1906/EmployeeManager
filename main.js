"use strict";
exports.__esModule = true;
var Employess_1 = require("./Employess");
var EmployeeManager_1 = require("./EmployeeManager");
var employee = new Employess_1.Employess("Tran", "Hieu", new Date(), "", "");
var employeeManager = new EmployeeManager_1.EmployeeManager();
employeeManager.add(employee);
console.log(employeeManager.show());
