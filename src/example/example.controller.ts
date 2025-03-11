import { Controller, Get } from '@nestjs/common';

@Controller('api/example')
export class ExampleController {
  @Get()
  getExample() {
    return { message: 'Hello from Nest.js!' };
  }
}
