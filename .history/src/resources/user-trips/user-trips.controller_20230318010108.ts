import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserTripsService } from './user-trips.service';
import { CreateUserTripDto } from './dto/create-user-trip.dto';
import { UpdateUserTripDto } from './dto/update-user-trip.dto';

@Controller('user')
export class UserTripsController {
  constructor(private readonly userTripsService: UserTripsService) {}

  @Post(":userId/trips")
  create(@Body() createUserTripDto: CreateUserTripDto) {
    return this.userTripsService.create(createUserTripDto);
  }

  @Get(":userId/trips")
  findAll() {
    return this.userTripsService.findAll();
  }

  @Get(':userId/trips')
  findOne(@Param('id') id: string) {
    return this.userTripsService.findOne(+id);
  }

  @Patch(':userId/trips')
  update(@Param('id') id: string, @Body() updateUserTripDto: UpdateUserTripDto) {
    return this.userTripsService.update(+id, updateUserTripDto);
  }

  @Delete(':userId/trips')
  remove(@Param('id') id: string) {
    return this.userTripsService.remove(+id);
  }
}
