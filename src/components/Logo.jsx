import Image from "next/image";
import Link from "next/link";
import LWSLogo from "../public/lws_logo.png";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        className="max-w-[100px] md:max-w-[165px]"
        src={LWSLogo}
        alt="Lws"
        height={100}
        width={165}
      />
    </Link>
  );
};

export default Logo;
