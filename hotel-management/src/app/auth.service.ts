import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  api = 'http://localhost:8080/';
  users = [];

//  login user
  login(credentials): Observable<any> {
    // tslint:disable-next-line: max-line-length
     return this.http.get(`${this.api}adminEmployeeUserLogin?email=${credentials.email}&password=${credentials.password}`, credentials);
  }

  register(users): Observable<any> {
    return this.http.put(`${this.api}registerUser`, users);
  }

  getUser() {
    return this.http.get<any>(`${this.api}showAllUsers`);
  }

  delUser(user): Observable<any> {
 return this.http.delete<any>(`${this.api}removeUser?userId=${user.id}`, user);
  }
}
