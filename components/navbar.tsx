import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, MenuIcon } from "lucide-react";

const Navbar = () => {
  return (
    <section className="relative max-sm:pt-2">
      <div className="hidden md:flex container mx-auto py-3 px-5">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 text-white text-xs">
            <div>(907) 756-1020</div>
            <div>8502 Preston Rd. Inglewood, Maine 98380</div>
          </div>
        </div>
      </div>
      <div className="border-y border-white/10 py-3">
        <div className="container mx-auto px-5">
          <div className="flex justify-between items-center">
            <div>
              <Image src="/logo.png" alt="logo" width={150} height={150} />
            </div>
            <div className="hidden md:flex justify-end">
              <Button>
                <span>GET IN TOUCH</span>
                <ArrowRight className="text-white" />
              </Button>
            </div>
            <div className="md:hidden">
              <MenuIcon className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
