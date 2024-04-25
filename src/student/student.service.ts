import { Body, Injectable, Param } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { studentEntity } from 'src/student/entities/student.entity';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/auth/user.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(studentEntity) private  studentRepo: Repository<studentEntity>,
    
  ) {}
  async create(@Body() createStudentDto: CreateStudentDto) {
    const student = this.studentRepo.create(createStudentDto); 
    return await this.studentRepo.save(student);
  }

  async findAll(){
    return this.studentRepo.find();
  }

  async findOne(@Param() numInscrit: string) {
    return this.studentRepo.findOne({where: {numInscrit}} );
  }

  

  async update(@Param('numInscrit')numInscrit: string, updateStudentDto: UpdateStudentDto) {
    // const student = await this.studentRepo.update(numInscrit,updateStudentDto);
    // return this.studentRepo.findOne({where: {numInscrit}} );
    const student = await this.findOne(numInscrit);
    return this.studentRepo.save({ ...student, ...updateStudentDto});
  }

  async remove(numInscrit: string) {
   await this.studentRepo.delete(numInscrit);
   }
}
