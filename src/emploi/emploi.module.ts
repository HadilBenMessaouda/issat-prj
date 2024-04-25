import { Module } from '@nestjs/common';
import { EmploiService } from './emploi.service';
import { EmploiController } from './emploi.controller';
import { Emploi } from './entities/emploi.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PdfService } from './pdf.service';

@Module({
  imports: [TypeOrmModule.forFeature([Emploi])],

  controllers: [EmploiController],
  providers: [EmploiService, PdfService],
})
export class EmploiModule {}
