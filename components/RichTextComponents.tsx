import Image from "next/image";
import Link from "next/link";
import urlFor from "../lib/urlFor";

export const RichTextComponents = {
  image: ({ value }: any) => {
    return (
      <div className="relative w-full h-96 m-10 mx-auto">
        <Image
          className="object-contain"
          src={urlFor(value).url()}
          alt="Blog Post Image"
          fill
        />
      </div>
    );
  },
  ul: ({ children }: any) => (
    <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
  ),
  ol: ({ children }: any) => <ol className="mt-lg list-decimal">{children}</ol>,

  h1: ({ children }: any) => (
    <h1 className="text-5xl py-10 font-bold">{children}</h1>
  ),
  h2: ({ children }: any) => (
    <h1 className="text-4xl py-10 font-bold">{children}</h1>
  ),
  h3: ({ children }: any) => (
    <h1 className="text-3xl py-10 font-bold">{children}</h1>
  ),
  h4: ({ children }: any) => (
    <h1 className="text-2xl py-10 font-bold">{children}</h1>
  ),
  blockquote: ({ children }: any) => (
    <blockquote className="border-l-[#4285f4] border-l-4 pl-5 py-5 my-5">
      {children}
    </blockquote>
  ),
  link: ({ children, value }: any) => {
    return (
      <Link
        href="#"
        className="underline decoration-[#4285f4] hover:decoration-black"
      >
        {children}
      </Link>
    );
  },
};
