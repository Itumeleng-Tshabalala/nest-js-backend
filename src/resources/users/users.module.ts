import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './schema/users.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailService } from 'src/api/mail.api';

@Module({
  imports:[MongooseModule.forFeature([{ 
      name: User.name, 
      schema: UserSchema 
    }]), 
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
