import styles from "./Footer.module.css";

const footerLinks = {
  "Practice Areas": [
    "Divorce & Separation",
    "Child Custody",
    "Prenuptial Agreements",
    "Property Division",
    "Spousal Support",
    "Adoption",
  ],
  "Our Firm": [
    "About Us",
    "Meet Our Partners",
    "Our Approach",
    "Client Testimonials",
    "Certifications",
  ],
  Resources: [
    "Blog & Insights",
    "FAQs",
    "Legal Glossary",
    "Free Consultation",
    "Referral Program",
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>⚖</span>
            <span className={styles.logoText}>
              Elis <em>Family Law</em>
            </span>
          </div>
          <p className={styles.tagline}>
            Compassionate legal counsel for life&apos;s most important moments.
            Standing by your side from the first consultation to final resolution.
          </p>
          <div className={styles.contact}>
            <a href="tel:+15124450220" className={styles.contactItem} id="footer-phone">
              📞 (512) 445-0220
            </a>
            <a href="mailto:info@elisfamilylaw.com" className={styles.contactItem} id="footer-email">
              ✉ info@elisfamilylaw.com
            </a>
          </div>
          <div className={styles.socials}>
            {["LinkedIn", "Facebook", "Twitter", "Instagram"].map((s) => (
              <a key={s} href="#" className={styles.social} id={`footer-social-${s.toLowerCase()}`} aria-label={s}>
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading} className={styles.col}>
            <h4 className={styles.colHeading}>{heading}</h4>
            <ul className={styles.colList}>
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className={styles.colLink}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              © {year} Elis Family Law. All rights reserved. Attorney Advertising.
            </p>
            <div className={styles.legal}>
              <a href="#" className={styles.legalLink}>Privacy Policy</a>
              <a href="#" className={styles.legalLink}>Terms of Use</a>
              <a href="#" className={styles.legalLink}>Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
