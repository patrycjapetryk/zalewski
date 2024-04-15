import Image from 'next/image';

export default function Logo() {
  return (
    <a href="/">
      <Image
        className="w-[130px] md:w-[166px]"
        src="/images/zalewski-logo.svg"
        alt="Logo Zalewski"
        width={223}
        height={59}
        priority
      />
    </a>
  );
}
