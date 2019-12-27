import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }



  adminRoomList() {
    return this.http.get<any>('http://localhost:8080/getRoomList');

  }

  deleteRoomInfo(data) {
    console.log(data);
    return this.http.delete(`http://localhost:8080/deleteRoom/${data.roomId}`);
  }

  updateRoomInfo(data) {
    console.log(data);
    return this.http.put('http://localhost:8080/updateRoomInforamtion', data);
  }

  addRoom(data): Observable<any> {
    console.log(data);
    return this.http.put<any>('http://localhost:8080/addRoomInformation', data);
  }

}
