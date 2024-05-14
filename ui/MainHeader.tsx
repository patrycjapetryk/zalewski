export default function MainHeader({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <h1 className="mb-10 mt-4 text-xl leading-none tracking-tight xs:text-2xl md:text-3xl xl:text-4xl">
      {children}
    </h1>
  );
}
