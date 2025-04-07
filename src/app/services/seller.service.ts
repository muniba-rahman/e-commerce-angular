import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formSubmitInterface } from '../data-types';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient){
    // creating instance of httpClient
  }

  userSignUp(data:formSubmitInterface){// function to handle user sign up 
    return this.http.post("http://localhost:3000/seller", data);
  }

}
