import { motion } from "framer-motion";
import React from "react";
import { styles } from "../styles";
import { github, website } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { nanoid } from "nanoid";

const ProjectCard = ({
  name,
  img,
  description,
  tags,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <div className="bg-tertiary p-1 rounded-xl ">
      <div className="relative">
        <img
          src={img}
          alt={name}
          width="300"
          height="250"
          className="w-full object-fill rounded-xl"
        />
        {/* <iframe title={name} src={live_demo_link} width="100%" height='400' className="w-full h-full object-fill rounded-2xl" loading="lazy"  allow="fullscreen"  ></iframe> */}
        <div className="absolute inset-0 flex justify-between m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="github"
              className="w-1/2 h=1/2 object-contain"
            />
          </div>
          <div
            onClick={() => window.open(live_demo_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={website}
              alt="website"
              className="w-1/2 h=1/2 object-contain"
            />
          </div>
        </div>
      </div>
      <div className="mt-5 px-4">
        <h3 className="text-[#0056d2] font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>
      <div className="my-4 px-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={nanoid()} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};
const Works = () => {
  return (
    <>
      <motion.div id="works" variants={textVariant()}>
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The projects listed below demonstrate my abilities and skills through
          real-world examples of my work. Each project has a brief description
          and links to code repositories and live demos.
        </motion.p>
      </div>
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 ">
        {projects.map((project, index) => (
          <ProjectCard key={nanoid()} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
