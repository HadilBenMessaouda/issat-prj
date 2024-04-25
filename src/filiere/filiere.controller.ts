import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { filiereService } from './filiere.service';
import { CreateFiliereDto } from './dto/create-filiere.dto';
import { UpdateFiliereDto } from './dto/update-filiere.dto';

@Controller('filiere')
export class FiliereController {
  constructor(private readonly filiereService: filiereService) {}

  @Post()
  create(@Body() createFiliereDto: CreateFiliereDto) {
    return this.filiereService.create(createFiliereDto);
  }

  @Get()
  findAll() {
    return this.filiereService.findAll();
  }

  @Get(':idF')
  findOne(@Param('idF') idF: number) {
    return this.filiereService.findOne(+idF);
  }

  @Patch(':idF')
  update(@Param('idF') idF: number, @Body() updateFiliereDto: UpdateFiliereDto) {
    return this.filiereService.update(+idF, updateFiliereDto);
  }

  @Delete(':idF')
  remove(@Param('idF') idF: number) {
    return this.filiereService.remove(+idF);
  }
}
