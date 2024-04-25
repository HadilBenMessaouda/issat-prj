import { Test, TestingModule } from '@nestjs/testing';
import { ProfsService } from './profs.service';

describe('ProfsService', () => {
  let service: ProfsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfsService],
    }).compile();

    service = module.get<ProfsService>(ProfsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
