import React from 'react';
import Link from 'next/link';

import { TypeButtonBasket } from '@/app/types';

export default function ButtonBasket({
  href,
  buttonName,
  numberPizzas,
  className,
}: TypeButtonBasket) {
  return (
    <Link href={href} className={className}>
      <p>{buttonName}</p>
      <div></div>
      <span>{numberPizzas}</span>
    </Link>
  );
}
