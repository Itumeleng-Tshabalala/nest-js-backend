import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { UserVehicleModule } from './user-vehicle/user-vehicle.module';
import { MailService } from 'src/api/mail.api';
import { TripsModule } from './trips/trips.module';
import { UserTripsModule } from './user-trips/user-trips.module';

@Module({
  imports: [UsersModule, VehicleModule, UserVehicleModule, TripsModule, UserTripsModule],
  controllers: [],
  providers: [MailService],
})
export class ResourceModule {}
