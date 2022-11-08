import { ProductCard, ProductImage, ProductTitle, ProductButtons} from "../components";
import '../styles/custom-styles.css'

const product = {
  id: "1",
  title: "Coffe Mug - Compound",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div >
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
          <ProductButtons />
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-bold">
          <ProductImage className='custom-image'/>
          <ProductTitle className="text-white "/>
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} style={{backgroundColor: '#70d1f8', textAlign:'center'}}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons style={{display: 'flex', justifyContent: 'center'}} />
        </ProductCard>
      </div>
    </div>
  );
};
