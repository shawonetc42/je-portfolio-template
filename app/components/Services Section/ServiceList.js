import React from "react";

export default function ServiceList() {
  return (
    <div className="flex justify-center items-center px-16 py-20 font-bold bg-zinc-950 max-md:px-5">
      <div className="flex flex-col mt-12 max-w-full w-[1296px] max-md:mt-10">
        <div className="self-center text-transparent bg-gradient-to-r from-[#F5BB0A]  to-[#868481] text-5xl text-center bg-clip-text leading-[54px] max-md:max-w-full max-md:text-4xl">
          My Quality Services
        </div>
        <div className="self-center mt-5 text-base leading-6 text-center text-zinc-300 max-md:max-w-full">
          We put your ideas and thus your wishes in the form of a unique web
          project that
          <br />
          inspires you and you customers.
        </div>
        <div className="flex flex-col justify-center mt-14 text-white max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 justify-between px-11 py-4 w-full  bg-gradient-to-r from-[#F5BB0A]  to-[#868481] border-b border-solid border-indigo-950 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 items-center max-md:flex-wrap ">
              <div className="self-stretch my-auto text-xl leading-8 ">01</div>
              <div className="flex-auto self-stretch my-auto text-3xl leading-9 capitalize">
                Branding Design
              </div>
              <div className="flex-auto self-stretch text-base leading-6 text-zinc-300 max-md:max-w-full">
                I break down complex user experinece problems to create
                <br />
                integritiy focussed solutions that connect billions of people
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/df397bdb5abfb6f63c13ba4863884ef10151f582526844005a88fbfeceef48ff?"
              className="shrink-0 my-auto w-5 aspect-square"
            />
          </div>
        </div>
        <div className="flex gap-5 justify-between px-11 py-9 w-full border-b border-solid border-indigo-950 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 items-center max-md:flex-wrap">
            <div className="self-stretch my-auto text-xl leading-8 text-yellow-500">
              02
            </div>
            <div className="flex-auto self-stretch my-auto text-3xl leading-9 text-white capitalize">
              Web Design
            </div>
            <div className="flex-auto self-stretch text-base leading-6 text-zinc-300 max-md:max-w-full">
              I break down complex user experinece problems to create
              <br />
              integritiy focussed solutions that connect billions of people
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/925e9536ecd11f66eaec995cc0edbb46632acdc0dbfceac39a611ddfbbbb1e11?"
            className="shrink-0 my-auto w-5 aspect-square"
          />
        </div>
        <div className="flex gap-5 justify-between px-11 py-9 w-full border-b border-solid border-indigo-950 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 items-center max-md:flex-wrap">
            <div className="self-stretch my-auto text-xl leading-8 text-yellow-500">
              03
            </div>
            <div className="flex-auto self-stretch my-auto text-3xl leading-9 text-white capitalize">
              UI/UX Design
            </div>
            <div className="flex-auto self-stretch text-base leading-6 text-zinc-300 max-md:max-w-full">
              I break down complex user experinece problems to create
              <br />
              integritiy focussed solutions that connect billions of people
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/08a5fcd564a6db3f83436fdd92cb5ddbaa5a26737c0e42e469d01b655e01673c?"
            className="shrink-0 my-auto w-5 aspect-square"
          />
        </div>
        <div className="flex gap-5 justify-between px-11 py-9 w-full border-b border-solid border-indigo-950 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 items-center max-md:flex-wrap">
            <div className="self-stretch my-auto text-xl leading-8 text-yellow-500">
              04
            </div>
            <div className="flex-auto self-stretch my-auto text-3xl leading-9 text-white capitalize">
              Graphics Design
            </div>
            <div className="flex-auto self-stretch text-base leading-6 text-zinc-300 max-md:max-w-full">
              I break down complex user experinece problems to create
              <br />
              integritiy focussed solutions that connect billions of people
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/38b340d68b4027de9214908cea5dc4ba35396079851a1da724a740d0c2301200?"
            className="shrink-0 my-auto w-5 aspect-square"
          />
        </div>
      </div>
    </div>
  );
}
