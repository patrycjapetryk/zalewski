import { type ReactNode } from 'react';
import { type Metadata } from 'next';

import './globals.css';
import { manrope } from './fonts';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import LayoutWrapper from '@/ui/LayoutWrapper';

export const metadata: Metadata = {
  title: 'Zalewski',
  description: 'Zalewski',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={`${manrope.variable} scroll-smooth`} lang="pl">
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
