import styles from "../style";
import { NavBar } from "../utils";
import { info } from "../constants";
import { useEffect, useState } from "react";
/* import TrackingSystem from "../utils/TrackingSystem"; */

const Contact = () => {
  /* const [parentFlexDirection, setParentFlexDirection] = useState("");

  useEffect(() => {
    const parentElement = document.getElementById("parentID");
    console.log(parentElement);
    if (parentElement !== null) {
      const parentStyles = window.getComputedStyle(parentElement);
      const direction = parentStyles.getPropertyValue("flex-direction");
      setParentFlexDirection(direction);
      console.log(parentFlexDirection);
    }
  }, [parentFlexDirection]); */
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
      <div className={` ${styles.paddingX} ${styles.flexStart}`}>
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
                    {flexDirection}
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
      <div className={` ${styles.paddingX} ${styles.flexStart}`}>
        <div
          className={` ${styles.boxWidth} flex flex-col md:flex-row items-center justify-between w-full gap-10
           `}
        >
          <div className="text-center w-1/2">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
              Ready to hire us?
            </h1>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Tell us your needs and we&apos;ll be in touch.
            </p>
          </div>

          <div className="mt-12 w-1/2 ">
            <form>
              <div className="grid gap-4 lg:gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="hs-firstname-hire-us-2"
                      className="block text-sm text-gray-700 font-medium dark:text-white"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="hs-firstname-hire-us-2"
                      id="hs-firstname-hire-us-2"
                      className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hs-lastname-hire-us-2"
                      className="block text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="hs-lastname-hire-us-2"
                      id="hs-lastname-hire-us-2"
                      className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="hs-work-email-hire-us-2"
                    className="block text-sm text-gray-700 font-medium dark:text-white"
                  >
                    Work Email
                  </label>
                  <input
                    type="email"
                    name="hs-work-email-hire-us-2"
                    id="hs-work-email-hire-us-2"
                    autoComplete="email"
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="hs-company-hire-us-2"
                      className="block text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      name="hs-company-hire-us-2"
                      id="hs-company-hire-us-2"
                      className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hs-company-website-hire-us-2"
                      className="block text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Company Website
                    </label>
                    <input
                      type="text"
                      name="hs-company-website-hire-us-2"
                      id="hs-company-website-hire-us-2"
                      className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="hs-about-hire-us-2"
                    className="block text-sm text-gray-700 font-medium dark:text-white"
                  >
                    Details
                  </label>
                  <textarea
                    id="hs-about-hire-us-2"
                    name="hs-about-hire-us-2"
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  ></textarea>
                </div>
              </div>

              <div className="mt-3 flex">
                <div className="flex">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="shrink-0 mt-1.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3">
                  <label
                    htmlFor="remember-me"
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    By submitting this form I have read and acknowledged the{" "}
                    <a
                      className="text-blue-600 decoration-2 hover:underline font-medium"
                      href="#"
                    >
                      Privact policy
                    </a>
                  </label>
                </div>
              </div>

              <div className="mt-6 grid">
                <button
                  type="submit"
                  className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                >
                  Send inquiry
                </button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500">
                  We'll get back to you in 1-2 business days.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
