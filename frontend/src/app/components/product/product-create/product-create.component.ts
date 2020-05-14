import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {Router} from '@angular/router' 

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  // propLegal = "qualquer";
  constructor(private productService : ProductService,
              private router: Router) { }

  ngOnInit(): void {
  }
  // fazerAlgo(): void {
  //   console.log('fazendo algo!!!')
  // }

  createProduct(): void {
    this.productService.ShowMessage('Operação execultada com sucesso');

  }
  Cancel(): void {
    this.router.navigate(['/products'])
  }
}
