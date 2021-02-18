import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {Router} from '@angular/router';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  produto: Produto = {
    nome: '',
    preco: 0
  }

  constructor(private produtoService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  criaProduto(): void{
    this.produtoService.salva(this.produto).subscribe(() => {
      this.produtoService.exibeMensagem('Produto criado');
      this.router.navigate(['/produtos'])  
    })
  }

  cancela(): void{
    this.router.navigate(['/produtos'])
  }
}
