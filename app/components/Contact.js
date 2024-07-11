"use client";
import React, { useState } from "react";

export default function Contact() {
  const [selectedService, setSelectedService] = useState("");

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  return (
    <div className="flex justify-center items-center px-16 py-20 bg-zinc-950 max-md:px-5">
      <div className="mt-10 max-w-full w-[1280px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center px-10 py-11 w-full text-base leading-4 rounded-2xl bg-neutral-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F5BB0A] to-[#868481] leading-[54px] max-md:max-w-full max-md:text-4xl">
                Let’s work together!
              </div>
              <div className="mt-6 leading-6 text-zinc-300 max-md:mr-2.5 max-md:max-w-full">
                I design and code beautifully simple things and I love what I
                do. Just simple like that!
              </div>
              <div className="flex gap-4 mt-7 text-neutral-500 max-md:flex-wrap max-md:max-w-full">
                <input
                  type="text"
                  placeholder="First name"
                  className="grow justify-center items-start px-5 py-5 rounded-lg border border-solid bg-zinc-950 border-zinc-800 w-fit max-md:px-5"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="grow justify-center items-start px-5 py-5 rounded-lg border border-solid bg-zinc-950 border-zinc-800 w-fit max-md:px-5"
                />
              </div>
              <div className="flex gap-4 mt-4 text-neutral-500 max-md:flex-wrap max-md:max-w-full">
                <input
                  type="email"
                  placeholder="Email address"
                  className="grow justify-center items-start px-5 py-5 rounded-lg border border-solid bg-zinc-950 border-zinc-800 w-fit max-md:px-5"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="grow justify-center items-start px-5 py-5 rounded-lg border border-solid bg-zinc-950 border-zinc-800 w-fit max-md:px-5"
                />
              </div>
              <div className="flex gap-5 justify-end px-4 py-5 mt-4 text-white rounded-lg border border-solid bg-zinc-950 border-zinc-800 max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
                <div className="flex-auto">Choose Service</div>
                <select
                  value={selectedService}
                  onChange={handleServiceChange}
                  className="px-4 py-2 rounded-lg border border-solid bg-zinc-950 border-zinc-800 text-neutral-500"
                >
                  <option value="">Select a service</option>
                  <option value="web_design">Web Design</option>
                  <option value="web_development">Web Development</option>
                  <option value="seo">SEO</option>
                  <option value="graphic_design">Graphic Design</option>
                </select>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e505fb564c6f73d2ec412d9a1ad6370fb524fee1af960b23e1e79c4b6ffeef18?"
                  className="shrink-0 self-start aspect-[1.25] w-[15px]"
                />
              </div>
              <textarea
                placeholder="Message"
                className="items-start px-5 pt-4 pb-32 mt-4 whitespace-nowrap rounded-lg border border-solid bg-zinc-950 border-zinc-800 text-neutral-500 max-md:px-5 max-md:pb-10 max-md:max-w-full"
              />
              <button className="justify-center self-start px-9 py-5 mt-4 text-base font-bold text-center text-white capitalize rounded-[50px] bg-gradient-to-r from-[#F5BB0A] to-[#868481] max-md:px-5">
                Send Message
              </button>
            </div>
          </div>
          {/* list */}
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10">
              <div className="flex gap-10 ">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0799180fd5124b5ae9df83ab3555e9dbd7d1e412460bd2e3c16a06f6714b9d5?"
                  className="shrink-0 aspect-square w-[50px]"
                />
                <div className="flex flex-col self-start mt-1.5">
                  <div className="text-base text-zinc-300">Phone</div>
                  <div className="mt-4 text-xl text-white">
                    +01 123 654 8096
                  </div>
                </div>
              </div>
              <div className="flex gap-10  items-start mt-12  max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/28d323e6e6077cd38e96f51bf40290781e7cc9e06bbb36a5a15430e089aa33bf?"
                  className="shrink-0 aspect-square w-[50px]"
                />
                <div className="flex flex-col mt-1.5">
                  <div className="text-base text-zinc-300">Email</div>
                  <div className="mt-4 text-xl text-white">
                    gerolddesign@mail.com
                  </div>
                </div>
              </div>
              <div className="flex gap-10  items-start mt-11 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a0efdc52ceefab02f5eb3dc995229fba9a319e5a002e36f84a611601c329c06?"
                  className="shrink-0 aspect-square w-[50px]"
                />
                <div className="flex flex-col mt-1.5">
                  <div className="text-base leading-6 text-zinc-300">
                    Address
                  </div>
                  <div className="mt-4 text-xl leading-8 text-white">
                    Warne Park Street Pine,
                    <br />
                    FL 33157, New York
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </div>
  );
}
