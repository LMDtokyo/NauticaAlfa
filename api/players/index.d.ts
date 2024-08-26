export interface IPlayerQueryOptions {
  include?: string[];
}

export interface IPlayerResponse {
  id: number;
  login: string;
  lvl: number;
  avatar: string;
  hp: number;
}

export interface IPlayerResources {
  real: number;
  doubloon: number;
  wood: number;
  sugar: number;
  rum: number;
  clotch: number;
  iron: number;
  crystal: number;
}

export type PlayerWithInclude<T extends string[]> =
  T extends ['resources']
    ? IPlayerResponse & { resources: IPlayerResources }
    : T extends ['exp']
      ? IPlayerResponse & { exp: number }
      : T extends ['resources', 'exp']
        ? IPlayerResponse & { resources: IPlayerResources, exp: number }
        : T extends ['resources', 'exp', 'inventoryId'] ? IPlayerResponse & {
          resources: IPlayerResources,
          exp: number,
          inventoryId: number
        } : IPlayerResponse;