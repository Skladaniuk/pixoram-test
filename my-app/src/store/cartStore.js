import { create } from "zustand";

export const useCartStore = create((set) => ({
  // 🛒 Корзина
  cart: [],

  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  clearCart: () => set({ cart: [] }),

  // 📌 Фільтрація за категоріями
  activeCategory: "all",
  setActiveCategory: (category) => set({ activeCategory: category }),

  // 📄 Пагінація
  currentPage: 1,
  itemsPerPage: 6,
  setCurrentPage: (page) => set({ currentPage: page }),
}));
