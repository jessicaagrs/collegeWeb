'use client';

import { usePathname } from 'next/navigation';

type TitleProps = {
  children: React.ReactNode;
};

export const Title = ({ children }: TitleProps) => {
  const pathname = usePathname();
  console.log(pathname);
  return <h1>{children}</h1>;
};
