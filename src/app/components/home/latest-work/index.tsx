"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const LatestWork = () => {
  const projects = [
    {
      title: "IManage ERP System",
      client: "Iteq Solutions pvt Ltd",
      slug: "imanage-erp",
      tech: "Next.js, NestJS, MySQL",
      image: "/images/projects/imanage.png",
    },
    {
      title: "Hive ERP System",
      client: "Iteq Solutions pvt Ltd",
      slug: "hive-erp",
      tech: "Vue.js, Node.js, MySQL",
      image: "/images/projects/hive.png",
    },
    {
      title: "Ventura ERP System",
      client: "Inspiring Future Solutions",
      slug: "ventura-erp",
      tech: "Angular, .NET, MongoDB",
      image: "/images/projects/ventura.png",
    },
    {
      title: "ABC Bank Management",
      client: "Personal Project",
      slug: "abc-bank",
      tech: "React, Spring Boot, MySQL",
      image: "/images/projects/abc-bank.jpg",
    },
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section>
      <div className="bg-softGray">
        <div className="container">
          <div className="py-16 xl:py-32 ">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-black">
                Projects
              </h2>
              <p className="text-xl text-orange-500 font-medium">( 04 )</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10 xl:gap-y-16">
              {projects.map((value, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="group flex flex-col gap-3 xl:gap-6"
                >
                  <div className="relative overflow-hidden rounded-lg h-[250px] md:h-[350px]">
                    <Image
                      src={getImgPath(value.image)}
                      alt={value.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    <Link
                      href={`https://www.linkedin.com/in/srimal-herath-43903a3451`}
                      className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        className="bg-orange-600 rounded-full p-6 shadow-xl"
                      >
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </motion.div>
                    </Link>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <Link href={`/projects/${value.slug}`}>
                        <h5 className="text-2xl font-bold group-hover:text-orange-600 transition-colors text-black">
                          {value.title}
                        </h5>
                      </Link>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="cursor-pointer"
                      >
                        <Image
                          src={getImgPath("/images/icon/right-arrow-icon.svg")}
                          alt="arrow"
                          width={24}
                          height={24}
                        />
                      </motion.div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold uppercase tracking-widest text-orange-600">
                        {value.tech}
                      </span>
                      <span className="text-slate-400">|</span>
                      <p className="text-slate-600 font-medium">
                        Client: {value.client}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
