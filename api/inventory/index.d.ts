import type { InventorySlot } from "~";

export interface IInventoryResponse {
  ownerId: number;
  size: number;
  slots: Array<InventorySlot | undefined>;
}