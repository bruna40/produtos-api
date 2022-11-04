import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LivroModel } from 'src/Models/LivroModel';
import { LivroService } from 'src/services/LivroService';

@Controller('livros')
export class LivroController {
  constructor(private livroService: LivroService) {}

  @Get()
  async obterTodos(): Promise<LivroModel[]> {
    return this.livroService.obterTodos();
  }

  @Get(':id')
  async obterUm(@Param() params): Promise<LivroModel> {
    return this.livroService.obterUm(params.id);
  }

  @Post()
  async criar(@Body() produto: LivroModel) {
    this.livroService.criar(produto);
  }

  @Put()
  async alterar(@Body() produto: LivroModel): Promise<[number, LivroModel[]]> {
    return this.livroService.alterar(produto);
  }

  @Delete(':id')
  async apagar(@Param() params) {
    this.livroService.apagar(params.id);
  }
}
