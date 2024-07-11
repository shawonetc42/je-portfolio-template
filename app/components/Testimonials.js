import React from "react";

export default function Testimonials() {
  return (
    <div className="flex justify-center items-center px-16 py-20 bg-zinc-950 max-md:px-5">
      <div className="mt-10 max-w-full w-[1293px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-2 max-md:mt-10 max-md:max-w-full">
              <div className="text-5xl font-bold bg-clip-text leading-[54px] max-md:max-w-full max-md:text-4xl text-transparent bg-gradient-to-r from-[#F5BB0A]  to-[#868481]">
                My Client's Stories
              </div>
              <div className="mt-6 text-base leading-6 text-zinc-300 max-md:max-w-full">
                Empowering people in new a digital journey with my super
                <br />
                services
              </div>
            </div>
            <img src="Gradient+Blur.png" alt="" className="w-40 h-40 mt-20" />
          </div>

          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow px-6 py-7 mx-auto w-full rounded-2xl bg-neutral-900 max-md:px-5 max-md:mt-8">
                      <div className="flex gap-5 justify-between">
                        <img
                          loading="lazy"
                          srcSet="e1.png"
                          className="shrink-0 self-start max-w-full aspect-[3.03] w-[100px]"
                        />
                        <img
                          loading="lazy"
                          srcSet="e2.png"
                          className="shrink-0 max-w-full aspect-[0.97] w-[100px]"
                        />
                      </div>
                      <div className="mt-20 text-base leading-6 text-zinc-300 max-md:mt-10 max-md:mr-2">
                        “Taylor is a professional
                        <br />
                        Designer he really helps my
                        <br />
                        business by providing value to
                        <br />
                        my business.
                      </div>
                      <div className="mt-14 text-lg font-bold leading-5 text-white max-md:mt-10">
                        Brandon Fraser
                      </div>
                      <div className="mt-3.5 text-sm leading-5 text-zinc-300">
                        Senior Software Dev, Cosmic Sport
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow px-6 py-7 mx-auto w-full rounded-2xl bg-neutral-900 max-md:px-5 max-md:mt-8">
                      <div className="flex gap-5 justify-between">
                        <img
                          loading="lazy"
                          srcSet="e3.png"
                          className="shrink-0 self-start max-w-full aspect-[4.17] w-[100px]"
                        />
                        <img
                          loading="lazy"
                          srcSet="e4.png"
                          className="shrink-0 max-w-full aspect-[0.96] w-[100px]"
                        />
                      </div>
                      <div className="mt-20 text-base leading-6 text-zinc-300 max-md:mt-10 max-md:mr-2">
                        “Taylor is a professional
                        <br />
                        Designer he really helps my
                        <br />
                        business by providing value to
                        <br />
                        my business.
                      </div>
                      <div className="mt-14 text-lg font-bold leading-5 text-white max-md:mt-10">
                        Tim Bailey
                      </div>
                      <div className="mt-2.5 text-sm leading-5 text-zinc-300">
                        SEO Specialist, Theme Junction
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 self-center mt-9">
                <div className="shrink-0 w-2 h-2 bg-amber-500 rounded" />
                <div className="shrink-0 w-2 h-2 rounded bg-zinc-300" />
                <div className="shrink-0 w-2 h-2 rounded bg-zinc-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
