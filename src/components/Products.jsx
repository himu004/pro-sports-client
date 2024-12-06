import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import { Fade } from "react-awesome-reveal";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://pro-sports-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Fade cascade damping={0.3}>
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-4xl font-bold text-gray-500 mb-3">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 md:px-0 px-3">
            Here you can find world best sports products
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4">
          {products.map((product) => (
            <div key={product._id}>
              <ProductsCard product={product} />
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default Products;
