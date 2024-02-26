import React from 'react';
import PizzaCard from '../PizzaCard';
import pizza from '../../assets/data/JSON/pizza.json';

import styles from './pizza-block.module.scss';

export default function PizzaBlock() {
  return (
    <section className={styles.container}>
      {pizza.map((obj) => (
        <PizzaCard key={obj.id} {...obj} />
      ))}
    </section>
  );
}
