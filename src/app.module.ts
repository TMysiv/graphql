import {Module} from '@nestjs/common';
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';
import {join} from 'path';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            playground: true,
            typePaths: ['./**/*.graphql'],
        }),
        UsersModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
