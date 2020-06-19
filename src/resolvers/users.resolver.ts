import { Resolver, Query } from "@nestjs/graphql";
import { UsersService } from "src/modules/users/users.service";
import { Users } from "src/modules/users/users.entity";

@Resolver()
export class UserResolver {
    constructor(
        private readonly userService: UsersService
    ) {}

    @Query(() => [Users])
    public async getAllUsers(): Promise<Users[]> {
        return await this.userService.getAll();
    }

}
