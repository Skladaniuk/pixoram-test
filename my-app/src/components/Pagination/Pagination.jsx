import styles from "./Pagination.module.scss";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className={styles.pagination}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles.pagination__button}
      >
        Попередня
      </button>
      <span styles={styles.pagination__span}>
        Сторінка {currentPage} з {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={styles.pagination__button}
      >
        Наступна
      </button>
    </div>
  );
};
