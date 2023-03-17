import { Module } from '@nestjs/common';
import { TripsService } from './trips.service';
import { TripsController } from './trips.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Trip } from './entities/trip.entity';
import { TripSchema } from './schema/trips.schema';

@Module({
  imports:[MongooseModule.forFeature([{ 
    name: Trip.name, 
    schema: TripSchema 
  }]), 
],
  controllers: [TripsController],
  providers: [TripsService]
})
export class TripsModule {}
