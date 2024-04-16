export default function Paragraph({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <p className="text-sm">{children}</p>;
}
