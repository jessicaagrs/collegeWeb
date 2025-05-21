import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export const ButtonViewMore = ({ children }: Props) => {
  return (
    <button className="w-full h-14 mt-8 bg-custom-transparency-100 text-custom-100 rounded-4xl cursor-pointer hover:bg-custom-1000">
      {children}
    </button>
  );
};
