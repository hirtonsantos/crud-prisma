import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.user();
  }

  @Post()
  createUser(@Body() userData: { name?: string; email: string }) {
    return this.userService.createUser(userData);
  }
}
