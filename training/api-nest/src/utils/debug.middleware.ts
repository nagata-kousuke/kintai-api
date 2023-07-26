import { Injectable, NestMiddleware } from '@nestjs/common';
import { env } from 'process';
import { LoginSession } from './session.type';
import { PrismaClient } from '@prisma/client';

export class DebugMiddleware implements NestMiddleware {
  async use(req, res, next) {
    console.log('middleware');
    if (process.env.NODE_ENV === 'development') {
      if (req.headers['indigo-debug-key'] === process.env.INDIGO_DEBUG_KEY) {
        console.log('middlewareを実行');
        console.log(req.headers['indigo-debug-key']);
        console.log(req.headers['indigo-debug-userId']);
        console.log(env.INDIGO_DEBUG_KEY);

        const session: LoginSession = req.session;
        session.login = true;

        const prisma = new PrismaClient();
        const user = await prisma.user.findFirst({ where: { id: 2 } });
        console.log('user');
        console.log(user);
      }
      next();
    }
  }
}
