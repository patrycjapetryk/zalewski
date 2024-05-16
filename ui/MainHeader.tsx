import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  uppercase?: boolean;
};

export default function MainHeader({ children, uppercase }: Props) {
  return (
    <h1
      className={`
        text-xl leading-none tracking-tight
        xs:text-2xl md:text-3xl 
        ${uppercase ? 'uppercase' : 'mb-10 mt-4 xl:text-4xl'}
      `}
    >
      {children}
    </h1>
  );
}
