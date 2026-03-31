import React from 'react'
import { motion } from 'framer-motion'
import { quotes } from "../assets";

interface FeedbackCardProps {
  content: string;
  name: string;
  title: string;
  img: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  content,
  name,
  title,
  img,
}) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 glass-morphism cursor-pointer transition-all duration-300"
  >
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[42.6px] h-[27.6px] object-contain"
    />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10 ">
      {content}
    </p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full border-2 border-secondary" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </motion.div>
);

export default FeedbackCard;
