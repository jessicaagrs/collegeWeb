import { GridContainer } from '@/components/Global/GridContainer';
import { GridItem } from '@/components/Global/GridItem';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <GridContainer className="grid grid-cols-1 grid-rows-3 justify-items-center h-screen max-w-3xl m-custom-auto bg-custom-100 text-custom-800">
        <GridItem className="flex items-center gap-5 self-end">
          <Image
            src="/logo.svg"
            alt="Logo"
            className="sm:w-[100px] sm:h-[100px]"
            width={50}
            height={50}
          />
          <h1 className="text-5xl font-bold sm:text-6xl">CollegeWeb</h1>
        </GridItem>
        <GridItem
          className="flex flex-col items-center gap-5 self-center"
          aria-label="Acesso ao sistema"
        >
          <Link
            href="/login"
            className="button px-1 py-3 sm:px-3 sm:py-4 bg-custom-800 text-custom-100
             rounded-xl w-70 text-center hover:bg-custom-1000 transition-all duration-200"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-1 py-3 sm:px-3 sm:py-4 bg-custom-800 text-custom-100
             rounded-xl w-70 text-center hover:bg-custom-1000 transition-all duration-200"
          >
            Cadastre-se
          </Link>
        </GridItem>
        <GridItem className="self-end mb-5">
          <p className="text-xs">
            © 2025{' '}
            <Link
              href="https://github.com/jessicaagrs"
              className="hover:text-custom-200"
            >
              @jessagrs
            </Link>
            . Todos os direitos reservados.
          </p>
        </GridItem>
      </GridContainer>
    </main>
  );
}
