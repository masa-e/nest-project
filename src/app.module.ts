import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExampleModule } from './example/example.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from '../data-source'; // ここでデータソースを読み込む

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options), // TypeORM 設定を適用
    ExampleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
