import Image from "next/image";
import React from "react";
import Email from "./Email";

const NewsLetter = () => {
  return (
    <section className="px-20 py-24 h-[80vh] border border-black bg-[#F2F9F0]">
      <div className="border border-black flex-row flex gap-10 h-full flex-1">
        <div className="px-10 py-20 space-y-7">
          <h2 className="text-5xl font-semibold">
            Get Skin Care Tips & <br />
            Offers
          </h2>
          <p>
            Subscribe to our newsletter for the latest skin care tips, offers,
            <br />
            and updates.
          </p>
          <Email title="Join now" />
          <p className="text-xs">
            By joining, you agree to our Terms and Conditions.
          </p>
        </div>
        <div className="h-ful w-[400px] flex justify-center items-center flex-1">
          Image
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
