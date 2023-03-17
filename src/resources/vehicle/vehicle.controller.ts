import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Controller('vehicles')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  create(@Body() createVehicleDto: CreateVehicleDto) {
    try {
      return this.vehicleService.create(createVehicleDto);
    } catch (error: any) {
        console.error("request failed", error);
        return error;
    }
  }

  @Get()
  findAll() {
    try {
      return this.vehicleService.findAll();
    } catch (error: any) {
        console.error("request failed", error);
        return error;
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
        return this.vehicleService.findOneById(id);
      } catch (error: any) {
        console.error("request failed", error);
        return error;
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehicleDto: UpdateVehicleDto) {
    return this.vehicleService.update(+id, updateVehicleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehicleService.remove(+id);
  }
}
