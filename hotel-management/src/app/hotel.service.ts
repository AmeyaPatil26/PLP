import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }

  adminHotelList() {
    return this.http.get<any>('http://localhost:8080/getHotelList');

  }

  deleteHotelInfo(data) {
    console.log(data);
    return this.http.delete(`http://localhost:8080/deleteHotel/${data.hotelId}`);
  }

  updateHotelInfo(data) {
    console.log(data);
    return this.http.put('http://localhost:8080/updateHotelInformation', data);
  }

  addHotel(data): Observable<any> {
    console.log(data);
    return this.http.post<any>('http://localhost:8080/addHotel', data);
  }
}
