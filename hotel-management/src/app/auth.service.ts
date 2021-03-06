import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRegister } from './login-register';
import { User } from './user-information';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  register(data) {
    console.log('register', data);
    return this.http.put(
      'http://localhost:8080/userRegistration', data
    );
  }

  login(data): Observable<LoginRegister> {
    console.log('service', data);
    return this.http.post<LoginRegister>(
      'http://localhost:8080/adminEmployeeUserLogin', data
    );
  }

  
  getProfileData(data): Observable<LoginRegister> {
    return this.http.post<LoginRegister>('http://localhost:8080/adminUserEmployeeProfile',data);
  }
  updateProfileForm(data) {
    console.log(data);
    return this.http.put('http://localhost:8080/updateUserProfile', data);
  }

}
