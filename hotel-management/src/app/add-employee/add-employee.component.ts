import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  error: string = null;
  constructor(private hotelService: HotelService) { }

  addNewEmployee(addEmployeeForm: NgForm) {
    console.log(addEmployeeForm.value);
    console.log('---------------');
    this.hotelService.addEmployee(addEmployeeForm.value).subscribe(response => {
      console.log(response);
      addEmployeeForm.reset();
      this.error = response.description;
      }, err => {
      console.log(err);
    });
  }


  ngOnInit() {
  }

}
