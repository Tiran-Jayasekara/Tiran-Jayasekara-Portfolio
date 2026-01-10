"use client";

import { motion } from "framer-motion";
import Logo from "../logo";

const Header = () => {
  const handleDownloadPDF = () => {
    const googleDriveDirectLink =
      "https://drive.google.com/file/d/100EmVpkjbPI6DWqkLrpkNJjx8KRB5LZZ/view?usp=sharing"
    window.open(googleDriveDirectLink, "_blank");
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      <div className="container">
        <nav className="py-7">
          <div className="flex items-center gap-4 sm:gap-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Logo />
            </motion.div>
            <motion.button
              onClick={handleDownloadPDF}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group bg-transparent"
            >
              <motion.div className="absolute inset-0 bg-primary translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />

              <span className="relative z-10 text-xl font-medium text-black group-hover:text-white transition-colors duration-300">
                Download PDF Resume
              </span>
            </motion.button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;