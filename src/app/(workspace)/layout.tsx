import { GridContainer } from '@/components/Global/GridContainer';
import { GridItem } from '@/components/Global/GridItem';
import { Title } from '@/components/Global/Title';
import { Navbar } from '@/components/Navbar';
import { Search } from '@/components/Search';
import SideMenu from '@/components/SideMenu';
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
    <main>
      <GridContainer className="grid-cols-[minmax(0,300px)_1fr_minmax(0,300px)] grid-rows-[auto_1fr] min-h-screen">
        <GridItem className="row-span-2 h-full">
          <Navbar />
        </GridItem>
        <GridItem className="col-start-2 col-end-4 row-start-1 row-end-2 flex items-center">
          <GridContainer className="grid-cols-[1fr_1fr_minmax(0,300px)] grid-rows-[100px_auto] w-full">
            <GridItem className="self-center">
              <Title className="text-4xl font-bold pl-5">Dashboard</Title>
            </GridItem>
            <GridItem className="relative items-center hidden xl:flex">
              <Search />
            </GridItem>
            <GridItem className="bg-custom-600 flex items-center justify-center">
              <UserArea />
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem className="col-start-2 col-end-3 row-start-2 row-end-3">
          {children}
        </GridItem>
        <GridItem className="col-start-3 col-end-4 row-start-2 row-end-3 h-full">
          <SideMenu />
        </GridItem>
      </GridContainer>
    </main>
  );
}
