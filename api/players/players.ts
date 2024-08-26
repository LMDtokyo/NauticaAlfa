import type { IPlayerQueryOptions, PlayerWithInclude, IPlayerResources, IPlayerResponse } from './index'
import request from "~/utils/request";

const enum ROUTES {
  player = '/players/$'
}

const player = async <T extends string[]>(player_id: string | number, options: IPlayerQueryOptions) => {
  if (typeof player_id === 'number') player_id = player_id.toString();

  const { _data } = await request<PlayerWithInclude<T>>(ROUTES.player.replace('$', player_id), { params: options });

  return _data;
};

export default { player };
