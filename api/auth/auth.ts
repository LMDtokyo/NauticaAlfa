import type { ISigninResponse, IRefreshResponse, ISignupResponse, IRevokeResponse, IMeResponse } from './index';
import request from '~/utils/request';

export const enum ROUTES {
  signin = '/api/auth/signin',
  signup = '/auth/signup',
  refresh = '/auth/token/refresh',
  revoke = '/auth/token/revoke',
  me = '/auth/me'
}

const signin = async (login: string, password: string): Promise<ISigninResponse> => {
  const { _data } = await request<ISigninResponse>(ROUTES.signin, {
    method: 'post',
    body: JSON.stringify({ login, password })
  });

  return _data;
};

const signup = async (login: string, password: string): Promise<ISignupResponse> => {
  const { _data } = await request<ISignupResponse>(ROUTES.signup, {
    method: 'post',
    body: JSON.stringify({ login, password })
  });

  return _data;
};

const refresh = async (refresh_token: string): Promise<IRefreshResponse> => {
  const { _data } = await request<IRefreshResponse>(ROUTES.refresh, {
    method: 'post',
    body: JSON.stringify({ refresh_token })
  });

  return _data;
};

const revoke = async (refresh_token: string): Promise<IRevokeResponse> => {
  const { _data } = await request<IRevokeResponse>(ROUTES.revoke, {
    method: 'post',
    body: JSON.stringify({ refresh_token })
  });

  return _data;
};

const me = async (): Promise<IMeResponse> => {
  const { _data } = await request<IMeResponse>(ROUTES.me);

  return _data;
};

export default { refresh, signin, signup, revoke, me };
