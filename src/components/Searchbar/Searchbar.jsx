import React from 'react';
import styles from './Searchbar.module.css';

export const Searchbar = () => {
  return (
    <div>
      <header className={styles.searchbar}>
        <form className={styles.searchForm}>
          <button type="submit" className={styles.searchForm_button}>
            <span className={styles.searchForm_button_label}>Search</span>
          </button>

          <input
            className={styles.searchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </div>
  );
};
