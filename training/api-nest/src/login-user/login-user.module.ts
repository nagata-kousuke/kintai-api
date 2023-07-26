import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoginUserService } from './login-user.service';
import { LoginUserController } from './login-user.controller';
import { DebugMiddleware } from '@utils/debug.middleware';

@Module({
  controllers: [LoginUserController],
  providers: [LoginUserService],
})
export class LoginUserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(DebugMiddleware).forRoutes('*');
  }
}
