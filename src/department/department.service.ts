import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { departmentEntity } from './entities/department.entity';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentService {  
  constructor(
    @InjectRepository(departmentEntity) private  readonly departmentRepo: Repository<departmentEntity>,
  ) {}
  async create(createDepartmentDto: CreateDepartmentDto) {
    const department = this.departmentRepo.create(createDepartmentDto); 
    return await this.departmentRepo.save(department);
  }

  async findAll() {
    return await this.departmentRepo.find();  }

  async findOne(idDepart: number) {
    return await this.departmentRepo.findOne({where: {idDepart}} );

  }

  async update(idDepart: number, updateDepartmentDto: UpdateDepartmentDto) {
    const department = await this.findOne(idDepart);
    return await this.departmentRepo.save({ ...department, ...UpdateDepartmentDto});
  }

  async remove(idDepart: number) {
    await this.departmentRepo.delete(idDepart);
  }
}
