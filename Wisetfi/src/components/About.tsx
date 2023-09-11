import { NavBar, Footer, Testimonials, Cta } from "../utils";
import styles from "../style";
import { about } from "../constants";
import AboutCrd from "../utils/AboutCrd";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-[#304a6c] to to-[#163759] w-full overflow-hidden">
      <div
        className={`fixed w-full z-[999] ${styles.paddingX} ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter} mt-40`}>
        <div className={` w-[50%] text-white text-justify text-[22.5px] `}>
          <div className="rounded-xl glass-blurred p-5">
            At <strong className="text-[25px] text-[#163770] ">WiSetFi</strong>,
            we&apos;re not just a company; we&apos;re your partner in creating
            seamless and reliable WiFi experiences. With a deep-rooted passion
            for technology and a commitment to innovation, we&apos;ve been
            connecting individuals and businesses to the digital world since
            2023.
          </div>
        </div>
      </div>
      <div className={` ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="w-full">
            {about.map((abt) => (
              <AboutCrd key={abt.id} {...abt} />
            ))}
          </div>
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Testimonials />
          <Cta />
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

export default About;
