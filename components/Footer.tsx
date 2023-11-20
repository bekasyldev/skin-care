import React from "react";
import Email from "./Email";

const Footer = () => {
  return (
    <section className="p-20 border border-black h-[40vh] bg-[#F2F9F0]">
      <div className="flex flex-row justify-between">
        <div>
          <span className="font-semibold text-xl">GlowGenics</span>
        </div>
        <div className="space-y-4">
          <span className="font-semibold semibold">Subscribe</span>
          <Email title="Subscribe" />
          <p className="text-xs">
            By subscribing you agree to our Privacy Policy
          </p>
        </div>
      </div>
      <hr className="mt-14 mb-6" />
      <div className="flex flex-row justify-between">
        <ul className="text-xs flex-row flex gap-2">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Cookies Settings</li>
        </ul>
        <p className="text-xs">© 2023 Relume. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
