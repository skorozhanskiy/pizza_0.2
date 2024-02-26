import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './layout/header';

import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Пицца — заказать с доставкой на дом бесплатно, доставка еды из пиццерии Скорожанский',
  description:
    '🍕Закажи пиццу с бесплатной доставкой в Венев за 30 минут. Купить недорогую еду в Веневе рядом с домом или офисом в пиццерии Скорожанский. Оформи заказ на сайте dodopizza.ru или по телефону 8 913 16 21 15 16 17 1.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
