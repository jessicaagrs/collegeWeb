import { Title } from '@/components/Global/Title';
import { Search } from '@/components/Search';
import UserArea from '@/components/UserArea';
import type { Metadata } from 'next';
import '../../styles/globals.css';
import { Menu } from '@/components/Menu';

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
    <main className="flex">
      <Menu />
      <div className="flex flex-col">
        <div>
          <Title>Dashboard</Title>
          <Search />
          <UserArea />
        </div>
        <div className="flex">
          {children}
          <div>Notificações</div>
        </div>
      </div>
    </main>
  );
}
