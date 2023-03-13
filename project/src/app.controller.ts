import { CatsService } from './cats/cats.service';
import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // 소비자
  constructor(
    private readonly appService: AppService,
    private readonly catsService: CatsService,
  ) {} // 제품

  // localhost:8000/cats/hello
  @Get()
  getHello() {
    return this.catsService.hiCatServiceProduct(); // 사용
  }
}
