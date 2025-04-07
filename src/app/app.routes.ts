import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SellerAuthComponent } from './components/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './components/seller-home/seller-home.component';

export const routes: Routes = [
    { path: "", component: HomeComponent},
    { path: "seller-auth", component: SellerAuthComponent},
    { path: "seller-home", component: SellerHomeComponent},
    { path: "cart", component: HomeComponent},
    { path: "login", component: HomeComponent},
];
