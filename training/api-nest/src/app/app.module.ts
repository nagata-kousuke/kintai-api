import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { SentryInterceptor, SentryModule } from '@ntegral/nestjs-sentry';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { DateScalar } from '@utils/dateScalar';
import { PrismaService } from '@utils/prisma.service';
import { UsersModule } from 'src/users/users.module';
import { TodosResolver } from 'src/todos/todo.resolver';
import { MyUsersModule } from 'src/my-users/my-users.module';
import { LoginUserModule } from 'src/login-user/login-user.module';
import { DebugMiddleware } from '@utils/debug.middleware';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    SentryModule.forRoot({
      dsn: process.env.SENTRY_DSN,
      debug: false,
      logLevels: ['error'],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    UsersModule,
    MyUsersModule,
    LoginUserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        // <- 追加
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    DateScalar,
    TodosResolver,
    {
      provide: APP_INTERCEPTOR,
      useFactory: () => new SentryInterceptor(),
    },
    {
      provide: 'APP_GUARD',
      useFactory: () => null,
      inject: [AppService],
    },
    {
      provide: 'AppService', // ← 目印に対して
      useClass: AppService, // ← 依存関係を登録する
    },
    {
      provide: 'PrismaService', // ← 目印に対して
      useClass: PrismaService, // ← 依存関係を登録する
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(DebugMiddleware).forRoutes('*');
  }
}
