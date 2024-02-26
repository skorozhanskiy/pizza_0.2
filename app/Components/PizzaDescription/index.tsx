import React from 'react';
import Pizza from '../Pizza';
import ListBlock from '../ListBlock';

import styles from './pizza-description.module.scss';

export default function PizzaDescription() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Pizza
          inamesUrl="https://i.postimg.cc/sfSdCLyJ/cheese.webp"
          title="Сырная"
          description="Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо"
          priceName="Цена от"
          price={750}
          currency="&#x20bd;"
          buttonName="Выбрать"
          className__container={styles.container__block}
          className__images={styles.images}
          className__title={styles.title}
          className__description={styles.description}
          className__price={styles.price}
          className__button={styles.button}
        />
        <ListBlock />
      </div>
    </div>
  );
}
