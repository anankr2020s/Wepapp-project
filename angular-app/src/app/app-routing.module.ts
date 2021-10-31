import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ShowproductsComponent } from './components/showproducts/showproducts.component';
import { CartsComponent } from './components/carts/carts.component';
const routes: Routes = [
  {path: 'showproducts', component:ShowproductsComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'carts',component:CartsComponent},
  {path: '',
    redirectTo:'showproducts',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
