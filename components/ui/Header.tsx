export default function Header({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <h3 className="mb-8 text-2xl leading-none xl:text-[1.75rem]">{children}</h3>
  );
}
