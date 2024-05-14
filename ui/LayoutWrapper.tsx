export default function PageWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`
        m-auto w-full max-w-screen-3xl overflow-x-hidden
        px-5 py-6
        sm:px-10 md:px-[5%] md:py-10 lg:pt-28 xl:px-[7%] 2xl:px-[10%]
      `}
    >
      {children}
    </div>
  );
}
