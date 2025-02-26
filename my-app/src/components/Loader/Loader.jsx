import styles from "./Loader.module.scss";
import { Hourglass } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <Hourglass
        visible={true}
        height="160"
        width="160"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#306cce", "#72a1ed"]}
      />
    </div>
  );
};
