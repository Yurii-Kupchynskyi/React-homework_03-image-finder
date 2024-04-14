import React from 'react';
import styles from './Searchbar.module.css';

export const Searchbar = () => {
  return (
    <div>
      <header class={styles.searchbar}>
        <form class={styles.searchForm}>
          <button type="submit" class={styles.searchForm_button}>
            <span class={styles.searchForm_button_label}>Search</span>
          </button>

          <input
            class={styles.searchForm_input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </div>
  );
};
