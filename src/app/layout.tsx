import type { Metadata } from 'next';
import { Poppins, Roboto } from 'next/font/google';
import '../styles/globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'College Demo',
  description: 'Site para gerenciamento de alunos de escola.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <link rel="icon" href="/logo.svg" type="image/svg" sizes="32x32" />
      <body className={`${poppins.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
