import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {Router} from '@angular/router' 

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
      name: '',
      price: null 

  }

  // propLegal = "qualquer";
  constructor(private productService : ProductService,
              private router: Router) { }

  ngOnInit(): void {
  }
  // fazerAlgo(): void {
  //   console.log('fazendo algo!!!')
  // }

  createProduct(): void {
    this.productService.create(this.product).subscribe(()=>{
      this.productService.ShowMessage('Produto foi criado');
      this.router.navigate(['/products'])
    })
   

  }
  Cancel(): void {
    this.router.navigate(['/products'])
  }
}
