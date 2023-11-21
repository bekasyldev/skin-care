import { links } from "@/constants/data";
import { Button } from "./ui/button";
import { Search, ShoppingBag, User } from "lucide-react";
import MaxWidthWrapper from "./MaxwidthWrapper";
import Cart from "./Cart";

const Navbar = () => {
  return (
    <nav className="bg-[#F2F9F0]">
      <MaxWidthWrapper className="py-5 flex items-center justify-between flex-row">
        <div>
          <span className="font-bold text-xl">GlowGenics</span>
        </div>
        <div>
          <ul className="flex flex-row gap-x-3">
            {links.map((link) => (
              <li key={link.name}>{link.name}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row gap-x-5">
          <Search />
          <User />
          <Cart />
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
