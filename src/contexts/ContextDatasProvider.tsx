import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import {
  BlogType,
  CartItem,
  ConTextType,
  Products,
  ShoppingContextProviderProps,
} from "../Types/Product.type";

const Context = createContext<ConTextType>({} as ConTextType);

export const useDataContext = () => {
  return useContext(Context);
};

const ContextDatasProvider = ({ children }: ShoppingContextProviderProps) => {
  const [datas, setDatas] = useState<Products[]>([]);
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const jsonCartData = localStorage.getItem("shopping_cart");
    return jsonCartData ? JSON.parse(jsonCartData) : [];
  });

  useEffect(() => {
    localStorage.setItem("shopping_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const cartQty = cartItems.reduce((qty, item) => qty + item.qty, 0);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.currentPrice,
    0
  );

  useEffect(() => {
    const fetchProducts = async (): Promise<Products[]> => {
      const data = await fetch("http://localhost:3000/product")
        .then((res) => {
          console.log(res);
          return res.json();
          
        })
        .catch((err) => {
          console.log("error=> ", err);
        });
      return data;
    };
    fetchProducts().then((datas) => setDatas(datas));
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:3000/blog");
        setBlogs(res.data);
      } catch (error) {
        console.log("error=> ", error);
      }
    };
    fetchBlogs();
  }, []);

  const increaseQty = (id: number) => {
    console.log("increaseQty => ", id);
    const currentCartItem = cartItems.find((item) => item.id === id);
    if (currentCartItem) {
      const newItems = cartItems.map((item) => {
        if (item.id === id) {
          
          return { ...item, qty: item.qty + 1 };
        } else {
          return item;
        }
      });
      setCartItems(newItems);
    }
  };
  const addCartItem = (product: CartItem) => {
    console.log("product=> ", product);
    if (product) {
      const currentCartItem = cartItems.find((item) => item.id === product.id);
      if (currentCartItem) {
        const newItems = cartItems.map((item) => {
          if (item.id === product.id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
        setCartItems(newItems);
      } else {
        const newItem = { ...product, qty: 1 };
        setCartItems([...cartItems, newItem]);
      }
    }
  };

  const decreaseQty = (id: number) => {
    console.log("decreaseQty => ", id);
    const currentCartItem = cartItems.find((item) => item.id === id);
    if (currentCartItem) {
      if (currentCartItem.qty == 1) {
        removeCartItem(id);
      } else {
        const newItems = cartItems.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
        setCartItems(newItems);
      }
    }
  };

  const removeCartItem = (id: number) => {
    console.log("removeCartItem => ", id);
    const currentCartItemIndex = cartItems.findIndex((item) => item.id === id);
    const newItems = [...cartItems];
    newItems.splice(currentCartItemIndex, 1);
    setCartItems(newItems);
  };

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <Context.Provider
      value={{
        datas,
        blogs,
        cartItems,
        cartQty,
        totalPrice,
        increaseQty,
        decreaseQty,
        addCartItem,
        removeCartItem,
        clearCart
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextDatasProvider;
