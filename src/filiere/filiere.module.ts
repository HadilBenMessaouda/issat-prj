import { Module } from '@nestjs/common';
import { filiereService } from './filiere.service';
import { FiliereController } from './filiere.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { filiereEntity } from './entities/filiere.entity';

@Module({
  imports:[TypeOrmModule.forFeature([filiereEntity])],
  controllers: [FiliereController],
  providers: [filiereService],
})
export class FiliereModule {}
