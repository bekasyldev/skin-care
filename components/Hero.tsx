import React from "react";
import { Button } from "./ui/button";
import MaxWidthWrapper from "./MaxwidthWrapper";

const Hero = () => {
  return (
    <section className="bg-[#F2F9F0]">
      <MaxWidthWrapper className="flex py-24 items-center justify-between flex-row h-screen ">
        <div className="flex flex-col text-left flex-1 space-y-10">
          <h1 className="text-5xl font-semibold tracking-wider">
            Find Your Inner Balance <br className="mb-4" /> for Perfect Skin
          </h1>
          <p className=" tracking-wide">
            Restore and Rejuvenate Your Skin with Our Complete Skincare, <br />
            System, Powered by Advanced Folmules, Proven Ingredients, <br />
            and Unbeatable Results
          </p>
          <Button className="bg-[#688376] text-white rounded-xl w-44">
            Explore Our Products
          </Button>
        </div>
        <div className="flex-1 flex justify-center text-right">Image</div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
