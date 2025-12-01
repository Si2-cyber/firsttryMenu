export enum Category {
  BURGER = 'Burger',
  PIZZA = 'Pizza',
  SANDWICH = 'Sandwich'
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  description: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Order {
  orderNumber: string;
  tableNumber: string;
  items: CartItem[];
  total: number;
  timestamp: Date;
}

export type ViewState = 'MENU' | 'CART' | 'SUCCESS';