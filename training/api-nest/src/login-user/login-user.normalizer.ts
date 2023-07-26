import { User } from '@prisma/client';
import { LoginUser } from './login-user.type';

// DBから取ってきた情報を、フロントに返す形に変換する（passwordを消す など）
export const normalize = (user: User): LoginUser => {
  return {
    login: true,
    id: user.id,
    username: user.username,
  };
};
