  
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-room-list',
  templateUrl: './user-room-list.component.html',
  styleUrls: ['./user-room-list.component.css']
})
export class UserRoomListComponent implements OnInit {

  constructor() { }

  @Input()
  dataFromParent;
  ngOnInit() {
  }

}
