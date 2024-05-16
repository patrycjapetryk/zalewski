import { ReactNode } from 'react';

export default function FooterHeader({ children }: { children: ReactNode }) {
  return <h4 className="mb-3">{children}</h4>;
}
