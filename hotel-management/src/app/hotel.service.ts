import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  // selectedCart: Cart = {
  //   cartId: null,
  //   userId: null,
  //   userName: null,
  //   productId: null,
  //   productName: null,
  //   price: null
  // };

  user;
  bill;
  //  hotels: Product[] = [];

  // cartProducts: Cart[] = [];

  constructor(private http: HttpClient) { }
  api = 'http://localhost:8080/';

  getHotelList() {
    return this.http.get<any>(`${this.api}getHotelList`);
  }

  getRoomList() {
    return this.http.get<any>(`${this.api}getRoomList`);
  }

  getEmployeeList() {
    return this.http.get<any>(`${this.api}getEmployeeList`);
  }
  delRoom(room): Observable<any> {
    return this.http.delete<any>(`${this.api}deleteRoom?roomId=${room.roomId}`, room);
  }

  delHotel(hotel): Observable<any> {
    return this.http.delete<any>(`${this.api}deleteHotel?hotelId=${hotel.hotelId}`, hotel);
  }

  delEmployee(hotel): Observable<any> {
    return this.http.delete<any>(`${this.api}deleteEmployee?employeeId=${hotel.employeeId}`, hotel);
  }
  addHotel(credentials): Observable<any> {
    return this.http.post<any>(`${this.api}addHotel`, credentials);
  }
  addNewRooms(credentials): Observable<any> {
    return this.http.put<any>(`${this.api}addRoomInformation`, credentials);
  }

  addEmployee(credentials): Observable<any> {
    return this.http.put<any>(`${this.api}addEmployee`, credentials);
  }

  updateEmployeeInfo(credentials) {
    return this.http.put<any>(`${this.api}updateEmployeeInformation`, credentials);
  }
  // Product operations by admin
  // isProductAdded() {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   if (user && user.isProductAdded) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }



  // getBill() {
  //   const userID = JSON.parse(localStorage.getItem('key')).id;
  //   // userID is not in product userId is present in localstorage when we login
  //   return this.http.get<any>(`${this.api}totalBill?userId=${userID}`).subscribe(data => {
  //     console.log(data);
  //     this.bill = data;
  //   }, err => {
  //     console.log(err);
  //   });
  // }
  // delUserCart() {
  //   const userID = JSON.parse(localStorage.getItem('key')).id;
  //   return this.http.delete<any>(`${this.api}deleteUserCart?userId=${userID}`);
  // }
  // postMedicine(data): Observable<any> {
  //   return this.http.post<any>(`${this.api}updateProductByAdmin`, data);
  // }

  // delUser(product): Observable<any> {
  //   // tslint:disable-next-line: max-line-length
  //   return this.http.delete<any>(`${this.api}removeProductByAdmin?productId=${product.productId}`, product);
  // }

  // getProductDetails() {
  //   this.http.get(`${this.api}showAllProducts`).subscribe(data => {
  //     console.log(data);
  //     const productArray = [];
  //     for (const productId in data) {
  //       if (data.hasOwnProperty(productId)) {
  //         productArray.push(...data[productId]);
  //       }
  //     }
  //     this.products = productArray;
  //     console.log(this.products);
  //   }, err => {
  //     console.log(err);
  //   });
  // }
  // // Cart operation by user
  // // addInCart
  // addIntoCart(product) {
  //   const userID = JSON.parse(localStorage.getItem('key')).id;
  //   return this.http.put(`${this.api}addInCart?productId=${product.productId}&userId=${userID}`, product);
  // }

  // delCart(cart): Observable<any> {
  //   return this.http.delete<any>(`${this.api}removeFromCart?cartId=${cart}`, cart);
  // }

  // getCart() {
  //   const userID = JSON.parse(localStorage.getItem('key')).id;
  //   return this.http.get<any>(`${this.api}showUserCart?userId=${userID}`);
  // }

}
