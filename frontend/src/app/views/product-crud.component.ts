import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Router} from '@angular/router'
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Gerenciamento de Produtos',
      icon: 'storefront',
      routeUrl: '/produtos'
    }
  }

  ngOnInit(): void {
  }

  navegaParaProductCreate(): void{
    this.router.navigate(['/produtos/criar'])
  }

}
