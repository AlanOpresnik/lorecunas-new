export interface Stats {
  _id: string;
  totalProducts: number;
  totalOrders: number;
  inventoryValue: number;
  productsOutOfStock: number;
  activeProducts: number;
  createdAt: string;
  updatedAt: string;
}