import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';
import { productsType } from 'src/app/products.model';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {

  carts : productsType = []

  constructor(private cs: CartService) { 
    this.carts = this.cs.getCart();
  }

  ngOnInit(): void {
  }

  getSumPrice(){
    return this.cs.getsumPrice();
  }

  getCounter(){
    return this.cs.getCounter();
  }

  deleteCart(p_id:number){
    return this.cs.delectCart(p_id);
  }

}
