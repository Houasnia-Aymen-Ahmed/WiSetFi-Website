import React from "react";
import { hirePlaceHolders } from "../../constants";

const HirePlaceHolder = () => {
  const renderItem = (index: number) => {
    const item = hirePlaceHolders[index];
    if (!item) return null;

    return (
      <div key={item.id} className="w-full">
        <label
          htmlFor={item.name}
          className="block text-sm font-medium text-white mb-2"
        >
          {item.content}
        </label>
        {item.content !== "Details" ? (
          <input
            type={item.type}
            name={item.name}
            id={item.name}
            required={item.required}
            placeholder={item.required === false ? `( Optional )` : ``}
            className="py-3 px-4 block w-full bg-transparent border border-white/10 rounded-xl text-sm focus:border-secondary focus:ring-1 focus:ring-secondary text-white glass-morphism transition-all duration-300 placeholder:text-gray-500 outline-none"
          />
        ) : (
          <textarea
            id="hs-about-hire-us-2"
            name="hs-about-hire-us-2"
            rows={4}
            className="py-3 px-4 block w-full bg-transparent border border-white/10 rounded-xl text-sm focus:border-secondary focus:ring-1 focus:ring-secondary text-white glass-morphism transition-all duration-300 placeholder:text-gray-500 outline-none"
          ></textarea>
        )}
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
        {renderItem(0)}
        {renderItem(1)}
      </div>
      <div>{renderItem(2)}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
        {renderItem(3)}
        {renderItem(4)}
      </div>
      <div>{renderItem(5)}</div>
    </React.Fragment>
  );
};

export default HirePlaceHolder;
