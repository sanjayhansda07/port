import { motion } from "framer-motion";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles, mainColor } from "../styles";
import { textVariant } from "../utils/motion";

const ServiceCard = ({ service }) => (
  <VerticalTimelineElement contentStyle={{ background: '#1d1836', color: '#0056d2' }}
    contentArrowStyle={{ borderRight: '7px solid #0056d2' }}
    iconStyle={{ background: service.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img src={service.icon} alt={service.company_name}
          className="w-[60%] h-[60%] object-contain" />
      </div>
    }>
    <div>
      <h3 className={`text-[${mainColor}] text-[24px] font-bold`}>{service.title}</h3>

    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {
        service.points.map((point, index) => (
          <li key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'>
            {point}
          </li>
        ))
      }
    </ul>
  </VerticalTimelineElement>
)
const Service = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I offer</p>
        <h2 className={styles.sectionHeadText}>Services</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline >
          {
            services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))
          }

        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Service, "service");
