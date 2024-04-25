import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { departmentEntity } from './entities/department.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([departmentEntity])],

  controllers: [DepartmentController],
  providers: [DepartmentService],
})
export class DepartmentModule {}
