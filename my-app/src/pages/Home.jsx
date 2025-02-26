import { useState, useEffect } from "react";
import { CartButton } from "../components/CartButton/CartButton";
import { CardsList } from "../components/CardsList/CardsList";
import { Filter } from "../components/Filter/Filter";
import { Pagination } from "../components/Pagination/Pagination";
import { Loader } from "../components/Loader/Loader";
import { fetchProducts, fetchCategories } from "../services/api";
import styles from "./Home.module.scss";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 8;

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);

        const fetchedCategories = await fetchCategories();
        setCategories(["all", ...fetchedCategories]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div>
      <div className={styles.header}>
        <CartButton />
        <Filter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CardsList products={currentItems} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default Home;
