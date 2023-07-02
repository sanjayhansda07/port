import { motion } from "framer-motion";
import React from "react";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <div id="about">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>OverView</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        Hello, my name is Shishir Chaurasiya, and I am starting a career in Web Designing and Development. I enjoy creating interactive and responsive websites. Please get in touch with me if you have any suggestions.
      </motion.p>
    </div>
  );
};

export default SectionWrapper(About, "about");
