import { Module } from '@nestjs/common';
import { ProfsController } from './profs.controller';
import { ProfService } from './profs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prof } from './entities/prof.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prof])],
  controllers: [ProfsController],
  providers: [ProfService],
})
export class ProfsModule {}
