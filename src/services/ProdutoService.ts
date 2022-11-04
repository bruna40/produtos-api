import { Injectable } from '@nestjs/common';
import { ProductModel } from 'src/Models/ProductModel';

@Injectable()
export class ProdutosService {
  produtos: ProductModel[] = [
    new ProductModel('livro1', 'Produto 1', 10),
    new ProductModel('livro2', 'Produto 2', 20),
    new ProductModel('livro3', 'Produto 3', 30),
  ];

  obterTodos(): ProductModel[] {
    return this.produtos;
  }

  obterUm(id: number): ProductModel {
    return this.produtos[0];
  }

  criar(produto: ProductModel) {
    this.produtos.push(produto);
  }

  alterar(produto: ProductModel): ProductModel {
    return produto;
  }

  apagar(id: number) {
    return this.produtos.pop();
  }
}
