import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;

  const users = [
    {
        "_id": "64150308ce1dbaab55496931",
        "name": "Alpha",
        "email": "Alpha@yopmail.com",
        "status": "Initiated",
        "externalId": "xhsuhiwowui278237239",
        "createdAt": "2023-03-18T00:17:12.287Z",
        "__v": 0
    },
    {
        "_id": "6414dac4a09ef8c236423a87",
        "name": "Itumeleng",
        "email": "Itumeleng@yopmail.com",
        "status": "Initiated",
        "externalId": "xhsuhiwowui278237239",
        "__v": 0,
        "createdAt": "2023-04-26T15:42:23.133Z"
    },
    {
        "_id": "6414fdd83c831d5da02866e3",
        "name": "Jabu",
        "email": "Jabu@yopmail.com",
        "status": "Deleted",
        "externalId": "xhsuhiwowui27823723e8",
        "__v": 0,
        "createdAt": "2023-04-26T15:42:23.133Z"
    },
    {
        "_id": "6414dadfa09ef8c236423a8b",
        "name": "Jabulani",
        "email": "Solomon1@yopmail.com",
        "status": "Deleted",
        "externalId": "xhsuhiwowui278237239",
        "__v": 0,
        "createdAt": "2023-04-26T15:42:23.134Z"
    },
    {
        "_id": "6414fe5bfe27180c32c0247f",
        "name": "Jabulani",
        "email": "Jabulani@yopmail.com",
        "status": "Initiated",
        "externalId": "xhsuhiwowui27823723e8",
        "createdAt": "2023-03-17T23:57:15.559Z",
        "__v": 0
    },
    {
        "_id": "641500f6bdb01cd050ca762d",
        "name": "MacG",
        "email": "MacG@yopmail.com",
        "status": "Initiated",
        "externalId": "xhsuhiwowui278237239",
        "createdAt": "2023-03-18T00:08:22.860Z",
        "__v": 0
    },
    {
        "_id": "6414dad1a09ef8c236423a89",
        "name": "Solomon",
        "email": "Solomon@yopmail.com",
        "status": "Initiated",
        "externalId": "xhsuhiwowui278237239",
        "__v": 0,
        "createdAt": "2023-04-26T15:42:23.135Z"
    },
    {
        "_id": "6447d64155c72763b1c7a46c",
        "name": "event",
        "email": "event@yopmail.com",
        "status": "Initiated",
        "externalId": "xhsuhiwowui278237239ss",
        "createdAt": "2023-04-25T13:31:45.905Z",
        "__v": 0
    },
    {
        "_id": "6447d6658e39b6fe84ad9146",
        "name": "event1",
        "email": "event1@yopmail.com",
        "status": "Initiated",
        "externalId": "xhsuhiwowui278237239ss",
        "createdAt": "2023-04-25T13:32:21.321Z",
        "__v": 0
    },
    {
        "_id": "6447d67f6de215b65e223333",
        "name": "event2",
        "email": "event2@yopmail.com",
        "status": "Initiated",
        "externalId": "xhsuhiwowui278237239sss",
        "createdAt": "2023-04-25T13:32:47.352Z",
        "__v": 0
    }
]

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).overrideProvider(UsersService).useValue(users).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
