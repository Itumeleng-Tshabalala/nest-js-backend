import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Service } from 'src/api/api';
import { MailService } from 'src/api/mail.api';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDocument, User } from './schema/users.schema';

@Injectable()
export class UsersService extends Service<UserDocument> {

  constructor(
    @InjectModel(User.name) private userModal: Model<UserDocument>
    ) {
    super(userModal)
  }

  async create(createUserDto: CreateUserDto) : Promise<User>  {
    try {
      const response: User = await this.insert(createUserDto);
      console.error("UsersService.findAll.response", response);
      return response;
    } catch (error: any) {
      console.error("UsersService.findAll", error);
      return error;
    }
  }

  async findAll(phrase: string) : Promise<User[]>  {
    try {
      if(phrase) {
        console.error("UsersService.findAll.if", phrase);
        return await this.search(phrase);
      }
      return await this.getAll();
    } catch (error: any) {
        console.error("UsersService.findAll", error);
        return error;
    }
  }

  async findOneByEmail(email: string) : Promise<User> {
    try {
      const user: User = await this.getOneByEmail(email);
      console.debug('UsersService.findAll.user', user)
      return user;
    } catch (error: any) {
        console.error("UsersService.findAll.error", error);
        return error;
    }
  }
  
  async findOneById(id: string) : Promise<User> {
    try {
      const user: User = await this.getOneById(id);
      console.debug('UsersService.findAll.user', user)
      return user;
    } catch (error: any) {
        console.error("UsersService.findAll.error", error);
        return error;
    }
  }

  async update(email: string, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.updateByEmail(email, updateUserDto);
      console.debug('UsersService.update.user', user)
      return user;
    } catch (error: any) {
        console.error("UsersService.update.error", error);
        return error;
    }
  }

  async remove(email: string) {
    try {
      const user = await this.removeByEmail(email);
      console.debug('UsersService.remove.user', user)
      return user;
    } catch (error: any) {
        console.error("UsersService.remove.error", error);
        return error;
    }
  }
}
