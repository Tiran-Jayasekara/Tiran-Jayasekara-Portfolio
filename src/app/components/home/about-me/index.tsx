"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const AboutMe = () => {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section>
      <div className="relative bg-softGray py-10 md:py-32 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-0 w-full px-9"
        >
          <Image
            src={getImgPath("/images/home/about-me/resume-bg-img.svg")}
            alt="resume-bg-img"
            width={1200}
            height={348}
            className="w-full"
          />
        </motion.div>

        <div className="relative z-10">
          <div className="container"> 
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex items-center justify-between gap-2 border-b border-black pb-7"
            >
              <h2>About Me</h2>
              <p className="text-xl text-primary">( 01 )</p>
            </motion.div>

            <div className="pt-10 xl:pt-16 flex gap-10 items-center justify-between">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: -20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="w-[303px] h-[440px] hidden lg:flex"
              >
                <Image
                  src={getImgPath("/images/home/about-me/about-banner-img.svg")}
                  alt="about-banner"
                  width={303}
                  height={440}
                  className="w-full h-full"
                />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
                className="w-full lg:max-w-2xl flex-1"
              >
                <motion.p variants={fadeInUp} className="leading-relaxed justify-center lg:justify-start lg:text-left ">
                  I am a dedicated and results-driven Senior Software Engineer
                  with over 4 years of professional experience in full-stack
                  application development. My journey has taken me from building
                  specialized library systems to architecting complex,
                  enterprise-level ERP solutions (like Ventura and Imanage). I
                  specialize in building scalable, high-concurrency applications
                  using a versatile tech stack including Next.js, Vue.js,
                  NestJS, and .NET Core. With a deep understanding of both SQL
                  (MySQL, MS SQL) and NoSQL (MongoDB) databases, I focus on
                  designing robust architectures that are both maintainable and
                  secure. Beyond development, I am highly proficient in Quality
                  Assurance and Automation Testing, utilizing tools like
                  Selenium, Cypress, and JMeter to ensure production-grade
                  reliability. I am passionate about the entire software
                  development lifecycle—from initial logic to cloud
                  deployment—and I am continuously focused on pushing the
                  boundaries of what web and mobile technologies can achieve.
                </motion.p>

                <motion.div
                  variants={staggerContainer}
                  className="grid grid-cols-3 py-10 xl:py-16 gap-5 border-b border-mistGray"
                >
                  {[
                    { count: "04", label: "Years of experience" },
                    { count: "10+", label: "Happy Clients" },
                    { count: "20+", label: "Project Completed" },
                  ].map((item, i) => (
                    <motion.div key={i} variants={fadeInUp}>
                      <h3 className="text-2xl font-bold">{item.count}</h3>
                      <p className="text-base md:text-lg text-black">
                        {item.label}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="pt-8 xl:pt-14 flex flex-col sm:flex-row items-center gap-4"
                >
                  <div className="flex items-center gap-3.5">
                    <Image
                      src={getImgPath("/images/icon/lang-icon.svg")}
                      alt="lang-icon"
                      width={30}
                      height={30}
                    />
                    <p className="text-base xl:text-xl text-black font-medium">
                      Languages
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center items-center gap-2.5">
                    {["English", "Sinhala"].map((lang) => (
                      <motion.p
                        key={lang}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white py-2 md:py-3.5 px-4 md:px-5 w-fit rounded-full text-base xl:text-xl shadow-sm"
                      >
                        {lang}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
