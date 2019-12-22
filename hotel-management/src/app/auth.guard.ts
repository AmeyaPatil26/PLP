import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    // userDetails = JSON.parse(localStorage.getItem('user'));
    // constructor(private auth: AuthService) { }

    canActivate(next: ActivatedRouteSnapshot): boolean {
        const userRoleArray = next.data.role;
        const userDetails = JSON.parse(localStorage.getItem('key'));
        console.log(localStorage.getItem('key'));
        for (const user in userRoleArray) {
            if (userDetails && userDetails.type === userRoleArray[user]) {
                console.log('user loggedIn');
                return true;
            } else {
                console.log('user not loggedin');
                return false;
            }
        }
    }
}
