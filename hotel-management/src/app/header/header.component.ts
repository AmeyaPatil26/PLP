import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  isUser(): boolean {
    const userDetails = JSON.parse(localStorage.getItem('key'));
    if (userDetails && userDetails.type === 'user') {
      console.log('user login');
      return true;
    } else {
      return false;
    }
  }

  isAdmin() {
    const adminDetails = JSON.parse(localStorage.getItem('key'));
    console.log(adminDetails);
    if (adminDetails && adminDetails.type === 'admin') {
      console.log('Admin login');
      return true;
    } else {
      console.log('not login');
      return false;
    }
  }

  isLoggedIn() {
    const user = JSON.parse(localStorage.getItem('key'));
    if (user) {
      console.log('Login successful');
      return true;
    } else {
      return false;
    }
  }
  logout() {
    console.log('Logout successfully');
    localStorage.removeItem('key');
    this.router.navigateByUrl('/login');
  }



  ngOnInit() {
  }

}
