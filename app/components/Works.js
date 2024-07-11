import React from "react";

export default function Works() {
  return (
    <div className="flex justify-center items-center px-16 py-20 bg-zinc-950 max-md:px-5">
      <div className="flex flex-col items-center mt-12 max-w-full w-[1295px] max-md:mt-10">
        <div className="text-5xl font-bold text-center bg-clip-text leading-[54px] max-md:text-4xl text-transparent bg-gradient-to-r from-[#F5BB0A]  to-[#868481]">
          My Recent Works
        </div>
        <div className="mt-5 text-base leading-6 text-center text-zinc-300 max-md:max-w-full">
          We put your ideas and thus your wishes in the form of a unique web
          project that
          <br />
          inspires you and you customers.
        </div>
        <div className="flex gap-5 justify-between items-center px-2 mt-14 max-w-full text-base leading-4 text-center text-white capitalize whitespace-nowrap bg-zinc-950 rounded-[60px] w-[400px] max-md:mt-10">
          <div className="justify-center self-stretch px-6 py-5 rounded-[50px] max-md:px-5">
            All
          </div>
          <div className="self-stretch my-auto">UX/UI</div>
          <div className="self-stretch my-auto">Branding</div>
          <div className="self-stretch my-auto">Apps</div>
        </div>
        <div className="self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center px-9 pt-9 w-full rounded-xl bg-neutral-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="1.png"
                  className="w-full aspect-[1.16] max-md:max-w-full"
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center px-9 pt-9 w-full rounded-xl bg-neutral-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="2.png"
                  className="w-full aspect-[1.16] max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch mt-14 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center px-9 pt-9 w-full rounded-xl bg-neutral-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="3.png"
                  className="w-full aspect-[1.16] max-md:max-w-full"
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center px-9 pt-9 w-full rounded-xl bg-neutral-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="4.png"
                  className="w-full aspect-[1.16] max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
