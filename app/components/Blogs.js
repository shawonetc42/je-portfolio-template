import React from "react";

export default function Blogs() {
  return (
    <div className="flex justify-center items-center px-16 py-20 bg-zinc-950 max-md:px-5">
      <div className="flex flex-col items-center mt-12 max-w-full w-[1280px] max-md:mt-10">
        <div className="text-5xl font-bold text-center text-transparent bg-gradient-to-r from-[#F5BB0A]  to-[#868481] bg-clip-text leading-[54px] max-md:text-4xl">
          Recent Blogs
        </div>
        <div className="mt-6 text-base leading-6 text-center text-zinc-300 max-md:max-w-full">
          We put your ideas and thus your wishes in the form of a unique web
          project that
          <br />
          inspires you and you customers.
        </div>
        <div className="self-stretch mt-14 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center w-full rounded-2xl bg-neutral-900 max-md:mt-10">
                <div className="flex overflow-hidden relative flex-col p-4 w-full aspect-[1.11]">
                  <img
                    loading="lazy"
                    srcSet="b2.png"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="relative justify-center self-start px-2.5 py-2.5 text-sm leading-3 text-white uppercase whitespace-nowrap rounded-[50px]">
                    Tutorial
                  </div>
                  <div className="flex relative flex-col items-start py-5 pr-20 pl-4 mt-48 w-full rounded-2xl bg-amber-500 bg-opacity-40 max-md:pr-5 max-md:mt-10">
                    <div className="flex gap-4 text-sm leading-4 text-yellow-500">
                      <div className="flex flex-1 gap-1.5">
                        <div className="font-black">
                          <img src="icon2.svg" alt="" />
                        </div>
                        <div>Oct 01, 2022</div>
                      </div>
                      <div className="flex flex-1 gap-2 self-start">
                        <div className="font-black"></div>
                        <div className="flex-auto">Comment (0)</div>
                      </div>
                    </div>
                    <div className="mt-3.5 text-2xl font-bold leading-7 text-white capitalize">
                      top 10 ui ux designers
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col p-4 w-full aspect-[1.11]">
                <img
                  loading="lazy"
                  srcSet="b3.png"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative justify-center self-start px-2.5 py-2.5 text-sm leading-3 text-white uppercase whitespace-nowrap rounded-[50px]">
                  Tutorial
                </div>
                <div className="flex relative flex-col items-start py-5 pr-20 pl-4 mt-48 w-full rounded-2xl bg-amber-500 bg-opacity-40 max-md:pr-5 max-md:mt-10">
                  <div className="flex gap-4 text-sm leading-4 text-yellow-500">
                    <div className="flex flex-1 gap-1.5">
                      <div className="font-black">
                        <img src="icon2.svg" alt="" />
                      </div>
                      <div>Oct 01, 2022</div>
                    </div>
                    <div className="flex flex-1 gap-2 self-start">
                      <div className="font-black"></div>
                      <div className="flex-auto">Comment (0)</div>
                    </div>
                  </div>
                  <div className="mt-3.5 text-2xl font-bold leading-7 text-white capitalize">
                    top 10 ui ux designers
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col p-4 w-full aspect-[1.11]">
                <img
                  loading="lazy"
                  srcSet="b4.png"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative justify-center self-start px-2.5 py-2.5 text-sm leading-3 text-white uppercase whitespace-nowrap rounded-[50px]">
                  Tutorial
                </div>
                <div className="flex relative flex-col items-start py-5 pr-20 pl-4 mt-48 w-full rounded-2xl bg-amber-500 bg-opacity-40 max-md:pr-5 max-md:mt-10">
                  <div className="flex gap-4 text-sm leading-4 text-yellow-500">
                    <div className="flex flex-1 gap-1.5">
                      <div className="font-black">
                        <img src="icon2.svg" alt="" />
                      </div>
                      <div>Oct 01, 2022</div>
                    </div>
                    <div className="flex flex-1 gap-2 self-start">
                      <div className="font-black"></div>
                      <div className="flex-auto">Comment (0)</div>
                    </div>
                  </div>
                  <div className="mt-3.5 text-2xl font-bold leading-7 text-white capitalize">
                    top 10 ui ux designers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
