import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';
import { productsType } from 'src/app/products.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  cart : productsType = []

  constructor(private cs: CartService) { 
    this.cart = this.cs.getCart();
  }

  ngOnInit(): void {
  }

  getCounter(){
    return this.cs.getCounter();
  }

  getSumPrice(){
    return this.cs.getsumPrice();
  }

}
