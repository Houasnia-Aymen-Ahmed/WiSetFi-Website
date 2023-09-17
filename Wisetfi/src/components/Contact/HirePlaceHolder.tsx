import React from "react";
import { hirePlaceHolders } from "../../constants";

const HirePlaceHolder = () => {
  const placeHolder = (val1: number, val2: number) => {
    return hirePlaceHolders
      .filter((_, index) => index === val1 || index === val2)
      .map((item) => {
        return (
          <div key={item.id}>
            <label
              htmlFor={item.name}
              className="block text-sm text-gray-700 font-medium dark:text-white"
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
                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 text-white"
              />
            ) : (
              <textarea
                id="hs-about-hire-us-2"
                name="hs-about-hire-us-2"
                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 text-white"
              ></textarea>
            )}
          </div>
        );
      });
  };

  return (
    <React.Fragment>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
        {placeHolder(0, 1)}
      </div>
      <div>{placeHolder(2, 2)}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
        {placeHolder(3, 4)}
      </div>
      <div>{placeHolder(5, 5)}</div>
    </React.Fragment>
  );
};

export default HirePlaceHolder;
