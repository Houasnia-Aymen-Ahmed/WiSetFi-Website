import { useEffect, useState } from "react";
import { people01, people02, people03, quotes } from "../../assets";
import axios from "../api/axios";

const FeedbackCard = () => {
  const mapImage = {
    people01: people01,
    people02: people02,
    people03: people03,
  };
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState("");
  const getApiData = async () => {
    try {
      const res = await axios.get("/feedbacks");
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
    data.map((post) => {
      const { feedbackId, content, icon, title, name } = post;
      return (
        <div
          key={feedbackId}
          className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"
        >
          <img
            src={quotes}
            alt="double_quotes"
            className="w-[42.6px] h-[27.6px] object-contain"
          />
          <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10 ">
            {content}
          </p>

          <div className="flex flex-row">
            <img
              src={mapImage[icon]}
              alt={name}
              className="w-[48px] h-[48px] rounded-full"
            />
            <div className="flex flex-col ml-4">
              <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
                {name}
              </h4>
              <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                {title}
              </p>
            </div>
          </div>
        </div>
      );
    })
  );
};

export default FeedbackCard;
