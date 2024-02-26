import React from 'react';
import BasketCard from '@/app/basket/BasketCard';

export default function Basket() {
  return (
    <div>
      <BasketCard
        inamesUrl="https://i.postimg.cc/sfSdCLyJ/cheese.webp"
        title="Сырная"
        description="Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо"
        priceName="Цена от"
        price={750}
        currency="&#x20bd;"
        buttonName=""
      />
    </div>
  );
}
