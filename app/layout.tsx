import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';
import Image from 'next/image';

const nunitoSans = Nunito_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lista de Países',
  description: 'Uma lista de países criada com o next 14!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={nunitoSans.className}>
        <main className="bg-gray-100 min-h-screen flex flex-col items-center">
          <nav className="w-full bg-white h-16 flex items-center justify-center">
            <section className="container flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Logomarca países"
                width={40}
                height={40}
              />
              <h1 className="font-bold text-2xl">Lista de Países</h1>
            </section>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
