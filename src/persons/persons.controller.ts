import { PersonsService } from './persons.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('persons')
export class PersonsController {
  constructor(private personsService: PersonsService) {}

  @Get()
  getPersons(): any {
    return this.personsService.findAll();
  }

  @Get(':id')
  getPersonNyId(@Param('id') id: string): any {
    return this.personsService.findById(Number(id));
  }
}
