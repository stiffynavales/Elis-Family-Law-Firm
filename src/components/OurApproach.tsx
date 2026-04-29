import styles from "./OurApproach.module.css";

const steps = [
  {
    num: "01",
    icon: "🤝",
    title: "Listen",
    desc: "We begin with a confidential consultation to deeply understand your situation, goals, and concerns without judgement.",
  },
  {
    num: "02",
    icon: "📋",
    title: "Strategise",
    desc: "Our partners craft a personalised legal strategy tailored to your unique circumstances, risks, and desired outcomes.",
  },
  {
    num: "03",
    icon: "⚡",
    title: "Advocate",
    desc: "We represent you with tenacity and precision — in mediation, negotiation, or the courtroom — until your goals are achieved.",
  },
];

export default function OurApproach() {
  return (
    <section className={styles.section} id="approach">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">How We Work</p>
          <div className="divider-gold" style={{ margin: "0 auto 24px" }} />
          <h2 className={`section-title section-title--dark ${styles.title}`}>
            Our Approach <em>To Winning For You</em>
          </h2>
          <p className={styles.subtitle}>
            A streamlined, client-focused process built on trust, transparency, and decisive action.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={step.num} className={styles.step} id={`approach-step-${i + 1}`}>
              {/* Connector line */}
              {i < steps.length - 1 && <div className={styles.connector} aria-hidden="true" />}

              <div className={styles.circle}>
                <span className={styles.stepIcon}>{step.icon}</span>
                <span className={styles.stepNum}>{step.num}</span>
              </div>

              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
