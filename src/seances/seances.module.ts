import { Module } from '@nestjs/common';
import { SeancesService } from './seances.service';
import { SeancesController } from './seances.controller';

@Module({
  controllers: [SeancesController],
  providers: [SeancesService],
})
export class SeancesModule {}
