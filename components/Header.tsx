import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div>
        <Link href="/">
          <div className="object-contain ml-2">
            <Image src="/logo.png" width={90} height={40} alt="Blogio" />
          </div>
        </Link>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
