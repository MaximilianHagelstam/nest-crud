import { Module } from '@nestjs/common';
import { PersonsService } from './persons.service';

@Module({
  providers: [PersonsService],
})
export class PersonsModule {}
