import React from "react";


const InputPlaceHolder = ({img, hint, name, type}) => {
  return (
    <div className="w-full flex flex-row gap-3 items-center  ">
      <img src={img} alt="" className="w-[35px] h-[30px]" />
      <input
        className=" py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 text-white"
        type={type}
        placeholder={hint}
        id={name}
        name={name}
        required
      />
    </div>
  );
};

export default InputPlaceHolder