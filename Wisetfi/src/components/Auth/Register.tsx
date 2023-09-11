import React from "react";
import styles from "../../style";
import { userFilter, userType } from "../../assets";
import InputPlaceHolder from "./InputPlaceHolder";
import { placeholders } from "../../constants";

const Register = (
  translateLogin: boolean,
  selectedOption: string,
  handleOptionChange: (event: {
    target: { value: React.SetStateAction<string> };
  }) => void,
  handleSignInClick: (event: { preventDefault: () => void }) => void
): React.ReactNode => {
  return (
    <div
      id="register"
      className={`${
        translateLogin
          ? " transform translate-x-[100%] opacity-0"
          : "transform translate-x-[0%] opacity-[100%] "
      } transition-all duration-1000 ease-in-out font-poppins text-white glass-blurred rounded-[20px] p-5 xg:w-[75%] xgg:w-[65%] w-[85%] flex justify-center z-[100] `}
    >
      <form
        action="register"
        method="POST"
        className="w-full flex flex-col justify-between items-center gap-4"
      >
        <h2 className={`${styles.heading2} mb-[50px] w-fit text-center`}>
          Sign Up
        </h2>
        <div className=" w-full flex flex-col justify-around items-center gap-4 ">
          {placeholders.map((placeholder) => (
            <InputPlaceHolder key={placeholder.id} {...placeholder} />
          ))}
          <div className="w-full flex flex-row gap-3 items-center">
            <img src={userType} alt="" className="w-[30px] h-[30px]" />
            <select
              value={selectedOption}
              onChange={handleOptionChange}
              className=" py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 text-white "
              id="client-type"
              name="client-type"
              required
            >
              <option value="" disabled selected className="text-gray-400">
                User Type
              </option>
              <option className="text-white" value="Client">
                Client
              </option>
              <option className="text-white" value="Employee">
                Employee
              </option>
            </select>
          </div>
          {selectedOption === "Client" && (
            <div className="w-full flex flex-row gap-3 items-center">
              <img src={userFilter} alt="" className="w-[30px] h-[30px]" />
              <select
                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 text-white "
                id="client-category"
                name="client-category"
              >
                <option
                  value="Client Type"
                  disabled
                  selected
                  className="text-gray-400"
                >
                  Client Type
                </option>
                <option className="text-white" value="Individual">
                  Individual
                </option>
                <option className="text-white" value="Organization">
                  Organization
                </option>
              </select>
            </div>
          )}
        </div>
        <p className="text-white my-[10px] mb-[15px] text-[15px]">
          Already Have An Account?{" "}
          <a className=" font-semibold" href="#" onClick={handleSignInClick}>
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
