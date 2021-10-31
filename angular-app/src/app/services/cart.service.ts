import { Injectable } from '@angular/core';
import { productsType } from '../products.model';
import { ProductsService } from './products.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  counter: number = 0;
  clickcount: number =0;
  sumPrice: number = 0;
  cart: productsType = []
  show: boolean = true;

  constructor(private ps : ProductsService) { }

  add(p_id:number){
    console.log('Add product id: '+p_id+' to cart');
    this.cart.push(this.ps.getSomeProduct(p_id))
    console.log(this.cart)
    this.sumPrice += this.ps.getSomeProduct(p_id).price;
    this.ps.getSomeProduct(p_id).quantity -= 1;
    this.clickcount += 1;
    this.counter = this.cart.length;
    if(this.clickcount == 5){
      this.show = !this.show;
    }
  }

  getCounter(){
    return this.counter;
  }

  getsumPrice(){
    return this.sumPrice;
  
  }

  getCart(){
    return this.cart
  }

  showButton(){
    return this.show;
  }

  delectCart(p_id:number){
    console.log('Delete product id: '+p_id+' to cart');
    this.cart.pop()
    console.log(this.cart)
    this.sumPrice -= this.ps.getSomeProduct(p_id).price;
    this.ps.getSomeProduct(p_id).quantity += 1;
    console.log(this.clickcount)
    this.clickcount -= 1;
    if(this.clickcount == 0){
      this.show = !this.show;
    }
    console.log(this.clickcount)
    this.counter = this.cart.length;
  }
}
