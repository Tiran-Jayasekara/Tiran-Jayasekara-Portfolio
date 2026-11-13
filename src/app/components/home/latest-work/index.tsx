"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const LatestWork = () => {
  const projects = [
  {
    title: "Bee Tales Blogger",
    client: "Private Client",
    link: "https://github.com/Tiran-Jayasekara/BeeBlog",
    tech: "React.js",
    image: "/images/projects/bee.png",
  },
  {
    title: "PeerWave Fashion",
    client: "PeerWave",
    link: "https://www.linkedin.com/in/tiran-jayasekara-50796028b/overlay/Project/149086670/treasury/?profileId=ACoAAEZxRNcBMdx14PwgB68vL3lQZ_03nBkOx2o",
    tech: "Next.js, Node.js, Express.js, MongoDB, PWA",
    image: "/images/projects/peerwave.png",
  },
  {
    title: "Doggo Tales Blogger",
    client: "Personal Project",
    link: "https://github.com/Tiran-Jayasekara/DoggoTales",
    tech: "Next.js, Tailwind CSS, Ant Design",
    image: "/images/projects/doggotales.png",
  },
  {
    title: "SSK Water Filter System",
    client: "SSK Water Filters",
    link: "https://github.com/Tiran-Jayasekara/SSK_Water?tab=readme-ov-file",
    tech: "React.js, Tailwind CSS, Ant Design",
    image: "/images/projects/sskwater.png",
  },
  {
    title: "Sri Lankan Sign Language Translator",
    client: "Research Project",
    link: "https://github.com/Tiran-Jayasekara/Research",
    tech: "Python, OpenCV, CNN, Machine Learning",
    image: "/images/projects/sign.png",
  },
  {
    title: "Traveler Website",
    client: "Personal Project",
    link: "https://www.linkedin.com/in/tiran-jayasekara-50796028b/overlay/Project/214111408/treasury?profileId=ACoAAEZxRNcBMdx14PwgB68vL3lQZ_03nBkOx2o",
    tech: "Laravel",
    image: "/images/projects/traveller.png",
  },
  {
    title: "Vehicle Rental Mobile App",
    client: "Personal Project",
    link: "https://github.com/Tiran-Jayasekara/Vehicle-Rental-Mobile-Application",
    tech: "Flutter",
    image: "/images/projects/vehicle.png",
  },
  {
    title: "Udadumbara Information Center",
    client: "Personal Project",
    link: "https://www.linkedin.com/in/tiran-jayasekara-50796028b/",
    tech: "Next.js, PWA, Firebase, Express.js, MongoDB",
    image: "/images/projects/udadumbara.png",
  },
  {
    title: "Kelsen Wordaddin Application",
    client: "Kelsen Group",
    link: "https://www.linkedin.com/in/tiran-jayasekara-50796028b/",
    tech: "React Js , Node.js, Nest js, PostgreSQL, Microservices , lanchain, AWS",
    image: "/images/projects/kelsen.png",
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
              <p className="text-xl text-orange-500 font-medium">( 06 )</p>
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
                      href={`${value.link}`}
                      target="_blank" rel="noopener noreferrer"
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
                      <Link href={`${value.link}`} target="_blank" rel="noopener noreferrer">
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
