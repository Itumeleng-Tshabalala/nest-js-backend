import { Test, TestingModule } from '@nestjs/testing';
import { UserTripsService } from './user-trips.service';

describe('UserTripsService', () => {
  let service: UserTripsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserTripsService],
    }).compile();

    service = module.get<UserTripsService>(UserTripsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
