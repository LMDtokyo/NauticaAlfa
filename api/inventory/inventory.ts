import request from '~/utils/request';
import type { IInventoryResponse } from './index';

const enum ROUTES {
  fetch = '/inventory/$',
  move = '/inventory/$/move'
}

const fetch = async (inventoryId: string | number) => {
  if (typeof inventoryId === 'number') inventoryId = inventoryId.toString();

  const { _data } = await request<IInventoryResponse>(ROUTES.fetch.replace('$', inventoryId));

  return _data;
};

const move = async (inventoryId: string | number, slots: { from: number, to: number }) => {
  if (typeof inventoryId === 'number') inventoryId = inventoryId.toString();

  const { _data } = await request<{ success: boolean }>(ROUTES.move.replace('$', inventoryId), {
    method: 'post',
    body: JSON.stringify(slots)
  });

  return _data;
};

export default { fetch, move };