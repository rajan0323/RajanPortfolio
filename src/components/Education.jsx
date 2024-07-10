import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { educations } from '../constants';

const EducationCard = ({ education }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={education.date}
    iconStyle={{ background: '#1d1836', color: '#fff' }}
    icon={<img src={education.icon} alt={education.school_name} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />}
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{education.school_name}</h3>
      <p className=''>{education.department}</p>
      <p className=''>{education.cgpa}</p>
    </div>
  </VerticalTimelineElement>
);

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {educations.map((education, index) => (
            <EducationCard key={index} education={education} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, 'education');
