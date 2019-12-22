import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  hotels = [];
  constructor(private hotelService: HotelService) {

    this.hotelService.getHotelList().subscribe(data => {
      console.log(data.hotelList);
      this.hotels = data.hotelList;
    }, err => {
      console.log(err);
    });
   }

  ngOnInit() {
  }

}
