import Image from 'next/image';

export default function Logo() {
  return (
    <a href="/">
      <Image
        className="h-auto w-[130px] xs:w-[150px] md:w-[240px]"
        src="/images/zalewski-logo.png"
        alt="Logo Zalewski"
        width={284}
        height={102}
        priority
      />
    </a>
  );
}
