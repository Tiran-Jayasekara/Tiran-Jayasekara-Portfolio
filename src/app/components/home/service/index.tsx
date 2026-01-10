"use client";

import { useState } from "react";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";

const certificates = [
  {
    title: "John keells IT service letter",
    issuer: "John keells",
    year: "2023",
    image: "/images/service-letters/johnkeels.png",
  },
  {
    title: "X-ONT software pvt ltd service letter",
    issuer: "X-ONT software pvt ltd",
    year: "2023",
    image: "/images/service-letters/x-one-software.jpeg",
  },
  {
    title: "EMJ institute service letter",
    issuer: "EMJ institute",
    year: "2020",
    image: "/images/service-letters/emj.jpeg",
  },
 
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const ServiceLetters = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section>
      <div className="border-t border-softGray overflow-hidden bg-white cursor-pointer">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="no-print absolute top-0 left-0 transform -translate-y-1/2"
          >
            <Image
              src={getImgPath(
                "/images/home/education-skill/edu-skill-vector.svg"
              )}
              alt="vector"
              width={260}
              height={170}
            />
          </motion.div>

          <div className="relative z-10 py-16 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 xl:mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold">Service Letters</h2>
              <p className="text-xl text-primary font-medium">( 05 )</p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  onClick={() => setSelectedImage(cert.image)}
                  className="bg-slate-50 border border-softGray rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer"
                >
                  <Image
                    src={getImgPath(cert.image)}
                    alt={cert.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-6 flex flex-col gap-2">
                    <h5 className="text-xl font-bold">{cert.title}</h5>
                    <p className="text-slate-600">{cert.issuer}</p>
                    <p className="text-sm text-slate-400">{cert.year}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center popup-no-hover"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.25 }}
              tabIndex={-1}
              onClick={(e) => e.stopPropagation()}
              className="
          relative bg-white rounded-2xl
          max-w-5xl w-full mx-4
          max-h-[90vh] overflow-y-auto
          outline-none
          focus:outline-none
          focus-visible:outline-none
        "
            >
              <button
                type="button"
                tabIndex={-1}
                onClick={() => setSelectedImage(null)}
                className="
            sticky top-4 ml-auto mr-4 z-20
            bg-black text-white
            w-9 h-9 rounded-full
            flex items-center justify-center
            cursor-pointer

            outline-none
            focus:outline-none
            focus-visible:outline-none

            hover:bg-black
            active:bg-black

            transition-none
          "
              >
                ✕
              </button>

              <div className="p-4">
                <Image
                  src={getImgPath(selectedImage)}
                  alt="Certificate"
                  width={1400}
                  height={2000}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServiceLetters;
