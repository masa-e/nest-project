import { Injectable } from '@nestjs/common';
import { ExampleRepository } from './example.repository';
import { Example } from './example.entity';

@Injectable()
export class ExampleService {
  constructor(private readonly exampleRepository: ExampleRepository) {}

  async getAllExamples(): Promise<Example[]> {
    return this.exampleRepository.findAll();
  }

  async createExample(name: string, description: string): Promise<Example> {
    return this.exampleRepository.create(name, description);
  }
}
