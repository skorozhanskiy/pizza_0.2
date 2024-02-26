import React from 'react';

import NavList from '../NavList';
import ButtonBasket from '../ButtonBasket';
import { routerPath } from '@/app/routes';
import { routerBasket } from '@/app/routes';

import styles from './nav.module.scss';

export default function Nav() {
  const numberPizzas = 1;
  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <ul>
          {routerPath.map((obj, index) => (
            <li key={index}>
              <NavList className={styles.link} {...obj} />
            </li>
          ))}
        </ul>
        {numberPizzas >= 1 && (
          <ul>
            {routerBasket.map((obj, index) => (
              <li key={index}>
                <ButtonBasket
                  href={obj.href}
                  className={styles.button}
                  numberPizzas={3}
                  buttonName={obj.nameLink}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
