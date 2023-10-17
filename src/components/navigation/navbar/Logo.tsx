import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <div >
          <Link href="/">
            <Image src="/TechnexLogo.svg"
      height={75}
      width={330}
      loading="lazy"
      alt="Picture of the author"/>
        </Link>
        </div>
    );
  };
  export default Logo;