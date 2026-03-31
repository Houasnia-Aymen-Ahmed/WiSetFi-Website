import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../style";
import { NavBar, Footer } from "../utils";
import { Description, Signin, Register } from "./Auth";

const Authenticate = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showLogin, setShowLogin] = useState(true);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleCreateOneClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setShowLogin(false);
  };

  const handleSignInClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setShowLogin(true);
  };

  return (
    <div className="bg-[#00040f] w-full min-h-screen overflow-hidden relative">
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
      <div className="absolute z-[0] w-[40%] h-[40%] -left-[20%] top-0 pink__gradient" />

      <div className={`w-full z-[999] ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <div className={`mt-16 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full flex rounded-[20px] sm:px-5 py-3 glass-morphism h-full"
            >
              <div className="w-full flex md:flex-row flex-col items-center my-5 relative z-[1]">
                <Description />
                <div className="w-full flex sm:p-3 justify-center md:h-[600px] overflow-hidden">
                  <AnimatePresence mode="wait">
                    {showLogin ? (
                      <motion.div
                        key="signin"
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="w-full flex justify-center"
                      >
                        {Signin(true, handleCreateOneClick)}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="register"
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="w-full flex justify-center"
                      >
                        {Register(false, selectedOption, handleOptionChange as any, handleSignInClick)}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
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
