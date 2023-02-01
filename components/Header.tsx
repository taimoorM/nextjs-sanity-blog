import Link from "next/link";
import Image from "next/image";
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid";

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
      <div>
        <Link
          href="#"
          className="flex items-center px-5 py-3 text-sm md:text-base text-white  bg-[#4285f4] rounded-full text-center"
        >
          Search Blog
          <DocumentMagnifyingGlassIcon className="h-6 w-6 ml-2" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
