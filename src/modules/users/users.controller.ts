import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Get('/')
    async index(): Promise<any> {
        return await this.userService.getAll();
    }

    @Get('/:id')
    async show(@Param('id') id: number): Promise<Users> {
        return await this.userService.findUser(id)
    }
}
