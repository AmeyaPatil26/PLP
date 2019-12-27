import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from './hotel-information';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  adminEmployeeList() {
    return this.http.get<any>('http://localhost:8080/getEmployeeList');

  }

  deleteEmployeeInfo(data) {
    console.log(data);
    return this.http.delete(`http://localhost:8080/deleteEmployee/${data.employeeId}`);
  }

  updateEmployeeInfo(data) {
    console.log(data);
    return this.http.put('http://localhost:8080/updateEmployeeInformation', data);
  }


  addEmployee(data): Observable<any> {
    console.log(data);
    return this.http.put<any>('http://localhost:8080/addEmployee', data);
  }

  getHotelInfo(data): Observable<Hotel> {
    console.log('............getHotelInfo', data);
    return this.http.post<Hotel>('http://localhost:8080/getHotelInfoForEmployee', data);
  }

  employeeRoomList(data): Observable<Hotel> {
    console.log('............employeeRoomList', data);
    return this.http.post<Hotel>('http://localhost:8080/getRoomListForEmployee', data);
  }

  employeeBookRoom(data): Observable<any> {
    console.log(data);
    return this.http.put<any>('http://localhost:8080/hotelBookingFromEmployee', data);
  }
}
