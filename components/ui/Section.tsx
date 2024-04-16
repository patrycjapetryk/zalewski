export default function Section({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="w-full">{children}</section>;
}
