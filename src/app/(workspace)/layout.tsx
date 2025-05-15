import { Title } from '@/components/Global/Title';
import { Menu } from '@/components/Menu';
import { Search } from '@/components/Search';
import UserArea from '@/components/UserArea';
import type { Metadata } from 'next';
import '../../styles/globals.css';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Área de trabalho',
};

export default function WorkspaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid grid-cols-[minmax(0,300px)_1fr_minmax(0,300px)] grid-rows-[100px_auto]">
      <Menu />
      <div className="col-start-2 col-end-4 flex justify-between items-center py-5 px-10">
        <Title className='heading-300'>Dashboard</Title>
        <Search />
        <UserArea />
      </div>
      <div className="col-start-2 col-end-3">{children}</div>
      <div className="col-start-3 col-end-4 row-start-2 row-end-3">
        MENU LATERAL
      </div>
    </main>
  );
}
