function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 font-bold px-10 py-5 mb-10 justify-center lg:items-center">
      <div className="lg:text-center">
        <h1 className="text-7xl">TM's Blogio</h1>
        <h2 className="mt-5 md:mt-0">
          Hello! and welcome to{" "}
          <span className="underline decoration-4 decoration-[#4285f4]">
            just another dev
          </span>{" "}
          blog.
        </h2>
      </div>
      <div className="p-3 bg-[#4285f4] text-white rounded mt-3 lg:mt-0 max-w-max flex justify-center">
        <p className="text-center max-w-sm font-thin text-xl">
          A blog about life, tech, food and the small things.
        </p>
      </div>
    </div>
  );
}

export default Banner;
