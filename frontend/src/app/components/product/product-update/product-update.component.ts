import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {


  product: Product;

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // para carregar a pagina o from ja ira vim com os dados gracas a captura do ID
    // colocando um + na frente a variavel passada converte para number 
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe(product => {
      this.product = product;
    });
  }

  //  o metodo UpdateProduct utilizando o update feito na service e sobrescrevendo gracaos ao metodo observable
  //  e depois manda mensagem gracas ao metodo showMessage e logo depois manda de volta para tabela.
  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso!!')
      this.router.navigate(['/products']);
    });

  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
