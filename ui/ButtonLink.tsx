export default function ButtonLink({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <a
      className="leading-2 hidden rounded-xl bg-white px-12 py-[0.6rem] text-sm uppercase text-black transition-opacity hover:opacity-75 lg:block"
      href="#"
    >
      {children}
    </a>
  );
}
