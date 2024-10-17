import Image from 'next/image';

export default function HomepageHeader() {
  return (
    <header className="flex w-full flex-col justify-between gap-6 px-1 lg:flex-row lg:gap-0">
      <div className="flex flex-col justify-center gap-10">
        <h1 className="flex flex-col justify-center text-5xl font-medium leading-none xl:text-6xl">
          <span>Oferta stworzona</span>
          <span>dla Ciebie</span>
        </h1>
        <p className="items-left flex flex-col justify-center gap-3">
          <span className="uppercase">Doświadczenie</span>
          <span className="text-5xl tracking-tight xl:sm:text-6xl">
            Od 1985 roku
          </span>
        </p>
      </div>

      <div className="flex w-full justify-center lg:w-[52%]">
        <Image
          className="h-auto w-full"
          src="/images/photo-slider.png"
          alt="Narzędzia budowlane"
          width={873}
          height={620}
          priority
        />
      </div>
    </header>
  );
}
