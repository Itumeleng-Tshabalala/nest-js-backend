import { Module } from '@nestjs/common';
import { UserVehicleService } from './user-vehicle.service';
import { UserVehicleController } from './user-vehicle.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vehicle, VehicleSchema } from '../vehicle/schema/vehicle.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: Vehicle.name, schema: VehicleSchema }])],
  controllers: [UserVehicleController],
  providers: [UserVehicleService]
})
export class UserVehicleModule {}
