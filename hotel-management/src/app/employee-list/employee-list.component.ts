import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  hotels = [];
  constructor(private hotelService: HotelService) {
    this.hotelService.getEmployeeList().subscribe(data => {
      console.log(data.employeeList);
      this.hotels = data.employeeList;
    }, err => {
      console.log(err);
    });
   }

   deleteEmployee(hotel) {
    this.hotelService.delEmployee(hotel).subscribe(data => {
      console.log(data);
      this.hotels.splice(this.hotels.indexOf(this.deleteEmployee), 1);
    }, err => {
      console.log(err);
    });
   }

   updateEmployee(hotel) {
    this.hotelService.updateEmployeeInfo(hotel).subscribe(data => {
      console.log(data);
      this.hotels.splice(this.hotels.indexOf(this.updateEmployee), 1);
    }, err => {
      console.log(err);
    });
   }
  ngOnInit() {
  }

}
