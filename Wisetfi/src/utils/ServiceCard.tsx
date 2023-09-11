import React from "react";
import PropTypes from "prop-types";

interface ServiceCardProps {
  content: string;
  name: string;
  img: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ content, name, img }) => (
  <div className="flex flex-col justify-start px-10 py-12 rounded-[20px] max-w-[400px] feedback-card">
    <div className="flex flex-col items-center">
      <img src={img} alt={name} className=" h-[300px] rounded-[20px]" />
      <div className="flex flex-col">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white mt-3 ">
          {name}
        </h4>
      </div>
    </div>
    <p className="font-poppins font-normal text-start text-[18px] leading-[32px] text-white mt-10">
      {content}
    </p>
  </div>
);

ServiceCard.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ServiceCard;
