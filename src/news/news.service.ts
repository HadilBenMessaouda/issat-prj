import { Body, Injectable, Param } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { News } from './entities/news.entity';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';



@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News) private  newsRepo: Repository<News>,
    
  ) {}
  async create(@Body() createNewsDto: CreateNewsDto) {
    const news = this.newsRepo.create(createNewsDto); 
    return await this.newsRepo.save(news);
  }

  async findAll(){
    return this.newsRepo.find();
  }

  async findOne(@Param() id: number) {
    return this.newsRepo.findOne({where: {id}} );
  }

  

  async update(@Param('id')id: number, updateNewsDto: UpdateNewsDto) {
    const news = await this.findOne(id);
    return this.newsRepo.save({ ...news, ...updateNewsDto});
  }

  async remove(id: number) {
   await this.newsRepo.delete(id);
   }
}
