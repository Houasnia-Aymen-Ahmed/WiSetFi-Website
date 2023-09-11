import styles from '../style'
import Button from './Button'

const Cta = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
          Everything you need for a great network experience. Best coverage, Best bandwith, Best network.<strong><i> &quot;WiSetFi&quot; </i></strong>
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button styles={''}/>
      </div>
    </section>
  )
}

export default Cta;