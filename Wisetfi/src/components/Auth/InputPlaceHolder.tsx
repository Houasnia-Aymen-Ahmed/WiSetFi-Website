import React from "react";

interface IPHProps {
  img: string;
  hint: string;
  name: string;
  type: string;
}

const InputPlaceHolder: React.FC<IPHProps> = ({ img, hint, name, type }) => {
  return (
    <div className="w-full flex flex-row gap-3 items-center">
      <div className="w-[45px] h-[45px] flex items-center justify-center rounded-full glass-morphism">
        <img src={img} alt="" className="w-[20px] h-[20px] object-contain" />
      </div>
      <input
        className="py-3 px-4 block w-full bg-transparent border border-white/10 rounded-xl text-sm focus:border-secondary focus:ring-1 focus:ring-secondary text-white glass-morphism transition-all duration-300 placeholder:text-gray-500 outline-none"
        type={type}
        placeholder={hint}
        id={name}
        name={name}
        required
      />
    </div>
  );
};

export default InputPlaceHolder;
