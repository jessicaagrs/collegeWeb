import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-1 grid-rows-3 justify-items-center h-screen max-w-3xl m-(--margin-auto) bg-(--color-100) text-(--color-800)">
        <div className="flex items-center gap-5 self-end">
          <Image
            src="/logo.svg"
            alt="Logo"
            className="sm:w-[100px] sm:h-[100px]"
            width={50}
            height={50}
          />
          <h1 className="text-3xl font-bold sm:text-6xl">CollegeWeb</h1>
        </div>
        <div
          className="flex flex-col items-center gap-5 self-center"
          aria-label="Acesso ao sistema"
        >
          <Link
            href="/login"
            className="button px-1 py-3 sm:px-3 sm:py-4 bg-(--color-200) text-(--color-1300) rounded-xl w-40 text-center hover:bg-(--color-1200) transition-all duration-200"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-1 py-3 sm:px-3 sm:py-4 bg-(--color-200) text-(--color-1300) rounded-xl w-40 text-center hover:bg-(--color-1200) transition-all duration-200       "
          >
            Cadastre-se
          </Link>
        </div>
        <footer className="self-end mb-5">
          <p className="text-xs">
            © 2025 @jessagrs. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </main>
  );
}
