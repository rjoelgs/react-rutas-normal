import { useProducts } from "../hooks/useProducts";
import { createContext, ReactElement } from "react";
import { productContextProps, Product, onChangeArgs } from '../interfaces/interfaces';

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as productContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs)=> void;
  value?: number
}

export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {
  
  const { counter, increaseBy} = useProducts({ onChange, product, value });

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
