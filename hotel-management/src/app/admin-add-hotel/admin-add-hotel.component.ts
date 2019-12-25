import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-admin-add-hotel',
  templateUrl: './admin-add-hotel.component.html',
  styleUrls: ['./admin-add-hotel.component.css']
})
export class AdminAddHotelComponent implements OnInit {

  backendRespnse: any;
  constructor(public hotelService: HotelService) { }

  ngOnInit() {
  }
}
