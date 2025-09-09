
export interface Vegetable {
  id: number;
  name: string;
  price: number;
  unit: string;
  image: string;
}

export interface CartItem extends Vegetable {
  quantity: number;
}

export type View = 'home' | 'vegetables' | 'cart' | 'checkout' | 'confirmation';
