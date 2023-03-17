import { Module } from '@nestjs/common';
import { UserTripsService } from './user-trips.service';
import { UserTripsController } from './user-trips.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vehicle, VehicleSchema } from '../vehicle/schema/vehicle.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: Vehicle.name, schema: VehicleSchema }])],
  controllers: [UserTripsController],
  providers: [UserTripsService]
})
export class UserTripsModule {}
