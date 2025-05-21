import Image from 'next/image';
import Link from 'next/link';

export default async function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-5 bg-custom-600 text-custom-800">
      <h2 className="text-3xl">Página não encontrada</h2>
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
        className="px-1 py-3 sm:px-3 sm:py-4 bg-custom-800 text-custom-100
             rounded-xl w-40 text-center hover:bg-custom-1000 transition-all duration-200 "
      >
        Voltar ao início
      </Link>
    </div>
  );
}
