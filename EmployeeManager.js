"use strict";
exports.__esModule = true;
exports.EmployeeManager = void 0;
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
        this.Employee = [];
    }
    EmployeeManager.prototype.show = function () {
        return this.Employee;
    };
    EmployeeManager.prototype.add = function (employee) {
        this.Employee.push(employee);
    };
    EmployeeManager.prototype["delete"] = function (employee) {
        this.Employee.splice(this.Employee.indexOf(employee), 1);
    };
    EmployeeManager.prototype.update = function (employee) {
    };
    return EmployeeManager;
}());
exports.EmployeeManager = EmployeeManager;
