import Link from "next/link";
import Image from "next/image";
import { FOOTER_TEXT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="w-full bg-[#333333]">
      <div className="w-[1090px] mx-auto px-4">
        <div className="grid grid-cols-4 gap-8 mt-16 py-10">
          {/* LOGO */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold text-white">Logo</h2>

            {/* BODY */}
            <div className="mt-6">
              <h3 className="font-semibold mb-1 text-white">Address:</h3>
              <p className="text-sm text-gray-300">USA, California</p>
            </div>
            <div className="mt-6">
              <h3 className="font-semibold mb-1 text-white">Contact:</h3>
              <p className="text-sm text-gray-300 underline">1800 123 4567</p>
              <p className="text-sm text-gray-300 underline">
                email@example.com
              </p>
            </div>

            <div className="flex gap-4 mt-8">
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 hover:bg-gray-700"
              >
                <Image
                  src="/social/Facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 hover:bg-gray-700"
              >
                <Image
                  src="/social/Instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 hover:bg-gray-700"
              >
                <Image src="/social/X.svg" alt="X" width={24} height={24} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 hover:bg-gray-700"
              >
                <Image
                  src="/social/LinkedIn.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 hover:bg-gray-700"
              >
                <Image
                  src="/social/Youtube.svg"
                  alt="Youtube"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white opacity-33 mb-[23px]" />
        <p className="text-sm text-center text-gray-300 pb-10">{FOOTER_TEXT}</p>
      </div>
    </footer>
  );
}
