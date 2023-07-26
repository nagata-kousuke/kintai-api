import { CanActivate, ExecutionContext } from '@nestjs/common';
import { LoginSession } from '@utils/session.type';
import { Observable } from 'rxjs';

export class LoguinGuard implements CanActivate {
  constructor() {}
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    const session: LoginSession = request.session;

    return session.login ? true : false;
  }
}
