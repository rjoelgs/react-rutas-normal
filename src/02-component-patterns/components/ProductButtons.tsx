import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'

export const ProductButtons = ({className, style}: {style?: React.CSSProperties ,className? : string}) => {
  const { increaseBy, counter } = useContext(ProductContext);

  return (
    <div style={style} className={`${styles.buttonsContainer} ${className}`}>
      <button
        onClick={() => {
          increaseBy(-1);
        }}
        className={styles.buttonMinus}
      >
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        onClick={() => {
          increaseBy(+1);
        }}
        className={styles.buttonAdd}
      >
        +
      </button>
    </div>
  );
};
