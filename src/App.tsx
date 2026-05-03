import ProductCard from "./components/ProductCard";
import { productList } from "d:/AllMyProjectsHere/CVProjects/ProjectBuilder/Project-Builder/data/index";
const App = () => {
  // ------- we can fetch products from an API and map them to ProductCard components ------- //
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <div>
      <div>
        {renderProductList} 
      </div>
    </div>
  );
}

export default App