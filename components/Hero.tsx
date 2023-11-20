import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="flex items-center justify-center flex-col h-screen border gap-6 bg-[#F2F9F0]">
      <h1 className="text-5xl font-semibold text-center">
        Discover Your Perfect Skin <br className="mb-4" /> Care Routine
      </h1>
      <p>
        Achieve healthy and radiant skin with our premium selection of skin care
        products.
      </p>
      <div className="space-x-2">
        <Button className="bg-[#688376] text-white w-[150px] ">Shop</Button>
        <Button className="" variant={"outline"}>
          Learn
        </Button>
      </div>
    </section>
  );
};

export default Hero;
