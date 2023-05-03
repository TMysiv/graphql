import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {UsersService} from "./users.service";
import {NewUser, UpdateUser} from "../graphql";

@Resolver('Users')
export class UsersResolver {
    constructor(private userService: UsersService) {
    }

    @Query('getAllUsers')
    async getAllUsers() {
        return this.userService.getAllUsers()
    }

    @Query('getUserById')
    async getUserById(@Args('id') id: string) {
        return this.userService.getUserById(id)
    }

    @Mutation('createUser')
    async create(@Args('input') args: NewUser) {
        return this.userService.createUser(args);
    }

    @Mutation('updateUser')
    async update(@Args('input') args: UpdateUser) {
        return this.userService.updateUser(args);
    }

    @Mutation('deleteUser')
    async delete(@Args('id') args: string) {
        return this.userService.deleteUser(args);
    }
}
