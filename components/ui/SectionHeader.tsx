export default function SectionHeader({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <h2 className="mb-14 mt-4 text-5xl leading-none tracking-tight">
      {children}
    </h2>
  );
}
