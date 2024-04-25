import { Test, TestingModule } from '@nestjs/testing';
import { EmploiController } from './emploi.controller';
import { EmploiService } from './emploi.service';

describe('EmploiController', () => {
  let controller: EmploiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmploiController],
      providers: [EmploiService],
    }).compile();

    controller = module.get<EmploiController>(EmploiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
