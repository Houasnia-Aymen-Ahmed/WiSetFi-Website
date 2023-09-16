import axios from "../api/axios";
import { useEffect, useState } from "react";
import { service01, service02, service03 } from "../../assets";

const ServiceCard = () => {
  const mapImage = {
    service01: service01,
    service02: service02,
    service03: service03,
  };
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState("");

  const getApiData = async () => {
    try {
      const res = await axios.get("/services");
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
      const { serviceId, content, icon, title } = post;
      return (
        <div
          key={serviceId}
          className="flex flex-col justify-start px-10 py-12 rounded-[20px] max-w-[400px] feedback-card"
        >
          <div className="flex flex-col items-center">
            <img
              src={mapImage[icon]}
              alt={title}
              className=" h-[300px] rounded-[20px]"
            />
            <div className="flex flex-col">
              <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white mt-3 ">
                {title}
              </h4>
            </div>
          </div>
          <p className="font-poppins font-normal text-start text-[18px] leading-[32px] text-white mt-10">
            {content}
          </p>
        </div>
      );
    })
  );
};

export default ServiceCard;
