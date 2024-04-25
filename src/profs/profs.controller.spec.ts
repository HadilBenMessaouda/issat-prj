import { Test, TestingModule } from '@nestjs/testing';
import { ProfsController } from './profs.controller';
import { ProfsService } from './profs.service';

describe('ProfsController', () => {
  let controller: ProfsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfsController],
      providers: [ProfsService],
    }).compile();

    controller = module.get<ProfsController>(ProfsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
