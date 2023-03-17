import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Service } from 'src/api/api';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { Vehicle, VehicleDocument } from './schema/vehicle.schema';

@Injectable()
export class VehicleService extends Service<VehicleDocument> {

  constructor(@InjectModel(Vehicle.name) private vehicleModal: Model<VehicleDocument>) {
    super(vehicleModal)
  }
  
  async create(createVehicleDto: CreateVehicleDto) : Promise<Vehicle> {
    try {
      const vehicle: Vehicle = await this.insert(createVehicleDto);
      console.error("VehicleService.create.response", vehicle);
      return vehicle;
    } catch (error: any) {
      console.error("VehicleService.create.error", error);
      return error;
    }
  }

  

  async findAll() : Promise<Vehicle[]>  {
    try {
      const vehicles: Vehicle[] = await this.getAll();
      console.error("VehicleService.create.response", vehicles);
      return vehicles;
    } catch (error: any) {
        console.error("UsersService.findAll", error);
        return error;
    }
  }

  async findOneById(id: string) : Promise<Vehicle> {
    try {
      const vehicle: Vehicle = await this.getOneById(id);
      console.debug('VehicleService.findOneById.vehicle', vehicle)
      return vehicle;
    } catch (error: any) {
        console.error("VehicleService.findOneById.error", error);
        return error;
    }
  }

  update(id: number, updateVehicleDto: UpdateVehicleDto) {
    return `This action updates a #${id} vehicle`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicle`;
  }
}
