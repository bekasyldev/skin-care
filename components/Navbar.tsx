import { links } from "@/constants/data";
import { Button } from "./ui/button";
import { Search, ShoppingBag, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-row px-20 py-5 bg-[#F2F9F0] ">
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
        <ShoppingBag />
        <User />
      </div>
    </nav>
  );
};

export default Navbar;
