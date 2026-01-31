"use client";

import { use, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroSection() {
  const { scrollY } = useScroll();

  //    Map pixels scrolled (0px to 600px) to animation values.
  //    [0, 600] means "from the top until we've scrolled 600px down"
  const shoeY = useTransform(scrollY, [0, 600], [0, -150]);
  const bgTextY = useTransform(scrollY, [0, 600], [0, 250]);
  const label1Y = useTransform(scrollY, [0, 700], [0, 1000]);
  const label2Y = useTransform(scrollY, [0, 700], [0, -700]);
  const shoeScale = useTransform(scrollY, [0, 600], [1, 0.5]);
  const textScale = useTransform(scrollY, [0, 300], [1, 0]);
  const bgScale = useTransform(scrollY, [0, 600], [1, 0.2]);

  return (
    <section className="relative w-[1090px] h-[578px] bg-gray-100 mx-auto overflow-hidden">
      <motion.div
        style={{ y: bgTextY, scale: bgScale }}
        className="absolute inset-0 flex items-center justify-center z-0"
      >
        <h1 className="text-[300px] font-highlight w-full text-center tracking-normal font-bold text-[#4A4C6C2B] select-none">
          SHOP ALL
        </h1>
      </motion.div>

      <motion.div
        style={{ y: shoeY, scale: shoeScale }}
        className="absolute bottom-[-20px] left-[43px] z-0"
      >
        <div className="w-[500px] h-[150px] relative">
          <Image
            src="/hero/Shadow.svg"
            alt="Shadow Image"
            fill
            className="object-contain z-10 relative"
            priority
          />
        </div>
      </motion.div>

      <motion.div
        style={{ y: label1Y, scale: textScale }}
        className="absolute top-[20px] left-[43px] z-10 w-[240px] text-right"
      >
        <p className="text-[24px] tracking-[0.15em] font-highlight leading-none mb-2">
          ADJUSTABLE
        </p>
      </motion.div>

      <motion.div
        style={{ y: label2Y, scale: textScale }}
        className="absolute top-[469px] left-[876px] z-10 w-[100px] text-right"
      >
        <p className="text-[24px] tracking-[0.15em] font-highlight leading-none mb-2">
          SOFT PAD
        </p>
      </motion.div>

      <motion.div
        style={{ y: shoeY, scale: shoeScale }}
        className="w-[753px] h-[552px] relative mx-auto"
      >
        <motion.div
          className="w-full h-full relative cursor-pointer"
          /*whileHover={{ scale: 0.95 }}*/
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Image
            src="/hero/SportShoes.svg"
            alt="Hero Image"
            fill
            className="object-contain z-10 relative"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
