export type SessionType = Record<string, any>;

export type LoginSession = {
  visits: number;
  login: boolean;
};

export interface IRequest extends Request {
  session: any;
}
