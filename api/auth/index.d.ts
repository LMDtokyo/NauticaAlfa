export interface ISigninResponse {
  access_token: string;
  refresh_token: string;
}

export interface ISignupResponse {
  message: string;
}

export interface IRefreshResponse {
  access_token: string;
  refresh_token: string;
}

export interface IRevokeResponse {
  message: string;
}

export interface IMeResponse {
  id: number;
  login: string;
  email: string;
  email_confirmed: boolean;
}