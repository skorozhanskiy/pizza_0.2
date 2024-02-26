import React from 'react';

import Image from 'next/image';

import styles from './pizza-card.module.scss';

type TypePizzaCart = {
  title: string;
  description: string;
  price: number;
  buttonName: string;
  priceName: string;
  inamesUrl: string;
  onClick: any;
};

export default function PizzaCard({
  title,
  description,
  price,
  buttonName,
  priceName,
  inamesUrl,
  onClick,
}: TypePizzaCart) {
  return (
    <section onClick={onClick} className={styles.container}>
      <Image className={styles.images} src={inamesUrl} alt="" priority width={200} height={200} />
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <div className={styles.price}>
          <h1>
            <p>{priceName}</p>
            <span>{price}</span>
            &#x20bd;
          </h1>
          <button className={`${'reset-btn'} ${styles.button} ${'no-select'}`}>{buttonName}</button>
        </div>
      </div>
    </section>
  );
}
