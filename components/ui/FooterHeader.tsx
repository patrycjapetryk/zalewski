export default function FooterHeader({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <h4 className="mb-3">{children}</h4>;
}
