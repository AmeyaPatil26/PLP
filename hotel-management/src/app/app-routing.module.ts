import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { RoomListComponent } from './room-list/room-list.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'addEmployee', component: AddEmployeeComponent},
  {path: 'addHotel', component: AddHotelComponent, canActivate: [AuthGuard], data: {role: ['admin']}},
  {path: 'addRoom', component: AddRoomComponent, canActivate: [AuthGuard], data: {role: ['admin']}},
  {path: 'roomList', component: RoomListComponent, canActivate: [AuthGuard], data: {role: ['admin']}},
  {path: 'hotelList', component: HotelListComponent, canActivate: [AuthGuard], data: {role: ['admin']}},
  {path: 'employeeList', component: EmployeeListComponent, canActivate: [AuthGuard], data: {role: ['admin']}}

];
//  canActivate: [AuthGuard], data: {role: ['admin']}
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
