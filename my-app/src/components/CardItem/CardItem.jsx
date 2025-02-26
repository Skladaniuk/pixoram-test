import { useState, useEffect } from "react";
import { useCartStore } from "../../store/cartStore";
import styles from "./CardItem.module.scss";

export const CardItem = ({ card }) => {
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);

  const [added, setAdded] = useState(false);

  useEffect(() => {
    const isInCart = cart.some((item) => item.id === card.id);
    setAdded(isInCart);
  }, [cart, card.id]);

  const handleAddToCart = () => {
    addToCart(card);
    setAdded(true);
  };

  return (
    <div className={styles.cardItem}>
      <img
        src={card.image}
        alt={card.title}
        className={styles.cardItem__image}
      />
      <h3 className={styles.cardItem__title}>{card.title}</h3>
      <p className={styles.cardItem__category}>Категорія: {card.category}</p>
      <p className={styles.cardItem__price}>{card.price} $</p>
      {added ? (
        <p className={styles.cardItem__successMessage}>✅ Додано в кошик!</p>
      ) : (
        <button
          onClick={handleAddToCart}
          className={styles.cardItem__addToCart}
        >
          Додати в кошик
        </button>
      )}
    </div>
  );
};
