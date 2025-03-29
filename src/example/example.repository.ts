import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Example } from './example.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ExampleRepository {
  constructor(
    @InjectRepository(Example)
    private readonly repository: Repository<Example>,
  ) {}

  async findAll(): Promise<Example[]> {
    return this.repository.find();
  }

  async create(name: string, description: string): Promise<Example> {
    const newExample = this.repository.create({ name, description });
    return this.repository.save(newExample);
  }
}
