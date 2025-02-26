import { Link } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";
import styles from "./ShoppingCart.module.scss";

export const ShoppingCart = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <div className={styles.cart}>
      <h2>Ваш кошик</h2>
      {cart.length === 0 ? (
        <p>Кошик порожній</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className={styles.cart__item}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.cart__image}
              />
              <div>
                <h4>{item.title}</h4>
                <p>{item.price} $</p>
                <p>Кількість: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>
                  Видалити
                </button>
              </div>
            </div>
          ))}
          <button onClick={clearCart} className={styles.cart__clearCart}>
            Очистити кошик
          </button>
        </div>
      )}
      <Link to="/" className={styles.cart__returnToShopping}>
        Повернутись до покупок
      </Link>
    </div>
  );
};
