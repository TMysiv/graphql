import { Injectable } from '@nestjs/common';
import {PrismaService} from "../services/prisma.service";
import {NewUser, UpdateUser} from "../graphql";

@Injectable()
export class UsersService {
    constructor(private prismaService: PrismaService) {
    }

    async getAllUsers() {
        return this.prismaService.user.findMany()
    }

    async getUserById(id: string) {
        return this.prismaService.user.findFirst({
            where: {
                id: Number(id)
            }
        })
    }

    async createUser(input: NewUser) {
        return this.prismaService.user.create({
            data: {
                id: new Date().getTime(),
                name: input.name,
                email: input.email
            }
        })
    }

    async updateUser(input: UpdateUser) {
        return this.prismaService.user.update({
           where: {
               id: Number(input.id),
           },
            data: {
               email: input.email != null ? input.email : undefined,
                name: input.name != null ? input.name : undefined,
            }
        })
    }

    async deleteUser(id: string) {
        return this.prismaService.user.delete({
            where: {
                id: Number(id)
            }
        })
    }
}
