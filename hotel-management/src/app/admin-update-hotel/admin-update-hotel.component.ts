import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hotel } from '../hotel-information';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-admin-update-hotel',
  templateUrl: './admin-update-hotel.component.html',
  styleUrls: ['./admin-update-hotel.component.css']
})
export class AdminUpdateHotelComponent implements OnInit {


  constructor(public hotelService: HotelService) {
    this.adminHotelList();
  }
  hotelList: [];
  selectedHotel: Hotel = {
    hotelId: null,
    licenceNumber: null,
    hotelName: null,
    hotelAddress: null,
    hotelContactNumber: null,
    hotelImageURL: null,

  };

  selectHotel(hotelList: Hotel) {
    this.selectedHotel = hotelList;
  }
  adminHotelList() {
    this.hotelService.adminHotelList().subscribe((data) => {
      console.log(data.hotelList);
      this.hotelList = data.hotelList;
    },
      err => {
        console.log(err);
      }
    );
  }
  deleteHotelInfo(deleteHotel: Hotel) {
    console.log(deleteHotel);
    this.hotelService.deleteHotelInfo(deleteHotel).subscribe(res => {
      console.log(res);
      console.log('delete');
      this.adminHotelList();
    },
      err => {
        console.log(err);
      });
  }

  updateHotelInfo(updateHotel: NgForm) {
    this.hotelService.updateHotelInfo(updateHotel.value).subscribe(
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
