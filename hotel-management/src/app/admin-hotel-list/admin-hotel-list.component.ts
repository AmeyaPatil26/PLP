import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel-information';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-admin-hotel-list',
  templateUrl: './admin-hotel-list.component.html',
  styleUrls: ['./admin-hotel-list.component.css']
})
export class AdminHotelListComponent implements OnInit {

  constructor(public hotelService: HotelService,public dialog: MatDialog) {
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
