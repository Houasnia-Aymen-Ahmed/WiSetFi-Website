import { motion } from 'framer-motion'
import styles from '../style'
import Button from './Button'

const Cta = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col glass-morphism rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
          Everything you need for a great network experience. Best coverage, Best bandwidth, Best network.<strong><i> &quot;WiSetFi&quot; </i></strong>
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button styles={''}/>
      </div>
    </motion.section>
  )
}

export default Cta;
