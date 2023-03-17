import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getIsApiUp() {
    return "NestJS API application. Version 1. www.gasstove.co.za 2023";
  }
}
