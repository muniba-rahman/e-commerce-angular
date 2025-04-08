import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formSubmitInterface } from '../data-types';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class SellerService {
  isSellerLoggedIn = new BehaviorSubject(false);

  constructor(private http: HttpClient, private router: Router) {}

  userSignUp(data: formSubmitInterface) {
    this.http
      .post("http://localhost:3000/seller", data, { observe: "response" })
      .subscribe((res) => {
        this.isSellerLoggedIn.subscribe((value)=>{
          return value;
        })
        this.router.navigate(["seller-home"]);
        console.log("response", res);
      });
    return false;
  };
}
