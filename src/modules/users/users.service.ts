import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users) private readonly users : Repository<Users>
    ) {}

    async getAll(): Promise<Users[]> {
        return await this.users.find();
    }
}
