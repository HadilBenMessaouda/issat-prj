import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MatieresService } from './matieres.service';
import { CreateMatiereDto } from './dto/create-matiere.dto';
import { UpdateMatiereDto } from './dto/update-matiere.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';

@Controller('matieres')
@UseGuards(JwtAuthGuard,RolesGuard)

export class MatieresController {
  constructor(private readonly matieresService: MatieresService) {}

  @Post('create')
  create(@Body() createMatiereDto: CreateMatiereDto) {
    return this.matieresService.create(createMatiereDto);
  }

  @Get('findAll')
  findAll() {
    return this.matieresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.matieresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateMatiereDto: UpdateMatiereDto) {
    return this.matieresService.update(+id, updateMatiereDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.matieresService.remove(+id);
  }
}
