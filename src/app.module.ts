import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExampleModule } from './example/example.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Example } from './example/example.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nestjsuser',
      password: 'nestjspass',
      database: 'nestjs',
      entities: [Example], // 使用するエンティティを登録
      synchronize: true, // 初回のみ true (本番環境では false)
    }),
    ExampleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
