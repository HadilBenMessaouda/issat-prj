import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';


@Controller('news')
@UseGuards(JwtAuthGuard, RolesGuard) 
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post('create')
  @Roles(Role.Admin_Direct)
  create(@Body() createNewsDto: CreateNewsDto) {
    return this.newsService.create(createNewsDto);
  }

  @Get()
  @Roles(Role.Admin_Direct,Role.Student,Role.Teacher)

  findAll() {
    return this.newsService.findAll();
  }

  @Get(':id')
  @Roles(Role.Admin_Direct,Role.Student,Role.Teacher)

  findOne(@Param('id') id: string) {
    return this.newsService.findOne(+id);
  }

  @Patch(':id')
  @Roles(Role.Admin_Direct)

  update(@Param('id') id: string, @Body() updateNewsDto: UpdateNewsDto) {
    return this.newsService.update(+id, updateNewsDto);
  }

  @Delete(':id')
  @Roles(Role.Admin_Direct)

  remove(@Param('id') id: string) {
    return this.newsService.remove(+id);
  }
}
