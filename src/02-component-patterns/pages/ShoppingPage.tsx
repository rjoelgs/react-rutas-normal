import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";

import "../styles/custom-styles.css";
import { useShoppingCart } from '../hooks/useShoppingCart';






export const ShoppingPage = () => {

  const {productos, shoppingCart, onProductCountChange } = useShoppingCart();
 

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {productos.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              onChange={onProductCountChange}
              value={shoppingCart[product.id]?.count || 0}
            >
              <ProductImage className="custom-image" />
              <ProductTitle />
              <ProductButtons />
            </ProductCard>
          );
        })}
      </div>

      <div className="shoping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard onChange={ onProductCountChange } key={key} style={{ width: "100px" }} product={product} value={product.count}>
            <ProductImage className="custom-image" />
            <ProductButtons />
          </ProductCard>
        ))}
      </div>

  
    </div>
  );
};
