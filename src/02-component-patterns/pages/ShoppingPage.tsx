import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";

const product = {
  id: "1",
  title: "Coffe Mug - Compound",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
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
        <ProductCard product={product}>
          <ProductImage img={product.img} />
          <ProductTitle title="hola que tal" />
          <ProductButtons/>
        </ProductCard>
        <ProductCard product={product}>
          <ProductImage img={product.img} />
          <ProductTitle />
          <ProductButtons/>
        </ProductCard>
      </div>
    </div>
  );
};
