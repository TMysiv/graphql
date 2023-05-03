import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import {PrismaService} from "../services/prisma.service";
import {UsersResolver} from "./users.resolver";

@Module({
  providers: [UsersService, PrismaService, UsersResolver]
})
export class UsersModule {}
