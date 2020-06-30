import { Controller, Get, Post, Req, Request, HttpCode, Param, Put, Patch, Body, Delete } from '@nestjs/common';
import { User } from '../../core/entities/users/User';
import { userUseCase } from '../../core/useCases/users/userUseCase';
import {
  HttpResponse
} from '../../core/helper/HttpResponse/HttpResponse';

@Controller('v1/users')
export class UsersController {
  constructor() {}

  @Get()
  async getUsers(): Promise<HttpResponse<User[]>> {
    const response = await userUseCase.getUsers();

    return response;
  }

  @Get(':id')
  async getUsersById(@Param('id') id): Promise<HttpResponse<User>> {
    const response = await userUseCase.getUserById(id);
    return response;
  }

  @Post()
  async createUser(@Body() body): Promise<HttpResponse<User[]>> {
    
    const response = await userUseCase.createUser(body);

    return response;
  }

  @Patch(':id')
  async updateUser(@Body() body, @Param('id') id): Promise<HttpResponse<string>> {
    const response = await userUseCase.updateUser(id, body);
    return response;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id): Promise<HttpResponse<string>> {
    const response = await userUseCase.deleteUser(id);

    return response;
  }
}
