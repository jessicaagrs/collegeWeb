import Image from 'next/image';
import Link from 'next/link';

export default async function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-5 bg-(--color-700) text-(--color-800)">
      <h2 className="heading-400">Página não encontrada</h2>
      <div>
        <Image
          src={'/page-not-found.svg'}
          alt="Logo"
          width={400}
          height={300}
        />
      </div>
      <Link
        href="/"
        className="px-1 py-3 sm:px-3 sm:py-4 bg-(--color-800) text-(--color-100)
             rounded-xl w-40 text-center hover:bg-(--color-1000) transition-all duration-200 "
      >
        Voltar ao início
      </Link>
    </div>
  );
}
