import React from "react";

interface IPHProps{
  img: string;
  hint: string;
  name: string;
  type: string;
}

const InputPlaceHolder: React.FC<IPHProps> = ({img, hint, name, type}) => {
  return (
    <div className="w-full flex flex-row gap-3 items-center">
      <img src={img} alt="" className="w-[35px] h-[30px]" />
      <input
        className=" w-full placeholder:text-dimWhite bg-transparent border rounded-[7px] p-2"
        type={type}
        placeholder={hint}
        id={name}
        name={name}
        required />
    </div>
  );
};

export default InputPlaceHolder