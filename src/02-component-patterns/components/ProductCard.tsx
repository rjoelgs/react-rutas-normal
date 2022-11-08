import { useProducts } from "../hooks/useProducts";
import { createContext, ReactElement } from "react";
import { productContextProps, Product } from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as productContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { counter, increaseBy } = useProducts();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </Provider>
  );
};
