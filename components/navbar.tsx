import { navItems } from "@/lib/constants";
//import { rightNavItems } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import { NavbarActions } from "./navbar-actions";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[182px] pointer-events-none">
      {/* Top Banner - EVENT */}
      <div className="absolute top-0 w-full h-[41px] bg-[#4A4C6C] z-20 pointer-events-auto flex items-center justify-center">
        <p className="text-center text-sm text-white font-medium">
          New here? Save 20% with code: YR24
        </p>
      </div>

      <div className="absolute inset-0 bg-background/0 backdrop-blur-md mask-gradient-b pointer-events-auto" />
      <div className="relative w-full pl-8.75 pr-8.75 pt-[112px] pointer-events-auto">
        <div className="flex justify-start items-center h-17.5 gap-6">
          {/* LOGO */}
          <div className="shrink-0">
            <Link href="/">
              <Image
                src="/Logo.svg"
                alt="Logo"
                width={30}
                height={30}
                priority
              />
            </Link>
          </div>

          {/* NAV */}
          <div className="hidden md:block">
            <div className="flex items-start gap-6">
              {navItems.map((item, index) => (
                <Link
                  className="text-foreground hover:text-primary py-2 text-sm font-medium transition-colors duration-300 no-underline hover:underline"
                  key={`${item.name}-${index}`}
                  href={item.href}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT GROUP */}
          <div className="ml-auto hidden md:block">
            <NavbarActions />
          </div>
        </div>
      </div>
    </nav>
  );
}
