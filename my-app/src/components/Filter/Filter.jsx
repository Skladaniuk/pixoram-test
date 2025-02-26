import React from "react";
import styles from "./Filter.module.scss";

export const Filter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className={styles.filter}>
      <select
        value={activeCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className={styles.filter__dropdown}
      >
        <option value="all">Всі категорії</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};
