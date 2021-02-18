import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  produto!: Produto;

  constructor(private produtoService: ProductService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idDoProduto = <string>this.route.snapshot.paramMap.get('id');
    this.produtoService.buscaPorId(idDoProduto).subscribe(produto => {
      this.produto = produto;
    })
  }

  deletaProduto(): void {
    this.produtoService.deleta(<number>this.produto.id).subscribe(() => {
      this.produtoService.exibeMensagem('Produto deletado com sucesso!');
      this.router.navigate(['/produtos']);
    })
  }

  cancela(): void {
    this.router.navigate(['/produtos']);
  }
}
