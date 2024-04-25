import { Test, TestingModule } from '@nestjs/testing';
import { EmploiService } from './emploi.service';

describe('EmploiService', () => {
  let service: EmploiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmploiService],
    }).compile();

    service = module.get<EmploiService>(EmploiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
