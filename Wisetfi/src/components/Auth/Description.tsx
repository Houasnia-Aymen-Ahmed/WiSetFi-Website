import styles from "../../style";

const Description = () => {
  return (
    <div className="w-full flex flex-col md:justify-center justify-start px-5 ">
      <h2 className={` flex justify-center ${styles.heading2}`}>Welcome!</h2>
      <div className="w-full flex flex-col md:mt-0 mt-6">
        <p className={`${styles.moto} text-center my-[-10px] `}>
          &quot;Connect, Empower, Thrive&quot;
        </p>
        <p
          className={`${styles.paragraph} text-[13px] sm:text-[17px] sm:text-justify my-[50px] px-3`}
        >
          &emsp;&emsp;to WiSetFi, a leading network services company based in
          Batna, Algeria. We provide reliable and secure WiFi installation
          services to homes, businesses, and organizations of all sizes. Our
          team of experts works closely with our clients to ensure that they
          receive top-quality services and exceptional customer support. We are
          committed to innovation and continuous improvement, and we stay
          up-to-date with the latest technological advancements.
        </p>
      </div>
    </div>
  );
};

export default Description;
