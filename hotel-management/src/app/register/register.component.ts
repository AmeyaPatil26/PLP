import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error: string = null;
  constructor(private auth: AuthService, private router: Router) { }

  register(registerForm: NgForm) {
    console.log(registerForm.value);
    this.auth.register(registerForm.value).subscribe(response => {
      console.log(response);
      console.log(response.type);
      registerForm.reset();
      this.router.navigateByUrl('/hotelList');
    }, err => {
      console.log(err);
    });
  }


  ngOnInit() {
  }

}
