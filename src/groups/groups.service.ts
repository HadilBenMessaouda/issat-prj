import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Repository } from 'typeorm';
import { Group } from './entities/group.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group) private  groupRepo: Repository<Group>,
  ) {}
  async create(createGroupDto: CreateGroupDto) {
    const group = this.groupRepo.create(createGroupDto); 
    return await this.groupRepo.save(group);
  }

  async findAll() {
    return await this.groupRepo.find();  }

  async findOne(Grpid: number) {
    return await this.groupRepo.findOne({where: {Grpid}} );

  }

  async update(Grpid: number, updateGroupDto: UpdateGroupDto) {
    const student = await this.findOne(Grpid);
    return await this.groupRepo.save({ ...student, ...updateGroupDto});
  }

  async remove(Grpid: number) {
    await this.groupRepo.delete(Grpid);
  }
}
