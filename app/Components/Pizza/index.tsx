import React from 'react';

import Image from 'next/image';

type TypePizzaCart = {
  title: string;
  description: string;
  price: number;
  buttonName: string;
  priceName: string;
  inamesUrl: string;
  currency: string;
  className__container: string;
  className__images: string;
  className__title: string;
  className__description: string;
  className__price: string;
  className__button: string;
};

export default function Pizza({
  title,
  description,
  price,
  buttonName,
  priceName,
  inamesUrl,
  currency,
  className__container,
  className__images,
  className__title,
  className__description,
  className__price,
  className__button,
}: TypePizzaCart) {
  return (
    <section className={className__container}>
      <Image
        className={className__images}
        src={inamesUrl}
        alt=""
        priority
        width={200}
        height={200}
      />
      <h1 className={className__title}>{title}</h1>
      <p className={className__description}>{description}</p>
      <div className={className__price}>
        <h1>
          <p>{priceName}</p>
          <span>{price}</span>
          {currency}
        </h1>
        <button className={`${'reset-btn'}  ${className__button}`}>{buttonName}</button>
      </div>
    </section>
  );
}
