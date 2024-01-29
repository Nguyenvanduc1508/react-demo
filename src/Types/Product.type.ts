import { ReactNode } from "react";

export interface ConTextType {
  datas: Products[];
  blogs: BlogType[];
  totalPrice: number;
  cartItems: CartItem[];
  cartQty: number,
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  addCartItem: (item: CartItem) => void;
  removeCartItem: (id: number) => void;
  clearCart: () => void;
}

export type ShoppingContextProviderProps = {
  children: ReactNode;
};

export type CartItem = {
  id: number;
  name: string;
  currentPrice: number;
  qty: number;
  image: string;
}

export type Products = {
  qty: number;
  id: number;
  status: string;
  name: string;
  sex: string;
  image: string;
  currentPrice: number;
  oldPrince: number;
  desc: string;
  describe: string;
};

export type BlogType = {
  id: number;
  img: string;
  day: string;
  month: string;
  title: string;
  desc: string;
  text_1: string;
  text_2: string;
  text_3: string;
  text_4: string;
  text_5: string;
  text_6: string;
  text_7: string;
  text_8: string;
  text_9: string;
  text_10: string;
};
