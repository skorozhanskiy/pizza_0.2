import React from 'react';

import styles from './page.module.scss';

import PizzaBlock from '@/app/Components/PizzaBlock';
import PizzaDescription from '@/app/Components/PizzaDescription';

export default function Home() {
  return (
    <article className={styles.container}>
      <h1>Пиццы</h1>
      <PizzaBlock />
      {/* <PizzaDescription /> */}
      <h1>Коффе</h1>
      <PizzaBlock />
    </article>
  );
}
