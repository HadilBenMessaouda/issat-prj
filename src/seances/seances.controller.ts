import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SeancesService } from './seances.service';
import { CreateSeanceDto } from './dto/create-seance.dto';
import { UpdateSeanceDto } from './dto/update-seance.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';

@Controller('seances')
@UseGuards(JwtAuthGuard,RolesGuard)
export class SeancesController {
  constructor(private readonly seancesService: SeancesService) {}

  @Post()
  @Roles(Role.Admin_Hor)
  create(@Body() createSeanceDto: CreateSeanceDto) {
    return this.seancesService.create(createSeanceDto);
  }

  @Get()
  @Roles(Role.Admin_Hor)
  findAll() {
    return this.seancesService.findAll();
  }

  @Get(':id')
  @Roles(Role.Admin_Hor)
  findOne(@Param('id') id: string) {
    return this.seancesService.findOne(+id);
  }

  @Patch(':id')
  @Roles(Role.Admin_Hor)
  update(@Param('id') id: string, @Body() updateSeanceDto: UpdateSeanceDto) {
    return this.seancesService.update(+id, updateSeanceDto);
  }

  @Delete(':id')
  @Roles(Role.Admin_Hor)
  remove(@Param('id') id: string) {
    return this.seancesService.remove(+id);
  }
}
