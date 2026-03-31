import React from "react";
import styles from "../../style";
import { user, userPswd } from "../../assets";
import InputPlaceHolder from "./InputPlaceHolder";

function Signin(
  _translateLogin: boolean,
  handleCreateOneClick: (event: React.MouseEvent) => void
): React.ReactNode {
  return (
    <div
      id="login"
      className="font-poppins text-white glass-morphism rounded-[20px] p-8 xg:w-[75%] xgg:w-[65%] w-[85%] flex z-[100]"
    >
      <form
        action="register"
        method="POST"
        className="w-full flex flex-col justify-between items-center gap-6"
      >
        <h2 className={`${styles.heading2} mb-[20px] w-full text-center`}>
          Sign In
        </h2>
        <div className="w-full flex flex-col items-center gap-6">
          <InputPlaceHolder
            img={user}
            hint="Username"
            name="Username"
            type="text"
          />
          <InputPlaceHolder
            img={userPswd}
            hint="Password"
            name="Password"
            type="password"
          />
        </div>
        <p className="text-white mt-6 text-[15px]">
          You don&apos;t have an account?{" "}
          <a
            className="font-semibold text-secondary hover:text-white transition-colors cursor-pointer"
            onClick={handleCreateOneClick}
          >
            Create one
          </a>
        </p>
      </form>
    </div>
  );
}

export default Signin;
