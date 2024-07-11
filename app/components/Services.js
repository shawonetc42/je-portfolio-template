import React from "react";

export default function Services() {
  return (
    <div className="flex justify-center items-center px-16 py-2 bg-zinc-950 max-md:px-5">
      <div className="flex flex-col mt-10 max-w-full w-[1130px] max-md:mt-10">
        {/* flex */}
        <div className="flex justify-between items-center">
          <div>
            <div className="text-4xl font-bold leading-[54px] text-zinc-300 max-md:max-w-full">
              I am Gerold
            </div>
            <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F5BB0A]  to-[#868481] leading-[78px] max-w-[563px] max-md:text-4xl max-md:leading-[53px]">
              Web Developer +<br />
              UX Designer
            </div>
            <div className="mt-6 text-xl font-light leading-8 text-zinc-300 max-md:max-w-full">
              I break down complex user experinece problems to
              <br />
              create integritiy focussed solutions that connect
              <br />
              billions of people
            </div>
            <div className="flex gap-5 justify-between items-center self-start mt-14 text-base leading-4 text-yellow-600 max-md:flex-wrap max-md:mt-10">
              <div className="flex gap-2 justify-center items-center self-stretch px-9 py-5 text-base tracking-wider text-center text-yellow-500 border border-orange-400 border-solid rounded-[50px] max-md:px-5">
                <div className="">Download CV</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7bc3690c6d74f2635ea5487ed2db533ec3777e16a8280034b1ccbff163d56f6?"
                  className="shrink-0 self-start aspect-[1.06] w-[18px]"
                />
              </div>
              <div className="justify-center self-stretch px-2.5 py-3 my-auto underline whitespace-nowrap rounded-2xl border border-yellow-600 border-solid">
                <img src="/twittericon.svg" alt="" />
              </div>
              <div className="justify-center self-stretch px-2.5 py-2.5 my-auto font-black underline whitespace-nowrap rounded-2xl border border-yellow-600 border-solid">
                <img src="/dribble.svg" alt="" />
              </div>
              <div className="justify-center self-stretch px-3 py-2.5 my-auto underline whitespace-nowrap rounded-2xl border border-yellow-600 border-solid">
                <img src="/linkdin.svg" alt="" />
              </div>
              <div className="justify-center self-stretch p-2.5 my-auto underline whitespace-nowrap rounded-2xl border border-yellow-600 border-solid">
                <img src="/github.svg" alt="" />
              </div>
            </div>
          </div>
          <img src="/man.png" alt="" />
        </div>
        <div className="flex gap-5 justify-between px-px mt-40 w-full text-zinc-300 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-4">
            <div className="text-6xl font-medium text-center leading-[70.4px] max-md:text-4xl">
              0
            </div>
            <div className="self-start mt-3 text-base leading-6">
              Years of
              <br />
              Experience
            </div>
          </div>
          <div className="flex gap-5 justify-between items-start whitespace-nowrap">
            <div className="flex gap-0.5 text-6xl max-md:text-4xl">
              <div className="grow font-medium text-center leading-[110%] max-md:text-4xl">
                0
              </div>
              <div className="self-start mt-3.5 font-bold leading-[100%] max-md:text-4xl">
                +
              </div>
            </div>
            <div className="mt-3 text-base leading-6">
              Project
              <br />
              Completed
            </div>
          </div>
          <div className="flex gap-5 whitespace-nowrap">
            <div className="flex gap-0.5 text-6xl max-md:text-4xl">
              <div className="grow font-medium text-center leading-[110%] max-md:text-4xl">
                0
              </div>
              <div className="font-bold leading-[100%] max-md:text-4xl">K</div>
            </div>
            <div className="self-start mt-3 text-base leading-6">
              Happy
              <br />
              Clients
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-6xl font-medium text-center leading-[70.4px] max-md:text-4xl">
              0
            </div>
            <div className="self-start mt-3 text-base leading-6">
              Years of
              <br />
              Experience
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
