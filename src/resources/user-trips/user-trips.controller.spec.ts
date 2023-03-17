import { Test, TestingModule } from '@nestjs/testing';
import { UserTripsController } from './user-trips.controller';
import { UserTripsService } from './user-trips.service';

describe('UserTripsController', () => {
  let controller: UserTripsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserTripsController],
      providers: [UserTripsService],
    }).compile();

    controller = module.get<UserTripsController>(UserTripsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
