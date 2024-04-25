import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { classEntity } from './entities/class.entity';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(classEntity) private  readonly classeRepo: Repository<classEntity>,
  ) {}
  async create(createClassDto: CreateClassDto) {
    const classe = this.classeRepo.create(createClassDto); 
    return await this.classeRepo.save(classe);
  }

  async findAll() {
    return await this.classeRepo.find();  }

  async findOne(idClasse: number) {
    return await this.classeRepo.findOne({where: {idClasse}} );

  }

  async update(idClasse: number, updateClassDto: UpdateClassDto) {
    const classe = await this.findOne(idClasse);
    return await this.classeRepo.save({ ...classe, ...updateClassDto});
  }

  async remove(idClasse: number) {
    await this.classeRepo.delete(idClasse);
  }
}
