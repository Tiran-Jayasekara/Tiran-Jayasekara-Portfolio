"use client";

import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const certificates = [
  {
    title: "Automation Testing  Certification",
    issuer: "Imperial Institute",
    year: "2024",
    image: "/images/certificates/auto.jpg",
  },
  {
    title: "English  Certification",
    issuer: "British way English Academy",
    year: "2023",
    image: "/images/certificates/english.jpg",
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

const CertificatesSection = () => {
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
              src={getImgPath("/images/home/education-skill/edu-skill-vector.svg")}
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
              <h2 className="text-3xl md:text-5xl font-bold">
                Certificates
              </h2>
               <p className="text-xl text-primary font-medium">( 04 )</p>
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
                  className="bg-slate-50 border border-softGray rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
                >
                  <Image
                    src={getImgPath(cert.image)}
                    alt={cert.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-6 flex flex-col gap-2">
                    <h5 className="text-xl font-bold">
                      {cert.title}
                    </h5>
                    <p className="text-slate-600">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-slate-400">
                      {cert.year}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
