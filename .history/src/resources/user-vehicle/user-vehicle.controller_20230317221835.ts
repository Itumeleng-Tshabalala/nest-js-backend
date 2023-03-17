import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserVehicleService } from './user-vehicle.service';
import { CreateUserVehicleDto } from './dto/create-user-vehicle.dto';
import { UpdateUserVehicleDto } from './dto/update-user-vehicle.dto';

@Controller('user')
export class UserVehicleController {
  constructor(private readonly userVehicleService: UserVehicleService) {}

 

  @Get(':userId/vehicles')
  findOneByUserId(@Param('userId') userId: string) {
    try {
      return this.userVehicleService.findByUserId(userId);
    } catch (error: any) {
      console.error("request failed", error);
      return error;
    }
  }
  
  @Get(':userId/vehicles/:vehicleId')
  findOneByUserAndVehicleId(@Param('userId') userId: string, @Param('vehicleId') vehicleId: string) {
    try {
      return this.userVehicleService.findByUserIdAndVehicleId(userId, vehicleId);
    } catch (error: any) {
      console.error("request failed", error);
      return error;
    }
  }
}
