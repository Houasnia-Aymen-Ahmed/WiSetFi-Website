// eslint-disable-next-line no-unused-vars
import styles from "../style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  Cta,
  Footer,
  Hero,
  NavBar,
  Stats,
  Testimonials,
} from "../utils";

const Home = () => (
  <div className=" bg-gradient-to-r from-[#304a6c] to to-[#163759] w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>

    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <Cta />
        <Footer />
      </div>
    </div>
  </div>
);
export default Home;
