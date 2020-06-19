import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users, UserInput } from './users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users) private readonly users : Repository<Users>
    ) {}

    async getByEmail(email: string) {
        return await this.users.findOne({
            where: {
                email: email
            }
        });
    }

    async getByUsername(username: string) {
        return await this.users.findOne({
            where: {
                username: username
            }
        });
    }

    async getAll(): Promise<Users[]> {
        return await this.users.find();
    }

    async findUser(id: number): Promise<Users> {
        return await this.users.findOne(id)
    }

    async createUser(user: UserInput) {
        const duplicateEmail = await this.getByEmail(user.email);
        const duplicateUsername = await this.getByUsername(user.username);

        if(duplicateEmail) {
            throw new NotAcceptableException(
                'Email already registered',
            )
        } else if(duplicateUsername) {
            throw new NotAcceptableException(
                'Username already taken',
            )
        }
        return await this.users.save(
            this.users.create(user),
        );
    }

}
