import { Manrope } from 'next/font/google';
import localFont from 'next/font/local';

export const cabinet = localFont({
  src: '../public/fonts/CabinetGrotesk-Regular.woff',
  variable: '--font-cabinet',
});

export const manrope = Manrope({
  subsets: ['latin-ext'],
  weight: ['500'],
  variable: '--font-manrope',
  display: 'swap',
});
