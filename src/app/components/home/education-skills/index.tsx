"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const EducationSkills = () => {
  const education = [
    {
      title: "BSc (Hons) in Software Engineering",
      description: "Cardiff Metropolitan University",
    },
    {
      title: "Higher National Diploma in Software Engineering",
      description: "NIBM (National Institute of Business Management)",
    },
    {
      title: "GCE Advanced Level (Science Stream)",
      description: "Kingswood College, Kandy",
    }
  ];

  const skills = [
    "Next.js", "Vue.js", "Nest JS", "Express JS", "Angular", "React JS", 
    "Spring Boot", ".Net Core", "PHP", "Python", "Java", "Django", 
    "Automation Testing", "Selenium", "Cypress", "Jmeter", "Azure", 
    "MS SQL", "MySQL", "MongoDB", "TypeScript", "Tailwind CSS", "Git"
  ];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  return (
    <section>
      <div className="border-t border-softGray overflow-hidden bg-white">
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
              <h2 className="text-3xl md:text-5xl font-bold">Education & Skills</h2>
              <p className="text-xl text-orange-500 font-medium">( 03 )</p>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-start gap-10 xl:gap-20">
              <div className="w-full lg:max-w-md flex flex-col gap-8">
                {education.map((value, index) => (
                  <motion.div 
                    key={index} 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeInUp}
                    className="flex items-start gap-6"
                  >
                    <div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border border-black bg-white flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <h5 className="text-xl font-bold">{value.title}</h5>
                      <p className="font-normal text-slate-600">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex-1">
                <motion.div 
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex flex-wrap gap-3"
                >
                  {skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.1, backgroundColor: "#FE4300", color: "#fff" }}
                      className="px-4 py-2 border border-softGray rounded-full text-sm md:text-base font-medium text-black transition-colors cursor-default bg-slate-50 shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;