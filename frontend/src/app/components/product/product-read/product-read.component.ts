import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Produto } from '../produto.model';
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  produtos: Produto[] = [];
  displayedColumns = ['id', 'nome', 'preco', 'acao']
  
  constructor(private produtoService: ProductService) { }

  ngOnInit(): void {
    this.produtoService.lista().subscribe(produtos => {
      this.produtos = produtos;
    })
  }
}
