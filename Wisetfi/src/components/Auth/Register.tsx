import React from "react";
import styles from "../../style";
import { userFilter, userType } from "../../assets";
import InputPlaceHolder from "./InputPlaceHolder";
import { placeholders } from "../../constants";

const Register = (
  _translateLogin: boolean,
  selectedOption: string,
  handleOptionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
  handleSignInClick: (event: React.MouseEvent) => void
): React.ReactNode => {
  return (
    <div
      id="register"
      className="font-poppins text-white glass-morphism rounded-[20px] p-8 xg:w-[75%] xgg:w-[65%] w-[85%] flex justify-center z-[100]"
    >
      <form
        action="register"
        method="POST"
        className="w-full flex flex-col justify-between items-center gap-4"
      >
        <h2 className={`${styles.heading2} mb-[20px] w-fit text-center`}>
          Sign Up
        </h2>
        <div className="w-full flex flex-col justify-around items-center gap-4">
          {placeholders.map((placeholder) => (
            <InputPlaceHolder key={placeholder.id} {...placeholder} />
          ))}
          <div className="w-full flex flex-row gap-3 items-center">
            <img src={userType} alt="" className="w-[30px] h-[30px]" />
            <select
              value={selectedOption}
              onChange={handleOptionChange}
              className="py-3 px-4 block w-full bg-transparent border border-white/20 rounded-md text-sm focus:border-secondary focus:ring-secondary text-white glass-morphism"
              id="client-type"
              name="client-type"
              required
            >
              <option value="" disabled className="bg-primary text-gray-400">
                User Type
              </option>
              <option className="bg-primary text-white" value="Client">
                Client
              </option>
              <option className="bg-primary text-white" value="Employee">
                Employee
              </option>
            </select>
          </div>
          {selectedOption === "Client" && (
            <div className="w-full flex flex-row gap-3 items-center">
              <img src={userFilter} alt="" className="w-[30px] h-[30px]" />
              <select
                className="py-3 px-4 block w-full bg-transparent border border-white/20 rounded-md text-sm focus:border-secondary focus:ring-secondary text-white glass-morphism"
                id="client-category"
                name="client-category"
              >
                <option
                  value="Client Type"
                  disabled
                  className="bg-primary text-gray-400"
                >
                  Client Type
                </option>
                <option className="bg-primary text-white" value="Individual">
                  Individual
                </option>
                <option className="bg-primary text-white" value="Organization">
                  Organization
                </option>
              </select>
            </div>
          )}
        </div>
        <p className="text-white mt-6 text-[15px]">
          Already Have An Account?{" "}
          <a className="font-semibold text-secondary hover:text-white transition-colors cursor-pointer" onClick={handleSignInClick}>
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
