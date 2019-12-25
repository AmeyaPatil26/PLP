import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee-information';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-employee-list',
  templateUrl: './admin-employee-list.component.html',
  styleUrls: ['./admin-employee-list.component.css']
})
export class AdminEmployeeListComponent implements OnInit {

  constructor(public employeeService: EmployeeService) {
    this.adminEmployeeList();
  }
  employeeList: [];
  selectedEmployee: Employee = {
    employeeId: null,
    hotelName: null,
    licenceNumber: null,
    hotelId: null,
    name: null,
    email: null,
    password: null,
    address: null,
    contactNumber: null,
    nationality: null

  };

  selectEmployee(employeeList: Employee) {
    this.selectedEmployee = employeeList;
  }
  adminEmployeeList() {
    this.employeeService.adminEmployeeList().subscribe((data) => {
      console.log(data.employeeList);
      this.employeeList = data.employeeList;
    },
      err => {
        console.log(err);
      }
    );
  }
  deleteEmployeeInfo(deleteEmployee: Employee) {
    console.log(deleteEmployee);
    this.employeeService.deleteEmployeeInfo(deleteEmployee).subscribe(res => {
      console.log(res);
      console.log('delete');
      this.adminEmployeeList();
    },
      err => {
        console.log(err);
      });
  }

  updateEmployeeInfo(updateEmployee: NgForm) {
    this.employeeService.updateEmployeeInfo(updateEmployee.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
  }

}
