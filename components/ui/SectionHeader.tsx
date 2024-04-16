export default function SectionHeader({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <h2 className="mb-14 mt-4 text-2xl leading-none tracking-tight xs:text-3xl md:text-4xl xl:text-5xl">
      {children}
    </h2>
  );
}
