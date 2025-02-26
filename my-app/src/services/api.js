import axios from "axios";

// Функція для отримання продуктів
export const fetchProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        `Error fetching products: ${error.response.status} - ${error.response.data}`
      );
    } else if (error.request) {
      throw new Error(
        "Error fetching products: No response received from the server."
      );
    } else {
      throw new Error(`Error fetching products: ${error.message}`);
    }
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        `Error fetching categories: ${error.response.status} - ${error.response.data}`
      );
    } else if (error.request) {
      throw new Error(
        "Error fetching categories: No response received from the server."
      );
    } else {
      throw new Error(`Error fetching categories: ${error.message}`);
    }
  }
};
