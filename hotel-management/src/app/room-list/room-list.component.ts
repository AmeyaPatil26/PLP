import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  rooms = [];
  constructor(private hotelService: HotelService) {
    this.hotelService.getRoomList().subscribe(data => {
      console.log(data.roomList);
      this.rooms = data.roomList;
    }, err => {
      console.log(err);
    });
   }

   deleteRoom(room) {
    this.hotelService.delRoom(room).subscribe(data => {
      console.log(data);
      this.rooms.splice(this.rooms.indexOf(this.deleteRoom), 1);
    }, err => {
      console.log(err);
    });
   }

   updateRoom(room) {
    this.hotelService.delRoom(room).subscribe(data => {
      console.log(data);
      this.rooms.splice(this.rooms.indexOf(this.deleteRoom), 1);
    }, err => {
      console.log(err);
    });
   }

  ngOnInit() {
  }

}
