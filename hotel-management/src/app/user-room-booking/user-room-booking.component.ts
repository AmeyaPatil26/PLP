import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking-information';
import { HotelService } from '../hotel.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-room-booking',
  templateUrl: './user-room-booking.component.html',
  styleUrls: ['./user-room-booking.component.css']
})
export class UserRoomBookingComponent implements OnInit {
  bookingInfo: any;
  userInfo: any;
  licenceNumber: string;
  hotelName: string;
  roomType: string;
  roomCapacity: string;
  email: string;
  name: string;
  address: string;
  contactNumber: string;
  nationality: string;
  bookingAmount: string;
  backendRespnse: any;
  totalBillOfRoom: number;
  userDetails = JSON.parse(localStorage.getItem('token'));
  constructor(public hotelService: HotelService) {
    this.bookingInfo = hotelService.singleRoomInfo;
    this.licenceNumber = hotelService.singleRoomInfo.licenceNumber;
    this.hotelName = hotelService.singleRoomInfo.hotelName;
    this.roomType = hotelService.singleRoomInfo.roomType;
    this.roomCapacity = hotelService.singleRoomInfo.roomCapacity;
    this.bookingAmount = hotelService.singleRoomInfo.roomAmount;
    console.log('....................',this.bookingAmount);
    console.log(this.userDetails);
    this.userInfo = this.userDetails.adminEmployeeUserBean;
    this.email = this.userDetails.adminEmployeeUserBean.email;
    this.name = this.userDetails.adminEmployeeUserBean.name;
    this.address = this.userDetails.adminEmployeeUserBean.address;
    this.contactNumber = this.userDetails.adminEmployeeUserBean.contactNumber;
    this.nationality = this.userDetails.adminEmployeeUserBean.nationality;

    this.totalBillOfRoom = this.hotelService.totalBill;
  }
  addUserBooking(bookUserRoom: NgForm) {
    console.log(bookUserRoom.value);
    this.hotelService.addUserBooking(bookUserRoom.value).subscribe(res => {
      console.log('........response', res);
      this.backendRespnse = res;
      console.log('.....backendresponse', this.backendRespnse);
      bookUserRoom.reset();
    },
      err => {
        console.log(err);
      });
  }

  calculateTotalDays(totalDays: NgForm) {
    this.hotelService.calculateTotalDays(totalDays.value)
    }

  ngOnInit() {
  }

}
