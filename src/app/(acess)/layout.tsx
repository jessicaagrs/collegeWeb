import type { Metadata } from 'next';
import '../../styles/globals.css';

export const metadata: Metadata = {
  title: 'Acesso',
  description: 'Área de acesso ao sistema',
};

export default function AcessLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
