export interface Item {
  id: number;
  name: string;
  price: number;
  stock: number;
  soldToday: number;
  image: string;
}

export interface CartItem extends Item {
  quantity: number;
}

export type Page = 'welcome' | 'scanner' | 'cart' | 'checkout' | 'success';
