import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { UsersService } from "src/modules/users/users.service";
import { Users, UserInput } from "src/modules/users/users.entity";

@Resolver()
export class UserResolver {
    constructor(
        private readonly userService: UsersService
    ) {}

    @Query(() => [Users])
    public async getAllUsers(): Promise<Users[]> {
        return await this.userService.getAll();
    }

    @Query(() => Users)
    public async findUser(@Args('id') id: number): Promise<Users> {
        return await this.userService.findUser(id)
    }

    @Mutation(() => Users)
    async createUser(@Args('input') input: UserInput): Promise<UserInput> {
        return this.userService.createUser(input);
    }

}
