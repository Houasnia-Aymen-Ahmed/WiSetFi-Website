import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import {
  faStar,
  faCreditCard,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import axios from "./api/axios";
import { useState, useEffect } from "react";

const FeatureCard = () => {
  const mapImage = {
    feature01: faStar,
    feature02: faCreditCard,
    feature03: faPaperPlane,
  };
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState("");

  const getApiData = async () => {
    try {
      const res = await axios.get("/features");
      setData(res.data);
    } catch (error) {
      setIsError("" + error);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);
  return isError !== "" ? (
    <div className="flex justify-center text-white text-3xl">
      <div className="text-center glass p-10">
        <h2 className={` text-5xl font-bold text-[#630707] mb-10 `}>
          {isError}
        </h2>
        <p>
          Sorry, Server is down so we couldn't fetch data, please return and try
          again in a few minutes
        </p>
      </div>
    </div>
  ) : (
    data.map((post, index) => {
      const { featureId, content, icon, title } = post;
      return (
        <div
          key={featureId}
          className={`flex flex-row p-6 rounded-[20px] ${
            index !== features.length - 1 ? "mb-6" : "mb-0"
          } feature-card`}
        >
          <div
            id="img"
            className={` hidden xs:flex w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-[#163759] md:bg-[#304a6c] `}
          >
            <FontAwesomeIcon
              icon={mapImage[icon]}
              className="w-[50%] h-[50%] object-contain text-[#304a6c] md:text-[#163759]  "
            />
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
              {title}
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
              {content}
            </p>
          </div>
        </div>
      );
    })
  );
};

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className="font-poppins font-semibold xs:text-[45x] text-[40px] text-white xs:leading-[75px] leading-[65px] w-full">
        “You focus on connections,
        <br className="sm:block hidden" /> we&apos;ll install the perfection.”
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right network installation company, you can enhance your
        connectivity, ensure stable WiFi, and save time. But with numerous
        service providers in the market, choosing us ensures you get top-notch
        service and peace of mind.
      </p>
      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      <FeatureCard />
      {/* {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))} */}
    </div>
  </section>
);

export default Business;
