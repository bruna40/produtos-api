import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { LivroModel } from 'src/Models/LivroModel';

@Injectable()
export class LivroService {
  constructor(
    @InjectModel(LivroModel)
    private livros: typeof LivroModel,
  ) {}
  async obterTodos(): Promise<LivroModel[]> {
    return this.livros.findAll();
  }

  async obterUm(id: number): Promise<LivroModel> {
    return this.livros.findByPk(id);
  }

  async criar(livro: LivroModel) {
    this.livros.create(livro);
  }

  async alterar(livro: LivroModel): Promise<[number, LivroModel[]]> {
    return this.livros.update(livro, {
      returning: true,
      where: { id: livro.id },
    });
  }

  async apagar(id: number) {
    const livro: LivroModel = await this.obterUm(id);
    livro.destroy();
  }
}
