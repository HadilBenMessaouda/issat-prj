import { Body, Injectable, Param } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/auth/user.entity';
import { Prof } from './entities/prof.entity';
import { CreateProfDto } from './dto/create-prof.dto';
import { UpdateProfDto } from './dto/update-prof.dto';

@Injectable()
export class ProfService {
  constructor(
    @InjectRepository(Prof) private  profRepo: Repository<Prof>,
    
  ) {}
  async create(@Body() createProfDto: CreateProfDto) {
    const prof = this.profRepo.create(createProfDto); 
    return await this.profRepo.save(prof);
  }

  async findAll(){
    return this.profRepo.find();
  }

  async findOne(@Param() profId: number) {
    return this.profRepo.findOne({where: {profId}} );
  }

  

  async update(@Param('profId')profId: number, updateProfDto: UpdateProfDto) {
    const prof = await this.findOne(profId);
    return this.profRepo.save({ ...prof, ...UpdateProfDto});
  }

  async remove(profId: number) {
   await this.profRepo.delete(profId);
   }
}
