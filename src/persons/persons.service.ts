import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonsService {
  private persons: any = [{ id: 0, name: 'james', number: '123' }];

  findAll() {
    return this.persons;
  }

  findById(personId: number) {
    return this.persons.find((person) => person.id === personId);
  }
}
