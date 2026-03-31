import { motion } from "framer-motion";
import styles from "../style";
import { Footer, NavBar } from "../utils";
import ServiceCard from "../utils/ServiceCard";
import { services } from "../constants";

const Services = () => (
  <div className="bg-[#00040f] w-full overflow-hidden min-h-screen relative">
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
    <div className="absolute z-[0] w-[40%] h-[40%] -left-[20%] top-0 pink__gradient" />

    <div className={`w-full z-[999] ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>

    <div className={`mt-40 ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full flex justify-center items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]"
          >
            <h2 className={`flex justify-center ${styles.heading2}`}>
              Our Services
            </h2>
            <div className="w-full flex justify-center md:mt-0 mt-6">
              <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                Experience seamless connectivity and unlock your digital
                potential with WiSetFi&apos;s reliable and secure WIFI
                installation services.
              </p>
            </div>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-10 w-full relative z-[1]">
            {services.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard {...card} />
              </motion.div>
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
