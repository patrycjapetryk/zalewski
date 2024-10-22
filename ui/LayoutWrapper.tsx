import { type ReactNode } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
  return <div className="m-auto w-full max-w-screen-3xl">{children}</div>;
}
