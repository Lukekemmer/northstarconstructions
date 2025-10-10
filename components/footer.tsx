import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <section className="bg-black py-16 px-5">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-16">
            <div className="max-w-xs">
              <Image src="/logo.png" alt="Logo" width={150} height={100} />
              <p className="text-xs text-white/80 mt-4">
                <span className="font-bold">North Star Constructions</span> leads in the
                industry with a strong commitment to quality, safety and excellence in
                every project we undertake.
              </p>
              <Button className="mt-8 text-xs">
                Get In Touch <ArrowRight />
              </Button>
            </div>
            <div className="flex-1 flex flex-col lg:flex-row justify-end gap-8">
              <div className="flex flex-col gap-2">
                <p className="text-sm text-white">Address</p>
                <p className="text-sm text-white/70">150 Moss Dr, Debary, FL 32713 USA</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm text-white">Email Address</p>
                <p className="text-sm text-white/70">nsconstructions07@gmail.com</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm text-white">Phone Number</p>
                <p className="text-sm text-white/70">+1 (972) 460-2957</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#292929] py-3 px-5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-center text-center md:justify-between">
            <p className="text-white/70 text-xs">© 2007-2025, All Rights Reserved</p>
            <div className="flex justify-center max-md:mt-1 items-center gap-4 *:text-white/70 *:text-xs">
              <p>Privacy policy</p>
              <p>Sitemap</p>
              <p>Terms of Use</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
