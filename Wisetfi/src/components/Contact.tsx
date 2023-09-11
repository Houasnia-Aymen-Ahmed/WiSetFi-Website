import styles from "../style";
import { Footer, NavBar } from "../utils";
import { info } from "../constants";
import { useEffect, useState } from "react";
import HirePlaceHolder from "./Contact/HirePlaceHolder";
import { hireus } from "../assets";
/* import TrackingSystem from "../utils/TrackingSystem"; */

const Contact = () => {
  const [flexDirection, setFlexDirection] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const element = document.getElementById("parentID");
      if (element != null) {
        const styles = window.getComputedStyle(element);
        const newFlexDirection = styles.getPropertyValue("flex-direction");
        setFlexDirection(newFlexDirection);
        console.log(flexDirection);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [flexDirection]);

  return (
    <div className="bg-gradient-to-r from-[#304a6c] to to-[#163759] w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>
      <div className={`my-20 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <TrackingSystem /> */}
          <div
            id="parentID"
            className={`flex flex-col md:flex-row items-center justify-between py-10 `}
          >
            <div className="rounded-[15px] ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12971.42259065486!2d6.26466016921207!3d35.63128500215979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f4053b381368a5%3A0x1465a60d1cdbcccb!2sEcole%20Nationale%20Sup%C3%A9rieure%20en%20Energies%20Renouvelables%2C%20Environnement%20et%20D%C3%A9veloppement%20Durable!5e0!3m2!1sfr!2sdz!4v1694381662877!5m2!1sfr!2sdz"
                className="border-2 border-black rounded-[15px] w-[300px] h-[225px] xs:w-[400px] xs:h-[300px] sm:w-[600px] sm:h-[450px] "
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div
              className={`${
                flexDirection === "row"
                  ? "grid lg:grid-cols-2 md:grid-cols-1 "
                  : "grid sm:grid-cols-2"
              }`}
            >
              {info.map((item) => (
                <div key={item.id} className="p-5">
                  <h4 className="font-poppins font-semibold sm:text-[25px] text-[15px] xs:leading-[25px] leading-[20px] text-gradient uppercase text-center ">
                    {item.title}
                  </h4>
                  <p className="font-poppins font-normal sm:text-[25px] text-[15px] xs:leading-[55px] leading-[45px] text-white text-center">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={` my-20 ${styles.paddingX} ${styles.flexStart}`}>
        <div
          className={` ${styles.boxWidth} flex flex-col md:flex-row-reverse items-center justify-between gap-10
           `}
        >
          <div
            className={` ${
              flexDirection === "row" ? "md:w-1/2" : "h-[300px]"
            }  self-stretch bg-no-repeat bg-cover rounded-[15px] bg-[url('${hireus}')]`}
          >
            <div className="w-full h-full flex flex-col items-center justify-center backdrop-blur-sm bg-black/40 rounded-[15px] ">
              <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                Ready to hire us?
              </h1>
              <p className="mt-1 text-slate-200">
                Tell us your needs and we&apos;ll be in touch.
              </p>
            </div>
          </div>

          <div className="mt-12 md:w-1/2 self-stretch ">
            <form>
              <div className="grid gap-4 lg:gap-6">
                <HirePlaceHolder />
              </div>

              <div className="mt-6 grid">
                <button
                  type="submit"
                  className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                >
                  Send
                </button>
              </div>
              <div className="mt-3 text-center">
                <p className="text-sm text-gray-400">
                  We'll get back to you in 1-2 business days.
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
