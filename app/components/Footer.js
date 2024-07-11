import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-center items-center px-16 pt-12 pb-6 text-center bg-zinc-950 leading-[150%] max-md:px-5">
      <div className="flex flex-col items-center max-w-full w-[557px]">
        <img
          loading="lazy"
          srcSet="logo.png"
          className="aspect-square w-[75px]"
        />
        <div className="flex gap-5 self-stretch mt-10 text-base font-bold text-white whitespace-nowrap max-md:flex-wrap">
          <div className="grow">Services</div>
          <div>Works</div>
          <div>Resume</div>
          <div>Skills</div>
          <div>Testimonials</div>
          <div>Contact</div>
        </div>
        <div className="flex gap-1 mt-10 text-base">
          <div className="grow font-light text-yellow-500">
            © 2024 All rights reserved by{" "}
          </div>
          <div className="flex-auto text-yellow-400">ShawonThemes</div>
        </div>
      </div>
    </div>
  );
}
