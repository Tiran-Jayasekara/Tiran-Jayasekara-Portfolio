"use client"; // Required for Framer Motion

import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const name = "Srimal Herath";

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Time between each letter
      delayChildren: 0.5,
    },
  },
};

const letterVariants: Variants = {
  hidden: {
    opacity: 0,
    rotateX: -90,
    y: 20,
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      // This forces the rotation to repeat along with the container
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 4, // This should be: (staggerChildren * name.length) + stayVisibleTime
    },
  },
};

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-20 lg:pt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left"
          >
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                <span className="flex items-center justify-center lg:justify-start gap-4">
                  Hello
                  <motion.div
                    animate={{ rotate: [0, 20, 0, 20, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      repeatDelay: 1,
                    }}
                    className="inline-block"
                  >
                    <Image
                      src={getImgPath("/images/home/banner/wave-icon.svg")}
                      alt="wave-icon"
                      width={62}
                      height={62}
                      className="w-10 h-10 lg:w-16 lg:h-16"
                    />
                  </motion.div>
                </span>
                <span className="block">
                  I'm{" "}
                  <motion.span
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-flex text-slate-900 [perspective:1000px]"
                    // Remove the transition prop from here entirely
                  >
                    {name.split("").map((char, index) => (
                      <motion.span
                        key={index}
                        variants={letterVariants}
                        className="inline-block origin-bottom transform-style-preserve-3d"
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.span>
                </span>
              </h1>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              I'm a{" "}
              <span className="text-rose-400 underline decoration-rose-200">
                Senior Software Engineer
              </span>{" "}
              based in Kandy, Sri Lanka. I specialize in architecting
              high-performance ERP systems and scalable full-stack applications
              through clean code and modern engineering practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 overflow-hidden rounded-[2rem] shadow-2xl max-w-[400px] lg:max-w-none mx-auto">
              <Image
                src={getImgPath("/images/home/banner/profile3.jpeg")}
                alt="Srimal Herath Profile"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl -z-1 opacity-50 hidden lg:block"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
