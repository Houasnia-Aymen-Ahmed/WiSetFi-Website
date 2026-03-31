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
  const isReverse = style.includes("flex-col-reverse");

  return (
    <section className={`my-20 ${style} items-center gap-10`}>
      {isReverse && (
        <div className={`${styleimg} glass-morphism p-2 rounded-3xl`}>
          <img
            src={img}
            alt={title}
            className="w-full h-full rounded-[20px] relative z-[5] object-cover"
          />
        </div>
      )}

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>{title}</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{content}</p>
      </div>

      {!isReverse && (
        <div className={`${layout.sectionImg} glass-morphism p-2 rounded-3xl`}>
          <img
            src={img}
            alt={title}
            className="w-full h-full rounded-[20px] relative z-[5] object-cover"
          />
        </div>
      )}
    </section>
  );
};

export default AboutCrd;
