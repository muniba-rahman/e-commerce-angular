import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../../services/seller.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { formSubmitInterface } from '../../data-types';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent {

  constructor(private seller:SellerService, private router: Router){

  }

  formSubmit(values: formSubmitInterface):void{
    console.log('Form submitted: ', values);
    this.seller.userSignUp(values).subscribe((response)=>{
      if(response){
        this.router.navigate(["seller-home"]);
      }
    })
  }
}
