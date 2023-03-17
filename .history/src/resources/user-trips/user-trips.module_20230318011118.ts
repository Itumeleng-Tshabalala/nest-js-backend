import { Module } from '@nestjs/common';
import { UserTripsService } from './user-trips.service';
import { UserTripsController } from './user-trips.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Trip, TripSchema } from '../trips/schema/trips.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: Trip.name, schema: TripSchema }])],
  controllers: [UserTripsController],
  providers: [UserTripsService]
})
export class UserTripsModule {}
