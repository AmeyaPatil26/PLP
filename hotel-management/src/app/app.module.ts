import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { RoomListComponent } from './room-list/room-list.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    AddEmployeeComponent,
    AddHotelComponent,
    AddRoomComponent,
    RoomListComponent,
    HotelListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
