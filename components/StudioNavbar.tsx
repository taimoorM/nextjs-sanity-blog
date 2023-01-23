import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#4285f4] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#4285f4] mr-2" />
          Go Back to Blog
        </Link>
        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#4285f4]">
          <h2 className="text-white">
            Please use the following resource to help guide your content:
          </h2>
          <Link
            className="text-[#4285f4] font-bold ml-2"
            href="http://google.com"
          >
            Click Here
          </Link>
        </div>
      </div>

      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
