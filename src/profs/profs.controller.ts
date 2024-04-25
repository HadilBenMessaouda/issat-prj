import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProfService } from './profs.service';
import { CreateProfDto } from './dto/create-prof.dto';
import { UpdateProfDto } from './dto/update-prof.dto';
import { RolesGuard } from 'src/guards/roles.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@Controller('profs')
@UseGuards(RolesGuard,JwtAuthGuard)

export class ProfsController {
  constructor(private readonly profService: ProfService) {}

  @UseGuards(RolesGuard)
  @Roles(Role.Admin_Direct)
  @Post('create')
  create(@Body() createProfDto: CreateProfDto) {
    return this.profService.create(createProfDto);
  }
  @UseGuards(RolesGuard)
  @Roles(Role.Admin_Direct)
  @Get('findAll')
  findAll() {
    return this.profService.findAll();
  }

  @Get(':profId')
  findOne(@Param('profId') profId: number) {
    return this.profService.findOne(+profId);
  }

  @Patch(':profId')
  update(@Param('profId') profId: number, @Body() updateProfDto: UpdateProfDto) {
    return this.profService.update(+profId, updateProfDto);
  }

  @Delete(':profId')
  remove(@Param('profId') profId: number) {
    return this.profService.remove(+profId);
  }
}
