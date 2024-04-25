// schedule.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Emploi } from './entities/emploi.entity';

@Injectable()
export class EmploiService {
  constructor(
    @InjectRepository(Emploi)
    private readonly emploiRepository: Repository<Emploi>,
  ) {}

  async upload(fileName: string, filePath: string): Promise<Emploi> {
    const emploi = new Emploi();
    emploi.fileName = fileName;
    emploi.filePath = filePath;

    return this.emploiRepository.save(emploi);
  }

  async edit(id: number, updates: Partial<Emploi>): Promise<Emploi> {
    const emploi = await this.emploiRepository.findOne({where: {id}});
    if (!emploi) {
      throw new Error('Schedule not found');
    }

    Object.assign(emploi, updates);
    return this.emploiRepository.save(emploi);
  }

  async findAll(): Promise<Emploi[]> {
    return this.emploiRepository.find();
  }

  async findById(id: number): Promise<Emploi | null> {
    return this.emploiRepository.findOne({where: {id}});
  }

  async delete(id: number): Promise<void> {
    await this.emploiRepository.delete(id);
  }

  // Add more methods as needed
}
