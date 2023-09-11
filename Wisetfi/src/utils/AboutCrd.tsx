import React from "react";
import { layout } from "../style";
import styles from "../style";

interface AboutCrdProps {
  title: string;
  content: string;
  img: string;
  style: string;
  styleimg: string;
}

const AboutCrd: React.FC<AboutCrdProps> = ({
  title,
  content,
  img,
  style,
  styleimg,
}) => {
  return (
    <section className={style}>
      {style === layout.sectionReverse && (
        <div className={styleimg}>
          <img
            src={img}
            alt={title}
            className="w-[100%] h-[100%] rounded-3xl relative z-[5]"
          />
        </div>
      )}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>{title}</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{content}</p>
      </div>
      {style === layout.section && (
        <div className={layout.sectionImg}>
          <img
            src={img}
            alt="billing"
            className="w-[100%] h-[100%] rounded-3xl relative z-[5]"
          />
        </div>
      )}
    </section>
  );
};

export default AboutCrd;
