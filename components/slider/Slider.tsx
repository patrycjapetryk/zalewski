import Image from 'next/image';

export default function Slider() {
  return (
    <section className="grid w-full grid-cols-1 gap-6 xs:gap-10 lg:grid-cols-3 lg:gap-5">
      <div className="flex justify-center lg:justify-start">
        <h1 className="flex flex-col justify-center text-5xl font-medium leading-none xs:text-6xl lg:text-5xl xl:text-6xl 2xl:text-[4.7rem]">
          <span>Oferta</span>
          <span>stworzona</span>
          <span>dla Ciebie</span>
        </h1>
      </div>
      <div>
        <Image
          className="w-full"
          src="/images/slider-image.png"
          alt=""
          width={592}
          height={584}
          priority
        />
      </div>
      <div className="flex items-center justify-center lg:justify-end">
        <p className="items-left flex flex-col justify-center gap-3">
          <span className="text-xs uppercase">Doświadczenie</span>
          <span className="text-4xl tracking-tight sm:text-5xl 2xl:text-6xl">
            Od 1985 roku
          </span>
        </p>
      </div>
    </section>
  );
}
