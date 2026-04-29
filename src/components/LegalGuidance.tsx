import styles from "./LegalGuidance.module.css";

const services = [
  {
    icon: "⚖",
    title: "Divorce & Separation",
    desc: "Compassionate guidance through contested and uncontested divorces, protecting your assets and future.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Child Custody",
    desc: "Dedicated advocacy for custody arrangements that prioritise your children's wellbeing and stability.",
  },
  {
    icon: "💍",
    title: "Prenuptial Agreements",
    desc: "Carefully crafted agreements that protect both parties and establish clear expectations before marriage.",
  },
  {
    icon: "🏠",
    title: "Property Division",
    desc: "Strategic negotiation and litigation to ensure equitable division of marital assets and property.",
  },
  {
    icon: "💼",
    title: "Spousal Support",
    desc: "Expert representation in establishing, modifying, or contesting spousal maintenance arrangements.",
  },
  {
    icon: "📜",
    title: "Estate Planning",
    desc: "Wills, trusts, and comprehensive estate plans designed to protect your family for generations.",
  },
  {
    icon: "🛡",
    title: "Domestic Violence",
    desc: "Swift, confidential legal protection and restraining orders for victims of domestic abuse.",
  },
  {
    icon: "👶",
    title: "Adoption",
    desc: "Streamlined legal support through every step of the adoption process, making your family complete.",
  },
];

export default function LegalGuidance() {
  return (
    <section className={styles.section} id="practice-areas">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">What We Do</p>
          <div className="divider-gold" style={{ margin: "0 auto 24px" }} />
          <h2 className={`section-title section-title--light ${styles.title}`}>
            Legal Guidance For Every <em>Step Forward</em>
          </h2>
          <p className={styles.subtitle}>
            Our practice spans the full spectrum of family law. Whatever challenge
            you face, our experienced partners provide the focused expertise you need.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((svc, i) => (
            <div key={svc.title} className={styles.card} id={`service-${i + 1}`}>
              <div className={styles.cardIcon}>{svc.icon}</div>
              <h3 className={styles.cardTitle}>{svc.title}</h3>
              <p className={styles.cardDesc}>{svc.desc}</p>
              <span className={styles.cardLink}>Learn More →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
