import React from "react";
import styles from "../../style";
import { user, userPswd } from "../../assets";
import InputPlaceHolder from "./InputPlaceHolder";

function Signin(
  translateLogin: boolean,
  handleCreateOneClick: (event: { preventDefault: () => void }) => void
): React.ReactNode {
  return (
    <div
      id="login"
      className={`${
        translateLogin
          ? "transform translate-x-[0%] opacity-[100%]"
          : "transform translate-x-[100%] opacity-0 "
      } transition-all duration-1000 ease-in-out font-poppins text-white glass-blurred rounded-[20px] p-5 xg:w-[75%] xgg:w-[65%] w-[85%] flex z-[100] `}
    >
      <form
        action="register"
        method="POST"
        className=" w-full flex flex-col justify-between items-center gap-4 "
      >
        <h2
          className={`${styles.heading2} mb-[50px] w-full flex flex-col text-center`}
        >
          Sign In
        </h2>
        <div className=" w-full flex flex-col items-center gap-4">
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
        <p className="text-white my-[10px] mb-[15px] text-[15px]">
          You don&apos;t have an account?{" "}
          <a
            className=" font-semibold "
            href="#"
            onClick={handleCreateOneClick}
          >
            {" "}
            Create one
          </a>
        </p>
      </form>
    </div>
  );
}

export default Signin;
