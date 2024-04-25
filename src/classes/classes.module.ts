import { Module } from '@nestjs/common';
import { ClassService } from './classes.service';
import { ClassesController } from './classes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { classEntity } from './entities/class.entity';

@Module({
  imports: [TypeOrmModule.forFeature([classEntity])],
  controllers: [ClassesController],
  providers: [ClassService],
})
export class ClassesModule {}
