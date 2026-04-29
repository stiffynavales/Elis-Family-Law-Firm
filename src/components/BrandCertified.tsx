import styles from "./BrandCertified.module.css";

export default function BrandCertified() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        {/* Badge */}
        <div className={styles.badgeWrap} aria-label="Board Certified Law Firm">
          <div className={styles.badge}>
            <div className={styles.badgeOuter}>
              <div className={styles.badgeInner}>
                <span className={styles.badgeIcon}>⚖</span>
                <span className={styles.badgeTextTop}>Board</span>
                <span className={styles.badgeTextMain}>CERTIFIED</span>
                <span className={styles.badgeTextBottom}>Family Law</span>
                <div className={styles.badgeStars}>★★★★★</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <p className="section-label">Our Credentials</p>
          <div className="divider-gold" />
          <h2 className={`section-title section-title--dark ${styles.heading}`}>
            Giving Answers so You Can Be Heard &amp; Understood
          </h2>
          <p className={styles.body}>
            Elis Family Law is proud to be Board Certified in Family Law by the
            State Bar Association — a distinction held by fewer than 3% of
            practicing attorneys. This certification reflects our unwavering
            commitment to excellence, continuing legal education, and the highest
            ethical standards.
          </p>
          <p className={styles.body}>
            When you work with us, you benefit from certified expertise that has
            been rigorously tested and peer-reviewed, ensuring you receive counsel
            of the highest calibre at every stage of your case.
          </p>
          <a href="#contact" className="btn-gold" id="certified-cta">
            Work With Certified Attorneys →
          </a>
        </div>
      </div>
    </section>
  );
}
