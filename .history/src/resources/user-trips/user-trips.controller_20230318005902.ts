import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserTripsService } from './user-trips.service';
import { CreateUserTripDto } from './dto/create-user-trip.dto';
import { UpdateUserTripDto } from './dto/update-user-trip.dto';

@Controller('user-trips')
export class UserTripsController {
  constructor(private readonly userTripsService: UserTripsService) {}

  @Post()
  create(@Body() createUserTripDto: CreateUserTripDto) {
    return this.userTripsService.create(createUserTripDto);
  }

  @Get()
  findAll() {
    return this.userTripsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userTripsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserTripDto: UpdateUserTripDto) {
    return this.userTripsService.update(+id, updateUserTripDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userTripsService.remove(+id);
  }
}
