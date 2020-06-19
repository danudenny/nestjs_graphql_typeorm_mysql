import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';

@Global()
@Module({
    imports: [
        TypeOrmModule.forFeature([Users])
    ],
    controllers: [
        UsersController, ],
    providers: [
        UsersService, ],
    exports: [
        UsersService
    ]
})
export class UsersModule {}
