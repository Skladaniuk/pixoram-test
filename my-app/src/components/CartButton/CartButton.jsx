import { Link } from "react-router-dom";
import styles from "./CartButton.module.scss";
import { FiShoppingCart } from "react-icons/fi";

export const CartButton = () => {
  return (
    <Link to="/cart" className={styles.cartButton}>
      Перейти до кошика
      <FiShoppingCart />
    </Link>
  );
};
