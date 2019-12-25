import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { LoginRegister } from '../login-register';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-vertical-header',
  templateUrl: './vertical-header.component.html',
  styleUrls: ['./vertical-header.component.css']
})
export class VerticalHeaderComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router, private breakpointObserver: BreakpointObserver) { }
  userDetails = JSON.parse(localStorage.getItem('token'));
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAdmin() {
    const user = JSON.parse(localStorage.getItem('token'));
    console.log(user.adminEmployeeUserBean);
    // tslint:disable-next-line: one-variable-per-declaration
    const user1 = user.adminEmployeeUserBean.type;
    console.log(user1);
    if (user1 && user1 === 'Admin') {
      return true;
    } else {
      return false;
    }
  }

  isUser() {
    const user = JSON.parse(localStorage.getItem('token'));
    console.log(user);
    const user1 = user.adminEmployeeUserBean.type;
    console.log(user1);
    if (user1 && user1.type === 'User') {
      console.log('in');
      return true;
    } else {
      return false;
    }
  }
  isEmployee() {
    const user = JSON.parse(localStorage.getItem('token'));
    const user1 = user.adminEmployeeUserBean.type;
    if (user1 && user1.type === 'Employee') {
      return true;
    } else {
      return false;
    }
  }
  isLoggedIn(): boolean {
    const user: LoginRegister = JSON.parse(localStorage.getItem('token'));
    if (user && user.statusCode === 200) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
  }

}
