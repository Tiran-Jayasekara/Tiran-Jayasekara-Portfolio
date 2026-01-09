"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { 
  SiNextdotjs, SiVuedotjs, SiNestjs, SiExpress, SiAngular, SiReact, 
  SiSpringboot, SiDotnet, SiPhp, SiPython, SiOpenjdk, SiDjango, 
  SiSelenium, SiCypress, SiTestinglibrary,
  SiMysql, SiMongodb, SiTypescript, SiTailwindcss, SiGit , SiJavascript  ,  
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { VscAzureDevops } from "react-icons/vsc";
import { TiVendorMicrosoft } from "react-icons/ti";
import { FaHtml5 } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { SiOracle } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiSwagger } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiArduino } from "react-icons/si";
import { SiAppium } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiCucumber } from "react-icons/si";
import { SiApachejmeter } from "react-icons/si";

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

  const skillCategories = [
  {
    label: "Languages",
    items: [
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "PHP", icon: <SiPhp className="text-[#777BB4]" /> },
      { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
      { name: "Java", icon: <SiOpenjdk className="text-[#ED8B00]" /> },
      { name: "C#", icon: <TbBrandCSharp className="text-[#239120]" /> },
      { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: "SQL / MS SQL", icon: <DiMsqlServer className="text-[#CC2927]" /> },
      { name: "Oracle", icon: <SiOracle className="text-[#F80000]" /> },
    ],
  },
  {
    label: "Frameworks & Platforms",
    items: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Angular", icon: <SiAngular className="text-[#DD0031]" /> },
      { name: "Vue.js", icon: <SiVuedotjs className="text-[#4FC08D]" /> },
      { name: "NestJS", icon: <SiNestjs className="text-[#E0234E]" /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: ".NET Core / Framework", icon: <SiDotnet className="text-[#512BD4]" /> },
      { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
      { name: "Django", icon: <SiDjango className="text-[#092E20]" /> },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "MS SQL Server", icon: <DiMsqlServer className="text-[#CC2927]" /> },
      { name: "Oracle DB", icon: <SiOracle className="text-[#F80000]" /> },
    ],
  },
  {
    label: "Testing & QA",
    items: [
      { name: "Automation Testing", icon: <SiTestinglibrary /> },
      { name: "Selenium", icon: <SiSelenium className="text-[#43B02A]" /> },
      { name: "Cypress", icon: <SiCypress /> },
      { name: "JMeter", icon: <SiApachejmeter /> },
      { name: "Appium", icon: <SiAppium /> },
      { name: "Cucumber", icon: <SiCucumber className="text-[#23D96C]" /> },
      { name: "TestNG", icon: <SiTestinglibrary /> },
    ],
  },

  {
    label: "Tools & DevOps",
    items: [
      { name: "Azure", icon: <VscAzureDevops className="text-[#0078D4]" /> },
      { name: "Swagger", icon: <SiSwagger className="text-[#85EA2D]" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "MS Power Apps", icon: <TiVendorMicrosoft className="text-[#737373]" /> },
      { name: "Arduino", icon: <SiArduino className="text-[#00979D]" /> },
    ],
  },
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
        <div className="container relative z-10 mx-auto px-4">
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
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Education & Skills</h2>
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
                      <h5 className="text-xl font-bold text-slate-900">{value.title}</h5>
                      <p className="font-normal text-slate-600">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex-1 w-full">
                <div className="flex flex-col gap-10">
                  {skillCategories.map((category, catIndex) => (
                    <div key={catIndex} className="space-y-4">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
                        {category.label}
                      </h4>
                      <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-wrap gap-3"
                      >
                        {category.items.map((skill, index) => (
                          <motion.span
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ 
                              scale: 1.05, 
                              backgroundColor: "#FE4300", 
                              color: "#fff",
                              borderColor: "#FE4300"
                            }}
                            className="group flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-sm md:text-base font-medium text-slate-700 transition-all duration-300 cursor-default bg-white shadow-sm"
                          >
                            <span className="text-lg group-hover:text-white transition-colors">
                              {skill.icon}
                            </span>
                            {skill.name}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;