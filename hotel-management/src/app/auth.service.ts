import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRegister } from './login-register';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  api = 'http://localhost:8080/';

  register(data) {
    console.log('register', data);
    return this.http.put(
      'http://localhost:8080/userRegistration', data
    );
  }

  login(data): Observable<any> {
    console.log('service', data);
    return this.http.post<any>(`${this.api}adminEmployeeUserLogin?email=${data.email}&password=${data.password}`, data );
    // return this.http.post(`${this.api}adminEmployeeUserLogin?email=${credentials.email}&password=${credentials.password}`, credentials);
  }

  getProfileData(data): Observable<LoginRegister> {
    return this.http.post<LoginRegister>('http://localhost:8080/adminUserEmployeeProfile', data);
  }
  updateProfileForm(data) {
    console.log(data);
    return this.http.put('http://localhost:8080/updateUserProfile', data);
  }

}
