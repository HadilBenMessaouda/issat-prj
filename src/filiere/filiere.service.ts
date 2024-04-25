import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { filiereEntity } from './entities/filiere.entity';
import { CreateFiliereDto } from './dto/create-filiere.dto';
import { UpdateFiliereDto } from './dto/update-filiere.dto';

@Injectable()
export class filiereService {  
  constructor(
    @InjectRepository(filiereEntity) private  readonly filiereRepo: Repository<filiereEntity>,
  ) {}
  async create(createFiliereDto: CreateFiliereDto) {
    const filiere = this.filiereRepo.create(createFiliereDto); 
    return await this.filiereRepo.save(filiere);
  }

  async findAll() {
    return await this.filiereRepo.find();  }

  async findOne(idF: number) {
    return await this.filiereRepo.findOne({where: {idF}} );

  }

  async update(idF: number, updateFiliereDto: UpdateFiliereDto) {
    const filiere = await this.findOne(idF);
    return await this.filiereRepo.save({ ...filiere, ...UpdateFiliereDto});
  }

  async remove(idF: number) {
    await this.filiereRepo.delete(idF);
  }
}
