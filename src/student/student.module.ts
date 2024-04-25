import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { studentEntity } from 'src/student/entities/student.entity';
import { RolesGuard } from 'src/guards/roles.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [TypeOrmModule.forFeature([studentEntity])],
  controllers: [StudentController],
  providers: [StudentService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard, // Add RolesGuard as global guard
    },],
})
export class StudentModule {}
