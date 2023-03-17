import { Module } from '@nestjs/common';
import { UserTripsService } from './user-trips.service';
import { UserTripsController } from './user-trips.controller';

@Module({
  controllers: [UserTripsController],
  providers: [UserTripsService]
})
export class UserTripsModule {}
