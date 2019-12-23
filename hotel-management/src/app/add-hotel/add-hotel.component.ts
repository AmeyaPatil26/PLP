import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {

  error: string = null;
  constructor(private hotelService: HotelService) { }

  addNewHotel(addHotelForm: NgForm) {
    console.log(addHotelForm.value);
    this.hotelService.addHotel(addHotelForm.value).subscribe(response => {
      console.log(response);
      addHotelForm.reset();
      this.error = response.description;
    }, err => {
      console.log(err);
      console.log('not added');
    });
  }

  ngOnInit() {
  }

}
