import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">
        @{new Date().getFullYear()} Daril | AnimeVault
      </p>
      <Image
        src="/logo5.png"
        alt="logo"
        width={47}
        height={44}
        className="object-contain invert"
      />
      <div className="flex items-center gap-6">
        <Link href="https://github.com/darildivin">
          <Image
            src="/github.svg"
            alt="logo"
            width={19}
            height={19}
            className="object-contain invert"
          />
        </Link>
        <Link href="/">
          <Image
            src="/instagram.svg"
            alt="logo"
            width={19}
            height={19}
            className="object-contain"
          />
        </Link>

        <Link href="/">
          <Image
            src="/twitter.svg"
            alt="logo"
            width={19}
            height={19}
            className="object-contain stroke-white text-white"
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
