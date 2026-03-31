import React from "react";

interface ServiceCardProps {
  content: string;
  name: string;
  img: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ content, name, img }) => (
  <div className="flex flex-col justify-start px-8 py-10 rounded-[20px] max-w-[400px] glass-morphism hover:bg-black-gradient transition-all duration-300">
    <div className="flex flex-col items-center">
      <img src={img} alt={name} className="h-[300px] w-full object-cover rounded-[20px]" />
      <div className="flex flex-col w-full">
        <h4 className="font-poppins font-semibold text-[22px] leading-[32px] text-white mt-6">
          {name}
        </h4>
      </div>
    </div>
    <p className="font-poppins font-normal text-start text-[16px] leading-[28px] text-dimWhite mt-6">
      {content}
    </p>
  </div>
);

export default ServiceCard;
