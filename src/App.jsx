import { useEffect, useState } from "react";
import "./App.css";
import { getProducts } from "./api/product_api";
import ProductCard from "./components/ProductCard/ProductCard";
import SortComponent from "./components/Sort/Sort";

function App() {
  const [products, setProducts] = useState([]);

  // Sort
  const [sortOption, setSortOption] = useState("asc");
  const sortOptions = [
    { label: "Low to High", value: "asc" },
    { label: "High to Low", value: "desc" }
  ];

  // GET Products
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await getProducts({ sort: sortOption });
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, [sortOption]);

  return (
    <div>
      <SortComponent options={sortOptions} onSortChange={setSortOption} />
      <div className="product-grid">
        {products.length > 0 ? (
          <>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                rating={product.rating}
                category={product.category}
                price={product.price}
              />
            ))}
          </>
        ) : (
          <h2>No products available</h2>
        )}
      </div>
    </div>
  );
}

export default App;
