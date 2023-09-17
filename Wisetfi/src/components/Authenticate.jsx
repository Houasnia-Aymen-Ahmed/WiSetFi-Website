import React from "react";
import styles from "../style";
import { NavBar, Footer } from "../utils";
import { useState } from "react";
import { Description, Signin, Register } from "./Auth";

const Authenticate = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = () => {
    setSelectedOption(event.target.value);
  };
  const [showLogin, setShowLogin] = useState(true);
  const [translateLogin, settranslateLogin] = useState(true);
  const handleCreateOneClick = () => {
    event.preventDefault();
    settranslateLogin(false);
    setTimeout(() => {
      setShowLogin(false);
    }, 1000);
  };
  const handleSignInClick = () => {
    event.preventDefault();
    settranslateLogin(true);
    setTimeout(() => {
      setShowLogin(true);
    }, 1000);
  };
  return (
    <div className="bg-gradient-to-r from-[#304a6c] to to-[#163759] w-full md:h-fit overflow-hidden">
      <div
        className={` fixed w-full z-[999] ${styles.paddingX} ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>
      <div className={` mt-16 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <section
            className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
          >
            <div className=" w-full flex rounded-[20px] sm:px-5 py-3 glass h-full ">
              <div className="w-full flex md:flex-row flex-col items-center my-5 relative z-[1]">
                <Description />
                <div className="w-full flex sm:p-3 justify-center md:h-[600px] ">
                  {showLogin
                    ? Signin(translateLogin, handleCreateOneClick)
                    : Register(
                        translateLogin,
                        selectedOption,
                        handleOptionChange,
                        handleSignInClick
                      )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Authenticate;
