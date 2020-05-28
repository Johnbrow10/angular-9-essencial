import { Product } from './../product.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductRead2DataSource } from './product-read2-datasource';

@Component({
  selector: 'app-product-read2',
  templateUrl: './product-read2.component.html',
  styleUrls: ['./product-read2.component.css']
})
export class ProductRead2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) 
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  @ViewChild(MatTable)
  table: MatTable<Product>;
  dataSource: ProductRead2DataSource;

  // COLUNAS EXIBIDAS NA TABELA 
  displayedColumns = ['id', 'name','price'];

  ngOnInit() {
    // ELE CRIA O DATASOURCE NA INICIALIZAÇÃO DOS COMPONENTES
    this.dataSource = new ProductRead2DataSource();
  }

  // DEPOIS DE TODOS OS COMPONENTES SER CARREGADOS OS DADOS AI SERAO RENDERIZADOS
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    // SETOU COM A TABELA E EXTENDEU O DATASOURCE
    this.table.dataSource = this.dataSource;
  }
}
