import type { Metadata } from 'next';
import './globals.css';
import { Manrope } from 'next/font/google';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import LayoutWrapper from '@/ui/LayoutWrapper';

const manrope = Manrope({
  subsets: ['latin-ext'],
  weight: ['500'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Zalewski',
  description: 'Zalewski',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={manrope.variable} lang="pl">
      <body className="bg-dark-red bg-texture bg-150% bg-center bg-repeat-y font-body text-white 2xl:bg-100%">
        <LayoutWrapper>
          <Header />
          {children}
          <Footer />
        </LayoutWrapper>
      </body>
    </html>
  );
}
