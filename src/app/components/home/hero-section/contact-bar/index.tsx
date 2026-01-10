"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ContactBar = () => {
  const [contactBarData, setContactBarData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setContactBarData(data?.contactBar);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section>
      <div className="border-t border-softGray">
        <div className="container">
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 md:py-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 md:gap-5 lg:gap-11">
              {contactBarData?.contactItems?.map(
                (value: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href="#!"
                      onClick={(e) => e.preventDefault()}
                      className="flex items-center gap-2 lg:gap-4 text-sm md:text-base group"
                    >
                      <Image
                        src={getImgPath(value?.icon)}
                        alt={value?.type}
                        width={24}
                        height={24}
                        className="min-w-[24px] min-h-[24px] transition-transform group-hover:scale-110"
                      />
                      <h6 className="text-sm md:text-base xl:text-xl transition-colors hover:text-primary">
                        {value?.label}
                      </h6>
                    </Link>
                  </motion.div>
                )
              )}
            </div>

            <div className="flex items-center justify-center md:justify-end gap-4 md:gap-2.5">
              {contactBarData?.socialItems?.map((value: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <Link
                    href={value?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={getImgPath(value?.icon)}
                      alt={value?.platform}
                      width={30}
                      height={30}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactBar;
