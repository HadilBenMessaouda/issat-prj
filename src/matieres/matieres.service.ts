import { Body, Injectable, Param } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Matiere } from './entities/matiere.entity';
import { CreateMatiereDto } from './dto/create-matiere.dto';
import { UpdateMatiereDto } from './dto/update-matiere.dto';


@Injectable()
export class MatieresService {
  constructor(
    @InjectRepository(Matiere) private  matiereRepo: Repository<Matiere>,
    
  ) {}
  async create(@Body() createMatiereDto: CreateMatiereDto) {
    const matiere = this.matiereRepo.create(createMatiereDto); 
    return await this.matiereRepo.save(matiere);
  }

  async findAll(){
    return this.matiereRepo.find();
  }

  async findOne(@Param() id: number) {
    return this.matiereRepo.findOne({where: {id}} );
  }

  

  async update(@Param('id')id: number, updateMatiereDto: UpdateMatiereDto) {
    const matiere = await this.findOne(id);
    return this.matiereRepo.save({ ...matiere, ...updateMatiereDto});
  }

  async remove(id: number) {
   await this.matiereRepo.delete(id);
   }
}
