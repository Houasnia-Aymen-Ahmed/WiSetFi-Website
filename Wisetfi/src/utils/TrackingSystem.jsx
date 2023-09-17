import { tracker } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faClose,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const TrackingSystem = () => {
  return (
    <div id="tracking" className="mx-auto py-10">
      <div className="flex flex-col gap-16 glass p-10 text-white">
        <div className="flex flex-row justify-around top">
          <div className="flex">
            <h5>
              ORDER <span className=" text-[#387ac0] font-bold">#Y34XDHR</span>
            </h5>
          </div>
          <div className="flex flex-col text-sm text-right">
            <p className="mb-0">
              Expected Arrival <span>01/12/19</span>
            </p>
            <p>
              Client Id:{" "}
              <span className="font-bold">234094567242423422898</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between items-stretch gap-16 px-20 ">
          <div className="flex justify-between items-center  ">
            {tracker.map((step, index) => (
              <React.Fragment key={step.id}>
                <div
                  className={`rounded-full  ${step.state === 1 ? "bg-[#387ac0]" : "bg-gray-500"} h-12 w-12 flex items-center justify-center text-white font-bold`}
                >
                  <FontAwesomeIcon
                    icon={step.state === 1 ? faCheck : faClose} />
                </div>
                {index !== tracker.length - 1 && (
                  <div
                    className={`flex-auto border-t-8 ${index + 1 < tracker.length
                        ? tracker[index + 1].state === 1
                          ? "border-[#387ac0]"
                          : "border-gray-500"
                        : "border-gray-500"}  `}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex flex-row justify-between items-center ">
            {tracker.map((step) => (
              <div
                key={step.id}
                className="flex flex-col justify-center items-center gap-4 "
              >
                <FontAwesomeIcon icon={step.img} className="w-16 h-16" />
                <p className=" w-20 items-center text-center font-bold">
                  {step.description}
                </p>
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className="text-[#387ac0] h-6 cursor-pointer tooltip "
                />
                <p className="tooltip-text"> {step.tooltip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingSystem;
