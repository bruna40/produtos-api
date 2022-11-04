import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductModel } from 'src/Models/ProductModel';
import { ProdutosService } from 'src/services/ProdutoService';

@Controller('produtos')
export class ProdutosController {
  constructor(private ProdutosService: ProdutosService) {}

  @Get()
  obterTodos(): ProductModel[] {
    return this.ProdutosService.obterTodos();
  }

  @Get(':id')
  obterUm(@Param() params): ProductModel {
    return this.ProdutosService.obterUm(params.id);
  }

  @Post()
  criar(@Body() produto: ProductModel) {
    this.ProdutosService.criar(produto);
  }

  @Put()
  alterar(@Body() produto: ProductModel): ProductModel {
    return this.ProdutosService.alterar(produto);
  }

  @Delete(':id')
  apagar(@Param() params) {
    this.ProdutosService.apagar(params.id);
  }
}
