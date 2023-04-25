import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Service } from 'src/api/api';
import { Status } from 'src/shared/enum/status.enum';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDocument, User } from './schema/users.schema';
import * as _ from 'lodash';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class UsersService extends Service<UserDocument> {

  constructor(
    // private mailService: MailService,
    @InjectModel(User.name) private userModal: Model<UserDocument>
    ) {
    super(userModal)
  }

  async create(createUserDto: CreateUserDto) : Promise<User>  {
    try {
      const user: User = await this.insert(createUserDto);
      console.error("UsersService.findAll.response", user);
      return user;
    } catch (error: any) {
      console.error("UsersService.findAll.error", error);
      return error;
    }
  }

  async findAll(phrase?: string) : Promise<User[]> {
    try {
      if(phrase) {
        console.error("UsersService.findAll.if", phrase);
        const users: User[] = await this.search(phrase);
        console.debug('UsersServices.findAll.user', users)
        return users;
      }
      const users: User[] = await this.getAll();
      console.debug('UsersServices.findAll.user', users)
      return users;
    } catch (error: any) {
        console.error("UsersService.findAll", error);
        return error;
    }
  }

  async findOneByEmail(email: string) : Promise<User> {
    try {
      const user: User = await this.getOneByEmail(email);
      console.debug('UsersService.findOneByEmail.user', user)
      return user;
    } catch (error: any) {
        console.error("UsersService.findOneByEmail.error", error);
        return error;
    }
  }
  
  async findOneById(id: string) : Promise<User> {
    try {
      const user: User = await this.getOneById(id);
      console.debug('UsersService.findOneById.user', user)
      return user;
    } catch (error: any) {
        console.error("UsersService.findOneById.error", error);
        return error;
    }
  }

  async update(email: string, updateUserDto: UpdateUserDto) {
    try {
      if(updateUserDto.status) {
        console.debug('UsersService.update.updateUserDto.status', _.upperFirst(updateUserDto.status.toLowerCase()))
        switch (_.upperFirst(updateUserDto.status.toLowerCase())){
          case Status.DELETED:
            updateUserDto.status = Status.DELETED;
            break;
          case Status.INITIATED:
            updateUserDto.status = Status.INITIATED;
            break;
        }
      }
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

  @OnEvent('user.created')
  handleUserCreatedEvent(payload: any) {
    // handle and process "UserCreatedEvent" event
    console.debug('UsersService.handleUserCreatedEvent - Emitted', payload);
    // this.mailService.sendEmail();
  }
}
