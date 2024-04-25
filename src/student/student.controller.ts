import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, NotFoundException } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { RolesGuard } from 'src/guards/roles.guard';
import { ROLES_KEY, Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';
import { UserEntity } from 'src/auth/user.entity';
import { studentEntity } from './entities/student.entity';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post('create')
  @Roles(Role.Admin_Direct)
  async create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  @Get('findAll')

  async findAll() {
    return this.studentService.findAll();
  }

  @Get(':numInscrit')
@Roles(Role.Student)
  async findOne(@Param('numInscrit') numInscrit: string) {
    return this.studentService.findOne(numInscrit);
  }


  @Patch(':numInscrit')
  async update(@Param('numInscrit') numInscrit: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(numInscrit, updateStudentDto);
  }

  @Delete(':numInscrit')
  async remove(@Param('numInscrit') numInscrit: string) {
    return this.studentService.remove(numInscrit);
  }
}
