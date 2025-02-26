import axios from "axios";

export const fetchProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching products: " + error.message);
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching categories: " + error.message);
  }
};
