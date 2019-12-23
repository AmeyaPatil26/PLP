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
  constructor(private hotelService: HotelService) { }

  addRoom(addRoomForm: NgForm) {
    console.log(addRoomForm.value);
    console.log('---------------');
    this.hotelService.addNewRooms(addRoomForm.value).subscribe(response => {
      console.log(response);
      addRoomForm.reset();
      this.error = response.description;
    }, err => {
      console.log(err);
    });
  }


  ngOnInit() {
  }

}
