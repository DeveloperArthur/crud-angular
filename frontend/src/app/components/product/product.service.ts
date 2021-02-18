import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { Produto } from './produto.model';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  endpointBackend = "http://127.0.0.1:3001/produtos";
  
  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  exibeMensagem(msg: string, ehErro: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ehErro ? ['msg-error'] : ['msg-success']
    });
  }

  salva(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.endpointBackend, produto).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  lista(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.endpointBackend).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  buscaPorId(id: string): Observable<Produto> {
    const endpointParaBuscar = this.endpointBackend + "/" + id;
    return this.http.get<Produto>(endpointParaBuscar).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  atualiza(produto: Produto): Observable<Produto> {
    const endpointParaAtualizar = this.endpointBackend + "/" + produto.id;
    return this.http.put<Produto>(endpointParaAtualizar, produto).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  deleta(id: number): Observable<Produto> {
    const endpointParaDeletar = this.endpointBackend + "/" + id;
    return this.http.delete<Produto>(endpointParaDeletar).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.exibeMensagem('Ocorreu um erro!', true);
    return EMPTY;
  }
}
