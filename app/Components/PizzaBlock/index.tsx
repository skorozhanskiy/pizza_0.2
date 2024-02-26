'use client';
import React from 'react';
import PizzaCard from '../PizzaCard';
import pizza from '../../assets/data/JSON/pizza.json';

import PizzaDescription from '../PizzaDescription';

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
        <div className={styles.modal}>
          <div className={styles.modal_wrapper}>
            <button onClick={() => handleCardClick(0)} className={styles.modal_button}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.84606 12.4986L0.552631 3.20519C-0.1806 2.47196 -0.1806 1.28315 0.552631 0.549923C1.28586 -0.183308 2.47466 -0.183308 3.20789 0.549923L12.5013 9.84335L21.792 0.552631C22.5253 -0.1806 23.7141 -0.1806 24.4473 0.552631C25.1805 1.28586 25.1805 2.47466 24.4473 3.20789L15.1566 12.4986L24.45 21.792C25.1832 22.5253 25.1832 23.7141 24.45 24.4473C23.7168 25.1805 22.528 25.1805 21.7947 24.4473L12.5013 15.1539L3.20519 24.45C2.47196 25.1832 1.28315 25.1832 0.549923 24.45C-0.183308 23.7168 -0.183308 22.528 0.549923 21.7947L9.84606 12.4986Z"></path>
              </svg>
            </button>
            <img src={pizza.find((card) => card.id === openCardId)!.inamesUrl} />
            <div className={styles.modal_container}>
              <div className={styles.modal_title}>
                <h3>{pizza.find((card) => card.id === openCardId)!.title}</h3>
                <p>{pizza.find((card) => card.id === openCardId)!.description}</p>
                {/* <p>{pizza.find((card) => card.id === openCardId)!.priceName}</p>
          <p>{pizza.find((card) => card.id === openCardId)!.price}</p> */}
              </div>
              <ul className={styles.modal_size}>
                <li>Маленькая</li>
                <li>Средняя</li>
                <li>Большая</li>
              </ul>
              <ul className={styles.modal_dough}>
                <li>Традиционное</li>
                <li>Тонкое</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default PizzaBlock;
