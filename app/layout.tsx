import { type ReactNode } from 'react';
import { type Metadata } from 'next';

import './globals.css';
import { manrope } from './fonts';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import LayoutWrapper from '@/ui/LayoutWrapper';
import { MenuContextProvider } from '@/components/Menu/MenuContext';
import Body from '@/ui/Body';

export const metadata: Metadata = {
  title: 'Zalewski',
  description: 'Zalewski',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={`${manrope.variable} scroll-smooth`} lang="pl">
      <MenuContextProvider>
        <Body>
          <LayoutWrapper>
            <Header />
            {children}
            <Footer />
          </LayoutWrapper>
        </Body>
      </MenuContextProvider>
    </html>
  );
}
