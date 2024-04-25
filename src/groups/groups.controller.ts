import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post('create')
  create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupsService.create(createGroupDto);
  }

  @Get('all')
  findAll() {
    return this.groupsService.findAll();
  }

  @Get(':Grpid')
  findOne(@Param('Grpid') Grpid: number) {
    return this.groupsService.findOne(+Grpid);
  }

  @Patch(':Grpid')
  update(@Param('Grpid') Grpid: number, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupsService.update(+Grpid, updateGroupDto);
  }

  @Delete(':Grpid')
  remove(@Param('Grpid') Grpid: number) {
    return this.groupsService.remove(+Grpid);
  }
}
