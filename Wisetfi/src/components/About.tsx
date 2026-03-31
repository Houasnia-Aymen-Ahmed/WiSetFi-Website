import { motion } from "framer-motion";
import { NavBar, Footer, Testimonials, Cta } from "../utils";
import styles from "../style";
import { about } from "../constants";
import AboutCrd from "../utils/AboutCrd";

const About = () => {
  return (
    <div className="bg-[#00040f] w-full overflow-hidden relative min-h-screen">
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
      <div className="absolute z-[0] w-[40%] h-[40%] -left-[20%] top-0 pink__gradient" />

      <div className={`w-full z-[999] ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`${styles.paddingX} ${styles.flexCenter} mt-40`}
      >
        <div className="md:w-[60%] w-full text-white text-center text-[22.5px]">
          <div className="rounded-xl glass-morphism p-8">
            At <strong className="text-[25px] text-secondary">WiSetFi</strong>,
            we&apos;re not just a company; we&apos;re your partner in creating
            seamless and reliable WiFi experiences. With a deep-rooted passion
            for technology and a commitment to innovation, we&apos;ve been
            connecting individuals and businesses to the digital world since
            2023.
          </div>
        </div>
      </motion.div>

      <div className={`my-20 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="w-full">
            {about.map((abt, index) => (
              <motion.div
                key={abt.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <AboutCrd {...abt} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className={`my-20 ${styles.paddingX} ${styles.flexStart}`}>
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
