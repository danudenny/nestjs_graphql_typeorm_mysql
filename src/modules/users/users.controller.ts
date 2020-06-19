import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Get('/')
    async index(): Promise<any> {
        return await this.userService.getAll();
    }
}
