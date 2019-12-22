import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  error: string = null;
  constructor(private auth: HotelService) { }

  addRoom(addRoomForm: NgForm) {
    console.log(addRoomForm.value);
    this.auth.addNewRooms(addRoomForm.value).subscribe(response => {
      console.log(response);
    }, err => {
      console.log(err);
    });
  }


  ngOnInit() {
  }

}
