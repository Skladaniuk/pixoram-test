import styles from "./CardsList.module.scss";
import { CardItem } from "../CardItem/CardItem";

export const CardsList = ({ products }) => {
  return (
    <div className={styles.cardsList}>
      {products?.length > 0 ? (
        products.map((item) => <CardItem key={item.id} card={item} />)
      ) : (
        <div>No items found</div>
      )}
    </div>
  );
};
