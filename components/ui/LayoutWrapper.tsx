export default function PageWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="m-auto w-full max-w-screen-3xl overflow-x-hidden px-5 py-10 sm:px-10 md:px-[10%] lg:px-[6%] xl:px-[10%]">
      {children}
    </div>
  );
}
