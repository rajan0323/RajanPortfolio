import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <div className='bg-black-200 p-6 sm:p-10 rounded-3xl w-full max-w-xs mx-auto'>
    <p className='text-white font-black text-[24px] sm:text-[48px]'>"</p>
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[16px] sm:text-[18px]'>{testimonial}</p>
      <div className='mt-4 sm:mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[14px] sm:text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[10px] sm:text-[12px]'>
            {designation} of {company}
          </p>
        </div>
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover'
          loading="lazy"
        />
      </div>
    </div>
  </div>
);

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px] sm:min-h-[300px]`}>
        <div>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </div>
      </div>
      <div className='-mt-12 sm:-mt-20 pb-8 sm:pb-14 ${styles.paddingX} flex flex-wrap gap-4 sm:gap-7'>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
