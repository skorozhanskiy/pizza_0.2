'use client';
import React from 'react';
import PizzaCard from '../PizzaCard';
import pizza from '../../assets/data/JSON/pizza.json';

import styles from './pizza-block.module.scss';
type pizza = {
  id: number;
};
const PizzaBlock: React.FC = () => {
  const [openCardId, setOpenCardId] = React.useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setOpenCardId(id);
  };

  console.log(openCardId);
  return (
    <section className={styles.container}>
      {pizza.map((obj) => (
        <PizzaCard key={obj.id} {...obj} onClick={() => handleCardClick(obj.id)} />
      ))}

      {openCardId && (
        <div>
          <h3>{pizza.find((card) => card.id === openCardId)!.title}</h3>
          <p>{pizza.find((card) => card.id === openCardId)!.description}</p>
        </div>
      )}
    </section>
  );
};
export default PizzaBlock;
