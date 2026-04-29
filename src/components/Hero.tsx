import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* Background */}
      <div className={styles.bgWrap}>
        <Image
          src="/hero-bg.png"
          alt="Family law background"
          fill
          priority
          quality={90}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className={styles.overlay} />
      </div>

      {/* Decorative side arcs */}
      <div className={styles.arcLeft} />
      <div className={styles.arcRight} />

      {/* Content */}
      <div className={`container ${styles.contentContainer}`}>
        <div className={styles.glassBox}>
          <h1 className={styles.headline}>
            Your Future <span className={styles.highlight}>Starts Here</span>
          </h1>
          
          <p className={styles.subtext}>
            Divorce & Family Law Attorneys Serving Durham, Raleigh, Cary, the Triangle,
            and Throughout North Carolina.
          </p>
          
          <div className={styles.starText}>
            <span>★</span>
            <span>LED BY BOARD CERTIFIED SPECIALISTS IN FAMILY LAW</span>
            <span>★</span>
          </div>
          
          <div className={styles.actions}>
            <a href="#call" className={styles.btnSolid}>
              CALL NOW <span className={styles.arrow}>→</span>
            </a>
            <a href="#contact" className={styles.btnOutline}>
              SCHEDULE A CONSULTATION
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
