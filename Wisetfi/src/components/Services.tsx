// eslint-disable-next-line no-unused-vars
import styles from "../style";
import { Footer, NavBar } from "../utils";
import ServiceCard from "../utils/ServiceCard";
import { services } from "../constants";
const Services = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section
          className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
        >
          <div className="w-full flex justify-center items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
            <h2 className={` flex justify-center ${styles.heading2}`}>
              Our Services
            </h2>
            <div className="w-full flex justify-center md:mt-0 mt-6">
              <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                Experience seamless connectivity and unlock your digital
                potential with WiSetFi&apos;s reliable and secure WIFI
                installation services.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1]">
            {services.map((card) => (
              <ServiceCard key={card.id} {...card} />
            ))}
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

export default Services;
