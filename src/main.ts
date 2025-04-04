import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // CORS を許可
  app.enableCors({
    origin: 'http://localhost:3001', // フロント環境側の URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // 許可する HTTP メソッド
    allowedHeaders: 'Content-Type, Authorization', // 許可するヘッダー
    credentials: true, // クッキーを送受信する場合は `true`
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
