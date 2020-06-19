import { UsersModule } from './modules/users/users.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { UserResolver } from './resolvers/users.resolver';

const graphQLImports = [
  UserResolver
]

@Module({
  imports: [
    UsersModule,
    ...graphQLImports,
    TypeOrmModule.forRoot({}),
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
