"use client";
import { useState } from "react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    id: "testimonial-1",
    name: "Rachel T.",
    location: "Austin, TX",
    rating: 5,
    text: "Elis Family Law changed my life. Margaret took on my difficult divorce case and fought tirelessly to ensure my children and I were protected. Her knowledge, compassion, and strategic thinking were unmatched. I felt truly heard and valued throughout the entire process.",
    case: "Complex Divorce & Child Custody",
    initials: "RT",
  },
  {
    id: "testimonial-2",
    name: "James H.",
    location: "Dallas, TX",
    rating: 5,
    text: "Daniel Whitmore secured a custody arrangement that I genuinely believed was impossible. His courtroom presence is commanding, yet he took the time to explain every step with patience and clarity. I cannot recommend Elis Family Law highly enough to any parent fighting for their children.",
    case: "Child Custody",
    initials: "JH",
  },
  {
    id: "testimonial-3",
    name: "Priya N.",
    location: "Houston, TX",
    rating: 5,
    text: "Sofia guided me through estate planning after my divorce with incredible expertise. She helped me understand my options in plain language and designed a plan that genuinely secures my daughter's future. The entire team is professional, warm, and genuinely invested in their clients.",
    case: "Estate Planning",
    initials: "PN",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section} id="testimonials">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Client Stories</p>
          <div className="divider-gold" style={{ margin: "0 auto 24px" }} />
          <h2 className={`section-title section-title--light ${styles.title}`}>
            Hear What Our <em>Clients Have to Say</em>
          </h2>
        </div>

        {/* Cards */}
        <div className={styles.cards}>
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`${styles.card} ${i === active ? styles.active : ""}`}
              id={t.id}
              onClick={() => setActive(i)}
            >
              <div className={styles.quote}>&ldquo;</div>
              <p className={styles.text}>{t.text}</p>
              <div className={styles.stars} aria-label={`${t.rating} out of 5 stars`}>
                {"★".repeat(t.rating)}
              </div>
              <div className={styles.caseTag}>{t.case}</div>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.initials}</div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.location}>{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className={styles.dots} role="tablist" aria-label="Testimonials navigation">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
              onClick={() => setActive(i)}
              role="tab"
              aria-selected={i === active}
              aria-label={`View testimonial from ${t.name}`}
              id={`dot-${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
