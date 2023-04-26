import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { User } from './schema/users.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService, private eventEmitter: EventEmitter2) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const user: User = await this.usersService.create(createUserDto);
      this.eventEmitter.emit('user.created', user);
      return user;
    } catch (error: any) {
        console.error("request failed", error);
        return error;
    }
  }

  @Get()
  async getAll(@Query('phrase') phrase?: string) {
    try {
        const users: User[] = await this.usersService.findAll(phrase);
        return users.length > 0 ? users : { message: `No users found.` }
    } catch (error: any) {
        console.error("request failed", error);
        return error;
    }
  }

  @Get(':email') 
  async findOneByEmail(@Param('email') email: string) {
    try {
      const user: User = await this.usersService.findOneByEmail(email);
      return user ? user : { message: `User ${email} doesn't exist.` }
    } catch (error: any) {
        console.error("request failed", error);
        return error;
    }
  }

  @Patch(':email')
  async update(@Param('email') email: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      const response = await this.usersService.update(email, updateUserDto);
      return response.acknowledged ? {user: updateUserDto, success: response.acknowledged} : `Unable to updated user ${email}, please try again later.`;
    } catch (error) {
      console.error("request failed", error);
        return error;
    }
  }

  @Delete(':email')
  async remove(@Param('email') email: string) {
    try {
      const user = await this.usersService.remove(email);
      return user ? user : { message: `User ${email} doesn't exist.` }
    } catch (error: any) {
        console.error("request failed", error);
        return error;
    }
  }
  
}
