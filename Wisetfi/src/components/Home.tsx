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
  <div className="bg-[#00040f] w-full overflow-hidden min-h-screen relative">
    {/* Background gradients for atmosphere */}
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
    <div className="absolute z-[0] w-[40%] h-[40%] -left-[20%] top-0 pink__gradient" />

    <div className={`w-full z-[999] ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>

    <div className={`mt-10 ${styles.flexStart}`}>
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
