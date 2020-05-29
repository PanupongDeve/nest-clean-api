import { Controller, Get, Post, Req, Request, HttpCode, Param, Put, Patch, Body, Delete } from '@nestjs/common';
import { User } from '../../core/entities/users/User';
import { usersPresenter } from '../../core/useCases/users/UsersPresenter';
import { usersCreator } from '../../core/useCases/users/UsersCreator';


@Controller('api/users')
export class UsersController {
  constructor() {}

  @Get()
  async getUsers(): Promise<User[]> {
    const users = await usersPresenter.getUsers();

    return users;
  }

  @Get(':id')
  async getUsersById(@Param('id') id): Promise<User> {
    const user = await usersPresenter.getUserById(id);
    return user;
  }

  @Post()
  async createUser(@Body() body): Promise<User[]> {
    
    const users = await usersCreator.createUser(body);

    return users;
  }

  @Patch(':id')
  async updateUser(@Body() body, @Param('id') id): Promise<User[]> {
    const users = await usersCreator.updateUser(id, body);
    return users;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id): Promise<User[]> {
    const users = await usersCreator.deleteUser(id);

    return users
  }
}
