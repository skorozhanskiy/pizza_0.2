import React from 'react';
import Link from 'next/link';
import { TypeNavList } from '@/app/types';

export default function NavList({ href, nameLink, className }: TypeNavList) {
  return (
    <Link className={className} href={href}>
      {nameLink}
    </Link>
  );
}
