import { motion } from 'framer-motion'
import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 glass-morphism rounded-[10px] mb-2 animate-pulse">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">Fast</span> & {" "}
          <span className="text-white">Secure</span> Connection
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>{" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0 ">
          <GetStarted /> 
        </div>
      </div>

      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">WiFi Installation</h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        WiSetFi specializes in providing reliable and secure WIFI installation services to homes,
        businesses, and organizations of all sizes. We offer tailored solutions to meet your specific needs.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
    >
      <img src={robot} alt="billing"  className="w-[100%] h-[100%] relative z-[5] drop-shadow-2xl" />

      {/* gradient start */}
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      {/* gradient end */}
    </motion.div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>

  </section>
)

export default Hero
