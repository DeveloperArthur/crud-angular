import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  produto!: Produto;

  constructor(private produtoService: ProductService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idDoProduto = <string>this.route.snapshot.paramMap.get('id');
    this.produtoService.buscaPorId(idDoProduto).subscribe(produto => {
      this.produto = produto;
    })
  }

  atualizaProduto(): void {
    this.produtoService.atualiza(this.produto).subscribe(() => {
      this.produtoService.exibeMensagem('Produto alterado com sucesso!');
      this.router.navigate(['/produtos']);
    })
  }

  cancela(): void {
    this.router.navigate(['/produtos']);
  }

}
