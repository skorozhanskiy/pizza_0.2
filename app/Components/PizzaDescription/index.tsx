import React from 'react';
import Pizza from '../Pizza';
import ListBlock from '../ListBlock';

import styles from './pizza-description.module.scss';
type TypePizzaCart = {
  title: string;
  description: string;
  price: number;
  buttonName: string;
  priceName: string;
  inamesUrl: string;
  onClick: any;
};
export default function PizzaDescription({
  inamesUrl,
  title,
  description,
  priceName,
  price,
  buttonName,
}: TypePizzaCart) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Pizza
          inamesUrl={inamesUrl}
          title={title}
          description={description}
          priceName={priceName}
          price={price}
          currency="&#x20bd;"
          buttonName={buttonName}
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
