import { motion } from "framer-motion";
import styles from "../style";
import { Footer, NavBar } from "../utils";
import { info } from "../constants";
import { useEffect, useState } from "react";
import HirePlaceHolder from "./Contact/HirePlaceHolder";
import FeedbackPlaceHolder from "./Contact/FeedbackPlaceHolder";
import { feedbackContact, hireus } from "../assets";

const Contact = () => {
  const [flexDirection, setFlexDirection] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const element = document.getElementById("parentID");
      if (element != null) {
        const stylesObj = window.getComputedStyle(element);
        const newFlexDirection = stylesObj.getPropertyValue("flex-direction");
        setFlexDirection(newFlexDirection);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-[#00040f] w-full overflow-hidden min-h-screen relative">
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
      <div className="absolute z-[0] w-[40%] h-[40%] -left-[20%] top-0 pink__gradient" />

      <div className={`fixed w-full z-[999] ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <div className={`mt-40 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div id="parentID" className="flex flex-col md:flex-row items-center justify-between py-10 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[15px] glass-morphism p-2"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12971.42259065486!2d6.26466016921207!3d35.63128500215979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f4053b381368a5%3A0x1465a60d1cdbcccb!2sEcole%20Nationale%20Sup%C3%A9rieure%20en%20Energies%20Renouvelables%2C%20Environnement%20et%20D%C3%A9veloppement%20Durable!5e0!3m2!1sfr!2sdz!4v1694381662877!5m2!1sfr!2sdz"
                className="rounded-[15px] w-[300px] h-[225px] xs:w-[400px] xs:h-[300px] sm:w-[600px] sm:h-[450px]"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`${
                flexDirection === "row"
                  ? "grid lg:grid-cols-2 md:grid-cols-1 "
                  : "grid sm:grid-cols-2"
              } gap-4`}
            >
              {info.map((item) => (
                <div key={item.id} className="p-5 flex flex-col gap-2 glass-morphism rounded-xl">
                  <h4 className="font-poppins font-semibold text-[16px] text-gradient uppercase text-center">
                    {item.title}
                  </h4>
                  <p className="font-poppins font-normal text-[15px] text-white text-center">
                    {item.value}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className={`my-40 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} flex flex-col md:flex-row-reverse items-center justify-between gap-10`}>
          <div
            style={{ backgroundImage: `url(${hireus})` }}
            className={`${flexDirection === "row" ? "md:w-1/2" : "h-[300px]"} w-full self-stretch bg-no-repeat bg-cover rounded-[15px] overflow-hidden`}
          >
            <div className="w-full h-full flex flex-col items-center justify-center backdrop-blur-sm bg-black/40 rounded-[15px] ">
              <h1 className="text-3xl font-bold text-white sm:text-4xl text-center">
                Ready to hire us?
              </h1>
              <p className="mt-1 text-slate-200">
                Tell us your needs and we&apos;ll be in touch.
              </p>
            </div>
          </div>

          <div className="mt-12 md:mt-0 md:w-1/2 w-full self-stretch glass-morphism p-8 rounded-[15px]">
            <form>
              <div className="grid gap-4 lg:gap-6">
                <HirePlaceHolder />
              </div>
              <div className="mt-6 grid">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-gradient text-primary font-bold rounded-md py-3 px-4 transition duration-300"
                >
                  Send
                </motion.button>
              </div>
              <div className="mt-3 text-center">
                <p className="text-sm text-gray-400">
                  We&apos;ll get back to you in 1-2 business days.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className={`my-40 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} flex flex-col md:flex-row items-center justify-between gap-10`}>
          <div
            style={{ backgroundImage: `url(${feedbackContact})` }}
            className={`${flexDirection === "row" ? "md:w-1/2" : "h-[300px]"} w-full self-stretch bg-no-repeat bg-cover rounded-[15px] overflow-hidden`}
          >
            <div className="w-full h-full flex flex-col items-center justify-center backdrop-blur-sm bg-black/40 rounded-[15px] ">
              <h1 className="text-3xl font-bold text-white sm:text-4xl text-center">
                We care about your feedback
              </h1>
              <p className="mt-1 text-slate-200">
                Take a moment to help us improve
              </p>
            </div>
          </div>

          <div className="mt-12 md:mt-0 md:w-1/2 w-full self-stretch glass-morphism p-8 rounded-[15px]">
            <form>
              <div className="grid gap-4 lg:gap-6">
                <FeedbackPlaceHolder />
              </div>
              <div className="mt-6 grid">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-gradient text-primary font-bold rounded-md py-3 px-4 transition duration-300"
                >
                  Send
                </motion.button>
              </div>
              <div className="mt-3 text-center">
                <p className="text-sm text-gray-400">
                  Thank you for helping us, your review will be taken into consideration
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
