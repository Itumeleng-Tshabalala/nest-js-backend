import { Test, TestingModule } from '@nestjs/testing';
import { UserVehicleController } from './user-vehicle.controller';
import { UserVehicleService } from './user-vehicle.service';

describe('UserVehicleController', () => {
  let controller: UserVehicleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserVehicleController],
      providers: [UserVehicleService],
    }).compile();

    controller = module.get<UserVehicleController>(UserVehicleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
