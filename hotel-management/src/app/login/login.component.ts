import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string = null;

  constructor(private auth: AuthService, private router: Router) { }

  login(form: NgForm) {
    console.log(form.value);
    this.error = null;
    this.auth.login(form.value).subscribe(res => {
      console.log(res);
      // if (user && user.registered) {
      //   localStorage.setItem('user', JSON.stringify(user));
      // }
      if (res && res.statusCode === 200) {
        const user = JSON.stringify(res.adminEmployeeUserBean);
        const abc = localStorage.setItem('key', JSON.stringify(user));
        console.log('.............................', abc);
        this.error = res.description;
        this.router.navigateByUrl('/');
        form.reset();
      } else {
        this.error = res.description;
      }
      // form.reset(form);
    }, err => {
      console.log(err);
      this.error = err.error.message;
    });
  }
  ngOnInit() {
  }

}
