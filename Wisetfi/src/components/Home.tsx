// eslint-disable-next-line no-unused-vars
import styles from "../style";
import {
  Business,
  Cta,
  Footer,
  Hero,
  NavBar,
  Stats,
} from "../utils";

const Home = () => (
  <div className=" bg-gradient-to-r from-[#304a6c] to to-[#163759] w-full overflow-hidden">
    <div
      className={`fixed w-full z-[999] ${styles.paddingX} ${styles.flexCenter}`}
    >
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>

    <div className={`mt-40 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Cta />
        <Footer />
      </div>
    </div>
  </div>
);
export default Home;
