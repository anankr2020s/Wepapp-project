import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.css']
})
export class ShowproductsComponent implements OnInit {

  products: any;
  quantity!: number;
  show: boolean = true;
  constructor(private ps: ProductsService, private cs: CartService) { 
    this.onLoading();
    this.showButton();
  }

  ngOnInit(): void {
  }

  onLoading(){
    try{
      this.ps.getProducts().subscribe(
        data =>{
          this.products = data;
        },
        err =>{
          console.log(err)
        });
    }catch(error){
      console.log(error)
    }
  }

  addTocart(p_id:number){
    return this.cs.add(p_id);
  }

  showButton(){
    return this.show = this.cs.showButton();
  }



}
