import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivroController } from './controllers/LivroControllers';
import { LivroModel } from './Models/LivroModel';
import { LivroService } from './services/LivroService';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USUARIO_BANCO_DE_DADOS,
      password: process.env.SENHA_BANCO_DE_DADOS,
      database: 'livraria',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([LivroModel]),
  ],
  controllers: [AppController, LivroController],
  providers: [AppService, LivroService],
})
export class AppModule {}
