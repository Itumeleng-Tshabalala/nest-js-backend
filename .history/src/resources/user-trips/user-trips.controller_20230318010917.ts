import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserTripsService } from './user-trips.service';
@Controller('user')
export class UserTripsController {
  constructor(private readonly userTripsService: UserTripsService) {}

  @Get(':userId/trips')
  findOneByUserId(@Param('userId') userId: string) {
    try {
      return this.userTripsService.findByUserId(userId);
    } catch (error: any) {
      console.error("request failed", error);
      return error;
    }
  }
  
  @Get(':userId/trips/:tripId')
  findOneByUserAndVehicleId(@Param('userId') userId: string, @Param('vehicleId') vehicleId: string) {
    try {
      return this.userTripsService.findByUserIdAndTripId(userId, vehicleId);
    } catch (error: any) {
      console.error("request failed", error);
      return error;
    }
  }
}
