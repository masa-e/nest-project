import { Controller, Get, Post, Body } from '@nestjs/common';
import { ExampleService } from './example.service';
import { Example } from './example.entity';

@Controller('api/example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  // getExample() {
  //   return { message: 'Hello from Nest.js!' };
  // }

  @Get()
  async getAllExamples(): Promise<Example[]> {
    return this.exampleService.getAllExamples();
  }

  @Post()
  async createExample(
    @Body() body: { name: string; description: string },
  ): Promise<Example> {
    return this.exampleService.createExample(body.name, body.description);
  }
}
