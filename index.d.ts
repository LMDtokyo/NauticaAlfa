import type { FetchResponse } from 'ofetch';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NUXT_API_URL: string;
    }
  }
}

export interface IAuthState {
  user?: {
    id: number;
    login: string;
    email: string;
    email_confirmed: boolean;
  };
  access_token: string | null;
  refresh_token: string | null;
}

export type ModifiedFetchResponse<T> = FetchResponse<T> & { _data: T }; // потому-что _data мы проверяем в хуке `onResponse`, и если _data = undefined; мы пробрасываем ошибку

export interface GameItem {
  name: string;
  max_stack_size: number;
  label: string;
  description: string;
  weight: number;
  image: string;
  sell_price: number;
}

export interface InventorySlot {
  slot: number;
  count: number;
  item: GameItem;
}

export type NavButton = {
  id: number;
  text: string;
  icon?: string;
  link?: boolean;
  path?: string;
  collapsibles?: boolean;
  content?: { height: string; opened: boolean; slots: { count: number; items: any[] } };
}