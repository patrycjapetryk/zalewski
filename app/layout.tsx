import { type ReactNode } from 'react';
import { type Metadata } from 'next';

import './globals.css';
import { manrope } from './fonts';
import { cabinet } from './fonts';

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
    <html
      className={`${manrope.variable} ${cabinet.variable} scroll-smooth`}
      lang="pl"
    >
      <MenuContextProvider>
        <Body>
          <LayoutWrapper>
            <Header />
            <div className="px-5 sm:px-10 md:px-[5%] lg:pt-28 xl:px-[7%] 2xl:px-[10%]">
              {children}
              <Footer />
            </div>
          </LayoutWrapper>
        </Body>
      </MenuContextProvider>
    </html>
  );
}
