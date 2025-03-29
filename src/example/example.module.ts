import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Example } from './example.entity';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';
import { ExampleRepository } from './example.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Example])],
  controllers: [ExampleController],
  providers: [ExampleService, ExampleRepository],
})
export class ExampleModule {}
