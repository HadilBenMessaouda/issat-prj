import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { ClassService } from './classes.service';

@Controller('classes')
export class ClassesController {
  constructor(private readonly classeService: ClassService) {}

  @Post()
  create(@Body() createClassDto: CreateClassDto) {
    return this.classeService.create(createClassDto);
  }

  @Get()
  findAll() {
    return this.classeService.findAll();
  }

  @Get(':idClasse')
  findOne(@Param('idClasse') idClasse: number) {
    return this.classeService.findOne(+idClasse);
  }

  @Patch(':idClasse')
  update(@Param('idClasse') idClasse: number, @Body() updateClassDto: UpdateClassDto) {
    return this.classeService.update(+idClasse, updateClassDto);
  }

  @Delete(':idClasse')
  remove(@Param('idClasse') idClasse: number) {
    return this.classeService.remove(+idClasse);
  }
}
