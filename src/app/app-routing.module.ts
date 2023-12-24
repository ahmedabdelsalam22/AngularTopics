import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductListComponent } from './Components/Order/product-list/product-list.component';
import { OrderMasterComponent } from './Components/Order/order-master/order-master.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Components/Order/product-details/product-details.component';
import { FormTestComponent } from './Components/Order/form-test/form-test.component';

// first-match-wins strategy
const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/Home', pathMatch: 'full' }, // default
      { path: 'Home', component: HomeComponent },
      { path: 'Products', component: ProductListComponent },
      { path: 'Products/:pID', component: ProductDetailsComponent },
      { path: 'Order', component: OrderMasterComponent },
      { path: 'FormTest', component: FormTestComponent },
    ],
  },
  { path: 'Login', component: UserLoginComponent },
  { path: '**', component: NotFoundComponent }, // wild card path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
